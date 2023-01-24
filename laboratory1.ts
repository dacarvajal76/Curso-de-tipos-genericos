class DataStore<T>{
  private _data: T[] = new Array<T>(10);

  AddOrUpdate(index: number, item: T) {
    if (index >= 0 && index < 10) {
      this._data[index] = item;
    }
  }

  GetData(index: number) {
    if (index >= 0 && index < 10) {
      return this._data[index];
    } else {
      return
    }
  }
}

let processor = new DataStore<number>;
processor.AddOrUpdate(0, 1);
console.log(processor.GetData(0));


let processor1 = new DataStore<string>;
processor1.AddOrUpdate(0, 'hola');
console.log(processor1.GetData(0));