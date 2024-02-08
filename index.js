const cartIcon = document.querySelector('#cart-icon')
const cartWindow = document.querySelector('#cart-window')
const minus = document.querySelector('#minus-icon')
const plus = document.querySelector('#plus-icon')
const counter = document.querySelector('#counter-value')
const addToCart = document.querySelector('#place-in-cart-button')
const emptyCart = document.querySelector('#empty-cart')
const occupiedCart = document.querySelector('#occupied-cart')
const priceMultiplier = document.querySelector('#num-of-items')
const totalPrice = document.querySelector('#total-price')
const itemPrice = 125
const bubbleNumber = document.querySelector('#bubble-number')
const countBubble = document.querySelector('#count-bubble')

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
    if(numOfItems < 1) {
        //do nothing
    } else {
    pushMultipleTimes(cart, 125.00, numOfItems)
    console.log(cart)
    emptyCart.classList.add('hidden')
    occupiedCart.classList.remove('hidden')
    priceMultiplier.textContent = cart.length
    totalPrice.textContent = `$${cart.length * itemPrice}.00`
    countBubble.classList.remove('hidden')
    bubbleNumber.textContent = cart.length
    }
})

//Empty cart
const deleteCart = document.querySelector('#delete')

deleteCart.addEventListener('click', () => {
    cart.length = 0
    priceMultiplier.textContent = cart.length
    totalPrice.textContent = `$${cart.length * itemPrice}.00`
    occupiedCart.classList.add('hidden')
    emptyCart.classList.remove('hidden')
    bubbleNumber.textContent = cart.length
    countBubble.classList.add('hidden')
})

//Image feature

const productThumbnails = document.querySelectorAll('.thumbnail')
const focusedImage = document.querySelector('#focused-image')
const srcArray = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg']
const thumbnailSrcArray = ['http://127.0.0.1:5500/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg', 'http://127.0.0.1:5500/ecommerce-product-page-main/images/image-product-2-thumbnail.jpg', 'http://127.0.0.1:5500/ecommerce-product-page-main/images/image-product-3-thumbnail.jpg', 'http://127.0.0.1:5500/ecommerce-product-page-main/images/image-product-4-thumbnail.jpg']


let selectFeature = (active) => {
    if(active.src === thumbnailSrcArray[0]) {
        focusedImage.src = srcArray[0]
    } else if (active.src === thumbnailSrcArray[1]) {
        focusedImage.src = srcArray[1]
    } else if (active.src === thumbnailSrcArray[2]) {
        focusedImage.src = srcArray[2]
    } else {
        focusedImage.src = srcArray[3]
    }
}

productThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event => {
        //console.log(event.currentTarget)
        let current = document.querySelector('.thumbnail.active')
        current?.classList.remove('active')
        event.currentTarget.classList.add('active')
        current = document.querySelector('.thumbnail.active') //repeated to grab source from img that is currently active
        //console.log(current.src)
        selectFeature(current)
    })
})

//Zoom functions

const featuredImage = document.querySelector('#focused-image')
const zoomOverlay = document.querySelector('#zoom-overlay')

focusedImage.addEventListener('click', () => {
    zoomOverlay.classList.remove('hidden')
})
