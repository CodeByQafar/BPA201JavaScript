// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i)
// }


// let text = 'Hello'

// for (var i = 0; i < text.length; i++) {
//     console.log(text[i])
// }

// for (var i = text.length - 1; i >= 0; i--) {
//     console.log(text[i])
// }


// tsks



// let array = [1, 2, 3, 4, 5]

// let min = array[0]
// for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//         min = array[i]
//     }
// }

// console.log(min)

// let max = array[0]
// for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//         max = array[i]
//     }
// }

// console.log(max)





// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 1) {
//         console.log(i)
//     }
// }


// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         console.log(i)
//     }
// }


// let res = 0


// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 1) {
//         res += array[i]
//     }
// }

// console.log(res)







// let array = [1, 2, 3, 4, 5, 7]





// let res = 1

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         res = res * array[i]
//     }
// }

// console.log(res)



// let min = array[0]
// for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//         min = array[i]
//     }
// }



// let max = array[0]
// for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//         max = array[i]
//     }
// }

// console.log(min - max)


// let tekMax
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 1) {
//         tekMax = array[i]
//         break
//     }
// }


// for (let i = 0; i < array.length; i++) {

//     if (array[i] % 2 == 1 && array[i] > tekMax) {
//         tekMax = array[i]

//     }


// }

// console.log(tekMax)





// let cutMax
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         cutMax = array[i]
//         break
//     }
// }


// for (let i = 0; i < array.length; i++) {

//     if (array[i] % 2 == 0 && array[i] > tekMax) {
//         cutMax = array[i]

//     }


// }

// console.log(tekMax)


// const array1 = [1, 2, 3, 4, 5];
// const array2 = [10, 20, 30, 40, 50];



// for (let i = 0; i < array1.length; i++) {

//     console.log(array1[i] + array2[i])


// }




// let array = [33, 5, 5, 8, 10, 1, 3, 15, 20, 25];


// let isEqual = false
// for (let i = 0; i < array.length; i++) {

//     for (let j = 0; j < array.length; j++) {
//         if (array[i] == array[j] && i != j) {
//             isEqual = true
//         }

//     }
//     if (!isEqual) {
//         console.log(array[i])
//     }
//     isEqual = false
// }


let array = [33, 5, 5, 8, 10, 1, 3, 15, 20, 25];

let number=33

let isNotFinded=true

for (let i = 0; i < array.length; i++) {
   if(array[i]==number){
    array[i]=0
    isNotFinded=false
   }
  
}
 if(isNotFinded){
    console.log('tapilmai')
   }
console.log(array)



// Sunal Jabili
// 16:57
// let array = [33,5,8,10,1,3,15,20,25];

// 1.Array-de en kicik elementi tapin.
// 2.Array-de en boyuk elementi tapin.
// 3.Array-de tek ededleri gosterin.
// 4.Array-de cut ededleri gosterin.
// 5.Array-de tek ededlerin cemini tapin.
// Sunal Jabili
// 17:37
// 6.Array-de cut ededleri hasilini.
// 9.Array-de en kicik elementle en boyuk elementin ferqini tapin.
// 10.Array-de tek ededlerin en boyuyunu tapin.
// 11.Array-de cut ededlerin en kiciyini tapin.
// Sunal Jabili
// 17:46
// 13.İki eyni uzunluqlu tam ədədlər massivi verilib. Hər indeksdəki elementlərin cəmini hesablayan və ekrana çıxardan alqoritm yazın. js ile yaz
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [10, 20, 30, 40, 50];

// Index 0: 1 + 10 = 11
// Index 1: 2 + 20 = 22
// Index 2: 3 + 30 = 33
// Index 3: 4 + 40 = 44
// Index 4: 5 + 50 = 55
// Sunal Jabili
// 17:51
// Bir tam ədədlər massivi verilib. Bu massivdə yalnız bir dəfə təkrarlanan elementləri çap edən funksiya yazın.
// Sunal Jabili
// 18:21
// 10. Sizə bir tam ədədlər massivi və silinəcək ədəd verilir. Əgər ədəd massivdə yoxdursa, **"Not found"* yazılsın. Əks halda, həmin ədəd silinsin və massivin sonuna 0 əlavə edilsin ki, ölçü dəyişməsin.
    
//     *Misal:*
    
//     [1,2,3,4,5,6,7,8] & 3 ⇒ [1,2,4,5,6,7,8,0]
    
//     [1,2,4,5,6,7,8] & 6 ⇒ [1,2,4,5,7,8,0,0]
    
//     [1,2,4,5,7,8] & 10 ⇒ Not found