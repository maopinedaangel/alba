import vueRouter from 'vue-router'
import store from './store'

import Home from './components/Home'
import Patients from './components/Patients'
import History from './components/History'
import MedicalForm from './components/MedicalForm'
import EntryRecord from './components/EntryRecord'
import NewPatient from './components/NewPatient'
import SocioeconomicForm from './components/SocioeconomicForm'
import Login from './components/Login'


const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return;
    }
    next("/");
}

const ifAuthenticated = (to, from, next) => {
    if(store.getters.isAuthenticated) {
        next();
        return;
    }
    next("login");
}


const router = new vueRouter({
    mode: 'history',
    base: __dirname,

    routes: [
        {
            path: '/',
            name: "Home",
            component: Home
        },
        {
            path: '/login',
            name: "Login",
            component: Login,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/patients',
            name: "Patients",
            component: Patients,
            beforeEnter: ifAuthenticated
        },
        {
            path: '/history/:id',
            name: "History",
            component: History,
            props: true
        },
        {
            path: '/entry-record',
            name: "EntryRecord",
            component: EntryRecord,
            props: true
        },
        {
            path: '/socioeconomic-form',
            name: "SocioeconomicForm",
            component: SocioeconomicForm,
            props: true
        },   
        {
            path: '/medical-form',
            name: "MedicalForm",
            component: MedicalForm,
            props: true
        },
        {
            path: '/new-patient',
            name: "NewPatient",
            component: NewPatient
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0,0);
    next();
})

export default router;