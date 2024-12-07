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


let projects = 100;
let followers = 1020; 

const projectsEl = document.getElementById("projects");
const followersEl = document.getElementById("followers");

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

document.addEventListener("DOMContentLoaded", () => {
    const imageUpload = document.getElementById("imageUpload");
    const profileImage = document.getElementById("profileImage");
    const changePhotoButton = document.getElementById("changePhotoButton");

    //  localStorage
    const savedImage = localStorage.getItem("profileImage");
    if (savedImage) {
        profileImage.src = savedImage;
    }

    
    changePhotoButton.addEventListener("click", () => {
        imageUpload.click();
    });

   
    imageUpload.addEventListener("change", () => {
        const file = imageUpload.files[0];

        if (file) {
            const reader = new FileReader();

            
            reader.onload = (e) => {
                const imageData = e.target.result;
                profileImage.src = imageData;

             
                localStorage.setItem("profileImage", imageData);
            };

            reader.readAsDataURL(file); 
        }
    });
});

