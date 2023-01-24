//Declaración de una interfaz genérica

interface Identity<T, U> {
  value: T;
  message: U;
}

let returnNumber: Identity<number, string> = {
  value: 25,
  message: 'Hello!'
};

let returnString: Identity<string, number> = {
  value: 'Hello!',
  message: 25
};

// Declaración de una interfaz genérica como un tipo de función
interface ProcessIdentity<T, U> {
  (value: T, message: U): T;


}

function processIdentity<T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}

let processor: ProcessIdentity<number, string> = processIdentity

let returnNumber1 = processor(100, 'hello!');
//let returnString1 = processor('hello!', 100); Type check error



