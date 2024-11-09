function classroom(teacher) {
  return function study() {
    console.log(`${teacher} says to study ${this.topic}`)
  }
}

//  assigment - задание
let assigment = classroom('Julia')

let homework = {
  topic: 'JS',
  assigment,
}

let otherHomework = {
  topic: 'irregular verbs!',
}

assigment() // Julia says to study undefined
homework.assigment() // Julia says to study JS
assigment.call(otherHomework) // Julia says to study irregular verbs!
