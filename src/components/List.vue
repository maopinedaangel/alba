<template>
    <div id="div-list">
        <Card v-for="person in persons" :key="person.id" :data="person" />
    </div>
</template>

<script>
import Card from "./Card.vue";
export default {
    name: "List",
    props: ["people"],
    components: {
        Card,
    },
    data: function () {
        return {
            persons: this.people,
        };
    },
    created: function () {
        console.log(this.persons);
    },
};
</script>


<style scoped>
.div-list {
    display: flex;
    flex-wrap: wrap;
}
</style>