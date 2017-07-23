(function ()
{
	'use strict';

	angular
		.module('app.location.province')
		.factory('provincesService', provincesService);

	/** @ngInject */
	function provincesService($q, $mdToast, msApi)
	{
		var adminusers = [];
		var provinces = [];

		var service = {
			getProvinces     : getProvinces,
			getProvince      : getProvince,
			updateAdminUser   : updateAdminUser,
			newProvince      : newProvince,
			createAdminUser   : createAdminUser
		};

		return service;

		//////////

		/**
		 * Get items (admin users)
		 */
		function getProvinces()
		{
			// Create a new deferred object
			var deferred = $q.defer();

			// If we have already loaded the items,
			// don't do another API call, get them from
			// the array
			if ( provinces.length > 0 )
			{
				deferred.resolve(provinces);
			}
			// otherwise make an API call and load
			// the items
			else
			{
				msApi.request('provinces.provinces@get', {},

					// SUCCESS
					function (response)
					{
						// Store the items
						provinces = response.data;

						// Resolve the promise
						deferred.resolve(provinces);
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
		function getProvince(id)
		{
			//alert(id);
			 
			 
			// Create a new deferred object
			var deferred = $q.defer();
			var id = 1;
			for ( var i = 0; i < provinces.length; i++ )
			{
				//alert('haha');
				if ( parseInt(provinces[i].id) === parseInt(id) )
				{
					//alert('done');
					deferred.resolve(provinces[i]);
				}
			}
			//return 'sdfsd';
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
		function newProvince()
		{
			return {
				provinceName      : "",
				longitude    : "",
				latitude    : "",
				googlePlaceId         : "",
				shortDesc        : "",
				dateCreated        : "",
				lastModified        : ""
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