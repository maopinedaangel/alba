<template>
    <div v-if="patientLoaded" id="div-history">
        <div id="div-profile">
            <h1>Perfil del paciente</h1>
            <div id="div-photo">
                <img class="img-profile" src="../assets/img/person.png" alt="Foto Paciente">
            </div>
            <div id="div-data">
                <p>Nombre: {{ patient.firstName }} {{ patient.lastName }}</p>
                <p>Edad: {{ calculateAge(patient.birthday) }} </p>
                <p>No. Expediente: {{ patient.code }}</p>
                <p>Ocupación: {{ patient.occupation }}</p>
            </div>
        </div>
        <div id="div-treatment">
            <h2>Historial de tratamientos</h2>
            <Treatment v-for="(treatment, k) in treatments" :key="k" :id="treatment.id" :idPatient="patientId" />                    
        </div>
        <!--
        <div v-if="patientLoaded">
            <div v-for="(treatment, k) in treatments" :key="k">
                <p>Código de Ingreso: {{ treatment.code }}</p>
                <p>Fecha de Ingreso: {{ treatment.entryDate }}</p>
                <p>Fecha de Alta: {{ treatment.wayOutDate }}</p>                        
            </div>
        </div>
        -->

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
            //patientId: this.id,
            patientId: "",
            patient: "",
            patientLoaded: false,
            treatments: []
        }
    },
    methods: {
        calculateAge: function(birthday) {
            return utils.calculateAge(birthday)
        },
        loadPatientData: function() {
            let url = this.$store.state.apiUrl;
            url += "/patient-data/" + this.patientId;
            console.log("Id para la petición: " + this.patientId);
            axios
            .get(url)
            .then(response => {
                this.patient = response.data;              
                this.loadTreatments();
                console.log("Ejecutando loadPatientData");
            })
            .catch(err => {
                console.log("Se presentó un error al intentar consultar la historia.")
            })
        },
        loadTreatments: function() {
            let url = this.$store.state.apiUrl;
            url += "/patient-treatments/" + this.patient.historyId;
            console.log(url);
            axios
            .get(url)            
            .then(response => {
                this.treatments = response.data;
                console.log("¿Cuántos tratamientos? " + this.treatments.length);
                this.patientLoaded = true;                 
            })
            .catch(err => {
                console.log("Se presentó un error al intentar consultar la historia.");
            })
        }
    },
    created: function() {
        this.patientId = this.$route.params.id;
        console.log("id recibido: " + this.patientId);        
        this.loadPatientData();
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
    padding: 1rem;
    width: 30%;
}
#div-treatment {
    padding: 1rem;
    width: 70%;
}
.img-profile {
    width: 15vw;
    /*margin-left: auto;
    margin-right: auto;*/
}
</style>