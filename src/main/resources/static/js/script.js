var mainApp = angular.module("mainApp", []);

mainApp.controller('fofsController', function($scope, $http) {

//    $scope.allImageLinks = [
//    "aap",
//    "noot",
//    "mies",
//    "joow"];

    $scope.allImageLinks = initializeArray();

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

    $scope.getImageLink = function() {
        return "https://scontent-ams3-1.cdninstagram.com/vp/7ab403405d7a904cbfd7caa74c9601d9/5C2F7554/t51.2885-15/sh0.08/e35/s640x640/30076627_638658959809450_1933619986333433856_n.jpg";

//        if($scope.allImageLinks.length === 0) {
//            $scope.allImageLinks = initializeArray();
//        }
//
////        var length = $scope.allImageLinks.length;
////        var randomNumber = getRandomNumberBetween(length);
//
////        alert($scope.allImageLinks.length);
////        alert(randomNumber);
//
//        var numberToUse = $scope.allImageLinks.length - 1;
//
//        var linkToReturn = $scope.allImageLinks[numberToUse];
//        //$scope.allImageLinks.splice(numberToUse, 1);
//
//        //alert(linkToReturn);
//        return linkToReturn;










//        var length = $scope.allImageLinks.length;
//        var randomNumber = getRandomNumberBetween(length);
//
////        alert($scope.allImageLinks.length);
////        alert(randomNumber);
//
//        var linkToReturn = $scope.allImageLinks[randomNumber];
//        $scope.allImageLinks.splice(randomNumber, 1);
//
//        //alert(linkToReturn);
//        return linkToReturn;
    }

    function initializeArray() {
        var array = [
        "https://scontent-ams3-1.cdninstagram.com/vp/29250a24bb041208829daea995885276/5C36A358/t51.2885-15/sh0.08/e35/s640x640/39172388_1015960745240235_2638073730759158374_n.jpg",
        "https://scontent-ams3-1.cdninstagram.com/vp/200207cecff9698f246698ff5fae0950/5C22DBF7/t51.2885-15/sh0.08/e35/s640x640/38081455_980682255444220_7074124733549117440_n.jpg",
        "https://scontent-ams3-1.cdninstagram.com/vp/563ae124dc4580ee8073b25e28b7699c/5C3825F2/t51.2885-15/sh0.08/e35/s640x640/37542852_280546029417537_4727435747831840768_n.jpg",
        "https://scontent-ams3-1.cdninstagram.com/vp/74304baf562b2b4b6479bc38bd5ed6f5/5C3AA327/t51.2885-15/sh0.08/e35/c135.0.810.810/s640x640/36721412_205772943457100_4701242576244572160_n.jpg"];

        array = shuffleArray(array);

        return array;
    }

    function getRandomNumberBetween(max) {
        return Math.floor(Math.random() * max);
    }


    $scope.getImageLinkTwo = function(i, z) {
        var number = ((i - 1) * 7) + z;
        return $scope.allImageLinks[number];
    }

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array;
    }

});