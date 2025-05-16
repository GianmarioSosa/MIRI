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

// Imagen tipo slider para Miri
const imagenesMiri = [
  "./2.jpg",
  "./3.jpg",
];

let indexMiri = 0;
const sliderMiri = document.getElementById("sliderMiri");

sliderMiri.addEventListener("click", (e) => {
  e.stopPropagation(); // evita que abra modal en clic normal
  indexMiri = (indexMiri + 1) % imagenesMiri.length;
  const nuevaImagen = imagenesMiri[indexMiri];
  sliderMiri.src = nuevaImagen;
  sliderMiri.setAttribute('data-image', nuevaImagen);
});

// Modal Zoom
const modalZoom = document.getElementById('modalZoom');
const zoomedImg = document.getElementById('zoomedImg');
let scale = 1;

// Hacer clic en cualquier .zoomable abre modal
document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('dblclick', () => {
    const imageSrc = img.getAttribute('data-image') || img.src;
    zoomedImg.src = imageSrc;
    zoomedImg.style.transform = 'scale(1)';
    scale = 1;
    modalZoom.classList.remove('hidden');
  });
});

// Zoom con rueda del mouse
zoomedImg.addEventListener('wheel', (e) => {
  e.preventDefault();
  scale += e.deltaY * -0.001;
  scale = Math.min(Math.max(1, scale), 3); // entre 1x y 3x
  zoomedImg.style.transform = `scale(${scale})`;
});

// Cerrar modal al hacer clic en fondo
modalZoom.addEventListener('click', () => {
  modalZoom.classList.add('hidden');
  scale = 1;
});

// Sidebar toggle
const menuBtn = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeSidebar = document.getElementById('close-sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
});

overlay.addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});

closeSidebar.addEventListener('click', () => {
  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('hidden');
});

// Slider funcionalidad
let currentIndex = 0;
const slider = document.getElementById("slider");
const images = slider.children;
const total = images.length;

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % total;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + total) % total;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Contador tiempo juntos
const fechaInicio = new Date("2024-01-01T00:00:00");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const segundos = Math.floor(diferencia / 1000) % 60;
  const minutos = Math.floor(diferencia / 1000 / 60) % 60;
  const horas = Math.floor(diferencia / 1000 / 60 / 60) % 24;
  const dias = Math.floor(diferencia / 1000 / 60 / 60 / 24);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}
setInterval(actualizarContador, 1000);

// Zoom de imagen
document.querySelectorAll('.zoomable').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('zoomedImg').src = img.src;
    document.getElementById('modalZoom').classList.remove('hidden');
  });
});

document.getElementById('modalZoom').addEventListener('click', () => {
  document.getElementById('modalZoom').classList.add('hidden');
});
