(function ()
{
	'use strict';

	angular
		.module('app.admin-users')
		.factory('adminUsersService', adminUsersService);

	/** @ngInject */
	function adminUsersService($q, $mdToast, msApi)
	{
		var adminusers = [];

		var service = {
			getAdminUsers     : getAdminUsers,
			getAdminUser      : getAdminUser,
			updateAdminUser   : updateAdminUser,
			newAdminUser      : newAdminUser,
			createAdminUser   : createAdminUser
		};

		return service;

		//////////

		/**
		 * Get items (admin users)
		 */
		function getAdminUsers()
		{
			// Create a new deferred object
			var deferred = $q.defer();

			// If we have already loaded the items,
			// don't do another API call, get them from
			// the array
			if ( adminusers.length > 0 )
			{
				deferred.resolve(adminusers);
			}
			// otherwise make an API call and load
			// the items
			else
			{
				msApi.request('admin-users.admins@get', {},

					// SUCCESS
					function (response)
					{
						// Store the items
						adminusers = response.data;

						// Resolve the promise
						deferred.resolve(adminusers);
					},

					// ERROR
					function (response)
					{
						// Reject the promise
						deferred.reject(response);
					}
				);
			}

			return deferred.promise;
		}

		/**
		 * Get adminuser by id
		 *
		 * @param id
		 */
		function getAdminUser(id)
		{
			// Create a new deferred object
			var deferred = $q.defer();

			// Iterate through the items and find
			// the correct one. This is an unnecessary
			// code as in real world, you would do
			// another API call here to get the adminuser
			// details
			for ( var i = 0; i < adminusers.length; i++ )
			{
				if ( parseInt(adminusers[i].id) === parseInt(id) )
				{
					deferred.resolve(adminusers[i]);
				}
			}

			return deferred.promise;
		}

		/**
		 * Update the adminuser
		 *
		 * @param id
		 * @param adminuser
		 */
		function updateAdminUser(id, adminuser)
		{
			// This is a dummy function for the demo.
			// In real world, you would use this
			// function to make another API call to
			// update your database.
			console.info('The adminuser with the id of', id, 'has been updated with the following information:', adminuser);
		}

		/**
		 * Returns a default adminuser structure
		 */
		function newAdminUser()
		{
			return {
				fullname      : "",
				email    : "",
				password    : "",
				phoneNumber         : "",
				shortBio        : "",
				status        : "",
				profilePic        : 'assets/images/avatars/profile.jpg',
				dateCreated: "",
				lastModified: "",
				lastLogin: "",
			};
		}

		/**
		 * Create adminuser
		 *
		 * @param adminuser
		 */
		function createAdminUser(adminuser)
		{
			// This is a dummy function for a demo.
			// In real world, you would do an API
			// call to add new adminuser to your
			// database.

			// Generate a random id
			adminuser.id = Math.floor((Math.random() * 10) + 1);

			// Add the adminuser
			adminusers.unshift(adminuser);

			// Show a toast
			$mdToast.show(
				$mdToast.simple()
					.textContent('Admin User created!')
					.position('top right')
			);
		}

	}

})();