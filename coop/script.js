
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