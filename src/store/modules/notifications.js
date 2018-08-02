import _ from 'underscore';

export default {
    state: {
        all_notifications: []
    },
    getters: {

        notifications (state,getters,rootState) {

            return state.all_notifications.map(function(notification) {
                if(notification.type == 'task') {
                    const team_name = (rootState.teams.all_teams.filter(team => team.id == notification.data.team_id)[0] || {}).name
                    const pool_name = (rootState.pools.all_pools.filter(pool => pool.id == notification.data.pool_id)[0] || {}).name
                    const task_name = (rootState.tasks.all_tasks.filter(task => task.id == notification.data.task_id)[0] || {}).title

                    notification.data.team_name = team_name;
                    notification.data.pool_name = pool_name;
                    notification.data.task_name = task_name;

                    return notification;

                } else {
                    return notification;
                }

            })

        }

    },
    mutations: {

        setAllNotifications (state,notifications) {

            state.all_notifications = notifications;

        }

    },
    actions: {

        getNotifications ({ commit }) {
            
            return new Promise((resolve, reject) => {

                this.$api.notification.get().then(response => {
                            
                    var res = response.body;

                    if (res.error) return reject(res.error);

                    commit('setAllNotifications',res.data);

                    resolve()

                },(response)=>{
                    reject(response.body)
                });
              
            })

        }

    }
}