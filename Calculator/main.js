let a = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".btn-clear");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    if (value !== undefined) {
      a.value += value;
    } else {
      a.value += "";
    }
  });
});

equal.addEventListener("click", function () {
  let answer = eval(a.value);
  a.value = answer;
});

clear.addEventListener("click", function () {
  a.value = "";
});
