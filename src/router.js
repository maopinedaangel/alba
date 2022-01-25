import vueRouter from 'vue-router'

import Home from './components/Home'
import Patients from './components/Patients'
import History from './components/History'
import MedicalForm from './components/MedicalForm'
import EntryRecord from './components/EntryRecord'

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
            component: History
        },
        {
            path: '/entry-record',
            name: "EntryRecord",
            component: EntryRecord
        },       
        {
            path: '/medical-form',
            name: "MedicalForm",
            component: MedicalForm
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.scrollTo(0,0);
    next();
})

export default router;