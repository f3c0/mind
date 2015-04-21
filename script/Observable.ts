/// <reference path='EventWatcher.ts' />

class Observable extends EventWatcher {

    private static getPropertyChangedEventName(property:string):string {
        return 'propertyChanged[' + property + ']';
    }

    propertyChanged(property:string):void {
        this.triggerEvent(Observable.getPropertyChangedEventName(property), property);
    }

    onPropertyChange(property:string, handler:IEventHandler):void {
        this.addEventListener(Observable.getPropertyChangedEventName(property), handler);
    }
}