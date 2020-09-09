/*
 * immediate脱离事件后是否执行一次
 */
export function throttle(func, threshhold = 160, immediate = true) {
    let timeout
    let start = new Date()
    return function () {
        const context = this
        const args = arguments
        const curr = new Date() - 0

        clearTimeout(timeout)

        if (curr - start >= threshhold) {
            func.apply(context, args)
            start = curr
        } else {
            if (immediate) {
                timeout = setTimeout(function () {
                    func.apply(context, args)
                }, threshhold)
            }
        }
    }
}

export function debounce(func, delay = 160) {
    let timeout
    return function () {
        clearTimeout(timeout)

        const context = this
        const args = arguments

        timeout = setTimeout(function () {
            func.apply(context, args)
        }, delay)
    }
}
