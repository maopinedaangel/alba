<template>
    <div id="div-users">
        <div v-if="loading"></div>
        <div v-else>
            <List :people="users" />
        </div>
    </div>
</template>


<script>
import axios from "axios";
import List from "./List.vue";
export default {
    name: "Users",
    components: {
        List,
    },
    data: function () {
        return {
            users: [],
            loading: true,
        };
    },
    created: function () {
        let url = this.$store.state.apiUrl;
        url += "/users";
        axios
            .get(url)
            .then(response => {
                this.users = response.data;
                console.log(this.users);
                this.loading = false;
            })
            .catch(error => {
                alert(`Error al tratar de cargar los usuarios: ${error}`);
            });
    },
};
</script>