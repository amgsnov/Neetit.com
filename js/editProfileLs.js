let nameData = {};
const form = document.getElementById("changeName");

form.addEventListener("input", function (event) {
  nameData[event.target.name] = event.target.value;
  localStorage.setItem("nameData", JSON.stringify(nameData));
});

if (localStorage.getItem("nameData")) {
  nameData = JSON.parse(localStorage.getItem("nameData"));
  for (let key in nameData) {
    // получаем и присваеваем занчение
    form.elements[key].value = nameData[key];
  }
}
