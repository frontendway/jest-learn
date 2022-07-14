export const runCallback = (fn) => {
  setTimeout(() => {
    fn && fn()
  }, 1000)
}

export const runPendingCallback = (fn) => {
  setTimeout(() => {
    fn && fn()
    setTimeout(() => {
      fn && fn()
    }, 1000)
  }, 1000)
}
