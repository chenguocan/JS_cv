let demo = document.querySelector("#demo");
let n = 1;
let string = `你好,我是一名前端新人`;
demo.innerHTML = n;
let step = () => {
  setTimeout(() => {
    n = n + 1;
    demo.innerHTML = n;
    step();
  }, 1000);
};
step();
