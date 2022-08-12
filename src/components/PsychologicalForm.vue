<template>
    <div class="div-form" id="div-psychological-form">
        <div v-if="loaded">
            <h1>Historia Clínica Psicológica</h1>
            <form>
                <section id="sec-general">
                    <div class="form-line">
                        <div class="form-field">
                            <!--Fecha de elaboración del formato-->
                            <label for="inp-date">Fecha:</label>
                            <input name="inp-date" type="date" v-model="form.date" required />
                        </div>
                        <div class="form-field">
                            <!--Hora de elaboración del formato-->
                            <label for="inp-hour">Hora:</label>
                            <input name="inp-hour" type="time" v-model="form.hour" required />
                        </div>
                        <div class="form-field">
                            <!--Número del expediente médico-->
                            <label for="inp-no-history">No. Expediente:</label>
                            <input name="inp-no-history" type="text" v-model="form.historyNumber" required />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-double">
                            <!--Nombre del paciente-->
                            <label for="inp-name">Nombre completo:</label>
                            <input name="inp-name" type="text" v-model="form.patient.name" required />
                        </div>
                        <div class="form-field">
                            <!--Estado civil-->
                            <label for="inp-civil-state">Estado civil:</label>
                            <input name="inp-civil-state" type="text" v-model="form.patient.civilState" required />
                        </div>
                        <div class="form-field">
                            <!--Escolaridad-->
                            <label for="inp-school-grade">Escolaridad:</label>
                            <input name="inp-school-grade" type="text" v-model="form.patient.schoolGrade" required />
                        </div>
                    </div>
                </section>

                <section id="sec-reasons-to-consult">
                    <h2>Motivo de consulta</h2>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué o quién lo motivó a ingresar?</label>
                            <textarea v-model="form.reasonsToConsult.encouragedBy" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                ¿En qué época y bajo qué circunstancias comenzó a darle significado al uso de las
                                drogas?
                            </label>
                            <textarea v-model="form.reasonsToConsult.beginningOfUse" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Descripción física al momento de la entrevista:</label>
                            <textarea v-model="form.reasonsToConsult.physicalDescription" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Cuál es la droga de impacto?:</label>
                            <textarea v-model="form.reasonsToConsult.impactDrug" required></textarea>
                            <br />
                        </div>
                    </div>
                </section>

                <section id="sec-family-history">
                    <h2>Historia familiar</h2>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Con quién vive y cómo es el ambiente allí?</label>
                            <textarea v-model="form.familyHistory.liveWith" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Nombre del padre. ¿Quá ha significado en su vida? ¿Cuál es su relación?</label>
                            <textarea v-model="form.familyHistory.father" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Ocupación:</label>
                            <textarea v-model="form.familyHistory.fatherOccupation" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Nombre de la madre. ¿Quá ha significado en su vida? ¿Cuál es su relación?</label>
                            <textarea v-model="form.familyHistory.mother" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Ocupación:</label>
                            <textarea v-model="form.familyHistory.motherOccupation" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Cómo es su relación con sus hermanos? ¿Qué puesto ocupa entre ellos?</label>
                            <textarea v-model="form.familyHistory.siblings" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Tiene o ha tenido pareja? ¿Cómo ha sido su relación?</label>
                            <textarea v-model="form.familyHistory.spouse" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Número de hijos y explique: ¿Cómo es la relación con ellos?</label>
                            <textarea v-model="form.familyHistory.children" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Cuál ha sido la persona más significativa en su vida? ¿Por qué?</label>
                            <textarea v-model="form.familyHistory.mostImportantPerson" required></textarea>
                            <br />
                        </div>
                    </div>
                </section>

                <section id="sec-personal-history">
                    <h2>Historia personal</h2>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué eventos importantes, significativos recuerda de su adolescencia?</label>
                            <textarea v-model="form.personalHistory.significantEvents" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field">
                            <label for="inp-sexual-initiation">Edad de inicio de actividad sexual</label>
                            <input
                                name="inp-sexual-initiation"
                                type="text"
                                v-model.number="form.personalHistory.sexualInitiationAge" />
                        </div>
                        <div class="form-field">
                            <label for="inp-sexual-preference">¿Cuál es su elección sexual?</label>
                            <input
                                name="inp-sexual-preference"
                                type="text"
                                v-model="form.personalHistory.sexualPreference" />
                        </div>
                        <div class="form-field-double">
                            <label for="inp-hiv-test">¿Se ha practicado prueba de VIH/Sida?</label>
                            <input name="inp-hiv-test" type="text" v-model="form.personalHistory.hivTest" />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Ha prometido a algún familiar que dejará de consumir? ¿En cuántas ocasiones?</label>
                            <textarea v-model="form.personalHistory.promisesToStopUsingDrugs" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué resultados ha obtenido?</label>
                            <textarea v-model="form.personalHistory.results" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Dos razones importantes por las que decide dejar de consumir drogas</label>
                            <textarea v-model="form.personalHistory.firstReasonToStopUsingDrugs" required></textarea>
                            <br />
                            <textarea v-model="form.personalHistory.secondReasonToStopUsingDrugs" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                ¿Toma medicamentos actualmente? ¿Para qué enfermedad? Anotar nombre de medicamento,
                                dosis y quién recetó.
                            </label>
                            <textarea v-model="form.personalHistory.medicine" required></textarea>
                            <br />
                        </div>
                    </div>
                </section>

                <section id="sec-general">
                    <h2>Historia laboral</h2>
                    <div class="form-line">
                        <div class="form-field-triple">
                            <label for="inp-last-job">¿Cuál fue su último empleo?</label>
                            <input name="inp-last-job" type="text" v-model="form.workHistory.lastJob" />
                        </div>
                        <div class="form-field">
                            <label for="inp-antiquity">Antigüedad:</label>
                            <input name="inp-antiquity" type="text" v-model="form.workHistory.antiquity" />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿En qué otra actividad laboral se ha desempeñado?</label>
                            <textarea v-model="form.workHistory.otherWorkActivities" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Cómo se ha sentido en estas actividades laborales?</label>
                            <textarea v-model="form.workHistory.feelingsAboutWork" required></textarea>
                            <br />
                        </div>
                    </div>
                </section>

                <section id="sec-social-history">
                    <h2>Historia social</h2>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Cómo se ha relacionado socialmente?</label>
                            <textarea v-model="form.socialHistory.socialRelationship" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Han cambiado sus relaciones sociales posteriores al consumo?</label>
                            <textarea v-model="form.socialHistory.changesInSocialRelationship" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qupe relaciones positivas conserva? Explique.</label>
                            <textarea v-model="form.socialHistory.positiveRelationships" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Ha vivido en la calle? ¿Cuánto tiempo? ¿Cómo ha sido esta experiencia?</label>
                            <textarea v-model="form.socialHistory.lifeOnTheStreet" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué cosas o actividades le divierten más?</label>
                            <textarea v-model="form.socialHistory.funActivities" required></textarea>
                            <br />
                        </div>
                    </div>
                </section>

                <section id="sec-drugs-use-history">
                    <h2>Historia de consumo</h2>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                ¿Recuerda algún evento significativo en su infancia, adolescencia o reciente que pueda
                                relacionarse con el inicio o aumento del consumo?
                            </label>
                            <textarea v-model="form.drugsUseHistory.relatedEvents" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué podría usted determinar como pérdidas durante el tiempo de consumo?</label>
                            <textarea v-model="form.drugsUseHistory.losses" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué personas cercanas se vieron afectadas por su consumo? ¿De qué manera?</label>
                            <textarea v-model="form.drugsUseHistory.peopleAffected" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>
                                ¿Ha estado en tratamientos anteriores? ¿Último establecimiento? ¿Cuánto tiempo?
                            </label>
                            <textarea v-model="form.drugsUseHistory.previousTreatments" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué espera de este tratamiento?</label>
                            <textarea v-model="form.drugsUseHistory.expectationsAboutTreatment" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué quiere ser en el futuro?</label>
                            <textarea v-model="form.drugsUseHistory.lifeGoals" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué debe hacer para lograrlo?</label>
                            <textarea v-model="form.drugsUseHistory.plansToMeetGoals" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <!--<div class="div-inline-checks" v-on:change="updatePublicServicesPoints">-->
                        <!--
                        <div
                            v-for="(symptom, k) in symptoms"
                            :key="k"
                            class="div-inline-checks"
                            v-on:change="updateSymptoms">
                            <label :for="`check-symptoms-${symptom.replaceAll(' ', '-').toLowerCase()}`">
                                <input
                                    type="checkbox"
                                    :id="`check-symptoms-${symptom.replaceAll(' ', '-').toLowerCase()}`"
                                    :value="symptom"
                                    v-model="form.drugsUseHistory.symptoms" />
                                {{ symptom }}
                            </label>
                        </div>
                        -->
                        <div
                            v-for="(symptom, k) in symptoms"
                            :key="k"
                            class="div-inline-checks"
                            v-on:change="updateChecks">
                            <label :for="`check-symptoms-${symptom.key}`">
                                <input
                                    type="checkbox"
                                    :id="`check-symptoms-${symptom.key}`"
                                    :value="symptom.name"
                                    v-model="form.drugsUseHistory.symptoms" />
                                {{ symptom.name }}
                            </label>
                        </div>
                    </div>
                </section>

                <section id="sec-legal-history">
                    <h2>Historia legal</h2>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Tiene antecedentes delictivos? ¿De qué tipo?</label>
                            <textarea v-model="form.legalHistory.criminalBackground" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Cómo conseguía el dinero para consumir?</label>
                            <textarea v-model="form.legalHistory.sourceOfMoneyForDrugs" required></textarea>
                            <br />
                        </div>
                    </div>
                </section>

                <section id="sec-observations">
                    <h2>Observaciones</h2>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Observaciones:</label>
                            <textarea v-model="form.observations.remarks" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Comportamiento durante la entrevista:</label>
                            <textarea v-model="form.observations.behaviorDuringInterview" required></textarea>
                            <br />
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>RESULTADOS DE PRUEBAS APLICADAS:</label>
                            <textarea v-model="form.observations.testsResults" required></textarea>
                            <br />
                        </div>
                    </div>
                </section>

                <section id="sec-diagnosis">
                    <h2>Diagnóstico presuntivo</h2>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Señale el tipo de diagnóstico al momento de la evaluación (CIE-10):</label>
                            <CIE v-on:add-diagnosis="addDiagnosis" />
                            <textarea v-model="form.diagnosis.diagnosis" required></textarea>
                            <br />
                        </div>
                    </div>

                    <!--<h2>Grado de Dependencia</h2>--->
                    <div class="form-line">
                        <div class="form-field">
                            <!--Grado de dependencia:-->
                            <label for="inp-dependance-degree">Grado de dependencia:</label>
                            <select
                                name="sel-dependance-degree"
                                id="sel-dependance-degree"
                                v-model="form.diagnosis.dependanceDegree"
                                v-on:change="updateChecks">
                                <option value="Leve">Leve</option>
                                <option value="Moderado">Moderado</option>
                                <option value="Grave">Grave</option>
                            </select>
                        </div>
                        <!--</div>
                    <h2>Pronóstico</h2>
                    <div class="form-line">
                    -->
                        <div class="form-field">
                            <!--Pronóstico:-->
                            <label for="inp-prognosis">Pronóstico:</label>
                            <select
                                name="sel-prognosis"
                                id="sel-prognosis"
                                v-model="form.diagnosis.prognosis"
                                v-on:change="updateChecks">
                                <option value="Favorable">Favorable</option>
                                <option value="Desfavorable">Desfavorable</option>
                                <option value="Reservado">Reservado</option>
                            </select>
                        </div>
                    </div>
                </section>

                <section id="sec-general">
                    <!--<h2>Plan de tratamiento</h2>-->
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Plan de tratamiento:</label>
                            <textarea v-model="form.diagnosis.treatmentPlan" required></textarea>
                            <br />
                        </div>
                    </div>
                </section>

                <section id="sec-doctor">
                    <h2>(Datos del médico)</h2>
                    <div class="form-line">
                        <div class="form-field-double">
                            <label for="inp-doctor-name">Nombre completo del psicólogo:</label>
                            <input name="inp-doctor-name" type="text" v-model="form.doctor.fullName" />
                        </div>
                        <div class="form-field">
                            <label for="inp-doctor-sign">Firma del psicólogo:</label>
                            <input name="inp-doctor-sign" type="text" v-model="form.doctor.sign" />
                        </div>
                        <div class="form-field">
                            <label for="inp-doctor-card">Número de Cédula Profesional:</label>
                            <input name="inp-doctor-card" type="text" v-model="form.doctor.professionalCard" />
                        </div>
                    </div>
                </section>
                <div class="btn-submit" v-on:click="saveForm">Guardar</div>
            </form>
        </div>
        <div v-else>Obteniendo datos...</div>
    </div>
</template>


<script>
import axios from "axios";
import utils from "../utils";
import CIE from "./CIE.vue";
export default {
    name: "PsychologialForm",
    props: ["id", "existing", "idForm", "idTreatment"],
    components: {
        CIE,
    },
    data: function () {
        return {
            formId: this.idForm,
            loaded: false,
            patient: "",
            userId: "",
            isExisting: this.existing,
            treatmentId: this.idTreatment,
            form: {
                date: "",
                hour: "",
                historyNumber: "",
                patient: {
                    name: "",
                    civilState: "",
                    schoolGrade: "",
                },
                reasonsToConsult: {
                    encouragedBy: "",
                    beginningOfUse: "",
                    physicalDescription: "",
                    impactDrug: "",
                },
                familyHistory: {
                    liveWith: "",
                    father: "",
                    fatherOccupation: "",
                    mother: "",
                    motherOccupation: "",
                    siblings: "",
                    spouse: "",
                    children: "",
                    mostImportantPerson: "",
                },
                personalHistory: {
                    significantEvents: "",
                    sexualInitiationAge: "",
                    sexualPreference: "",
                    hivTest: "",
                    promisesToStopUsingDrugs: "",
                    results: "",
                    firstReasonToStopUsingDrugs: "",
                    secondReasonToStopUsingDrugs: "",
                    medicine: "",
                },
                workHistory: {
                    lastJob: "",
                    antiquity: "",
                    otherWorkActivities: "",
                    feelingsAboutWork: "",
                },
                socialHistory: {
                    socialRelationship: "",
                    changesInSocialRelationship: "",
                    positiveRelationships: "",
                    lifeOnTheStreet: "",
                    funActivities: "",
                },
                drugsUseHistory: {
                    relatedEvents: "",
                    losses: "",
                    peopleAffected: "",
                    previousTreatments: "",
                    expectationsAboutTreatment: "",
                    lifeGoals: "",
                    plansToMeetGoals: "",
                    symptoms: [],
                },
                legalHistory: {
                    criminalBackground: "",
                    sourceOfMoneyForDrugs: "",
                },
                observations: {
                    remarks: "",
                    behaviorDuringInterview: "",
                    testsResults: "",
                },
                diagnosis: {
                    diagnosis: "",
                    dependanceDegree: "",
                    prognosis: "",
                    treatmentPlan: "",
                },
                doctor: {
                    fullName: "",
                    sign: "",
                    professionalCard: "",
                },
            },
            /*
            symptoms: [
                "Alucinaciones",
                "depresión",
                "Alteraciones del sueño",
                "Delirios",
                "Ansiedad",
                "Alteraciones de alimentación",
                "Idea suicida",
                "Euforia",
                "Alteraciones de memoria",
                "Intento suicida",
                "Ataque de pánico",
                "Alteración de juicio",
                "Dificultad para concentrarse",
                "Alteración de atención",
            ],
            */
            symptoms: [
                { id: 1, key: "hallucinations", name: "Alucinaciones" },
                { id: 2, key: "depression", name: "Depresión" },
                { id: 3, key: "sleep-disturbances", name: "Alteraciones del sueño" },
                { id: 4, key: "delusions", name: "Delirios" },
                { id: 5, key: "anxiety", name: "Ansiedad" },
                { id: 6, key: "eating-disturbances", name: "Alteraciones de alimentación" },
                { id: 7, key: "suicidal-ideation", name: "Idea suicida" },
                { id: 8, key: "euphoria", name: "Euforia" },
                { id: 9, key: "memory-disturbances", name: "Alteraciones de memoria" },
                { id: 10, key: "suicide-attempt", name: "Intento suicida" },
                { id: 11, key: "panic-attack", name: "Ataque de pánico" },
                { id: 12, key: "impaired-judgment", name: "Alteración de juicio" },
                { id: 13, key: "concentration-difficulty", name: "Dificultad para concentrarse" },
                { id: 14, key: "attention-disturbance", name: "Alteración de atención" },
            ],
        };
    },
    methods: {
        saveForm: function () {
            console.log(this.form);
            let formData = {
                treatmentId: this.treatmentId,
                formTypeId: 4,
                data: JSON.stringify(this.form),
                userId: this.userId,
            };
            let url = this.$store.state.apiUrl;
            url += "/form";
            console.log(formData);
            axios
                .post(url, formData)
                .then(response => {
                    alert("El formulario ha sido guardado.");
                })
                .catch(err => {
                    alert("Se presentó un error al intentar guardar el formulario." + err);
                });
        },
        updateChecks: function () {
            console.log(this.form.drugsUseHistory.symptoms);
            console.log(this.form.diagnosis.dependanceDegree);
            console.log(this.form.diagnosis.prognosis);
        },
        addDiagnosis: function ({ code, title }) {
            this.form.diagnosis.diagnosis += `${code}: ${title}\n`;
        },
        getNow: function () {
            let local = new Date();
            local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
            this.form.date = local.toISOString().slice(0, 10);
            this.form.hour = local.toISOString().slice(11, 19);
        },
        loadPatientData: function () {
            let url = this.$store.state.apiUrl;
            url += "/patient-data/" + this.patientId;
            axios
                .get(url)
                .then(response => {
                    this.patient = response.data;
                    /*
                    this.form.patient.name = `${this.patient.firstName} ${this.patient.lastName}`;
                    this.form.patient.civilState = this.patient.civilState;
                    this.form.patient.schoolGrade = this.patient.schoolGrade;
                    */
                    this.form.historyNumber = this.patient.code;
                    let { firstName, lastName, civilState, schoolGrade } = this.patient;
                    let name = `${firstName} ${lastName}`;
                    this.form.patient = { name, civilState, schoolGrade };
                    this.loaded = true;
                })
                .catch(err => {
                    alert("Error al tratar de recuperar los datos del paciente" + err);
                });
        },
    },
    beforeCreate: function () {
        this.patientId = this.$route.params.id;
        this.isExisting = this.$route.params.existing;
    },
    created: function () {
        //this.loaded = true;
        this.patientId = this.$route.params.id;
        this.isExisting = this.$route.params.existing;
        setInterval(this.getNow, 1000);
        if (this.isExisting) {
            let url = this.$store.state.apiUrl;
            url += "/form/" + this.formId;
            axios
                .get(url)
                .then(response => {
                    this.form = response.data.data;
                    this.loaded = true;
                })
                .catch(err => {
                    alert("No se encuentran los datos." + err);
                });
        } else {
            this.loadPatientData();
            this.userId = 1;
            //console.log(`id Paciente: ${this.patientId}`);
        }
    },
};
</script>


<style scoped>
</style>