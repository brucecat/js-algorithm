export class HashMap<V>{
    public map: { [index: string]: V } = {};

    public put(key: string, value: V) {
        this.map[key] = value;
    }

    public get(key: string): V {
        return this.map[key]
    }

    public remove(key: string) {
        delete this.map[key];
    }

    public getAllKeys() {
        return Object.keys(this.map);
    }

    public removeAll() {
        this.map = {};
    }

}