<template>
    <div id="div-patients">
        <ul>
            <li v-for="(patient, k) in patients" :key="k" v-on:click="showPatient(k)">
                <p>Nombre: {{ patient.name }}</p>
                <p>Edad: {{ patient.age }}</p>
                <p>Ciudad: {{ patient.city }}</p>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'Patients',
    data: function() {
        return {
            patients: []
        }
    },
    methods: {
        loadPatients: function() {
            this.patients.push({name: "Gustavo Fernández", age: 35, city: 'Guadalajara'});
            this.patients.push({name: "Abigail Guzmán", age: 28, city: 'Jalisco'});
        },
        
        showPatient: function(index) {
    	    this.$router.push( { name: "History",  params: { id: index } })              
        },
        
       /*showPatient: function() {

       },*/
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

