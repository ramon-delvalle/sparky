module sp {
    'use strict';
    class SpTitleBar implements ng.IDirective {
        public restrict: string = 'A';
        public scope = {
            title: '@'
        };
        public controller:string = 'spTitleBarController';
        public templateUrl:string = 'app/modules/title-bar/title-bar.html';

        public link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModel: ISpTitleBarModel) => {
            
        }
    }

    var app = getSp().directive('spTitleBar', [() => new SpTitleBar()]);
}

  