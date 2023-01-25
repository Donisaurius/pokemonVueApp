<template>
    <dir class="pokemon-container">
        <img 
          :src="imgSrc" 
          alt="pokemon" 
          class="hidden-pokemon" />
        <img 
          v-if="showPokemon"
          :src="imgSrc" 
          alt="pokemon" 
          class="fade-in"/>
    </dir>
</template>

<script>
export default {
    name: 'PokemonPicture',
    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    computed:{
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
        }
    }
}
</script>

<style scoped>
    
.pokemon-container {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
img {
    height: 200px;
    position: absolute;
    
    pointer-events: none;
}
.hidden-pokemon {
    filter: brightness(0);
}


</style>