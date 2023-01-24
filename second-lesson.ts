//Restriccion generica

type ValidTypes = string | number;

/* function identity<T extends ValidTypes, U>(value: T, message: U): T {
  let result: T = value + value;
  console.log(message);
  return result;
}

let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!'); */

//let returnBoolean = identity<boolean, string>(true, 'Bonjour!');  Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

function Identity<T extends ValidTypes, U>(value: T, message: U) {
  let result: ValidTypes = '';
  let typeValue: string = typeof value;

  if (typeof value === 'number') {
    result = value + value;
  } else if (typeof value === 'string') {
    result = value + value;
  }

  console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);

  return result

}

let numberValue = Identity<number, string>(100, 'hello');
let stringValue = Identity<string, string>("100", 'hello');