<template>
    <div>
        <form v-if="loaded" class="form-standard">
            <div class="div-form" id="div-new-patient">
                <section class="form-section" id="sec-user-data">
                    <!--Datos del usuario-->
                    <h3>Datos del usuario/a:</h3>
                    <div class="form-line">
                        <!--Tipo de Documento de identidad-->
                        <div class="form-field">
                            <label for="sel-id-type">Tipo de documento:</label>
                            <!--<select name="sel-id-type" id="sel-id-type" v-model="this.idType" required>-->
                            <select name="sel-id-type" id="sel-id-type" v-model="newPatient.idType" required>
                                <option v-for="k in idTypes" :value="k.name" :key="k">{{ k.id }} - {{ k.name }}</option>
                            </select>
                        </div>

                        <!--Documento de identidad-->
                        <div class="form-field">
                            <!--<label for="inp-dni">INE. Clave de elector:</label>-->
                            <label for="inp-dni">No. del Documento:</label>
                            <input
                                name="inp-dni"
                                type="text"
                                v-model="newPatient.dni"
                                v-on:change="verifyDni"
                                required />
                        </div>
                        <div class="form-field">
                            <!--Documento de identidad-->
                            <label for="inp-health-card">CURP:</label>
                            <input name="inp-health-card" type="text" v-model="newPatient.healthCard" required />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field">
                            <!--Nombres del paciente-->
                            <label for="inp-first-name">Nombres:</label>
                            <input name="inp-first-name" type="text" v-model="newPatient.firstName" required />
                        </div>
                        <div class="form-field">
                            <!--Apellidos del paciente-->
                            <label for="inp-last-name">Apellidos:</label>
                            <input name="inp-last-name" type="text" v-model="newPatient.lastName" required />
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field">
                            <!--Fecha de nacimiento del paciente-->
                            <label for="inp-birthdat">Fecha de nacimiento:</label>
                            <input name="inp-birthday" type="date" v-model="newPatient.birthday" required />
                        </div>

                        <div class="form-field">
                            <!--Edad-->
                            <label for="inp-age">Edad:</label>
                            <input name="inp-age" type="number" :value="updateAge(newPatient.birthday)" disabled />
                        </div>

                        <div class="form-field">
                            <!--Sexo-->
                            <label for="inp-sex">Sexo:</label>
                            <select name="sel-sex" id="sel-sex" v-model="newPatient.sex" required>
                                <option v-for="k in sexOptions" :key="k" :value="k.name">{{ k.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field">
                            <!--Nacionalidad-->
                            <label for="sel-nationality">Nacionalidad:</label>
                            <select name="sel-nationality" id="sel-nationality" v-model="newPatient.country" required>
                                <option v-for="(country, k) in countries" :key="k" :value="country">
                                    {{ country }}
                                </option>
                            </select>
                        </div>

                        <div class="form-field">
                            <!--Estado civil-->
                            <label for="inp-civil-status">Estado Civil:</label>
                            <select
                                name="sel-civil-status"
                                id="sel-civil-status"
                                v-model="newPatient.civilState"
                                required>
                                <option v-for="k in civilStateOptions" :key="k" :value="k.name">{{ k.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-line">
                        <!--Escolaridad-->
                        <div class="form-field">
                            <label for="inp-school-grade">Escolaridad:</label>
                            <select
                                v-on:change="setSchoolLevels"
                                name="sel-school-grade"
                                id="sel-school-grade"
                                v-model="newPatient.schoolGrade"
                                required>
                                <option v-for="k in schoolGradeOptions" :key="k.name" :value="k.name">
                                    {{ k.name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-field">
                            <label for="inp-school-level">Último grado terminado:</label>
                            <select
                                name="sel-school-level"
                                id="sel-school-level"
                                v-model.number="newPatient.schoolLevel"
                                required>
                                <option v-for="(level, k) in allowedLevels" :value="level.value" :key="k">
                                    {{ level.name }}
                                </option>
                            </select>
                        </div>

                        <div class="form-field">
                            <!--Ocupación-->
                            <label for="inp-occupation">Ocupación:</label>
                            <select name="sel-occupation" id="sel-occupation" v-model="newPatient.occupation" required>
                                <option v-for="k in occupationOptions" :key="k" :value="k.name">{{ k.name }}</option>
                            </select>
                        </div>

                        <div class="form-field">
                            <label for="inp-salary">Salario:</label>
                            <input name="inp-salary" type="text" v-model.number="newPatient.salary" required />
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field">
                            <!--Religión-->
                            <label for="inp-religion">Religión:</label>
                            <select name="sel-religion" id="sel-religion" v-model="newPatient.religion" required>
                                <option v-for="k in religionOptions" :key="k" :value="k.name">{{ k.name }}</option>
                            </select>
                        </div>

                        <div class="form-field">
                            <!--Idioma-->
                            <label for="inp-language">Idioma:</label>
                            <select name="sel-language" id="sel-language" v-model="newPatient.language" required>
                                <option v-for="k in languageOptions" :key="k" :value="k.name">{{ k.name }}</option>
                            </select>
                        </div>

                        <div class="form-field">
                            <!--Tipo sanguíneo-->
                            <label for="inp-blood-type">Grupo Sanguíneo:</label>
                            <select name="sel-blood-type" id="sel-blood-type" v-model="newPatient.bloodType" required>
                                <option v-for="k in bloodTypeOptions" :key="k" :value="k.name">{{ k.name }}</option>
                            </select>
                        </div>
                        <div class="form-field">
                            <!--Factor RH-->
                            <label for="sel-rh">Factor RH:</label>
                            <select name="sel-rh" id="sel-rh" v-model="newPatient.rh" required>
                                <option v-for="k in rhOptions" :key="k" :value="k.value">{{ k.name }}</option>
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
                            <input name="inp-street" type="text" v-model="address.street" required />
                        </div>
                        <div class="form-field-half">
                            <!--Número-->
                            <label for="inp-number">Número:</label>
                            <input name="inp-number" type="text" v-model.number="address.number" required />
                        </div>
                        <div class="form-field">
                            <!--Calle transversal atrás-->
                            <label for="inp-cross-street-bw">Entre Calle:</label>
                            <input
                                name="inp-cross-street-bw"
                                type="text"
                                v-model="address.crossStreetBackward"
                                required />
                        </div>
                        <div class="form-field">
                            <!--Calle transversal adelante-->
                            <label for="inp-cross-street-fw">Y Calle:</label>
                            <input
                                name="inp-cross-street-fw"
                                type="text"
                                v-model="address.crossStreetForward"
                                required />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field">
                            <!--Colonia-->
                            <label for="inp-suburb">Colonia:</label>
                            <input name="inp-suburb" type="text" v-model="address.suburb" required />
                        </div>
                        <div class="form-field">
                            <!--Código Postal-->
                            <label for="inp-postal-code">Código Postal:</label>
                            <input name="inp-postal-code" type="text" v-model="address.postalCode" required />
                        </div>
                        <div class="form-field">
                            <!--Alcaldía o Municipio-->
                            <label for="inp-municipality">Alcaldía o Municipio:</label>
                            <input name="inp-municipality" type="text" v-model="address.municipality" required />
                        </div>
                        <div class="form-field">
                            <!--Estado-->
                            <label for="inp-state">Estado:</label>
                            <input name="inp-state" type="text" v-model="address.state" required />
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
                            <input name="inp-phone-1" type="text" v-model="newPatient.phone1.number" required />
                        </div>
                        <div class="form-field">
                            <!--Teléfono 2-->
                            <label for="inp-phone-2">Teléfono 2:</label>
                            <input name="inp-phone-2" type="text" v-model="newPatient.phone2.number" required />
                        </div>
                        <div class="form-field">
                            <!--Correo Electrónico-->
                            <label for="inp-mail">Correo electrónico:</label>
                            <input name="inp-mail" type="text" v-model="newPatient.mail" required />
                        </div>
                    </div>
                </section>

                <section class="form-section" id="sec-representative-data">
                    <h3>Datos del familiar o representante legal</h3>

                    <div class="form-line">
                        <div class="form-field">
                            <label for="sel-rep-id-type">Tipo de documento:</label>
                            <!--<select name="sel-id-type" id="sel-id-type" v-model="this.idType" required>-->
                            <select
                                name="sel-rep-id-type"
                                id="sel-rep-id-type"
                                v-model="representative.representativeIdType"
                                required>
                                <option v-for="k in idTypes" :value="k.name" :key="k">{{ k.id }} - {{ k.name }}</option>
                            </select>
                        </div>
                        <div class="form-field">
                            <!--Documento de identidad-->
                            <label for="inp-representative-dni">No. del Documento:</label>
                            <input name="inp-representative-dni" type="text" v-model="representative.dni" required />
                        </div>
                        <div class="form-field">
                            <!--Nombre del representante-->
                            <label for="inp-representative-first-name">Nombres:</label>
                            <input
                                name="inp-representative-first-name"
                                type="text"
                                v-model="representative.firstName"
                                required />
                        </div>
                        <div class="form-field">
                            <!--Nombre del representante-->
                            <label for="inp-representative-last-name">Apellidos:</label>
                            <input
                                name="inp-representative-last-name"
                                type="text"
                                v-model="representative.lastName"
                                required />
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field">
                            <!--Fecha de nacimiento-->
                            <label for="inp-representative-birthday">Fecha de Nacimiento:</label>
                            <input
                                name="inp-representative-birthday"
                                type="date"
                                v-model="representative.birthday"
                                required />
                        </div>
                        <div class="form-field">
                            <!--Edad-->
                            <label for="inp-representative-age">Edad:</label>
                            <input
                                name="inp-representative-age"
                                type="number"
                                :value="updateAge(representative.birthday)"
                                disabled />
                        </div>

                        <div class="form-field">
                            <!--Parentesco-->
                            <label for="sel-relationship">Parentesco:</label>
                            <!--<input name="inp-relationship" type="text" v-model="representative.relationship" required>-->
                            <select
                                name="sel-relationship"
                                id="sel-relationship"
                                v-model="representative.relationship"
                                required>
                                <option v-for="k in relationshipOptions" :value="k.name" :key="k">{{ k.name }}</option>
                            </select>
                        </div>

                        <div class="form-field">
                            <!--Ocupación-->
                            <label for="sel-rep-occupation">Ocupación:</label>
                            <!--<input name="inp-occupation" type="text" v-model="representative.occupation" required>-->
                            <select
                                name="sel-rep-occupation"
                                id="sel-rep-occupation"
                                v-model="representative.occupation"
                                required>
                                <option v-for="k in occupationOptions" :value="k.name" :key="k">{{ k.name }}</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section class="form-section" id="sec-representative-address">
                    <h3>Datos de contacto del representante</h3>
                    <div class="form-line">
                        <div class="form-field">
                            <!--Calle-->
                            <label for="inp-rep-street">Calle:</label>
                            <input name="inp-rep-street" type="text" v-model="representativeAddress.street" required />
                        </div>
                        <div class="form-field-half">
                            <!--Número-->
                            <label for="inp-rep-number">Número:</label>
                            <input
                                name="inp-rep-number"
                                type="text"
                                v-model.number="representativeAddress.number"
                                required />
                        </div>
                        <div class="form-field">
                            <!--Calle transversal atrás-->
                            <label for="inp-rep-cross-street-bw">Entre Calle:</label>
                            <input
                                name="inp-rep-cross-street-bw"
                                type="text"
                                v-model="representativeAddress.crossStreetBackward"
                                required />
                        </div>
                        <div class="form-field">
                            <!--Calle transversal adelante-->
                            <label for="inp-rep-cross-street-fw">Y Calle:</label>
                            <input
                                name="inp-rep-cross-street-fw"
                                type="text"
                                v-model="representativeAddress.crossStreetForward"
                                required />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field">
                            <!--Colonia-->
                            <label for="inp-rep-suburb">Colonia:</label>
                            <input name="inp-rep-suburb" type="text" v-model="representativeAddress.suburb" required />
                        </div>
                        <div class="form-field">
                            <!--Código Postal-->
                            <label for="inp-rep-postal-code">Código Postal:</label>
                            <input
                                name="inp-rep-postal-code"
                                type="text"
                                v-model="representativeAddress.postalCode"
                                required />
                        </div>
                        <div class="form-field">
                            <!--Alcaldía o Municipio-->
                            <label for="inp-rep-municipality">Alcaldía o Municipio:</label>
                            <input
                                name="inp-rep-municipality"
                                type="text"
                                v-model="representativeAddress.municipality"
                                required />
                        </div>
                        <div class="form-field">
                            <!--Estado-->
                            <label for="inp-rep-state">Estado:</label>
                            <input name="inp-rep-state" type="text" v-model="representativeAddress.state" required />
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field">
                            <!--Teléfono 1-->
                            <label for="inp-rep-phone-">Teléfono:</label>
                            <input name="inp-rep-phone" type="text" v-model="representativePhone.number" required />
                        </div>
                        <div class="form-field">
                            <!--Correo Electrónico-->
                            <label for="inp-mail">Correo electrónico:</label>
                            <input name="inp-mail" type="text" v-model="representative.mail" required />
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
        <div v-else>
            <p>Cargando los datos...</p>
        </div>
    </div>
</template>


<script>
import utils from "../utils.js";
import axios from "axios";
export default {
    name: "NewPatient",
    props: ["id"],
    data: function () {
        return {
            newPatient: {
                idType: "",
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
                    number: "",
                },
                phone2: {
                    number: "",
                },
                address: null,
                representative: null,
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
                state: "",
            },
            representative: {
                representativeIdType: "",
                dni: "",
                firstName: "",
                lastName: "",
                mail: "",
                birthday: "",
                occupation: "",
                relationship: "",
                phone: null,
                address: null,
            },
            representativeAddress: {
                street: "",
                number: "",
                crossStreetBackward: "",
                crossStreetForward: "",
                suburb: "",
                postalCode: "",
                municipality: "",
                state: "",
            },
            representativePhone: {
                number: "",
            },
            strAddress: "",
            /*addresses: [],*/
            levels: [],
            allowedLevels: [],
            patientAge: "",
            representativeAge: "",
            rh: "Negativo",
            countries: [],
            patientId: this.id,
            loaded: false,
            idTypes: [
                { id: 0, name: "Credencial para votar INE" },
                { id: 1, name: "Cartilla del Servicio Militar Nacional" },
                { id: 2, name: "Cédula Profesional" },
                { id: 3, name: "Título Profesional" },
                { id: 4, name: "Licencia de Conducir" },
                { id: 5, name: "Pasaporte" },
                { id: 6, name: "Carta de Naturalización" },
                { id: 7, name: "Otra" },
            ],
            sexOptions: [
                { id: 0, name: "Hombre" },
                { id: 1, name: "Mujer" },
                { id: 2, name: "Otro" },
            ],
            civilStateOptions: [
                { id: 0, name: "Soltero" },
                { id: 1, name: "Casado" },
                { id: 2, name: "Unión libre" },
                { id: 3, name: "Separado" },
                { id: 4, name: "Divorciado" },
                { id: 5, name: "Viudo" },
            ],
            schoolGradeOptions: [
                { id: 0, name: "Analfabeta" },
                { id: 1, name: "Sin estudios, sabe leer y escribir" },
                { id: 2, name: "Primaria" },
                { id: 3, name: "Secundaria" },
                { id: 4, name: "Bachillerato" },
                { id: 5, name: "Licenciatura" },
                { id: 6, name: "Posgrado" },
                { id: 7, name: "Técnica" },
            ],
            schoolStateOptions: [
                { id: 0, name: "Completa" },
                { id: 1, name: "Trunca" },
                { id: 2, name: "En curso" },
            ],
            occupationOptions: [
                { id: 0, name: "Empleado formal" },
                { id: 1, name: "Empleado informal" },
                { id: 2, name: "Desempleado" },
                { id: 3, name: "Profesionaista" },
                { id: 4, name: "Independiente" },
                { id: 5, name: "Oficios varios" },
                { id: 6, name: "Del hogar" },
            ],
            religionOptions: [
                { id: 0, name: "Catolicismo" },
                { id: 1, name: "Protestantismo" },
                { id: 2, name: "Ateísmo / Agnosticismo" },
                { id: 3, name: "Otra" },
                { id: 4, name: "Ninguna" },
                { id: 5, name: "No sabe / No responde" },
            ],
            languageOptions: [
                { id: 0, name: "Español" },
                { id: 1, name: "Inglés" },
                { id: 2, name: "Lengua nativa" },
                { id: 3, name: "Otra" },
            ],
            bloodTypeOptions: [
                { id: 0, name: "A" },
                { id: 1, name: "B" },
                { id: 2, name: "AB" },
                { id: 3, name: "O" },
            ],
            rhOptions: [
                { id: 0, value: false, name: "Negativo" },
                { id: 1, value: true, name: "Positivo" },
            ],
            relationshipOptions: [
                { id: 0, name: "Padre" },
                { id: 1, name: "Madre" },
                { id: 2, name: "Hermano" },
                { id: 3, name: "Cónyuge" },
                { id: 4, name: "Primo" },
                { id: 5, name: "Tío" },
                { id: 6, name: "Amigo" },
                { id: 7, name: "Otro" },
            ],
        };
    },
    methods: {
        updateAge: function (birthday) {
            let age = utils.calculateAge(birthday);
            return age;
        },
        verifyDni: function () {},
        setSchoolLevels: function () {
            this.allowedLevels = [];
            let grade = this.newPatient.schoolGrade;
            switch (grade) {
                case "Primaria":
                    this.allowedLevels = [
                        { name: "1", value: 1 },
                        { name: "2", value: 2 },
                        { name: "3", value: 3 },
                        { name: "4", value: 4 },
                        { name: "5", value: 5 },
                        { name: "6", value: 6 },
                    ];
                    break;
                case "Secundaria":
                    this.allowedLevels = [
                        { name: "7", value: 7 },
                        { name: "8", value: 8 },
                        { name: "9", value: 9 },
                    ];
                    break;
                case "Bachillerato":
                case "Preparatoria":
                    this.allowedLevels = [
                        { name: "10", value: 10 },
                        { name: "11", value: 11 },
                    ];
                    break;
                case "Licenciatura":
                case "Posgrado":
                    this.allowedLevels = [
                        { name: "Primer año", value: 1 },
                        { name: "Segundo año", value: 2 },
                        { name: "Tercer año", value: 3 },
                        { name: "Cuarto año", value: 4 },
                        { name: "Quinto año", value: 5 },
                    ];
            }
        },
        addAddress: function () {
            this.addresses.push(this.address);
            this.address = { street: "", number: "", crossStreetBackward: "", crossStreetForward: "" };
            //console.log(this.addresses)
        },
        createPatient: function () {
            this.newPatient.address = this.address;
            this.representative.address = this.representativeAddress;
            this.representative.phone = this.representativePhone;
            this.newPatient.representative = this.representative;
            let url = this.$store.state.apiUrl;
            url += "/patient";
            console.log(this.newPatient);
            /*
            axios
            //.post('http://localhost:8000/patient', this.newPatient)
            .post(url, this.newPatient)            
            .then(response => {
                alert("Se ha guardado el paciente correctamente");
            })
            .catch(err => {
                alert("Error al guardar el paciente");
            })
            */
        },
        toStringAddress(a) {
            return `${a.street} ${a.number} entre ${a.crossStreetBackward} y ${a.crossStreetForward}`;
        },
        getCountries() {
            axios.get("https://restcountries.com/v3.1/all").then(response => {
                let countryList = response.data;
                countryList.forEach(country => {
                    let countryName = country.name.common;
                    //console.log(countryName);
                    this.countries.push(countryName);
                });
                this.countries.sort();
            });
        },
        loadExistingPatient: function () {
            let patient;
            let url = this.$store.state.apiUrl;
            url += "/patient/" + this.patientId;
            /*Se requiere cargar los datos del paciente, de la persona, sus direccione sy números de teléfono*/
            /*Además se requiere cargar los datos del representante, de la persona, su dirección y números de teléfono*/
            /*axios
            .get(url)
            .then(response => {
                patient = response.data;
                this.newPatient = patient;
                console.log(patient);                
            })
            .catch(error => {
                console.log(`Error al cargar los datos del paciente`);
            })
            */
            return axios.get(url);
        },
        loadExistingRepresentative: function () {
            let url = this.$store.state.apiUrl;
            url += "/representative-data/" + this.patientId;
            return axios.get(url);
        },
        loadRepresentativeAddress: function () {
            let url = this.$store.state.apiUrl;
            url += `/address/${this.patientId}`;
            return axios.get(url);
        },
        loadPatientAddress: function () {
            let url = this.$store.state.apiUrl;
            url += `/address/${this.patientId}`;
            return axios.get(url);
        },
        loadAddress: function (personId) {
            let url = this.$store.state.apiUrl;
            url += "/adresses-by-person/" + personId;
            return axios.get(url);
        },
    },
    created: function () {
        this.getCountries();
        console.log(`Verificar si se recibe un id de paciente: ${this.patientId}`);
        if (this.patientId) {
            console.log(`Cargando un paciente...`);
            let url = this.$store.state.apiUrl;
            url += `/patient-form/${this.patientId}`;
            axios
                .get(url)
                .then(response => {
                    console.log("Datos obtenidos: ");
                    console.log(response.data);
                    this.loaded = true;
                    this.newPatient = response.data;
                    this.address = this.newPatient.address;
                    this.representative = this.newPatient.representative;
                    this.representativeAddress = this.representative.address;
                    this.representativePhone = this.representative.phone1;
                })
                .catch(error => {
                    console.log("Error en la petición");
                });
            //this.loadExistingPatient();
            /*
            Promise.all([this.loadExistingPatient(), this.loadExistingRepresentative()])
            .then(results => {
                let patient = results[0].data;
                console.log(patient);
                let representative = results[1].data;
                console.log(representative);
                let patientPersonId = patient.personId;
                let representativePersonId = representative.personId;  
                Promise.all([this.loadAddress(patientPersonId), this.loadAddress(representativePersonId)])
                .then(addressData => {
                    let patientAddress = addressData[0].data;
                    console.log(patientAddress);                  
                    let representativeAddress = addressData[1].data;
                    console.log(representativeAddress);                    
                })
                this.loaded = true;               
            })
            .catch(error => {
                console.log(`Algunos datos no pudieron ser recuperados`);
            })
            */
        } else {
            this.loaded = true;
        }
    },
};
</script>


<style scoped>
.button-add {
    background-color: var(--clr-buttons);
    color: #ffffff;
    align-self: flex-end;
    padding: 0.5rem;
}
</style>