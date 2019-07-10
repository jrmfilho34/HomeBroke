<template>
<div id="painel">
	<Cotacao />
	<Grafico />
</div>
</template>

<script>
import axios from 'axios'
import Grafico from './componentes/Grafico'
import Home from './componentes/Home'
import Header from './componentes/Header'
import Cotacao from './componentes/Cotacao'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Authorization'] = '';

export default {
	name:'principal',
	components:{ Grafico, Header, Cotacao },
	data(){
		return {
		}
	},
	created(){
		// this.buscaDados()
	},
	methods:{
		buscaDados(){
			
			let obj = this
			// http://localhost:8080 configuração necessaria por causa de negação CORS, link raiz está vue.config.js
			axios.get('http://localhost:8080/quote/OIBR3.SA?p=OIBR3.SA&.tsrc=fin-srch')
			.then(function (response) {
			// var array = response.data.split(" ")
			// console.log(array)
			})
			.catch(function(error) {
			})
			.finally(function () {
			});
		},
		Observador(){

		}
	}

}
</script>

<style>

</style>

// https://finance.yahoo.com/quote/OIBR3.SA?p=OIBR3.SA http://localhost:8080/OIBR3.SA?p=OIBR3.SA