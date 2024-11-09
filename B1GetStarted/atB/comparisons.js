// Приложение Б - Практика, практика, практика!
// Practicing Comparisons (Сравнения)

let dayStart = '07:30'
let dayEnd = '17:45'

// Мой вариант:

// schedule meeting - расписание встреч/собраний

// function scheduleMeeting(startTime, durationMinutes) {
//   const anyDay = 'Sat, 02 Nov 2024'
//
//   let dayStartDate = new Date(`${anyDay} ${dayStart}:00 GMT`)
//   let dayEndDate = new Date(`${anyDay} ${dayEnd}:00 GMT`)
//   let startTimeDate = new Date(`${anyDay} ${startTime}:00 GMT`)
//
//   const end = new Date(startTimeDate)
//   let endMeeting = new Date(end.setMinutes(end.getMinutes() + durationMinutes))
//
//   if (startTimeDate < dayStartDate || endMeeting > dayEndDate) {
//     console.log(false)
//   } else {
//     console.log(true)
//   }
// }

// вариант из книги:

function scheduleMeeting(startTime, durationMinutes) {
  // str.match(regexp)
  // Якоря: начало строки ^ и конец $
  // \d - цифра (сокр. от digit "цифра")
  // {} - диапазон допустимого количества символов
  var [, meetingStartHour, meetingStartMinutes] = startTime.match(/^(\d{1,2}):(\d{2})$/) || []

  durationMinutes = Number(durationMinutes)

  if (
    // Проверяем типы...
    typeof meetingStartHour == 'string' &&
    typeof meetingStartMinutes == 'string'
  ) {
    // Ситаем длительность встречи в целых часах
    let durationHours = Math.floor(durationMinutes / 60)
    durationMinutes = durationMinutes - durationHours * 60 // ??? - непонятно
    let meetingEndHour = Number(meetingStartHour) + durationHours
    let meetingEndMinutes = Number(meetingStartMinutes) + durationMinutes

    if (meetingEndMinutes >= 60) {
      // увеличиваем час на +1, если количество минут стало больше 60
      meetingEndHour = meetingEndHour + 1

      // после прибавления +1 часа, уменьшаем количкество минут на -60
      meetingEndMinutes = meetingEndMinutes - 60
    }

    // создаём полностью квалифицированные (уточненные)
    // строки для дальнейшего сравнения
    let meetingStart = `${meetingStartHour.padStart(2, '0')}:${meetingStartMinutes.padStart(2, '0')}`

    let meetingEnd = `${String(meetingEndHour).padStart(2, '0')}:${String(meetingEndMinutes).padStart(2, '0')}`

    // Сравниваем строковые значения времени. Будет алфавитное сравнение, но т.к. мы провели работу по уточнение строковых значений, то сравнение долно быть безопасным.
    return meetingStart >= dayStart && meetingEnd <= dayEnd
  }
  return false
}

console.log(scheduleMeeting('7:00', 15)) // false
console.log(scheduleMeeting('07:15', 30)) // false
console.log(scheduleMeeting('7:30', 30)) // true
console.log(scheduleMeeting('11:30', 60)) // true
console.log(scheduleMeeting('17:00', 45)) // true
console.log(scheduleMeeting('17:30', 30)) // false
console.log(scheduleMeeting('18:00', 15)) // false
console.log(scheduleMeeting('07:45', 90)) // true
