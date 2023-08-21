export class Filme{
    constructor(
        public readonly adult: boolean,
        public Back_img: string,
        public readonly id : number,
        public original_language: string = "en",
        public readonly original_title: string,
        public oveview : string,
        public popularity :number,
        public poster_img: string,
        public readonly release_date: string,
        public video: boolean

            ){}
}