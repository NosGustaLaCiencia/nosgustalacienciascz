document.addEventListener('DOMContentLoaded', function() {
    const sliderContainers = document.querySelectorAll('.slider-container');
    const slideWidths = [];

    sliderContainers.forEach(function(sliderContainer) {
      const slideWidth = sliderContainer.clientWidth;
      slideWidths.push(slideWidth);

      let currentPosition = 0;

      setInterval(function() {
        currentPosition -= slideWidth;
        if (currentPosition <= -slideWidth * 2) {
          currentPosition = 0;
          sliderContainer.style.transition = 'none';
          sliderContainer.style.transform = `translateX(${currentPosition}px)`;
          void sliderContainer.offsetWidth; // Reinicia el reflow del navegador
          sliderContainer.style.transition = 'transform 0.5s ease';
        } else {
          sliderContainer.style.transform = `translateX(${currentPosition}px)`;
        }
      }, 3000); // Cambia la imagen cada 3 segundos (ajusta el valor según tus necesidades)
    });

    window.addEventListener('resize', function() {
      slideWidths.forEach(function(slideWidth, index) {
        const sliderContainer = sliderContainers[index];
        const currentPosition = -slideWidth * Math.ceil(-sliderContainer.offsetLeft / slideWidth);
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
      });
    });
  });

  



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