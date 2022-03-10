let obj1 = { value: 10 };
let obj2 = obj1;
let obj3 = { value: 10 };

const obj4 = {
    a: function(){
        console.log(this);
    }
}

class Player {
    constructor (name, type){
        console.log('player', this);
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor (name, type){
        super(name, type);
        console.log('wizard', this);
    }

    play(){
        console.log(`AAAAAA I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Azizjon', 'Smart');
const wizard2 = new Wizard('Mehrona', 'Beautiful');