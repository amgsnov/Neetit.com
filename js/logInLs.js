let signInData = {};
const form = document.getElementById("loginForm");
// получить данные из инпута
form.addEventListener("input", function (event) {
  signInData[event.target.name] = event.target.value;
  localStorage.setItem("signInData", JSON.stringify(signInData));
});
/// восстановить данные
if (localStorage.getItem("signInData")) {
  signInData = JSON.parse(localStorage.getItem("signInData"));
  for (let key in signInData) {
    // получаем и присваеваем занчение
    form.elements[key].value = signInData[key];
  }
}
