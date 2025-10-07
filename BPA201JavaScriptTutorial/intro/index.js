let userPoint = Math.floor(Math.random() * 100);

if (userPoint > 90) {
    console.log("A")
} else if (userPoint > 80) {
    console.log('B')
} else if (userPoint > 70) {
    console.log('C')
} else if (userPoint > 60) {
    console.log('D')
} else if (userPoint > 50) {
    console.log('E')
} else {
    console.log("F")
}


let day = Math.floor(Math.random() * 7) + 1;
// switch (day) {
//     case value:

//         break;

//     default:
//         break;
// }




let testNumber = 5;


if (testNumber % 3 == 0 && testNumber % 5 == 0) {
    console.log("FizzBuzz")
} else if (testNumber % 3 == 0) {
    console.log("Fizz")
} else if (testNumber % 5 == 0) {
    console.log("Buzz")
} else {
    console.log('hec birine bolunmur')
}





// let a = 15
// let b = 20
// let c = 30



// if (a > b) {
//     if (a > c) {
//         console.log('en boyuk a')
//     } else {
//         console.log('en boyuk c')
//     }
// } else {
//     if (b > c) {
//         console.log('en boyuk b')
//     } else {
//         console.log('en boyuk c')
//     }
// }


// let a = 24
// let b = 26
// if (a % 2 == 0 && b % 2 == 0) {
//     console.log(a + b)
// } else {
//     console.log('edeler cut olmalidr')
// }



// let a = 24
// let b = 26
// let c = 25
// let res = 0
// if (a % 5 == 0) {
//     res += a
// } if (b % 5 == 0) {
//     res += b
// } if (c % 5 == 0) {
//     res += c
// }
// console.log(res)


let a=15
let b=10
    a=a-b
    b=b+a
    a=b-a


console.log(a)
console.log(b)