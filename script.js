// mobile navbar
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
btn.addEventListener('click', () => {
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
})

// fixed navbar and sidebar in progress and still need to work on mobile nav
const fixedNavbar = document.getElementById('fixedNavbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 800) {
    fixedNavbar.classList.remove('hidden');
    fixedNavbar.classList.add('flex');
    fixedNavbar.classList.add('translate-x-0');
  } else {
    fixedNavbar.classList.add('hidden');
    fixedNavbar.classList.remove('translate-x-0');
  }
});

// Add an event listener to your hamburger icon
document.getElementById("fixedNavbar").addEventListener("click", function() {
  // Toggle the 'visible' class on your sidebar element
  document.getElementById("sidebar").classList.toggle("hidden");
  
  // Toggle the 'translate-x-[-10]' class on your hamburger icon to move it to the left
  document.getElementById("fixedNavbar").classList.toggle("translate-x-[-10]");
  
  // Replace the image with a white 'x' when the sidebar is visible
  if (document.getElementById("sidebar").classList.contains("hidden")) {
    document.getElementById("fixedNavbar").src = "images/icon-hamburger.svg";
  } else {
    document.getElementById("fixedNavbar").src = "images/icon-close.svg";
  }
  
});


// animated text
const animatedText = document.getElementById('animatedText')
const labels = ['SOFTWARE ENGINEER', 'FRONT END DEVELOPER', 'IT STUDENT', 'COMPUTER NERD', 'YOUR NEXT HIRE']

let currentLabelIndex = -1

function updateLabel() {
  // Update the label index to the next label in the array
  currentLabelIndex = (currentLabelIndex + 1) % labels.length
  
  // Get the new label text
  const newLabelText = labels[currentLabelIndex]
  
  // Set the animated text content to the new label text
  animatedText.textContent = newLabelText
  
  // Call updateLabel again after 3 seconds
  setTimeout(updateLabel, 3000)
}
// Start the animation
// updateLabel() 


// scroll up btn
const scrollTopBtn = document.getElementById('scroll-top-btn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});





