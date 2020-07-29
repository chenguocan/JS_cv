let demo = document.querySelector("#demo");
let n = 0;
let string = `你好,我是一名前端新人`;
demo.innerHTML = string.substring(0, n);
let step = () => {
  setTimeout(() => {
    if (n >= string.length) {
      return;
    } else {
      n = n + 1;
      demo.innerHTML = string.substring(0, n);
      step();
    }
  }, 1000);
};
step();
