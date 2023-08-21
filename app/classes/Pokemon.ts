export class Pokemon {

    constructor(
        private id: number,
        public readonly name: string,
        public readonly height: number,
        public readonly weight: number,
        public legendary: boolean,
        public firstAppearance: string,
        public abilities: Array<string>
    ) {

    }

}
const pokemon1 = new Pokemon(
    1,
    "Ditto",
    3,
    40,
    false,
    "1996-06-01",
    ["limber", "imposter"]
)


