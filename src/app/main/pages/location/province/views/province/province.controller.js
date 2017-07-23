(function ()
{
    'use strict';

    angular
        .module('app.location.province')
        .controller('ProvinceController', ProvinceController);

    /** @ngInject */
    function ProvinceController($state, Province)
    {
		
		var vm = this;
		console.log('Province', Province);
		
        // Data
		vm.province = Province;
		
		
        // Methods
		vm.goBack = goBack;

        //////////
		
		if( $state.current.name == 'app.location_province_add')
		{
			vm.newProvince = true;
		}
		
		
		/**
         * Cancel  new admin
         * Go back toi  browse page
         *
        */
		 function goBack()
        {
           $state.go('app.location_province_browse');
        }
		
		
		
    }
})();