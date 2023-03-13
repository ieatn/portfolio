// navbar
const navBtn = document.querySelector('#navBtn');
  const navClose = document.querySelector('#navClose');
  const mobileNavLinks = document.querySelectorAll('#mobileNav li a');

  navBtn.addEventListener('click', function() {
    document.querySelector('#mobileNav').classList.toggle('hidden');
  });

  navClose.addEventListener('click', function() {
    document.querySelector('#mobileNav').classList.toggle('hidden');
  });

  mobileNavLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      document.querySelector('#mobileNav').classList.toggle('hidden');
    });
  });

const words = ['SOFTWARE ENGINEER', 'FRONT END DEVELOPER', 'COMPUTER NERD', 'YOUR NEXT HIRE'];
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





