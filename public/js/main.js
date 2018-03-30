(function () {

  // your js goes here
  const button = document.querySelectorAll("button");

  button[0].addEventListener("click", function(element) {
    element.target.classList.toggle("button-danger")
  });

  button[1].addEventListener("click", function(element) {
    element.target.innerText="you clicked me";
  });


})();
