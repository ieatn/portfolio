// navbar
const hamburger = document.getElementById('navBtn');
const closeIcon = document.getElementById('navClose-btn');
const sidebar = document.getElementById('sidebar');

// Add event listener to hamburger button
hamburger.addEventListener('click', function() {
  // Toggle the visibility of the sidebar and update the button icons
  sidebar.classList.toggle('hidden');
  hamburger.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// Add event listener to close icon button
closeIcon.addEventListener('click', function() {
  // Toggle the visibility of the sidebar and update the button icons
  sidebar.classList.toggle('hidden');
  hamburger.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});



const words = ['SOFTWARE ENGINEER', 'FULL STACK DEVELOPER', 'COMPUTER NERD', 'YOUR NEXT HIRE'];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('animatedText').innerHTML += word.shift();
		} else {
			timer = setTimeout(deletingEffect, 1000); // add delay after fully typing the word
			return false;
		};
		timer = setTimeout(loopTyping, 100);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('animatedText').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 50);
	};
	loopDeleting();
};

typingEffect();

// scroll up btn
const scrollTopBtn = document.getElementById('scroll-top-btn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});





