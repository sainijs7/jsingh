(function ()
{
    'use strict';

    angular
        .module('app.pages.location.add-district', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_location_add-district', {
            url      : '/pages/location/add-district',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/location/add-district/add-district.html',
                    controller : 'AddProvinceController as vm'
                }
            },
            bodyClass: 'add-district'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/location/add-district');

        // Navigation
         msNavigationServiceProvider.saveItem('pages.Location.add-district', {
            title : 'Add District',
            state : 'app.pages_location_add-district',
            weight: 5
        }); 
    }

})();