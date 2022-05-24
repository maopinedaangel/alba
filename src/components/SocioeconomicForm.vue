<template>
    <div class="div-form" id="socio-economic-form">
        <div v-if="loaded">
            <h1>Estudio Socioeconómico</h1>
            <form v-on:change="calculateTotalScore">
                <section class="form-section" id="sec-header">
                    <!--Encabezado-->
                    <div class="form-line">
                        <div class="form-field">
                            <label for="inp-no-history">No. Expediente:</label>
                            <input name="inp-no-history" type="text" v-model="form.historyCode" disabled>
                        </div>
                        <div class="form-field">
                            <label for="inp-service">Servicio:</label>
                            <input name="inp-service" type="text" v-model="form.service" required>
                        </div>
                        <div class="form-field">
                            <label for="inp-date">Fecha:</label>
                            <input name="inp-date" type="date" v-model="form.date" required>        
                        </div>                                        
                    </div>
                </section>


                <section class="form-section" id="sec-general">
                    <h3>Datos generales del/a paciente:</h3>
                    <div class="form-line">
                        <div class="form-field">
                            <!--Nombre del paciente-->
                            <label for="inp-name">Nombre del Paciente:</label>
                            <!--<input name="inp-name" type="text"  v-model="patient.firstName" required>-->
                            <input name="inp-name" type="text"  v-model="form.patient.name" disabled>
                        </div>

                    </div>


                    <div class="form-line">
                        <div class="form-field">
                            <!--Sexo-->
                            <label for="inp-sex">Sexo:</label>
                            <input name="inp-sex" type="text" v-model="form.patient.sex" disabled>
                        </div>
                        <div class="form-field">
                            <!--Edad-->     
                            <label for="inp-age">Edad:</label>
                            <input name="inp-age" type="number" v-model="form.patient.age" disabled>
                        </div>                                     
                        <div class="form-field">
                            <!--Fecha de nacimiento del paciente-->
                            <label for="inp-birthdat">Fecha de nacimiento:</label>
                            <input name="inp-birthday" type="text" v-model="form.patient.birthday" disabled>
                        </div>

                    </div>

                    <div class="form-line">
                        <div class="form-field">
                            <!--Escolaridad-->
                            <label for="inp-school-grade">Escolaridad:</label>
                            <input name="inp-school-grade" type="text" v-model="form.patient.schoolGrade" disabled>
                        </div>                


                        <div class="form-field">
                            <!--Ocupación-->
                            <label for="inp-occupation">Ocupación:</label>
                            <input name="inp-occupation" type="text" v-model="form.patient.occupation" disabled>
                        </div>

                        <div class="form-field">
                            <!--Estado civil-->
                            <label for="inp-civil-status">Estado Civil:</label>
                            <input name="inp-civil-status" type="text" v-model="form.patient.civilState" disabled>
                        </div>                                   
                    </div>


                    <div class="form-line">
                        <div class="form-field">                    
                            <label for="inp-is-insured">Derechohabiente</label>
                            <input name="inp-is-insured" type="checkbox" v-model="form.patient.isInsured" disabled>
                        </div>
                        <div class="form-field">                    
                            <label for="inp-provider">Derechohabiente a:</label>
                            <input name="inp-provider" type="text" v-model="form.patient.provider" disabled>
                        </div>
                        <div class="form-field">                    
                            <label for="inp-religion">Religión:</label>
                            <input name="inp-religion" type="text" v-model="form.patient.religion" disabled>
                        </div>                                      
                    </div>

                    <div class="form-line">
                        <div class="form-field">                    
                            <label for="inp-language">Idioma:</label>
                            <input name="inp-language" type="text" v-model="form.patient.language" disabled>
                        </div>                     
                    </div>

                    <div class="form-line">
                        <div class="form-field-double">
                            <!--Dirección-->
                            <label for="inp-address">Dirección:</label>
                            <input name="inp-address" type="text" v-model="form.patient.address" disabled>
                        </div>

                    </div>


                    <div class="form-line">
                        <div class="form-field">
                            <!--Teléfono-->
                            <label for="inp-phone">Teléfono:</label>
                            <input name="inp-phone" type="text" v-model="form.patient.phone" disabled>
                        </div>                

                    </div>


                    <div class="form-line">
                        <div class="form-field">
                            <!--Nacionalidad-->
                            <label for="inp-nationality">Nacionalidad:</label>
                            <input name="inp-nationality" type="text" v-model="form.patient.country" disabled>
                        </div>                

                    </div>
                </section>


                <section class="form-section" id="sec-economic-conditions">
                    <h3>Condiciones económicas:</h3>
                    <div id="table-income-expenses" v-on:change="calculateIncome">
                                                                                            
                        <div class="div-table" id="div-income">
                            <div class="row-div-table">                        
                                <h4>Personas que Aportan</h4>
                                <h4>Ingreso Mensual</h4>
                            </div>
                            <div class="row-div-table">                                      
                                <label>Jefe/a de familia</label>
                                <input type="text" v-model.number="form.familyBossIncome">
                            </div>
                            <div class="row-div-table">                        
                                <label>Esposo/a</label>
                                <input type="text" v-model.number="form.spouseIncome">
                            </div>
                            <div class="row-div-table">                        
                                <label>Hijo/a</label>
                                <input type="text" v-model.number="form.childrenIncome">
                            </div>
                            <div class="row-div-table">                        
                                <label>Otros</label>                    
                                <input type="text" v-model.number="form.othersIncome">
                            </div>
                            <div class="row-div-table">                        
                                <label class="highlighted-text">Total</label>
                                <p class="highlighted-text">{{ form.totalIncome}}</p>
                            </div>
                            <div class="row-div-table">                        
                                <label>Número total de integrantes</label>                                                               
                                <input type="number" v-model.number="form.nMembers">
                            </div>                                         
                        </div>               
                        <div class="div-table" id="div-expenses" v-on:change="calculateExpenses">
                            <div class="row-div-table">                        
                                <h4>Desglose de Gastos</h4>
                                <h4>Egreso Mensual</h4>
                            </div>
                            <div class="row-div-table">                                                   
                                <label>Alimentación/Despensa</label>
                                <input type="text" v-model.number="form.foodExpenses">
                            </div>
                            <div class="row-div-table">                        
                                <label>Renta/Hipoteca</label>
                                <input type="text" v-model.number="form.rentExpenses">
                            </div>
                            <div class="row-div-table">                        
                                <label>Predio</label>
                                <input type="text" v-model.number="form.propertyExpenses">
                            </div>
                            <div class="row-div-table">                        
                                <label>Agua</label>
                                <input type="text" v-model.number="form.waterSupplyExpenses">
                            </div>
                            <div class="row-div-table">                        
                                <label>Luz</label>
                                <input type="text" v-model.number="form.electricityExpenses">
                            </div>
                            <div class="row-div-table">                            
                                <label>Gas</label>
                                <input type="text" v-model.number="form.gasExpenses">
                            </div>
                            <div class="row-div-table"> 
                                <label>Teléfono</label>                                                   
                                <input type="text" v-model.number="form.phoneExpenses">
                            </div>
                            <div class="row-div-table">
                                <label>Gastos Escolares</label>                                                        
                                <input type="text" v-model.number="form.schoolExpenses">
                            </div>
                            <div class="row-div-table">
                                <label>Gastos en Salud</label>
                                <input type="text" v-model.number="form.healthExpenses">
                            </div>
                            <div class="row-div-table">                                                              
                                <label>Transporte</label>
                                <input type="text" v-model.number="form.transportationExpenses">
                            </div>
                            <div class="row-div-table">                        
                                <label>Servicios Domésticos</label>
                                <input type="text" v-model.number="form.domesticWorkExpenses">
                            </div>
                            <div class="row-div-table">                        
                                <label>Consumos Adicionales</label>
                                <input type="text" v-model.number="form.otherExpenses">
                            </div>
                            <div class="row-div-table">                                                       
                                <label class="highlighted-text">Total</label>
                                <p class="highlighted-text">{{ form.totalExpenses }}</p>
                            </div>                                                   
                        </div>
                    </div>                
                </section>


                <section class="form-section" id="sec-housing">
                    <h3>Vivienda:</h3>
                    <div class="form-line">                    
                        <div class="form-field-full-line">
                            <label>Tipo de tenencia:</label>
                        </div>
                        <div class="div-inline-options">                           
                            <label for="op-possession-1">
                                <input type="radio" id="op-possession-1" value="3" v-model.number="form.possessionType">
                                Propia (3)
                            </label>
                            <label for="op-possession-2">
                                <input type="radio" id="op-possession-2" value="2" v-model.number="form.possessionType">
                                Prestada (2)
                            </label>                           
                            <label for="op-possession-3">
                                <input type="radio" id="op-possession-3" value="1" v-model.number="form.possessionType">
                                Rentada (1)
                            </label>
                            <label for="op-possession-4">
                                <input type="radio" id="op-possession-4" value="0" v-model.number="form.possessionType">
                                Otro (0)
                            </label>                        
                            <p>Puntaje: {{ form.possessionType }}</p>  
                        </div>
                    </div>
                    <div class="div-table">
                        <table class="form-table">
                            <tr>
                                <th class="column-small">Grupo</th>
                                <th>Tipo de vivienda</th>
                                <th class="column-small">Puntos</th>
                            </tr>
                            <tr v-for="(type, k) in housingTypes" :key="k">
                                <td>
                                    <label for="inp-housing-type">
                                        <input type="radio" id="op-housing-type-1" :value="type.points" v-model.number="form.housingType">
                                        {{ type.name }}
                                    </label>
                                </td>
                                <td>{{ type.type }}</td>
                                <td>{{ type.points }}</td>
                            </tr>
                        </table>
                        <p>Puntaje: {{ form.housingType }}</p> 
                    </div>
                    <div class="form-line">                    
                        <div class="form-field-full-line">
                            <label>Servicios públicos:</label>
                        </div>
                        <div class="div-inline-checks" v-on:change="updatePublicServicesPoints">                           
                            <label for="check-public-services-1">
                                <input type="checkbox" id="check-public-services-1" value="Alumbrado público" v-model="form.publicServices">
                                Alumbrado público
                            </label>
                            <label for="check-public-services-2">
                                <input type="checkbox" id="check-public-services-2" value="Pavimentación" v-model="form.publicServices">
                                Pavimentación
                            </label>                           
                            <label for="check-public-services-3">
                                <input type="checkbox" id="check-public-services-3" value="Alcantarillado" v-model="form.publicServices">
                                Alcantarillado
                            </label>
                            <label for="check-public-services-4">
                                <input type="checkbox" id="check-public-services-4" value="Recolección de basura" v-model="form.publicServices">
                                Recolección de basura
                            </label>                        
                            <p>Puntaje: {{ form.publicServicesPoints }}</p>  
                        </div>
                    </div>
                    <div class="form-line">                    
                        <div class="form-field-full-line">
                            <label>Servicios intradomiciliarios:</label>
                        </div>
                        <div class="div-inline-checks" v-on:change="updateInternalServicesPoints">                           
                            <label for="check-internal-services-1">
                                <input type="checkbox" id="check-internal-services-1" value="Alumbrado público" v-model="form.internalServices">
                                Alumbrado público
                            </label>
                            <label for="check-internal-services-2">
                                <input type="checkbox" id="check-internal-services-2" value="Pavimentación" v-model="form.internalServices">
                                Pavimentación
                            </label>                           
                            <label for="check-internal-services-3">
                                <input type="checkbox" id="check-internal-services-3" value="Alcantarillado" v-model="form.internalServices">
                                Alcantarillado
                            </label>
                            <label for="check-internal-services-4">
                                <input type="checkbox" id="check-internal-services-4" value="Recolección de basura" v-model="form.internalServices">
                                Recolección de basura
                            </label>                        
                            <p>Puntaje: {{ form.internalServicesPoints }}</p>  
                        </div>
                    </div>
                    <div class="form-line">                                    
                        <div class="form-field-full-line">
                            <label>Material Construcción:</label>
                        </div>                    
                        <div class="div-inline-options">                           
                            <label for="op-material-1">
                                <input type="radio" id="op-material-1" value="2" v-model.number="form.constructionMaterial">
                                Mampostería (2)
                            </label>
                            <label for="op-material-2">
                                <input type="radio" id="op-material-2" value="1" v-model.number="form.constructionMaterial">
                                Mixta (1)
                            </label>                           
                            <label for="op-material-3">
                                <input type="radio" id="op-material-3" value="0" v-model.number="form.constructionMaterial">
                                Lámina, madera, material de la región (0)
                            </label>
                            <p>Puntaje: {{ form.constructionMaterial }}</p>  
                        </div>
                        <div class="form-field-full-line">
                            <label>Número de dormitorios:</label>
                        </div>                    
                        <div class="div-inline-options">                           
                            <label for="op-bedrooms-1">
                                <input type="radio" id="op-bedrooms-1" value="2" v-model.number="form.bedrooms">
                                5 a más (2)
                            </label>
                            <label for="op-bedrooms-2">
                                <input type="radio" id="op-bedrooms-2" value="1" v-model.number="form.bedrooms">
                                3 - 4 (1)
                            </label>                           
                            <label for="op-bedrooms-3">
                                <input type="radio" id="op-bedrooms-3" value="0" v-model.number="form.bedrooms">
                                1 - 2 (0)
                            </label>
                            <p>Puntaje: {{ form.bedrooms }}</p>  
                        </div>
                        <div class="form-field-full-line">
                            <label>Número de personas por dormitorio:</label>
                        </div>                    
                        <div class="div-inline-options">                           
                            <label for="op-persons-by-bedroom-1">
                                <input type="radio" id="op-persons-by-bedroom-1" value="2" v-model.number="form.personsByBedroom">
                                1 - 2 (2)
                            </label>
                            <label for="op-persons-by-bedroom-2">
                                <input type="radio" id="op-persons-by-bedroom-2" value="1" v-model.number="form.personsByBedroom">
                                3 (1)
                            </label>                           
                            <label for="op-persons-by-bedroom-3">
                                <input type="radio" id="op-persons-by-bedroom-3" value="0" v-model.number="form.personsByBedroom">
                                4 o más (0)
                            </label>
                            <p>Puntaje: {{ form.personsByBedroom }}</p>  
                        </div>                                                                                       
                    </div>                                                                 
                </section>


                <section class="form-section" id="sec-health-condition">
                    <h3>Estado de salud:</h3>
                    <div class="form-line">                
                        <div class="form-field">
                            <label for="inp-diagnostic">Diagnóstico médico del paciente:</label>
                            <input name="inp-diagnostic" type="text" v-model="form.diagnostic" required>                         
                        </div>
                    </div>
                    <div class="form-line">                    
                        <div class="form-field-full-line">
                            <label>¿Desde hace cuánto tiempo está enfermo?:</label>
                            <!--<input name="inp-illness-duration" type="text" required>-->
                        </div>
                    <!--</div>
                    <div class="form-line">-->                        
                        <div class="div-inline-options">                           
                            <label for="op-duration-1">
                                <input type="radio" id="op-duration-1" value="2" v-model.number="form.illnessDuration">
                                Menos de 3 meses o sin comorbilidad (2)
                            </label>
                            <label for="op-duration-2">
                                <input type="radio" id="op-duration-2" value="1" v-model.number="form.illnessDuration">
                                De 3 a 6 meses (1)
                            </label>                           
                            <label for="op-duration-3">
                                <input type="radio" id="op-duration-3" value="0" v-model.number="form.illnessDuration">
                                Más de 6 meses (0)
                            </label>
                            <p>Puntaje: {{ form.illnessDuration }}</p>  
                        </div>                                               
                    </div>

                    <div class="form-line">                    
                        <div class="form-field-full-line">
                            <label>¿El/la paciente tiene otros problemas de salud, además del que presenta y por el cual se atiende en otra institución?:</label>
                        </div>
                    <!--</div>
                    <div class="form-line">-->                      
                        <div class="div-inline-options">                            
                            <label for="other-diseases-no">
                                <input type="radio" id="other-diseases-no" value="1" v-model.number="form.otherDiseases">
                                No (1)
                            </label>
                            <label for="other-disease-yes">
                                <input type="radio" id="other-diseases-yes" value="0" v-model.number="form.otherDiseases">
                                Sí (0)
                            </label>
                            <p>Puntaje: {{ form.otherDiseases }}</p>                         
                        </div>
                    </div>
                    <div class="form-line">                     
                        <div class="form-field-double">
                            <label for="inp-disease">¿Cúal?:</label>
                            <input name="inp-disease" type="text" v-model="form.disease" required>                       
                        </div>
                        <div class="form-field-double">
                            <label for="inp-institution">¿Dónde se atiende?:</label>
                            <input name="inp-institution" type="text" v-model="form.institution" required>                         
                        </div>                                                                                   
                    </div>
                    <div class="form-line">                    
                        <div class="form-field-full-line">
                            <label>Estado de salud de los integrantes de la familia:</label>
                        </div>                     
                        <div class="div-inline-options">                           
                            <label for="op-family-condition-1">
                                <input type="radio" id="op-family-condition-1" value="2" v-model.number="form.familyCondition">
                                Ningún enfermo (2)
                            </label>
                            <label for="op-family-condition-1">
                                <input type="radio" id="op-family-condition-2" value="1" v-model.number="form.familyCondition">
                                Un enfermo (1)
                            </label>
                            <label for="op-family-condition-1">
                                <input type="radio" id="op-family-condition-2" value="0" v-model.number="form.familyCondition">
                                Dos y el principal proveedor económico (0)
                            </label>                                                  
                            <p>Puntaje: {{ form.familyCondition }}</p>  
                        </div>                                               
                    </div>                                                                    
                </section>


                <section class="form-section" id="sec-genogram">
                    <h3>Familiograma:</h3>
                </section>


                <section class="form-section" id="sec-family-dynamics">
                    <!--Dinámica familiar-->                  
                    <h3>Dinámica familiar:</h3>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Cómo se siente en relación a su familia?:</label>
                            <textarea v-model="form.feelingsAboutFamily" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Cómo cree que su familia se siente con usted?:</label>
                            <textarea v-model="form.familyFeelings" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué cree que necesita mejorar su familia?:</label>
                            <textarea v-model="form.familyNeedsToImprove" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Qué cree usted que necesita mejorar con respecto a su familia?:</label>
                            <textarea v-model="form.patientNeedsToImprove" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Con quién de su familia suele tener diferencias?:</label>
                            <textarea v-model="form.hasDisagreementsWith" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>¿Con quién de su familia suele llevar a cabo acuerdos?:</label>
                            <textarea v-model="form.hasAgreementsWith" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Diagnóstico Social:</label>
                            <textarea v-model="form.socialDiagnostic" required></textarea><br>
                        </div>
                    </div>                                                           
                </section>

                <section class="form-section" id="sec-summary">
                    <div class="form-line">
                        <div class="form-field">
                            <label>Total de puntos: {{ form.totalScore }}</label>
                        </div>
                        <div class="form-field">
                            <label>Nivel de Estudio socioeconómico: {{ form.socioeconomicLevel }}</label>
                        </div>                        
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Nombre y firma del entrevistado/a:</label>
                            <input name="inp-interviewee" type="text" v-model="form.interviwee" required>                             
                        </div>                      
                    </div>
                    <div class="form-line">
                        <div class="form-field-triple">
                            <label>Nombre y firma del profesional en trabajo social:</label>
                            <input name="inp-social-worker" type="text" v-model="form.socialWorker" required>
                        </div>
                        <div class="form-field-triple">
                            <label>Cédula profesional:</label>
                            <input name="inp-professional-card" type="text" v-model="form.professionalCard" required>
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
import axios from 'axios';
import utils from '../utils.js'
export default {
    name: 'SocioEconomicForm',
    //props: ['existing', 'patientdata', 'representativedata'],
    props: ['id', 'existing', 'idForm', 'idTreatment'],
    data: function() {
        return {
            formId: this.idForm,
            treatmentId: this.idTreatment,            
            loaded: false,
            userId: "",
            patient: "",
            representative: "",
            isExisting: this.existing,
            //patientId:"",
            //patientName: "",
            //patientAge: "",
            //patientAddress: "",
            //representativeName: "",
            housingTypes:[
                {
                    group: 1,
                    name: 'Grupo 1',
                    type: 'Institución de protección social, cueva, choza, jacal, casa rural, barranca, tugurio o cuarto redondo o sin vivienda',
                    points: 0
                },
                {
                    group: 2,                    
                    name: 'Grupo 2',
                    type: 'Vecindad o cuarto de servicio',
                    points: 1
                },
                {
                    group: 3,                    
                    name: 'Grupo 3',
                    type: 'Departamento o casa popular, unidades habitacionales (interés social)',
                    points: 2
                },
                {
                    group: 4,                    
                    name: 'Grupo 4',
                    type: 'Departamento o casa clase medio con financiamiento propio o hipoteca',
                    points: 3
                },
                {
                    group: 5,                    
                    name: 'Grupo 5',
                    type: 'Departamento o casa residencial',
                    points: 4
                },                                                                
            ],                       
            form: {
                patient: {
                    name: "",
                    sex: "",
                    age: "",
                    birthday: "",
                    schoolGrade: "",
                    occupation: "",
                    civilState: "",
                    isInsured: "",
                    provider: "",
                    religion: "",
                    language: "",
                    address: "",
                    phone: "",
                    country: ""

                },
                representative: {
                    name: "",
                    relationship: "",
                    age: "",
                    address: "",
                    phone: "",
                },
                historyCode: "",
                service: "",
                date: "",
                diagnostic: "",
                illnessDuration: "",
                otherDiseases: "",
                disease: "",
                institution: "",
                familyCondition: "",
                possessionType: "",
                housingType: "",
                publicServices: [],
                publicServicesPoints: 0,
                internalServices: [],
                internalServicesPoints: 0,
                constructionMaterial: "",
                bedrooms: "",
                personsByBedroom: "",            
                familyBossIncome: 0,
                spouseIncome: 0,
                childrenIncome: 0,
                othersIncome: 0,
                totalIncome: 0,
                nMembers: 0,
                foodExpenses: 0,
                rentExpenses: 0,
                propertyExpenses: 0,
                waterSupplyExpenses: 0,
                electricityExpenses: 0,
                gasExpenses: 0,
                phoneExpenses: 0,
                schoolExpenses: 0,
                healthExpenses: 0,
                transportationExpenses: 0,
                domesticWorkExpenses: 0,
                otherExpenses: 0,
                totalExpenses: 0,
                totalScore: 0,
                feelingsAboutFamily: "",
                familyFeelings: "",
                familyNeedsToImprove: "",
                patientNeedsToImprove: "",
                hasDisagreementsWith: "",
                hasAgreementsWith: "",
                socialDiagnostics: "",
                socioEconomicLevel: "",
                interviewee: "",
                socialWorker: "",
                professionalCard: ""
            }
        }
    },
    computed: {
        /*
        publicServicesPoints: function() {
            let nServices = this.form.publicServices.length;
            return nServices === 0 ? 0: nServices - 1;
        },
        internalServicesPoints: function() {
            let nServices = this.form.internalServices.length;
            return nServices === 0 ? 0: nServices - 1;
        },
        */
        /*
        totalScore: function() {
            let points = 0;
            points += this.form.possessionType + this.form.housingType + this.form.publicServicesPoints + this.form.internalServicesPoints
            points += this.form.constructionMaterial + this.form.bedrooms + this.form.personsByBedroom
            points += this.form.illnessDuration + this.form.otherDiseases + this.form.familyCondition
            return points
        },
        */
        /*
        totalIncome: function() {
            let total = 0;
            total += this.form.familyBossIncome + this.form.spouseIncome + this.form.childrenIncome + this.form.othersIncome;                     
            return total;
        },
        */
       /*
        totalExpenses: function() {
            let total = 0;
            total += this.form.foodExpenses + this.form.rentExpenses + this.form.propertyExpenses + this.form.waterSupplyExpenses;
            total += this.form.electricityExpenses + this.form.gasExpenses + this.form.phoneExpenses + this.form.schoolExpenses + this.form.healthExpenses;
            total += this.form.transportationExpenses + this.form.domesticWorkExpenses + this.form.otherExpenses;
            return total;
        }
        */
    },
    methods: {
        calculateAge: function(birthday) {
            return utils.calculateAge(birthday);
        },
        updatePublicServicesPoints: function() {
            console.log(this.form.publicServices);
            let nServices = this.form.publicServices.length;
            this.form.publicServicesPoints = nServices === 0 ? 0: nServices - 1;
        },
        updateInternalServicesPoints: function() {
            console.log(this.form.internalServices);            
            let nServices = this.form.internalServices.length;
            this.form.internalServicesPoints = nServices === 0 ? 0: nServices - 1;
        },
        calculateIncome: function() {
            this.form.totalIncome = this.form.familyBossIncome + this.form.spouseIncome + this.form.childrenIncome + this.form.othersIncome; 
        },
        calculateExpenses: function() {
            this.form.totalExpenses = this.form.foodExpenses + this.form.rentExpenses + this.form.propertyExpenses + this.form.waterSupplyExpenses + this.form.electricityExpenses + this.form.gasExpenses + this.form.phoneExpenses + this.form.schoolExpenses + this.form.healthExpenses + this.form.transportationExpenses + this.form.domesticWorkExpenses + this.form.otherExpenses;
        },
        calculateTotalScore: function() {
            this.form.totalScore = this.form.possessionType + this.form.housingType + this.form.publicServicesPoints + this.form.internalServicesPoints + this.form.constructionMaterial + this.form.bedrooms + this.form.personsByBedroom + this.form.illnessDuration + this.form.otherDiseases + this.form.familyCondition
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
            //this.form.patient.id = this.patient.patientId
            //this.form.patient.dni = this.patient.dni
            this.form.patient.name = `${this.patient.firstName} ${this.patient.lastName}`                    
            this.form.patient.birthday = this.patient.birthday
            this.form.patient.age = this.calculateAge(this.patient.birthday)
            console.log(this.form.patient.age);              
            this.form.patient.sex = this.patient.sex            
            this.form.patient.address = this.patient.address
            this.form.patient.phone = this.patient.phones[0]
            this.form.patient.country = this.patient.country
            this.form.patient.civilState = this.patient.civilState
            this.form.patient.schoolGrade = this.patient.schoolGrade
            this.form.patient.occupation = this.patient.occupation
            this.form.historyCode = this.patient.code
                    
        },
        loadRepresentativeData: function() {
            //this.form.representative.id = this.representative.patientId
            this.form.representative.name = `${this.representative.firstName} ${this.representative.lastName}`
            this.form.representative.age = this.calculateAge(this.representative.birthday)
            this.form.representative.relationship = this.representative.relationship
            //this.form.representative.occupation = this.representative.occupation             
            this.form.representative.address = this.representative.address
            this.form.representative.phone = this.representative.phones[0]
            console.log(this.representative.phone);                      
        },
        saveForm: function() {
            let formData = {
                treatmentId: this.treatmentId,
                formTypeId: 2,
                data: JSON.stringify(this.form),
                userId: this.userId
            }
            console.log(formData);            
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
        }      
    },
    beforeCreate: function() {
        this.patientId = this.$route.params.id;
        this.isExisting = this.$route.params.existing;
    },    
    created: function() {
       /*
       this.patientName = `${this.patient.firstName} ${this.patient.lastName}`
       this.representativeName = `${this.representative.firstName} ${this.representative.lastName}`       
       this.patientAge = this.calculateAge(this.patient.birthday)
       this.representativeAge = this.calculateAge(this.representative.birthday)
       */

        if (this.isExisting) {
            let url = this.$store.state.apiUrl;
            url += "/form/" + this.formId;
            axios
            .get(url)
            .then( response => {
                this.form = response.data.data;
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
                console.log(this.patient.firstName);
                console.log(this.representative.firstName);
                this.loadPatientData();
                this.loadRepresentativeData()
                this.userId = 1;
                this.loaded = true;                 
            })
            .catch( error => {
                alert("No se encuentran los datos.")
            });
        }             
    }
}
</script>


<style scoped>
#table-income-expenses {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.div-table {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
.column-small {
    min-width: 200px; 
}
.row-div-table {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
}
.row-div-table label,
.row-div-table input,
.row-div-table p,
.row-div-table h4 {
    width: 20%;
    /*margin-left: 1%;
    margin-right: 1%;*/
    min-width: 200px;
}
.row-div-table input,
.row-div-table p {
    text-align: right;
}
.row-div-table h4 {
    text-align: center;
}
.highlighted-text {
    font-weight: bold;
}
</style>