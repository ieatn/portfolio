// navbar
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
btn.addEventListener('click', () => {
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
})

// animated text
const animatedText = document.getElementById('animatedText')
const labels = ['Front End Developer', 'IT Student', 'Computer Nerd', 'Your Next Hire']

let currentLabelIndex = -1

function updateLabel() {
  // Update the label index to the next label in the array
  currentLabelIndex = (currentLabelIndex + 1) % labels.length
  
  // Get the new label text
  const newLabelText = labels[currentLabelIndex]
  
  // Set the animated text content to the new label text
  animatedText.textContent = newLabelText
  
  // Call updateLabel again after 5 seconds
  setTimeout(updateLabel, 3000)
}

updateLabel() // Start the animation





// scroll up btn
const scrollTopBtn = document.getElementById('scroll-top-btn');

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});