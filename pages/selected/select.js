document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('selected-cards');
    const selectedCards = JSON.parse(localStorage.getItem('selectedCards')) || [];

    if (selectedCards.length === 0) {
        container.innerHTML = '<p>Нет выбранных карточек.</p>';
        return;
    }

    selectedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <img src="http://127.0.0.1:5501/img/img.svg alt="${card.name}">
            <div>
                <h3>${card.name}</h3>
                <p>${card.price}</p>
            </div>
        `;
        container.appendChild(cardElement);
    });
});