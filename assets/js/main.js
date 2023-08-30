/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrolHeader(){
    const header =document.getElementById('header');
    if(this.scrollY >=50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrolHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
   spaceBetween:32, 
    grabCursor:true, 
     centeredSlides:true, 
    slidesPerView:3,
    loop:true,
    /*  autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },  */
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections =document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop -58,
          sectionId = current.getAttribute('id')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId+ ']').classList.add('active-link')
    }else {
      document.querySelector('.nav__menu a[href*=' + sectionId+ ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll',scrollActive)
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme =localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', ()=>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

/* ==================== GALERIA ================= */
let list = document.querySelectorAll('.list')
let itemBox = document.querySelectorAll('.itemBox')

for(let i=0; i<list.length; i++){
  list[i].addEventListener('click', function(){
    for (let j=0; j<list.length; j++){
      list[j].classList.remove('active')
    }
    this.classList.add('active')
    let dataFilter = this.getAttribute('data-filter')

    for(let k=0; k<itemBox.length; k++){
      itemBox[k].classList.remove('active')
      itemBox[k].classList.add('hide')

      if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "todos"){
        itemBox[k].classList.remove('hide')
        itemBox[k].classList.add('active')
      }
    }
  })
}

/* ======================= PLAY VIDEO ==================== */
/* var video = document.querySelectorAll('video') */
/* var video = document.querySelectorAll('video')
var images = document.querySelectorAll('.imagen img')

 video.forEach(play => play.addEventListener('click', () =>{
  play.classList.toggle('active')

  if(play.paused){
    play.play()
  }else{
    play.pause()
    play.currentTime = 0
  }
})) 
images.forEach(image => {
  image.addEventListener('click', () => {
      image.classList.toggle('active'); 
  });
});
 */
/* var video = document.querySelectorAll('video');
var images = document.querySelectorAll('.imagen img');

video.forEach(play => play.addEventListener('click', () => {
    // Cerrar todos los elementos ampliados
    video.forEach(v => v.classList.remove('active'));
    images.forEach(img => img.classList.remove('active'));

    play.classList.add('active');

    if (play.paused) {
        play.play();
    } else {
        play.pause();
        play.currentTime = 0;
    }
}));

images.forEach(image => {
    image.addEventListener('click', () => {
        // Cerrar todos los elementos ampliados
        video.forEach(v => v.classList.remove('active'));
        images.forEach(img => img.classList.remove('active'));

        image.classList.add('active');
    });
}); */


var video = document.querySelectorAll('video');
var images = document.querySelectorAll('.imagen img');

// Función para cerrar elementos ampliados
function closeExpandedElements() {
    video.forEach(v => v.classList.remove('active'));
    images.forEach(img => img.classList.remove('active'));
}

video.forEach(play => play.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el clic se propague al documento
    closeExpandedElements(); // Cierra elementos previamente ampliados
    
    play.classList.add('active');

    if (play.paused) {
        play.play();
    } else {
        play.pause();
        play.currentTime = 0;
    }
}));

images.forEach(image => {
    image.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague al documento
        closeExpandedElements(); // Cierra elementos previamente ampliados
        
        image.classList.add('active');
    });
});

// Event listener para cerrar elementos al hacer clic en cualquier parte del documento
document.addEventListener('click', () => {
    closeExpandedElements();
});




