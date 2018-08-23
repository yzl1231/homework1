function $(id) {
			return typeof id==='string'?document.getElementById(id):id;
		}
window.onload = function () {
	var list1 = document.getElementById('list1'),
	    ul2 = document.getElementById('ul2');
	    // console.log(list1);

	list1.onclick = function(){
		// alert("yes");
		// ul2.style.display = 'block';
		if (ul2.style.display == 'none') {
			ul2.style.display = 'block';
		} else {
			ul2.style.display = 'none';
		}
	}


    // 获取时间
	var myDate = new Date(),
	    Year = myDate.getFullYear(),
	    Month = myDate.getMonth() + 1,
	    Day = myDate.getDate(),
	    XingQi = myDate.getDay();
	    switch (XingQi) {
	    	case 0:last_day = "星期天";break;
	    	case 1:last_day = "星期一";break;
	    	case 2:last_day = "星期二";break;
	    	case 3:last_day = "星期三";break;
	    	case 4:last_day = "星期四";break;
	    	case 5:last_day = "星期五";break;
	    	case 6:last_day = "星期六";break;
	    }
	document.getElementById('top_date').innerHTML = Year + "-" + Month + "-" + Day + last_day;


	// 上班打卡
	var join = document.getElementById('join'),
	    down = document.getElementById('Return'),
	    Time = myDate.toLocaleTimeString(),
	    myDate2 = new Date();
	    join.onclick = function(){
	    	document.getElementById('join_time').innerHTML = Time;
	    }

        Time2 = myDate2.toLocaleTimeString();
	    down.onclick = function(){
	    	document.getElementById('return_time').innerHTML = Time2;
	    }


    var titles=$('ul1').getElementsByTagName('li'),
	    divs=$('content1').getElementsByTagName('div');
	    console.log(titles);
	    console.log(divs);

	if (titles.length!=divs.length)
	 	return;
	for (var i = 0;i<titles.length; i++) {
		titles[i].id=i;
		titles[i].onclick=function(){  
			for (var j=0;j<titles.length;j++) {
				// titles[j].className=''; 
				divs[j].style.display='none';
			}
		    // this.className='tab_show';
		    divs[this.id].style.display='block';
	    }
    }

    var title2=$('ul2').getElementsByTagName('li'),
	    div2=$('content2').getElementsByTagName('div');
	    console.log(title2);
	    console.log(div2);

	if (title2.length!=div2.length)
	 	return;
	for (var i = 0;i<title2.length; i++) {
		title2[i].id=i;
		title2[i].onclick=function(){  
			for (var j=0;j<title2.length;j++) {
				// titles[j].className=''; 
				div2[j].style.display='none';
			}
		    // this.className='tab_show';
		    div2[this.id].style.display='block';
	    }
    }


	


}