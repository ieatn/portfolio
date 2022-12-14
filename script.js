const title = document.getElementById('text')
const text = "Front End Developer."
let index = 0;
const display = () => {
    title.textContent = text.slice(0, index)
    index++;
    if (index > text.length * 3) {
        index = 0;
    }
}

setInterval(display, 100)
