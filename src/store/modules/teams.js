import _ from 'underscore';

export default {
    state: {
        all_teams: []
    },
    getters: {

        teams (state,getters,rootState) {

            return _.sortBy(_.map(state.all_teams,(team)=>{
				return {
					id: team.id,
					name: team.name,
					new_activities: _.reduce(_.where(rootState.notifications.all_notifications,{type: 'activity',team_id: team.id}),(memo,item)=>{ return memo + item.total; },0) || 0,
					new_tasks:  _.reduce(_.where(rootState.notifications.all_notifications,{type: 'task',team_id: team.id}),(memo,item)=>{ return memo + item.total; },0) || 0
				}
			}),(team)=>{ return team.name; });

        },

    },
    mutations: {

        setAllTeam (state,teams) {

            state.all_teams = teams;

        }

    },
    actions: {

        getTeams ({ commit }) {
            
            return new Promise((resolve, reject) => {

                this.$api.team.get().then(response => {
                            
                    var res = response.body;

                    if (res.error) return reject(res.error);

                    commit('setAllTeam',res.data);

                    resolve()

                },(response)=>{
                    reject(response.body)
                });
              
            })

        }

    }
}