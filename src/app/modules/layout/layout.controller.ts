module sp {
    'use strict';
    export interface ISpLayoutModel {
        title: string,
        sideBarTitle: string
    }

    class SpLayoutController implements ISpLayoutModel {
        
        public title: string = undefined;
        public sideBarTitle: string = undefined;

        public static $inject: string[] = [];
        constructor(){
            // @TODO: create config
            this.title = 'Sparky';
            this.sideBarTitle = 'Navigation';
        }

    }

    var app = getSp().controller('spLayoutController', SpLayoutController);
}

  