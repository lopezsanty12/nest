export const pokemonIds = [1,20,30,34,66];

// Las interfaces definen el tipo de informacion que debe recibir nuestro objeto
interface Pokemon {
    id: number,
    name: string,
    age?: number
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const charmander: Pokemon = {
    id: 4,
    name: 'Charmander',
    age: 1
}
// Typescript permite ingresar diferentes valores a pesar de que se declare
// Entero en este caso y lo compila con el string
// pokemonIds.push('1');
// pokemonIds.push(+'1');

console.log(charmander);