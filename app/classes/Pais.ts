import {borders} from '../types/enum'
export class pais{
    constructor(
        public readonly name: string,
        public independet: boolean,
        public capital: string,
        public region: string,
        public subregion: string,
        public languages: Array<string>,
        public latng: Array<number>,
        public borders:borders,
        public readonly area: number,
        public population : number,
        public readonly timezones: Array<string>,
        public flags: string
        ){}
}