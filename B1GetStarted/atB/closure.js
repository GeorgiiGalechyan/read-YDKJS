// Приложение Б - Практика, практика, практика!
// Practicing Closure (Замыкания)

// Мой код
// function range(start, end) {
//   if (typeof start !== 'number' || (end && typeof end !== 'number')) {
//     console.log('Введите корректные значения!')
//   }
//
//   if (typeof start === 'number' && typeof end === 'number') {
//     if (start > end) {
//       console.log([])
//       return []
//     }
//
//     let result = []
//     for (i = start; i <= end; i++) {
//       result.push(i)
//     }
//
//     console.log(result)
//   }
//
//   if (typeof start === 'number' && !end) {
//     return function withoutEnd(end) {
//       let result = []
//
//       if (start > end) {
//         console.log([])
//         return []
//       }
//
//       for (i = start; i <= end; i++) {
//         result.push(i)
//       }
//
//       console.log(result)
//     }
//   }
// }

function range(start, end) {
  start = Number(start) || 0

  if (end === undefined) {
    return function getEnd(end) {
      return getRange(start, end)
    }
  } else {
    end = Number(end) || 0
    return getRange(start, end)
  }

  function getRange(start, end) {
    let ret = []
    for (let i = start; i <= end; i++) {
      ret.push(i)
    }
    console.log(ret)
  }
}

range(3, 3) // [3]
range(3, 8) // [3, 4, 5, 6, 7, 8]
range(3, 0) // []

let start3 = range(3)
let start4 = range(4)

start3(3) // [3]
start3(8) // [3, 4, 5 ,6, 7, 8]
start3(0) // []

start4(6) // [4, 5, 6]
