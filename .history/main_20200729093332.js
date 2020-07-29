let demo = document.querySelector("#demo");
let n = 1;
demo.innerHTML = n;
let step = () => {
  n = n + 1;
  demo.innerHTML = n;
};
setTimeout(() => {
  step();
});
