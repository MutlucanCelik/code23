const burger = document.querySelector(".burger");
const mobilMenu = document.querySelector(".mobil-menu");



burger.addEventListener("click",function(){
    this.classList.toggle("close")
    mobilMenu.classList.toggle("side-open")
   console.log(mobilMenu)
})

/*larvel projesinde aktif et şuan her sayfada farklı header oduğundan çalışmaz 
var headerLinks = document.querySelectorAll(".header__link");

    headerLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
          e.preventDefault();
            headerLinks.forEach(function(link) {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
*/

//education swiper
var swiper = new Swiper(".educations__swiper", {
    slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
// Ekran genişliği 768 pikselden küçük olduğunda 2 slayt göster
  1024: {
  slidesPerView: 3,
  },
  576: {
  slidesPerView: 2,
  },
 }
 
});

//başarı hikayesi slider ayarları
var swiper = new Swiper(".success-story-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//aos animasyon ayarları
AOS.init({

    once: true
});


