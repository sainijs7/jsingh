(function ()
{
    'use strict';

    angular
        .module('app.pages.location.add-province', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_location_add-province', {
            url      : '/pages/location/add-province',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/location/add-province/add-province.html',
                    controller : 'AddProvinceController as vm'
                }
            },
            bodyClass: 'add-province'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/location/add-province');

        // Navigation
         msNavigationServiceProvider.saveItem('pages.Location.add-province', {
            title : 'Add Province',
            state : 'app.pages_location_add-province',
            weight: 5
        }); 
    }

})();