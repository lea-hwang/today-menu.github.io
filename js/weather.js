const API_KEY = "3fb1958e24110598987b97cb717a3c99";
const weatherTag = document.querySelector('#weather')


function pickWeather(code) {
  const firstNumber =  code / 100;
  if (firstNumber == 2 || firstNumber == 3 || firstNumber == 5 || code == 771 || code == 781) {
    weatherTag.innerText = '오늘은 비가 오네요.'
    return 'rain'
  } else if (firstNumber == 6) {
    weatherTag.innerText = '오늘은 눈이 오네요.'
    return 'snow'
  } else if (code == 800) {
    weatherTag.innerText = '오늘은 맑음입니다.'
    return 'clear'
  } else {
    weatherTag.innerText = '오늘은 날씨가 흐리네요.'
    return 'clouds'
  }
}


function onGeoOk(position){
  // 현재 사용자의 위치 입력 받기
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = pickWeather(data.weather[0].id);
    getFoodList(weather)
  });
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
