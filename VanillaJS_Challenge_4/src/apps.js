import "./styles.css";

const clock = document.querySelector(".js-clock");

function getTime() {
    const dDate = new Date("2022-12-24");
    const nowDate = new Date();
    const diff = dDate - nowDate

    const diffDay = String(Math.floor(diff / (1000*60*60*24))).padStart(2, "0");
    const diffHour = String(Math.floor((diff / (1000*60*60)) % 24)).padStart(2, "0");
    const diffMin = String(Math.floor((diff / (1000*60)) % 60)).padStart(2, "0");
    const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2, "0");

    clock.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`
};

getTime();
setInterval(getTime, 1000);
