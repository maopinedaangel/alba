<template>
    <div id="div-docs">
        <h1>Listado de Documentos</h1>
        <table class="table-forms">
            <tr>
                <th>id</th>
                <th>Tipo</th>
                <th>Paciente</th>
                <th>Fecha de creación</th>
                <th></th>
            </tr>
            <!--<tr class="form-row" v-for="form in forms" :key="form.id" v-on:click="setCurrentForm(form)">-->
            <tr class="form-row" v-for="form in forms" :key="form.id" v-on:mouseover="setCurrentForm(form)">
                <!--<tr class="form-row" v-for="form in forms" :key="form.id">-->
                <td>{{ form.id }}</td>
                <td>{{ form.formType }}</td>
                <td>{{ form.patient }}</td>
                <td>{{ extractDate(form.creationDate) }}</td>
                <td>
                    <Printer>
                        <div>
                            <header-form />
                            <component :is="formComponent" v-bind="params"></component>
                        </div>
                    </Printer>
                </td>
            </tr>
        </table>
        <!--
        <Printer>
            <component :is="formComponent" v-bind="params"></component>
        </Printer>
        -->
    </div>
</template>


<script>
import axios from "axios";
import Printer from "./Printer.vue";
import EntryRecord from "./EntryRecord.vue";
import SocioeconomicForm from "./SocioeconomicForm.vue";
import MedicalForm from "./MedicalForm.vue";
import PsychologicalForm from "./PsychologicalForm.vue";
import HeaderForm from "./HeaderForm.vue";

export default {
    name: "Docs",
    components: {
        Printer,
        EntryRecord,
        SocioeconomicForm,
        MedicalForm,
        PsychologicalForm,
        HeaderForm,
    },
    data: function () {
        return {
            forms: [],
            formComponent: null,
            params: {
                id: 0,
                treatmentId: 0,
                idForm: 0,
                existing: false,
            },
        };
    },
    methods: {
        setCurrentForm: function (form) {
            switch (form.formType) {
                case "Nota de Ingreso":
                    this.formComponent = "EntryRecord";
                    break;
                case "Estudio Socioeconómico":
                    this.formComponent = "SocioeconomicForm";
                    break;
                case "Historia Clínica":
                    this.formComponent = "MedicalForm";
                    break;
                case "Historia Psicológica":
                    this.formComponent = "PsychologicalForm";
                    break;
            }
            this.params.id = form.patientId;
            this.params.treatmentId = form.treatmentId;
            this.params.idForm = form.id;
            this.params.existing = true;
            console.log(this.params);
            console.log(form);
        },
        extractDate: function (timestamp) {
            let date = new Date(timestamp);
            return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        },
    },
    created: function () {
        let url = this.$store.state.apiUrl;
        url += "/forms-data";
        axios
            .get(url)
            .then(response => {
                this.forms = response.data;
                this.forms.map(form => console.log(form));
            })
            .catch(err => {
                console.log(`No se pudieron cargar los formularios ${err}`);
            });
    },
};
</script>


<style scoped>
.div-form-item {
    cursor: pointer;
}

.div-form-item:hover {
    background-color: var(--clr-buttons);
    color: var(--clr-background);
}

.table-forms {
    margin: 2rem auto;
}
.table-forms .form-row {
    cursor: pointer;
}

.table-forms .form-row:hover {
    color: var(--clr-background);
    background-color: var(--clr-buttons);
}

.table-forms tr:nth-child(odd) {
    background-color: #eeeeee;
}

.table-forms th,
.table-forms td {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}
</style>