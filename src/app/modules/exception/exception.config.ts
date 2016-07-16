namespace sp {
    'use strict';

    exceptionConfig.$inject = ['$provide'];
    function exceptionConfig($provide:ng.auto.IProvideService){
        $provide.decorator('$exceptionHandler', exceptionHandler)
    }

    exceptionHandler.$inject = ['$delegate'];
    function exceptionHandler($delegate){
        return function (exception:any, cause: any) {
            var errorData = { exception: exception, cause: cause };
            $delegate(exception, cause);
            console.error(exception.message, errorData);
        }
    }

    getSp().config(exceptionConfig);
}