let demo = document.querySelector("#demo");
let n = 0;
let string = `你好,我是一名前端新人`;
demo.innerHTML = string[n];
let step = () => {
  setTimeout(() => {
    if (n + 1 >= string.length) {
      return;
    } else {
      n = n + 1;
      demo.innerHTML = string[n];
      step();
    }
  }, 1000);
};
step();
