var i = 0;
var txt = 'Hello.  I am Ali Abolghasemi, a web developer. Im 16.yo And I love the web world very much. I am from Iran and the city of Isfahan. You can see my portfolio and mastery below :)';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }

  document.getElementById("html-push").style.width = "100%";
  document.getElementById("html-push").style.transition = "all 1.5s";

  document.getElementById("css-push").style.width = "100%";
  document.getElementById("css-push").style.transition = "all 1.5s";

  document.getElementById("js-push").style.width = "60%";
  document.getElementById("js-push").style.transition = "all 1.5s";

  document.getElementById("node-push").style.width = "40%";
  document.getElementById("node-push").style.transition = "all 1.5s";

  document.getElementById("express-push").style.width = "30%";
  document.getElementById("express-push").style.transition = "all 1.5s";
}