function dealCSS (obj) {
  let result = ''
  for (var i in obj) {
    result += `${i}: ${obj[i]}; `
  }
  return result.slice(0, -1)
}

const marquee = (config) => {
  const el = config.el
  const word = el.innerText
  console.log(word)

  el.innerHTML = `
    <div style="margin-right: 0px; float: left;">${word}</div>
    <style>
      @-webkit-keyframes marqueeAnimation {
        100% {
          margin-left:-960px
        }
      }
    </style>
  `
  const wrapperCSS = {
    width: '100000px',
    'margin-left': '960px',
    animation: 'marqueeAnimation 5s linear 1s infinite'
  }
  el.setAttribute('style', dealCSS(wrapperCSS))
}
