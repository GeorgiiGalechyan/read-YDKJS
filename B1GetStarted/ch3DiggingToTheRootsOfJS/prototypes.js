var homework = {
  topic: 'JS',
}

// homework.toString() // [object Object]

// Связывание с прототипом через Object.create(...)
var otherHomework = Object.create(homework)

otherHomework.topic // JS

var empty = Object.create(null) // [Object: null prototype] {}

let homework2 = {
  study() {
    console.log(`Please, study ${this.topic}`)
  },
}

let JSHomework = Object.create(homework2)
JSHomework.topic = 'JavaScript'
JSHomework.study() // Please, study JavaScript

let MathHomework = Object.create(homework2)
MathHomework.topic = 'Math'
MathHomework.study() // Please, study Math
