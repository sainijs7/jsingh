(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('AdminController', AdminController);

    /** @ngInject */
    function AdminController($scope, $rootScope)
    {
		
		var vm = this;
		
        // Data
		vm.user = {media:{}, images:{}};
		vm.fileAdded = fileAdded;
        vm.upload = upload;
        vm.fileSuccess = fileSuccess;
		vm.updateImageZoomOptions = updateImageZoomOptions;
		
        //////////

        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event)
        {
			
            if ( event.targetScope.$id === $scope.$id )
            {
                $rootScope.$broadcast('msSplashScreen::remove');
            }
        });
		
		
		//// image 
		
		init();

        /**
         * Initialize
         */
        function init()
        {
            if ( vm.user.images.length > 0 )
            {
                vm.updateImageZoomOptions(vm.product.images[0].url);
            }
        }
		
		/**
         * Update image zoom options
         *
         * @param url
         */
        function updateImageZoomOptions(url)
        {
            vm.imageZoomOptions = {
                images: [
                    {
                        thumb : url,
                        medium: url,
                        large : url
                    }
                ]
            };
        }
		 /**
         * File added callback
         * Triggers when files added to the uploader
         *
         * @param file
         */
        function fileAdded(file)
        {
			
            // Prepare the temp file data for media list
            var uploadingFile = {
                id  : file.uniqueIdentifier,
                file: file,
                type: 'uploading'
            };
			
			var fileReader = new FileReader();
                    fileReader.readAsDataURL(file.file);
                    fileReader.onload = function (event)
                    {
                        vm.user.media.url = event.target.result;
						//alert(vm.user.media.url);
                    };
					
            // Append it to the media list
           //vm.user.images.unshift(uploadingFile);
        }
		
		/**
         * Upload
         * Automatically triggers when files added to the uploader
         */
        function upload()
        {
            // Set headers
            vm.ngFlow.flow.opts.headers = {
                'X-Requested-With': 'XMLHttpRequest',
                //'X-XSRF-TOKEN'    : $cookies.get('XSRF-TOKEN')
            };

            vm.ngFlow.flow.upload();
        }
		
		/**
         * File upload success callback
         * Triggers when single upload completed
         *
         * @param file
         * @param message
         */
        function fileSuccess(file, message)
        {
			console.log('imageuplaod start');
			var fileReader = new FileReader();
                    fileReader.readAsDataURL(file.file);
                    fileReader.onload = function (event)
                    {
                        vm.user.media.url = event.target.result;
						//alert(vm.user.media.url);
                    };

                    // Update the image type so the overlay can go away
                    //media.type = 'image';
					
			//alert('aaa');
            // Iterate through the media list, find the one we
            // are added as a temp and replace its data
            // Normally you would parse the message and extract
            // the uploaded file data from it
            angular.forEach(vm.user.images, function (media, index)
            {
                if ( media.id === file.uniqueIdentifier )
                {
                    // Normally you would update the media item
                    // from database but we are cheating here!
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(media.file.file);
                    fileReader.onload = function (event)
                    {
                        media.url = event.target.result;
						alert(media.url);
                    };

                    // Update the image type so the overlay can go away
                    media.type = 'image';
                }
            });
        }
		
		
		
    }
})();