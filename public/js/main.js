(function () {

  // your js goes here
  const button = document.querySelectorAll("button");

  for (let i=0; i < button.length; i++) {
      button[i].addEventListener("click", function(event) {
        if (i == 0) {
          event.target.classList.toggle("button-danger");
        }
        else if (i == 1) {
          event.target.innerText="you clicked me";
        }
        else if (i == 2) {
          button[1].innerText="button two";
        }
      });
    };

})();

  // button[0].addEventListener("click", function(event) {
  //   event.target.classList.toggle("button-danger")
  // });
  //
  // button[1].addEventListener("click", function(event) {
  //   event.target.innerText="you clicked me";
  // });
  //
  // button[2].addEventListener("click", function() {
  //   button[1].innerText="button two";
  // });
