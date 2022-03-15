<template>
    <div id="div-home">
        <div id="div-bienvenida">
            <h1>Bienvenido</h1>
            <p>{{ apiResponse }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    data: function() {
        return {
            apiResponse: ""
        }
    },
    methods: {
        callAPI: function() {
            let url = this.$store.state.apiUrl
            axios
            .get(url)
            //.get("http://localhost:8000")
            //.get("https://api-albastore.herokuapp.com")
            .then(response => {
                this.apiResponse = response.data.mensaje;
            })
            .catch(error => {
                this.apiResponse = "No hay conexión con la API"
            })
        }
    },
    created: function() {
        this.callAPI();
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