import "./styles.css";
const selector = document.querySelector(".js-select");


function saveCountries() {
    localStorage.setItem("country", selector.value)
}
selector.addEventListener("input", saveCountries)

function loadCountries() {
    const loadVal = localStorage.getItem("country");
    if (loadVal !== null) {
        selector.value = loadVal
    }
}

loadCountries();