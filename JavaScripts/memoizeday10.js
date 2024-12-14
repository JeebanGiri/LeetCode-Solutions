function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const memoize = (fn) => {
  const cache = {}; // Initialize Object for cache store
  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result; // set the cache key with it's value
    return result;
  };
};
