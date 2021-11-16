// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let a = [1, 2, 3, 4, 5]
// let b = ['1', '2', '3', '4', '5']
// let c = [1, 2, 3, 4, 5, '1', '2', '3', '4', '5', true, true, true, false, false]
//
// console.log(a)
// console.log(b)
// console.log(c)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let a = [];
    //
    // a[0] = 'One'
    // a[1] = 'Two'
    // a[2] = 'Three'
    // a[3] = 'Four'
    //
    // console.log(a[2])

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

//  for(let i = 0; i < 10; i++) {
//      document.write(`<div>hello okten</div>`)
//  }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// let index = '2021'
    // for (let i = 0; i < 10; i++) {
    //     document.write(`<div>Hello ${index}</div>`)
    // }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

    // let i = 0
    // while (i < 20) {
    //     i++
    //     document.write(`<div><h1>Hello</h1></div>`)
    // }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let d = 'world'
    // let i = 0
    // while (i < 20) {
    //     i++
    //     document.write(`<div><h1>Hello ${d}</h1></div>`)
    // }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

    // let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //
    // for (let a = 1; a <= 10 ; a++) {
    // console.log(a)
    // }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

    // let number = ['1','2','3','4','5','6','7','8','9','10']
    //
    // for (number of number) {
    // console.log(a)
    // }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (number of number) {
//     console.log(number)
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи

// let arrayBoolean = ['1','2','3','4','5','6','7','8','9','10',1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true,false,true,false,true,false,true]
//
// for (i = 0; i < arrayBoolean.length; i++) {
//     if (typeof arrayBoolean[i] === 'boolean') {
//         console.log(arrayBoolean[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу.
    // За допомогою if та typeof вивести тільки числові елементи

// let arrayNumber = ['1','2','3','4','5','6','7','8','9','10',1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true,false,true,false,true,false,true]
//
// for (i = 0; i < arrayNumber.length; i++) {
//     if (typeof arrayNumber[i] === 'number') {
//         console.log(arrayNumber[i])
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу.
    // За допомогою if та typeof вивести тільки рядкові елементи

// let arrayString = ['1','2','3','4','5','6','7','8','9','10',1, 2, 3, 4, 5, 6, 7, 8, 9, 10, true,false,true,false,true,false,true]
//
// for (i = 0; i < arrayString.length; i++) {
//     if (typeof arrayString[i] === 'string') {
//         console.log(arrayString[i])
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let array = [];
// array[0] = 'hello'
// array[1] = 'privit'
// array[2] =  'privet'
// array[3] =  1
// array[4] =  2
// array[5] =  3
// array[6] =  4
// array[7] = true
// array[8] = false
// array[9] = true
// array[10] = false
//
// for (let i = 0; i < 10; i++) {
//     console.log(array[i])
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 10; i++) {
//     console.log([i])
//     document.write([i])
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100 ; i++) {
//     console.log([i])
//     document.write([i])
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 1; i <= 100 ; i=i+2) {
//     console.log([i])
//     document.write([i])
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 1; i <= 100 ; i++) {
//     if(i % 2 === 0) {
//         console.log([i])
//         document.write([i])
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 1; i <= 100 ; i += 2) {
//         console.log([i])
//         document.write([i])
// }

