(function ()
{
    'use strict';

    angular
        .module('app.location.district')
        .controller('DistrictController', DistrictController);

    /** @ngInject */
    function DistrictController($state, District)
    {
		
		var vm = this;
		
		
        // Data
		vm.district = District;
		
		
        // Methods
		vm.goBack = goBack;

        //////////
		
		if( $state.current.name == 'app.location_district_add')
		{
			vm.newDistrict = true;
		}
		
		
		/**
         * Cancel  new admin
         * Go back toi  browse page
         *
        */
		 function goBack()
        {
           $state.go('app.location_district_browse');
        }
		
		
		
    }
})();