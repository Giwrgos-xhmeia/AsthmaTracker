const numbers = document.querySelectorAll('.number');
let inputValue = '';


let Pm25 = 1
let Pm10 = 1
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
	Pm25 = data.hourly.pm2_5[hours];
  Pm10 = data.hourly.pm10[hours];
  ozone = data.hourly.ozone[hours];
  no2 = data.hourly.nitrogen_dioxide[hours];
    return Pm25;
}
document.getElementById('submitBtn').addEventListener('click', refresh());
function refresh() {
  console.log(httpGet("https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&hourly=pm10,pm2_5,ozone,nitrogen_dioxide&timezone=auto&forecast_days=1"));
	document.querySelector('.number1').textContent = Pm25;
	document.querySelector('.number2').textContent = Pm10;
  document.querySelector('.number3').textContent = ozone;
  document.querySelector('.number4').textContent = no2;

};
//pm25 updater
function updatePM25Color() {
  const div = document.querySelector('.number1');
  const div2 = document.querySelector('.number1-container');
  const pm25 = parseFloat(div.textContent);

  if (pm25 <= 10) {
    div.style.backgroundColor = 'green';
      div2.style.backgroundColor = 'green';
  } else if (pm25 <= 20) {
    div.style.backgroundColor = 'orange';
    div2.style.backgroundColor = 'orange';
  } else {
    div.style.backgroundColor = 'red';
    div2.style.backgroundColor = 'red';
  }
}
function updatePM10Color() {
  const div = document.querySelector('.number2');
  const div2 = document.querySelector('.number2-container');
  const pm10 = parseFloat(div.textContent);

  if (pm10 <= 20) {
    div.style.backgroundColor = 'green';
    div2.style.backgroundColor = 'green';
  } else if (pm10 <= 50) {
    div.style.backgroundColor = 'orange';
    div2.style.backgroundColor = 'orange';
  } else {
    div.style.backgroundColor = 'red';
    div2.style.backgroundColor = 'red';
  }
}
function updateO3Color() {
  const div = document.querySelector('.number3');
  const div2 = document.querySelector('.number3-container');
  const o3 = parseFloat(div.textContent);

  if (o3 <= 60) {
    div.style.backgroundColor = 'green';
    div2.style.backgroundColor = 'green';
  } else if (o3 <= 120) {
    div.style.backgroundColor = 'orange';
    div2.style.backgroundColor = 'orange';
  } else {
    div.style.backgroundColor = 'red';
    div2.style.backgroundColor = 'red';
  }
}
function updateNO2Color() {
  const div = document.querySelector('.number4');
  const div2 = document.querySelector('.number4-container');
  const no2 = parseFloat(div.textContent);

  if (no2 <= 40) {
    div.style.backgroundColor = 'green';
    div2.style.backgroundColor = 'green';
  } else if (no2 <= 90) {
    div.style.backgroundColor = 'orange';
    div2.style.backgroundColor = 'orange';
  } else {
    div.style.backgroundColor = 'red';
    div2.style.backgroundColor = 'red';
  }
}
//runondomchange
function runOnDomChange() {
  // Put all your logic here
  updatePM25Color();
  updatePM10Color();
  updateO3Color();
  updateNO2Color();
  console.log('DOM changed, running logic.');

  // Example:
  // const el = document.querySelector('.some-class');
  // if (el) el.style.background = 'purple';
}

// Run once on initial load
document.addEventListener('DOMContentLoaded', runOnDomChange);

// Run on any DOM mutation
const observer = new MutationObserver(runOnDomChange);
observer.observe(document.body, {
  childList: true,
  subtree: true,
  characterData: true
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