export class Pokemon {
    constructor(
        private id: number,
        public readonly name: string,
        public readonly height: number,
        public readonly weight: number,
        public legendary: boolean,
        public firstAppearance: string,
        public abilities: Array <string>,
        public stats: Array <pokemonStats>
        )
           {}
        }



interface pokemonStats{
    "base_stat":number,
    "stat": string
}

const pokemon1 = new Pokemon(
    1,
    "Ditto",
    3,
    40,
    false,
    "1996-06-01",
    ["limber", "imposter"],
    [
        {
        "base_stat":48,
        "stat":"hp"
       },
       {
        "base_stat":48,
        "stat":"attack"
       },
       {
        "base_stat":48,
        "stat":"defense"
       }

]
    )


console.log(pokemon1)