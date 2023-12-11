const phone = document.getElementById("black");
console.log(phone);
const hover = document.querySelectorAll(".inner");
console.log(hover);
const adds = document.getElementById("button");
console.log(adds);
hover.forEach((el) => {
  el.onclick = function () {
    phone.style.display = "block";
  };
});
window.onclick = function (event) {
  if (event.target == phone) {
    phone.style.display = "none";
  }
};
adds.addEventListener("click", () => {
  phone.style.display = "none";
});
