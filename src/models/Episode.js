export default class Episode {
    constructor (name, season, number) {
        this.name = name;
        this.season = season;
        this.number = number;
    }
    getInfo (){
        return `${this.name}, season: ${this.season} number: ${this.number}`;
    }
}