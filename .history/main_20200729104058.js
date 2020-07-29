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
string = string.replace(/\n/g, "<br>"); //正则表达式表示所有回车。
let step = () => {
  setTimeout(() => {
    if (n >= string.length) {
      return;
    } else {
      n = n + 1;
      if (string[n] === "\n") {
        demo.innerHTML = string.substring(0, n);
      }
      step();
    }
  }, 100);
};
step();
