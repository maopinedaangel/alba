<template>
    <div id="div-history">
        <div id="div-profile">
            <h1>Perfil del paciente</h1>
            <div id="div-photo">
                <img class="img-profile" src="" alt="">
            </div>
            <div id="div-data">
                <p>Nombre: {{ patient.firstName }} {{ patient.lastName }}</p>
                <p>Edad: {{ calculateAge(patient.birthday) }} </p>
                <p>Ocupación: {{ patient.occupation }}</p>
            </div>
        </div>
        <div id="div-treatment">
            <h2>Historial de tratamientos</h2>
            <Treatment :id="patientId" />
            <Treatment :id="patientId" />         
        </div>
    </div>
</template>


<script>
import Treatment from './Treatment.vue'
import axios from 'axios'
import utils from '../utils.js'
export default {
    name: 'History',
    props: ['id'],
    components: {
        Treatment
    },
    data: function() {
        return {
            patientId: this.id,
            patient: "",
            treatments: []
        }
    },
    methods: {
        calculateAge: function(birthday) {
            return utils.calculateAge(birthday)
        }
    },
    beforeCreate: function() {

    },
    created: function() {
        //this.id = this.$route.params.id
        //console.log(this.personId)
        let url = this.$store.state.apiUrl
        url += "/patient-data/" + this.patientId
        axios
        //.get("http://localhost:8000/patient-data/" + this.patientId)
        .get(url)
        .then(response => {
            //console.log(response.data)
            this.patient = response.data
        })
        .catch(err => {
            console.log("Se presentó un error al intentar consultar la historia.")
        })        
        this.treatments = [
            {

            }
        ]
    }

}
</script>


<style scoped>
#div-history {
    display: flex;
    height: 100%;
    overflow-y: auto;
}
#div-profile {
    /*background-color: aquamarine;*/
    width: 30%;
    //height: 100%;
    /*flex-grow: 1;*/
}
#div-treatment {
    /*background-color: pink;*/
    //height: 100%;
    width: 70%;
    /*flex-grow: 3;*/
}
</style>