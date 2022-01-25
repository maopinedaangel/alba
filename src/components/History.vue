<template>
    <div id="div-history">
        <div id="div-profile">
            <h1>Perfil del paciente</h1>
            <div id="div-photo">
                <img class="img-profile" src="" alt="">
            </div>
            <div id="div-data">
                <p>Nombre: </p>
                <p>Edad: </p>
                <p>Ciudad: </p>
            </div>
        </div>
        <div id="div-treatment">
            <h2>Historial de tratamientos</h2>
            <Treatment />
            <Treatment />         
        </div>
    </div>
</template>


<script>
import Treatment from './Treatment.vue'
export default {
    name: 'History',
    components: {
        Treatment
    },
    data: function() {
        return {
            patient: "",
            treatments: []
        }
    },
    created: function() {
        this.treatments = [
            {

            }
        ]
    }

}
</script>


<style scoped>
#div-history {
    display: flex;
    height: 100%;
    overflow-y: auto;
}
#div-profile {
    /*background-color: aquamarine;*/
    width: 30%;
    //height: 100%;
    /*flex-grow: 1;*/
}
#div-treatment {
    /*background-color: pink;*/
    //height: 100%;
    width: 70%;
    /*flex-grow: 3;*/
}
</style>