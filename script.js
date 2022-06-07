////////////////////////////////////////////////////////////////////////////////////////
//////TypeWriter effect/////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
const text = document.querySelector(".type");
const btn = document.querySelector(".btn");

let txt = [
  "a programer/front-end web developer with a keen eye for beautiful ui/functional and satisfying ux",
];
let i = 0;
let speed = 80;
const typeWriter = () => {
  text.innerHTML = txt[0].substring(0, i) + "<span>&#10072;</span>";

  i++ != txt[0].length ? setTimeout(typeWriter, speed) : undefined;
};
btn.addEventListener("click", typeWriter);
