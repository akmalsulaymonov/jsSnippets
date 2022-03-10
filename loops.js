var todos = [
    "clean room",
    "brush teeth",
    "make plan",
    "study well"
];

// for loop
for (var i=0; i < todos.length; i++){
    console.log(todos[i]);
}

function todo(item, index){
    console.log(item, index);
}

// forEach loop
todos.forEach(todo);

// while loop
var y=10;
while( y > 0 ){
    console.log(y);
    y--;
}

// do while loop
var j=10;
do{
    console.log(j);
    j--;
} while( j > 0);