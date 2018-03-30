(function () {

  // your js goes here
  const button = document.querySelector("button");

  button.addEventListener("click", function(element) {
    element.target.classList.toggle("button-danger")
  });

})();
