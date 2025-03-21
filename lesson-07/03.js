/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

function truncate(str, maxLength) {
  // your code
  const arr = str.split('')
  console.log(arr.length)
  if(arr.length <= maxLength) {
    return str
  } else {
    const newStr = `${arr.slice(0, maxLength).join('')}...`
    return newStr
  }
}

const result = truncate("1234567890", 9)

console.log(result)
