document.addEventListener("DOMContentLoaded", () => {
  function getCharacter() {
    //Declare the input

    const input = document.querySelector(".input").value;

    //Calculate the input length

    const length = input.length;

    //Declare the input length as the input

    const result = length;

    //Display the result

    alert("length of input:" + result);
  }
  document.querySelector(".button").addEventListener("click", getCharacter);
});
