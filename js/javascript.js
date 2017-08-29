//原生JS




//二级菜单--------------------------------
//
//window.onload = function(){
//	var obj_lis = document.getElementById("nav-list").getElementsByTagName("li");
//	var oSection = document.getElementsByClassName("section");
//	console.log(oSection,obj_lis);
//	for(var i=0;i<obj_lis.length;i++){
//		obj_lis[i].index=i
//		oSection[i].index=i
//		obj_lis[i].onmouseenter = function(){
//			for(var i=0;i<oSection.length;i++){
//				oSection[this.index].style.display='block'
//			}	
//		}
//		//鼠标进入对应的li   section显示
//		obj_lis[i].onmouseleave = function(){
//			for(var i=0;i<oSection.length;i++){
//				oSection[this.index].style.display='none'
//			}
//		}
//		//鼠标离开对应的li   section隐藏
//		oSection[i].onmouseenter = function(){
//			for(var i=0;i<oSection.length;i++){
//				oSection[this.index].style.display='block'
//				obj_lis[this.index].className='ac'
//			}
//			
//		}
//		//鼠标进入对应的section   li显示为hover状态
//		oSection[i].onmouseleave = function(){
//			for(var i=0;i<oSection.length;i++){
//				oSection[this.index].style.display='none'
//				obj_lis[this.index].className=''
//			}
//		}
//		//鼠标离开对应的section   li消失hover状态
//	}
//}



//jQuery----------------------

$(function(){
	
	//二级菜单------------------
	function erji(){
		var obj_lis=$("#nav-list li");//找到二级菜单的li
		var oSection=$(".section");//找到要显示的二级菜单
		obj_lis.mouseenter(function(){//鼠标移入 左边li
			$(this).addClass("ac").siblings().removeClass("ac");//加类名
			$(".popup").show();//显示
			$(".popup").children(".section").eq($(this).index()).show().siblings().hide();//显示
		});
		obj_lis.mouseleave(function(){//离开左边li
			oSection.mouseenter(function(){//离开li进入弹出的菜单
				$(".popup").show();
				obj_lis.eq($(this).index()).addClass("ac")
			});
			$(".popup").hide();
			$(this).removeClass("ac")
		});
		oSection.mouseleave(function(){
			$(".popup").hide();
			obj_lis.removeClass("ac")
		});
	};
	erji();
		
	//右边动画-------------------
	
	function hua(){
		$(".icon-amt").mouseenter(function(){//鼠标移入事件
			var timer=setTimeout(function(){//超时定时器
				$(".huadong").animate({"top":30+"px"},200);//动画改变定位
				$(".icon-amt").animate({"top":-40+"px"},200);//动画改变定位
				$(".icon-amt span").addClass("span-amt");//带有边框线的类名，现在有边框线，为透明的，看不见
			},500);//定时时间
			
			$(".h-main").eq($(this).index()).show().siblings().hide();//显示对应的内容
			$(".icon-amt").mouseleave(function(){//鼠标移出
				clearTimeout(timer)//清除定时器
			});
			$(".icon-amt span").removeClass("span-amt-color");//删除类名
			$(".icon-amt span").eq($(this).index()).addClass("span-amt-color");//加上一个类名，这个类名只控制边框线的颜色，没有边框线，加上类名也不会生效
		});
		$(".guanbi").click(function(){//点击叉叉，动画还原，删除边框线
			$(".huadong").animate({"top":208+"px"},200);
			$(".icon-amt").animate({"top":0+"px"},200);
			$(".icon-amt span").removeClass("span-amt");
		});			
	};
	hua();
	

	//楼层---------------------------
	
	function gun(){
		$(window).scroll(function(){//高度改变事件
			var s_t=$(window).scrollTop();//滚轮的高度
			if(s_t>$(".louceng").eq(0).offset().top-30){
				$(".nav-left").show();
			}else{
				$(".nav-left").hide();
			};
			for(var i=0;i<$(".louceng").size();i++){//判断楼层加类名
				if(s_t>=$(".louceng").eq(i).offset().top-400){
					$(".nav-left li").eq(i).addClass('nav-ac').siblings().removeClass("nav-ac");
					$(".louceng .title h2").removeClass("aassd");
					$(".louceng .title h2").eq(i).addClass('aassd');
				};
			};
			$(".nav-left li").each(function(i,ele){//动画滚动效果
				$(this).click(function(){
					$("html,body").stop().animate({"scrollTop":$(".louceng").eq(i).offset().top+"px"},1000);
				});	
			});
		});		
	};
	gun();
	
	
	//轮播图------------------
	
	function img_tab(){
		//制造并插入对应图片数量的数字
		for(var i=1;i<=$(".img-tab li").size();i++){
			var li="<li>"+i+"</li>";
			$(".banner .num").append(li);
		};
		//先显示一个图片和一个对应的数字
		$(".img-tab li").eq(0).show();
		$(".num li").eq(0).addClass("li-ac");
		//鼠标移入下标
		$(".num li").mouseenter(function(){
			$(this).addClass("li-ac").siblings().removeClass("li-ac");
			var j=$(this).index();//申明变量来记录索引
			k=j;//给后面用
			$(".img-tab li").eq(j).stop().fadeIn(300).siblings().stop().fadeOut(300);
		});
		var k=0;
		var t_timer=setInterval(right_tab,2000);//申明一个定时器  并放一个函数进去
		
		function left_tab(){//点左的函数
			k--;
			if(k<0){
				k=$(".num li").size()-1;
			}
			//console.log(k)
			$(".num li").eq(k).addClass("li-ac").siblings().removeClass("li-ac");
			$(".img-tab li").eq(k).fadeIn(300).siblings().fadeOut(300);
		};
		
		function right_tab(){//点右的函数，也是放在定时器里的函数
			k++;
			//console.log(k)
			if(k>=$(".img-tab li").size()){
				k=0;
			};
			$(".num li").eq(k).addClass("li-ac").siblings().removeClass("li-ac");
			$(".img-tab li").eq(k).fadeIn(300).siblings().fadeOut(300);
		};
		//点左箭头，调用
		$(".left-click").click(function(){
			left_tab();
		});
		//右箭头调用
		$(".right-click").click(function(){
			//console.log(k)
			right_tab();
		});
		//清除和重启定时器
		$(".banner").hover(
			function(){
				clearInterval(t_timer);
			},
			function(){
				t_timer=setInterval(right_tab,2000);
			}
		)
	};
	img_tab();
	

	//回到顶部-----------------------
	
	function backTop(){
		$(".right-bot li").eq(0).hover(
			function(){
				$(".right-bot li span").eq(0).stop().animate({"left":-71},300)
			},
			function(){
				$(".right-bot li span").eq(0).stop().animate({"left":0},300)
			}
		);
		$(".right-bot li").eq(0).click(function(){
			$("html,body").animate({"scrollTop":0},1000);
		});
	};
	backTop();

	
	//右侧弹出-------------
	
	
	function right_tab(){
		var aA=$(".nav-right li a");
		aA.each(function(i){
			aA.eq(i).hover(
				function(){
					$(".nav-right li span").eq(i).stop().animate({"left":-71},300)
				},
				function(){
					$(".nav-right li span").eq(i).stop().animate({"left":0},300)
				}
			);
		})
	};
	right_tab();
	
	//选项卡--最终版----------------------
	function cont_tab(){
		var aLou=$(".louceng");
		aLou.each(function(i){
			var aLi=aLou.eq(i).find(".title li");
			var aPage=aLou.eq(i).find(".content");
			aPage.eq(0).addClass("contshow");
			aLi.eq(0).addClass("li-hover");
			aLi.each(function(j){
				aLi.eq(j).hover(
					function(){
						aLi.eq(j).addClass("li-hover").siblings().removeClass("li-hover");
						aPage.eq(j).addClass("contshow").siblings().removeClass("contshow");
					}
				);
			});
		}) ;
		//一层版本-----------------------
//		var aLi=$(".page3").eq(0).find(".title li");
//		var aPage=$(".page3").eq(0).find(".content");
//		aPage.eq(0).addClass("contshow");
//		aLi.eq(0).addClass("li-hover");
//		aLi.each(function(i){
//			aLi.eq(i).hover(
//				function(){
//					aLi.eq(i).addClass("li-hover").siblings().removeClass("li-hover");
//					aPage.eq(i).addClass("contshow").siblings().removeClass("contshow");
//				}
//			);
//		})
	};
	cont_tab();
	
	//滚动新闻------------------
	function move_news(){
		var timer;
		var i=0;
		function run(){
			timer=setInterval(function(){
				i++;
				if(i==$('.newsList li').size()/2){
					$('.newsList').css({"top":0});
					i=1;
				}
				console.log($('.newsList li').size())
				$('.newsList').animate({
					'top':'-24px'
				},1000,function(){
					$(this).css({"top":0}).children('li').first().appendTo($(this));
				})
			},1000)
		};
		run();
		$('.news .bot').hover(function(){
			clearInterval(timer)
		},function(){
			run();
		})
	};
	move_news();
	
	



});