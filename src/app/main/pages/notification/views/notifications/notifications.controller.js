(function ()	
{
    'use strict';

    angular
        .module('app.notification')
        .controller('NotificationsController', NotificationsController);

    /** @ngInject */
    function NotificationsController($state, Notifications)
    {
		var vm = this;
		
        // Data
		vm.notifications = Notifications;
		
        // Methods
		
		vm.gotoAddNotification = gotoAddNotification;
		vm.gotoNotificationDetail = gotoNotificationDetail;
        //////////
		
		/**
		 * Go to add product
		 */
		function gotoAddNotification()
		{
			$state.go('app.notification_add');
		}
		
		
		/**
		 * Go to notification detail
		 *
		 * @param id
		 */
		function gotoNotificationDetail(id)
		{
			$state.go('app.notification_detail', {id: id});
		}
		
    }
})();