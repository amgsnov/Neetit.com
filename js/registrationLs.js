// переменная равная пустому объекту в ней складываем и сохраняем информацию из инпутов
let registrationData = {};
const form = document.getElementById("regForm");
/// получить данные из инпут
form.addEventListener("input", function (event) {
  registrationData[event.target.name] = event.target.value;
  localStorage.setItem("registrationData", JSON.stringify(registrationData));
});
/// восстановить данные
if (localStorage.getItem("registrationData")) {
  registrationData = JSON.parse(localStorage.getItem("registrationData"));
  console.log(form.elements);
  for (let key in registrationData) {
    form.elements[key].value = registrationData[key];
  }
}
