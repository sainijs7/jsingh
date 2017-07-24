(function ()
{
    'use strict';

    angular
        .module('app.location.district', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
			.state('app.location_district_add', {
				url      : '/location/district/add',
				views    : {
					'content@app': {
						templateUrl: 'app/main/pages/location/district/views/district/district.html',
						controller : 'DistrictController as vm'
					}
				},
				resolve  : {
					District: function ($stateParams, districtsService)
					{
						return districtsService.newDistrict();
					}
				},
				bodyClass: 'district'
			})
			.state('app.location_district_detail', {
				url      : '/location/district/detail/:id',
				views    : {
					'content@app': {
						templateUrl: 'app/main/pages/location/district/views/district/district.html',
						controller : 'DistrictController as vm'
					}
				},
				resolve  : {
					District: function ($stateParams, districtsService)
					{
						return districtsService.getDistrict($stateParams.id);
					}
				},
				bodyClass: 'district'
			})
			.state('app.location_district_browse', {
            url      : '/location/district/browse',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/location/district/views/districts/districts.html',
                    controller : 'DistrictsController as vm'
                }
            },
			resolve  : {
				Districts: function (districtsService)
				{
					return districtsService.getDistricts();
				}
			},
            bodyClass: 'districts'
        });;
		
		// API
		msApiProvider.register('districts.districts', ['app/data/dummy/districts.json']);
		

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/location/district');

        // Navigation
         msNavigationServiceProvider.saveItem('pages.Location.districts', {
            title : 'District',
            state : 'app.location_district_browse',
            weight: 4
        }); 
		
    }

})();