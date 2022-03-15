<template>
    <div class="div-form" id="socio-economic-form">
        <h1>Estudio Socioeconómico</h1>
        <form>
            <section class="form-section" id="sec-header">
                <!--Encabezado-->
                <div class="form-line">
                    <div class="form-field">
                        <label for="inp-no-history">No. Expediente:</label>
                        <input name="inp-no-history" type="text" required>                         
                    </div>
                    <div class="form-field">
                        <label for="inp-service">Servicio:</label>
                        <input name="inp-service" type="text" required>                         
                    </div>
                    <div class="form-field">
                        <label for="inp-date">Fecha:</label>
                        <input name="inp-date" type="date" required>                         
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
                        <input name="inp-name" type="text"  v-model="patientName" disabled>                        
                    </div>

                </div>


                <div class="form-line">
                    <div class="form-field">
                        <!--Fecha de nacimiento del paciente-->
                        <label for="inp-birthdat">Fecha de nacimiento:</label>
                        <input name="inp-birthday" type="text" v-model="patient.birthday" disabled>
                    </div>

                    <div class="form-field">
                        <!--Edad-->     
                        <label for="inp-age">Edad:</label>
                        <input name="inp-age" type="number" v-model="patientAge" disabled>
                    </div>

                    <div class="form-field">
                        <!--Sexo-->
                        <label for="inp-sex">Sexo:</label>
                        <input name="inp-sex" type="text" v-model="patient.sex" disabled>
                    </div>

                </div>


                <div class="form-line">
                    <div class="form-field-double">
                        <!--Dirección-->
                        <label for="inp-address">Dirección:</label>
                        <input name="inp-address" type="text" v-model="patient.address" disabled>
                    </div>

                </div>


                <div class="form-line">
                    <div class="form-field">
                        <!--Teléfono-->
                        <label for="inp-phone">Teléfono:</label>
                        <input name="inp-phone" type="text" v-model="patient.phones[0]" disabled>
                    </div>                

                </div>


                <div class="form-line">
                    <div class="form-field">
                        <!--Nacionalidad-->
                        <label for="inp-nationality">Nacionalidad:</label>
                        <input name="inp-nationality" type="text" v-model="patient.country" disabled>
                    </div>                


                    <div class="form-field">
                        <!--Estado civil-->
                        <label for="inp-civil-status">Estado Civil:</label>
                        <!--<input name="inp-civil-status" type="text" required>-->
                        <select name="sel-civil-status" id="sel-civil-status" v-model="patient.civilState" disabled>
                            <option value="Soltero">Soltero</option>
                            <option value="Casado">Casado</option>
                            <option value="Unión libre">Unión libre</option>
                            <option value="Divorciado">Divorciado</option>
                            <option value="Viudo">Viudo</option>
                        </select>
                    </div>
                </div>
            </section>


            <section class="form-section" id="sec-economic-conditions">
                <h3>Condiciones económicas:</h3>
                <div id="table-income-expenses">
                                                                                         
                    <div class="div-table" id="div-income">
                        <div class="row-div-table">                        
                            <h4>Personas que Aportan</h4>
                            <h4>Ingreso Mensual</h4>
                        </div>
                        <div class="row-div-table">                                      
                            <label>Jefe/a de familia</label>
                            <input type="number" v-model.number="familyBossIncome">
                        </div>
                        <div class="row-div-table">                        
                            <label>Esposo/a</label>
                            <input type="number" v-model.number="spouseIncome">
                        </div>
                        <div class="row-div-table">                        
                            <label>Hijo/a</label>
                            <input type="number" v-model.number="childrenIncome">
                        </div>
                        <div class="row-div-table">                        
                            <label>Otros</label>                    
                            <input type="number" v-model.number="othersIncome">
                        </div>
                        <div class="row-div-table">                        
                            <label class="highlighted-text">Total</label>
                            <p class="highlighted-text">{{ totalIncome}}</p>
                        </div>
                        <div class="row-div-table">                        
                            <label>Número total de integrantes</label>                                                               
                            <input type="number" v-model.number="nMembers">
                        </div>                                         
                    </div>               
                    <div class="div-table" id="div-expenses">
                        <div class="row-div-table">                        
                            <h4>Desglose de Gastos</h4>
                            <h4>Egreso Mensual</h4>
                        </div>
                        <div class="row-div-table">                                                   
                            <label>Alimentación/Despensa</label>
                            <input type="number" v-model.number="foodExpenses">
                        </div>
                        <div class="row-div-table">                        
                            <label>Renta/Hipoteca</label>
                            <input type="number" v-model.number="rentExpenses">
                        </div>
                        <div class="row-div-table">                        
                            <label>Predio</label>
                            <input type="number" v-model.number="propertyExpenses">
                        </div>
                        <div class="row-div-table">                        
                            <label>Agua</label>
                            <input type="number" v-model.number="waterSupplyExpenses">
                        </div>
                        <div class="row-div-table">                        
                            <label>Luz</label>
                            <input type="number" v-model.number="electricityExpenses">
                        </div>
                        <div class="row-div-table">                            
                            <label>Gas</label>
                            <input type="number" v-model.number="gasExpenses">
                        </div>
                        <div class="row-div-table"> 
                            <label>Teléfono</label>                                                   
                            <input type="number" v-model.number="phoneExpenses">
                        </div>
                        <div class="row-div-table">
                            <label>Gastos Escolares</label>                                                        
                            <input type="number" v-model.number="schoolExpenses">
                        </div>
                        <div class="row-div-table">
                            <label>Gastos en Salud</label>
                            <input type="number" v-model.number="healthExpenses">
                        </div>
                        <div class="row-div-table">                                                              
                            <label>Transporte</label>
                            <input type="number" v-model.number="transportationExpenses">
                        </div>
                        <div class="row-div-table">                        
                            <label>Servicios Domésticos</label>
                            <input type="number" v-model.number="domesticWorkExpenses">
                        </div>
                        <div class="row-div-table">                        
                            <label>Consumos Adicionales</label>
                            <input type="number" v-model.number="otherExpenses">
                        </div>
                        <div class="row-div-table">                                                       
                            <label class="highlighted-text">Total</label>
                            <p class="highlighted-text">{{ totalExpenses }}</p>
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
                            <input type="radio" id="op-possession-1" value="3" v-model.number="possessionType">
                            Propia (3)
                        </label>
                        <label for="op-possession-2">
                            <input type="radio" id="op-possession-2" value="2" v-model.number="possessionType">
                            Prestada (2)
                        </label>                           
                        <label for="op-possession-3">
                            <input type="radio" id="op-possession-3" value="1" v-model.number="possessionType">
                            Rentada (1)
                        </label>
                        <label for="op-possession-4">
                            <input type="radio" id="op-possession-4" value="0" v-model.number="possessionType">
                            Otro (0)
                        </label>                        
                        <p>Puntaje: {{ possessionType }}</p>  
                    </div>
                </div>
                <div class="div-table">
                    <table class="form-table">
                        <tr>
                            <th>Grupo</th>
                            <th>Tipo de vivienda</th>
                            <th>Puntos</th>
                        </tr>
                        <tr v-for="(type, k) in housingTypes" :key="k">
                            <td>
                                <label for="inp-housing-type">
                                    <input type="radio" id="op-housing-type-1" :value="type.points" v-model.number="housingType">
                                    {{ type.name }}
                                </label>
                            </td>
                            <td>{{ type.type }}</td>
                            <td>{{ type.points }}</td>
                        </tr>
                    </table>
                    <p>Puntaje: {{ housingType }}</p> 
                </div>
                <div class="form-line">                    
                    <div class="form-field-full-line">
                        <label>Servicios públicos:</label>
                    </div>
                    <div class="div-inline-checks">                           
                        <label for="check-public-services-1">
                            <input type="checkbox" id="check-public-services-1" value="Alumbrado público" v-model="publicServices">
                            Alumbrado público
                        </label>
                        <label for="check-public-services-2">
                            <input type="checkbox" id="check-public-services-2" value="Pavimentación" v-model="publicServices">
                            Pavimentación
                        </label>                           
                        <label for="check-public-services-3">
                            <input type="checkbox" id="check-public-services-3" value="Alcantarillado" v-model="publicServices">
                            Alcantarillado
                        </label>
                        <label for="check-public-services-4">
                            <input type="checkbox" id="check-public-services-4" value="Recolección de basura" v-model="publicServices">
                            Recolección de basura
                        </label>                        
                        <p>Puntaje: {{ publicServicesPoints }}</p>  
                    </div>
                </div>
                <div class="form-line">                    
                    <div class="form-field-full-line">
                        <label>Servicios intradomiciliarios:</label>
                    </div>
                    <div class="div-inline-checks">                           
                        <label for="check-internal-services-1">
                            <input type="checkbox" id="check-internal-services-1" value="Alumbrado público" v-model="internalServices">
                            Alumbrado público
                        </label>
                        <label for="check-internal-services-2">
                            <input type="checkbox" id="check-internal-services-2" value="Pavimentación" v-model="internalServices">
                            Pavimentación
                        </label>                           
                        <label for="check-internal-services-3">
                            <input type="checkbox" id="check-internal-services-3" value="Alcantarillado" v-model="internalServices">
                            Alcantarillado
                        </label>
                        <label for="check-internal-services-4">
                            <input type="checkbox" id="check-internal-services-4" value="Recolección de basura" v-model="internalServices">
                            Recolección de basura
                        </label>                        
                        <p>Puntaje: {{ internalServicesPoints }}</p>  
                    </div>
                </div>
                <div class="form-line">                                    
                    <div class="form-field-full-line">
                        <label>Material Construcción:</label>
                    </div>                    
                    <div class="div-inline-options">                           
                        <label for="op-material-1">
                            <input type="radio" id="op-material-1" value="2" v-model.number="constructionMaterial">
                            Mampostería (2)
                        </label>
                        <label for="op-material-2">
                            <input type="radio" id="op-material-2" value="1" v-model.number="constructionMaterial">
                            Mixta (1)
                        </label>                           
                        <label for="op-material-3">
                            <input type="radio" id="op-material-3" value="0" v-model.number="constructionMaterial">
                            Lámina, madera, material de la región (0)
                        </label>
                        <p>Puntaje: {{ constructionMaterial }}</p>  
                    </div>
                    <div class="form-field-full-line">
                        <label>Número de dormitorios:</label>
                    </div>                    
                    <div class="div-inline-options">                           
                        <label for="op-bedrooms-1">
                            <input type="radio" id="op-bedrooms-1" value="2" v-model.number="bedrooms">
                            5 a más (2)
                        </label>
                        <label for="op-bedrooms-2">
                            <input type="radio" id="op-bedrooms-2" value="1" v-model.number="bedrooms">
                            3 - 4 (1)
                        </label>                           
                        <label for="op-bedrooms-3">
                            <input type="radio" id="op-bedrooms-3" value="0" v-model.number="bedrooms">
                            1 - 2 (0)
                        </label>
                        <p>Puntaje: {{ bedrooms }}</p>  
                    </div>
                    <div class="form-field-full-line">
                        <label>Número de personas por dormitorio:</label>
                    </div>                    
                    <div class="div-inline-options">                           
                        <label for="op-persons-by-bedroom-1">
                            <input type="radio" id="op-persons-by-bedroom-1" value="2" v-model.number="personsByBedroom">
                            1 - 2 (2)
                        </label>
                        <label for="op-persons-by-bedroom-2">
                            <input type="radio" id="op-persons-by-bedroom-2" value="1" v-model.number="personsByBedroom">
                            3 (1)
                        </label>                           
                        <label for="op-persons-by-bedroom-3">
                            <input type="radio" id="op-persons-by-bedroom-3" value="0" v-model.number="personsByBedroom">
                            4 o más (0)
                        </label>
                        <p>Puntaje: {{ personsByBedroom }}</p>  
                    </div>                                                                                       
                </div>                                                                 
            </section>


            <section class="form-section" id="sec-health-condition">
                <h3>Estado de salud:</h3>
                <div class="form-line">                
                    <div class="form-field">
                        <label for="inp-diagnostic">Diagnóstico médico del paciente:</label>
                        <input name="inp-diagnostic" type="text" required>                         
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
                            <input type="radio" id="op-duration-1" value="2" v-model.number="illnessDuration">
                            Menos de 3 meses o sin comorbilidad (2)
                        </label>
                        <label for="op-duration-2">
                            <input type="radio" id="op-duration-2" value="1" v-model.number="illnessDuration">
                            De 3 a 6 meses (1)
                        </label>                           
                        <label for="op-duration-3">
                            <input type="radio" id="op-duration-3" value="0" v-model.number="illnessDuration">
                            Más de 6 meses (0)
                        </label>
                        <p>Puntaje: {{ illnessDuration }}</p>  
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
                            <input type="radio" id="other-diseases-no" value="1" v-model.number="otherDiseases">
                            No (1)
                        </label>
                        <label for="other-disease-yes">
                            <input type="radio" id="other-diseases-yes" value="0" v-model.number="otherDiseases">
                            Sí (0)
                        </label>
                        <p>Puntaje: {{ otherDiseases }}</p>                         
                    </div>
                </div>
                <div class="form-line">                     
                    <div class="form-field-double">
                        <label for="inp-disease">¿Cúal?:</label>
                        <input name="inp-disease" type="text" required>                       
                    </div>
                    <div class="form-field-double">
                        <label for="inp-institution">¿Dónde se atiende?:</label>
                        <input name="inp-institution" type="text" required>                         
                    </div>                                                                                   
                </div>
                <div class="form-line">                    
                    <div class="form-field-full-line">
                        <label>Estado de salud de los integrantes de la familia:</label>
                    </div>                     
                    <div class="div-inline-options">                           
                        <label for="op-family-condition-1">
                            <input type="radio" id="op-family-condition-1" value="2" v-model.number="familyCondition">
                            Ningún enfermo (2)
                        </label>
                        <label for="op-family-condition-1">
                            <input type="radio" id="op-family-condition-2" value="1" v-model.number="familyCondition">
                            Un enfermo (1)
                        </label>
                        <label for="op-family-condition-1">
                            <input type="radio" id="op-family-condition-2" value="0" v-model.number="familyCondition">
                            Dos y el principal proveedor económico (0)
                        </label>                                                  
                        <p>Puntaje: {{ familyCondition }}</p>  
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
                        <textarea required></textarea><br>
                    </div>
                </div>

                <div class="form-line">
                    <div class="form-field-full-line">
                        <label>¿Cómo cree que su familia se siente con usted?:</label>
                        <textarea required></textarea><br>
                    </div>
                </div>

                <div class="form-line">
                    <div class="form-field-full-line">
                        <label>¿Qué cree que necesita mejorar su familia?:</label>
                        <textarea required></textarea><br>
                    </div>
                </div>

                <div class="form-line">
                    <div class="form-field-full-line">
                        <label>¿Qué cree usted que necesita mejorar con respecto a su familia?:</label>
                        <textarea required></textarea><br>
                    </div>
                </div>

                <div class="form-line">
                    <div class="form-field-full-line">
                        <label>¿Con quién de su familia suele tener diferencias?:</label>
                        <textarea required></textarea><br>
                    </div>
                </div>

                <div class="form-line">
                    <div class="form-field-full-line">
                        <label>¿Con quién de su familia suele llevar a cabo acuerdos?:</label>
                        <textarea required></textarea><br>
                    </div>
                </div>

                <div class="form-line">
                    <div class="form-field-full-line">
                        <label>Diagnóstico Social:</label>
                        <textarea required></textarea><br>
                    </div>
                </div>                                                           
            </section>

            <section class="form-section" id="sec-summary">
                <div class="form-line">
                    <div class="form-field">
                        <label>Total de puntos: {{ totalScore }}</label>
                        <textarea required></textarea><br>
                    </div>
                </div>
            </section>            

        </form>        
    </div>
</template>


<script>
export default {
    name: 'SocioEconomicForm',
    props: ['patientdata', 'representativedata'],    
    data: function() {
        return {
            patient: this.patientdata,
            representative: this.representativedata,
            patientName: "",
            patientAge: "",
            patientAddress: "",
            representativeName: "",            
            illnessDuration: "",
            otherDiseases: "",
            familyCondition: "",
            possessionType: "",
            housingType: "",
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
            publicServices: [],
            internalServices: [],
            constructionMaterial: "",
            bedrooms: "",
            personsByBedroom: "",            
            familyBossIncome: 0,
            spouseIncome: 0,
            childrenIncome: 0,
            othersIncome: 0,
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
            otherExpenses: 0
        }
    },
    computed: {
        publicServicesPoints: function() {
            let nServices = this.publicServices.length;
            return nServices === 0 ? 0: nServices - 1;
        },
        internalServicesPoints: function() {
            let nServices = this.internalServices.length;
            return nServices === 0 ? 0: nServices - 1;
        },
        totalScore: function() {
            let points = 0;
            points += this.possessionType + this.housingType + this.publicServicesPoints + this.internalServicesPoints
            points += this.constructionMaterial + this.bedrooms + this.personsByBedroom
            points += this.illnessDuration + this.otherDiseases + this.familyCondition
            return points
        },
        totalIncome: function() {
            let total = 0;
            total += this.familyBossIncome + this.spouseIncome + this.childrenIncome + this.othersIncome;                     
            return total;
        },
        totalExpenses: function() {
            let total = 0;
            total += this.foodExpenses + this.rentExpenses + this.propertyExpenses + this.waterSupplyExpenses;
            total += this.electricityExpenses + this.gasExpenses + this.phoneExpenses + this.schoolExpenses + this.healthExpenses;
            total += this.transportationExpenses + this.domesticWorkExpenses + this.otherExpenses;
            return total;
        }
    },
    methods: {
        calculateAge: function(birthday) {
            return utils.calculateAge(birthday)
        }
    },
    created: function() {
       this.patientName = `${this.patient.firstName} ${this.patient.lastName}`
       this.representativeName = `${this.representative.firstName} ${this.representative.lastName}`       
       this.patientAge = this.calculateAge(this.patient.birthday)
       this.representativeAge = this.calculateAge(this.representative.birthday)          
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