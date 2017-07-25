(function ()	
{
    'use strict';

    angular
        .module('app.location.district')
        .controller('DistrictsController', DistrictsController);

    /** @ngInject */
    function DistrictsController($state, Districts)
    {
		var vm = this;
		
        // Data
		vm.districts = Districts;
		
		vm.dtOptions = {
			dom         : 'rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
			columnDefs  : [
				
				{
					// Target the email column
					targets   : 0,
					filterable: false,
					sortable  : false,
					width     : '80px'
				},
				{
					// Target the name column
					targets: 1,
					render : function (data, type)
					{
						if ( type === 'display' )
						{
							//return '<div class="layout-align-start-start layout-row">' + '<i class="s16 icon-currency-usd"></i>' + '<span>' + data + '</span>' + '</div>';
						}

						return data;
					}
				},
				{
					// Target the name column
					targets: 2,
					render : function (data, type)
					{
						if ( type === 'display' )
						{
							//return '<div class="layout-align-start-start layout-row">' + '<i class="s16 icon-currency-usd"></i>' + '<span>' + data + '</span>' + '</div>';
						}

						return data;
					}
				},
				
				
				{
					// Target the status column
					targets   : 3,
					filterable: false,
					render    : function (data, type)
					{
						if ( type === 'display' )
						{
							if ( data === 'true' )
							{
								//return '<i class="icon-checkbox-marked-circle green-500-fg"></i>';
							}

							//return '<i class="icon-cancel red-500-fg"></i>';
						}

						if ( type === 'filter' )
						{
							if ( data )
							{
								return '1';
							}

							return '0';
						}

						return data;
					}
				},
				{
					// Target the actions column
					targets           : 4,
					responsivePriority: 1,
					filterable        : false,
					sortable          : false
				}
			],
			initComplete: function ()
			{
				var api = this.api(),
					searchBox = angular.element('body').find('#e-commerce-products-search');

				// Bind an external input as a table wide search box
				if ( searchBox.length > 0 )
				{
					searchBox.on('keyup', function (event)
					{
						api.search(event.target.value).draw();
					});
				}
			},
			pagingType  : 'simple',
			lengthMenu  : [10, 20, 30, 50, 100],
			pageLength  : 20,
			scrollY     : 'auto',
			responsive  : true
		};
		
        // Methods
		
		vm.gotoAddDistrict = gotoAddDistrict;
		vm.gotoDistrictDetail = gotoDistrictDetail;
        //////////
		
		/**
		 * Go to add product
		 */
		function gotoAddDistrict()
		{
			$state.go('app.location_district_add');
		}
		
		
		/**
		 * Go to district detail
		 *
		 * @param id
		 */
		function gotoDistrictDetail(id)
		{
			$state.go('app.location_district_detail', {id: id});
		}
		
    }
})();