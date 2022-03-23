// Convert HTML String to DOM in 4 ways
// source: https://javascript.plainenglish.io/7-killer-javascript-snippets-dbe49a9ccf11

// Option 1
function str2DOM(str) {
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.firstElementChild;
}

// Option 2
function str2DOM(str) {
  return new DOMParser().parseFromString(str, 'text/html').body
    .firstElementChild;
}

// Option 3
function str2DOM(str) {
  return document.createRange().createContextualFragment(str);
}

// Option 4
function str2DOM(str) {
  const div = document.createElement('div');
  div.insertAdjacentHTML('afterbegin', str);
  return div.firstElementChild;
}

// test
function main(name) {
  const str = `<h1>Hello ${name}</h1>`;
  const element = str2DOM(str);
  console.log('element: ', element);

  document.body.appendChild(element);
}


main('World');