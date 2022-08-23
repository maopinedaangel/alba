<template>
    <div id="div-printer">
        <!--<h1>Imprimir...</h1>-->
        <div>
            <VueHtml2pdf
                :show-layout="false"
                :float-layout="true"
                :enable-download="true"
                :preview-modal="true"
                :paginate-elements-by-height="1400"
                filename="myPDF"
                :pdf-quality="2"
                :manual-pagination="false"
                pdf-format="letter"
                pdf-orientation="portrait"
                pdf-content-width="800px"
                :html-to-pdf-options="htmlToPdfOptions"
                ref="html2Pdf">
                <section slot="pdf-content">
                    <!--<header-form />-->
                    <slot></slot>
                </section>
            </VueHtml2pdf>
        </div>
        <!--<button v-on:click="generateReport">Imprimir</button>-->
        <div class="div-icon" v-on:click="generateReport">
            <icon-base id="ic-print" icon-name="print"><icon-print /></icon-base>
        </div>
    </div>
</template>


<script>
import VueHtml2pdf from "vue-html2pdf";
import IconBase from "./IconBase.vue";
import IconPrint from "./icons/IconPrint.vue";
import HeaderForm from "./HeaderForm.vue";

export default {
    name: "Printer",
    components: {
        VueHtml2pdf,
        IconBase,
        IconPrint,
        HeaderForm,
    },
    data: function () {
        return {
            htmlToPdfOptions: {
                margin: [0, 0, 0, 0],

                filename: `report.pdf`,

                image: {
                    type: "jpeg",
                    quality: 2,
                },

                enableLinks: false,

                html2canvas: {
                    scale: 2,
                    useCORS: true,
                },

                jsPDF: {
                    unit: "mm",
                    format: "letter",
                    orientation: "portrait",
                },
            },
        };
    },
    methods: {
        generateReport() {
            this.$refs.html2Pdf.generatePdf();
        },
    },
};
</script>


<style scoped>
#div-header {
    height: 100px;
}
#div-printer {
    /*padding: 1rem;*/
    text-align: center;
    /*background-color: aqua;*/
}

.pdf-content {
    width: 90%;
}
.div-icon {
    height: 20px;
}

#ic-print {
    width: 20px;
    height: 20px;
    /*font-size: 24px;*/
}
</style>