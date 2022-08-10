// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const maxNum = document.querySelector("h4 span");
const slider = document.querySelector(".jsRange");
const inputNum = document.querySelector(".guessField");
const submitBtn = document.querySelector(".guessSubmit");
const result = document.querySelector(".result");
const winOrLose = document.querySelector(".winOrLose");

function handleChange() {
    maxNum.innerText = slider.value;
}

function handleSubmit() {
    const inputNumVal = inputNum.value;
    const machineNumVal = String(Math.floor(Math.random() * slider.value));
    result.innerText = `You chose ${inputNumVal}, the machine chose ${machineNumVal}`;

    if (inputNumVal === machineNumVal) {
        winOrLose.innerText = "You won!"
    } else {
        winOrLose.innerText = "You lose!"
    }
}

slider.addEventListener("input", handleChange);
// click, enter 이벤트 등록
submitBtn.addEventListener("click", handleSubmit);
inputNum.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
    }
});