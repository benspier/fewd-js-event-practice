//iife
(function () {

//selectors
  const buttonRow = document.querySelector('.row');
  const buttons = document.querySelectorAll('button');

//method
  function buttonAction(event) {
    if (event.target === buttons[0]) {
      buttons[0].classList.toggle('button-danger');
    }
    else if (event.target === buttons[1]) {
      buttons[1].innerText='you clicked me';
    }
    else if (event.target === buttons[2]) {
      buttons[1].innerText='button two';
    };
  };

//event
  buttonRow.addEventListener('click', buttonAction);

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
