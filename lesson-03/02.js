// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(num) {
    let bull = false
    if(num % 2 === 0) {
        bull = true
    } else {
        bull
    }

    return bull
}

const even = isEven(6)

console.log(even)

