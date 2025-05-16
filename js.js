// js.js

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const images = slider.querySelectorAll("img");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let currentIndex = 0;

  function updateSlider() {
    const slideWidth = slider.clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function goToNextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }

  function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  }

  nextBtn.addEventListener("click", () => {
    goToNextSlide();
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    goToPrevSlide();
    resetAutoSlide();
  });

  window.addEventListener("resize", updateSlider);

  // Cambio automático cada 10 segundos
  let autoSlide = setInterval(goToNextSlide, 10000);

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(goToNextSlide, 10000);
  }

  // Ajustar posición inicial
  updateSlider();
});


document.addEventListener('DOMContentLoaded', () => {
  const startDate = new Date('2025-03-03T14:54:00');
  const diasEl = document.getElementById('dias');
  const horasEl = document.getElementById('horas');
  const minutosEl = document.getElementById('minutos');
  const segundosEl = document.getElementById('segundos');

  function actualizarContador() {
    const ahora = new Date();
    let diff = ahora - startDate;

    if (diff < 0) diff = 0;

    const segundos = Math.floor((diff / 1000) % 60);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

    diasEl.textContent = dias;
    horasEl.textContent = horas;
    minutosEl.textContent = minutos;
    segundosEl.textContent = segundos;
  }

  actualizarContador();
  setInterval(actualizarContador, 1000);
});
