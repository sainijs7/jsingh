(function ()
{
	'use strict';

	angular
		.module('app.admin-users', 
			[
				// 3rd Party Dependencies
				//'wipImageZoom',
				'datatables',
				'flow',
				//'nvd3',
				'textAngular',
				'uiGmapgoogle-maps',
				'xeditable'
			])
		.config(config);

	/** @ngInject */
	function config($stateProvider, $translatePartialLoaderProvider, msApiProvider, msNavigationServiceProvider)
	{
		/* State
		--------------------------------------------- */

		$stateProvider
			.state('app.admin-users', {
				abstract: true,
				url     : '/admin-users'
			})
			.state('app.admin-users.browse', {
				url      : '/browse',
				views    : {
					'content@app': {
						templateUrl: 'app/admin/admin-users/views/admins/admins.html',
						controller : 'AdminUsersController as vm'
					}
				},
				resolve  : {
					AdminUsers: function (adminUsersService)
					{
						return adminUsersService.getAdminUsers();
					}
				},
				bodyClass: 'admin-users'
			})
			.state('app.admin-users.add', {
				url      : '/add',
				views    : {
					'content@app': {
						templateUrl: 'app/admin/admin-users/views/admin/admin.html',
						controller : 'AdminController as vm'
						//controller : 'AdminUserController as vm'
					}
				},
				resolve: {
					/**
					Product: function (adminUsersService)
					{
						return adminUsersService.newProduct();
					}
					**/
				},
				bodyClass: 'admin-users add'
			})
			.state('app.admin-users.detail', {
				url      : '/detail/:id',
				views    : {
					'content@app': {
						templateUrl: 'app/admin/admin-users/views/admin/admin.html',
						controller : 'AdminController as vm'
						//controller : 'AdminUserController as vm'
					}
				},
				resolve  : {
					/**
					Product: function ($stateParams, users, adminUsersService)
					{
						return adminUsersService.getProduct($stateParams.id);
					}
					**/
				},
				bodyClass: 'admin-users detail'
			})


		/* Translation
		--------------------------------------------- */

		$translatePartialLoaderProvider.addPart('app/admin');


		/* API
		--------------------------------------------- */

		msApiProvider.register('sample', ['app/data/sample/sample.json']);
		msApiProvider.register('admin-users.admins', ['app/data/dummy/admin-users.json']);



		/* Navigation
		--------------------------------------------- */

		msNavigationServiceProvider.saveItem('admin-users', {
			title : 'Admin Users',
			group : true,
			weight: 1
		});

		msNavigationServiceProvider.saveItem('admin-users.browse', {
			title    : 'View Admin Users',
			icon     : 'icon-tile-four',
			state    : 'app.admin-users.browse',
			translate: 'ADMIN_USERS.BROWSE'
		});

		msNavigationServiceProvider.saveItem('admin-users.add', {
			title    : 'Add New Admin User',
			icon     : 'icon-tile-four',
			state    : 'app.admin-users.add',
			translate: 'ADMIN_USERS.ADD'
		});
	}
})();