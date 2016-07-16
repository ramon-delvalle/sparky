module sp {
    'use strict';
    export interface ISpSideBarModel {
        
    }

    class SpSideBarController implements ISpSideBarModel {
        
        public static $inject: string[] = [];
        constructor(){
        }

    }

    var app = getSp().controller('spSideBarController', SpSideBarController);
}

  