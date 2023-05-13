// 1. Print odds 1-20
//      using a loop write code that will console.log all the odd values from 1 up to 20
for(var i = 1; i <= 20; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

let i = 1
while(i <= 20){
    if(i % 2 != 0){
        console.log(i);
    }
    i++;
}

// 2. Decreasing Multiples of 3
//      using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 dow to 0
for(var i = 100; i > 0; i --){
    if( i % 3 == 0){
        console.log(i);
    }
}

let i = 100;
while(i > 0){
    if( i % 3 == 0){
        console.log(i);
    }
    i--;
}

// 3. Print the sequence
//      using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5
var arr = [4, 2.5, 1, -0.5, -2, -3.5];
for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

var arr = [4, 2.5, 1, -0.5, -2, -3.5];
let i = 0;
while(i < arr.length){
    console.log(arr[i]);
    i++;
    }

// 4. Sigma
//      write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result. We should get back 5050at the end.
var sum = 0;
for(var i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);

var sum = 0;
let i = 1;
while(i <= 100){
    sum = sum + i;
    i++;
    }
console.log(sum);

// 5. Factorial
//      write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result. we should get back 479001600 at the end.
var product = 1;
for(var i = 1; i <= 12; i++){
    product = product * i;
}
console.log(product);

var product = 1;
let i = 1;
while(i <= 12){
    product = product * i;
    i++
}
console.log(product);