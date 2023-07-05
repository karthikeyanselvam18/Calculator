let result = "";

function getNum(num) {
  let inputValue = document.getElementById("result");
  inputValue.value += num;
}

function getOpt(opt) {
  let inputValue = document.getElementById("result");
  let lastValue = inputValue.value.slice(-1);
  let inputLength = inputValue.value.length;
  let optList = ["+", "-", "*", "/", "%"];
  if (optList.includes(lastValue)) {
    inputValue.value = inputValue.value.substr(0, inputLength - 1);
    inputValue.value += opt;
  } else {
    inputValue.value += opt;
  }
}

function getDot(opt) {
  let inputValue = document.getElementById("result");
  let lastValue = inputValue.value.slice(-1);
  let inputLength = inputValue.value.length;
  if (lastValue == opt) {
    inputValue.value = inputValue.value.substr(0, inputLength - 1);
    inputValue.value += opt;
  } else if (!inputValue.value.includes(opt)) {
    inputValue.value += opt;
  }
}

function clearInput() {
  document.getElementById("result").value = "";
}

function backSpace() {
  inputValue = document.getElementById("result");
  let inputLength = inputValue.value.length;
  inputValue.value = inputValue.value.substr(0, inputLength - 1);
}

function calc() {
  document.getElementById("result").value = eval(
    document.getElementById("result").value
  );
}

let n = "12345";

console.log(n[n.length - 1]);
