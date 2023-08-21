export class Filme {
    constructor(adult, Back_img, id, original_language = "en", original_title, oveview, popularity, poster_img, release_date, video) {
        this.adult = adult;
        this.Back_img = Back_img;
        this.id = id;
        this.original_language = original_language;
        this.original_title = original_title;
        this.oveview = oveview;
        this.popularity = popularity;
        this.poster_img = poster_img;
        this.release_date = release_date;
        this.video = video;
    }
}
