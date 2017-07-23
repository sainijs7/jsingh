(function ()
{
    'use strict';

    angular
        .module('app.location.city')
        .controller('CityController', CityController);

    /** @ngInject */
    function CityController($state, City)
    {
		
		var vm = this;
		
		
        // Data
		vm.city = City;
		
		
        // Methods
		vm.goBack = goBack;

        //////////
		
		if( $state.current.name == 'app.location_city_add')
		{
			vm.newCity = true;
		}
		
		
		/**
         * Cancel  new admin
         * Go back toi  browse page
         *
        */
		 function goBack()
        {
           $state.go('app.location_city_browse');
        }
		
		
		
    }
})();