
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    Loop: true,
    margin: 0,
    nav: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      1000: {
        items: 3
      }
    }

  });
});