function $(id) {
			return typeof id==='string'?document.getElementById(id):id;
		}
window.onload = function () {
	//顶部的inputvalue的清空
	var nav_input = document.getElementById('nav-input');
	nav_input.onclick = function(){
		nav_input.value = '';
	}
	//顶部的选项卡
	var titles=$('tab').getElementsByTagName('li'),
	    divs=$('nav-load-middle').getElementsByTagName('input');

	if (titles.length!=divs.length)
	 	return;
	    //遍历titles下所有li
	for (var i = 0;i<titles.length; i++) {
		titles[i].id=i;//给所有tab中的属性加上id属性
		titles[i].onclick=function(){  //把onmouseover改为onclick就是点击切换
			//清除所有li上的class和display
			for (var j=0;j<titles.length;j++) {
				titles[j].className=''; 
				divs[j].style.display='none';
			}
					//设置当前为高亮显示
		    this.className='tab-show';
		    divs[this.id].style.display='block';
	    }
    }



    
    //coupons抢券
	var titles2=$('right2-tab').getElementsByTagName('li'),
	    divs2=$('right2-bottom').getElementsByTagName('div');

	if (titles2.length!=divs2.length)
	 	return;
	    //遍历titles下所有li
	for (var i = 0;i<titles2.length; i++) {
		titles2[i].id=i;//给所有tab中的属性加上id属性
		titles2[i].onmouseover=function(){  //把onmouseover改为onclick就是点击切换
			//清除所有li上的class和display
			for (var j=0;j<titles2.length;j++) {
				titles2[j].className=''; 
				divs2[j].style.display='none';
			}
					//设置当前为高亮显示
		    this.className='right2-show';
		    divs2[this.id].style.display='block';
	    }
    }




  
    //subway地铁交通，生活圈
    var titles3=$('left3-tab').getElementsByTagName('li'),
	    divs3=$('left3-tab-bottom').getElementsByTagName('div');

	if (titles3.length!=divs3.length)
	 	return;
	    //遍历titles下所有li
	for (var i = 0;i<titles3.length; i++) {
		titles3[i].id=i;//给所有tab中的属性加上id属性
		titles3[i].onclick=function(){  //把onmouseover改为onclick就是点击切换
			//清除所有li上的class和display
			for (var j=0;j<titles3.length;j++) {
				titles3[j].className=''; 
				divs3[j].style.display='none';
			}
					//设置当前为高亮显示
		    this.className='left3-tab-show';
		    divs3[this.id].style.display='block';
	    }
    }




 
    //知道分子
    var titles4=$('left4-tab').getElementsByTagName('li'),
	    divs4=$('left4-tab-div0').getElementsByTagName('div');

	if (titles4.length!=divs4.length)
	 	return;
	    //遍历titles下所有li
	for (var i = 0;i<titles4.length; i++) {
		titles4[i].id=i;//给所有tab中的属性加上id属性
		titles4[i].onmouseover=function(){  //把onmouseover改为onclick就是点击切换
			//清除所有li上的class和display
			for (var j=0;j<titles4.length;j++) {
				titles4[j].className=''; 
				divs4[j].style.display='none';
			}
					//设置当前为高亮显示
		    this.className='left4-tab-show';
		    divs4[this.id].style.display='block';
	    }
    }





    //精彩推荐轮播
    var lunbo = document.getElementById('lunbo');    //获取容器
    var p_show = document.getElementById('p-show');   //获取图片列表
    var mid2_buttons = document.getElementById('mid2-buttons').getElementsByTagName('span');    //获取按钮
    
    var index = 1;    //获取小圆点的自定义值
    var animated = false;    //定义一个变量使它的初始值为false，为了使动画在动时我们点击按钮无效，增加动画的流畅度
    var timer;    //定义一个空变量存放自动播放的计时器

    function showButton() {
        //当图片换到下一张时，关闭以前亮起的按钮
        for (var i = 0; i <  mid2_buttons.length; i++) {
            if (mid2_buttons[i].className == 'on') {
                mid2_buttons[i].className = '';
                break;    //退出这个循环
            }
        }
        mid2_buttons[index - 1].className = 'on';
    }
    function animate(offset) {
        animated = true;
        var newLeft = parseInt(p_show.style.left) + offset;    //offset为图片宽度参数，调用animate函数是改变该参数
        var time = 300;  //位移总时间   
        var interval = 10;  //位移间隔时间
        var speed = offset/(time/interval);  //每次位移量
        function go() {  //从新定义一个函数来做动画效果，if判断图片是否移动到首尾两张图
            if ((speed < 0 && parseInt(p_show.style.left) > newLeft) || (speed > 0 && parseInt(p_show.style.left) < newLeft)) {
                p_show.style.left = parseInt(p_show.style.left) + speed + 'px';
                setTimeout(go, interval);  //计时器两个参数，前为函数，后为运行go函数间隔的时间
            }else {  //当要移动到辅助图时转换为真正的第一张或最后一张
                animated = false;
                p_show.style.left = newLeft + 'px';    //parseInt把字符串转换为数字
                if (newLeft > -225) {
                    p_show.style.left = -675 + 'px';
                }
                if (newLeft < -675) {
                    p_show.style.left = -225 + 'px';
                }
            }
        }
        go();
    }
    mid2_buttons.onclick = function () {
        if (index == 3) {
            index = 1
        }
        else{
            index += 1;   //每次点击箭头的时候都改变index的值
        }
        showButton();    //调用这个函数亮起图片响应的按钮
        if (!animated) {  //animated为false时才可以点击按钮
            animate(-225);
        }
        //animate(-270);
    }
        //按钮的切换
    for (var i = 0; i < mid2_buttons.length; i++){
        mid2_buttons[i].onclick = function () {
            if (this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));  //getAttribute可获取自定义的属性，取点击图片对应的小圆点的index值
            var offset = -225 * (myIndex - index);
            index = myIndex;   //把index归位到当前图片的值
            //animate(offset);
            showButton();
            if (!animated) {
                animate(offset);
            }
            }
        }
    //自动播放函数
    function play() {
        timer = setInterval(function () {
            mid2_buttons.onclick();
        },3000);
    }
    function stop() {
        clearInterval(timer);
    }
    // 鼠标移上移下调用函数
    lunbo.onmouseover = stop;
    lunbo.onmouseout = play;
    play();    
    




    //json部分
    var xmlhttp = null;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest();
    }else{
        xmlhttp = new ActiveXObject("MicrosOft.XMLHTTP");
    }
    xmlhttp.open("GET","http://rapapi.org/mockjsdata/35098/www.baidu.com",true);
    xmlhttp.send("");
    xmlhttp.onreadystatechange=function(){	
        if(xmlhttp.readyState==4){ 
            if(xmlhttp.status>=200&&xmlhttp.status<300||xmlhttp.status==304){
                var content = JSON.parse(xmlhttp.responseText)  
                document.getElementById("mid-tab1").innerHTML = "<li id='mid-tab' class='mid-tab-show'>"+"<a class='mid-tab-span'>"+content.theme1+"</a>"+content.theme11+"</li>"+
                                                                "<li id='mid-tab'>"+"<a class='mid-tab-span'>"+content.theme2+"</a>"+content.theme22+"</li>"
                document.getElementById("mid-bottom1").innerHTML = "<img class='img1' src='"+content.img1+"'>"+"<a class='mid-bottom-a1'>"+content.one1+"</a>"+
                                                                  "<span class='mid-bottom-span1'>"+content.two+"</span>"+
                                                                  "<span class='mid-bottom-span2'>"+content.three+"</span>"
                document.getElementById("mid-bottom2").innerHTML = "<img class='img2' src='"+content.img1+"'>"+"<a class='mid-bottom-a2'>"+content.one1+"</a>"+
                                                                  "<span class='mid-bottom-span1'>"+content.two+"</span>"+
                                                                  "<span class='mid-bottom-span2'>"+content.three+"</span>"
                document.getElementById("mid-bottom3").innerHTML = "<img class='img2' src='"+content.img1+"'>"+"<a class='mid-bottom-a2'>"+content.one1+"</a>"+
                                                                  "<span class='mid-bottom-span1'>"+content.two+"</span>"+
                                                                  "<span class='mid-bottom-span2'>"+content.three+"</span>"
                document.getElementById("mid-bottom11").innerHTML = "<img class='img1' src='"+content.img2+"'>"+"<a class='mid-bottom-a1'>"+content.one1+"</a>"+
                                                                  "<span class='mid-bottom-span1'>"+content.two+"</span>"+
                                                                  "<span class='mid-bottom-span2'>"+content.three+"</span>"
                document.getElementById("mid-bottom22").innerHTML = "<img class='img2' src='"+content.img2+"'>"+"<a class='mid-bottom-a2'>"+content.one1+"</a>"+
                                                                  "<span class='mid-bottom-span1'>"+content.two+"</span>"+
                                                                  "<span class='mid-bottom-span2'>"+content.three+"</span>"
                document.getElementById("mid-bottom33").innerHTML = "<img class='img2' src='"+content.img2+"'>"+"<a class='mid-bottom-a2'>"+content.one1+"</a>"+
                                                                  "<span class='mid-bottom-span1'>"+content.two+"</span>"+
                                                                  "<span class='mid-bottom-span2'>"+content.three+"</span>"
                document.getElementById("mid4-top").innerHTML = "<span class='mid4-top-span1'>"+content.five+"</span>"+
                                                                "<span class='mid4-top-span2'>"+content.eight+"</span>"+
                                                                "<span class='mid4-top-span3'>"+content.nine+"</span>"+
                                                                "<img class='mid4-p1' src='"+content.img14+"'>"
                document.getElementById("mid4-bottom").innerHTML = "<img class='mid4-p2' src='"+content.img3+"'>"+"<img id='a' class='mid4-p3' src='"+content.img4+"'>"+
                                                                   "<img id='b' class='mid4-p3' src='"+content.img5+"'>"+"<img id='c' class='mid4-p2' src='"+content.img6+"'>"+
                                                                   "<img id='d' class='mid4-p3' src='"+content.img7+"'>"+"<img id='e' class='mid4-p3' src='"+content.img8+"'>"+
                                                                   "<img id='f' class='mid4-p3' src='"+content.img9+"'>"+"<img id='g' class='mid4-p2' src='"+content.img10+"'>"+
                                                                   "<img id='h' class='mid4-p3' src='"+content.img11+"'>"+"<img id='i'class='mid4-p3' src='"+content.img12+"'>"+
                                                                   "<img id='j' class='mid4-p3' src='"+content.img13+"'>"+
                                                                   "<span class='mid4-bottom-span1'>"+content.five+"</span>"+
                                                                   "<span class='mid4-bottom-span2'>"+content.six+"</span>"+
                                                                   "<span class='mid4-bottom-span3'>"+content.seven+"</span>"
                document.getElementById("top-bot0").innerHTML = "<span class='bot-span1'>"+content.a+"</span>"+"<span class='bot-span2'>"+content.b+"</span>"
                document.getElementById("top-bot1").innerHTML = "<span class='bot-span1'>"+content.c+"</span>"+"<span class='bot-span2'>"+content.d+"</span>"+
                                                                "<span class='bot-span2'>"+content.e+"</span>"
                document.getElementById("top-bot2").innerHTML = "<span class='bot-span1'>"+content.f+"</span>"+"<span class='bot-span2'>"+content.g+"</span>"
                document.getElementById("top-bot3").innerHTML = "<span class='bot-span1'>"+content.h+"</span>"+"<span class='bot-span2'>"+content.i+"</span>"
                document.getElementById("top-bot4").innerHTML = "<span class='bot-span1'>"+content.j+"</span>"+"<span class='bot-span2'>"+content.k+"</span>"
                document.getElementById("top-bot5").innerHTML = "<span class='bot-span1'>"+content.l+"</span>"+"<span class='bot-span2'>"+content.m+"</span>"
                document.getElementById("top-bot6").innerHTML = "<span class='bot-span1'>"+content.n+"</span>"+"<span class='bot-span2'>"+content.o+"</span>"
                document.getElementById("top-bot7").innerHTML = "<span class='bot-span1'>"+content.p+"</span>"+"<span class='bot-span2'>"+content.q+"</span>"
                document.getElementById("top-bot8").innerHTML = "<span class='bot-span1'>"+content.r+"</span>"+"<span class='bot-span2'>"+content.s+"</span>"
                document.getElementById("top-bot9").innerHTML = "<span class='bot-span1'>"+content.t+"</span>"+"<span class='bot-span2'>"+content.u+"</span>"
            }else{
                alert("请求失败");
            }
        }
    }



    //hop红人烧客部分
    var a=$('mid4-bottom').getElementsByTagName('img'),
	    b=$('top-bot').getElementsByTagName('div');

	// if (a.length!=b.length)
	//  	return;
	    //遍历titles下所有li
	for (var i = 0;i<a.length; i++) {
		a[i].id=i;//给所有tab中的属性加上id属性
		a[i].onmouseover=function(){  //把onmouseover改为onclick就是点击切换
			//清除所有li上的class和display
			for (var j=0;j<a.length;j++) {
				// a[j].className=''; 
				b[j].style.display='none';
			}
					//设置当前为高亮显示
		    // this.className='mid-tab-show';
		    b[this.id].style.display='block';
	    }
    }







    

    //红店铺，新开张部分
    var titles5=$('mid-tab1').getElementsByTagName('li'),
	    divs5=$('mid-box').getElementsByTagName('div');
	    // alert(titles5.length);

	if (titles5.length!=divs5.length)
	 	return;
	    //遍历titles下所有li
	for (var i = 0;i<titles5.length; i++) {
		titles5[i].id=i;//给所有tab中的属性加上id属性
		titles5[i].onclick=function(){  //把onmouseover改为onclick就是点击切换
			//清除所有li上的class和display
			for (var j=0;j<titles5.length;j++) {
				titles5[j].className=''; 
				divs5[j].style.display='none';
			}
					//设置当前为高亮显示
		    this.className='mid-tab-show';
		    divs5[this.id].style.display='block';
	    }
    }
   
 



















}




    
    


	

