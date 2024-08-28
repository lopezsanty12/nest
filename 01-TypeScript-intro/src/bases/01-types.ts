export let name: string = 'Santiago Lopez';
export const age: number = 35;
export const isvalid: boolean = true;

name = 'Vanessa';

// No se puede asignar otro tipo de variable si se declaro un tipo string
// name = 123;
// name = true;

export const templateString = ` Esto es un string
multilinea
puede tener
" dobles
' simples
inyectar valores ${ name }
expresiones ${ 1 + 1 } 
números: ${ age }
booleanos: ${ isvalid }
`

console.log(templateString);