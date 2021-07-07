window.onload = function(){
	document.querySelector(".show_menu").onclick = function(){
		const sidemenu = document.querySelector(".side_menu");
		sidemenu.classList.add('on');
	};
	
	/**메뉴 닫기 */
	document.querySelector(".close_menu").onclick = function(){
		const sidemenu = document.querySelector('.side_menu');
		sidemenu.classList.remove('on');
	}
};