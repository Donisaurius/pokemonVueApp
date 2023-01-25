import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {

    const pokemons = Array.from(Array(650));

    return pokemons.map((_,index) => index + 1)
    
}

const getPokemonsOptions = async () => {

    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    console.log(mixedPokemons)

    const pokemonsNames = await getPokemonsNames(mixedPokemons.splice(0,4));

    // console.log('Names',pokemonsNames);

    return pokemonsNames
    
}

const getPokemonsNames = async ( [a,b,c,d] = []) => {

    const pokemonsArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
    ]

    const [p1,p2,p3,p4] = await Promise.all(pokemonsArr)

    return [
        {name: p1.data.name, id: p1.data.id},
        {name: p2.data.name, id: p2.data.id},
        {name: p3.data.name, id: p3.data.id},
        {name: p4.data.name, id: p4.data.id},
    ]
    
}

export default getPokemonsOptions;