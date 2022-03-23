// Promises with limited concurrency
// source: https://javascript.plainenglish.io/7-killer-javascript-snippets-dbe49a9ccf11

const getLimitFunction = (limitCount) => {
    class Queue {
      constructor() {
        this.items = [];
      }
  
      enqueue = (item) => {
        this.items.push(item);
      };
  
      dequeue = () => {
        const item = this.items.shift();
        if (!item) {
          throw new Error('Please enqueue first');
        }
        return item;
      };
  
      get size() {
        return this.items.length;
      }
    }
  
    const queue = new Queue();
    let runningCount = 0;
  
    const next = () => {
      runningCount -= 1;
      if (queue.size > 0) {
        queue.dequeue()();
      }
    };
  
    const run = async (fn, resolve) => {
      runningCount += 1;
      const result = (async () => fn())();
      resolve(result);
  
      try {
        await result;
      } catch {
        // ignore
      }
  
      next();
    };
  
    return (fn) => {
      return new Promise((resolve) => {
        queue.enqueue(() => run(fn, resolve));
        if (runningCount < limitCount && queue.size > 0) {
          queue.dequeue()();
        }
      });
    };
  };
  
  const test = () => {
    const sleep = (ms) =>
      new Promise((resolve) => {
        console.log('start: ', ms);
        setTimeout(() => {
          console.log('resolve: ', ms);
          resolve(ms);
        }, ms * 1000);
      });
  
    const promiseFunctions = [1, 2, 3, 4, 5, 6].map((item) => () => {
      if (item === 5) {
        return Promise.reject('Test error');
      }
      return sleep(item);
    });
  
    void (async () => {
      const limit = getLimitFunction(3);
      try {
        const result = await Promise.allSettled(
          promiseFunctions.map((fn) => limit(fn))
        );
        console.log('result: ', result);
      } catch (error) {
        console.log('error: ', error);
      }
    })();
  };
  
  test();
  