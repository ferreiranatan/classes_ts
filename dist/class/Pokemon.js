export class Pokemon {
    constructor(id, name, height, weight, legendary, firstAppearance, abilities) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.legendary = legendary;
        this.firstAppearance = firstAppearance;
        this.abilities = abilities;
    }
}
const pokemon1 = new Pokemon(
    1,
    "Ditto",
    3,
    40,
    false, 19960601,
    ["limber", "imposter"]
    );
