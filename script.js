const logButton = document.getElementById("log");
const errorButton = document.getElementById("error");
const countButton = document.getElementById("count");
const warnButton = document.getElementById("warn");
const assertButton = document.getElementById("assert");
const clearButton = document.getElementById("clear");
const dirButton = document.getElementById("dir");
const dirxmlButton = document.getElementById("dirxml");
const groupStartButton = document.getElementById("groupStart");
const groupEndButton = document.getElementById("groupEnd");
const tableButton = document.getElementById("table");
const timerStartButton = document.getElementById("timerStart");
const timerEndButton = document.getElementById("timerEnd");
const traceButton = document.getElementById("trace");
const globalErrorButton = document.getElementById("globalError");

logButton.addEventListener('click', () => {
    console.log("Console Log Demo");
});

errorButton.addEventListener('click', () => {
    console.error("Console Error Demo");
});

let count = 1;
countButton.addEventListener('click', () => { 
    console.log(`Count Button: ${count}`);
    count++;
});

warnButton.addEventListener('click', () => {
    console.warn("Console Warn Button");
});

assertButton.addEventListener('click', () => {
    const number = 2;
    const errorMsg = "The number does not equal 3";
    console.assert(number===3, "%o", { number, errorMsg });
});

clearButton.addEventListener('click', () => {
    console.clear();
});

dirButton.addEventListener('click', () => {
    console.dir(dirButton);
});

dirxmlButton.addEventListener('click', () => {
    console.dirxml(dirxmlButton);
});

groupStartButton.addEventListener('click', () => {
    console.group("New group");
});

groupEndButton.addEventListener('click', () => {
    console.groupEnd();
});

tableButton.addEventListener('click', () => {
    const table = [
        ["Software Engineering", 110],
        ["Programming Languages", 130],
        ["Advanced Software", 112],
    ];
    console.table(table);
});

timerStartButton.addEventListener('click', () => {
    console.time();
});

timerEndButton.addEventListener('click', () => {
    console.timeEnd();
});

traceButton.addEventListener('click', () => {
    console.trace();
});

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError"; 
    }
}
globalErrorButton.addEventListener('click', () => {
    throw new CustomError("Custom Error");
});

let form = document.querySelector('form');
form.addEventListener('submit', e => {
  try {
    console.log("Trying code");
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    //COMMENT OUT TO CREATE ERROR
    // let operator = document.querySelector('#operator').value; 
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  } catch (error) {
    console.log(`Caught Error: ${error}`);
  } finally {
    console.log("Finally block");
  }
});

TrackJS.track('Testing TrackJS!');

                        