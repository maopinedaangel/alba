<template>
    <div class="div-form" id="div-medical-form">
        <h1>Historia Clínica Médica</h1>
        <section id="sec-general">

            <!--Datos del usuario-->

            <!--Fecha de elaboración del formato-->
            <label for="inp-date">Fecha:</label>
            <input name="inp-date" type="date" required> 

            <!--Hora de elaboración del formato-->
            <label for="inp-hour">Hora:</label>
            <input name="inp-hour" type="text" required>

            <!--Número del expediente médico-->
            <label for="inp-no-history">No. Expediente:</label>
            <input name="inp-no-history" type="text" required>

            <!--Nombre del paciente-->
            <label for="inp-name">Nombre del Paciente:</label>
            <input name="inp-name" type="text" required>

            <!--Edad-->     
            <label for="inp-age">Edad:</label>
            <input name="inp-age" type="number" required>

            <!--Sexo-->
            <label for="inp-sex">Sexo:</label>
            <input name="inp-sex" type="text" required>

        </section>


        <!--Padecimiento actual-->
        <section id="sec-current-ailing">
            <h2>Padecimiento actual</h2>

            <!--current-treatments-->
            <label>¿Estás siendo atendido por algún problema de salud en la actualidad? ¿Cuál?</label>
            <textarea required></textarea><br>            
            <!--<input name="inp-current-treatments" type="text" required>-->
            <label>¿Estás tomando algún medicamento por prescripción médica o se está auto medicando? ¿Cuál?:</label>
            <textarea required></textarea><br>
            <label>Factores desencadenantes:</label>
            <textarea required></textarea><br>
            <label>Evolución:</label>
            <textarea required></textarea><br>
            <label>Estado actual (incluir datos de patrón de consumo, abstinencia):</label>
            <textarea required></textarea><br>                                    
        </section>


        <!--Antecedentes-->
        <section id="sec-background">
            <h2>Antecedentes</h2>

            <h3>Heredofamiliares</h3>
            <h4>Enfermedades crónico-degenerativas</h4>
            <label>
                <input type="checkbox">Padres
            </label>
            <label>
                <input type="checkbox">Hermanos/as
            </label>
            <label>
                <input type="checkbox">Cónyuge
            </label>
            <label>
                <input type="checkbox">Hijos/as
            </label>
            <label>
                <input type="checkbox">Colaterales
            </label>
            <label>
                <input type="checkbox">Convivientes
            </label>

            <h4>Enfermedades infecto-contagiosas</h4>
            <label>
                <input type="checkbox">Padres
            </label>
            <label>
                <input type="checkbox">Hermanos/as
            </label>
            <label>
                <input type="checkbox">Cónyuge
            </label>
            <label>
                <input type="checkbox">Hijos/as
            </label>
            <label>
                <input type="checkbox">Colaterales
            </label>
            <label>
                <input type="checkbox">Convivientes
            </label>

            <h4>Enfermedades alérgicas</h4>
            <label>
                <input type="checkbox">Padres
            </label>
            <label>
                <input type="checkbox">Hermanos/as
            </label>
            <label>
                <input type="checkbox">Cónyuge
            </label>
            <label>
                <input type="checkbox">Hijos/as
            </label>
            <label>
                <input type="checkbox">Colaterales
            </label>
            <label>
                <input type="checkbox">Convivientes
            </label>

            <h4>Eventos traumáticos</h4>
            <label>
                <input type="checkbox">Padres
            </label>
            <label>
                <input type="checkbox">Hermanos/as
            </label>
            <label>
                <input type="checkbox">Cónyuge
            </label>
            <label>
                <input type="checkbox">Hijos/as
            </label>
            <label>
                <input type="checkbox">Colaterales
            </label>
            <label>
                <input type="checkbox">Convivientes
            </label>

            <h4>Consumo de sustancias y/o con problemas</h4>
            <label>
                <input type="checkbox">Padres
            </label>
            <label>
                <input type="checkbox">Hermanos/as
            </label>
            <label>
                <input type="checkbox">Cónyuge
            </label>
            <label>
                <input type="checkbox">Hijos/as
            </label>
            <label>
                <input type="checkbox">Colaterales
            </label>
            <label>
                <input type="checkbox">Convivientes
            </label>

            <h4>Otras enfermedades mentales</h4>
            <label>
                <input type="checkbox">Padres
            </label>
            <label>
                <input type="checkbox">Hermanos/as
            </label>
            <label>
                <input type="checkbox">Cónyuge
            </label>
            <label>
                <input type="checkbox">Hijos/as
            </label>
            <label>
                <input type="checkbox">Colaterales
            </label>
            <label>
                <input type="checkbox">Convivientes
            </label>

            <h4>Causas de defunción</h4>
            <label>
                <input type="checkbox">Padres
            </label>
            <label>
                <input type="checkbox">Hermanos/as
            </label>
            <label>
                <input type="checkbox">Cónyuge
            </label>
            <label>
                <input type="checkbox">Hijos/as
            </label>
            <label>
                <input type="checkbox">Colaterales
            </label>
            <label>
                <input type="checkbox">Convivientes
            </label>                                                           
        </section>

            <h3>Personales no patológicos</h3>
            <!--Estatus socioeconómico-->
            <label for="inp-social-class">Estatus socioeconómico:</label>
            <input name="inp-social-class" type="text" required>

            <!--Habitación-->
            <label for="inp-housing">Habitación:</label>
            <input name="inp-housing" type="text" required>

            <!--Higiene-->
            <label for="inp-hygiene">Higiene:</label>
            <input name="inp-hygiene" type="text" required>

            <!--Alimentación-->
            <label for="inp-feeding">Alimentación:</label>
            <input name="inp-feeding" type="text" required>

            <!--Inmunizaciones-->
            <label for="inp-immunization">Inmunizaciones:</label>
            <input name="inp-immunization" type="text" required>   

            <h3>Personales patológicos</h3>
            <!--Fiebres eruptivas-->
            <label for="inp-eruptive-fever">Fiebres eruptivas:</label>
            <input name="inp-eruptive-fever" type="text" required>

            <!--Cuadros infecciosos y parasitarios-->
            <label for="inp-infectious-parasitic">Cuadros infecciosos y parasitarios:</label>
            <input name="inp-infectious-parasitic" type="text" required>

            <!--Ictéricos-->
            <label for="inp-jaundiced">Ictéricos:</label>
            <input name="inp-jaundiced" type="text" required>

            <!--Hormonales-->
            <label for="inp-hormonal">Hormonales:</label>
            <input name="inp-hormonal" type="text" required>

            <!--Epilepsia-->
            <label for="inp-epileptic">Epilepsia:</label>
            <input name="inp-epileptic" type="text" required>

            <!--Alérgicos-->
            <label for="inp-allergic">Alérgicos:</label>
            <input name="inp-allergic" type="text" required>

            <!--Quirúrgicos-->
            <label for="inp-surgical">Quirúrgicos:</label>
            <input name="inp-surgical" type="text" required>

            <!--Traumáticos-->
            <label for="inp-traumatic">Traumáticos:</label>
            <input name="inp-traumatic" type="text" required>

            <!--Transfusionales-->
            <label for="inp-transfusion">Transusionales:</label>
            <input name="inp-transfusion" type="text" required>

            <!--Ginecoobstétricos-->
            <label for="inp-ob-gyn">Ginecoobstétricos:</label>
            <input name="inp-ob-gyn" type="text" required>

            <!--Consumo de sustancias (tabaco, alcohol y otras drogas)-->
            <label for="inp-substance-use">Consumo de sustancias (tabaco, alcohol y otras drogas):</label>
            <input name="inp-substance-use" type="text" required>                                                                                              

            <!--Pendiente G P A C-->

            <h4>Alto riesgo</h4>
            <!--<label>¿Estás siendo atendido por algún problema de salud en la actualidad? ¿Cuál?</label>-->
            <textarea required></textarea><br> 

            <h4>Psicobiografía</h4>

            <!--Embarazo, parto y desarrollo psicomotor-->            
            <label>Embarazo, parto y desarrollo psicomotor</label>
            <textarea required></textarea><br>

            <!--Núcleo familiar, personalidad de padres y hermanos; y relación-->            
            <label>Núcleo familiar, personalidad de padres y hermanos; y relación</label>
            <textarea required></textarea><br>

            <!--Escolaridad, grado máximo de estudios, rendimiento escolar-->            
            <label>Escolaridad, grado máximo de estudios, rendimiento escolar</label>
            <textarea required></textarea><br>

            <!--Vida laboral, inicio, motivos, progreso, sedimentación, gratificaciones-->            
            <label>Vida laboral, inicio, motivos, progreso, sedimentación, gratificaciones</label>
            <textarea required></textarea><br>

            <!--Vida sexual, grado de información, experiencias, hábitos, masturbación, preferencia-->            
            <label>Vida sexual, grado de información, experiencias, hábitos, masturbación, preferencia</label>
            <textarea required></textarea><br>

            <!--Vida de pareja, matrimonio, personalidad del cónyuge e hijos/as-->            
            <label>Vida de pareja, matrimonio, personalidad del cónyuge e hijos/as</label>
            <textarea required></textarea><br>

            <!--Vida social: intereses recreativos, artísticos, deportivos, culturales y religiosos-->            
            <label>Vida social: intereses recreativos, artísticos, deportivos, culturales y religiosos</label>
            <textarea required></textarea><br>

            <!--Legales, conflictos, antecedentes penales-->            
            <label>Legales, conflictos, antecedentes penales</label>
            <textarea required></textarea><br>

            <!--Familiares con drogadicción o alcoholismo. Parentesco, sustancia y conflictos-->            
            <label>Familiares con drogadicción o alcoholismo. Parentesco, sustancia y conflictos</label>
            <textarea required></textarea><br>

            <!--En el último año ¿en cuántas ocasiones estuvo en hospital por esa causa?-->            
            <label>En el último año ¿en cuántas ocasiones estuvo en hospital por esa causa?</label>
            <textarea required></textarea><br>

            <!--Describa la condición en la que llegó y qué medidas en el hospital-->            
            <label>Describa la condición en la que llegó y qué medidas en el hospital</label>
            <textarea required></textarea><br>            


        <!--Interrogatorio por aparatos y sistemas-->
        <section id="sec-systems">
            <h3>Interrogatorio por aparatos y sistemas</h3>
            <label>Cardiovascular, respiratorio, digestivo, endocrino, genitourinario, neurológico, piel, anexos y otros. Recabar información relacionada con uso de sustancias.</label>
            <textarea required></textarea><br>             
        </section>


        <!--Exploración física-->
        <section id="sec-physical-exam">
            <h4>Signos vitales</h4>

            <label for="inp-ideal-weight">Peso ideal:</label>
            <input name="inp-ideal-weight" type="text" required>

            <label for="inp-height">Talla:</label>
            <input name="inp-height" type="text" required> 

            <label for="inp-actual-weight">Peso real:</label>
            <input name="inp-actual-weight" type="text" required>

            <label for="inp-blood-presure">Presión Arterial.:</label>
            <input name="inp-blood-pressure" type="text" required>

            <label for="inp-heart-rate">Frecuencia Cardíaca:</label>
            <input name="inp-heart-rate" type="text" required>

            <label for="inp-temperature">Temperatura:</label>
            <input name="inp-temperature" type="text" required>

            <label for="inp-breathing-rate">Frecuencia Respiratoria:</label>
            <input name="inp-breathing-rate" type="text" required>

            <label for="inp-pulse">Pulso:</label>
            <input name="inp-pulse" type="text" required>

            <h4>Exploración Físico-Neurológica</h4>
            <label for="inp-head-and-neck">Cabello y cuello:</label>
            <input name="inp-head-and-neck" type="text" required>            

            <label for="inp-chest">Tórax:</label>
            <input name="inp-chest" type="text" required>

            <label for="inp-abdomen">Abdomen:</label>
            <input name="inp-abdomen" type="text" required>

            <label for="inp-genitals">Genitales:</label>
            <input name="inp-genitals" type="text" required>

            <label for="inp-spine">Columna vertebral:</label>
            <input name="inp-spine" type="text" required>

            <label for="inp-limbs-and-skin">Extremidades, piel y faneras:</label>
            <input name="inp-limbs-and-skin" type="text" required>

            <label for="inp-cranial-nerves">Pares craneales:</label>
            <input name="inp-cranial-nerves" type="text" required>

            <label for="inp-motor-system">Sistema-motor:</label>
            <input name="inp-motor-system" type="text" required>

            <label for="inp-sensitivity">Sensibilidad:</label>
            <input name="inp-sensitivity" type="text" required>

            <label for="inp-reflexes">Reflejos:</label>
            <input name="inp-reflexes" type="text" required>

            <label for="inp-balance">Sistema Vestíbulo Cerebeloso:</label>
            <input name="inp-balance" type="text" required>

            <label for="inp-gait">Marcha:</label>
            <input name="inp-gait" type="text" required>

            <label for="inp-brain-dominance">Dominancia Cerebral:</label>
            <input name="inp-brain-dominance" type="text" required>

        </section>


        <!--Exámenes de laboratorio, gabinete y otros previos y actuales-->
        <section id="sec-lab-exam">
            <h4>Exámenes de laboratorio, gabinete y otros previos y actuales</h4>
            <label>Enumeración, fechas y resultados</label>
            <textarea required></textarea><br>  
        </section>


        <!--Terapéutica previa empleada-->
        <section id="sec-therapy">
            <h4>Terapéutica previa empleada</h4>
            <p>Resultados obtenidos en cada uno</p>
            <label>Tratamientos físicos</label>
            <textarea required></textarea><br>
            <label>Farmacológicos</label>
            <textarea required></textarea><br>
            <label>Psicoterapéuticos</label>
            <textarea required></textarea><br>
            <label>Alternativos</label>
            <textarea required></textarea><br>                                                
        </section>


        <!--Examen mental-->
        <section id="sec-mental">
            <h4>Examen mental</h4>
            <label>Inspección general (apariencia, actitud, conciencia, conducta motor, forma de relación, autismo)</label>
            <textarea required></textarea><br>
            <label>Lenguaje y pensamiento: Fluidez, retardo, aceleración, articulación, coherencia, tonalidad, congruencia, riqueza de asociaciones y abstracciones, fobias, obsesiones y delirios</label>
            <textarea required></textarea><br>
            <label>Funciones intelectuales, orientación, atención, comprensión, concentración, memoria, análisis, síntesis, conación, volición, juicio crítico</label>
            <textarea required></textarea><br>
            <label>Afectividad, indiferencia, tristeza, euforia, labilidad, ansiedad, aplanamiento, ambivalencia, disociación</label>
            <textarea required></textarea><br>
            <label>Senso percepción, ilusiones, alucinaciones, alucinosis, despersonalización, micropsias, micropsias, extrañeza</label>
            <textarea required></textarea><br>
            <label>Ideación, delirios, proyecto futuro, sueño, conciencia de enfermedad</label>
            <textarea required></textarea><br>
            <label>Observaciones:</label>
            <textarea required></textarea><br>                                           
        </section>


        <!--Impresión diagnóstica-->
        <section id="sec-diagnostic">
            <h4>Impresión diagnóstica</h4>
            <p>Diagnóstico CIE 10</p>

            <label for="inp-diagnostic-code">Código</label>
            <input name="inp-diagnostic-code" type="text" required>

            <label for="inp-diagnostic">Diagnóstico:</label>
            <input name="inp-diagnostic" type="text" required>

            <label>Observaciones al Diagnóstico y/o Problemas Clínicos:</label>
            <textarea required></textarea><br>

            <p>Pronóstico</p>
            <label>Para la vida:</label>
            <textarea required></textarea><br>
            <label>Para la función:</label>
            <textarea required></textarea><br>                                  
        </section>


        <!--Tratamiento sugerido y justificación-->
        <section id="sec-suggested-treatment">

        </section>        
    </div>
</template>


<script>
export default {
    name: 'MedicalForm'
}

</script>


<style>

</style>