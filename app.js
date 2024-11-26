const color = document.querySelector('.button-fon')
const container2 = document.querySelector('.tipo-login')
// const consol = document.querySelector('.dunor') 
color.onclick = () => {
    document.body.style.backgroundColor = '#1c1c1c'
    document.body.style.color = 'white'
    container2.style.backgroundColor = '#1c1c1c'
    container2.style.color = 'white'
    consol.style.backgroundColor = '#1c1c1c'
    consol.style.Color = 'white'
}
// Белый цветь
const color1 = document.querySelector('.white')
const container22 = document.querySelector('.tipo-login')
const consol2 = document.getElementsByClassName('contayner')[0] 

color1.onclick = () =>{
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    container22.style.backgroundColor = 'white'
    container22.style.color = 'black'
    consol2.style.backgroundColor = 'white'
    consol2.style.Color = 'black'
}