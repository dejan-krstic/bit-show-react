export default class CrewMember {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    getInfo() {
        return `${this.type}: ${this.name}`;
    }
}

