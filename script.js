const slider_block = document.querySelector('.header__slider-main');
const slider_line = document.querySelector('.slider__line');
const slider_item = document.querySelectorAll('.slider-item');
const slider_image = document.querySelectorAll('.item-image');
const item_span = document.querySelectorAll('.item-span');
const slider_button = document.querySelectorAll('.item-content_button');
const item_text = document.querySelectorAll('.item-content_text');
const item_title = document.querySelectorAll('.item-content_title');
const header_button_link = document.querySelectorAll('.item-content_button-link');
const slider_transform = 100 / slider_item.length;
let count = 0;
let back_count = 0.8;
let slider_off = false;


// when the window loaded

window.addEventListener('load', DOM_loaded);


function DOM_loaded (){
	slider_timer ();
	slider_size ();
	console.log('page loaded');
}



function slider_size () {
	for (let i = 0; i < slider_item.length; i++) {
		slider_item[i].style.height = (slider_block.offsetHeight - 4) + 'px';
		slider_image[i].style.height = slider_block.offsetHeight + 'px';
	}	
}





for (let i = 0; i < slider_button.length;i++){
	slider_button[i].addEventListener('mouseover', ()=> {
		slider_off = true;
	})
	slider_button[i].addEventListener('mouseout', ()=> {
		slider_off = false; 
	})

}

for (let i = 0; i < slider_item.length; i++) {
	let slider_nav_bottom = document.querySelector('.slider-nav__bottom');
	let slider__slide = document.createElement('span'); 
	slider__slide.className = "slider__slide";
	slider_nav_bottom.append(slider__slide);
}
let current_slide = document.querySelectorAll('.slider__slide');

for (let i = 0; i < slider_item.length; i++) {
	let slider__slide_inner = document.createElement('span'); 
	slider__slide_inner.className = "slider__slide_inner";
	current_slide[i].append(slider__slide_inner);
	current_slide[i].setAttribute("tabindex", "0");
}
let current_slide_inner = document.querySelectorAll('.slider__slide_inner');
current_slide_inner[0].classList.add('current');
for(let i = 0; i < current_slide_inner.length; i++){
	current_slide[i].addEventListener('click', ()=>{
		current_slide_inner[count].classList.remove('current');
		slider_timer();
		if ( i > 0){
			return header_slider(count = (i - 1));
		} else {
			return header_slider(count = -1);
		} 
	})
}


item_span[0].classList.add('active');
item_text[0].classList.add('active');
item_title[0].classList.add('active');
slider_button[0].classList.add('active');
header_button_link[0].style.visibility = "visible";


function header_slider (){
	
	if (count === slider_item.length - 1 && !slider_off) {
		slider_block.style.boxShadow = "0px 0px 60px #09bdf200";
		slider_line.style.transition = back_count * slider_item.length + 's';
		slider_line.style.transform = 'translateY(0%)';
		current_slide_inner[count].classList.remove('current');
		current_slide_inner[0].classList.add('current');
		header_button_link[count].style.visibility = "hidden";
		header_button_link[0].style.visibility = "visible";
		count = 0;
		setTimeout( ()=> {
			slider_block.style.boxShadow = '0 0 60px #09BDF2';
		}, slider_item.length * (back_count * 1000));
	}else if (!slider_off) {
		slider_block.style.boxShadow = "0px 0px 60px #09bdf200";
		count++;
		slider_line.style.transition ='2s';
		slider_line.style.transform = 'translateY(-' + slider_transform * count + '%)';
		current_slide_inner[count].classList.add('current');
		header_button_link[count].style.visibility = "visible";
		header_button_link[count - 1].style.visibility = "hidden";
		if (count > 0){
			current_slide_inner[count - 1].classList.remove('current');
		}
		setTimeout( ()=> {
			slider_block.style.boxShadow = '0 0 60px #09BDF2';
			item_span[count].classList.add('active');
			item_text[count].classList.add('active');
			item_title[count].classList.add('active');
			slider_button[count].classList.add('active');
		}, 1800)
	}
}
let timer = false;
let header_interval;

function slider_timer (){
	if (!timer) {
		header_interval = setInterval(header_slider, 6000);
		timer = true;		
	} else {
		clearInterval(header_interval);
		timer = false;
	}
}

//header navigation 
const header_nav_button = document.querySelector(".header-nav-button");
const nav_menu_button = document.querySelector("._media-mobile");
const media_desktop = document.querySelector("._media-desktop");
const button_line = document.querySelectorAll('.line-button');
const header_nav_main = document.querySelector(".header-navigation-main");
const nav_main = document.querySelector(".navigation__link");
const logo_main = document.querySelector(".navigation__logo");
// const header_link = document.querySelectorAll('.link__item-nav');
// for ( let link_item of header_link){
// 	link_item.addEventListener('click', function (event){
// 		event.preventDefault();
// 		const blockID = link_item.getAttribute('href');
// 		document.querySelector('' + blockID).scrollIntoView({
// 			behavior: "smooth",
// 			block: "start"
// 		})
// 		if (window.screen.width <= 844){
// 			header_nav_main.style.transform = 'translateY(-100%)';
// 		}
// 	})
// }

let window_width_var = window.screen.width;
console.log("sceen width = " + window_width_var);
 
window.addEventListener('resize', ()=>{
	window_width_var = window.screen.width;
	media_button (window_width_var);
	setTimeout( ()=> {
		slider_size ();
	}, 500)
});

header_nav_button.addEventListener('click', ()=>{
	 header_nav_main.classList.add('active');
})


function media_button (window_width_var){
	if (window_width_var <= 844) {
		nav_menu_button.addEventListener('click', (event)=> {
			if(event.target.closest('button')){
				header_nav_main.classList.add('active');
			}
			
		})
		media_desktop.addEventListener('click', (event)=> {
			if(event.target.closest('button')){
				header_nav_main.classList.remove('active');
			}
		})
	}else {
		return 0;
	}
}

media_button (window_width_var);



window.addEventListener('scroll', ()=>{
	let scroll_var = window.pageYOffset;
	console.log("scrollY = " + window.pageYOffset);
	console.log("width scroll " + window_width_var);

	alert("inner event offset = " + window.pageYOffset);
	alert("inner event  int = " + scroll_var);

	if ( window_width_var <= 844){
		return 0;
	} 

	if (scroll_var > 600 && window_width_var > 844){
		header_nav_main.classList.add('active');
	} else {
		header_nav_main.classList.remove('active');
	}

}) 





// rate content script
const rate_item = document.querySelectorAll(".rate__item");
const rate_button = document.querySelectorAll(".item__button");
rate_item[1].classList.add("selected");
for(let i = 0; i < rate_button.length; i++){
	rate_button[i].addEventListener('click', ()=>{
		for(let a = 0; a < rate_button.length; a++){
			rate_item[a].classList.remove("selected");	
		}	
		rate_item[i].classList.add("selected");
	});
}
