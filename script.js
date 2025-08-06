function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// for Typewriter effect

const texts = [
    "CS + MATH STUDENT @ UNSW",
    "TRAINING LEAD @ DEVSOC",
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }

  // Optional: Save preference
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');

  // Default to dark if no preference is saved
  const isDark = savedTheme === 'dark' || savedTheme === null;

  if (isDark) {
    document.body.classList.add('dark');
    const icon = document.getElementById('theme-icon');
    if (icon) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
  }
});

window.onload = typeWriter;