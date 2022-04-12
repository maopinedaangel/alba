<template>
    <div class="div-form" id="div-medical-form">
        <div v-if="loaded">
            <h1>Hoja de ingreso</h1>
            <form disabled>
                <section class="form-section" id="sec-general">

                    <div class="form-line">
                        <div class="form-field">
                            <!--Fecha de elaboración del formato-->
                            <label for="inp-date">Fecha:</label>
                            <input name="inp-date" type="date" v-model="entryForm.date" disabled>
                        </div>
                        <div class="form-field">
                            <!--Hora de elaboración del formato-->
                            <label for="inp-hour">Hora:</label>
                            <input name="inp-hour" type="text" v-model="entryForm.hour" disabled>
                        </div>

                    
                    </div>
                    <div class="form-line">
                        <div class="form-field">
                            <!--Número del expediente médico-->
                            <label for="inp-no-history">No. Expediente:</label>
                            <input name="inp-no-history" type="text" v-model="entryForm.historyCode" disabled>
                        </div>

                    </div>



                </section>


                <section class="form-section" id="sec-user-data">
                    <!--Datos del usuario-->
                    <h3>Datos del usuario/a:</h3>
                    <div class="form-line">
                        <div class="form-field">
                            <!--Nombre del paciente-->
                            <label for="inp-name">Nombre del Paciente:</label>
                            <input name="inp-name" type="text"  v-model="entryForm.patient.name" disabled>                                             
                        </div>

                    </div>


                    <div class="form-line">
                        <div class="form-field">
                            <!--Fecha de nacimiento del paciente-->
                            <label for="inp-birthdat">Fecha de nacimiento:</label>
                            <input name="inp-birthday" type="text" v-model="entryForm.patient.birthday" disabled>                      
                        </div>

                        <div class="form-field">
                            <!--Edad-->     
                            <label for="inp-age">Edad:</label>
                            <input name="inp-age" type="number" v-model="entryForm.patient.age" disabled>                        
                        </div>

                        <div class="form-field">
                            <!--Sexo-->
                            <label for="inp-sex">Sexo:</label>
                            <input name="inp-sex" type="text" v-model="entryForm.patient.sex" disabled>
                        </div>

                    </div>


                    <div class="form-line">
                        <div class="form-field-double">
                            <!--Dirección-->
                            <label for="inp-address">Dirección:</label>
                            <input name="inp-address" type="text" v-model="entryForm.patient.address" disabled>
                        </div>

                    </div>


                    <div class="form-line">
                        <div class="form-field">
                            <!--Teléfono-->
                            <label for="inp-phone">Teléfono:</label>
                            <input name="inp-phone" type="text" v-model="entryForm.patient.phone" disabled>                       
                        </div>                

                    </div>


                    <div class="form-line">
                        <div class="form-field">
                            <!--Nacionalidad-->
                            <label for="inp-nationality">Nacionalidad:</label>
                            <input name="inp-nationality" type="text" v-model="entryForm.patient.country" disabled>
                        </div>                


                        <div class="form-field">
                            <!--Estado civil-->
                            <label for="inp-civil-status">Estado Civil:</label>
                            <input name="inp-civil-status" type="text" v-model="entryForm.patient.civilState" disabled>
                        </div>

                    </div>


                    <div class="form-line">
                        <div class="form-field">
                            <!--Escolaridad-->
                            <label for="inp-school-grade">Escolaridad:</label>
                            <input name="inp-school-grade" type="text" v-model="entryForm.patient.schoolGrade" disabled>
                        </div>                


                        <div class="form-field">
                            <!--Ocupación-->
                            <label for="inp-occupation">Ocupación:</label>
                            <input name="inp-occupation" type="text" v-model="entryForm.patient.occupation" disabled>
                        </div>

                    </div>


                    <div class="form-line">
                        <div class="form-field-triple">
                        <!--Ingresos previos-->                            
                            <label for="inp-previous-entries">¿Cuántos ingresos previos ha tenido al establecimiento?</label>
                            <input name="inp-previous-entries" type="text" v-model="entryForm.previousEntries" disabled>
                        </div>
                    </div>


                    <div class="form-line">
                        <div class="form-field-double">
                            <!--Fecha(s):-->
                            <label for="inp-prev-dates">Fechas:</label>
                            <ul>
                                <li v-for="(date, k) in entryForm.dates" :key="k">{{ date }}</li>
                            </ul>
                            
                        </div>                

                    </div>
                

                    <div class="form-line">
                        <div class="form-field-double">
                            <label for="sel-is-referred">¿Lo refiere alguna institución?</label>
                            <select id="sel-referred-by" v-model="entryForm.isReferred">
                                <option value="Sí">Sí</option>
                                <option value="No">No</option>
                            </select>                       
                        </div>                
                        <div class="form-field">
                            <!--Es referido:-->
                            <label for="inp-referred-by">¿Cuál?</label>
                            <input name="inp-referred-by" type="text" v-model="entryForm.referredBy" :disabled="entryForm.isReferred==='No'"> 
                        </div>  
                    </div>


                    <div class="form-line">
                        <div class="form-field-double">
                            <label for="sel-has-reference-sheet">¿Presenta hoja de referencia?</label>
                            <select id="sel-has-reference-sheet" v-model="entryForm.hasReferenceSheet">
                                <option value="Sí">Sí</option>
                                <option value="No">No</option>
                            </select>                        
                        </div>                

                    </div>


                    <div class="form-line">
                        <div class="form-field">
                            <!--Tipo de ingreso:-->                    
                            <label for="inp-entry-type">Tipo de ingreso actual:</label>
                            <select name="sel-entry-type" id="sel-entry-type" v-model="entryForm.entryType">
                                <option value="voluntario">Voluntario</option>
                                <option value="involuntario">Involuntario</option>
                                <option value="obligatorio">Obligatorio</option>
                            </select>
                        </div>                


                    </div>


                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Motivo de consulta-->            
                            <label>Motivo de consulta:</label>
                            <textarea v-model="entryForm.motive" required></textarea><br>  
                        </div>                

                    </div>
                

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Descripción del estado de salud-->            
                            <label>Descripción breve del estado de salud en general del usuario/a:</label>
                            <textarea v-model="entryForm.healthCondition" required></textarea><br>
                        </div>                
        
                    </div>


                </section>


                <section class="form-section" id="sec-representative-data">
                    <h3>Datos del familiar o representante legal</h3>

                    <div class="form-line">
                        <div class="form-field">
                            <!--Nombre del representante-->
                            <label for="inp-representative-name">Nombre:</label>
                            <input name="inp-representative-name" type="text" v-model="entryForm.representative.name" disabled>                        
                        </div>

                    </div>


                    <div class="form-line">
                        <div class="form-field">
                            <!--Edad-->     
                            <label for="inp-representative-age">Edad:</label>
                            <input name="inp-representative-age" type="number" v-model="entryForm.representative.age" disabled>                        
                        </div>


                        <div class="form-field">
                            <!--Parentesco-->
                            <label for="inp-relationship">Parentesco:</label>
                            <input name="inp-relationship" type="text" v-model="entryForm.representative.relationship" disabled>
                        </div>


                        <div class="form-field">
                            <!--Ocupación-->
                            <label for="inp-occupation">Ocupación:</label>
                            <input name="inp-occupation" type="text" v-model="entryForm.representative.occupation" disabled>
                        </div>
                    </div>


                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Dirección-->
                            <label for="inp-representative-address">Dirección:</label>
                            <input name="inp-representative-address" type="text" v-model="entryForm.representative.address" disabled>
                        </div>
                    </div>


                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Teléfono-->
                            <label for="inp-representative-phone">Teléfono:</label>
                            <input name="inp-representative-phone" type="text" v-model="entryForm.representative.phone" disabled>                        
                        </div>                
                    </div>
                
                </section>

                <section class="form-section" id="sec-acceptance-criteria">
                    <!--Criterios de inclusión al tratamiento-->
                    <h3>Criterios de inclusión al tratamiento</h3>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                <input type="checkbox" v-model="entryForm.isAMan" v-on:change="checkCriteria">El usuario/a es hombre
                            </label>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                <input type="checkbox" v-model="entryForm.isAdult" v-on:change="checkCriteria">El usuario/a es mayor de edad
                            </label>
                        </div>
                    </div>            

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                <input type="checkbox" v-model="entryForm.substanceDependance" v-on:change="checkCriteria">El usuario/a presenta un nivel de dependencia al alcohol o drogas
                            </label>
                        </div>                
                    </div>            

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                <input type="checkbox" v-model="entryForm.presentsConsequences" v-on:change="checkCriteria">El usuario/a presenta alguna(s) consecuencia(s) asociadas al consumo
                            </label>
                        </div>                
                    </div>            

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                <input type="checkbox" v-model="entryForm.noMentalDisorder" v-on:change="checkCriteria">El usuario/a no presenta algún trastorno mental o psiquiátrico que le impida beneficiarse del tratamiento
                            </label>
                        </div>                
                    </div>            

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                <input type="checkbox" v-model="entryForm.meetsCriteria" disabled>El usuario/a cumple con todos los criterios de admisión al tratamiento
                            </label> 
                        </div>                
                    </div>            

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label for="inp-remission-place">En caso de no haber cumplido los criterios, indicar el lugar al que será referido/a:</label>
                            <input name="inp-remission-place" type="text" v-model="entryForm.referredTo" required>
                        </div>

                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label for="inp-interviewer">Nombre de quien entrevista:</label>
                            <input name="inp-interviewer" type="text" v-model="entryForm.interviewer" required>
                        </div>
                    </div>            

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label for="inp-position">Cargo:</label>
                            <input name="inp-position" type="text" v-model="entryForm.position" required> 
                        </div>                
                    </div>            
                                                    
                </section>
            <div class="btn-submit" v-on:click="saveEntryForm">Guardar</div>                          
            </form>
        </div>
        <div v-else>Obteniendo datos...</div>                      
    </div>
 
</template>


<script>
import axios from 'axios'
import utils from '../utils.js'
export default {
    name: 'EntryRecord',
    //props: ['id', 'existing', 'idForm', 'treatmentId', 'patientdata', 'representativedata'],
    props: ['id', 'existing', 'idForm', 'treatmentId'],    
    data: function() {
        return {
            formId: this.idForm,
            loaded: false,
            userId: "",
            patient: "",
            representative: "",
            isExisting: this.existing,
            previousEntries: [],
            entryForm: {
                historyCode: "",
                patient: {
                    id: "",
                    dni: "",
                    name: "",
                    birthday: "",
                    age: "",
                    sex: "",
                    address: "",
                    phone: "",
                    country: "",
                    civilState: "",
                    schoolGrade: "",
                    occupation: ""
                },
                representative: {
                    id: "",
                    name: "",
                    age: "",
                    relationship: "",
                    occupation: "", 
                    address: "",
                    phone: ""
                },
                date: "",
                hour: "",
                historyNumber: "",
                previousEntries: "",
                dates: [],
                isReferred: "",
                hasReferenceSheet: "",
                referredBy: "",
                entryType: "",
                motive: "",
                healthCondition: "",
                isAMan: "",
                isAdult: "",
                substanceDependance: "",
                presentsConsequences: "",
                noMentalDisorder: "",
                meetsCriteria: "",
                referredTo: "",
                interviewer: "",
                position: ""
            }
        }
    },
    
    watch: {
        meetsCriteria: function() {
            this.entryForm.meetsCriteria = this.entryForm.isAMan && this.entryForm.isAdult && this.entryForm.substanceDependance && this.entryForm.presentsConsequences && this.entryForm.noMentalDisorder
        } 
    },
    
    methods: {
        calculateAge: function(birthday) {
            return utils.calculateAge(birthday);
        },
        saveEntryForm: function() {
            let formData = {
                treatmentId: this.treatmentId,
                formTypeId: 1,
                data: JSON.stringify(this.entryForm),
                userId: this.userId
            }
            let url = this.$store.state.apiUrl;
            url += "/form";
            axios
            .post(url, formData)            
            .then(response => {
                alert("El formulario ha sido guardado.");
                this.loaded = true;
            })
            .catch(err => {
                alert("Se presentó un error al intentar guardar el formulario.");
            })
        },
        getNow: function() {
            let local = new Date();
            local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
            this.entryForm.date = local.toISOString().slice(0,10);       
            this.entryForm.hour = local.toISOString().slice(11,19);                               
        },
        getPatient: function() {
            let url = this.$store.state.apiUrl;
            url += "/patient-data/" + this.patientId;
            return axios.get(url);
        },
        getRepresentative: function() {
            let url = this.$store.state.apiUrl;
            url += "/representative-data/" + this.patientId;
            return axios.get(url);
        },
        loadPatientData: function() {
            this.entryForm.patient.id = this.patient.patientId
            this.entryForm.patient.dni = this.patient.dni
            this.entryForm.patient.name = `${this.patient.firstName} ${this.patient.lastName}`           
            this.entryForm.patient.birthday = this.patient.birthday
            this.entryForm.patient.age = this.calculateAge(this.patient.birthday)
            this.entryForm.patient.sex = this.patient.sex            
            this.entryForm.patient.address = this.patient.address
            this.entryForm.patient.phone = this.patient.phones[0]
            this.entryForm.patient.country = this.patient.country
            this.entryForm.patient.civilState = this.patient.civilState
            this.entryForm.patient.schoolGrade = this.patient.schoolGrade
            this.entryForm.patient.occupation = this.patient.occupation
            this.entryForm.historyCode = this.patient.code                       
        },
        loadRepresentativeData: function() {
            this.entryForm.representative.id = this.representative.patientId
            this.entryForm.representative.name = `${this.representative.firstName} ${this.representative.lastName}`
            this.entryForm.representative.age = this.calculateAge(this.representative.birthday)
            this.entryForm.representative.relationship = this.representative.relationship
            this.entryForm.representative.occupation = this.representative.occupation             
            this.entryForm.representative.address = this.representative.address
            this.entryForm.representative.phone = this.representative.phones[0]            
        },
        loadPreviousEntries: function() {
            let url = this.$store.state.apiUrl;
            url += "/patient-treatments/" + this.patient.historyId;
            axios
            .get(url)
            .then( response => {
                this.previousEntries = response.data;
                this.entryForm.previousEntries = this.previousEntries.length;
                this.previousEntries.forEach( entry => {
                    this.entryForm.dates.push(entry.entryDate);
                })
            })
            .catch( err => {
                alert("Error al recuperar los ingresos anteriores.")
            })

        },
        checkCriteria: function() {
            this.entryForm.meetsCriteria = this.entryForm.isAMan && this.entryForm.isAdult && this.entryForm.substanceDependance && this.entryForm.presentsConsequences && this.entryForm.noMentalDisorder            
        }
    },
    beforeCreate: function() {
        this.patientId = this.$route.params.id;
        this.isExisting = this.$route.params.existing;
    },
 
    created: function() {
        setInterval(this.getNow, 1000);
        if (this.isExisting) {
            let url = this.$store.state.apiUrl;
            url += "/form/" + this.formId;
            axios
            .get(url)
            .then( response => {
                this.entryForm = response.data.data;
                this.loaded = true;
            })
            .catch( error => {
                alert("No se encuentran los datos.")
            });                                  
        } else {
            Promise.all([this.getPatient(), this.getRepresentative()])
            .then( results => {
                this.patient = results[0].data;
                this.representative = results[1].data;
                this.loadPatientData();
                this.loadRepresentativeData()
                this.userId = 1;
                this.loaded = true;
                this.loadPreviousEntries();                   
            })
            .catch( error => {
                alert("No se encuentran los datos.")
            });
        }
     
    }
}

</script>


<style>

</style>