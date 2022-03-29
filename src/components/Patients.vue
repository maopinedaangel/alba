<template>
    <div id="div-patients">
        <div class="div-array-buttons">
            <div class="btn-menu"><p>Ver todos</p></div>
            <div class="btn-menu"><p>Buscar</p></div>
            <div class="btn-menu" v-on:click="createPatient"><p>Agregar</p></div>
        </div>
        <div class="tab" id="tab-all-patients">
            <div class="card-patient" v-for="(patient, k) in patients" :key="k" v-on:click="showPatient(patient.patientId)">
                <img class="img-patient" src="../assets/img/person.png" alt="Foto Paciente">
                <div class="patient-data">
                    <p class="p-name" >{{ patient.firstName }}  {{ patient.lastName }}</p>             
                    <p>Edad: {{ calculateAge(patient.birthday) }}</p>
                    <p>No. Expediente: {{ patient.code }}</p>
                    <p>{{ patient.occupation }}</p>                    
                </div>                
            </div>
                    
        </div>
        <!--
        <div class="tab" id="tab-find-patient">
        </div>
        <div class="tab" id="tab-add-patient">
        </div>
        -->
    </div>
</template>


<script>
import utils from '../utils.js'
import axios from 'axios'
export default {
    name: 'Patients',
    data: function() {
        return {
            patients: [],
            activeTab: 1,
            edad: ""
        }
    },
    methods: {
        loadPatients: function() {
            let url = this.$store.state.apiUrl
            url += "/patients-data"
            axios
            .get(url)
            .then( response => {
                this.patients = response.data
            })
            .catch (err => {
                console.log("Hubo un error al cargar los pacientes.")
            })
        },
        
        showPatient: function(index) {
    	    this.$router.push( { name: "History",  params: { id: index } })              
        },
        calculateAge: function(birthday) {
            return utils.calculateAge(birthday)
        },
        createPatient: function() {
            this.$router.push( { name: "NewPatient" }) 
        }
        
    },
    created: function() {
        this.loadPatients();
    }
}
</script>



<style scoped>
li:nth-child(odd) {
    background-color: var(--clr-background);
}
li:nth-child(even) {
    background-color: var(--clr-light-background);
}
.tab {
    display: flex;
}
#tab-all-patients {
    display: flex;
    flex-wrap: wrap;
}
.card-patient {
    display: flex;
    width: 26vw;
    margin: 2vw;
    cursor: pointer;
}
.img-patient {
    width: 100px;
    height: 100px;
}
.patient-data {
    padding: 1rem;
}
.p-name {
    font-size: 21px;
    font-weight: bold;
}
</style>

