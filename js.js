// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menu-button");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
});

overlay.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

// Variables
const slider = document.getElementById("slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;
const slides = slider.children.length;
let slideInterval;

// Función para actualizar el slider
function updateSlider() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

// Función para iniciar el cambio automático de imágenes
function startAutoSlide() {
  slideInterval = setInterval(() => {
    index = (index + 1) % slides;
    updateSlider();
  }, 10000); // 10 segundos
}

// Función para detener el cambio automático de imágenes
function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Eventos de los botones de navegación manual
prev.addEventListener("click", () => {
  stopAutoSlide();
  index = (index - 1 + slides) % slides;
  updateSlider();
  startAutoSlide();
});

next.addEventListener("click", () => {
  stopAutoSlide();
  index = (index + 1) % slides;
  updateSlider();
  startAutoSlide();
});

// Iniciar el cambio automático al cargar la página
window.addEventListener("load", startAutoSlide);

// Contador con fecha de inicio 3 marzo 2025, 14:54 (2:54 pm)
const fechaInicio = new Date("2025-03-03T14:54:00");
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

function actualizarContador() {
  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  diasEl.textContent = dias >= 0 ? dias : 0;
  horasEl.textContent = horas >= 0 ? horas : 0;
  minutosEl.textContent = minutos >= 0 ? minutos : 0;
  segundosEl.textContent = segundos >= 0 ? segundos : 0;
}

setInterval(actualizarContador, 1000);
actualizarContador(); // llamada inicial para que no tarde 1 segundo

// Zoom modal
const zoomableImages = document.querySelectorAll(".zoomable");
const modal = document.getElementById("modalZoom");
const zoomedImg = document.getElementById("zoomedImg");

zoomableImages.forEach(img => {
  img.addEventListener("click", () => {
    zoomedImg.src = img.src;
    modal.classList.remove("hidden");
  });
});

modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Imagen para Miri (cambiar al hacer clic)
const sliderMiri = document.getElementById("sliderMiri");
let miriActual = 0;
const miriImgs = ["./2.jpg", "./3.jpg"];

sliderMiri.addEventListener("click", () => {
  miriActual = (miriActual + 1) % miriImgs.length;
  sliderMiri.src = miriImgs[miriActual];
});
