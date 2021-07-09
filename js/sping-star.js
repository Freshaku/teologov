const star = document.querySelectorAll('.star');
    
window.addEventListener("scroll", function() {
  star.forEach(one => {
    one.style.transform = "rotate("+window.pageYOffset+"deg)";
  })
});