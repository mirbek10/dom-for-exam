document.addEventListener("DOMContentLoaded", () => {
    const user = JSON.parse(localStorage.getItem("currendUser"));
    if (!user) {
      window.location.href = "../../index.html";
    } else {
      document.getElementById("userName").textContent = user.name;
      document.getElementById('userAbout').textContent = user.about;
      document.getElementById('userEmail').textContent = user.email;
    }
  
    const logoutBtn = document.querySelector("#logoutBtn");
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("currendUser");
      window.location.href = "../../index.html";
    });
  });


  // Обновление статистики
let projects = 2020; 
let followers = 1020; // Примерное количество подписчиков

const projectsEl = document.getElementById("projects");
const followersEl = document.getElementById("followers");

// Эффект анимации увеличения чисел
function animateValue(element, start, end, duration) {
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    }

    window.requestAnimationFrame(step);
}

animateValue(projectsEl, 0, projects, 2000);
animateValue(followersEl, 0, followers, 2000);


// 11111111111111111111111111111111111111111
// Имитация изменения статуса
document.addEventListener("DOMContentLoaded", () => {
    const imageUpload = document.getElementById("imageUpload");
    const profileImage = document.getElementById("profileImage");
    const changePhotoButton = document.getElementById("changePhotoButton");

    // Проверяем, есть ли сохраненное изображение в localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        profileImage.src = savedImage;
    }

    // Открыть выбор файла при нажатии на кнопку
    changePhotoButton.addEventListener("click", () => {
        imageUpload.click();
    });

    // Обработка загруженного файла
    imageUpload.addEventListener("change", () => {
        const file = imageUpload.files[0];

        if (file) {
            const reader = new FileReader();

            // Когда файл загружен, обновляем изображение
            reader.onload = (e) => {
                const imageData = e.target.result;
                profileImage.src = imageData;

                // Сохраняем изображение в localStorage
                localStorage.setItem("profileImage", imageData);
            };

            reader.readAsDataURL(file); // Считываем содержимое файла как Data URL
        }
    });
});

