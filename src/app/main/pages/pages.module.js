(function ()
{
    'use strict';

    angular
        .module('app.pages', [
             'app.pages.coming-soon',
             'app.pages.auth.login',
			  'app.pages.auth.forgot-password',
			  'app.pages.location.add-province',
			  'app.pages.location.add-city',
			  'app.pages.location.add-district',
			  'app.pages.notification.add-notification',
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