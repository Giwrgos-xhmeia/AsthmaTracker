const numbers = document.querySelectorAll('.number');
let inputValue = '';

document.querySelector('.quality').addEventListener('click', () => {
  window.location.href = './quality/index.html';
});
document.querySelector('.symptoms').addEventListener('click', () => {
  window.location.href = './symptoms/index.html';
});

function httpGet(theUrl)
{
//edw kanei to request
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
//edw parinoume tis wres
	var objDate = new Date();
	var hours = objDate.getHours();
console.log(hours);
	data = JSON.parse(xmlHttp.responseText);
	let Pm25 = data.hourly.pm2_5[hours];
    return Pm25;
}

document.getElementById('submitBtn').addEventListener('click', () => {
	console.log(httpGet("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=39.6649&longitude=20.8519&hourly=pm10,pm2_5,carbon_dioxide,carbon_monoxide&timezone=Europe%2FLondon&forecast_days=1"));
  if (inputValue === '') {
    document.getElementsByClassName('number').textContent = 'Please enter a value.';
  } else {
    document.getElementById('result').textContent = `Submitted: ${inputValue}`;
  }
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