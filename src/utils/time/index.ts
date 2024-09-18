import {
  isAfter,
  isBefore,
  startOfDay,
  startOfHour,
  setHours,
  startOfMinute,
  setMinutes,
  startOfSecond,
  setSeconds,
  getTime,
  endOfDay,
  format
} from 'date-fns'

/**
 * 禁止选择当前日期之前的日期 Range及非Range类型均可使用
 * @example :is-date-disabled="dateDisable"
 */
export function dateDisabled(
  ts: number,
  type: 'before' | 'after' = 'after'
) {
  return type === 'before'
    ? !(ts <= getTime(endOfDay(new Date())))
    : !(ts >= getTime(startOfDay(new Date())))
}

const getHourDisabled = (
  current: number,
  hour: number,
  type: 'before' | 'after' = 'after'
) => {
  const activeHour = startOfHour(new Date())
  return type === 'before'
    ? isBefore(
        activeHour,
        setHours(startOfHour(current), hour)
      )
    : isAfter(
        activeHour,
        setHours(startOfHour(current), hour)
      )
}

const getMinuteDisabled = (
  current: number,
  minute: number,
  hour: number | null,
  type: 'before' | 'after' = 'after'
) => {
  if (hour === null) return false

  const activeHour = startOfMinute(new Date())
  return type === 'before'
    ? isBefore(
        activeHour,
        setMinutes(startOfMinute(current), minute)
      )
    : isAfter(
        activeHour,
        setMinutes(startOfMinute(current), minute)
      )
}

const getSecondDisabled = (
  current: number,
  second: number,
  minute: number | null,
  hour: number | null,
  type: 'before' | 'after' = 'after'
) => {
  if (hour === null || minute === null) return false
  const activeHour = startOfSecond(new Date())
  return type === 'before'
    ? isBefore(
        activeHour,
        setSeconds(startOfSecond(current), second)
      )
    : isAfter(
        activeHour,
        setSeconds(startOfSecond(current), second)
      )
}

/** 禁止选择当前时间之前的时间 非Range类使用 */
export function timeDisabled(
  current: number,
  type: 'before' | 'after' = 'after'
) {
  return {
    isHourDisabled: (hour: number) =>
      getHourDisabled(current, hour, type),
    isMinuteDisabled: (
      minute: number,
      hour: number | null
    ) => getMinuteDisabled(current, minute, hour, type),
    isSecondDisabled: (
      second: number,
      minute: number | null,
      hour: number | null
    ) =>
      getSecondDisabled(current, second, minute, hour, type)
  }
}

/**
 * 禁止选择当前时间之前的时间 RangeTime类使用
 */
export function rangeTimeDisabled(
  _current: number,
  rangeType: 'start' | 'end',
  range: [number, number],
  type: 'before' | 'after' = 'after'
) {
  if (rangeType === 'start') {
    return timeDisabled(range[0], type)
  } else {
    return {
      isHourDisabled: (hour: number) => {
        const activeHour = startOfHour(new Date())
        const itemHour = startOfHour(
          setHours(startOfHour(range[1]), hour)
        )

        return type === 'before'
          ? !(
              getTime(itemHour) <= getTime(activeHour) &&
              getTime(itemHour) >=
                getTime(startOfHour(range[0]))
            )
          : isAfter(activeHour, itemHour) ||
              isAfter(startOfHour(range[0]), itemHour)
      },
      isMinuteDisabled: (
        minute: number,
        hour: number | null
      ) => {
        if (hour === null) return false
        const activeHour = startOfMinute(new Date())
        const itemHour = setMinutes(
          startOfMinute(range[1]),
          minute
        )

        return type === 'before'
          ? !(
              getTime(itemHour) <= getTime(activeHour) &&
              getTime(itemHour) >=
                getTime(setSeconds(range[0], 0))
            )
          : isAfter(activeHour, itemHour) ||
              isAfter(setSeconds(range[0], 0), itemHour)
      },
      isSecondDisabled: (
        second: number,
        minute: number | null,
        hour: number | null
      ) => {
        if (hour === null || minute === null) return false
        const activeHour = startOfSecond(new Date())
        const itemHour = setSeconds(
          startOfSecond(range[1]),
          second
        )

        return type === 'before'
          ? !(
              getTime(itemHour) <= getTime(activeHour) &&
              getTime(itemHour) >= getTime(range[0])
            )
          : isAfter(activeHour, itemHour) ||
              isAfter(range[0], itemHour)
      }
    }
  }
}

/**
 * 格式化日期时间
 * @param {Date|Number|String} date 需要格式化的日期值
 * @param {String} dateFormat 需要改变成的格式
 * @returns {String} 格式化后的时间
 */
export function formatDate(
  date: Date | number | string,
  dateFormat = 'yyyy-MM-dd HH:mm:ss'
): string {
  const parsedDate = new Date(date)
  return format(parsedDate, dateFormat)
}
