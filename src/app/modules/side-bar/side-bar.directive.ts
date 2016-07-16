module sp {
    'use strict';
    class SpSideBar implements ng.IDirective {
        public restrict: string = 'A';
        public scope = {
            title: '@'
        };
        public controller:string = 'spSideBarController';
        public templateUrl:string = 'app/modules/side-bar/side-bar.html';

        public link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ngModel: ISpSideBarModel) => {
            
        }
    }

    var app = getSp().directive('spSideBar', [() => new SpSideBar()]);
}

  