<template>
    <div id="div-home">
        <div id="div-bienvenida">
            <h1>Bienvenido</h1>
            <p>{{ respuestaApi }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    data: function() {
        return {
            respuestaApi: ""
        }
    },
    methods: {
        llamarAPI: function() {
            axios
            .get("http://localhost:8000")
            //.get("https://api-albastore.herokuapp.com")
            .then(respuesta => {
                this.respuestaApi = respuesta.data.mensaje;
            })
            .catch(error => {
                this.respuestaApi = "No hay conexión con la API"
            })
        }
    },
    created: function() {
        this.llamarAPI();
    }
}
</script>


<style scoped>
#div-home {
    display: flex;
    justify-content: center;
    align-items: center;
}
#div-bienvenida {
    text-align: center;
}
#div-bienvenida h1 {
    color: red;
}
#div-bienvenida p {
    color: green;
}
</style>