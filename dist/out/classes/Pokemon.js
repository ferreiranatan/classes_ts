export class Pokemon {
    constructor(id, name, height, weight, legendary, firstAppearance, abilities, stats) {
        this.id = id;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.legendary = legendary;
        this.firstAppearance = firstAppearance;
        this.abilities = abilities;
        this.stats = stats;
    }
}
const pokemon1 = new Pokemon(1, "Ditto", 3, 40, false, "1996-06-01", ["limber", "imposter"], [
    {
        "base_stat": 48,
        "stat": "hp"
    },
    {
        "base_stat": 48,
        "stat": "attack"
    },
    {
        "base_stat": 48,
        "stat": "defense"
    }
]);
console.log(pokemon1);
