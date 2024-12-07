const photos = document.querySelector("#photos");
async function fetchPhotos() {
  try {
    const data= [{
        Img:"../../img/qq4.svg",
        title:"Новая сосновка",
        img1:"../../img/icon_bed.svg",
        info1:"5 спальных мест",
        img2:"../../img/qq13.svg",
        info2:"Баня",
        img3:"../../img/qq14.svg",
        info3:"Бассейн",
        img4:"../../img/qq15.svg",
        info4:"Развлечения",

},
{
  Img:"../../img/qq5.png",
  title:"Нагорный ВИП",
  img1:"../../img/icon_bed.svg",
  info1:"5 спальных мест",
  img2:"../../img/qq13.svg",
  info2:"Баня",
  img3:"../../img/qq14.svg",
  info3:"Бассейн",
  img4:"../../img/qq15.svg",
  info4:"Развлечения",

},
{
  Img:"../../img/qq6.svg",
  title:"Салмачи 4 Большой",
  img1:"../../img/icon_bed.svg",
  info1:"5 спальных мест",
  img2:"../../img/qq13.svg",
  info2:"Баня",
  img3:"../../img/qq14.svg",
  info3:"Бассейн",
  img4:"../../img/qq15.svg",
  info4:"Развлечения",

},
{
  Img:"../../img/qq7.svg",
  title:"Константиновка 5",
  img1:"../../img/icon_bed.svg",
  info1:"5 спальных мест",
  img2:"../../img/qq13.svg",
  info2:"Баня",
  img3:"../../img/qq14.svg",
  info3:"Бассейн",
  img4:"../../img/qq15.svg",
  info4:"Развлечения",

},
{
  Img:"../../img/qq8.svg",
  title:"Введенская Слобода 1",
  img1:"../../img/icon_bed.svg",
  info1:"5 спальных мест",
  img2:"../../img/qq13.svg",
  info2:"Баня",
  img3:"../../img/qq14.svg",
  info3:"Бассейн",
  img4:"../../img/qq15.svg",
  info4:"Развлечения",

},

{
  Img:"../../img/qq9.svg",
  title:"Казанка 1 (дома на воде)",
  img1:"../../img/icon_bed.svg",
  info1:"5 спальных мест",
  img2:"../../img/qq13.svg",
  info2:"Баня",
  img3:"../../img/qq14.svg",
  info3:"Бассейн",
  img4:"../../img/qq15.svg",
  info4:"Развлечения",

},
{
  Img:"../../img/qq10.svg",
  title:"Ярославско-Дмитровское шоссе 4",
  img1:"../../img/icon_bed.svg",
  info1:"5 спальных мест",
  img2:"../../img/qq13.svg",
  info2:"Баня",
  img3:"../../img/qq14.svg",
  info3:"Бассейн",
  img4:"../../img/qq15.svg",
  info4:"Развлечения",

},
{
  Img:"../../img/qq11.svg",
  title:"Горки-Сухаревские 1",
  img1:"../../img/icon_bed.svg",
  info1:"5 спальных мест",
  img2:"../../img/qq13.svg",
  info2:"Баня",
  img3:"../../img/qq14.svg",
  info3:"Бассейн",
  img4:"../../img/qq15.svg",
  info4:"Развлечения",

},
{
  Img:"../../img/qq12.png",
  title:"Салмачи 2",
  img1:"../../img/icon_bed.svg",
  info1:"5 спальных мест",
  img2:"../../img/qq13.svg",
  info2:"Баня",
  img3:"../../img/qq14.svg",
  info3:"Бассейн",
  img4:"../../img/qq15.svg",
  info4:"Развлечения",

},








]

    data.splice(0, 21).forEach((photo) => {
      const photoElement = document.createElement("div");
      photoElement.innerHTML = `
            <div class='h-[300px] shadow-2xl flex w-[750px] mt-[20px]'>
                <img src=${photo.Img} class='w-[300px]'>
                <div class='ml-[40px]'>
                
                <p class='text-xl font-bold'>${photo.title}</p>
                <div class='flex'>
                <div class='flex'>
                    <div class=''>
                <div class='flex mt-[20px] ml-[]'>
                
                <img src=${photo.img1}>
                <h1 class='ml-[10px]'>${photo.info1}</h1>
                </div>
                <div class='flex mt-[7px]'>
                
                <img src=${photo.img2}>
                <h1 class="ml-[10px]">${photo.info2}</h1>
                </div>
                <div class='flex mt-[7px]'>
                
                <img src=${photo.img3}>
                <h1 class="ml-[10px]">${photo.info3}</h1>
                </div>
                <div class='flex mt-[7px]'>
                
                <img src=${photo.img4}>
                <h1 class='ml-[10px]'>${photo.info4}</h1>
                </div>
                    </div>
                <div class='w-[1px] h-[140px] bg-[#C0C2D7] ml-[34px] mt-[20px]'></div>
                </div>
                            <div class='ml-[30px]'>
                        <div class='flex gap-[10px]'>
                    <div>
                    <h1 class='text-[14px] text-[#727488]'>Будни</h1>
                    <h1 class='text-[]'>от 8000 ₽</h1>
                    </div>
                    <div>
                    <h1 class='text-[14px] text-[#727488]'>Пятница</h1>
                    <h1 class='text-[]'>от 10 000 ₽</h1>
                    </div>
                        </div>
                        <div class='flex mt-[10px] gap-[10px]'>
                    <div>
                    <h1 class='text-[14px] text-[#727488]'>Суббота</h1>
                    <h1 class='text-[]'>от 12 000 ₽</h1>
                    </div>
                    <div>
                    <h1 class='text-[14px] text-[#727488]'>Воскресенье</h1>
                    <h1 class='text-[]'>от 12 000 ₽</h1>
                    </div>
                        </div>
                            </div>
                    
                </div>

                <button id='add-to-cart' class='border mt-[40px] py-[5px] w-full font-bold hover:bg-[#F4683F] hover:text-[#fff] border-[0.1px] border-[#F4683F] rounded-[5px] text-[#F4683F]'>добавить в избранные</button>
            </div>
        `;

      const button = photoElement.querySelector("#add-to-cart");
      button.addEventListener("click", () => addToCard(photo));
      photos.appendChild(photoElement);
    });
  } catch (error) {
    console.error(error.message);
  }
}

function addToCard(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  setTimeout(() => {
    ;
  }, 1000);
}

fetchPhotos();