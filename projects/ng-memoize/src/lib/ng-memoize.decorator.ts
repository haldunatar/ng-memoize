const cache = {};

/**
 *
 * ngMemoize aims to cache return value of expensive functions.
 *
 * Decorator accepts a function and caches it output by
 * its name and its arquments combined together after executing the function once.
 * As the function is called with same inputs; the cached value will be returned without
 * executing the function.
 */

export const ngMemoize = (): Function => {
  return (target: Function, key: string, value: any) => {
    return {
      value: (...args: any[]) => {
        const memoized = key + args.toString();

        return cache.hasOwnProperty(memoized)
          ? cache[memoized]
          : (cache[memoized] = value.value.apply({}, args));
      }
    };
  };
};
