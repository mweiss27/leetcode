const militaryTimePattern = /(\d+):(\d+)/

const twoDigits = (num) => `00${num}`.slice(-2)

const destructureTime = (timeString) => militaryTimePattern.exec(timeString).slice(1, 3)

const compareTimes = (time1, time2) => {
  if (time1 && !time2) return -1
  if (time2 && !time1) return 1
  if (time1 === time2) return 0

  const [hour1, minute1] = destructureTime(time1)
  const [hour2, minute2] = destructureTime(time2)

  if (+hour1 < +hour2) return -1
  if (+hour2 < +hour1) return 1
  if (+minute1 < +minute2) return -1
  if (+minute2 < +minute1) return 1
  return 0
}

const add30 = (timeString) => {
  let [hour, minute] = destructureTime(timeString)

  minute = +minute + 30
  if (minute >= 60) {
    hour = +hour + 1
    minute -= 60
  }

  return `${hour}:${twoDigits(minute)}`
}

const diffMinutes = (time1, time2) => {
  let [hour1, minute1] = destructureTime(time1)
  let [hour2, minute2] = destructureTime(time2)

  let t1 = +hour1 * 60 + +minute1
  let t2 = +hour2 * 60 + +minute2
  return t2 - t1
}

function findFreeSlots(calendar1, bounds1, calendar2, bounds2, meetingLength) {
  const mergedCalendars = calendar1.concat(calendar2).sort((a, b) => {
    const startTimeSort = compareTimes(a[0], b[0])
    if (startTimeSort === 0) {
      return compareTimes(a[1], b[1])
    }

    return startTimeSort
  })

  // Now we need to condense overlapping slots to get one continuous calendar

  for (let i = 1; i < mergedCalendars.length; ) {
    const prevEnd = mergedCalendars[i - 1][1]
    const curStart = mergedCalendars[i][0]
    if (compareTimes(prevEnd, curStart) >= 0) {
      // These meetings overlap. We can splice out index i and update the end time of i-1 to i's end time
      mergedCalendars[i - 1][1] = mergedCalendars[i][1]
      mergedCalendars.splice(i, 1)
    } else {
      i++
    }
  }
  // Now we can find free slots

  const effectiveBounds = [
    compareTimes(bounds1[0], bounds2[0]) > 0 ? bounds1[0] : bounds2[0],
    compareTimes(bounds1[1], bounds2[1]) < 0 ? bound1[1] : bounds2[1],
  ]

  const freeSlots = []
  for (let i = 0; i < mergedCalendars.length; i++) {
    if (i === 0) {
      const start = effectiveBounds[0]
      const end = mergedCalendars[i][0]

      // First meeting
      const availableTime = diffMinutes(start, end)
      if (availableTime >= meetingLength) {
        freeSlots.push([start, end])
      }
    } else {
      // Meeting mid-day
      const start = mergedCalendars[i - 1][1]
      const end = mergedCalendars[i][0]

      const availableTime = diffMinutes(start, end)
      if (availableTime >= meetingLength) {
        freeSlots.push([start, end])
      }
    }

    // Last meeting
    if (i === mergedCalendars.length - 1) {
      const start = mergedCalendars[i][1]
      const end = effectiveBounds[1]

      const availableTime = diffMinutes(start, end)
      if (availableTime >= meetingLength) {
        freeSlots.push([start, end])
      }
    }
  }

  return freeSlots
}

const expectedOutput = [
  ["11:30", "12:00"],
  ["15:00", "16:00"],
  ["18:00", "18:30"],
]

/* 
    Merging:
    ["9:00", "10:30"], ["12:00", "13:00"], ["16:00", "18:00"]
    ["10:00", "11:30"], ["12:30", "14:30"], ["14:30", "15:00"], ["16:00", "17:00"]

    Result:
    ["9:00", "11:30"], ["12:00", "15:00"], ["16:00", "18:00"]
*/
console.log(
  `Output: `,
  findFreeSlots(
    [
      ["9:00", "10:30"],
      ["12:00", "13:00"],
      ["16:00", "18:00"],
    ],
    ["9:00", "20:00"],
    [
      ["10:00", "11:30"],
      ["12:30", "14:30"],
      ["14:30", "15:00"],
      ["16:00", "17:00"],
    ],
    ["10:00", "18:30"],
    30
  )
)
