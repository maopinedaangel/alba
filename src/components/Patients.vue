<template>
    <div id="div-patients">
        <div class="div-array-buttons">
            <div class="btn-menu"><p>Ver todos</p></div>
            <div class="btn-menu"><p>Buscar</p></div>
            <div class="btn-menu" v-on:click="createPatient"><p>Agregar</p></div>
        </div>
        <div class="tab" id="tab-all-patients">
            <ul>
                <li v-for="(patient, k) in patients" :key="k" v-on:click="showPatient(patient.patientId)">
                    <p>Nombre: {{ patient.firstName }}  {{ patient.lastName }}</p>             
                    <p>Edad: {{ calculateAge(patient.birthday) }}</p>
                    <p>Ciudad: {{ patient.occupation }}</p>
                </li>
            </ul>            
        </div>
        <div class="tab" id="tab-find-patient">
        </div>
        <div class="tab" id="tab-add-patient">
        </div>        
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
            //this.patients.push({id: 1, name: "Gustavo Fernández", age: 35, city: 'Guadalajara'});
            //this.patients.push({id: 2, name: "Abigail Guzmán", age: 28, city: 'Jalisco'});
            let url = this.$store.state.apiUrl
            url += "/patients-data"
            axios
            //.get('http://localhost:8000/patients-data')
            .get(url)
            .then( response => {
                //console.log(response.data)
                this.patients = response.data
            })
            .catch (err => {
                console.log("Hubo un error al cargar los pacientes.")
            })
        },
        
        showPatient: function(index) {
            //console.log("index: " + index)
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
</style>

