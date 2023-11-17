const nav_bar=document.querySelector('.nav_bar')
const open=document.querySelector('.open')
const close=document.querySelector('.close')

open.addEventListener('click', () => {
    nav_bar.classList.add('visible')
})

close.addEventListener('click', () => {
    nav_bar.classList.remove('visible')
})