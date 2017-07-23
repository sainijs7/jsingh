(function ()	
{
    'use strict';

    angular
        .module('app.location.province')
        .controller('ProvincesController', ProvincesController);

    /** @ngInject */
    function ProvincesController($state, Provinces)
    {
		var vm = this;
		
        // Data
		vm.provinces = Provinces;
		
        // Methods
		
		vm.gotoAddProvince = gotoAddProvince;
		vm.gotoProvinceDetail = gotoProvinceDetail;
        //////////
		
		/**
		 * Go to add product
		 */
		function gotoAddProvince()
		{
			$state.go('app.location_province_add');
		}
		
		
		/**
		 * Go to province detail
		 *
		 * @param id
		 */
		function gotoProvinceDetail(id)
		{
			$state.go('app.location_province_detail', {id: id});
		}
		
    }
})();