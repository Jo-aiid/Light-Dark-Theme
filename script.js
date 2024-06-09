


const btn=document.querySelector('.theme-toggle-btn')

btn.addEventListener('click',()=>{

const sunMoonContainer=document.querySelector('.sun-moon-container')
const currentRotation =parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotate'))
    document.querySelector('body').classList.toggle('dark')
   
    sunMoonContainer.style.setProperty('--rotate',currentRotation+180)

})
