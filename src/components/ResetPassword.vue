<template>
    <div id="div-reset-password">
        <form class="form-login" v-on:submit.prevent="resetPassword">
            <h1>Restablecer contraseña</h1>
            <label>Usuario</label>
            <input required v-model="username" type="text" placeholder="Nombre de usuario" />
            <label>Token</label>
            <input
                required
                v-model="token"
                type="text"
                placeholder="Digita el código que recibiste en tu correo electrónico" />
            <label>Nueva Contraseña</label>
            <input required v-model="password" type="password" placeholder="Contraseña" />
            <button class="btn-submit" type="submit">Enviar</button>
        </form>
    </div>
</template>


<script>
import axios from "axios";
export default {
    name: "ResetPassword",
    data: function () {
        return {
            token: "",
            username: "",
            password: "",
        };
    },
    methods: {
        resetPassword: function () {
            let ruta = this.$store.state.apiUrl;
            ruta += "/reset-password";

            let data = new FormData();
            data.append("key", this.token);
            data.append("username", this.username);
            data.append("new_password", this.password);

            let config = {
                header: {
                    "Content-Type": "multipart/form-data",
                },
            };

            axios
                .post(ruta, data, config)
                .then(response => {
                    console.log(response.data.message);
                    alert(response.data.message);
                    this.$router.push({ name: "Login" });
                })
                .catch(err => {
                    //console.log(err);
                    alert("No se pudo guardar la contraseña.");
                    this.$router.push({ name: "Login" });
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
#div-reset-password {
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
</style>