"use strict"

//alert('Hello. How are you?') // Выводит окно на экран с текстом который мы ввели


// confirm('Ты здесь?')  // Выводит окно с 2 мя вариантами. Результат можно записать в перменную результат true или false
// const con=confirm('Уверен?')
// console.log(con)

// const answer=prompt('Ты сегодня ел?','Да') // Вопрос с возможностью ввести ответ в ручную. Текстовое поле
// console.log(answer) // второй параметр в promt Это ответ по умолчанию.
// console.log(typeof(answer))

const otvet=[]

otvet[0]=prompt('Как Вас зовут?','')
otvet[1]=prompt('Как Ваша фамилия?','')
otvet[2]=prompt('Скоько Вам лет?','')

document.write(otvet) //Высели массив на экран сайта с помощью команды document.write