window.onload = function(){
	//导航栏特效
	var hav = document.getElementsByClassName("hav")[0];
	var oa = hav.getElementsByTagName("a");
	console.log(oa.length);
	for(var i=1;i<oa.length;i++){
		oa[i].onmouseover = function(){
			this.parentNode.getElementsByClassName("di")[0].style.width = "100%";
			this.style.color="#5de0fe";
		}
		oa[i].onmouseout = function(){
			this.parentNode.getElementsByClassName("di")[0].style.width = "0px";
			this.style.color="white";
		}
	}
	var cha = document.getElementsByClassName("cha")[0];
	cha.onmouseover = function(){
		this.style.color = "black";
		this.style.background = "white";
		this.style.border = "solid 1px white";
	}
	cha.onmouseout = function(){
		this.style.color = "white";
		this.style.background = "";
		this.style.border = "solid 1px #5de0fe";
	}
	var zhong = document.getElementsByClassName("zhong")[0];
	var h1 = zhong.getElementsByTagName("h1")[0];
	var p = zhong.getElementsByTagName("p")[0];
	var a = zhong.getElementsByTagName("a")[0];
	h1.style.top = "0px";
	p.style.top = "0px";
	a.style.top = "0px";
	
	var li1 = document.getElementsByClassName("li1")[0];
	var li2 = document.getElementsByClassName("li2")[0];
	var li3 = document.getElementsByClassName("li3")[0];

	console.log(li1.length);
	
	li1.onmouseenter = function(){
	
		li1.style.background = "url(../CSS/img/ia_100000004.png) center top/105% 105%";
		
	}
	li1.onmouseleave = function(){
		li1.style.background = "#f2f2f2";
		li1.style.transition = "";
		clearTimeout(timer1)
	};
	li2.onmouseenter = function(){
		console.log("a")
		this.style.background = "url(../CSS/img/ia_100000004.png) center center/120%";
		timer2 = setTimeout(function(){
			li2.style.transition = "all 0.5s";
			li2.style.background = "url(../CSS/img/ia_100000004.png) center center/125%";
		},100)
	};
	li2.onmouseleave = function(){
		this.style.background = "#f2f2f2";
		this.style.transition = "";
		clearTimeout(timer2)
	};
	li3.onmouseenter = function(){
		this.style.background = "url(../CSS/img/ia_100000004.png) center center/100%";
		timer3 =  setTimeout(function(){
			li3.style.transition = "all 0.5s";
			li3.style.background = "url(../CSS/img/ia_100000004.png) center center/105%";
		},100)
	};
	li3.onmouseleave = function(){
		this.style.background = "#f2f2f2";
		this.style.transition = "";
		clearTimeout(timer3)
	}
	//box3-footer向上滚动
	var number = document.getElementsByClassName("number")[0];
	
	window.onscroll = function(){
		var top = document.documentElement.scrollTop||document.body.scrollTop;
		
		if(top>=1000){
			number.style.top = 0; 
		}
		if(top>=200){
			li1.style.top = 0; 
		li2.style.top = 0;
		li3.style.top = 0;
	     }
	}
	//box4
	var btn1 = document.getElementsByClassName("btn1")[0];
	var btn2 = document.getElementsByClassName("btn2")[0];
	var box411 = document.getElementsByClassName("box411")[0];
	btn1.onclick = function(){
		box411.style.left = "0px";
		this.style.background = "white";
		btn2.style.background = "blue";
	}
	btn2.onclick = function(){
		box411.style.left = "-775px";
		this.style.background = "white";
		btn1.style.background = "blue";
	}
	
		
	
}