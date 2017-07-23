(function ()	
{
    'use strict';

    angular
        .module('app.location.city')
        .controller('CitiesController', CitiesController);

    /** @ngInject */
    function CitiesController($state, Cities)
    {
		var vm = this;
		
        // Data
		vm.cities = Cities;
		
        // Methods
		
		vm.gotoAddCity = gotoAddCity;
		vm.gotoCityDetail = gotoCityDetail;
        //////////
		
		/**
		 * Go to add product
		 */
		function gotoAddCity()
		{
			$state.go('app.location_city_add');
		}
		
		
		/**
		 * Go to city detail
		 *
		 * @param id
		 */
		function gotoCityDetail(id)
		{
			$state.go('app.location_city_detail', {id: id});
		}
		
    }
})();