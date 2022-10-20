window.addEventListener("load", function() {
  const form = document.getElementById("triangle");
  form.addEventListener("submit", finalComp);
});

//-------------------------------------------------------------
function triangleMath(event) {
  event.preventDefault();
  const num1 = parseInt(document.querySelector("input1"));
  const num2 = parseInt(document.querySelector("input2"));
  const num3 = parseInt(document.querySelector("input3"));

  let result;
  if (num1 === num2 && num2 === num3) {
    "output".innerText = "Equallateral"
  }
  else if (num1 != num2 && num1 != num3 && num2 != num3){
    "output".innerText = "Scallion Triangle"
  }
  else if (num1 === num2 || num1 === num3 || num2 === num3)
  "output".innerText = "Flying-sicilies Triangle"
  else {
    "output".innerText = "Not a triangle, Tri again."
  }
}