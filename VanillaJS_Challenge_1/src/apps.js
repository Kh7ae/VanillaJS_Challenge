// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const title = document.querySelector("h1");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const superEventHandler = {
    handleMouseHere: function() {
        title.innerText = "The mouse is here!";
        title.style.color = colors[0];
    },

    handleMouseGone: function() {
        title.innerText = "The mouse is gone!";
        title.style.color = colors[1];
    },
    
    handleWindowResize: function() {
        title.innerText = "You just resized!";
        title.style.color = colors[2];
    },

    handleMouseRightClick: function() {
        title.innerText = "That was a right click!";
        title.style.color = colors[3];
    }
};


// addEventListner: target.addEventListner("eventType", "eventHandler")
// target: 등록할 요소, 즉 documment에서 읽어온 input 요소
// eventType은 eventType, eventHandler는 등록할 eventHandler
// eventType의 종류는 구글링해서 필요할 때 마다 찾아봐야 할듯 ..

title.addEventListener("mouseenter", superEventHandler.handleMouseHere);
title.addEventListener("mouseleave", superEventHandler.handleMouseGone);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleMouseRightClick);
