var mainApp = angular.module("mainApp", []);

mainApp.controller('fofsController', function($scope, $http) {

    $scope.getOpacityGroup1 = function(i, z) {
        var cssClass;

        if(i === 2) {
            if(z === 4) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 5) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 6) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 3) {
            if(z === 4) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 4) {
            if(z === 4) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 5) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 6) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 5) {
            if(z === 4) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 6) {
            if(z === 4) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else {
            cssClass = "opacity-fullwidth-height-auto";
        }

        return cssClass;
    }

    $scope.getOpacityGroup2 = function(i, z) {
        var cssClass;

        if(i === 2) {
            if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 4) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 5) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 3) {
            if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 5) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 4) {
            if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 5) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 5) {
            if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 5) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 6) {
            if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 4) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 5) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else {
            cssClass = "opacity-fullwidth-height-auto";
        }

        return cssClass;
    }

    $scope.getOpacityGroup3 = function(i, z) {
        var cssClass;

        if(i === 2) {
            if(z === 2) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 4) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 3) {
            if(z === 2) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 4) {
            if(z === 2) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 4) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 5) {
            if(z === 2) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 6) {
            if(z === 2) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else {
            cssClass = "opacity-fullwidth-height-auto";
        }

        return cssClass;
    }

    $scope.getOpacityGroup4 = function(i, z) {
        var cssClass;

        if(i === 2) {
            if(z === 1) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 2) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 3) {
            if(z === 1) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 4) {
            if(z === 1) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 2) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 5) {
            if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else if(i === 6) {
            if(z === 1) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 2) {
                cssClass = "fullwidth-height-auto";
            } else if(z === 3) {
                cssClass = "fullwidth-height-auto";
            } else {
                cssClass = "opacity-fullwidth-height-auto";
            }
        } else {
            cssClass = "opacity-fullwidth-height-auto";
        }

        return cssClass;
    }

});