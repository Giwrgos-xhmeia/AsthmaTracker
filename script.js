const numbers = document.querySelectorAll('.number');
let inputValue = '';

document.querySelector('.quality').addEventListener('click', () => {
  window.location.href = './quality/index.html';
});
document.querySelector('.symptoms').addEventListener('click', () => {
  window.location.href = './symptoms/index.html';
});
document.querySelector('.aiassis').addEventListener('click', () => {
  window.location.href = './coop/index.html';
});

//infoButton
const infoBtn = document.getElementById('infoBtn');
const infoPopup = document.getElementById('infoPopup');
const closeBtn = document.getElementById('closeBtn');

infoBtn.addEventListener('click', () => {
  infoPopup.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  infoPopup.classList.add('hidden');
});
//for body fade in
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
