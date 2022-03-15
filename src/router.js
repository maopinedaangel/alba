import vueRouter from 'vue-router'

import Home from './components/Home'
import Patients from './components/Patients'
import History from './components/History'
import MedicalForm from './components/MedicalForm'
import EntryRecord from './components/EntryRecord'
import NewPatient from './components/NewPatient'
import SocioeconomicForm from './components/SocioeconomicForm'

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
            path: '/patients',
            name: "Patients",
            component: Patients
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
            component: MedicalForm
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