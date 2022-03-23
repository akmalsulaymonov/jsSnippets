// Group arrays by function
// source: https://javascript.plainenglish.io/7-killer-javascript-snippets-dbe49a9ccf11

const groupBy = (arr, fn) =>
  arr.map(fn).reduce((acc, cur, i) => {
    acc[cur] = [...(acc[cur] || []), arr[i]];
    return acc;
  }, {});

// 🎉 { number: [ 1, 3 ], string: [ '2', '4' ] }
console.log(groupBy([1, '2', 3, '4'], (val) => typeof val));

// 🎉 { '1': [ [ 1 ], [ 3 ] ], '2': [ [ 1, 2 ], [ 3, 4 ] ] }
console.log(groupBy([[1], [1, 2], [3], [3, 4]], (val) => val.length));
