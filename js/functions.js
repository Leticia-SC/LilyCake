$(function(){
//FUNCAO SCROLL QUEMSOU - INICIO	
	var directory = '/Curso Webmaster/Portfólio/LilyCake/'

	checkUrl();

	$('[goto=quemsou]').click(function(){
		location.href=directory+'sobre.html?quemsou';
		return false;
	})

	function checkUrl(){
		var url = location.href.split('/');
		var curPage = url[url.length-1].split('?');

		if(curPage[1] != undefined && curPage[1] == 'quemsou'){
			$('header nav a').css('font-weight','300');
			$('[goto=quemsou]').css('font-weight','400');
			$('html,body').animate({'scrollTop':$('#quemsou').offset().top});
		}
	}
//FUNCAO SCROLL QUEMSOU - FIM	





//FUNCAO MENU RESPONSIVO - INICIO
	$('.mobile-menu').click(function(){
		$(this).find('ul').slideToggle();
	})
//FUNCAO MENU RESPONSIVO - FIM





//FUNCAO SLIDE DEPOIMENTOS - INICIO
	var amtDepoimento = $('.depoimento-single > p').length;
	var curIndex = 0;
	var amtDepoimentoNome = $('.nome-depoimento > p').length;
	var curNome = 0;

	navegarSlides();
	iniciarDepoimentos();
	iniciarDepoimentosNome();

	function navegarSlides(){
		$('[next]').click(function(){
			curIndex++;
			curNome++;
			if(curIndex >= amtDepoimento)
				curIndex = 0;
			$('.depoimento-single > p').hide();
			$('.depoimento-single > p').eq(curIndex).fadeIn();

			if(curNome >= amtDepoimentoNome)
				curNome = 0;
			$('.nome-depoimento > p').hide();
			$('.nome-depoimento > p').eq(curNome).fadeIn();
		})

		$('[prev]').click(function(){
			curIndex--;
			curNome--;
			if(curIndex < 0)
				curIndex = amtDepoimento-1;
			$('.depoimento-single > p').hide();
			$('.depoimento-single > p').eq(curIndex).fadeIn();
			if(curNome < 0)
				curNome = amtDepoimentoNome-1;
			$('.nome-depoimento > p').hide();
			$('.nome-depoimento > p').eq(curNome).fadeIn();
		})
	}

	function iniciarDepoimentos(){
		$('.depoimento-single > p').hide();
		$('.depoimento-single > p').eq(0).show();
	}

	function iniciarDepoimentosNome(){
		$('.nome-depoimento > p').hide();
		$('.nome-depoimento > p').eq(0).show();
	}
//FUNCAO SLIDE DEPOIMENTOS - FIM





//FUNCAO SLIDE SERVIÇOS - INICIO
	$('.sessao5 .container .servicos .box2').slick({	
		slidesToShow: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 2000,
	})
//FUNCAO SLIDE SERVIÇOS - FIM





//FUNCAO SLIDE PORTFOLIO - INICIO
	$('.slide').slick({	
		slidesToShow: 4.95,
		centerMode: true,
		arrows: true,
		infinite:true,
		prevArrow: '<i data-role="none" class="fas fa-angle-left"></i>',
		nextArrow: '<i data-role="none" class="fas fa-angle-right"></i>',
		responsive: [
		{
			breakpoint: 1130,
			settings:{
				slidesToShow: 3.92,
			}
		},
		{
			breakpoint: 950,
			settings:{
				slidesToShow: 3.6,
			}
		},
		{
			breakpoint: 870,
			settings:{
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 770,
			settings:{
				slidesToShow: 2.63,
			}
		},
		{
			breakpoint: 700,
			settings:{
				slidesToShow: 1.91,
			}
		},
		{
			breakpoint: 580,
			settings:{
				slidesToShow: 1.6,
			}
		},
		{
			breakpoint: 520,
			settings:{
				slidesToShow: 1.31,
			}
		},
		{
			breakpoint: 460,
			settings:{
				slidesToShow: 1,
			}
		},

		]
	})
//FUNCAO SLIDE PORTFOLIO - FIM





//FUNCAO POP-UP - INICIO (INDEX)
	$('.1').click(function(){
		Swal.fire({
	  imageUrl: 'images/bolo_laranja.jpg',
	  title: 'Bolo de Laranja',
	  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sodales justo. Vivamus luctus nec purus sed tempus. Suspendisse vitae sodales justo. Vivamus luctus nec purus sed tempus.',
	  confirmButtonColor: '#ea8d93',
	})
	})

	$('.2').click(function(){
		Swal.fire({
	  imageUrl: 'images/bolo_chocolate.jpg',
	  title: 'Bolo de Chocolate',
	  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sodales justo. Vivamus luctus nec purus sed tempus.Suspendisse vitae sodales justo. Vivamus luctus nec purus sed tempus.',
	  confirmButtonColor: '#ea8d93',
	})
	})

	$('.3').click(function(){
		Swal.fire({
	  imageUrl: 'images/bolo_red.jpg',
	  title: 'Bolo Red Velvet',
	  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sodales justo. Vivamus luctus nec purus sed tempus. Suspendisse vitae sodales justo. Vivamus luctus nec purus sed tempus.',
	  confirmButtonColor: '#ea8d93',
	})
	})
//FUNCAO POP-UP -FIM (INDEX)





//FUNCAO POP-UP - INICIO (PORTFOLIO)
	$('.slide-single').click(function(){
		Swal.fire({
	  imageUrl: 'https://placeholder.pics/svg/300x300',
	  title: 'Nome do Bolo',
	  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae sodales justo. Vivamus luctus nec purus sed tempus.',
	  confirmButtonColor: '#ea8d93',
	})
	})
	
//FUNCAO POP-UP - FIM (PORTFOLIO)	
})