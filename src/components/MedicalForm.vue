<template>
    <div class="div-form" id="div-medical-form">
        <div v-if="loaded">
            <h1>Historia Clínica Médica</h1>
            <form>
                <section id="sec-general">

                    <!--Datos del usuario-->
                    <div class="form-line">
                        <div class="form-field">
                            <!--Fecha de elaboración del formato-->
                            <label for="inp-date">Fecha:</label>
                            <input name="inp-date" type="date" v-model="form.date" required>
                        </div> 
                        <div class="form-field">
                            <!--Hora de elaboración del formato-->
                            <label for="inp-hour">Hora:</label>
                            <input name="inp-hour" type="time" v-model="form.hour" required>
                        </div> 
                        <div class="form-field">
                            <!--Número del expediente médico-->
                            <label for="inp-no-history">No. Expediente:</label>
                            <input name="inp-no-history" type="text" v-model="form.historyNumber" required>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-double">
                            <!--Nombre del paciente-->
                            <label for="inp-name">Nombre del Paciente:</label>
                            <input name="inp-name" type="text" v-model="form.patient.name" required>
                        </div> 
                        <div class="form-field">
                            <!--Edad-->     
                            <label for="inp-age">Edad:</label>
                            <input name="inp-age" type="number" v-model="form.patient.age" required>
                        </div> 
                        <div class="form-field">
                            <!--Sexo-->
                            <label for="inp-sex">Sexo:</label>
                            <input name="inp-sex" type="text" v-model="form.patient.sex" required>
                        </div>
                    </div>
                </section>


                <!--Padecimiento actual-->
                <section id="sec-current-ailing">
                    <h2>Padecimiento actual</h2>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <textarea v-model="form.currentCondition.disease" required></textarea><br>
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--current-treatments-->
                            <label>¿Estás siendo atendido por algún problema de salud en la actualidad? ¿Cuál?</label>
                            <textarea v-model="form.currentCondition.treatment" required></textarea><br>
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field-full-line">                                    
                            <!--<input name="inp-current-treatments" type="text" required>-->
                            <label>¿Estás tomando algún medicamento por prescripción médica o se está auto medicando? ¿Cuál?:</label>
                            <textarea v-model="form.currentCondition.medicine" required></textarea><br>
                        </div>
                    </div>
                    <div class="form-line">                    
                        <div class="form-field-full-line">                         
                            <label>Factores desencadenantes:</label>
                            <textarea v-model="form.currentCondition.triggers" required></textarea><br>
                        </div>
                    </div>
                    <div class="form-line">                    
                        <div class="form-field-full-line">                         
                            <label>Evolución:</label>
                            <textarea v-model="form.currentCondition.evolution" required></textarea><br>
                        </div>
                    </div>
                    <div class="form-line">                     
                        <div class="form-field-full-line">                         
                            <label>Estado actual (incluir datos de patrón de consumo, abstinencia):</label>
                            <textarea v-model="form.currentCondition.state" required></textarea><br>
                        </div>
                    </div>                                                            
                </section>


                <!--Antecedentes-->
                <section id="sec-background" v-on:change="printDiseases">
                    <h2>Antecedentes</h2>
                    <table>
                        <tr>
                            <th>Heredofamiliares</th>
                            <th v-for="(disease, k) in diseases" :key="k">{{ disease }}</th>
                        </tr>
                        <tr v-for="(relative, j) in Object.keys(form.familyBackground)" :Key="j">
                            <!--<td>{{ relative.text }}</td>-->
                            <td>{{ form.familyBackground[relative].text }}</td>
                            <td v-for="(disease, k) in diseases" :key="k">
                                <input type="checkbox" :value="disease" v-model="form.familyBackground[relative].results">
                            </td>
                        </tr>
                    </table>
                </section>


                <section>
                    <h3>Personales no patológicos</h3>

                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <!--Estatus socioeconómico-->
                            <label for="inp-social-class">Estatus socioeconómico:</label>
                            <input name="inp-social-status" type="text" v-model="form.nonPathologicalBackground.socialStatus" required>
                        </div>
                    </div>

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Habitación-->
                            <label for="inp-housing">Habitación:</label>
                            <input name="inp-housing" type="text" v-model="form.nonPathologicalBackground.housing" required>
                        </div>
                    </div>

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Higiene-->
                            <label for="inp-hygiene">Higiene:</label>
                            <input name="inp-hygiene" type="text" v-model="form.nonPathologicalBackground.hygiene" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Alimentación-->
                            <label for="inp-feeding">Alimentación:</label>
                            <input name="inp-feeding" type="text" v-model="form.nonPathologicalBackground.feeding" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Inmunizaciones-->
                            <label for="inp-immunization">Inmunizaciones:</label>
                            <input name="inp-immunization" type="text" v-model="form.nonPathologicalBackground.immunization" required>
                        </div>
                    </div>                   


                    <h3>Personales patológicos</h3>

                    <div class="form-line">                        
                        <div class="form-field-full-line">                
                            <!--Fiebres eruptivas-->
                            <label for="inp-eruptive-fever">Fiebres eruptivas:</label>
                            <input name="inp-eruptive-fever" type="text" v-model="form.pathologicalBackground.eruptiveFever" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Cuadros infecciosos y parasitarios-->
                            <label for="inp-infectious-parasitic">Cuadros infecciosos y parasitarios:</label>
                            <input name="inp-infectious-parasitic" type="text" v-model="form.pathologicalBackground.infectious" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Ictéricos-->
                            <label for="inp-jaundiced">Ictéricos:</label>
                            <input name="inp-jaundiced" type="text" v-model="form.pathologicalBackground.jaundiced" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Hormonales-->
                            <label for="inp-hormonal">Hormonales:</label>
                            <input name="inp-hormonal" type="text" v-model="form.pathologicalBackground.hormonal" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Epilepsia-->
                            <label for="inp-epileptic">Epilepsia:</label>
                            <input name="inp-epileptic" type="text" v-model="form.pathologicalBackground.epileptic" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Alérgicos-->
                            <label for="inp-allergic">Alérgicos:</label>
                            <input name="inp-allergic" type="text" v-model="form.pathologicalBackground.allergic" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Quirúrgicos-->
                            <label for="inp-surgical">Quirúrgicos:</label>
                            <input name="inp-surgical" type="text" v-model="form.pathologicalBackground.surgical" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Traumáticos-->
                            <label for="inp-traumatic">Traumáticos:</label>
                            <input name="inp-traumatic" type="text" v-model="form.pathologicalBackground.traumatic" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Transfusionales-->
                            <label for="inp-transfusion">Transusionales:</label>
                            <input name="inp-transfusion" type="text" v-model="form.pathologicalBackground.transfusion" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Ginecoobstétricos-->
                            <label for="inp-ob-gyn">Ginecoobstétricos:</label>
                            <input name="inp-ob-gyn" type="text" v-model="form.pathologicalBackground.obGyn" required>
                        </div>
                    </div>                

                    <div class="form-line">                        
                        <div class="form-field-full-line">
                            <!--Consumo de sustancias (tabaco, alcohol y otras drogas)-->
                            <label for="inp-substance-use">Consumo de sustancias (tabaco, alcohol y otras drogas):</label>
                            <input name="inp-substance-use" type="text" v-model="form.pathologicalBackground.substanceUse" required>
                        </div>
                    </div>                
                </section>                                                                

                    <!--Pendiente G P A C-->

                    <h4>Alto riesgo</h4>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <textarea v-model="form.highRisk" required></textarea><br>                        
                        </div>
                    </div>                
    

                    <h4>Psicobiografía</h4>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Embarazo, parto y desarrollo psicomotor-->            
                            <label>Embarazo, parto y desarrollo psicomotor</label>
                            <textarea v-model="form.psychobiography.pregnancyAndBirth" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Núcleo familiar, personalidad de padres y hermanos; y relación-->            
                            <label>Núcleo familiar, personalidad de padres y hermanos; y relación</label>
                            <textarea v-model="form.psychobiography.familyNucleus" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Escolaridad, grado máximo de estudios, rendimiento escolar-->            
                            <label>Escolaridad, grado máximo de estudios, rendimiento escolar</label>
                            <textarea v-model="form.psychobiography.education" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Vida laboral, inicio, motivos, progreso, sedimentación, gratificaciones-->            
                            <label>Vida laboral, inicio, motivos, progreso, sedimentación, gratificaciones</label>
                            <textarea v-model="form.psychobiography.work" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Vida sexual, grado de información, experiencias, hábitos, masturbación, preferencia-->            
                            <label>Vida sexual, grado de información, experiencias, hábitos, masturbación, preferencia</label>
                            <textarea v-model="form.psychobiography.sexualLife" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Vida de pareja, matrimonio, personalidad del cónyuge e hijos/as-->            
                            <label>Vida de pareja, matrimonio, personalidad del cónyuge e hijos/as</label>
                            <textarea v-model="form.psychobiography.intimateRelationship" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Vida social: intereses recreativos, artísticos, deportivos, culturales y religiosos-->            
                            <label>Vida social: intereses recreativos, artísticos, deportivos, culturales y religiosos</label>
                            <textarea v-model="form.psychobiography.socialLife" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Legales, conflictos, antecedentes penales-->            
                            <label>Legales, conflictos, antecedentes penales</label>
                            <textarea v-model="form.psychobiography.criminalRecord" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Familiares con drogadicción o alcoholismo. Parentesco, sustancia y conflictos-->            
                            <label>Familiares con drogadicción o alcoholismo. Parentesco, sustancia y conflictos</label>
                            <textarea v-model="form.psychobiography.substanceUseByRelatives" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--En el último año ¿en cuántas ocasiones estuvo en hospital por esa causa?-->            
                            <label>En el último año ¿en cuántas ocasiones estuvo en hospital por esa causa?</label>
                            <textarea v-model="form.psychobiography.hospitalAdmissions" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <!--Describa la condición en la que llegó y qué medidas en el hospital-->            
                            <label>Describa la condición en la que llegó y qué medidas en el hospital</label>
                            <textarea v-model="form.psychobiography.conditionOnAdmission" required></textarea><br>            
                        </div>
                    </div>

                <!--Interrogatorio por aparatos y sistemas-->
                <section id="sec-systems">
                    <h3>Interrogatorio por aparatos y sistemas</h3>
                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Cardiovascular, respiratorio, digestivo, endocrino, genitourinario, neurológico, piel, anexos y otros. Recabar información relacionada con uso de sustancias.</label>
                            <textarea v-model="form.systemsExamination" required></textarea><br>
                        </div>
                    </div>             
                </section>


                <!--Exploración física-->
                <section id="sec-physical-exam">
                    <h4>Signos vitales</h4>

                    <div class="form-line">
                        <div class="form-field">
                            <label for="inp-ideal-weight">Peso ideal:</label>
                            <input name="inp-ideal-weight" type="text" v-model="form.vitalSigns.idealWeight" required>
                        </div>

                        <div class="form-field">
                            <label for="inp-height">Talla:</label>
                            <input name="inp-height" type="text" v-model="form.vitalSigns.height" required>
                        </div>

                        <div class="form-field">
                            <label for="inp-actual-weight">Peso real:</label>
                            <input name="inp-actual-weight" type="text" v-model="form.vitalSigns.actualWeight" required>
                        </div>

                        <div class="form-field">
                            <label for="inp-blood-presure">Presión Arterial.:</label>
                            <input name="inp-blood-pressure" type="text" v-model="form.vitalSigns.bloodPressure" required>
                        </div>                        
                    </div>

                    <div class="form-line">
                        <div class="form-field">
                            <label for="inp-heart-rate">Frecuencia Cardíaca:</label>
                            <input name="inp-heart-rate" type="text" v-model="form.vitalSigns.heartRate" required>
                        </div>

                        <div class="form-field">                
                            <label for="inp-temperature">Temperatura:</label>
                            <input name="inp-temperature" type="text" v-model="form.vitalSigns.temperature" required>
                        </div>

                        <div class="form-field">
                            <label for="inp-breathing-rate">Frecuencia Respiratoria:</label>
                            <input name="inp-breathing-rate" type="text" v-model="form.vitalSigns.breathingRate" required>
                        </div>

                        <div class="form-field">
                            <label for="inp-pulse">Pulso:</label>
                            <input name="inp-pulse" type="text" v-model="form.vitalSigns.pulse" required>
                        </div>
                    </div>

                    <h4>Exploración Físico-Neurológica</h4>

                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label for="inp-head-and-neck">Cabello y cuello:</label>
                            <input name="inp-head-and-neck" type="text" v-model="form.neurologicExamination.headAndNeck" required>            
                        </div>
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">                 
                            <label for="inp-chest">Tórax:</label>
                            <input name="inp-chest" type="text" v-model="form.neurologicExamination.chest" required>
                        </div>
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-abdomen">Abdomen:</label>
                            <input name="inp-abdomen" type="text" v-model="form.neurologicExamination.abdomen" required>
                        </div>                        
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-genitals">Genitales:</label>
                            <input name="inp-genitals" type="text" v-model="form.neurologicExamination.genitals" required>
                        </div>                        
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-spine">Columna vertebral:</label>
                            <input name="inp-spine" type="text" v-model="form.neurologicExamination.spine" required>
                        </div>                        
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-limbs-and-skin">Extremidades, piel y faneras:</label>
                            <input name="inp-limbs-and-skin" type="text" v-model="form.neurologicExamination.limbsAndSkin" required>
                        </div>                        
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-cranial-nerves">Pares craneales:</label>
                            <input name="inp-cranial-nerves" type="text" v-model="form.neurologicExamination.cranialNerves" required>
                        </div>                        
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-motor-system">Sistema-motor:</label>
                            <input name="inp-motor-system" type="text" v-model="form.neurologicExamination.motorSystem" required>
                        </div>                        
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-sensitivity">Sensibilidad:</label>
                            <input name="inp-sensitivity" type="text" v-model="form.neurologicExamination.sensitivity" required>
                        </div>                        
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-reflexes">Reflejos:</label>
                            <input name="inp-reflexes" type="text" v-model="form.neurologicExamination.reflexes" required>
                        </div>                        
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-balance">Sistema Vestíbulo Cerebeloso:</label>
                            <input name="inp-balance" type="text" v-model="form.neurologicExamination.balance" required>
                        </div>                        
                    </div>

                    <div class="form-line">                
                        <div class="form-field-full-line">
                            <label for="inp-gait">Marcha:</label>
                            <input name="inp-gait" type="text" v-model="form.neurologicExamination.gait" required>
                        </div>                
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label for="inp-brain-dominance">Dominancia Cerebral:</label>
                            <input name="inp-brain-dominance" type="text" v-model="form.neurologicExamination.brainDominance" required>
                        </div>
                    </div>
                </section>


                <!--Exámenes de laboratorio, gabinete y otros previos y actuales-->
                <section id="sec-lab-exam">
                    <h4>Exámenes de laboratorio, gabinete y otros previos y actuales</h4>
                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Enumeración, fechas y resultados</label>
                            <textarea v-model="form.laboratoryTests" required></textarea><br>
                        </div>
                    </div>  
                </section>


                <!--Terapéutica previa empleada-->
                <section id="sec-therapy">
                    <h4>Terapéutica previa empleada</h4>
                    <p>Resultados obtenidos en cada uno</p>
                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Tratamientos físicos</label>
                            <textarea v-model="form.therapy.physical" required></textarea><br>
                        </div>
                    </div>                
                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Farmacológicos</label>
                            <textarea v-model="form.therapy.pharmacological" required></textarea><br>
                        </div>
                    </div>                
                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Psicoterapéuticos</label>
                            <textarea v-model="form.therapy.psychotherapy" required></textarea><br>
                        </div>
                    </div>                
                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Alternativos</label>
                            <textarea v-model="form.therapy.alternative" required></textarea><br>
                        </div>
                    </div>                                                                
                </section>


                <!--Examen mental-->
                <section id="sec-mental">
                    <h4>Examen mental</h4>

                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Inspección general (apariencia, actitud, conciencia, conducta motor, forma de relación, autismo)</label>
                            <textarea v-model="form.mentalExamination.generalInspection" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Lenguaje y pensamiento: Fluidez, retardo, aceleración, articulación, coherencia, tonalidad, congruencia, riqueza de asociaciones y abstracciones, fobias, obsesiones y delirios</label>
                            <textarea v-model="form.mentalExamination.languageAndThought" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Funciones intelectuales, orientación, atención, comprensión, concentración, memoria, análisis, síntesis, conación, volición, juicio crítico</label>
                            <textarea v-model="form.mentalExamination.intellectualFunctions" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Afectividad, indiferencia, tristeza, euforia, labilidad, ansiedad, aplanamiento, ambivalencia, disociación</label>
                            <textarea v-model="form.mentalExamination.affectivity" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Senso percepción, ilusiones, alucinaciones, alucinosis, despersonalización, micropsias, micropsias, extrañeza</label>
                            <textarea v-model="form.mentalExamination.perception" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Ideación, delirios, proyecto futuro, sueño, conciencia de enfermedad</label>
                            <textarea v-model="form.mentalExamination.ideation" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Observaciones:</label>
                            <textarea v-model="form.mentalExamination.remarks" required></textarea><br>
                        </div>
                    </div>                                                           
                </section>


                <!--Impresión diagnóstica-->
                <section id="sec-diagnostic">
                    <h4>Impresión diagnóstica</h4>
                    <p>Diagnóstico CIE 10</p>

                    <div class="form-line">
                        <div class="form-field">
                            <label for="inp-diagnostic-code">Código</label>
                            <input name="inp-diagnostic-code" type="text" v-model="form.diagnostic.findings[0].code" required>
                        </div>
                        <div class="form-field-triple">
                            <label for="inp-diagnostic">Diagnóstico:</label>
                            <input name="inp-diagnostic" type="text" v-model="form.diagnostic.findings[0].diagnostic" required>
                        </div>
                    </div>               

                    <div class="form-line">
                        <div class="form-field-full-line">
                            <label>Observaciones al Diagnóstico y/o Problemas Clínicos:</label>
                            <textarea v-model="form.diagnostic.remarks" required></textarea><br>
                        </div>
                    </div>

                    <p>Pronóstico</p>
                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Para la vida:</label>
                            <textarea v-model="form.prognosis.forLife" required></textarea><br>
                        </div>
                    </div>                
                    <div class="form-line">
                        <div class="form-field-full-line">                
                            <label>Para la función:</label>
                            <textarea v-model="form.prognosis.forFunction" required></textarea><br>
                        </div>
                    </div>                                                 
                </section>


                <!--Tratamiento sugerido y justificación-->
                <section id="sec-suggested-treatment">
                    <h4>Tratamiento sugerido y justificación</h4>
                    <div class="form-line">
                        <div class="form-field">
                            <label>
                                <input type="checkbox" v-model="form.suggestedTreatment.type">Terapia individual
                            </label>
                        </div>
                        <div class="form-field">
                            <label>
                                <input type="checkbox" v-model="form.suggestedTreatment.type">Terapia grupal
                            </label>
                        </div>
                        <div class="form-field">                        
                            <label>
                                <input type="checkbox" v-model="form.suggestedTreatment.type">Terapia familiar
                            </label>
                        </div>
                    </div>
                    <div class="form-line">
                        <div class="form-field">                
                            <label>
                                <input type="checkbox" v-model="form.suggestedTreatment.type">Orientación familiar grupal
                            </label>
                        </div>
                        <div class="form-field">                        
                            <label>
                                <input type="checkbox" v-model="form.suggestedTreatment.type">Orientación familiar individual
                            </label>
                        </div>
                        <div class="form-field">                        
                            <label>
                                <input type="checkbox" v-model="form.suggestedTreatment.frequency">Frecuencia de tratamiento
                            </label>
                        </div>
                    </div>                        

                    <div class="form-line">
                        <div class="form-field-full-line"> 
                            <label>Justificación</label>
                            <textarea v-model="form.suggestedTreatment.justification" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line"> 
                            <label>Plan de manejo físico (si se necesitan medicamentos, deberá señalar dosis, vía y periodicidad)</label>
                            <textarea v-model="form.suggestedTreatment.physicalHandling" required></textarea><br>
                        </div>
                    </div>

                    <div class="form-line">
                        <div class="form-field-full-line"> 
                            <label>Sugerencias en el plan de manejo psicológico</label>
                            <textarea v-model="form.suggestedTreatment.psychologicalHandling" required></textarea><br>
                        </div>
                    </div>

                    <h4>Próxima cita:</h4>
                    <div class="form-line">
                        <!--Próxima cita-->                
                        <div class="form-field">
                            <!--Fecha de la próxima ciota-->
                            <label for="inp-next-appointment-date">Día:</label>
                            <input name="inp-next-appointment-date" type="date" v-model="form.nextAppointment.date"> 
                        </div>
                        <div class="form-field">
                            <!--Hora de la próxima cita-->
                            <label for="inp-next-appointment-hour">Hora:</label>
                            <input name="inp-next-appointment-hour" type="time" v-model="form.nextAppointment.hour"> 
                        </div>
                        <div class="form-field">
                            <!--Servicio-->
                            <label for="inp-service">Servicio:</label>
                            <input name="inp-service" type="text" v-model="form.nextAppointment.service" required> 
                        </div>
                        <div class="form-field">
                            <!--Responsable-->
                            <label for="inp-responsible">Responsable:</label>
                            <input name="inp-responsible" type="text" v-model="form.nextAppointment.responsible" required> 
                        </div>                                
                    </div>        
                    <div class="form-line">
                        <!--Médico que otorgó el servicio-->                
                        <div class="form-field-double">
                            <label for="inp-doctor">Nombre completo y firma del profesional que otorgó el servicio:</label>
                            <input name="inp-doctor" type="text" v-model="form.doctor.fullName"> 
                        </div>
                        <div class="form-field">
                            <label for="inp-doctor-card">Firma:</label>
                            <input name="inp-doctor-card" type="text" v-model="form.doctor.sign"> 
                        </div>
                        <div class="form-field">
                            <label for="inp-form-hour">Número Cédula Profesional:</label>
                            <input name="inp-form-hour" type="text" v-model="form.doctor.professionalCard"> 
                        </div> 
                    </div>                               
                </section>
            <div class="btn-submit" v-on:click="saveMedicalForm">Guardar</div>                  
            </form>                
            </div>
        <div v-else>Obteniendo datos...</div>    
    </div>
</template>


<script>
import axios from 'axios';
import utils from '../utils';
export default {
    name: 'MedicalForm',
    props: ['id', 'existing', 'idForm', 'idTreatment'],
    data: function() {
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
                    birthday: "",
                    age: "",
                    sex: ""
                },
                currentCondition: {
                    disease: "",
                    treatment: "",
                    medicine: "",
                    triggers: "",
                    evolution: "",
                    state: "",
                },
                familyBackground: {
                    parents: [],
                    brothers: [],
                    spouse: [],
                    children: [],
                    collaterals: [],
                    cohabitans: []
                },
                familyBackground: {
                    parents: {
                        text: "Padres",
                        results: []
                        },
                    brothers: {
                        text: "Hermanos/as",
                        results: []
                        },
                    spouse: {
                        text: "Cónyuge",
                        results: []
                        },
                    children: {
                        text: "Hjios",
                        results: []
                        },
                    collaterals: {
                        text: "Colaterales",
                        results: []
                        },
                    cohabitans: {
                        text: "Convivientes",
                        results: []}
                },                
                nonPathologicalBackground: {
                    socialStatus: "",
                    housing: "",
                    hygiene: "",
                    feeding: "",
                    immunization: ""
                },
                pathologicalBackground: {
                    eruptiveFever: "",
                    infectious: "",
                    jaundiced: "",
                    hormonal: "",
                    epileptic: "",
                    allergic: "",
                    surgical: "",
                    traumatic: "",
                    transfusion: "",
                    obGyn: "",
                    substanceUse: ""
                },
                highRisk: "",
                psychobiography: {
                    preganancyAndBirth: "",
                    familyNucleus: "",
                    education: "",
                    work: "",
                    sexualLife: "",
                    intimateRelationship: "",
                    socialLife: "",
                    criminalRecord: "",
                    substanceUseByRelatives: "",
                    hospitalAdmissions: "",
                    conditionOnAdmission: "",  
                },
                systemsExamination: "",
                vitalSigns: {
                    idealWeight: "",
                    height: "",
                    actualWeight: "",
                    bloodPressure: "",
                    heartRate: "",
                    temperature: "",
                    breathingRate: "",
                    pulse: ""
                },
                neurologicExamination: {
                    headAndNeck: "",
                    chest: "",
                    abdomen: "",
                    genitals: "",
                    spine: "",
                    limbsAndSkin: "",
                    cranialNerves: "",
                    motorSystem: "",
                    sensitivity: "",
                    reflexes: "",
                    balance: "",
                    gait: "",
                    brainDominance: ""
                },
                laboratoryTest: "",
                therapy: {
                    physical: "",
                    pharmacological: "",
                    psychotherapy: "",
                    alternative: ""
                },
                mentalExamination: {
                    generalInspection: "",
                    languageAndThought: "",
                    intellectualFunctions: "",
                    affectivity: "",
                    preception: "",
                    ideation: "",
                    remarks: ""
                },
                diagnostic: {
                    findings: [
                    {
                        code: "",
                        diagnostic: ""
                    }                      
                    ],
                    remarks: ""
                },
                prognosis: {
                    forLife: "",
                    forFunction: ""
                },
                suggestedTreatment: {
                    type: "",
                    frequency: "",
                    justification: "",
                    physicalHandling: "",
                    psychologicalHandling: ""
                },
                nextAppointment: {
                    date: "",
                    hour: "",
                    service: "",
                    responsible: ""
                },
                doctor: {
                    fullName: "",
                    sign: "",
                    professionalCard: ""
                }

            },
            diseases: ['Enfermedades Crónico-degenrativas', 'Infecto-Contagiosas', 'Alérgicas', 'Eventos Traumáticos', 'Consumo de Sustancias y/o con Problemas', 'Otras enfermedades mentales', 'Causas de Defunción' ],
            /*relatives: ['Padres', 'Hermanos/as', 'Cónyuge', 'Hijos/as', 'Colaterales', 'Convivientes']*/
        }
    },
    methods: {
        printDiseases: function() {
            let relatives = Object.keys(this.form.familyBackground);

            /*relatives.forEach(relative => {
                console.log(`${this.form.familyBackground[relative].text}: ${this.form.familyBackground[relative].results}`)
           
            })*/


        },
        calculateAge: function(birthday) {
            return utils.calculateAge(birthday);
        },
        getNow: function() {
            let local = new Date();
            local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
            this.form.date = local.toISOString().slice(0,10);       
            this.form.hour = local.toISOString().slice(11,19);                               
        },        
        saveMedicalForm: function() {
            let formData = {
                treatmentId: this.treatmentId,
                formTypeId: 3,
                data: JSON.stringify(this.form),
                userId: this.userId
            }
            let url = this.$store.state.apiUrl;
            url += "/form";
            console.log(formData);
            axios
            .post(url, formData)            
            .then(response => {
                alert("El formulario ha sido guardado.");
                //this.loaded = true;
            })
            .catch(err => {
                alert("Se presentó un error al intentar guardar el formulario.");
            })
        },
        loadPatientData: function() {
            let url = this.$store.state.apiUrl;
            url += "/patient-data/" + this.patientId;
            axios.get(url)
            .then(response=> {
                this.patient = response.data;
                //console.log(this.patient);                
                this.form.patient.name = `${this.patient.firstName} ${this.patient.lastName}`; 
                //console.log(this.form.patient.name);        
                this.form.patient.birthday = this.patient.birthday;
                this.form.patient.age = this.calculateAge(this.patient.birthday);
                this.form.patient.sex = this.patient.sex;          
                this.form.historyNumber = this.patient.code;
                //console.log(this.form.historyNumber);                 
                this.loaded = true;
            })
            .catch(err=> {
                alert("Error al tratar de recuperar los datos del paciente");
            })
                        
        }
    },
    beforeCreate: function() {
        //console.log(`id Paciente: ${this.patientId}`);
        this.patientId = this.$route.params.id;
        this.isExisting = this.$route.params.existing;

        //console.log(`id Paciente: ${this.patientId}`);        
    },
    created: function() {
        //console.log(`id Paciente: ${this.patientId}`);        
        this.patientId = this.$route.params.id;
        this.isExisting = this.$route.params.existing;
        //console.log(`id Paciente: ${this.patientId}`);              
        /*
        setTimeout(() => {
            this.loaded = true;
            console.log(this.loaded);
        }, 500)
        */
        setInterval(this.getNow, 1000);
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
            this.loadPatientData();
            this.userId = 1; 
            //console.log(`id Paciente: ${this.patientId}`);                  
        }    
    }
}

</script>


<style>
th, td {
    padding: 0.5rem;
    text-align: center;
}
</style>