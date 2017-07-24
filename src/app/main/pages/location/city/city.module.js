(function ()
{
    'use strict';

    angular
        .module('app.location.city', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
			.state('app.location_city_add', {
				url      : '/location/city/add',
				views    : {
					'content@app': {
						templateUrl: 'app/main/pages/location/city/views/city/city.html',
						controller : 'CityController as vm'
					}
				},
				resolve  : {
					City: function ($stateParams, citiesService)
					{
						return citiesService.newCity();
					}
				},
				bodyClass: 'city'
			})
			.state('app.location_city_detail', {
				url      : '/location/city/detail/:id',
				views    : {
					'content@app': {
						templateUrl: 'app/main/pages/location/city/views/city/city.html',
						controller : 'CityController as vm'
					}
				},
				resolve  : {
					City: function ($stateParams, citiesService)
					{
						return citiesService.getCity($stateParams.id);
					}
				},
				bodyClass: 'city'
			})
			.state('app.location_city_browse', {
            url      : '/location/city/browse',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/location/city/views/cities/cities.html',
                    controller : 'CitiesController as vm'
                }
            },
			resolve  : {
				Cities: function (citiesService)
				{
					return citiesService.getCities();
				}
			},
            bodyClass: 'cities'
        });;
		
		// API
		msApiProvider.register('cities.cities', ['app/data/dummy/cities.json']);
		

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/location/city');

        // Navigation
         msNavigationServiceProvider.saveItem('pages.Location.cities', {
            title : 'City',
            state : 'app.location_city_browse',
            weight: 4
        }); 
		
    }

})();