class CacheUrl {
    constructor(url) {
        this.url = url;
    }
}

class CacheUrlFlyWeight {
    constructor() {
        this.balance = [];
    }

    getCache(url) {
        if (!this.balance[url]) {
            this.balance[url] = new CacheUrl(url);
        }

        return this.balance[url];
    }

}

const fabrica = new CacheUrlFlyWeight();

const cache1 = fabrica.getCache("A");
const cache2 = fabrica.getCache("A");
const cache3 = fabrica.getCache("B");

console.log(cache1 === cache2); // true
console.log(cache1 === cache3); // false