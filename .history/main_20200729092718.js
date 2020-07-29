let demo = document.querySelector("#demo");
demo.innerHTML = 2;
setTimeout(() => {
  demo.innerHTML = 3;
}, 2000);
