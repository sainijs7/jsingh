(function ()
{
    'use strict';

    angular
        .module('app.notification', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
			.state('app.notification_add', {
				url      : '/notification/add',
				views    : {
					'content@app': {
						templateUrl: 'app/main/pages/notification/views/notification/notification.html',
						controller : 'NotificationController as vm'
					}
				},
				resolve  : {
					Notification: function ($stateParams, notificationsService)
					{
						return notificationsService.newNotification();
					}
				},
				bodyClass: 'notification'
			})
			.state('app.notification_detail', {
				url      : '/notification/detail/:id',
				views    : {
					'content@app': {
						templateUrl: 'app/main/pages/notification/views/notification/notification.html',
						controller : 'NotificationController as vm'
					}
				},
				resolve  : {
					Notification: function ($stateParams, notificationsService)
					{
						return notificationsService.getNotification($stateParams.id);
					}
				},
				bodyClass: 'notification'
			})
			.state('app.notification_browse', {
            url      : '/notification/browse',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/notification/views/notifications/notifications.html',
                    controller : 'NotificationsController as vm'
                }
            },
			resolve  : {
				Notifications: function (notificationsService)
				{
					return notificationsService.getNotifications();
				}
			},
            bodyClass: 'notifications'
        });;
		
		// API
		msApiProvider.register('notifications.notifications', ['app/data/dummy/notifications.json']);
		

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/notification');

        // Navigation
         msNavigationServiceProvider.saveItem('notifications', {
            title : 'Notification',
            state : 'app.notification_browse',
            weight: 4
        }); 
		
    }

})();