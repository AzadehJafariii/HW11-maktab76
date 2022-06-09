// 6 - we have html below :
// <label>Enter Value 1: </label>
// <input type="text" id="val1" />
// <br />
// <br />
// <label>Enter Value 2: </label>
// <input type=".text" id="val2" />
// <br />
// <button onclick="getAdd()">Click To Add</button>
// <p id="result"></p>
// - write a function that add two inputs values and show them below of inputs and
// when the result is Odd the result color is Red and when it is Even the color is Blue.
// note : write your js code in this function :

function getAdd() {
  let value1 = parseInt(document.getElementById("val1").value);
  let value2 = parseInt(document.getElementById("val2").value);
  let sum = value1 + value2;
  let pTag = document.getElementById("result");
  if (sum % 2 == 0) {
    pTag.innerHTML = sum + " is Even";
    pTag.style.color = "blue";
  } else {
    pTag.innerHTML = sum + " is Odd";
    pTag.style.color = "red";
  }
}
