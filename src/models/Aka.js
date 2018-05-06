export default class Aka {
    constructor (aka, country) {
        this.aka = aka;
        this.country = country; 
    }
    getInfo () {
        if (this.country) {
            return `${this.aka}, in ${this.country}`;
        } else {
            return this.aka;
        }
    }
}
