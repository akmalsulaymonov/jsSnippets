const url = 'https://jsonplaceholder.typicode.com/users/1';

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });