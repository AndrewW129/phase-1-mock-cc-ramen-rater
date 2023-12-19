// write your code here
const url = 'http://localhost:3000/ramens'
const firstRamen = 'http://localhost:3000/ramens/1'
const ramenMenu = document.querySelector('#ramen-menu')

fetch(firstRamen)
.then(res => res.json())
.then(firstRamen => renderRamen(firstRamen))

function renderRamen(ramen) {

    const ramenDetails = document.querySelector('#ramen-detail')
    
    const ramenName = document.querySelector('.name')
    const ramenImg = document.querySelector('.detail-image')
    const ramenRestaurant = document.querySelector('.restaurant')
    const ramenRating = document.querySelector('#rating-display')
    const ramenComment = document.querySelector('#comment-display')

    ramenName.textContent = ramen.name
    ramenImg.src = ramen.image
    ramenRestaurant.textContent = ramen.restaurant
    ramenRating.textContent = ramen.rating
    ramenComment.textContent = ramen.comment
    
    ramenDetails.append(ramenName, ramenRestaurant, ramenRating, ramenComment)
}

fetch(url)
.then(res => res.json())
.then(ramenArr => renderRamenArr(ramenArr))

function renderRamenArr(ramenArr) {
    console.log(ramenArr)
    const ramenMenu = document.querySelector('#ramen-menu')

    ramenArr.forEach(ramen => {

        const img = document.createElement('img')

        img.src = ramen.image
        
        img.addEventListener('click', () => renderRamen(ramen))

        ramenMenu.append(img)
    }) 
}

const form = document.querySelector('#new-ramen')

function addNewRamen() {
    e.preventDefalt()

    const ramenName = document.querySelector('#new-name')
    const ramenRestaurant = document.querySelector('#new-restaurant')
    const ramenImg = document.querySelector('#new-image')
    const ramenRating = document.querySelector('#new-rating')
    const ramenComment = document.querySelector('#new-comment')
    debugger
    ramenName.textContent 
    ramenRestaurant.textContent
    ramenImg.src
    ramenRating.textContent
    ramenComment.textContent

    console.log(ramenName)
}

form.addEventListener('submit', (e) => addNewRamen(e))


