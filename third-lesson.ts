function getPets<T, K extends keyof T>(pet: T, key: K) {
  return pet[key]
}

let pets1 = {
  cats: 4,
  dogs: 3,
  parrots: 1,
  fish: 6
}
let pets2 = {
  1: "cats",
  2: "dogs",
  3: "parrots",
  4: "fish"
}

/* console.log(getPets(pets1, "parrots"));
console.log(getPets(pets2, 2)) */

