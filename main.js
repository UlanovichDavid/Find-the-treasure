var clicks = 0;

var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};
//Создаем переменные
var width = 400;
var height = 400;
//случайная позиция клада
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
//Добавляем элементу img обработчик клика
$("#map").click(function (event) {
       clicks++;
       //Получаем расстояние от места клика до клада
       var distance = getDistance(event, target);
       //Преобразуем расстояние в подсказку
       var distanceHint = getDistanceHint(distance);
       //Записываем в элемент #distance новую подсказку
       $("#distance").text(distanceHint);
       //Если клик был достаточно близко позровляем с победой
       if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
}
});
// Вычислить расстояние от клика (event) до клада (taarget)
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
// Получит для расстояния строку подсказки
var getDistanceHint = function (distance) {
    if (distance < 10) {
      return "Обожжешься!";
    } else if (distance < 20) {
      return "Очень горячо";
    } else if (distance < 40) {
      return "Горячо";
    } else if (distance < 80) {
      return "Тепло";
    } else if (distance < 160) {
      return "Холодно";
    } else if (distance < 320) {
      return "Очень холодно";
    } else {
      return "Замерзнешь!";
    } 
};













