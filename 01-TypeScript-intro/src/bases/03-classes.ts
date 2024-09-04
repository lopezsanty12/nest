export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
    constructor(
        public readonly id: number, 
        public name: string,
        // public imageUrl: string,
    ){}

    // Metodos
    public scream () {
        console.log(`${ this.name.toUpperCase() }!!!`);
        this.speak()
    }

    private speak() {
        console.log(`${ this.name}, ${this.name}`);
    }
}

export const charmander = new Pokemon(4, 'Charmander')

// charmander.id = 5;
// charmander.name = 'Mew';

console.log(charmander);
charmander.scream();
// charmander.speak();