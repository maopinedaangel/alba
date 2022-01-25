<template>
  <div id="app">
    <div id="div-header">
		<div id="div-login">Acceder</div>
    </div>
    <div id="div-main">
		<div id="div-side-menu">
			<div class="bt-options" v-on:click="showPatients">
                <div class="div-icon">
                    <icon-base class="icon-menu" id="ic-login" icon-name="login"><icon-login /></icon-base>                 
                </div> 				
				Pacientes</div>
			<div class="bt-options">Especialistas</div>
			<div class="bt-options">Documentos</div>
			<div class="bt-options">Reportes</div>
			<div class="bt-options">Usuarios</div>
		</div>
		<div id="div-center">
			<router-view :key="$route.fullPath"></router-view>
			<!--<Home />-->
		</div>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import IconBase from './components/IconBase.vue'
import IconLogin from './components/icons/IconLogin.vue'

export default {
	name: "App",
	components: {
		Home,
		IconBase,
		IconLogin
	},
	methods: {
		showPatients: function() {
    	this.$router.push( { name: "Patients" })  
		}
	},
	beforeCreate: function() {
    	this.$router.push( { name: "Home" })  		
	}

};
</script>

<style>
#app {
	width: 100vw;
	height: 100vh;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	/*-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;*/
}
#div-header {
	height: 10vh;
	background-color: var(--clr-header);
	color: white;
	display: flex;
	justify-content: flex-end;
}

#div-main {
	display: flex;
	height: 90vh;
}
#div-side-menu {
	width: 10vw;
	height: 90vh;
	color: var(--clr-light-background);
}
.bt-options {
	background-color: var(--clr-side-menu);
	height: 20%;
	width: 100%;
	text-align: center;
	border: 0.5px solid rgb(110, 110, 110);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.bt-options:hover {
	cursor: pointer;
	background-color: var(--clr-buttons);
}
.div-icon {
	width: 40px;
	height: 40px;
	margin-bottom: 5px;
}
.icon-menu {
	width: 40px;
	height: 40px;
}
#div-center {
	width: 90vw;
	height: 100%;
	/*background-color: var(--clr-background);*/
	overflow-y: auto;
}
</style>
