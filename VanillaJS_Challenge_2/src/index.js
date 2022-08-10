import "./styles.css";

const body = document.querySelector("body");
const colors = ["#2c8bd4", "#8f46ab", "#ebbb08"];

const superEventHandler = {
    handleChaingingColor: function() {
        const windowWidth = window.innerWidth;
        const ONEONE = screen.width;
        const ONETWO = ONEONE * (2.3/3);
        const ONETHREE = ONEONE * (1.3/3);

        if (windowWidth <= ONETHREE) {
            body.style.backgroundColor = colors[0];
        } else if (windowWidth > ONETHREE && windowWidth <= ONETWO) {
            body.style.backgroundColor = colors[1];
        } else {
            body.style.backgroundColor = colors[2];
        }
    },
};

window.addEventListener("resize", superEventHandler.handleChaingingColor);