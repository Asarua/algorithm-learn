function twoSum(arr: Array<number>, target: number): [number, number] | void {
    const cache = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
        const fun = arr[i];
        if (cache.has(fun)) {
            return [cache.get(fun)!, i]
        }
        cache.set(target - fun, i);
    }
}

console.log(twoSum([1, 2, 3], 5))
