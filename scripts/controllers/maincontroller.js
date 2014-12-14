(function () {

    var app = angular.module('SSDApp');

    var MainController = function ($scope, $interval, $timeout) {
       
        var swapImage = (function(imageNo) {
            background.fadeOut(200, function () {                
                        background.css({ 'background-image': "url('images/bg" + imageNo +".JPG')" });
                        background.fadeIn(1200);
                })
        });
        var background = $('.bgImage');        
        var logo = $('.splashLogo');   
        var logoImg = $('#mainLogo');  
        var banner = $('.bannerLogo');
        var content = $('.contentData');
        var contentBlock = $('#contentData');
        $scope.interior = null;
        $timeout(function() {swapImage(0);},500);
       
        $scope.information = (function() {
             logo.fadeOut(600);
             banner.fadeIn(1000);
             banner.css("display","block");                 
         
            $timeout(function() {content.fadeIn(500); $scope.interior = true; },1500);
            
            $timeout(function() {swapImage(3);  },100);
            
     
        });
        
     
        $scope.home = (function() {
            $scope.interior = false;
             logo.fadeIn(800);
             banner.fadeOut(800);
             banner.css("display","none");
            $timeout(function() {swapImage(0);},500);
        });
        
    };

    app.controller('MainController', ['$scope', '$interval', '$timeout',  MainController]);


}());