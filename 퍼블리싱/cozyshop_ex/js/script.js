window.onload = function(){
 
 var swiper = new Swiper(".main_banner .mySwiper", {
        navigation: {
          nextEl: ".main_banner .next",
          prevEl: ".main_banner .prev",
        },
		pagination: {
          el: ".main_banner .swiper-pagination",
		  clickable:true
        },
      });
};