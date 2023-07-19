'use strict';



/**
 * element toggle function
 */

const toggleElem = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navTogglers.length; i++) {
  navTogglers[i].addEventListener("click", function () {
    toggleElem(navbar);
    toggleElem(overlay);
  });
}

/**
 * carrusel automático
 */

// window.addEventListener('DOMContentLoaded', function() {
//   const carousel = document.querySelector('.carousel');
//   let position = 0;
//   const interval = 3000; // Cambia la velocidad del carrusel aquí (en milisegundos)
  
//   function slide() {
//     position -= 25; // Ajusta el valor del desplazamiento según el tamaño de las cartillas de presentación
//     carousel.style.transform = `translateX(${position}%)`;
//     if (position <= -75) {
//       position = 0;
//       carousel.style.transform = `translateX(${position}%)`;
//     }
//   }
  
//   setInterval(slide, interval);
// });

document.addEventListener('DOMContentLoaded', function() {
  const carouselContainer = document.querySelector('.carousel-container');
  const carouselWrapper = document.querySelector('.carousel-wrapper0');
  const partners = carouselWrapper.querySelectorAll('.content-partners');
  const prevBtn = document.querySelector('.prev-btn0');
  const nextBtn = document.querySelector('.next-btn0');

  let currentPosition = 0;
  let slideWidth = partners[0].offsetWidth;
  let interval;

  function startCarousel() {
    interval = setInterval(moveNext, 3000); // Cambia la imagen cada 3 segundos (ajusta el valor según tus necesidades)
  }

  function moveNext() {
    currentPosition -= slideWidth;
    if (currentPosition <= -(partners.length - 1) * slideWidth) {
      resetPosition();
    } else {
      translateCarousel();
    }
  }

  function movePrev() {
    currentPosition += slideWidth;
    if (currentPosition > 0) {
      currentPosition = -(partners.length - 1) * slideWidth;
    }
    translateCarousel();
  }

  function resetPosition() {
    // Reinicia la posición al inicio sin interrupción
    carouselWrapper.style.transition = 'none';
    currentPosition = 0;

    // Realiza el cambio de posición en el siguiente frame
    requestAnimationFrame(function() {
      translateCarousel();
      carouselWrapper.style.transition = 'transform 0.3s ease';
    });
  }

  function translateCarousel() {
    carouselWrapper.style.transform = `translateX(${currentPosition}px)`;
  }

  startCarousel();

  prevBtn.addEventListener('click', movePrev);
  nextBtn.addEventListener('click', moveNext);
});



/**
 * header sticky & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    header.classList.add("header-anim");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
    header.classList.remove("header-anim");
  }
});



/**
 * search box toggle
 */

const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const searchBox = document.querySelector("[data-search-box]");

for (let i = 0; i < searchTogglers.length; i++) {
  searchTogglers[i].addEventListener("click", function () {
    toggleElem(searchBox);
  });
}



/**
 * whishlist button toggle
 */

const whishlistBtns = document.querySelectorAll("[data-whish-btn]");

for (let i = 0; i < whishlistBtns.length; i++) {
  whishlistBtns[i].addEventListener("click", function () {
    toggleElem(this);
  });
}