const arr = [1,2,5,10,16];
const double = [];

const newArr = arr.forEach((num) => {
    double.push(num * 2);
});

const mapArr = arr.map((num) => {
    return num * 2
});

const filterArr = arr.filter( num => {
    return num >= 5
});
console.log('filter: ', filterArr);

// const mapArr = arr.map( num => num * 2 );

// const filterArr = arr.filter( num => num === 5 );


