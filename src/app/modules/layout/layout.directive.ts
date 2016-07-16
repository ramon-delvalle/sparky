module sp {
    'use strict';
    class SpLayout implements ng.IDirective {
        public restrict: string = 'A';
        public scope = {
        };
        public controller:string = 'spLayoutController';
        public controllerAs:string = 'vm';
        public templateUrl:string = 'app/modules/layout/layout.html';

        public link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModel: any) => {
            
        }
    }

    var app = getSp().directive('spLayout', [() => new SpLayout()]);
}

  