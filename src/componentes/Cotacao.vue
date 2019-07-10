<template>
    <div>
        <template v-for="(dados,f) in bolsa">
            <div  class="card border-dark mb-1"  style="max-width: 18rem;">
                <div class="card-header">{{ dados.name}} </div>
                <div class="card-body text-dark">
                <h5 class="card-title">{{ dados.location }}</h5>
                <p class="card-text">{{ dados.points }}</p>
                <p class="card-text">{{ dados.variation }}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data(){
		return {
			bolsa: this.$store.state.bolsa.results.stocks,
		}
	},

}
</script>

<style>

</style>
