(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.login')
        .controller('LoginController', LoginController);

    /** @ngInject */
    function LoginController($location)
    {
		var vm = this;
        // Data
		vm.login = login;
        // Methods
		
		
        //////////
		 /**
         * Login User
         *
         * 
         */
        function login()
        {
              $location.path("/sample" );
        }
		
    }
})();