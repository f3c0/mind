/// <reference path='IEventHandler.ts'/>
interface IEvent {
    events: {[index:string]:IEventHandler[]};

    addEventListener(name:string, handler:IEventHandler):void;

    triggerEvent(name:string, source:any):void;
}