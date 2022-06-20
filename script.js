// 4. Напишите функцию findLongestWord(str), 
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

// const findLongestWord = function(str) {
//     let words = str.split(' ');

//     let maxLength = words[0].length;
//     let wordLong = '';

// //    if ( maxLength.length > wordLong.length){
// //     wordLong = maxLength;
// //    }

//     console.log(maxLength);
// }

// findLongestWord(
// `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`
// )


//5. Напишите функцию, которая возвращает элементы массива, которые больше указанного числа. Нельзя использовать циклы for или while.
// let newArr = []
// const returnArr = function(ot , arr) {

// newArr = arr.filter((elem) => { return elem > ot } ) 

// return newArr;

// }

// console.log(returnArr( 2, [1, 2, 3, 5, 6]))



// 6. Дан массив [1, 2, 3, 4, 5]. Написать рекурсивную функцию, которая выводит элементы массива в обратном порядке.
// let i = 0;
// const printArr = function(arr){
    
//     if ( i < arr.length) {
//         console.log(arr[i]);
//         i++;
//         printArr(arr);
//     }


// }

// printArr([1, -2, -13, 555, 9, 222])

// 7. Есть массив arr = [0, true, false, true, 1, true, true, false, "true", undefined, "1", null]. 
// Необходимо написать функцию, которая вернет количество true (boolean) элементов.

// arr1 = [0, true, false, true, 1, true, true, false, "true", undefined, "1", null]

// const printArr = function(arr){

// return arr === true || arr === false


// }

// let boolArr = arr1.filter(printArr)
// console.log(boolArr.length)


//8. Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

// let strFirst = `доГ/* tre`;
// let strSecond = `гОд, rte`;

// const check = function(fStr,sStr ){
// newstrFirst = fStr.replace(/[^a-zа-яё]/gi, '').toLowerCase().split(``).sort().join(``);
// newstrSecond = sStr.replace(/[^a-zа-яё]/gi, '').toLowerCase().split(``).sort().join(``);

// if ( newstrFirst == newstrSecond) { return true} else { return false }

// }


// console.log(check(strFirst,strSecond ))

// 9. Напишите функцию createArr(), которая создает массив, заполняемый "руками" (например, через prompt()), пока пользователь не введет пустую строку. Функция должна вернуть созданный массив.

// arr = [];
// let a;
// const createArr = function(){
    
    
//     if( a === null ){
//         return arr;
        

//     } else {
        
//         a = prompt(`Vvedite elem`)
        
//         arr.push(a);
//         createArr(a);
        
//     };


// }
// createArr()
// console.log(createArr())


// 10. Напишите функцию createPassword по созданию паролей длиной от минимум 6 символов, либо до кол-ва введеного через параметр. Обязательные требования к паролю: латинские символы и целые числа; специальные симоволы: _-,.&*^$#@+=!; минимум один большой симовол, одна цифра, один спец. символ.

// let sim = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ", pass =``;

// const createPassword = function( len ){

//     len < 6 ? len = 6 : len = len ;

//     for (let i = 1 ; i <= len; i++){
        
       
//         pass += sim[Math.floor(Math.random() * sim.length)]
        

//     }

//     return pass;


// }

// console.log(createPassword (2));

// 11. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным значением или нет. Функция первым параметром должна принимать значение элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Нельзя пользоваться методами indexOf (или lastIndexOf), циклами for или while.



// const inArray = function(searchNumber , arr){

//     check = arr.some ( item => {
//         if (item == searchNumber ) {
//             return true
//         } else { return false}
//         }
//     )

//     return check
// }


// console.log (inArray( 5 , [1, 2, 3, 6, 8, 231, 65, `dog`]))



// 12. Перепишите код, заменив цикл for на метод map:

// let arr = ["Есть", "жизнь", "на", "Марсе"];

 
// let newArr = arr.map( elem =>  elem.length);


// console.log(newArr); // 4,5,2,5

// 13. Есть 2 массива: arr1 = [1,2,3,4,5,6,7,8] и arr2 = [5, 3, 6, 9, 11]. Напишите функцию, которая принимает 2 массива и возвращает массив элементов, которые есть в обоих массивах. Решите задачу задачу двумя способами: используя оператор расширения; используя цикл.

// let arr1 = [1,2,3,4,5,6,7,8];
// let arr2 = [5, 3, 6, 9, 11];


// const mirorArr = function (firstAr , secondAr) {

// arr3=[...firstAr, ...secondAr]    

// return arr3
// }

// mirorArr( arr1, arr2);

// 14. Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал. Скопируйте массив vegetables в новый, и добавьте в него любой элемент.
//Решите задачу задачу двумя способами: используя оператор расширения; используя цикл.
// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// const copyArr = function(arr, elem) {

// let newArr = [...arr];
// newArr.push(elem);
// return newArr;

// }

// console.log(copyArr(vegetables, `check`))

// 15. Напишите функцию numProducts(num),  которая в зависимости от переданного в нее целочисленного аргумента num, будет выводить слово «товар» в нужной форме («12 товаров», но «22 товара»). По умолчанию аргумент num должен иметь значение 0.
