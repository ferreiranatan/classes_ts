export class Filme {
    constructor(adult, Back_img, id, original_language, original_title, oveview, popularity, poster_img, release_date, title, video) {
        this.adult = adult;
        this.Back_img = Back_img;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.oveview = oveview;
        this.popularity = popularity;
        this.poster_img = poster_img;
        this.release_date = release_date;
        this.title = title;
        this.video = video;
    }
}
const guardiansOfTheGalaxy = new Filme(false, "/5YZbUmjbMa3ClvSW1Wj3D6XGolb", 447365, "en", "Guardians of the Galaxy Vol. 3", "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.", 4145.055, "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", "2023-05-03", "Guardians of the Galaxy Vol. 3", false);
