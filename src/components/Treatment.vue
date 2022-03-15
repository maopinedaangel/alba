<template>
    <div id="div-treatment">
        <div>
            <h3>Código Ingreso: 1002</h3>
            <h3>Fecha de Ingreso: 1/12/2021</h3>
            <h3>Fecha de Alta:</h3>
            <div class="div-collapsible-list">
                <Collapsible :list="medicals" title="Consultas" />
            </div>
            <div class="div-collapsible-list">
                <Collapsible :list="tests" title="Exámenes" />
            </div>
            <div class="div-collapsible-list">
                <Collapsible :list="prescriptions" title="Órdenes" />
            </div>
            <div class="div-collapsible-list">
                <Collapsible :list="bills" title="Facturas" />
            </div>        
        </div>
        <div id="div-forms">
            <h3>Formatos</h3>
            <ul>
                <!--<li><router-link :to="{ name: 'EntryRecord',  params: { id: this.patientId }} ">Hoja de Ingreso</router-link></li>-->
                <li><router-link :to="{ name: 'EntryRecord',  params: { patientdata: this.patient, representativedata: this.representative }} ">Hoja de Ingreso</router-link></li>                              
                <li><router-link :to="{ name: 'SocioeconomicForm', params: { patientdata: this.patient, representativedata: this.representative }}">Estudio Socio-Económico</router-link></li>                                              
                <li><router-link :to="{ name: 'MedicalForm' }">Examen Médico de Ingreso</router-link></li>
                <li>Nota de Evolución Médica</li>
                <li>Historia Clínica Psicológica</li>
            </ul>
        </div>
    </div>

</template>


<script>
import Collapsible from './Collapsible.vue'
import axios from 'axios'
export default {
    name: 'Treatment',
    components: {
        Collapsible
    },
    props: ['id'],
    data: function() {
        return {
            medicals: [],
            tests: [],
            orders: [],
            bills: [],
            patientId: this.id,
            patient: "",
            representative: ""
        }

    },
    created: function() {
        this.medicals = [
            {
                date: '1/12/2021',
                doctor: 'Pepe Pérez',
                specialty: 'Medicina General',
                subject: 'Revisión de ingreso por medicina general'
            },
            {
                date: '4/12/2021',
                doctor: 'Juana Jiménez',
                specialty: 'Psicología',
                subject: 'Revisión de ingreso por especialista en Psicología'
            },            
        ]
        this.tests = [
            {
                date: '2/12/2021',
                subject: 'Hemograma completo'                
            },
            {
                date: '2/12/2021',
                subject: 'Electrocardiograma'                 
            }
        ]
        this.bills = [
            {
                date: '1/12/2021',
                subject: 'Cuota Diciembre/2021'
            }
        ]
        this.prescriptions = [
            {
                date: '1/12/2021',
                drug: 'Acetaminofem',
                amount: 12
            }
        ]
        console.log(`id del paciente: ${this.patientId}`)
        let url = this.$store.state.apiUrl
        url += "/patient-data/" + this.patientId
        axios
        //.get("http://localhost:8000/patient-data/" + this.patientId)
        .get(url)
        .then(response => {
            this.patient = response.data
        })
        .catch(err => {
            alert("No se encuentra el paciente.")
        }) 

        url = this.$store.state.apiUrl
        url += "/representative-data/" + this.patientId
        //.get("http://localhost:8000/representative-data/" + this.patientId)
        axios        
        .get(url)
        .then(response => {
            this.representative = response.data
            console.log(`Representante: ${this.representative}`)
        })
        .catch(err => {
            alert("No se encuentra el representante.")
        }) 
    }
}
</script>



<style scoped>
#div-treatment {
    margin-top: 3rem;
    /*background-color: yellow;*/
}
</style>