<template>
  <div id="app">
    <div id="div-header">
		<!--<div id="div-login">-->
		<router-link id="div-login" :to="{name:'Login'}">			
			<div>
				Acceder
			</div>
		</router-link>
		<!--</div>	-->	
    </div>
    <div id="div-main">
		<div id="div-side-menu">
			<!--<div class="bt-options" v-on:click="showPatients">-->
			<router-link class="bt-options" :to="{name:'Patients'}">				
                <div class="div-icon">
                    <icon-base class="icon-menu" id="ic-man" icon-name="man"><icon-man /></icon-base>
                </div>				 				
				Pacientes
			<!--</div>-->
			</router-link>
			<div class="bt-options">
                <div class="div-icon">
                    <icon-base class="icon-menu" id="ic-doctor" icon-name="doctor"><icon-doctor /></icon-base>
                </div>				
				Especialistas</div>
			<div class="bt-options">
                <div class="div-icon">
                    <icon-base class="icon-menu" id="ic-file" icon-name="file"><icon-file /></icon-base>
                </div>				
				Documentos</div>
			<div class="bt-options">
                <div class="div-icon">
                    <icon-base class="icon-menu" id="ic-report" icon-name="report"><icon-report /></icon-base>
                </div>				
				Reportes</div>
			<div class="bt-options">
                <div class="div-icon">
                    <icon-base class="icon-menu" id="ic-login" icon-name="login"><icon-login /></icon-base>                 
                </div>				
				Usuarios</div>
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
import IconDoctor from './components/icons/IconDoctor.vue'
import IconFile from './components/icons/IconFile.vue'
import IconReport from './components/icons/IconReport.vue'
import IconMan from './components/icons/IconMan.vue'

export default {
	name: "App",
	components: {
		Home,
		IconBase,
		IconLogin,
		IconDoctor,
		IconFile,
		IconReport,
		IconMan
	},
	methods: {
		showPatients: function() {
    		this.$router.push( { name: "Patients" })  
		}
	},
	beforeCreate: function() {
    	//this.$router.push( { name: "Home" })
    	this.$router.push( { name: "Patients" }) 		  		
	}

};
</script>

<style>
#app {
	width: 100vw;
	height: 100vh;
	font-family: "Avenir", Helvetica, Arial, sans-serif;
}
#div-header {
	height: 10vh;
	background-color: var(--clr-header);
	color: white;
	display: flex;
	justify-content: flex-end;
}
#div-login {
	display: flex;
	align-items: center;
	margin-right: 1vw;
	cursor: pointer;
	color: #ffffff;
}
#div-login a {
	text-decoration: none;
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
	background-color: var(--clr-header);
	color: var(--clr-background);	
	height: 20%;
	width: 100%;
	text-align: center;
	border: 0.5px solid rgb(110, 110, 110);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-decoration: none;
}
.bt-options:hover {
	cursor: pointer;
	background-color: var(--clr-side-menu);
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
