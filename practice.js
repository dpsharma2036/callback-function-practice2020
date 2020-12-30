
let x = function(){
    console.log(" I am called from inside a function")
};

let y = function(callback){
    console.log('do something');
    callback();
}

y(x);

let calc = function(num1, num2, calcType) {
    if(calcType==="add"){
        return num1 + num2;

    } else if(calcType === "subtract"){
        return num1 - num2;
    }
};

console.log(calc(5,9, 'add'));

console.log(calc(5, 9,'subtract'));

// other way to callback

let add = function(a,b){
    return a + b;
};
 let multiply = function(a,b){
     return a*b;
 };
 let doWhatever = function(a,b){
    console.log(`here are your two numbers back ${a}, ${b}`);
    
 };
 

 let  calculate = function( num1, num2, callback){
     if(typeof callback === "function"){
        return callback( num1, num2);
     }
     
 };

 console.log(calculate(5,9, multiply));

console.log(calculate(5,9,doWhatever));

// we can also do directly when we have to use  something only once.
// it is called a unanimous function

console.log(calculate(5,9,function(a,b){
    return a-b;
}));

// callback fuction on Array

let myArray =[
    {num: 7,
     string: 'guava'
    },{
    num:9,
    string: 'orange'
    },
    {
    num:5,
    string: 'banana'
    }
    
];
/*Array(3)
0: {num: 9, string: "orange"}
1: {num: 7, string: "guava"}
2: {num: 5, string: "banana"}
length: 3
__proto__: Array(0)*/

myArray.sort(function(value1, value2){
    if (value1.string> value2.string){
        return -1;
    }else{
        return 1;
    }
});
console.log(myArray);

// if we reverse (value1.string< value2.string,gives us reverse order)

/*0: {num: 5, string: "banana"}
1: {num: 7, string: "guava"}
2: {num: 9, string: "orange"}
length: 3
__proto__: Array(0)*/

let myNewArray =[
    {num: 7,
     string: 'plum'
    },{
    num:9,
    string: 'orange'
    },
    {
    num:5,
    string: 'banana'
    }
    
];


myNewArray.sort(function(value1, value2){
    if (value1.string < value2.string){
        return -1;
  }else{
    return 1;
}
});
console.log(myNewArray);

// we can also sort by number(num),like below instead of "string using num"


let myNewArray2 =[
    {num: 7,
     string: 'plum'
    },{
    num:9,
    string: 'orange'
    },
    {
    num:5,
    string: 'banana'
    }
    
];


myNewArray2.sort(function(value1, value2){
    if (value1.num > value2.num){
        return -1;
  }else{
    return 1;
}
});
console.log(myNewArray2);

/* output 
0: {num: 5, string: "banana"}
1: {num: 7, string: "plum"}
2: {num: 9, string: "orange"}
length: 3

*/