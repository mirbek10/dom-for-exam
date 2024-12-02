document.getElementById("calculateButton").addEventListener("click", function () {
    const area = parseFloat(document.getElementById("area").value);
    const material = document.getElementById("material").value;
    const utilities = document.getElementById("utilities").value;

    if (!area || area <= 0) {
        alert("Введите корректную площадь!");
        return;
    }

    // Базовые цены за м² для разных материалов
    const materialPrices = {
        wood: 5000,
        brick: 7000,
        modular: 6000,
    };

    // Коэффициенты для коммуникаций
    const utilityMultipliers = {
        basic: 1.1,
        standard: 1.3,
        full: 1.5,
    };

    const baseCost = area * materialPrices[material];
    const totalCost = baseCost * utilityMultipliers[utilities];

    document.getElementById("result").innerHTML = `
        <p>Примерная стоимость строительства: <strong>${totalCost.toLocaleString()} ₽</strong></p>
    `;
});
