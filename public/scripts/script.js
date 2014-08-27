var blurContainer;
			$(document).ready(function(){
				for(var proc=0; proc<=$('.sectionPage').length*100; proc+=100)
					$(".sectionPage").eq(proc/100).css('top', proc+'%');
				$(".sectionPage").css({'height': $(window).height(), 'width': $(window).width()});
				$(".content-container").clone().removeClass('original').addClass('blur-content').appendTo(".blur-container");
				$(".blur-container .content-container").css({'height': $(window).height(), 'width': $(window).width});
				for(var proc=0; proc<$(".blur-container .content-container").length; proc++)
					$(".blur-container .content-container").eq(proc).css({'left': -$(".blur-container .content-container").eq(proc).closest('.blur-container').offset().left, 'top': -$(".blur-container .content-container").eq(proc).closest('.blur-container').offset().top});
				blurContainer = $('.blur-container').not('.ignore'), bodyReference = $(document);
				
				$('.main-nav ul li').click(function(){
					if($(this).attr('id')=='language')
					{
						if($('.selectLanguage').css('display')=='block')
							$('.selectLanguage').fadeOut(800);
						else $('.selectLanguage').fadeIn(800);
					}
					else if($(this).attr('id')=='stanga')
					{
						$('.reset').show();
						$('.blur-container.menu, .blur-container.menu .glass, .blur-container.menu .content-container, .menu .main-nav').animate({'opacity': 0}, 800, function(){
							$('.panel.left, .panel.left .main-panel').animate({'left': -300}, 800);
							$('.panel.left .content-container').animate({'left': 300}, 800);
						});
					}
					else if($(this).attr('id')=='dreapta')
					{
						$('.reset').show();
						$('.blur-container.menu, .blur-container.menu .glass, .blur-container.menu .content-container, .menu .main-nav').animate({'opacity': 0}, 800, function(){
							$('.panel.right, .panel.right .main-panel').animate({'right': -300}, 800);
							$('.panel.right .content-container').animate({'left': -$(window).width()+300}, 800);
						});
					}
					else $('html, body').animate({scrollTop: $('.content-container.original .sectionPage#'+$(this).attr('id')).offset().top}, 1200);
				}); 
				
				$('.reset').click(function(){
					$('.reset').hide();
					setTimeout(function(){
						$('.blur-container.menu, .blur-container.menu .glass, .blur-container.menu .content-container, .menu .main-nav').animate({'opacity': 1}, 800);
					}, 800);
					$('.panel.left, .panel.left .main-panel').animate({'left': '-601px'}, 800);
					$('.panel.left .content-container').animate({'left': '600px'}, 800);
					$('.panel.right, .panel.right .main-panel').animate({'right': '-601px'}, 800);
					$('.panel.right .content-container').animate({'left': -$(window).width()}, 800);
				});
				
				$('.panel').click(function(){
					if($(this).hasClass('left'))
					{
						$('.panel.left, .panel.left .main-panel').animate({'left': 0}, 800);
						$('.panel.left .content-container').animate({'left': 0}, 800);
					}
					else
					{
						$('.panel.right, .panel.right .main-panel').animate({'right': 0}, 800);
						$('.panel.right .content-container').animate({'left': -$(window).width()+600}, 800);
					}
				});
			});
			
			$('.selectLanguage li').click(function(){
				$('.selectLanguage').fadeOut(800);
			});
			
			$(document).scroll(function(event){
				$('.logo, .logo .main-logo, .logo .glass').css('margin-top', -bodyReference.scrollTop()-115);
				$('.selectLanguage .content-container, .panel.right .content-container').css('top', -bodyReference.scrollTop());
				blurContainer.scrollTop(bodyReference.scrollTop());
			});
			
			window.onresize = function(){
				$(".sectionPage").css({'height': $(window).height(), 'width': $(window).width()});
				$(".blur-container .content-container").css({'width': $(window).width(), 'height': $(window).height()});
				for(var proc=0; proc<$(".blur-container .content-container").length; proc++)
					$(".blur-container .content-container").eq(proc).css({'left': -$(".blur-container .content-container").eq(proc).closest('.blur-container').offset().left, 'top': -$(".blur-container .content-container").eq(proc).closest('.blur-container').offset().top});
			};
			
			$("html, body").bind("mousewheel", function() {
				return false;
			 });