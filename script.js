const slider_block = document.querySelector('.header-slider-main');
const slider_line = document.querySelector('.slider__line');
const slider_item = document.querySelectorAll('.slider-item');
const slider_image = document.querySelectorAll('.item-image');
const item_span = document.querySelectorAll('.item-span');
const slider_button = document.querySelectorAll('.item-content_button');
const item_text = document.querySelectorAll('.item-content_text');
const item_title = document.querySelectorAll('.item-content_title');
const slider_transform = 100 / slider_item.length;
let count = 0;
let back_count = 0.8;
let slider_off = false;



function slider_size () {
	for (let i = 0; i < slider_item.length; i++) {
		slider_item[i].style.height = (slider_block.offsetHeight - 4) + 'px';
		slider_image[i].style.height = slider_block.offsetHeight + 'px';
	}	
}
slider_size ();
window.addEventListener('resize', ()=>{
	setTimeout( ()=> {
		slider_size ();
	}, 500)
});



for (let i = 0; i < slider_button.length;i++){
	slider_button[i].addEventListener('mouseover', ()=> {
		slider_off = true;
	})
	slider_button[i].addEventListener('mouseout', ()=> {
		slider_off = false; //false -slider on
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

function header_slider (){
	
	if (count === slider_item.length - 1 & !slider_off) {
		slider_block.style.boxShadow = "0px 0px 60px #09bdf200";
		slider_line.style.transition = back_count * slider_item.length + 's';
		slider_line.style.transform = 'translateY(0%)';
		current_slide_inner[count].classList.remove('current');
		current_slide_inner[0].classList.add('current');
		count = 0;
		setTimeout( ()=> {
			slider_block.style.boxShadow = '0 0 60px #09BDF2';
		}, slider_item.length * (back_count * 1000));
	}else if (!slider_off) {
		slider_block.style.boxShadow = "0px 0px 60px #09bdf200";
		count++;
		slider_line.style.transition ='2s';
		slider_line.style.transform = 'translateY(-' + slider_transform*count + '%)';
		current_slide_inner[count].classList.add('current');
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
slider_timer();

