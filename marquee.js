function addCSS (node, obj) {
  let result = ''
  for (var i in obj) {
    result += `${i}: ${obj[i]}; `
  }
  node.setAttribute('style', result.slice(0, -1))
}

function assertElement (ele) {
	try {
		ele.cloneNode(true)
		if (ele.nodeType != 1 && ele.nodeType != 9) {
			return false	
		}		
	} catch (e) {
    return false
	}
		return true
}

const marquee = (config) => {
  const defaultConfig = {
    el: null,
    delayTime: 1
  }
  config = Object.assign(defaultConfig, config)

  // 进行 config 的类型判断
  let error = false
  if (!assertElement(config.el)) {
    console.warn('el 不是正确的元素类型')
    error = true
  } else if (isNaN(config.delayTime)) {
    error = true
    console.warn('dalayTime 不是正确的数字类型')
  }
  if (error) {
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
  addCSS(marqueeNode, {
    float: 'left',
    'margin-right': 0
  })

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
  addCSS(config.el, {
    width: '100000px',
    'margin-left': `${window.innerWidth}px`,
    animation: `marqueeAnimation 5s linear ${config.delayTime}s infinite`
  })
}
