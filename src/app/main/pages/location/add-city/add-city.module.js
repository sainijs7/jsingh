(function ()
{
    'use strict';

    angular
        .module('app.pages.location.add-city', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_location_add-city', {
            url      : '/pages/location/add-city',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/location/add-city/add-city.html',
                    controller : 'AddCityController as vm'
                }
            },
            bodyClass: 'add-city'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/location/add-city');

        // Navigation
         msNavigationServiceProvider.saveItem('pages.Location.add-city', {
            title : 'Add City',
            state : 'app.pages_location_add-city',
            weight: 4
        }); 
    }

})();