const link = document.querySelectorAll(".info__link");
const item = document.querySelectorAll(".info__item");
const input = document.querySelector(".purchase__input");
const plus = document.querySelector(".purchase__input-button--plus");
const minus = document.querySelector(".purchase__input-button--minus");
let count = 10;

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    if (link[i].classList.contains("info__link--current") === false) {
      link.forEach((element) =>
        element.classList.remove("info__link--current")
      );
      link[i].classList.add("info__link--current");
      item.forEach((item) => (item.style.order = `${i + 1}`));
      item.forEach((item) => (item.style.paddingLeft = "0"));
      item[i].style.order = `${0}`;
      item[i].style.paddingLeft = "10px";
      item[i + 1].style.order = `${1}`;
    }
  });
}

plus.addEventListener("click", function () {
  count += 1;
  input.value = count + " шт.";
});

minus.addEventListener("click", function () {
  if (count > 0) {
    count -= 1;
    input.value = count + " шт.";
  } else {
    minus.disabled = true;
  }
});
