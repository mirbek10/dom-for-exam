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



// Получаем элементыconst 
popupOverlay = document.getElementById('popupContainer'); // Само всплывающее окно
const openPopupButton = document.querySelector('.showPopup'); // Кнопка "Открыть окно"
const closePopupButton = document.querySelector('.popup-close'); // Кнопка-крестик для закрытия окна

// Открытие окна
openPopupButton.addEventListener('click', function () {  popupOverlay.style.display = 'flex'; // Делаем окно видимым
});
// Закрытие окна при клике на крестик
closePopupButton.addEventListener('click', function () {
  popupOverlay.style.display = 'none'; // Скрываем окно
  });
// Закрытие окна при клике на затемнённый фон
window.addEventListener('click', function (event) {  if (event.target === popupOverlay) {
    popupOverlay.style.display = 'none'; // Закрываем окно  
    }
});
// 222222222222222222
popupOverla = document.getElementById('popupContaine'); // Само всплывающее окно
const openPopupButto = document.querySelector('.btn1231'); // Кнопка "Открыть окно"
const closePopupButto = document.querySelector('#popup-clos'); // Кнопка-крестик для закрытия окна

openPopupButto.addEventListener('click', function () {  popupOverla.style.display = 'flex'; // Делаем окно видимым
    popupOverlay.style.display = 'none';
});
// Закрытие окна при клике на крестик
closePopupButto.addEventListener('click', function () {
  popupOverla.style.display = 'none'; // Скрываем окно
  });

  // Закрытие окна при клике на затемнённый фон
window.addEventListener('click', function (event) {  if (event.target === popupOverlay) {
    popupOverla.style.display = 'none'; // Закрываем окно  
    }})
    // 333333333333333333333
popupOverla = document.getElementById('popupContain'); // Само всплывающее окно
const openPopupButt = document.querySelector('.button-click'); // Кнопка "Открыть окно"
const closePopupButt = document.querySelector('#popup-clo'); // Кнопка-крестик для закрытия окна

openPopupButt.addEventListener('click', function () {  
    popupOverla.style.display = 'flex'; // Делаем окно видимым
    popupOverla.style.display = 'none';
});
// Закрытие окна при клике на крестик
closePopupButt.addEventListener('click', function () {
  popupOverla.style.display = 'none'; // Скрываем окно
  });

  // Закрытие окна при клике на затемнённый фон
window.addEventListener('click', function (event) {  
    if (event.target === popupOverlay) {
    popupOverla.style.display = 'none'; // Закрываем окно  
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

                // Собираем данные карточки
                const cardData = { image, name, price };
                
                // Проверяем, есть ли карточка уже в выбранных
                if (!selection.some(item => item.name === name)) {
                    selection.push(cardData);
                }
                
                alert(`Добавлено: ${name}`);
            });
        });

        // Обработка кнопки "Посмотреть выбранное"
        const viewSelectionButton = document.getElementById('view-selection');
        viewSelectionButton.addEventListener('click', () => {
            // Сохраняем выбранные карточки в localStorage
            localStorage.setItem('selectedCards', JSON.stringify(selection));

            // Перенаправляем на страницу "Выбранное"
            window.location.href = './pages/selected/selected.html';
        });
    });
    