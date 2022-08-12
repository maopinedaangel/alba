<template>
    <div id="div-diseases">
        <ul>
            <li v-for="(disease, k) in diseases" :key="k">{{ disease }}</li>
        </ul>
    </div>
</template>


<script>
import axios from "axios";
export default {
    name: "Diseases",
    data: function () {
        return {
            diseases: [],
        };
    },
    methods: {
        getDisease: function (id) {
            let url = this.$store.state.apiUrl;
            url += "/who-entity/" + id;
            axios
                .get(url)
                .then(data => {
                    //console.log(data.data.title);
                    //this.diseases.push(data.data.title);
                    console.log(data.data);
                    let d = JSON.parse(data.data);
                    let name = d.title;
                    let keys = Object.keys(name);
                    let disease = name[keys[1]];
                    console.log(disease);
                    this.diseases.push(disease);
                })
                .catch(err => {
                    console.log("The request failed");
                });
        },
    },
    created: function () {
        this.getDisease("257068234");
        /*
    let disease = this.getDisease("257068234");
    console.log(disease);
    this.diseases.push(disease);
    */
    },
};
</script>


<style scoped>
</style>