'use strict'

console.log('array'+ ' - is Object') // строка +строка на выходе строка
console.log(23+ ' - is Object') // число + строка на выходе все равно строка
console.log(23+ +'5') // если перед строкой поставить + то строка переведется в число(+ называется унарным плюсом)

let incr=10,
    dec=10

incr++ // постфиксный вариант перед переменной
dec--
console.log(incr)
console.log(dec)

++incr // перфиксный вариант перед переменной
--dec
console.log('++incr = ',incr)
console.log('--dec = ',dec)

console.log('8%3 = ',8%3) // на выходе остаток от деления 8 на 3 и равен от 2 (3+3+2)