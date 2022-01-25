<template>
    <div class="div-form" id="div-medical-form">
        <h1>Hoja de ingreso</h1>
        <section class="form-section" id="sec-general">

            <div class="form-line">
                <div class="form-field">
                    <!--Fecha de elaboración del formato-->
                    <label for="inp-date">Fecha:</label>
                    <input name="inp-date" type="date" required> 
                </div>
                <div class="form-field">
                    <!--Hora de elaboración del formato-->
                    <label for="inp-hour">Hora:</label>
                    <input name="inp-hour" type="text" required> 
                </div>

               
            </div>
            <div class="form-line">
                <div class="form-field">
                    <!--Número del expediente médico-->
                    <label for="inp-no-history">No. Expediente:</label>
                    <input name="inp-no-history" type="text" required>
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
                    <input name="inp-name" type="text" required>
                </div>

            </div>


            <div class="form-line">
                <div class="form-field">
                    <!--Fecha de nacimiento del paciente-->
                    <label for="inp-birthdat">Fecha de nacimiento:</label>
                    <input name="inp-birthday" type="text" required>
                </div>

                <div class="form-field">
                    <!--Edad-->     
                    <label for="inp-age">Edad:</label>
                    <input name="inp-age" type="number" required>
                </div>

                <div class="form-field">
                    <!--Sexo-->
                    <label for="inp-sex">Sexo:</label>
                    <!--<input name="inp-sex" type="text" required>-->
                    <select name="sel-sex" id="sel-sex" required>
                        <option value="Hombre">Hombre</option>
                        <option value="Mujer">Mujer</option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

            </div>


            <div class="form-line">
                <div class="form-field-double">
                    <!--Dirección-->
                    <label for="inp-address">Dirección:</label>
                    <input name="inp-address" type="text" required>
                </div>

            </div>


            <div class="form-line">
                <div class="form-field">
                    <!--Teléfono-->
                    <label for="inp-phone">Teléfono:</label>
                    <input name="inp-phone" type="text" required>
                </div>                

            </div>


            <div class="form-line">
                <div class="form-field">
                    <!--Nacionalidad-->
                    <label for="inp-nationality">Nacionalidad:</label>
                    <input name="inp-nationality" type="text" required>
                </div>                


                <div class="form-field">
                    <!--Estado civil-->
                    <label for="inp-civil-status">Estado Civil:</label>
                    <!--<input name="inp-civil-status" type="text" required>-->
                    <select name="sel-civil-status" id="sel-civil-status" required>
                        <option value="Soltero">Soltero</option>
                        <option value="Casado">Casado</option>
                        <option value="Unión libre">Unión libre</option>
                        <option value="Divorciado">Divorciado</option>
                        <option value="Viudo">Viudo</option>
                    </select>
                </div>

            </div>


            <div class="form-line">
                <div class="form-field">
                    <!--Escolaridad-->
                    <label for="inp-school-grade">Escolaridad:</label>
                    <!--<input name="inp-school-grade" type="text" required>-->
                    <select name="sel-school-grade" id="sel-school-grade">
                        <option value="ninguna">Ninguna</option>
                        <option value="primaria">Primaria</option>
                        <option value="secundaria">Secundaria</option>
                        <option value="bachillerato">Bachillerato</option>
                        <option value="licenciatura">Licenciatura</option>
                        <option value="posgrado">Posgrado</option>                        
                    </select>
                </div>                


                <div class="form-field">
                    <!--Ocupación-->
                    <label for="inp-occupation">Ocupación:</label>
                    <!--<input name="inp-occupation" type="text" required>-->
                    <select name="sel-occupation" id="sel-occupation">
                        <option value="empleado-formal">Empleado Formal</option>
                        <option value="empleado-informal">Empleado Informal</option>
                        <option value="desempleado">Desempleado</option>
                        <option value="profesionaista">Profesionista</option>
                        <option value="independiente">Independiente</option>
                        <option value="oficios-varios">Oficios Varios</option>
                    </select>
                </div>

            </div>


            <div class="form-line">
                <div class="form-field">
                    <label for="inp-previous-entries">¿Cuántos ingresos previos ha tenido al establecimiento?</label>
                    <input name="inp-previous-entries" type="text" required>
                </div>
                <!--Ingresos previos-->

            </div>


            <div class="form-line">
                <div class="form-field">
                    <!--Fecha(s):-->
                    <label for="inp-prev-dates">Fechas:</label>
                    <input name="inp-prev-dates" type="text" required>   
                </div>                

            </div>
         

            <div class="form-line">
                <div class="form-field">
                    <!--Es referido:-->
                    <label for="inp-is-referred">¿Lo refiere alguna institución? ¿Cuál?</label>
                    <input name="inp-is-referred" type="text" required> 
                </div>                

            </div>


            <div class="form-line">
                <div class="form-field">
                    <label for="inp-have-reference-sheet">¿Presenta hoja de referencia?</label>
                    <input name="inp-have-reference-sheet" type="text" required>
                </div>                

            </div>


            <div class="form-line">
                <div class="form-field">
                    <!--Tipo de ingreso:-->                    
                    <label for="inp-entry-type">Tipo de ingreso actual:</label>
                    <!--<input name="inp-entry-type" type="text" required>-->
                    <select name="sel-entry-type" id="sel-entry-type">
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
                    <textarea required></textarea><br>  
                </div>                

            </div>
           

            <div class="form-line">
                <div class="form-field-full-line">
                    <!--Descripción del estado de salud-->            
                    <label>Descripción breve del estado de salud en general del usuario/a:</label>
                    <textarea required></textarea><br>
                </div>                
  
            </div>


        </section>


        <section class="form-section" id="sec-representative-data">
            <h3>Datos del familiar o representante legal</h3>

            <div class="form-line">
                <div class="form-field">
                    <!--Nombre del representante-->
                    <label for="inp-representative-name">Nombre:</label>
                    <input name="inp-representative-name" type="text" required>
                </div>

            </div>


            <div class="form-line">
                <div class="form-field">
                    <!--Edad-->     
                    <label for="inp-representative-age">Edad:</label>
                    <input name="inp-representative-age" type="number" required>
                </div>


                <div class="form-field">
                    <!--Parentesco-->
                    <label for="inp-relationship">Parentesco:</label>
                    <input name="inp-relationship" type="text" required>
                </div>


                <div class="form-field">
                    <!--Ocupación-->
                    <label for="inp-occupation">Ocupación:</label>
                    <input name="inp-occupation" type="text" required>
                </div>
            </div>


            <div class="form-line">
                <div class="form-field-full-line">
                    <!--Dirección-->
                    <label for="inp-representative-address">Dirección:</label>
                    <input name="inp-representative-address" type="text" required>
                </div>
            </div>


            <div class="form-line">
                <div class="form-field-full-line">
                    <!--Teléfono-->
                    <label for="inp-representative-phone">Teléfono:</label>
                    <input name="inp-representative-phone" type="text" required>  
                </div>                
            </div>
         
        </section>

        <section class="form-section" id="sec-acceptance-criteria">
            <h3>Criterios de inclusión al tratamiento</h3>
            <div class="form-line">
                <div class="form-field-full-line">
                    <label>
                        <input type="checkbox">El usuario/a es hombre
                    </label>
                </div>
            </div>

            <div class="form-line">
                <div class="form-field-full-line">
                    <label>
                        <input type="checkbox">El usuario/a es mayor de edad
                    </label>
                </div>
            </div>            

            <div class="form-line">
                <div class="form-field-full-line">
                    <label>
                        <input type="checkbox">El usuario/a presenta un nivel de dependencia al alcohol o drogas
                    </label>
                </div>                
            </div>            

            <div class="form-line">
                <div class="form-field-full-line">
                    <label>
                        <input type="checkbox">El usuario/a presenta alguna(s) consecuencia(s) asociadas al consumo
                    </label>
                </div>                
            </div>            

            <div class="form-line">
                <div class="form-field-full-line">
                    <label>
                        <input type="checkbox">El usuario/a no presenta algún trastorno mental o psiquiátrico que le impida beneficiarse del tratamiento
                    </label>
                </div>                
            </div>            

            <div class="form-line">
                <div class="form-field-full-line">
                    <label>
                        <input type="checkbox">El usuario/a cumple con todos los criterios de admisión al tratamiento
                    </label> 
                </div>                
            </div>            

            <div class="form-line">
                <div class="form-field-full-line">
                    <label for="inp-remission-place">En caso de no haber cumplido los criterios, indicar el lugar al que será referido/a:</label>
                    <input name="inp-remission-place" type="text" required>
                </div>

            </div>

            <div class="form-line">
                <div class="form-field-full-line">
                    <label for="inp-interviewer">Nombre de quien entrevista:</label>
                    <input name="inp-interviewer" type="text" required>
                </div>
            </div>            

            <div class="form-line">
                <div class="form-field-full-line">
                    <label for="inp-position">Cargo:</label>
                    <input name="inp-position" type="text" required> 
                </div>                
            </div>            
                                             
        </section>                 

    </div>
</template>


<script>
export default {
    name: 'EntryRecord'
}

</script>


<style>

</style>