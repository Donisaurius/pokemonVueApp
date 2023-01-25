<template>
  <div v-if="!pokemon">
    <h2>Espere por favor...</h2>
  </div>
  <div v-else>
    <h1>Quien ejese Pokemon</h1>
    <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon"></pokemon-picture>
    <pokemon-options :pokemons='pokemonArr'></pokemon-options>
  </div>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: { PokemonPicture, PokemonOptions },
  name: 'PokemonPage',
  data(){
    return { 
      pokemonArr: [],
      pokemon: null,
      showPokemon: false
    }
  },
  methods: {
    async mixPokemonArr(){

      this.pokemonArr = await getPokemonOptions();
      
      const randomInt = Math.floor(Math.random() * 4);

      this.pokemon = this.pokemonArr[randomInt];
    }
  },
  mounted(){
    this.mixPokemonArr()
  }
}
</script>