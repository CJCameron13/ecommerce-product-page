const cartIcon = document.querySelector('#cart-icon')
const cartWindow = document.querySelector('#cart-window')
const minus = document.querySelector('#minus-icon')
const plus = document.querySelector('#plus-icon')
const counter = document.querySelector('#counter-value')
const addToCart = document.querySelector('#place-in-cart-button')

cartIcon.addEventListener('click', () => {
    cartWindow.classList.toggle('hidden')
})

//Counter

let stringOfItems = counter.textContent
let numOfItems = parseInt(stringOfItems)
console.log(numOfItems)

plus.addEventListener('click', () => {
    numOfItems++
    console.log(numOfItems)
    counter.textContent = numOfItems
})

minus.addEventListener('click', () => {
    if(numOfItems < 1) {
        //do nothing
    } else {
    numOfItems--
    counter.textContent = numOfItems
    }
})

//Add to cart
const pushMultipleTimes = (array, value, times) => {
    for (let i = 0; i < times; i++) {
        array.push(value)
    }
}

const cart = []

addToCart.addEventListener('click', () => {
    pushMultipleTimes(cart, 125.00, numOfItems)
    console.log(cart)
})
