let forgetData = {};
const form = document.getElementById("forgotForm");

form.addEventListener("input", function (event) {
  forgetData[event.target.name] = event.target.value;
  localStorage.setItem("forgetData", JSON.stringify(forgetData));
});

if (localStorage.getItem("forgetData")) {
  forgetData = JSON.parse(localStorage.getItem("forgetData"));
  for (let key in forgetData) {
    form.elements[key].value = forgetData[key];
  }
}
