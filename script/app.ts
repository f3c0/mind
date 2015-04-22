/// <reference path='EventWatcher.ts' />
/// <reference path='Circle.ts' />

function eventCreator(message:string):IEventHandler {
    return (source) => {
        console.info(message);
        console.info(source);
    }
}

window.addEventListener('load', () => {
    var et = new EventWatcher();

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


window.addEventListener('load', () => {
    var c = new Circle();

    c.onPropertyChange('R', (source) => {
        console.info('changed');
        (<HTMLInputElement>document.getElementById('circle-area')).value = c.Area.toString();
    });

    (<HTMLInputElement>document.getElementById('circle-r')).addEventListener('keyup', (source) => {
        var target = <HTMLInputElement> source.target;
        c.R = parseFloat(target.value);
        //console.info(source);
    })
});

// bind test
window.addEventListener('load', () => {
    var circle = new Circle();
    
    var elements = document.querySelectorAll('[data-bind-value]');
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).addEventListener('keyup', function (source) {
            var target:HTMLInputElement = <HTMLInputElement>source.target;
            eval(target.getAttribute('data-bind-value') + " = '" + target.value + "';");
        });
    }
    
    //var elements = document.querySelectorAll('[data-bind-text]');
    //for (var i = 0; i < elements.length; i++) {
    //    elements.item(i).addEventListener('keyup', function (source) {
    //        var target:HTMLElement = <HTMLElement>source.target;
    //        target.textContent = eval(target.getAttribute('data-bind-text'));
    //    });
    //}
});
