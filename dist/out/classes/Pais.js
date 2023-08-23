import { Borders } from '../types/enum.js';
import { Languages } from '../types/enum.js';
export class Pais {
    constructor(name, independet, capital, region, subregion, languages, latng, borders, area, population, timezones, flags) {
        this.name = name;
        this.independet = independet;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.latng = latng;
        this.borders = borders;
        this.area = area;
        this.population = population;
        this.timezones = timezones;
        this.flags = flags;
    }
}
const brasil = new Pais({
    "commom": "Brazil",
    "official": "Federative Republic of Brazil"
}, true, "Brasilia", "Americas", "South America", Languages.Portuguese, [-10, 55], [
    Borders.ARGENTINA,
    Borders.BOLIVIA,
    Borders.COLOMBIA,
    Borders.GUYANA,
    Borders.GUYANA_FRANCESA,
    Borders.PARAGUAY,
    Borders.PERU,
    Borders.SURINAME,
    Borders.URUGUAY,
    Borders.VENEZUELA
], 8515767, 212559409, [
    "UTC-05:00",
    "UTC-04:00",
    "UTC-03:00",
    "UTC-02:00"
], {
    "png": "https://flagcdn.com/w320/br.png",
    "svg": "https://flagcdn.com/br.svg"
});
console.log(brasil);
