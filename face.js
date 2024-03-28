//  SECTION ONE

const pics = document.querySelector('.profile-pics');

const DarkMode = document.querySelector('.Dark-mode');

const annex = document.querySelector('.section-threeannex');

const circle = document.querySelector('.circle');

const content = document.querySelectorAll('.section-content');

// SECTION TWO

const sectiontwo = document.querySelectorAll('.section-two1');
const sectiontwo11 = document.querySelector('.section-two11'); //
const public = document.querySelector('.public'); //
const writeup = document.querySelector('.writeup');
const thumbsup = document.querySelector('.thumbsup');

// SECTION  THREE

const sectionThree = document.querySelector('.section-three');
const eventitems = document.querySelectorAll('.event-items');
const eventitems1 = document.querySelectorAll('.event-item1');
const eventitems2 = document.querySelectorAll('.event-item2');
const eventnumber = document.querySelectorAll('.event-number');
const eventmonth = document.querySelectorAll('.event-month');
const map = document.querySelectorAll('.fa-location-dot');
const advert = document.querySelectorAll('.Advert');
const events = document.querySelectorAll('.events > a');
const spans = document.querySelectorAll('.events > span');

console.log(events);

// content.forEach(function (item) {
// 	 item.style.color = 'white';
// })

const itemone = document.querySelectorAll('.items-one');
const shortcuts = document.querySelectorAll('.Shortcuts');

let isDarkMode = false;

let display = false;

let colorCode = false;

pics.addEventListener('click', function () {
	display = !display; // Why do we have to place the display here//

	if (display === true) {
		annex.style.height = '300px';
	} else {
		annex.style.height = '0';
	}

	console.log(annex);
});

DarkMode.addEventListener('click', function () {
	isDarkMode = !isDarkMode;
	console.log(DarkMode);
	if (isDarkMode === true) {
		circle.style.backgroundColor = '#222';
		document.body.style.backgroundColor = '#222';
		document.body.style.Color = '#222';
		circle.style.right = '0';
		sectionThree.style.backgroundColor = '#222';
		sectionThree.style.Color = 'white';

		// spans.style.backgroundColor = '#222';
		// spans.style.Color = 'white';

		content.forEach((item) => (item.style.color = 'white'));
		itemone.forEach((item) => (item.style.color = 'white'));
		sectiontwo.forEach((item) => (item.style.backgroundColor = '#222'));
		sectiontwo.forEach((item) => (item.style.color = '#fff'));
		advert.forEach((item) => (item.style.backgroundColor = '#222'));
		advert.forEach((item) => (item.style.color = '#fff'));
		eventitems1.forEach(
			(item) =>
				(item.style.boxShadow = '0 0 5px 2px rgba(225, 225, 225, 1)')
		);
		eventnumber.forEach((item) => (item.style.color = '#fff'));
		map.forEach((item) => (item.style.color = '#fff'));
  events.forEach((item) => (item.style.backgroundColor = '#222'));
  events.forEach((item) => (item.style.color = '#fff'));

	} else {
		console.log(sectiontwo);
		circle.style.backgroundColor = '#fff';
		circle.style.right = 'auto';
		document.body.style.backgroundColor = 'white';
		document.body.style.Color = 'black';
		sectionThree.style.backgroundColor = 'white';
		sectionThree.style.Color = 'black';

		// spans.style.backgroundColor = '#white';
		// spans.style.Color = '#222';
		// sectiontwo.style.backgroundColor = 'whitesmoke';
		// sectiontwo.style.color = '#000';
		content.forEach((item) => (item.style.color = 'black'));
		itemone.forEach((item) => (item.style.color = 'black'));
		sectiontwo.forEach((item) => (item.style.backgroundColor = '#fff'));
		sectiontwo.forEach((item) => (item.style.color = '#222'));
		advert.forEach((item) => (item.style.backgroundColor = '#fff'));
		advert.forEach((item) => (item.style.color = '#222'));

		events.forEach((item) => (item.style.backgroundColor = '#fff'));
		events.forEach((item) => (item.style.color = '#222'));

		eventitems1.forEach(
			(item) =>
				(item.style.boxShadow = '0 0 5px 2px rgba(225, 225, 225, 1)')
		);
		map.forEach((item) => (item.style.color = '#222'));
		eventnumber.forEach((item) => (item.style.color = '#222'));
		// content.style.Color = 'white';
		// itemone.style.Color = 'white';
		// shortcuts.style.Color = 'white';
	}
});

// const content = document.querySelectorAll('.section-content');
// const itemone = document.querySelectorAll('.items-one');
// const shortcuts = document.querySelectorAll('.Shortcuts');
