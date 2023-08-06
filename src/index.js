import './styles.css';
import './assets/github.png';

const screenWidth = screen.availWidth;
const screenHeight = screen.availHeight;
const dpr = window.devicePixelRatio;

const viewportSize = document.querySelector('.viewport__size');
const screenSize = document.querySelector('.screen__size');
const dprSize = document.querySelector('.dpr__size');

screenSize.innerHTML = `<span class="size"><span>${screenWidth}</span><span class="px">px</span></span><span class="size__x">x</span><span class="size"><span>${screenHeight}</span><span class="px">px</span></span>`;
dprSize.innerHTML = `<span>DPR : ${parseFloat(dpr.toFixed(2))}</span>`;

const updateViewport = () => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  viewportSize.innerHTML = `<span class="size"><span>${viewportWidth}</span><span class="px">px</span></span><span class="size__x">x</span><span class="size"><span>${viewportHeight}</span><span class="px">px</span></span>`;
};

window.addEventListener('resize', () => updateViewport());

updateViewport();

// modal

const modal = document.getElementById('modal');

const modalBtn = document.getElementById('modal__btn');
const modalBtnClose = document.getElementById('modal__close');

modalBtn.onclick = function() {
  modal.style.display = "flex"
}

modalBtnClose.onclick = function() {
  modal.style.display = "none"
}
