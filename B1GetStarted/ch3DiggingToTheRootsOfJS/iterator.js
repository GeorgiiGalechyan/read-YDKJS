// Цикл for ...of
// let animals = ['dog', 'cat', 'mouse']
//
// for (i of animals) {
//   console.log(`This is ${i} `)
// }

// ...Spread
// let foo = ['zero', 'one']
// let bar = [...foo, 'two', 'three']
//
// let doSomethink = (...items) => {
//   console.log(...items)
// }
//
// doSomethink(bar)

// let textLine = 'I love sleep!'
//
// let arr = [...textLine]
//
// console.log(arr)

//Map
// let a = 'a'
// let b = () => {}
// let c = []
// let d = {}
//
// let elemMap = new Map()
//
// elemMap.set(a, 'string')
// elemMap.set(b, 'function')
// elemMap.set(c, 'array')
// elemMap.set(d, 'object')
//
// for ([key, value] of elemMap) {
//   console.log(`Key ${key} have value ${value}.`)
// }
//
// for (values of elemMap.values()) {
//   console.log(values)
// }

// Array
let cities = ['Moskow', 'Paris', 'London', 'Madrid', 'Tokyo']

for ([index, value] of cities.entries()) {
  console.log(`[${index}]: ${value}`)
}
