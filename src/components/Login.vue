<template>
    <div id="div-login">
        <form class="form-login" v-on:submit.prevent="login">
            <h1>Iniciar sesión</h1>
            <label>Usuario</label>
            <input required v-model="username" type="text" placeholder="Nombre de usuario" />
            <label>Contraseña</label>
            <input required v-model="password" type="password" placeholder="Contraseña" />
            <button class="btn-submit" type="submit">Enviar</button>
            <p class="p-link" v-on:click="retrievePassword">¿Olvidaste tu contraseña?</p>
        </form>
    </div>
</template>


<script>
import axios from "axios";
export default {
    name: "Login",
    data: function () {
        return {
            token: "",
            username: "",
            password: "",
        };
    },
    methods: {
        login: function () {
            const { username, password } = this;
            this.$store
                .dispatch("authRequest", { username, password })
                .then(() => {
                    //this.$router.push("/");
                    this.$router.push("/patients");
                })
                .catch(() => {
                    alert("Los datos no son válidos.");
                });
        },
        getToken: function () {
            let url = this.$store.state.apiUrl;
            url += "/items";
            axios
                .get(url)
                .then(response => {
                    this.token = response.data.token;
                })
                .catch(error => {
                    alert("There was a problem attempting to get token");
                });
        },
        getUser: function () {
            let url = this.$store.state.apiUrl;
            url += "/users/me";
            axios
                .get(url)
                .then(response => {
                    this.user = response.data;
                })
                .catch(error => {
                    alert("There was a problem attempting to get user data");
                });
        },
        retrievePassword: function () {
            if (!this.username || this.username === "" || this.username === null) {
                alert("Digite su nombre de usuario.");
                return;
            }
            let url = this.$store.state.apiUrl;
            console.log(this.username);
            /*
            url += "/get-by-username/" + this.username;
            axios.get(url)
            */
            url += "/mail";
            axios
                .get(url, { params: { username: this.username } })
                .then(response => {
                    console.log(response);
                    let mail = response.data.mail;
                    let hiddenMail = `${mail.substring(0, 3)}**********`;
                    console.log(mail);
                    alert(
                        `Enviaremos un mensaje al correo ${hiddenMail} con las instrucciones para restablecer tu contraseña.`
                    );
                    this.generateToken();
                    this.$router.push({ name: "ResetPassword", params: { user: this.username } });
                })
                .catch(err => {
                    alert("El nombre de usuario no es válido.");
                });
        },
        generateToken: function () {
            let url = this.$store.state.apiUrl;
            url += "/code";
            axios
                .get(url, { params: { username: this.username } })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
    created: function () {
        //this.getToken();
        //this.getUser();
    },
};
</script>


<style scoped>
#div-login {
    display: block;
    /*background-color: yellow;*/
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-login {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /*background-color: blueviolet;*/
    padding: 2rem;
    border: 1px solid #cccccc;
    border-radius: 15px;
}

.form-login h1 {
    margin-bottom: 3rem;
    text-align: center;
}
.form-login input {
    display: block;
    margin-bottom: 1rem;
    height: 30px;
}
.p-link {
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
}
</style>