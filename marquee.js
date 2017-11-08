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
  el.setAttribute('style', `width: 100000px; margin-left: 960px; animation: marqueeAnimation 5.26515s linear 1s infinite;`)
}
