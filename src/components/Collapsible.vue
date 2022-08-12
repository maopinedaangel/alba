<template>
    <div id="div-collapsible">
        <button type="button" class="collapsible" v-on:click="showContent()">
            {{ listTitle }}
        </button>
        <div v-if="isContentVisible" class="content">
            <ul class="ul-items">
                <li v-for="item in items" :key="item">
                    <span>{{ item.date }}</span>
                    <!--<span>{{ item.type }}</span>-->
                    <span>{{ item.subject }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name: "Collapsible",
    props: ["list", "title"],
    data: function () {
        return {
            items: this.list,
            listTitle: this.title,
            listItems: [],
            //coll: [],
            isContentVisible: false,
        };
    },
    created: function () {
        //coll = document.getElementsByClassName("collapsible");
    },
    methods: {
        showContent: function () {
            if (this.isContentVisible) {
                this.isContentVisible = false;
            } else {
                this.isContentVisible = true;
            }
        },
    },
};
</script>


<style scoped>
/* Style the button that is used to open and close the collapsible content */
.collapsible {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active,
.collapsible:hover {
    background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content {
    padding: 0 18px;
    /*display: none;*/
    overflow: hidden;
    background-color: #f1f1f1;
}
</style>