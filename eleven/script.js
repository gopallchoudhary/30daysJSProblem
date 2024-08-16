const div = document.querySelector('#container')
const anchor = document.createElement('a')
const btn = document.createElement('button')
anchor.setAttribute('href',  "https://www.youtube.com/")
btn.setAttribute('id', 'blk-btn')
btn.className = "button"
anchor.appendChild(btn)
btn.textContent = 'YOUTUBE'
div.appendChild(anchor)