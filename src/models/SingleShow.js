import Show from './Show'

export default class SingleShow extends Show {

    constructor(name, image, showID, info) {
        super(name, image, showID)
        this.info = info.slice(3,-4);
        this.seasons = [];
        this.cast = [];
        this.crew = []
        this.akas = [];
        this.episodes = [];
    }
    addSeason(season) {
        this.seasons.push(season);
    }
    addCast(cast) {
        this.cast.push(cast);
    }
    addCrew(crew) {
        this.crew.push(crew);
    }
    addAkas(aka) {
        this.akas.push(aka);
    }
    addEpisodes(episodes) {
        this.episodes.push(episodes);
    }
};