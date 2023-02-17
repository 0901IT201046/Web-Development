let numberElement = document.querySelector(".num");
let IncrementButton = document.querySelector(".btn1");
let ResetButton = document.querySelector(".btn2");

var count = 0;

numberElement.innerHTML = count;

const handleIncrement = () =>{
    count++;
    numberElement.innerHTML = count;
};

const handleReset = () =>{
    count = 0;
    numberElement.innerHTML = count;
};

IncrementButton.addEventListener("click", handleIncrement);
ResetButton.addEventListener("click",handleReset);
