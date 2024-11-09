// Приложение Б - Практика, практика, практика!
// Practicing Prototypes (Прототипы)

// вычисляем некоторое рандомное целое число
function randMax(max) {
  // 1e9 = 1*10^9 = 1 000 000 000 = миллиард (billion)
  // Math.random() - возвращает 0 < псевдослучайное число с запятой < 1
  // Math.trunc() - округляет до целых в сторону меньшего целого числа
  // % - возвращает остаток, оставшийся при делении одного числа на другое
  return Math.trunc(1e9 * Math.random()) % max
}

var reel = {
  // Возможные значения на колесе
  symbols: ['X', 'Y', 'Z', 'W', '$', '*', '<', '@'],

  // Крутим колесо
  spin() {
    // по идее, при первом запуске position всегда null
    // а вот при втором уже не null... но это не точно...
    if (this.position == null) {
      // получаем целое число, не превышающее максимального индекса массива
      this.position = randMax(this.symbols.length - 1)
    }

    // берем последнее значение позиции и... по итогу так же получаем какое-то число не превышающее длину массива
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length
  },

  display() {
    // Если позции нет (при первом запуске)
    if (this.position == null) {
      // позиция равно случайному числу не превышающему максимальный индекс
      this.position = randMax(this.symbols.length - 1)
    }

    // выводим значение масиива, соовтетвующее индексу = позиции
    return this.symbols[this.position]
  },
}

function createReels() {
  let reels = []
  for (i = 0; i < 9; i++) {
    reels.push(Object.create(reel))
  }

  return reels
}

var slotMachine = {
  reels: createReels(),

  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin()
    })
  },

  display() {
    let [a, b, c, d, e, f, g, h, i] = this.reels

    return `
      ${a.display()} | ${b.display()} | ${c.display()}
      ${d.display()} | ${e.display()} | ${f.display()}
      ${g.display()} | ${h.display()} | ${i.display()}
      `
  },
}

slotMachine.spin()
let result = slotMachine.display()
console.log(result)
