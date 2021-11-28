<template>
    <div id="div-home">
        <div id="div-bienvenida">
            <h1>Bienvenido a r-store</h1>
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
    width: 100vw;
    height: 100vh;
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