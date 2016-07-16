module sp {
    'use strict';
    export interface ISpLayoutModel {
        title: string
    }

    class SpLayoutController implements ISpLayoutModel {
        
        public title: string = undefined;

        public static $inject: string[] = [];
        constructor(){
        }

    }

    var app = getSp().controller('spLayoutController', SpLayoutController);
}

  