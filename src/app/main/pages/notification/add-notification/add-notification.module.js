(function ()
{
    'use strict';

    angular
        .module('app.pages.notification.add-notification', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_notification_add-notification', {
            url      : '/pages/notification/add-notification',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/notification/add-notification/add-notification.html',
                    controller : 'AddNotificationController as vm'
                }
            },
            bodyClass: 'add-notification'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/notification/add-notification');

        // Navigation
         msNavigationServiceProvider.saveItem('pages.Notification.add-notification', {
            title : 'Add Notification',
            state : 'app.pages_notification_add-notification',
            weight: 4
        }); 
    }

})();