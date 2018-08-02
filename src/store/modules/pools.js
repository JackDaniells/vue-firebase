import _ from 'underscore';

export default {
    // namespaced: true,
    state: {
        all_pools: []
    },
    
    getters: {

        pools (state,getters,rootState) {

            return _.map(state.all_pools,(pool)=>{
				return {
                    id: pool.id,
                    team_id: pool.team_id,
                    name: pool.name,			
                    tasks_total: getters.tasks.filter(t => t.pool == pool.id && !t.user).length,		
					new_tasks:  rootState.notifications.all_notifications.filter(notification => notification.type == 'task' && notification.data.pool_id == pool.id && !notification.seen).length || 0
				}
			});

        }

    },
    mutations: {

        setAllPool (state,pools) {

            state.all_pools = pools;

        }

    },
    actions: {

        getPools ({ commit }) {
            
            return new Promise((resolve, reject) => {
                
                this.$api.pool.get().then(response => {
                            
                    var res = response.body;

                    if (res.error) return reject(res.error);

                    commit('setAllPool',res.data);

                    resolve()

                },(response)=>{
                    reject(response.body)
                });
              
            })

        }

    }
}