import './styles.css';
import './assets/github.png';

// Initializing variables with a global object and its properties.
const screenWidth = screen.availWidth;
const screenHeight = screen.availHeight;
const dpr = window.devicePixelRatio;

// Initializing variables with an element.
const viewportSize = document.querySelector('.viewport__size');
const screenSize = document.querySelector('.screen__size');
const dprSize = document.querySelector('.dpr__size');

// Setting the value of an HTML element variable using the innerHTML method.
screenSize.innerHTML = `<span class="size"><span>${screenWidth}</span><span class="px">px</span></span><span class="size__x">x</span><span class="size"><span>${screenHeight}</span><span class="px">px</span></span>`;
dprSize.innerHTML = `<span>DPR : ${parseFloat(dpr.toFixed(2))}</span>`;

//Update function for the viewportSize variable.
const updateViewport = () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  viewportSize.innerHTML = `<span class="size"><span>${viewportWidth}</span><span class="px">px</span></span><span class="size__x">x</span><span class="size"><span>${viewportHeight}</span><span class="px">px</span></span>`;
};

// Adding a resize event listener within the updateViewport function.
window.addEventListener('resize', () => updateViewport());

updateViewport();

// MODAL

// Initializing variables with an element.
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal__btn');
const modalBtnClose = document.getElementById('modal__close');

// Variables initialized with elements using the onClick method.
modalBtn.onclick = function() {
  modal.style.display = "flex"
}

modalBtnClose.onclick = function() {
  modal.style.display = "none"
}
