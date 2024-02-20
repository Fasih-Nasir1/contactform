
a=0;
d="%"
function fn(){
    
    document.getElementById("num").innerHTML= a++ + d

if(a >=101){
    clearInterval(stop)
}
}

var stop=setInterval(fn,100)
// 
b=0;

function fn1(){
    
    document.getElementById("num1").innerHTML= b++ + d
if(b >= 101 ){
    clearInterval(stop1)
}
}

var stop1=setInterval(fn1,100)

var c=0

function age(){
    document.getElementById("span1").innerHTML=c++
if(c > 17)
clearInterval(stop0)
}

stop0 =setInterval(age,100)


document.addEventListener("DOMContentLoaded",function (){
    const load=document.getElementById("i1")

})

var h=1;

function html(){
    document.getElementById("html").innerHTML=h++ +d
if(h >=101){
    clearInterval(h1)
}
}

var h1=setInterval(html,100)

cs=0;
d="%"
function cd(){
    
    document.getElementById("css").innerHTML= cs++ + d

if(cs >=92){
    clearInterval(st)
}
}

var st=setInterval(cd,110)


j=0;
d="%"
function js(){
    
    document.getElementById("js").innerHTML= j++ + d

if(j >=78){
    clearInterval(jt)
}
}

var jt=setInterval(js,120)

p=0;
d="%"
function php(){
    
    document.getElementById("php").innerHTML= p++ + d
if(p >=63){
    clearInterval(pt)
}
}
var pt=setInterval(php,130)

wp=0;
d="%"
function wpp(){
    
    document.getElementById("wp").innerHTML= wp++ + d
if(wp >=92){
    clearInterval(wpt)
}
}
var wpt=setInterval(wpp,100)
// 

document.addEventListener("DOMContentLoaded",function(){
const body=document.getElementById("cont")
const loaders=document.getElementById("lb")

loaders.style.display ="block"
body.style.display ="none"


setInterval(function(){
    loaders.style.display ="none"
    body.style.display ="block" 
    }
,2700
)
})

var fl=1;
function floa(){
const fload=document.getElementById("loader1").innerHTML=fl++ +d
if(fl >= 101){
clearInterval(stopf)
}
}
var stopf=setInterval(floa,24)

function toggleParagraph() {
  var paragraph = document.getElementById('myParagraph');

  if (paragraph.classList.contains('hidden')) {

    paragraph.classList.remove('hidden');
  } else {
   
    paragraph.classList.add('hidden');
  }
}

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("message").value,
      message: document.getElementById("email").value,
    };
  
    const serviceID = "service_8ohznev";
    const templateID = "template_i9hwpji";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          openPopup( params.name + " Your msg sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  function openPopup(content) {
    document.getElementById("ob").innerHTML = content;
    document.getElementById("customPopup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("customPopup").style.display = "none";
  }
