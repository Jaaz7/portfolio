// Materialize - Initializers
$(document).ready(function () {
  $(".scrollspy").scrollSpy();
  $(".button-collapse").sideNav({
    menuWidth: 190,
    edge: "left",
    closeOnClick: true,
  });

  $("#contact-email, #contact-email-icon").on("click", function () {
    window.location.href = "mailto:jaazieldovale@outlook.com";
  });
});

// typing animation
var text = [
  ">_Full-Stack Software Developer",
  ">_Back-End Specialist",
];
var container = document.getElementById("cli");
var line = 0;
var i = 0;

function type() {
  if (line < text.length) {
    if (i < text[line].length) {
      var textNode = document.createTextNode(text[line][i]);
      container.appendChild(textNode);
      i++;
      setTimeout(type, 20);
    } else {
      var br = document.createElement("br");
      container.appendChild(br);
      line++;
      i = 0;
      setTimeout(type, 50);
    }
  }
}

type();