import Vuex from 'vuex'
import Vue from 'vue'
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        //apiUrl: "http://localhost:8000",
        apiUrl: "https://api-auriga.herokuapp.com",
        token: localStorage.getItem("user-token") || "",
        status: "",
        userStatus: "",
        profile: {}
    },
    getters: {
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status,
        api: state => state.apiUrl,
        getProfile: state => state.profile,
        isProfleLoaded: state => !!state.profile.name
    },
    actions: {
        authRequest: ({commit, dispatch}, user) => {
            const formData = new FormData();
            formData.append("username", user.username);
            formData.append("password", user.password);
            let path = store.getters.api;
            path += "/token";
            return new Promise((resolve, reject) => {
                commit("authRequest");
                axios({url: path, data: formData, method: "POST"})
                .then(resp => {
                    const token = resp.data.access_token;
                    localStorage.setItem("user-token", token);
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                    //console.log(token);
                    commit("authSuccess", token);
                    dispatch("userRequest");
                    resolve(resp);
                })
                .catch(err => {
                    commit("authError", err);
                    localStorage.removeItem("user-token");
                    reject(err);
                })
            })
        },
        authLogout: ({commit, dispatch}) => {
            return new Promise((resolve, reject) => {
                commit("authLogout");
                localStorage.removeItem("user-token");
                delete axios.defaults.headers.common["Authorization"];
                resolve();
            })
        },
        userRequest: ({commit, dispatch}) => {
            commit("userRequest");
            let path = store.getters.api;
            path += "/users/me";            
            axios({url: path})
            .then(resp => {
                //Revisar. Código modificado.
                let user = resp.data;
                //console.log("Resultados");
                console.log(user);
                //console.log(user.username);
                commit("userSuccess", user);               
                /*Así aparece en el tutorial*/                
                //commit("userSuccess", resp);
            })
            .catch(() => {
                commit("userError");
                dispatch("authLogout");
            })
        }
    }, 
    mutations: {
        authRequest: (state) => {
            state.status = "loading";
        },
        authSuccess: (state, token) => {
            state.status = "success";
            state.token = token;
        },
        authError: (state) => {
            state.status = "error";
        },
        authLogout: (state) => {
            state.token = "";
            state.profile = {};
        },
        userRequest: (state) => {
            state.userStatus = "loading";
        },
        userSuccess: (state, user) => {
            state.userStatus = "success";
            console.log("User success");
            /*Así aparece en el tutorial*/
            //Vue.set(state, profile, user);
            state.profile = user;
            console.log(store.getters.getProfile.username);
        },
        userError: (state) => {
            state.userStatus = "error"
        }
    }
});

export default store;
