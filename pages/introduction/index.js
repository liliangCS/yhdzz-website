// 回到顶部按钮逻辑
// 节流函数
function throttle(func, duration) {
  let lastTime = 0
  const newFunc = (...args) => {
    const nowTime = Date.now()
    if (nowTime - lastTime >= duration) {
      lastTime = nowTime
      func.apply(this, args)
    }
  }
  return newFunc
}

// 滚动事件监听函数
const scrollEvent = throttle(() => {
  if (window.scrollY >= 100 && goTopBtnEl.className !== "go-top") {
    goTopBtnEl.className = "go-top"
  } else if (window.scrollY < 100 && goTopBtnEl.className !== "go-top hidden") {
    goTopBtnEl.className = "go-top hidden"
  }
}, 100)

const goTopBtnEl = document.querySelector(".go-top")

goTopBtnEl.addEventListener("click", () => {
  window.scrollTo(0, 0)
})

window.addEventListener("scroll", scrollEvent)