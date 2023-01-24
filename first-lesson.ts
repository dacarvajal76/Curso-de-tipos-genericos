/* function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30] */

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([2, 3, 4, 5, 6]);
//numberArray.push('Hello'); Argument of type 'string' is not assignable to parameter of type 'number'.

function identity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let returnNumber: number = identity<number, string>(25, 'Hello');
let returnString: string = identity<string, string>('Good Morning', 'Good Afternoon');
let returnBoolean: boolean = identity<boolean, string>(true, 'Good Night');

returnNumber = returnNumber * 100;
//returnString = returnString * 100;
//returnBoolean = returnString * 100;