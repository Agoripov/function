// №1
function calculateArraySum(arr) {
  return arr.reduce((sum, currentValue) => sum + currentValue, 0);
}

const myArray1 = [1, 2, 3, 4, 5];
const arraySum = calculateArraySum(myArray1);
console.log("Сумма элементов массива:", arraySum);

// №2
function findDivisors(number) {
  const divisors = [];
  
  for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
          divisors.push(i);
      }
  }
  
  return divisors;
}

const myNumber2 = 12;
const divisorsList = findDivisors(myNumber2);
console.log(`Делители числа ${myNumber2}:`, divisorsList);

// №3
function stringToArray(str) {
  return Array.from(str);
}

const myString3 = "hello, world";
const charArray = stringToArray(myString3);
console.log("Массив символов строки:", charArray);

// №4
function reverseString(str) {
  return str.split('').reverse().join('');
}

const myString4 = "hello, world";
const reversedString = reverseString(myString4);
console.log("Перевернутая строка:", reversedString);

// №5
function capitalizeFirstLetter(str) {
  if (str.length === 0) {
      return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

const myString5 = "hello, world";
const capitalizedString = capitalizeFirstLetter(myString5);
console.log("Строка с заглавной первой буквой:", capitalizedString);

// №6
function capitalizeWords(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}

const myString6 = "hello, world";
const wordsCapitalized = capitalizeWords(myString6);
console.log("Строка с заглавной первой буквой каждого слова:", wordsCapitalized);


// №7
function generateNumberArray(n) {
  if (n <= 0) {
      return [];
  }

  return Array.from({ length: n }, (_, index) => index + 1);
}

const n7 = 5;
const numberArray7 = generateNumberArray(n7);
console.log("Массив целых чисел:", numberArray7);

// №8
function calculateDigitSum(number) {
  const numStr = number.toString();
  return numStr.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

const myNumber8 = 12345;
const digitSum = calculateDigitSum(myNumber8);
console.log("Сумма цифр числа:", digitSum);

// №9
function checkLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const myYear9 = 2023;
const isLeapYear9 = checkLeapYear(myYear9);
console.log(`${myYear9} - ${isLeapYear9 ? 'високосный' : 'не високосный'} год`);

// №10
function secondsToDays(seconds) {
  const secondsInADay = 86400;
  return Math.floor(seconds / secondsInADay);
}

const mySeconds10 = 172800;
const days10 = secondsToDays(mySeconds10);
console.log(`${mySeconds10} секунд - это примерно ${days10} суток.`);

// №11
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const myArray11 = [1, 2, 3, 4, 5];
const randomElement11 = getRandomElement(myArray11);
console.log("Случайный элемент из массива:", randomElement11);

// №12
function isPrimeNumber(number) {
  if (number <= 1) {
      return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          return false;
      }
  }

  return true;
}

const myNumber12 = 10;
const isPrime12 = isPrimeNumber(myNumber12);
console.log(`${myNumber12} - ${isPrime12 ? 'простое' : 'не простое'} число`);
