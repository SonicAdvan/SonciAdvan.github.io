$(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > $('.nav').offset().top) {
			$('.hd').show();
		} else {
			$('.hd').hide();
		}
	})

})

/*轮播图开始*/
$(function() {
	var li = $('.banner .list li a');
	var btns = $('.banner .btn li');

	function banner(index) {
		$('.banner .list li').eq(index).addClass('on').siblings().removeClass('on');
		$('.banner .btn li').eq(index).addClass('on').siblings().removeClass('on');
	}

	li.each(function(i) {
		$(this).css({
			background: 'url(img/banner' + i + '.jpg) no-repeat center 0'
		});
	});

	btns.click(function() {
		var index = $(this).index();
		banner(index);
	});

	var num = 0;
	$('.left').click(function() {
		num--;
		if(num < 0) {
			num = $('.list li').length - 1;
		}
		banner(num)
	})

	$('.right').click(function() {
		num++
		if(num > $('.list li').length - 1) {
			num = 0;
		}
		banner(num)
	})

	function play() {
		num++
		if(num > $('.list li').length - 1) {
			num = 0;
		}
		banner(num)
	}

	var time = setInterval(play, 5000);

	$('.banner').hover(function() {
		clearInterval(time);
	}, function() {
		time = setInterval(play, 5000);
	})
})

/*套图显示*/
$(function() {
	$('.series li').hover(function() {
		$(this).siblings().children('a').stop().fadeTo(50, 0.4);
	}, function() {
		$(this).siblings().children('a').stop().fadeTo(50, 1);
	})

})

/*外景*/
$(function() {
	$('.locationBottom li').hover(function() {
		$(this).stop().fadeTo(30, 0.6);
	}, function() {
		$(this).stop().fadeTo(30, 1);
	})
})

/*乐品美学馆*/
$(function() {
	$('.smallshow li').hover(function() {
		var index = $(this).index();
		$('.bigshow li').eq(index).addClass('on').siblings().removeClass('on')

		var num = $('.smallshow li').length;
		var width = $('.smallshow').width() / num;
		$('.smallshow span').eq(0).stop().animate({
			left: index * width
		}, 300)
	}, function() {
		$('.smallshow span').eq(0).stop().animate({
			left: 0
		}, 300)
		$('.bigshow li').eq(0).addClass('on').siblings().removeClass('on');
	})
})

/*维纳荣耀馆*/
$(function() {
	$('.smallshow1 li').hover(function() {
		var index = $(this).index();

		$('.bigshow1 li').eq(index).addClass('on').siblings().removeClass('on');
		var num = $('.smallshow1 li').length;
		var width = $('.smallshow1').width() / num;
		$('.smallshow1 span').eq(0).stop().animate({
			left: index * width
		}, 300)
	}, function() {
		var index = $(this).index();
		$('.smallshow1 span').eq(0).stop().animate({
			left: 0
		}, 300)
		$('.bigshow1 li').eq(index).addClass('on').siblings().removeClass('on');
	})
})

/*最新客片欣赏*/
$(function() {
	$('.images li').hover(function() {

		$(this).stop().fadeTo(500, 0.5).children('span').stop().animate({
			left: 0
		}, 500).show();
	}, function() {
		$(this).stop().fadeTo(500, 1).children('span').hide().stop().animate({
			left: '-335px'
		}, 500);
	})

})

/*新闻动态传数据*/
$(function() {
	var data = [{
		pic: 'fw1',
		title: '杭州婚纱照哪里拍摄的最好，效果更可以...',
		person: 'BY LOMARIC Team',
		type: 'NEWS',
		date: 'Jan 10 2016 ',
		con: '新人的美丽不仅只是外表的美丽，新人的美丽往往还会从她们的心里绽放出来，许多的新人为什么有...'
	}, {
		pic: 'fw2',
		title: '杭州婚纱摄影工作室的排名是怎样的呢?',
		person: 'BY LOMARIC Team',
		type: 'NEWS',
		date: 'Jan 09 2016 ',
		con: '现在结婚的新人是非常多的，马上就要过年了，大家都想要过一个团团圆圆的好年。所以呢，新人...'
	}, {
		pic: 'fw3',
		title: '杭州婚纱摄影工作室的排名是怎样的呢?',
		person: 'BY LOMARIC Team',
		type: 'NEWS',
		date: 'Jan 08 2016 ',
		con: '去过浙江杭州的朋友们，一定都对杭州的美景非常的流连忘返，其实去杭州不但是可以旅游的，还可...'
	}, {
		pic: 'fw4',
		title: '杭州婚纱摄影排名哪家最靠谱？',
		person: 'BY LOMARIC Team',
		type: 'NEWS',
		date: 'Jan 07 2016 ',
		con: '每个新娘的心中都会有一个美丽的婚纱梦，梦想着自己可以找到一个爱自己一辈子的人，呵护照顾...'
	}];

	var txt = '';
	for(var i = 0; i < data.length; i++) {
		var tmp = data[i];
		txt += '<li><img src="img/' + tmp.pic + '.jpg" alt="" />';
		txt += '<div class="container"><h3>' + tmp.title + '</h3>';
		txt += '<span>' + tmp.person + '</span><span class="btn01">' + tmp.type + '</span>';
		txt += '<span class="btn02">' + tmp.date + '</span><p>' + tmp.con + '</p></div></li>';
	}

	$('.press').html(txt);

})

/*新闻传数据结束*/

/*注册信息*/
$(function() {
	$('.name').blur(function() {

		var uname = new RegExp(/^[a-zA-Z0-9_]{3,16}$/);
		if(uname.test($('.name').val())) {
			$('.name').css({
				border: '1px solid greenyellow'
			});
			$('.ts').eq(0).html('允许此用户名！！');
		} else {
			$('.name').css({
				border: '1px solid red'
			})
			$('.ts').eq(0).html('请输入正确的用户名！！');
		}

	})

	$('.tel').blur(function() {

		var phone = new RegExp(/^(13|14|15|18)[0-9]{9}$/);
		if(phone.test($('.tel').val())) {
			$('.tel').css({
				border: '1px solid greenyellow'
			});
			$('.ts').eq(1).html('允许该手机！！');
		} else {
			$('.tel').css({
				border: '1px solid red'
			})
			$('.ts').eq(1).html('请输入正确的手机号！！');
		}

	})

	$('.showtime a').click(function() {
		var ts1 = $('.ts').eq(0).html();
		var ts2 = $('.ts').eq(1).html();
		if(ts1 == '允许该手机！！' || ts2 == '请输入正确的手机号！！') {
			alert('信息填写错误，请重新填写')
		}
	})
})

/*回到顶部*/
$(function() {
	$(window).scroll(function() {
		if($(window).scrollTop() > 500) {
			$('.backTo').show();
		} else {
			$('.backTo').hide();
		}
	})

	$('.backTo').click(function() {
		$('html,body').animate({
			scrollTop: 0
		}, 1000)
	})
})

/*楼层*/
$(function() {
	var floor = $('.loactionTop h2');
	var fArr = floor.toArray();
	fArr.reverse();
	floor = $(fArr);

	$(window).scroll(function() {

		var tops1 = $('.loactionTop h2').eq(0).offset().top;

		var tops2 = $('.offer').offset().top;

		if($(window).scrollTop() > tops1 && $(window).scrollTop() < tops2) {
			$('.floor').show();
		} else {
			$('.floor').hide();
		}

		var sTop = $(this).scrollTop();
		floor.each(function() {
			var curTop = $(this).offset().top;
			if(sTop >= curTop) {

				var num = $('.loactionTop h2').toArray().indexOf(this, 0);

				$('.floor li').eq(num).addClass('active').siblings().removeClass('active');

				return false;
			}

		})
	})

	$('.floor li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		var tit = $('.loactionTop h2');

		var fArr = tit.toArray();
		var arr = [];
		for(var i = 0; i < fArr.length; i++) {
			arr.push(fArr[i].offsetTop);
		}

		$('html,body').animate({
			scrollTop: arr[index]
		}, 1)
	})

})