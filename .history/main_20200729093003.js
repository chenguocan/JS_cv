let demo = document.querySelector("#demo");
let n = 1;
demo.innerHTML = n;
setTimeout(() => {
  n += 1;
  demo.innerHTML = n;
}, 2000);
