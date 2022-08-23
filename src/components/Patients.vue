<template>
    <div id="div-patients">
        <div class="div-array-buttons">
            <div class="btn-menu"><p>Ver todos</p></div>
            <div class="btn-menu"><p>Buscar</p></div>
            <div class="btn-menu" v-on:click="createPatient"><p>Agregar</p></div>
        </div>
        <div class="div-list">
            <div class="card" v-for="(patient, k) in patients" :key="k" v-on:click="showPatient(patient.patientId)">
                <img src="../assets/img/person.png" alt="Foto Paciente" />
                <div>
                    <p class="p-name">{{ patient.firstName }} {{ patient.lastName }}</p>
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
import utils from "../utils.js";
import axios from "axios";
export default {
    name: "Patients",
    data: function () {
        return {
            patients: [],
            activeTab: 1,
            edad: "",
        };
    },
    methods: {
        loadPatients: function () {
            let url = this.$store.state.apiUrl;
            url += "/patients-data";
            axios
                .get(url)
                .then(response => {
                    this.patients = response.data;
                })
                .catch(err => {
                    console.log("Hubo un error al cargar los pacientes.");
                });
        },

        showPatient: function (index) {
            this.$router.push({ name: "History", params: { id: index } });
        },
        calculateAge: function (birthday) {
            return utils.calculateAge(birthday);
        },
        createPatient: function () {
            this.$router.push({ name: "NewPatient" });
        },
    },
    created: function () {
        this.loadPatients();
    },
};
</script>



<style scoped>
li:nth-child(odd) {
    background-color: var(--clr-background);
}
li:nth-child(even) {
    background-color: var(--clr-light-background);
}
.div-list {
    display: flex;
    flex-wrap: wrap;
}

.card {
    display: flex;
    width: 26vw;
    margin: 2vw;
    cursor: pointer;
}
.card img {
    width: 100px;
    height: 100px;
}
.card div {
    padding: 1rem;
}
.card .p-name {
    font-size: 21px;
    font-weight: bold;
}
</style>

