class NotImplementedException extends Error {
    constructor() {
        super('Not Implemented Exception');
    }
}

export default class NinjaInterface {
    usarJutsu() { throw new NotImplementedException(); };
    falar() { throw new NotImplementedException(); };
}