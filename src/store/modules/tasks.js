import _ from 'underscore';

export default {
    state: {
        all_tasks: []
    },

    getters: {

        tasks (state,getters,rootState) {

            return state.all_tasks || []

        }

    },

    mutations: {

        setAllTasks (state,tasks) {

            state.all_tasks = tasks;

        }

    },
    actions: {

        getTasks ({ commit }) {
            
            return new Promise((resolve, reject) => {

                this.$api.task.get().then(response => {
                            
                    var res = response.body;

                    if (res.error) return reject(res.error);

                    commit('setAllTasks',res.data);

                    resolve()

                }, (response)=>{
                    reject(response.body)
                });
              
            })

        }

    }
}