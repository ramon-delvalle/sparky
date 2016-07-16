namespace sp {
    'use strict';

    angular.module('sp', [
        'ngAnimate'
    ]);

    export var getSp: () => ng.IModule = () => {
          return angular.module("sp");
    }
}