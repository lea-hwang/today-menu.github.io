// WeatherAndFood.json에 있는 데이터 불러오기
const reRecommendationBtn = document.querySelector('#re-recommendation')
let foods;

function readJSON(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

function getFoodList(weather){
  readJSON("./WeatherAndFood.json", function(text){
    const data = JSON.parse(text);
    foods = data[weather];
    recommendFood()
  });
}

// 날씨에 따른 메뉴 추천하기
function recommendFood() {
  const selectedFood = _.sample(foods);
  const foodRecommentdation = document.querySelector('#foodRecommendation')
  const foodImg = document.querySelector('#foodImg');
  foodImg.src = selectedFood.url
  foodRecommentdation.innerText = `${selectedFood.name}은 어떤가요?`
}

reRecommendationBtn.addEventListener('click', recommendFood)