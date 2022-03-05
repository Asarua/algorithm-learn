interface LRU_Interface<K, V> {
    cache: Map<K, V>;
    cap: number;
    get(key: K): V | undefined;
    put(key: K, value: V): void;
}

class LRU<K, V> implements LRU_Interface<K, V> {
    public cache = new Map<K, V>();
    constructor(public cap: number) {}

    public get(key: K) {
        if (this.cache.has(key)) {
            const temp = this.cache.get(key)
            this.cache.delete(key)
            this.cache.set(key, temp!)
            return temp
        }
    }

    public put(key: K, value: V): void {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        } else if (this.cache.size >= this.cap) {
            this.cache.delete(this.cache.keys().next().value)
        }
        this.cache.set(key, value)
    }
}