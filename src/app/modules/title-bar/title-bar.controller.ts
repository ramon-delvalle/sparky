module sp {
    'use strict';
    export interface ISpTitleBarModel {
        
    }

    class SpTitleBarController implements ISpTitleBarModel {
        
        public static $inject: string[] = [];
        constructor(){
        }

    }

    var app = getSp().controller('spTitleBarController', SpTitleBarController);
}

  