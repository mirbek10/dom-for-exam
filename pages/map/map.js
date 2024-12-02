document.addEventListener("DOMContentLoaded", () => {
    // Инициализация карты
    const map = L.map('map').setView([55.751244, 37.618423], 10); // Центр: Москва

    // Добавление слоя карты
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Пример объектов
    

    // Добавление маркеров
    const markers = [];
    objects.forEach(obj => {
        const marker = L.marker(obj.coords).addTo(map)
            .bindPopup(`<b>${obj.name}</b><br>Цена: ${obj.price} ₽<br>Площадь: ${obj.area} м²`);
        markers.push({ marker, data: obj });
    });

    // Фильтр объектов
    document.getElementById("filterButton").addEventListener("click", () => {
        const region = document.getElementById("region").value;
        const maxPrice = parseInt(document.getElementById("price").value) || Infinity;
        const minArea = parseInt(document.getElementById("area").value) || 0;

        markers.forEach(({ marker, data }) => {
            if (
                (region === "all" || data.region === region) &&
                data.price <= maxPrice &&
                data.area >= minArea
            ) {
                marker.addTo(map);
            } else {
                map.removeLayer(marker);
            }
        });
    });
});