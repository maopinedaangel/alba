<template>
    <div id="div-cie">
        <label>(Escriba una palabra para iniciar la búsqueda)</label>
        <!-- input element used for typing the search  -->
        <input type="text" class="ctw-input" autocomplete="off" data-ctw-ino="1" />
        <!-- div element used for showing the search results -->
        <div class="ctw-window" data-ctw-ino="1"></div>
    </div>
</template>


<script>
import * as ECT from "@whoicd/icd11ect";

export default {
    name: "CIE",
    data: function () {
        return {
            mySettings: "",
            myCallbacks: "",
        };
    },
    methods: {},

    mounted: function () {
        this.mySettings = {
            apiServerUrl: "https://icd11restapi-developer-test.azurewebsites.net",
            autoBind: false,
            language: "es",
            apiSecured: false,
        };

        this.myCallbacks = {
            selectedEntityFunction: selectedEntity => {
                console.log(selectedEntity.code);
                let { code, title } = selectedEntity;
                this.$emit("add-diagnosis", { code, title });
                ECT.Handler.clear("1");
            },
            getNewTokenFunction: async () => {
                //...
            },
            searchStartedFunction: () => {
                console.log("Buscando");
                //...
            },
            searchEndedFunction: () => {
                console.log("Buscado");
                //...
            },
        };

        // configure the ECT Handler
        ECT.Handler.configure(this.mySettings, this.myCallbacks);
        ECT.Handler.bind("1");
    },
};
</script>


<style scoped>
</style>