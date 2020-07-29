let demo = document.querySelector("#demo");
let n = -1;
let string = `
你好,我是一名前端新人
接下来我要加样式了
我要加的样式是
body{
    color:red;
}
`;
let string2 = ``;
// string = string.replace(/\n/g, "<br>"); //正则表达式表示所有回车。
let step = () => {
  setTimeout(() => {
    console.log(string[n]);
    if (string[n] === "\n") {
      string2 += "<br>";
    } else {
      string2 += string[n];
    }
    demo.innerHTML = string2;
    if (n < string.length) {
      step();
    }
  }, 1000);
};
step();
