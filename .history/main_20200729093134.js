let demo = document.querySelector("#demo");
let n = 1;
demo.innerHTML = n;
setInterval(() => {
  n += 1;
  demo.innerHTML = n;
}, 1000);
