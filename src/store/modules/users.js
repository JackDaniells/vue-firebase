
import _ from 'underscore';

export default {
    state: {
        users: [],
        user: {}
    },
    getters: {

        users (state, getters){
			return state.users
        },
        
        user (state, getters){
            return state.user
        }

    },
    mutations: {

		setUsers (state, val){
			state.users = val || []
        },
        
        setUser (state, val){
			state.user = val || {}
		}

    },
    actions: {

        getUsers ({ commit, state }) {

            return new Promise((resolve, reject) => {

                this.$api.user.get().then(response => {
                            
                    var res = response.body;

                    if (res.error) return reject(res.error);

                    commit('setUsers',res.data);

                    resolve()

                },(response)=>{
                    reject(response.body)
                });
              
            })

        }

    }
}