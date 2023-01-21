class NinjaFactorie {
    constructor(type = 'Ninja', village = 'Areia') {
        this.type = type;
        this.village = village;
    }

    async loadFactory() {
        return await require(`./${this.type}/${this.type}${this.village}`)
    }

}

module.exports = {
    NinjaFactorie
}