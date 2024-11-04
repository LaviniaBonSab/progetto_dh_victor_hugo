// JAVASCRIPT 


// INDEX
// slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}







// PAGINA DEL CATALOGO
// Accordion

<script>
  // Select all elements with the class "accordion"
  const accordions = document.querySelectorAll(".accordion");

  // Loop through each accordion button and add a click event listener
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function() {
      // Toggle the "active" class to highlight the accordion button
      this.classList.toggle("active");

      // Get the next sibling element, which is the panel to show/hide
      const panel = this.nextElementSibling;
      
      // Toggle the panel's display property
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  });
</script>
