"use strict" // это говорит что мы работаем в современном скриптовом режиме

let number = 5 // означает что переменная изменяема
const number2 = 1 // Переменная неихменяемая константа

number=10
console.log(number)


const obj={ // Const не вовсем не изменяемая пример ниже
    a:50
}
obj.a=150
console.log(obj)


// {
//     let tem=15 // переменная объявленная в {} скобачках доступна только внутри этих самых скобочек
// }               // но если использовать var то ошибки не будет так как var глобальна и доступна до оъявнения переменных
// console.log(tem)