let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let n = 0;
//添加注释,才不会影响CSS的样式。
let string = `
/*你好,我是一名前端新人
 *这是我的项目
 *首先,我要准备一个div
 */
#div1{
  position:fixed;
  border:1px solid red;
  width:400px;
  height:400px;
  right:200px;
  top:0px;
}

`;
let string2 = "";
// string = string.replace(/\n/g, "<br>"); //正则表达式表示所有回车。
let step = () => {
  setTimeout(() => {
    //如果string等于回车,通过<br>来处理
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }
    demo.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 100);
};
step();
