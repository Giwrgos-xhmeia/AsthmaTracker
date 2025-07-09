const numbers = document.querySelectorAll('.number');
let inputValue = '';

numbers.forEach(number => {
  number.addEventListener('click', () => {
    inputValue += number.getAttribute('data-value');
    document.getElementById('result').textContent = `Input: ${inputValue}`;
  });
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