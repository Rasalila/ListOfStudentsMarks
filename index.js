const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const mapGrades = grades.map(function (num) {
  return Math.floor(Math.random() * 100);
});
console.log(mapGrades);

let res = grades.reduce(function (sum, elem) {
  return sum + elem;
}, 0);
console.log(res);

const middleMark = res / grades.length;
console.log(middleMark);

const maxValue = Math.max(...mapGrades);
console.log(maxValue);

const minValue = Math.min(...mapGrades);
console.log(minValue);

const filteredGood = mapGrades.filter((el) => el >= 60);
console.log(filteredGood);

const filteredBad = mapGrades.filter((el) => el < 60);
console.log(filteredBad);

const wordGrades = mapGrades.map(function (num) {
  if (num >= 80) {
    return "A";
  } else if (num >= 60) {
    return "B";
  } else if (num >= 40) {
    return "C";
  } else if (num >= 20) {
    return "D";
  } else if (num < 20) {
    return "E";
  }
});
console.log(wordGrades);

const result1 = document.querySelector(".mark");
result1.innerText = "Оценки студентов: " + mapGrades.join(", ") + ".";

const result2 = document.querySelector(".middle");
result2.innerText = "Средняя оценка: " + middleMark + ".";

const result3 = document.querySelector(".max");
result3.innerText = "Максимальная оценка: " + maxValue + ".";

const result4 = document.querySelector(".min");
result4.innerText = "Минимальная оценка: " + minValue + ".";

const result5 = document.querySelector(".positive");
result5.innerText =
  "Количество положительных оценок: " + filteredGood.join(", ") + ".";

const result6 = document.querySelector(".negative");
result6.innerText =
  "Количество отрицательных оценок: " + filteredBad.join(", ") + ".";

const result7 = document.querySelector(".letter");
result7.innerText =
  "Оценки в буквенном формате: " + wordGrades.join(", ") + ".";
