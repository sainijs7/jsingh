(function ()
{
    'use strict';

    angular
        .module('app.notification')
        .controller('NotificationController', NotificationController);

    /** @ngInject */
    function NotificationController($state, Notification)
    {
		
		var vm = this;
		
		
        // Data
		vm.notification = Notification;
		
		
        // Methods
		vm.goBack = goBack;

        //////////
		
		if( $state.current.name == 'app.notification_add')
		{
			vm.newNotification = true;
		}
		
		
		/**
         * Cancel  new admin
         * Go back toi  browse page
         *
        */
		 function goBack()
        {
           $state.go('app.notification_browse');
        }
		
		
		
    }
})();