// Задание 1
function pickPropArray(array, property) {
    return array.reduce((result, item) => {
      if (item.hasOwnProperty(property)) {
        result.push(item[property]);
      }
      return result;
    }, []);
  }
  
  const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
  ];
  
  const result = pickPropArray(students, 'name');
  console.log('Задание 1');
  console.log(result);
  
// Задание 2
function createCounter() {
    let count = 0;
  
    return function () {
      count++;
      console.log(count);
    }
  }
  
  console.log('Задание 2')
  const counter1 = createCounter();
  counter1(); // 1
  counter1(); // 2
  
  const counter2 = createCounter();
  counter2(); // 1
  counter2(); // 2

// Задание 3
function spinWords(str) {
    const words = str.split(' ');
  
    const reversedWords = words.map(word => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
    });
  
    const result = reversedWords.join(' ');
    return result;
  }
  
  console.log('Задание 3')
  const result1 = spinWords("Привет от Legacy");
  console.log(result1); // тевирП от ycageL
  
  const result2 = spinWords("This is a test");
  console.log(result2); // This is a test
  
// Задание 4
function twoSum(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  
    // Если нет подходящей пары чисел
    return [];
  }
  
  console.log('Задание 4')
  const nums = [2, 6, 3, 15];
  const target = 9;
  
  const result4 = twoSum(nums, target);
  console.log(result); // [0, 1]
  
//Задание 5
function longestCommonPrefix(array) {
    if (array.length === 0) {
        return "";
    }

    if (array.length === 1) {
        return array[0];
    }

    // Находим самую короткую строку
    let shortStr = array.reduce((a, b) => (a.length <= b.length ? a : b));

    const shortStrLen = shortStr.length;
    for (let i = shortStrLen; i >= 2; i--) {
        for (let j = 0; j <= shortStrLen - i; j++) {
            const prefix = shortStr.substring(j, j + i);

            // Проверяем, содержится ли текущий префикс во всех строках массива
            if (array.every(str => str.includes(prefix))) {
                return prefix;
            }
        }
    }

    return "";
}

console.log('Задание 5');

const strs1 = ["цветок", "поток", "хлопок"];
const result51 = longestCommonPrefix(strs1);
console.log(result51); // "ок"

const strs2 = ["собака", "гоночная машина", "машина"];
const result52 = longestCommonPrefix(strs2);
console.log(result52); // ""
