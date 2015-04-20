/// <reference path='IEvent.ts' />
class EventWatcher implements IEvent {

    events:{[index:string]:IEventHandler[]};

    constructor() {
        this.events = {};
    }

    addEventListener(name:string, handler:IEventHandler):void {
        if (this.events[name] === undefined) {
            this.events[name] = [];
        }
        this.events[name].push(handler);
    }

    triggerEvent(name:string, source:any):void {
        if (this.events[name] !== undefined) {
            this.events[name].forEach((handler) => handler(source));
        }
    }

}
