
  document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container2');
    const slideWidth = sliderContainer.clientWidth;
    let currentPosition = 0;

    setInterval(function() {
      currentPosition -= slideWidth;
      if (currentPosition < -slideWidth * 2) {
        currentPosition = 0;
      }
      sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    }, 1000); // Cambia la imagen cada 3 segundos (ajusta el valor según tus necesidades)
  });


  document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container3');
    const slideWidth = sliderContainer.clientWidth;
    let currentPosition = 0;

    setInterval(function() {
      currentPosition -= slideWidth;
      if (currentPosition < -slideWidth * 2) {
        currentPosition = 0;
      }
      sliderContainer.style.transform = `translateX(${currentPosition}px)`;
    }, 1000); // Cambia la imagen cada 3 segundos (ajusta el valor según tus necesidades)
  });