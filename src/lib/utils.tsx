// Add a leading 0 if the number is less than 10
export const padWithZero = (num: number) => (num < 10 ? `0${num}` : num)

// Returns the target end date
export const getDatePlusDuration = (duration: number) =>
  new Date().getTime() + duration * 60000

// Returns a display string of time e.g. 01:29:45 or 09:58
export const buildgalleryTimeString = (
  hours: number,
  minutes: number,
  seconds: number
) => {
  let concatentated = `${padWithZero(minutes)}:${padWithZero(seconds)}`

  // only show the hours digits if duration is over an hour
  if (hours) {
    concatentated = `${padWithZero(hours)}:` + concatentated
  }

  return concatentated
}

// Returns time segments separated as seconds, minutes, hours
export const getSegmentedTime = (endDate: number) => {
  // get total seconds between the times
  let delta = Math.abs(Number(endDate) - Number(new Date())) / 1000

  // calculate whole hours and left over seconds
  const hours = Math.floor(delta / 3600) % 24
  delta -= hours * 3600

  // calculate whole minutes and left over seconds
  const minutes = Math.floor(delta / 60) % 60
  delta -= minutes * 60

  // what's left is seconds
  const seconds = Math.floor(delta % 60)

  return { hours, minutes, seconds }
}
