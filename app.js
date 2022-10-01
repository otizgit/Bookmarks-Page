const firstQuest = document.querySelector('.first-quest')
const secondQuest = document.querySelector('.second-quest')
const thirdQuest = document.querySelector('.third-quest')
const fourthQuest = document.querySelector('.fourth-quest')
const firstAns = document.querySelector('.first-ans')
const secondAns = document.querySelector('.second-ans')
const thirdAns = document.querySelector('.third-ans')
const fourthAns = document.querySelector('.fourth-ans')
const simple = document.querySelector('.simple')
const searching = document.querySelector('.searching')
const sharing = document.querySelector('.sharing')
const infoOne = document.querySelector('.info-one')
const infoTwo = document.querySelector('.info-two')
const infoThree = document.querySelector('.info-three')
const moreInfo = document.querySelector('.more-info')
const fT = document.querySelector('.features-toggle')
const input = document.querySelector('.input')
const response = document.querySelector('.response')
const contactBtn = document.querySelector('.contact-btn')
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
const inputDiv = document.querySelector('.input-div')
const hamburger = document.querySelector('.hamburger')
const topNav = document.querySelector('.top-nav')
const links = document.querySelectorAll('.top-nav ul li')
const login = document.querySelector('.login')
const socials = document.querySelector('.socials-top')

hamburger.addEventListener('click', function(){
    topNav.classList.toggle('display-nav')
    links.forEach(function(link, index){
        if (link.style.animation) {
            link.style.animation = ''
        }
        else {
            link.style.animation = `slide 0.3s ease forwards ${index / 9 + 0.2}s`
        }
    })
    if(login.style.animation){
        login.style.animation = ''
    }
    else {
        login.style.animation =`slide 0.3s ease forwards ${0.6}s`
    }
    if(socials.style.animation){
        socials.style.animation = ''
    }
    else {
        socials.style.animation =`slide 0.3s ease forwards ${0.8}s`
    }
})

contactBtn.addEventListener('click', function(){
    if (input.value === ''){
        response.classList.add('response-display')
        response.innerHTML = 'You cannot enter an empty field'
        inputDiv.style.padding = "2px 2px 0px"
    }
    else if (input.value.match(pattern)){
        response.classList.add('response-display')
        response.innerHTML = 'Thanks for contacting us!'
        inputDiv.style.padding = "2px 2px 0px"
    }
    else {
        response.classList.add('response-display')
        response.innerHTML = "Whoops, make sure it's an email"
        inputDiv.style.padding = "2px 2px 0px"
    }
})

firstQuest.addEventListener('click', function(){
    firstAns.classList.toggle('show-answer')
})
secondQuest.addEventListener('click', function(){
    secondAns.classList.toggle('show-answer')
})
thirdQuest.addEventListener('click', function(){
    thirdAns.classList.toggle('show-answer')
})
fourthQuest.addEventListener('click', function(){
    fourthAns.classList.toggle('show-answer')
})

simple.addEventListener('click', function(){
    simple.classList.remove('remove')
    moreInfo.innerHTML = infoOne.innerHTML
    simple.classList.remove('color-remove')
})

searching.addEventListener('click', function(){
    searching.classList.add('move')
    moreInfo.innerHTML = infoTwo.innerHTML
    searching.classList.add('color-add')
})

sharing.addEventListener('click', function(){
    sharing.classList.add('move')
    moreInfo.innerHTML = infoThree.innerHTML
    sharing.classList.add('color-add')
})

fT.onclick = function(e){
    if (e.target.id !== 'simple'){
        simple.classList.add('remove')
        simple.classList.add('color-remove')
    }
    if (e.target.id !== 'searching'){
        searching.classList.remove('move')
        searching.classList.remove('color-add')
    }
    if (e.target.id !== 'sharing'){
        sharing.classList.remove('move')
        sharing.classList.remove('color-add')
    }
}
