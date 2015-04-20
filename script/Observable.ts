/// <reference path='EventWatcher.ts' />

class Observable extends EventWatcher {

    propertyChanged(name:string):void {
        this.triggerEvent('propertyChanged', name);
    }
}