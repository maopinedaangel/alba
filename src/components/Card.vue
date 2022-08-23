<template>
    <div class="card" v-on:click="showPerson(userId)">
        <img src="../assets/img/person.png" alt="Foto Persona" />
        <div>
            <p class="p-name">{{ data.firstName }} {{ data.lastName }}</p>
            <p>{{ data.role }}</p>
            <p>{{ data.mail }}</p>
        </div>
    </div>
</template>


<script>
export default {
    name: "Card",
    //props: ["firstName", "lastName", "role", "mail"],
    props: ["data"],
    data: function () {
        return {};
    },
    methods: {
        showPerson: function () {
            //
        },
    },
    created: function () {},
};
</script>


<style scoped>
.card {
    display: flex;
    width: 26vw;
    margin: 2vw;
    cursor: pointer;
}
.card img {
    width: 100px;
    height: 100px;
}
.card div {
    padding: 1rem;
}
.card .p-name {
    font-size: 21px;
    font-weight: bold;
}
</style>