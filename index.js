const cartIcon = document.querySelector('#cart-icon')
const cartWindow = document.querySelector('#cart-window')

cartIcon.addEventListener('click', () => {
    cartWindow.classList.toggle('hidden')
})
