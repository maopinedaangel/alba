import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        apiUrl: "http://localhost:8000",
        //apiUrl: "https://api-auriga.herokuapp.com"
    },
    getters: {

    },
    actions: {

    }, 
    mutations: {

    }
});

export default store;
