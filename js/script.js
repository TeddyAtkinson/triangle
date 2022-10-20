window.addEventListener("load", function() {
  // console.log("submittop")
  const form = document.getElementById("triangle");
  form.addEventListener("submit", triangleMath);
  // console.log("submitbottom");
  // console.log(num1);
});

//-------------------------------------------------------------
function triangleMath(event) {
  event.preventDefault();

  const num1 = parseInt(document.querySelector("input#input1").value);
  const num2 = parseInt(document.querySelector("input#input2").value);
  const num3 = parseInt(document.querySelector("input#input3").value);
  console.log("TriangleMath");
  console.log(num1);
  if (num1 === num2 && num2 === num3) {
    document.getElementById("output").innerText = "Equallateral";
    document.getElementById("right").removeAttribute("class");
  }
  else if (num1 + num2 <= num3 || num1 + num3 <= num2 || num2 + num3 <= num1){
    document.getElementById("output").innerText = "Not a Triangle, Tri again";
    document.getElementById("circ").removeAttribute("class");
  }
  else if (num1 === num2 || num1 === num3 || num2 === num3) {
  document.getElementById("output").innerText = "Flying-sicilies Triangle";
  document.getElementById("isc").removeAttribute("class");
  }
  else {
    document.getElementById("output").innerText = "Its a Scalene triangle!";
    document.getElementById("scal").removeAttribute("class");
  }
}