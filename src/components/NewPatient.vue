<template>
    <form class="form-standard">
        <div class="div-form" id="div-new-patient">
            <section class="form-section" id="sec-user-data">
                <!--Datos del usuario-->
                <h3>Datos del usuario/a:</h3>
                <div class="form-line">
                        <!--Documento de identidad-->                                  
                    <div class="form-field">
                        <label for="inp-dni">INE. Clave de elector:</label>
                        <input name="inp-dni" type="text" v-model="newPatient.dni" v-on:change="verifyDni" required>
                    </div>
                    <div class="form-field">
                        <!--Documento de identidad-->
                        <label for="inp-health-card">CURP:</label>
                        <input name="inp-health-card" type="text" v-model="newPatient.healthCard" required>
                    </div>                    
                </div>                                 
                <div class="form-line">
                    <div class="form-field">
                        <!--Nombres del paciente-->
                        <label for="inp-first-name">Nombres:</label>
                        <input name="inp-first-name" type="text" v-model="newPatient.firstName" required>
                    </div>
                    <div class="form-field">
                        <!--Apellidos del paciente-->
                        <label for="inp-last-name">Apellidos:</label>
                        <input name="inp-last-name" type="text" v-model="newPatient.lastName" required>
                    </div>
                
                </div>


                <div class="form-line">
                    <div class="form-field">
                        <!--Fecha de nacimiento del paciente-->
                        <label for="inp-birthdat">Fecha de nacimiento:</label>
                        <input name="inp-birthday" type="date" v-model="newPatient.birthday" required>
                    </div>

                    <div class="form-field">
                        <!--Edad-->     
                        <label for="inp-age">Edad:</label>
                        <input name="inp-age" type="number" :value="updateAge(newPatient.birthday)" disabled>
                    </div>

                    <div class="form-field">
                        <!--Sexo-->
                        <label for="inp-sex">Sexo:</label>
                        <!--<input name="inp-sex" type="text" required>-->
                        <select name="sel-sex" id="sel-sex" v-model="newPatient.sex" required>
                            <option value="Hombre">Hombre</option>
                            <option value="Mujer">Mujer</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>

                </div>


                <div class="form-line">
                    <!--
                    <div class="form-field">
                        <label for="inp-nationality">Nacionalidad:</label>
                        <input name="inp-nationality" type="text" v-model="newPatient.country" required>
                    </div>
                    -->           
                    <div class="form-field">
                        <!--Nacionalidad-->
                        <label for="sel-nationality">Nacionalidad:</label>
                        <select name="sel-nationality" id="sel-nationality" v-model="newPatient.country" required>
                            <option v-for="(country, k) in countries" :key="k" :value="country">{{ country }}</option>
                        </select>
                    </div> 

                    <div class="form-field">
                        <!--Estado civil-->
                        <label for="inp-civil-status">Estado Civil:</label>
                        <!--<input name="inp-civil-status" type="text" required>-->
                        <select name="sel-civil-status" id="sel-civil-status" v-model="newPatient.civilState" required>
                            <option value="Soltero">Soltero</option>
                            <option value="Casado">Casado</option>
                            <option value="Unión libre">Unión libre</option>
                            <option value="Divorciado">Divorciado</option>
                            <option value="Viudo">Viudo</option>
                        </select>
                    </div>


                </div>


                <div class="form-line">
                    <!--Escolaridad-->                    
                    <div class="form-field">
                        <label for="inp-school-grade">Escolaridad:</label>
                        <!--<input name="inp-school-grade" type="text" required>-->
                        <select v-on:change="setSchoolLevels" name="sel-school-grade" id="sel-school-grade" v-model="newPatient.schoolGrade" required>
                            <option value="Ninguna">Ninguna</option>
                            <option value="Primaria">Primaria</option>
                            <option value="Secundaria">Secundaria</option>
                            <option value="Bachillerato">Bachillerato</option>
                            <option value="Preparatoria">Preparatoria</option>                            
                            <option value="Licenciatura">Licenciatura</option>
                            <option value="Posgrado">Posgrado</option>                        
                        </select>
                    </div>
                    <div class="form-field">
                        <label for="inp-school-level">Último grado terminado:</label>
                        <select name="sel-school-level" id="sel-school-level" v-model.number="newPatient.schoolLevel" required>
                            <option v-for="(level, k) in allowedLevels" :value="level.value" :key="k">{{ level.name }}</option>
                        </select>
                    </div>                                 


                    <div class="form-field">
                        <!--Ocupación-->
                        <label for="inp-occupation">Ocupación:</label>
                        <!--<input name="inp-occupation" type="text" required>-->
                        <select name="sel-occupation" id="sel-occupation" v-model="newPatient.occupation" required>
                            <option value="empleado-formal">Empleado Formal</option>
                            <option value="empleado-informal">Empleado Informal</option>
                            <option value="desempleado">Desempleado</option>
                            <option value="profesionaista">Profesionista</option>
                            <option value="independiente">Independiente</option>
                            <option value="oficios-varios">Oficios Varios</option>
                        </select>
                    </div>

                    <div class="form-field">
                        <label for="inp-salary">Salario:</label>
                        <input name="inp-salary" type="text" v-model.number="newPatient.salary" required>
                    </div>                      

                </div>

                <div class="form-line">
                    <div class="form-field">
                        <!--Religión-->
                        <label for="inp-religion">Religión:</label>
                        <select name="sel-religion" id="sel-religion" v-model="newPatient.religion" required>
                            <option value="Católicismo">Catolicismo</option>
                            <option value="Protestantismo">Protestantismo</option>
                            <option value="Ateísmo">Ateísmo / Agnosticismo</option>
                            <option value="Otra">Otra</option>
                            <option value="Ninguna">Ninguna</option>
                            <option value="NS-NR">No sabe / No responde</option>                        
                        </select>
                    </div>

                    <div class="form-field">
                        <!--Idioma-->
                        <label for="inp-language">Idioma:</label>
                        <select name="sel-language" id="sel-religion" v-model="newPatient.language" required>
                            <option value="Español">Español</option>
                            <option value="Inglés">Inglés</option>
                            <option value="Lengua nativa">Lengua nativa</option>
                            <option value="Otra">Otra</option>                      
                        </select>
                    </div>

                    <div class="form-field">
                        <!--Tipo sanguíneo-->
                        <label for="inp-blood-type">Grupo Sanguíneo:</label>
                        <select name="sel-blood-type" id="sel-blood-type" v-model="newPatient.bloodType" required>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>                      
                        </select>
                    </div>
                    <div class="form-field">
                        <!--Factor RH-->
                        <label for="sel-rh">Factor RH:</label>
                        <select name="sel-rh" id="sel-rh" v-model="rh" v-on:change="updateRh" required>
                            <option value="Positivo">Positivo</option>
                            <option value="Negativo">Negativo</option>                     
                        </select>
                    </div>                                                                          
                </div>
            </section>


            <section class="form-section" id="sec-contact-data">
                <h3>Datos de contacto del paciente</h3>
                <!--
                Permite agregar varias direcciones
                <div v-for="(a, k) in addresses" :key="k" class="form-line">               
                    <div class="form-field-double">
                        <label for="inp-address">Dirección:</label>
                        <label name="inp-address" type="text" disabled>{{ toStringAddress(a)}}</label>
                    </div>
                </div>
                -->


                <div class="form-line">               
                    <div class="form-field">
                        <!--Calle-->
                        <label for="inp-street">Calle:</label>
                        <input name="inp-street" type="text" v-model="address.street" required>
                    </div>
                    <div class="form-field-half">
                        <!--Número-->
                        <label for="inp-number">Número:</label>
                        <input name="inp-number" type="text" v-model.number="address.number" required>
                    </div>
                    <div class="form-field">
                        <!--Calle transversal atrás-->
                        <label for="inp-cross-street-bw">Entre Calle:</label>
                        <input name="inp-cross-street-bw" type="text" v-model="address.crossStreetBackward" required>
                    </div>
                    <div class="form-field">
                        <!--Calle transversal adelante-->
                        <label for="inp-cross-street-fw">Y Calle:</label>
                        <input name="inp-cross-street-fw" type="text" v-model="address.crossStreetForward" required>
                    </div>
                </div>                    
                <div class="form-line">                     
                    <div class="form-field">
                        <!--Colonia-->
                        <label for="inp-suburb">Colonia:</label>
                        <input name="inp-suburb" type="text" v-model="address.suburb" required>
                    </div>
                    <div class="form-field">
                        <!--Código Postal-->
                        <label for="inp-postal-code">Código Postal:</label>
                        <input name="inp-postal-code" type="text" v-model="address.postalCode" required>
                    </div>
                    <div class="form-field">
                        <!--Alcaldía o Municipio-->
                        <label for="inp-municipality">Alcaldía o Municipio:</label>
                        <input name="inp-municipality" type="text" v-model="address.municipality" required>
                    </div>
                    <div class="form-field">
                        <!--Estado-->
                        <label for="inp-state">Estado:</label>
                        <input name="inp-state" type="text" v-model="address.state" required>
                    </div>
                </div>
                <!--    
                <div class="form-line">
                    <div class="form-field">                                                            
                        <div class="button-add" v-on:click="addAddress">
                            <p>Agregar</p>
                        </div>
                    </div>
                </div>
                -->

                <div class="form-line">
                    <div class="form-field">
                        <!--Teléfono 1-->
                        <label for="inp-phone-1">Teléfono 1:</label>
                        <input name="inp-phone-1" type="text" v-model="newPatient.phone1.number" required>
                    </div>
                    <div class="form-field">
                        <!--Teléfono 2-->
                        <label for="inp-phone-2">Teléfono 2:</label>
                        <input name="inp-phone-2" type="text" v-model="newPatient.phone2.number" required>
                    </div>
                    <div class="form-field">
                        <!--Correo Electrónico-->
                        <label for="inp-mail">Correo electrónico:</label>
                        <input name="inp-mail" type="text" v-model="newPatient.mail" required>
                    </div>                                                   
                </div>                
            </section>

            <section class="form-section" id="sec-representative-data">
                <h3>Datos del familiar o representante legal</h3>

                <div class="form-line">
                    <div class="form-field">
                        <!--Documento de identidad-->
                        <label for="inp-representative-dni">INE. Clave de Elector:</label>
                        <input name="inp-representative-dni" type="text" v-model="representative.dni" required>
                    </div>                    
                    <div class="form-field">
                        <!--Nombre del representante-->
                        <label for="inp-representative-first-name">Nombres:</label>
                        <input name="inp-representative-first-name" type="text" v-model="representative.firstName" required>
                    </div>
                    <div class="form-field">
                        <!--Nombre del representante-->
                        <label for="inp-representative-last-name">Apellidos:</label>
                        <input name="inp-representative-last-name" type="text" v-model="representative.lastName" required>
                    </div>
                </div>


                <div class="form-line">
                    <div class="form-field">
                        <!--Fecha de nacimiento-->     
                        <label for="inp-representative-birthday">Fecha de Nacimiento:</label>
                        <input name="inp-representative-birthday" type="date" v-model="representative.birthday" required>
                    </div>                    
                    <div class="form-field">
                        <!--Edad-->     
                        <label for="inp-representative-age">Edad:</label>
                        <input name="inp-representative-age" type="number" :value="updateAge(representative.birthday)" disabled>
                    </div>


                    <div class="form-field">
                        <!--Parentesco-->
                        <label for="inp-relationship">Parentesco:</label>
                        <input name="inp-relationship" type="text" v-model="representative.relationship" required>
                    </div>


                    <div class="form-field">
                        <!--Ocupación-->
                        <label for="inp-occupation">Ocupación:</label>
                        <input name="inp-occupation" type="text" v-model="representative.occupation" required>
                    </div>
                </div>

            </section>

            <section class="form-section" id="sec-representative-address">
                <h3>Datos de contacto del representante</h3>                
                <div class="form-line">               
                    <div class="form-field">
                        <!--Calle-->
                        <label for="inp-rep-street">Calle:</label>
                        <input name="inp-rep-street" type="text" v-model="representativeAddress.street" required>
                    </div>
                    <div class="form-field-half">
                        <!--Número-->
                        <label for="inp-rep-number">Número:</label>
                        <input name="inp-rep-number" type="text" v-model.number="representativeAddress.number" required>
                    </div>
                    <div class="form-field">
                        <!--Calle transversal atrás-->
                        <label for="inp-rep-cross-street-bw">Entre Calle:</label>
                        <input name="inp-rep-cross-street-bw" type="text" v-model="representativeAddress.crossStreetBackward" required>
                    </div>
                    <div class="form-field">
                        <!--Calle transversal adelante-->
                        <label for="inp-rep-cross-street-fw">Y Calle:</label>
                        <input name="inp-rep-cross-street-fw" type="text" v-model="representativeAddress.crossStreetForward" required>
                    </div>
                </div>                    
                <div class="form-line">                     
                    <div class="form-field">
                        <!--Colonia-->
                        <label for="inp-rep-suburb">Colonia:</label>
                        <input name="inp-rep-suburb" type="text" v-model="representativeAddress.suburb" required>
                    </div>
                    <div class="form-field">
                        <!--Código Postal-->
                        <label for="inp-rep-postal-code">Código Postal:</label>
                        <input name="inp-rep-postal-code" type="text" v-model="representativeAddress.postalCode" required>
                    </div>
                    <div class="form-field">
                        <!--Alcaldía o Municipio-->
                        <label for="inp-rep-municipality">Alcaldía o Municipio:</label>
                        <input name="inp-rep-municipality" type="text" v-model="representativeAddress.municipality" required>
                    </div>
                    <div class="form-field">
                        <!--Estado-->
                        <label for="inp-rep-state">Estado:</label>
                        <input name="inp-rep-state" type="text" v-model="representativeAddress.state" required>
                    </div>
                </div>

                <div class="form-line">
                    <div class="form-field">
                        <!--Teléfono 1-->
                        <label for="inp-rep-phone-">Teléfono:</label>
                        <input name="inp-rep-phone" type="text" v-model="representativePhone.number" required>
                    </div>
                    <div class="form-field">
                        <!--Correo Electrónico-->
                        <label for="inp-mail">Correo electrónico:</label>
                        <input name="inp-mail" type="text" v-model="representative.mail" required>
                    </div>                                                   
                </div>                
            </section>                
            <section>
                <!--
                <div class="form-line">
                    <div class="form-field-full-line">
                        <label for="inp-representative-phone">Teléfono:</label>
                        <input name="inp-representative-phone" type="text" required>  
                    </div>                
                </div>
                -->
            
            </section>            
        </div>
        <div class="btn-submit" v-on:click="createPatient">Guardar</div>
        <p id="p-articulo"></p>
    </form>
</template>


<script>
import utils from '../utils.js'
import axios from 'axios'
export default {
    name: 'NewPatient',
    data: function() {
        return {
            newPatient: {
                dni: "",                
                firstName: "",
                lastName: "",
                mail: "",
                birthday: "",
                sex: "",
                country: "",
                civilState: "",
                schoolGrade: "",
                schoolLevel: "",
                occupation: "",
                salary: "",
                isInsured: true,
                provider: "Sura",
                healthCard: "",
                religion: "",
                language: "",
                bloodType: "",
                rh: false,
                phone1: {
                    number: ""
                },
                phone2: {
                    number: ""
                },
                address: null,
                representative: null
            },
            patientAge: "",
            address: {
                street: "",
                number: "",
                crossStreetBackward: "",
                crossStreetForward: "",
                suburb: "",
                postalCode: "",
                municipality: "",
                state: ""
            },
            representative: {
                dni: "",
                firstName: "",
                lastName: "",
                mail: "",
                birthday: "",
                occupation: "",
                relationship: "",
                phone: null,
                address: null
            },
            representativeAddress: {
                street: "",
                number: "",
                crossStreetBackward: "",
                crossStreetForward: "",
                suburb: "",
                postalCode: "",
                municipality: "",
                state: ""                
            },
            representativePhone: {
                number: ""
            },
            strAddress: "",
            /*addresses: [],*/
            levels: [],
            allowedLevels: [],
            patientAge: "",
            representativeAge: "",
            rh: "Negativo",
            countries: []

        }
    },
    methods: {
        updateAge: function(birthday) {
            let age = utils.calculateAge(birthday)
            return age
        },
        updateRh: function() {
            if (this.rh === "Positivo") {
                this.newPatient.rh = true;
            } else {
                this.newPatient.rh = false;
            }
            console.log(this.newPatient.rh)
        },
        verifyDni: function() {

        },
        setSchoolLevels: function() {
            this.allowedLevels = []
            let grade = this.newPatient.schoolGrade
            switch (grade) {
                case 'Primaria':
                    this.allowedLevels = [
                        { name: "1", value: 1},
                        { name: "2", value: 2},
                        { name: "3", value: 3},
                        { name: "4", value: 4},
                        { name: "5", value: 5},
                        { name: "6", value: 6}                        
                    ]
                    break;
                case 'Secundaria':
                    this.allowedLevels = [
                        { name: "7", value: 7},
                        { name: "8", value: 8},
                        { name: "9", value: 9},                      
                    ]
                    break;
                case 'Bachillerato':
                case 'Preparatoria':
                    this.allowedLevels = [
                        { name: "10", value: 10},
                        { name: "11", value: 11},                        
                    ]
                    break;
                case 'Licenciatura':
                case 'Posgrado':
                    this.allowedLevels = [
                        { name: "Primer año", value: 1},
                        { name: "Segundo año", value: 2},
                        { name: "Tercer año", value: 3},
                        { name: "Cuarto año", value: 4},
                        { name: "Quinto año", value: 5}                                                                ]                 
            }
        },
        addAddress: function() {
            this.addresses.push(this.address);
            this.address = {street: "", number: "", crossStreetBackward: "", crossStreetForward: ""}
            console.log(this.addresses)
        },
        createPatient: function() {
            this.newPatient.address = this.address            
            this.representative.address = this.representativeAddress
            this.representative.phone = this.representativePhone
            this.newPatient.representative = this.representative
            let url = this.$store.state.apiUrl
            url += "/patient"
            axios
            //.post('http://localhost:8000/patient', this.newPatient)
            .post(url, this.newPatient)            
            .then(response => {
                alert("Se ha guardado el paciente correctamente");
            })
            .catch(err => {
                alert("Error al guardar el paciente")
            })
        },
        toStringAddress(a) {
            return `${a.street} ${a.number} entre ${a.crossStreetBackward} y ${a.crossStreetForward}`
        },
        getCountries() {
            axios
            .get("https://restcountries.com/v3.1/all")
            .then(response => {
                let countryList = response.data;
                countryList.forEach(country => {
                    let countryName = country.name.common;
                    console.log(countryName);
                    this.countries.push(countryName);                   
                })
                this.countries.sort();
            })
        }
    },
    created: function() {
        this.getCountries();
    }
}
</script>


<style scoped>
.button-add {
    background-color: var(--clr-buttons);
    color: #ffffff;
    align-self: flex-end;
    padding: 0.5rem;
}
</style>