export class Filme{
    constructor(
        public readonly adult: boolean,
        public Back_img: string,
        public readonly id : number,
        public original_language: string,
        public readonly original_title: string,
        public oveview : string,
        public popularity :number,
        public poster_img: string,
        public readonly release_date: string,
        public video: boolean
        ){}
    }


const guardiansOfTheGalaxy = new Filme(
          false,
        "/5YZbUmjbMa3ClvSW1Wj3D6XGolb",
        447365,
        "en"
        "Guardians of the Galaxy Vol. 3",


    )

