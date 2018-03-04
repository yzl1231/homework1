window.onload = function(){
    var xmlhttp = null;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
    }
    xmlhttp.open("GET","http://rapapi.org/mockjsdata/31961/synaesthesia-design-language",true);
    xmlhttp.send("");
    xmlhttp.onreadystatechange=function(){	
        if(xmlhttp.readyState==4){ 
            if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304){
                var content = JSON.parse(xmlhttp.responseText)  
                document.getElementById("there1").innerHTML = "<img src='"+content.image1+"'><img src='"+content.image2+"'><img src='"+content.image3+"'><img src='"+content.image4+"'><img src='"+content.image5+"'><img src='"+content.image6+"'><img src='"+content.image7+"'>"
            }else{
                alert("请求失败");
            }
        }
    }
}
var there = document.getElementById("there");
var there1 = document.getElementById("there1");
var spanList = document.getElementById("there3").getElementsByTagName("span");
var left = document.getElementById("left");
var right = document.getElementById("right");
var clickFlag = ture;
var time
var index = 0;
var Distance = there.offsetWidth;
function AutoGo(){
    var start = there1.offsetLeft;
    var end = index*Distance*(-1);
    var change = end-start;
    var timer;
    var t = 0;
    var maxT = 30;
    clear();
    if(index == spanList.length){
        spanList[0].className = "there4"
    }else{
        spanList[index].className = "there4"
    }
    clearInterval(timer);
    timer = setInterval(function(){
        t++;
        if(t>=maxT){
            clearInterval(timer);
            clickFlag=true;
        }
        there1.style.left=change/maxT*t+start+"px";
        if(index == spanList.length&&t>=maxT){
            there1.style.left = 0;
            there1 = 0;
        }
    },17);
}
function forward(){
    index++;
    if(index>spanList.length){
        index = 0;
    }
    AutoGo();
}
function backward(){
    index--;
    if(index<0){
        index = spanList.length - 1;
        there1.style.left = (index + 1)*Distance*(-1)+"px";
    }
    AutoGo();
}
time = setInterval(forward,3000);
there.onmouseover = function(){
    clearInterval(time);
}
there.onmouseout = function(){
time = setInterval(forward,3000);
}
for(var i = 0;i < spanList.length;i++){
    spanList[i].onclick = function(){
        index = this.innerText - 1;
        AutoGo();
    }
}
right.onclick = function(){
    if(clickFlag){
        forward();
    }
    clickFlag = false;
}
function clear(){
    for(var i = 0;i<spanList.length;i++){
        spanList[i].className="";
    }
}

































