export default class Season {
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
    getInfo() {
        return `${this.startDate} - ${this.endDate}`;
    }
}