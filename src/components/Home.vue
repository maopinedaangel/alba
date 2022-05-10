<template>
    <div id="div-home">
        <div v-if="loading">
            Cargando los datos...
        </div>
        <div v-else>
            <div id="div-bienvenida">
                <h1>Bienvenido</h1>
                <p>{{ apiResponse }}</p>
            </div>
            <div v-if="userLoaded" id="div-verify-token">
                <p>Token recibido: {{ token }}</p>
                <p>Nombre del usuario: {{ user.firstName }} {{ user.lastName }}</p>
                <p>Username: {{ user.username }}</p>
                <p>Rol: {{ user.role }}</p>
                <p>PersonId: {{ user.personId }}</p>                             
            </div> 
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    data: function() {
        return {
            apiResponse: "",
            token: "",
            //loading: true,
            /*
            user: {
                username: "",
                full_name: "",
                email: "",
                hashed_password: "",
                disabled: ""                
            }
            */
        }
    },
    computed: {
        loading: function() {
            console.log(this.$store.getters.authStatus);
            return this.$store.getters.authStatus === "loading";
        },
        userLoaded: function() {
            console.log(`Loaded? ${!!this.$store.getters.getProfile.username}`)
            return !!this.$store.getters.getProfile.username;
        },
        user: function() {
            return this.$store.getters.getProfile;
        }
    },
    methods: {
        callAPI: function() {
            let url = this.$store.state.apiUrl
            axios
            .get(url)
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
        this.token = this.$store.state.token;
        this.user = this.$store.getters.getProfile;
        console.log(this.user.username);
    }
}
</script>


<style scoped>
#div-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#div-bienvenida {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
#div-bienvenida h1 {
    color: red;
}
#div-bienvenida p {
    color: green;
}
#div-verify-token {
    margin-top: 2rem;
}
</style>