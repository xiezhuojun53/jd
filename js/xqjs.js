$(function(){

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
	

//放大镜------------------

	function big_pic(){
		$(".big-pic").mousemove(function(ev){
			$(".move-pic").show();
			$(".cbigpic").show();
			var c_l=$(this).offset().left;
			var c_t=$(this).offset().top;
			var s_w=$(".move-pic").width();
			var s_h=$(".move-pic").height();
			var l=ev.pageX-c_l-s_w/2;
			var t=ev.pageY-c_t-$(".move-pic").height()/2;
			
			$('.cbigpic').children('img').prop('src',$(this).children('img').prop('src'))
			
			if(l<0){
				l=0
			};
			if(t<0){
				t=0
			};
			if(l>$(this).width()-s_w){
				l=$(this).width()-s_w
			};
			if(t>$(this).height()-s_h){
				t=$(this).height()-s_h
			};
			$(".move-pic").css({"left":l,"top":t});
			$(".cbigpic img").css({"left":-l*2,"top":-t*2});
			$(".big-pic").mouseleave(function(){
				$(".move-pic").hide();
				$(".cbigpic").hide();
			})
			
			
			
		});
		
		var aLi=$(".small_pic li");
		aLi.each(function(i){
			aLi.eq(i).click(function(){
				$(this).addClass("act-li").siblings().removeClass("act-li");
				$(".big-pic img").prop('src',$(this).children('img').prop('src'))
		
			})
		});
		
		var num=0;
		
		var aLii=$(".phone li");
		aLii.eq(0).click(function(){
			$(this).addClass("li-actvt").siblings().removeClass("li-actvt");
			$(".small_pic").css({"left":0});
			$(".small_pic li").eq(0).addClass("act-li").siblings().removeClass("act-li");
			$(".big-pic img").prop('src',$(".small_pic li").eq(0).children("img").prop('src'))
			num=0;
		});
		aLii.eq(1).click(function(){
			$(this).addClass("li-actvt").siblings().removeClass("li-actvt");
			$(".small_pic").css({"left":-379});
			$(".small_pic li").eq(5).addClass("act-li").siblings().removeClass("act-li");
			$(".big-pic img").prop('src',$(".small_pic li").eq(5).children("img").prop('src'));
			num=-379;
		});
		
		
		function click_left(){
			num=num+54;
			if(num>=0){
				num=0
			};
			$(".small_pic").css({"left":0+num});
		};
		function click_right(){
			num=num-54;
			if(num<-378){
				num=-378;
			}
			$(".small_pic").css({"left":0+num});
		1};
		$(".click-left").click(function(){
			click_left();
		});
		$(".click-right").click(function(){
			click_right()
		});
		
		
		
		
		
		
		
	};
	big_pic();
	
	
	
//购物车---------------------

	function buy(){
		var j=1
		$(".btn-top").click(function(){
			j++;
			$(".text-buy").attr("value",j)
		});
		$(".btn-bot").click(function(){
			j--;
			if(j<=1){
				j=1
			};
			$(".text-buy").attr("value",j)
		});
		$(".text-buy").keyup(function(){
			var val=$(".text-buy").val();
			$(".text-buy").attr("value",val)
		});
		$(".g-btn").click(function(){
			alert("添加购物车成功！");
		})
	};

	buy();


//选项卡------------------------------------


	function nav_tab(){
		$('.renqidp_t li').click(function(){
			$(this).addClass('lili').siblings().removeClass('lili')	
		})
		$('.renqidp_t li').eq(1).click(function(){
	        $('.lllll').hide(200)
			$('.kkkkk').show(500)	
		})
		$('.renqidp_t li').eq(0).click(function(){
	        $('.lllll').show(200)
			$('.kkkkk').hide(200)	
		})
	};
	nav_tab()



//分期-----------------------

	function clickFen(){
		var aLi=$(".choose-bot ul li");
		aLi.each(function(i){
			aLi.eq(i).click(function(){
				$(this).toggleClass("active").siblings().removeClass("active");
			})
		})
	};
	clickFen();













})