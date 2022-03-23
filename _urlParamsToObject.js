// Convert URL parameters to object
// source: https://javascript.plainenglish.io/7-killer-javascript-snippets-dbe49a9ccf11

const getURLParams = (url) => {
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((acc, cur) => {
      const [k, v] = cur.split('=');
      const p = acc[k];
  
      acc[k] = p ? (Array.isArray(p) ? p : [p]).concat(v) : v;
      return acc;
    }, {});
  };
  
  // 🎉 {}
  console.log(getURLParams('google.com'));
  
  // 🎉 { name: '1', age: '2' }
  console.log(getURLParams('https://www.google.com/?name=1&age=2'));
  
  // Support duplicate key
  // 🎉 { name: '1', age: [ '2', '3' ] }
  console.log(getURLParams('https://www.google.com/?name=1&age=2&age=3'));
  
  // 🎉 { name: '1', age: '2' }
  console.log(getURLParams('name=1&age=2'));
  