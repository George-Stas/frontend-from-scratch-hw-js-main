/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = true
const isVerifiedUser = true
const hasSpecialPermission = true
const hasTemporaryPass = true

let specStatus
let specPermission

let isAccess

// your code

if((specStatus === isAdmin || specStatus === isVerifiedUser) && (specPermission === hasSpecialPermission || specPermission === hasTemporaryPass)) {
    isAccess = true
} else {
    isAccess = false
}

console.log(isAccess)
