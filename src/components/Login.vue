<template>
    <div id="div-login">
        <form class="login" v-on:submit.prevent="login">
            <h1>Iniciar sesión</h1>
            <label>Usuario</label>
            <input required v-model="username" type="text" placeholder="Nombre de usuario"/>
            <label>Contraseña</label>
            <input required v-model="password" type="password" placeholder="Contraseña"/>
            <hr/>
            <button class="btn-submit" type="submit">Enviar</button>
        </form>
         
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Login',
    data: function() {
        return {
            token: "",
            username: "",
            password: ""
        }
    },
    methods: {
        login: function() {
            const {username, password} = this;
            this.$store.dispatch("authRequest", {username, password})
            .then(() => {
                //this.$router.push("/");
                this.$router.push("/patients");                
            })
            .catch(() => {
                alert("Los datos no son válidos.")
            })
        },
        getToken: function() {
            let url = this.$store.state.apiUrl;
            url += "/items";
            axios
            .get(url)
            .then(response => {
                this.token = response.data.token;
            })
            .catch(error => {
                alert("There was a problem attempting to get token");
            })
        },
        getUser: function() {
            let url = this.$store.state.apiUrl;
            url += "/users/me";
            axios
            .get(url)
            .then(response => {
                this.user = response.data;
            })
            .catch(error => {
                alert("There was a problem attempting to get user data");
            })
        }
    },
    created: function() {
        //this.getToken();
        //this.getUser();
    }
}
</script>


<style scoped>
#div-login {
    display: block;
    /*display: flex;
    justify-content: center;
    align-items: center;*/
}
.login {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.login h1 {

}
.login label {

}
.login input {
    display: block;
}

</style>