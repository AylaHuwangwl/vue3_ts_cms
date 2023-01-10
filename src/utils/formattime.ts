import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
export function formatTime(utcTime: string, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs.utc(utcTime).utcOffset(8).format(format)
}
