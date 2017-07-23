(function ()	
{
    'use strict';

    angular
        .module('app.location.district')
        .controller('DistrictsController', DistrictsController);

    /** @ngInject */
    function DistrictsController($state, Districts)
    {
		var vm = this;
		
        // Data
		vm.districts = Districts;
		
        // Methods
		
		vm.gotoAddDistrict = gotoAddDistrict;
		vm.gotoDistrictDetail = gotoDistrictDetail;
        //////////
		
		/**
		 * Go to add product
		 */
		function gotoAddDistrict()
		{
			$state.go('app.location_district_add');
		}
		
		
		/**
		 * Go to district detail
		 *
		 * @param id
		 */
		function gotoDistrictDetail(id)
		{
			$state.go('app.location_district_detail', {id: id});
		}
		
    }
})();