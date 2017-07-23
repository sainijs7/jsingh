(function ()
{
    'use strict';

    angular
        .module('app.pages', [
             'app.pages.coming-soon',
             'app.pages.auth.login',
			  'app.pages.auth.forgot-password',
			  'app.location.city',
			  'app.location.district',
			  'app.location.province',
			  'app.notification'
			  //'app.pages.dashboard',
			  
			 
          
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('pages', {
            title : 'PAGES',
            group : true,
            weight: 2
        });
    }
})();