<template>
    <div id="div-treatment">
        <!--
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
        -->
        <div v-if="formsLoaded" id="div-forms">
            <h3>Formatos</h3>
            <ul>
                <!--<li><router-link :to="{ name: 'EntryRecord',  params: { id: this.patientId }} ">Hoja de Ingreso</router-link></li>-->
                <!--
                <li><router-link :to="{ name: 'EntryRecord',  params: { id: patientId, treatmentId: treatmentId, existing: true, patientdata: patient, representativedata: representative }} ">Hoja de Ingreso</router-link></li>                              
                <li><router-link :to="{ name: 'SocioeconomicForm', params: { patientdata: patient, representativedata: representative }}">Estudio Socio-Económico</router-link></li>                                              
                <li><router-link :to="{ name: 'MedicalForm' }">Examen Médico de Ingreso</router-link></li>
                <li>Nota de Evolución Médica</li>
                <li>Historia Clínica Psicológica</li>
                -->
                <li v-for="(form, k) in forms" :key="k">
                    <p>{{ form.id }}</p>
                    <p>{{ form.name }}</p>
                    <p>{{ form.creationDate }}</p>
                    <!--<p><router-link :to="{ name: 'EntryRecord',  params: { id: patientId, treatmentId: treatmentId, idForm: form.id, existing: true }} ">{{ form.formType }}</router-link></p>-->
                    <p class="p-link" v-on:click="showExistingForm(form.id, form.formType)">{{ form.formType }}</p>                                      
                </li>
                <li>
                    Agregar:
                    <select name="sel-form-type" id="sel-form-type" v-model="newEntryTypeId">
                        <option v-for="(entryType, k) in entryTypes" :key="k" :value="entryType.id">{{ entryType.name }}</option>
                    </select>
                    <button v-on:click="createNewForm(newEntryTypeId)">Agregar</button>                 
                </li>

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
    props: ['id', 'idPatient'],
    data: function() {
        return {
            treatmentId: this.id,
            /*medicals: [],
            tests: [],
            orders: [],
            bills: [],*/
            forms: [],
            patientId: this.idPatient,
            patient: "",
            representative: "",
            entryTypes: [],
            newEntryTypeId: "",
            formsLoaded: false
        }

    },
    methods: {
        createNewForm: function(idFormType) {
            console.log(`Tipo de formulario: ${idFormType}`);
            switch(idFormType) {
                case 1:
                    console.log(this.patientId);
    	            this.$router.push( { name: 'EntryRecord',  params: { id: this.patientId, existing: false, idTreatment: this.treatmentId }});
                    break;
                case 2:
    	            this.$router.push( { name: 'SocioeconomicForm',  params: { id: this.patientId, existing: false, idTreatment: this.treatmentId }});
                    break;
                case 3:
                    this.$router.push( { name: 'MedicalForm', params: { id: this.patientId, existing: false, idTreatment: this.treatmentId }});
                    break;

            }
        },
        loadForms: function() {
            let url = this.$store.state.apiUrl
            url += "/forms"
            console.log(url);
            console.log(this.treatmentId);          
            axios
            .get(url, { params: { id: this.treatmentId }})
            .then(response => {
                this.forms = response.data;
                console.log(this.forms.length)
                //this.patientId = this.forms[0].patientId;
                this.formsLoaded = true;
            })
            .catch(err => {
                alert("Error al cargar los formularios.")
            }) 
        },
        showExistingForm: function(formId, formType) {
            let formComponent = "";
            switch(formType) {
                case "Nota de Ingreso":
                    formComponent = "EntryRecord";
                    break;
                case "Historia Clínica":
                    formComponent = "MedicalForm";
                    break;
            }
            this.$router.push({ name: formComponent,  params: { id: this.patientId, treatmentId: this.treatmentId, idForm: formId, existing: true }})
        }
    },
    created: function() {
        /*
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
        */
        this.entryTypes = [
            {
                id: 1,
                name: "Nota de Ingreso",
            },
            {
                id: 2,
                name: "Estudio Socioeconómico"
            },
            {
                id: 3,
                name: "Historia Clínica"
            }
        ]
        console.log(`id del paciente: ${this.patientId}`);
        this.loadForms();
        /*
        let url = this.$store.state.apiUrl
        url += "/patient-data/" + this.patientId
        axios
        .get(url)
        .then(response => {
            this.patient = response.data
        })
        .catch(err => {
            alert("No se encuentra el paciente.")
        }) 
        */
        /*
        url = this.$store.state.apiUrl
        url += "/representative-data/" + this.patientId
        axios        
        .get(url)
        .then(response => {
            this.representative = response.data
            console.log(`Representante: ${this.representative}`)
        })
        .catch(err => {
            alert("No se encuentra el representante.")
        })
        */


    }
}
</script>



<style scoped>
#div-treatment {
    margin-top: 3rem;
    /*background-color: yellow;*/
}
.p-link {
    cursor: pointer;
    text-decoration: underline;
}
</style>