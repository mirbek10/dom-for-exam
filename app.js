const color = document.querySelector('.button-fon')
const container2 = document.querySelector('.tipo-login')
// const consol = document.querySelector('.dunor') 
const popupbox = document.querySelector('.popup-box')
const popupbo = document.querySelector('.popup-bo')
color.onclick = () => {
    document.body.style.backgroundColor = '#1c1c1c'
    document.body.style.color = 'white'
    container2.style.backgroundColor = '#1c1c1c'
    container2.style.color = 'white'
    consol.style.backgroundColor = '#1c1c1c'
    consol.style.Color = 'white'
    popupbox.style.backgroundColor = 'black'
    popupbo.style.backgroundColor = 'black'
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



popupOverlay = document.getElementById('popupContainer');
const openPopupButton = document.querySelector('.showPopup'); 
const closePopupButton = document.querySelector('.popup-close');


openPopupButton.addEventListener('click', function () {  popupOverlay.style.display = 'flex'; // Делаем окно видимым
});

closePopupButton.addEventListener('click', function () {
  popupOverlay.style.display = 'none'; 
  });
window.addEventListener('click', function (event) {  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none'; 
    }
});
// 222222222222222222
popupOverla = document.getElementById('popupContaine'); 
const openPopupButto = document.querySelector('.btn1231'); 
const closePopupButto = document.querySelector('#popup-clos'); 

openPopupButto.addEventListener('click', function () {  popupOverla.style.display = 'flex'; 
    popupOverlay.style.display = 'none';
});

closePopupButto.addEventListener('click', function () {
  popupOverla.style.display = 'none'; 
  });

  
window.addEventListener('click', function (event) {  if (event.target === popupOverla) {
    popupOverla.style.display = 'none'; 
    }})
    // 333333333333333333333
const popupOverl = document.querySelector('.popup-overl'); 
const openPopupButt = document.querySelector('.button-click'); 
const closePopupButt = document.querySelector('#popup-clo');

openPopupButt.addEventListener('click', function () {  
    popupOverl.style.display = 'flex'; 
    // popupOverl.style.display = 'none';
});


closePopupButt.addEventListener('click', function () {
  popupOverl.style.display = 'none'; 
  });


window.addEventListener('click', function (event) {  
    if (event.target === popupOverl) {
    popupOverl.style.display = 'none';   
    }})
    // 3333333333333333333333333
    document.addEventListener('DOMContentLoaded', () => {
        const selection = [];
        const buttons = document.querySelectorAll('.floren, .florenui'); // Находим все кнопки "Подробнее"

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const card = button.closest('.cardfe, .cardfeui');
                const image = card.querySelector('img.tenerfe, img.tenerfeui').getAttribute('src');
                const name = card.querySelector('p.imerfe, p.imerfeui').textContent.trim();
                const price = card.querySelector('.fladettr, .fladettrui').textContent.trim();

                
                const cardData = { image, name, price };
                
                
                if (!selection.some(item => item.name === name)) {
                    selection.push(cardData);
                }
                
                alert(`Добавлено: ${name}`);
            });
        });

        
        const viewSelectionButton = document.getElementById('view-selection');
        viewSelectionButton.addEventListener('click', () => {
            
            localStorage.setItem('selectedCards', JSON.stringify(selection));

            
            window.location.href = './pages/selected/selected.html';
        });
    });
    

     // Подробнее
     const toggleButtons = document.querySelectorAll('.toggle-btn');

     toggleButtons.forEach(button => {
         button.addEventListener('click', () => {
             const additionalInfo = button.nextElementSibling;
 
             if (additionalInfo.style.display === "none") {
                 additionalInfo.style.display = "block";
                 button.style.display = "none"; 
             }
         });
     });
 
     // Скрыть
     const hideButtons = document.querySelectorAll('.hide-btn');
 
     hideButtons.forEach(button => {
         button.addEventListener('click', () => {
             const additionalInfo = button.parentElement;
             const toggleButton = additionalInfo.previousElementSibling;
 
             additionalInfo.style.display = "none"; 
             toggleButton.style.display = "inline-block"; 
         });
     });
 