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

// 旋转盒子逻辑
const boxEl = document.querySelector(".inner-box")
const nodes = boxEl.children

// 控制盒子状态
function controlBoxStatus(isChange = true) {
  let distance = 50
  if (isChange) distance = 100
  nodes[0].style.transform = `rotateX(90deg) translateZ(${distance}px)`
  nodes[1].style.transform = `rotateX(-90deg) translateZ(${distance}px)`
  nodes[2].style.transform = `rotateY(-90deg) translateZ(${distance}px)`
  nodes[3].style.transform = `rotateY(90deg) translateZ(${distance}px)`
  nodes[4].style.transform = `translateZ(${distance}px)`
  nodes[5].style.transform = `rotateY(-180deg) translateZ(${distance}px)`
}

// 鼠标移入爆炸状态
boxEl.addEventListener("mouseenter", () => {
  controlBoxStatus(true)
})

// 鼠标移出解除爆炸状态
boxEl.addEventListener("mouseleave", () => {
  controlBoxStatus(false)
})