(function ()
{
    'use strict';

    angular
        .module('app.location.province', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
			.state('app.location_province_add', {
				url      : '/location/province/add',
				views    : {
					'content@app': {
						templateUrl: 'app/main/pages/location/province/views/province/province.html',
						controller : 'ProvinceController as vm'
					}
				},
				resolve  : {
					Province: function ($stateParams, provincesService)
					{
						return provincesService.newProvince();
					}
				},
				bodyClass: 'province'
			})
			.state('app.location_province_detail', {
				url      : '/location/province/detail/:id',
				views    : {
					'content@app': {
						templateUrl: 'app/main/pages/location/province/views/province/province.html',
						controller : 'ProvinceController as vm'
					}
				},
				resolve  : {
					Province: function ($stateParams, provincesService)
					{
						return provincesService.getProvince($stateParams.id);
					}
				},
				bodyClass: 'province'
			})
			.state('app.location_province_browse', {
            url      : '/location/province/browse',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/location/province/views/provinces/provinces.html',
                    controller : 'ProvincesController as vm'
                }
            },
			resolve  : {
				Provinces: function (provincesService)
				{
					return provincesService.getProvinces();
				}
			},
            bodyClass: 'provinces'
        });;
		
		// API
		msApiProvider.register('provinces.provinces', ['app/data/dummy/provinces.json']);
		

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/location/province');

        // Navigation
         msNavigationServiceProvider.saveItem('pages.Location.provinces', {
            title : 'Province',
            state : 'app.location_province_browse',
            weight: 4
        }); 
		
    }

})();