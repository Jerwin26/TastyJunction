const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideIndex = 0

function showSlide(index) {
  if (index < 0) {
    slideIndex = slider.children.length - 1;
  } else if (index >= slider.children.length) {
    slideIndex = 0
  }

  for (let i = 0; i < slider.children.length; i++) {
    slider.children[i].style.display = "none"
  }

  slider.children[slideIndex].style.display = "block"
}

function nextSlide() {
    showSlide(++slideIndex)
  }
  
  function prevSlide() {
    showSlide(--slideIndex)
  }
  
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
  setInterval(nextSlide, 3000)
  


showSlide(slideIndex);
