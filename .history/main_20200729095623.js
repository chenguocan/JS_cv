let demo = document.querySelector("#demo");
let n = 0;
let string = `
你好,我是一名前端新人
接下来我要加样式了
我要加的样式是
body{
    color:red;
}
`;
console.log(string[0].charCodeAt);
string = string.replace("\n", "<br>");
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
  }, 100);
};
step();
