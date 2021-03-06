let demo = document.querySelector("#demo");
let style = document.querySelector("#style");
let n = 0;
//添加注释,才不会影响CSS的样式。
let string = `
/*你好,我是一名前端新人
 *这是我的项目
 *首先,我要准备一个div
 **/
#div1{
  position:fixed;
  border:1px solid red;
  width:200px;
  height:200px;
  right:100px;
  top:50%;
}
/*接下来我把一个div变成一个八卦图
 *注意看好了
 *首先,把div变成一个圆
 **/
#div1{
  border-radius:50%;
  box-shadow:0 0 3px rgba(0,0,0,0.5);
  border:none;
}
/*八卦是阴阳形成的
 *一黑一白
 **/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*加两个神秘的小球*/
#div1::before {
  width:100px;
  height:100px;
  top:0;
  left:50%;
  transform:translateX(-50%);
  background:black;
  border-radius:50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after {
  width:100px;
  height:100px;
  top:50%;
  left:50%;
  transform:translateX(-50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
  border-radius:50%;
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
    demo.scrollTo(0, 1000);
    window.scrollTo(0, 1000);
    if (n < string.length - 1) {
      n += 1;
      step();
    }
  }, 10);
};
step();
