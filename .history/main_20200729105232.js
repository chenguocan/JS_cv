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
    n = n + 1;
    //如果string等于回车,通过<br>来处理
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === "") {
      string += "&nbsp";
    } else {
      string2 += string[n];
    }
    demo.innerHTML = string2;
    if (n + 1 < string.length) {
      console.log(string[39]);
      step();
    }
  }, 1000);
};
step();
