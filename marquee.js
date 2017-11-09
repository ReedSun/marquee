function dealCSS (obj) {
  let result = ''
  for (var i in obj) {
    result += `${i}: ${obj[i]}; `
  }
  return result.slice(0, -1)
}

function assertElement (ele) {
	try {
		ele.cloneNode(true)
		if (ele.nodeType != 1 && ele.nodeType != 9) {
      console.error(' `el` 不合法，不是 DOM 元素')
			return false	
		}		
	} catch (e) {
		console.error('`el` 不合法，不是 DOM 元素')
    return false
	}
		return false
}

const marquee = (config) => {
  const defaultConfig = {
    el: null
  }
  config = Object.assign(defaultConfig, config)

  // 进行 config 的类型判断
  if (!assertElement(config.el)) {
    return console.error('marquee 初始化失败')
  }
  
  // 清空内部内容
  const word = config.el.innerHTML
  config.el.innerHTML = ''

  // 内部增加滚动容器
  let marqueeNode = document.createElement('div')
  config.el.appendChild(marqueeNode)
  marqueeNode.innerHTML = word

  // 设置滚动容器的样式
  marqueeNode.setAttribute('style', dealCSS({
    float: 'left',
    'margin-right': 0
  }))

  // 设置动画
  config.el.innerHTML += `
    <style>
      @keyframes marqueeAnimation {
        100% {
          margin-left: -${marqueeNode.offsetWidth}px;
        }
      }
    </style>
  `

  // 设置包裹 div 的样式
  config.el.setAttribute('style', dealCSS({
    width: '100000px',
    'margin-left': `${window.innerWidth}px`,
    animation: 'marqueeAnimation 5s linear 1s infinite'
  }))

}
