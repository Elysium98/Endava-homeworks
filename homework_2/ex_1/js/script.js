const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
display.innerText = "0";

buttons.forEach((item) => {
  item.onclick = () => {
    if (display.innerText === "0") {
      display.innerText = "";
    }
    if (item.value === "clear") {
      display.innerText = 0;
    } else if (item.value === "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.value === "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText === "" && item.value === "equal") {
      display.innerText = 0;
    } else {
      display.innerText += item.value;
    }
  };
});
