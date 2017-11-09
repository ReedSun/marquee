function dealCSS (obj) {
  let result = ''
  for (var i in obj) {
    result += `${i}: ${obj[i]}; `
  }
  return result.slice(0, -1)
}

const marquee = (config) => {
  const el = config.el
  const word = el.innerHTML
  const winW = window.innerWidth

  // 清空内部内容
  el.innerHTML = ''

  // 内部增加滚动容器
  let marqueeNode = document.createElement('div')
  el.appendChild(marqueeNode)
  marqueeNode.innerHTML = word

  // 设置滚动容器的样式
  marqueeNode.setAttribute('style', dealCSS({
    float: 'left',
    'margin-right': 0
  }))

  // 设置动画
  el.innerHTML += `
    <style>
      @keyframes marqueeAnimation {
        100% {
          margin-left: -${marqueeNode.offsetWidth}px;
        }
      }
    </style>
  `

  // 设置包裹 div 的样式
  el.setAttribute('style', dealCSS({
    width: '100000px',
    'margin-left': `${winW}px`,
    animation: 'marqueeAnimation 5s linear 1s infinite'
  }))

}
