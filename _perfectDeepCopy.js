// Almost perfect deep copy
// source: https://javascript.plainenglish.io/7-killer-javascript-snippets-dbe49a9ccf11

const deepClone = (obj, map = new WeakMap()) => {
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
  
    if (map.has(obj)) {
      return map.get(obj);
    }
  
    const allDesc = Object.getOwnPropertyDescriptors(obj);
    const cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
  
    map.set(obj, cloneObj);
  
    for (const key of Reflect.ownKeys(obj)) {
      const value = obj[key];
  
      cloneObj[key] =
        value instanceof Object && typeof value !== 'function'
          ? deepClone(value, map)
          : value;
    }
    return cloneObj;
  };
  
  const symbolKey = Symbol('symbolKey');
  const originValue = {
    num: 0,
    str: '',
    boolean: true,
    unf: void 0,
    nul: null,
    obj: { name: 'object', id: 1 },
    arr: [0, 1, 2],
    func() {
      console.log('function');
    },
    date: new Date(0),
    reg: new RegExp('/regexp/ig'),
    [symbolKey]: 'symbol',
  };
  
  Object.defineProperty(originValue, 'innumerable', {
    // writable is true to ensure that the assignment operator can be used
    writable: true,
    enumerable: false,
    value: 'innumerable',
  });
  
  // Create circular reference
  originValue.loop = originValue;

  // Deep Copy
  const clonedValue = deepClone(originValue);
  
  // Change original value
  originValue.arr.push(3);
  originValue.obj.name = 'newObject';
  
  // Remove circular reference
  originValue.loop = '';
  originValue[symbolKey] = 'newSymbol';
  
  console.log('originValue: ', originValue);
  console.log('clonedValue: ', clonedValue);
  