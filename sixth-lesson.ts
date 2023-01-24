// Definición de una clase genérica

class processIdentity<T, U>{
  private _value: T;
  private _message: U;

  constructor(value: T, message: U) {
    this._value = value;
    this._message = message;
  }

  getIdentity(): T {
    console.log(this._message);
    return this._value;
  }
}

let processor = new processIdentity<number, string>(100, 'hello');
processor.getIdentity();