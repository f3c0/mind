/// <reference path='EventTest.ts' />

function eventCreator(message) {
    return (source) => {
        console.info(message);
        console.info(source);
    }
}

window.addEventListener('load', () => {
    var et = new EventTest();

    et.addEventListener("click", eventCreator("click 1"));
    et.addEventListener("select", eventCreator("select 1"));
    et.addEventListener("click", eventCreator("click 2"));

    et.triggerEvent("click", "HelloClick");
    et.triggerEvent("select", "HelloSelect");
    et.triggerEvent("click", "HelloClick Again");

    (<HTMLButtonElement[]> Array.prototype.slice.call(document.getElementsByTagName('button'))).forEach(function (button) {
        button.addEventListener("click", (source) => et.triggerEvent("click", source));
    });
});