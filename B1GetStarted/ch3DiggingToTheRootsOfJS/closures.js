// Пример замыкания 1 -

// function greeting(msg) {
//   return function who(name) {
//     console.log(`${msg}, ${name}!`)
//   }
// }
//
// let hello = greeting('Hello')
// let howdy = greeting('Howdy')
//
// hello('Kate') // Hello Kate!
// hello('Sarah') // Hello Sarah!
// howdy('Grant') // Howdy Grant!

// Пример замыкания 2 - counter (счётчик)
let counter = (step = 1) => {
  let count = 0
  return function increaseCount() {
    count = count + step
    console.log(count)

    return count
  }
}

let incBy1 = counter(1)
let incBy3 = counter(3)

incBy1()
incBy1()

incBy3()
incBy3()
incBy3()
