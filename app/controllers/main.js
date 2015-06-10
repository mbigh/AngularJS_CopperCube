'use strict';

angular.module('angularCopperCubeApp')
	.controller('MainCtrl', function ($scope) {
		$scope.ccbjsMainUrl = "copperlichtdata/cube.ccbjs";
        $scope.ccbjsUrl = "copperlichtdata/sphere.ccbjs";

		$scope.changeModel = function() {
			if ($scope.ccbjsUrl == "copperlichtdata/sphere.ccbjs") {
				$scope.ccbjsUrl = "copperlichtdata/cone.ccbjs";
			}
            else {
                $scope.ccbjsUrl = "copperlichtdata/sphere.ccbjs";
            }

		};
	});