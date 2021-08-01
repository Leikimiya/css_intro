// alert(`Активируйте Уголь`)
//let hello = `Hello World!`
//var hello2 = `Hello World 2!`
//const hello3 = `Hello World 3!`
// while(true)
// alert(`Активируйте Уголь`)
/*console.log (hello)
console.log (hello2)
console.log (hello3)
let stringVar = 'Some string' //строковые
console.log (typeof stringVar);

let numberVar = 12345 // числовые (целые и вещественные(с запятой))
console.log (typeof numberVar);

let booleanVar = true //false
console.log (typeof booleanVar);

let undefinedVar = undefined //специальный тип данных который ознаечает что значение не определено (по умолчанию)
console.log (typeof undefinedVar);

let nullVar = null //Пустая 
console.log (typeof nullVar);// выдает обьект (хотя это не так (фича))
*/
let objectVar = {
    key1: 'Value 1',
    key2: 'Value 2'

}//обьект, сложный тип данных
console.log (typeof objectVar);//определяем типы
console.log(objectVar.key1)

function helloFunction (congrat) {
    return congrat + ' from function'
} //обьявляем функцию
//console.log(helloFunction('Hello')) // вызываем функцию
//console.log(typeof helloFunction) // выводим тип функции 
//console.log(typeof helloFunction('Hello'))

function helloUser (congrat, name) {
    return congrat + ', ' + name
}
console.log (helloUser('Hello', 'John'))
console.log (helloUser('Hello', 'Jane'))
console.log (helloUser('Привет'))

let header = document.getElementById('header')
header.textContent = hello3 

function testFunction (arg1, arg2, arg3){
    console.log(arg1);
    console.log(arg2);
    console.log(arg3); 
}
testFunction(1, 2, 3)
