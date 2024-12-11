function memoize(fn) {
    const cache = new Map()
    return function (...args) {
        const key = JSON.stringify(args);
    }
}