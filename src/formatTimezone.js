import moment from 'moment-timezone'

export const formatTimezone = (tzString) =>
  `(GMT${moment.tz(tzString).format('Z')}) ${tzString}`
