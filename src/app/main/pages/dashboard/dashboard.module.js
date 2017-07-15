(function ()
{
    'use strict';

    angular
        .module('app.pages.dashboard',
            [
                // 3rd Party Dependencies
                'nvd3',
                'datatables'
            ]
        )
        .config(config);

    /** @ngInject */
    function config($stateProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_dashboard', {
            url      : '/dashboard',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboard/project/dashboard.html',
                    controller : 'DashboardController as vm'
                }
            },
            resolve  : {
                DashboardData: function (msApi)
                {
                    return msApi.resolve('dashboard@get');
                }
            },
            bodyClass: 'dashboard-project'
        });

        // Api
       /*  msApiProvider.register('dashboard', ['app/data/dashboard/project/data.json']); */
	   
	    // Navigation
         msNavigationServiceProvider.saveItem('pages.dashboard', {
            title : 'Dashboard',
            icon  : 'icon-alarm-check',
            state : 'app.pages_dashboard',
            weight: 2
        }); 
		
		
    }

})();