import { Borders } from '../types/enum'
import { Languages } from '../types/enum'

export class Pais {
    constructor(
        public readonly name: {
            commom: string
            official: string
        },
        public independet: boolean,
        public capital: string,
        public region: string,
        public subregion: string,
        public languages: Languages,
        public latng: Array<number>,
        public borders: Array<Borders>,
        public readonly area: number,
        public population: number,
        public readonly timezones: Array<string>,
        public flags: {
            png: string,
            svg: string
        }
    ) { }

        
}



const brasil = new Pais(
    {
        "commom": "Brazil",
        "official": "Federative Republic of Brazil"
    },

    true,

    "Brasilia",
    "Americas",
    "South America",

    Languages.Portuguese,

    [-10, 55],

    [
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
    ],

    8515767,
    212559409,

    [
        "UTC-05:00",
        "UTC-04:00",
        "UTC-03:00",
        "UTC-02:00"
    ],

    {
        "png": "https://flagcdn.com/w320/br.png",
        "svg": "https://flagcdn.com/br.svg"
    }






)
