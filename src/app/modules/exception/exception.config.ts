namespace sp {
    'use strict';

    exceptionConfig.$inject = ['$provide'];
    function exceptionConfig($provide:ng.auto.IProvideService){
        $provide.decorator('$exceptionHandler', exceptionHandler)
    }

    exceptionHandler.$inject = ['$delegate', '$log'];
    function exceptionHandler($delegate, $log){
        return function (exception:any, cause: any) {
            var errorData = { exception: exception, cause: cause };
            $delegate(exception, cause);
            $log.error('Error: ' + exception.message, '\nDetails:', errorData);
        }
    }

    getSp().config(exceptionConfig);
}