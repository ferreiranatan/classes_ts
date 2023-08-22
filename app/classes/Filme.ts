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
        public title: string,
        public video: boolean 
        ){}
    }


const guardiansOfTheGalaxy = new Filme(
          false,
        "/5YZbUmjbMa3ClvSW1Wj3D6XGolb",
        447365,
        "en",
        "Guardians of the Galaxy Vol. 3",
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        4145.055,
        "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        "2023-05-03",
        "Guardians of the Galaxy Vol. 3",
        false
    )

