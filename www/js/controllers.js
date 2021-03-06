
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('RequestCtrl', function($scope,$ionicModal) {

    $ionicModal.fromTemplateUrl('templates/send.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.resp = true;
  $scope.openModal = function() {
    $scope.modal.show();
    
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
    $scope.resp = true;
    $scope.respShow = false;
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    $scope.resp = true;
    $scope.respShow = false;
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    $scope.resp = true;
    $scope.respShow = false;
  });

  $scope.log = {};
  $scope.log.mno = ' ';
  $scope.log.mname = ' ';
  $scope.log.bgroup = ' ';

  
  $scope.openResp = function () {
    
    $scope.resp = false;
    $scope.respShow = true;
    //alert($scope.log.bgroup);
    
    var messageInfo = {
      phoneNumber: $scope.log.mno,
      textMessage: 'Hi, I am '+$scope.log.mname+'. I am in need of '+$scope.log.bgroup+' blood. Kindly donate',
    };

    sms.sendMessage(messageInfo, function(message) {
        alert("success: " + message);
    }, function(error) {
        alert("code: " + error.code + ", message: " + error.message);
    });


  }



// $ionicModal.fromTemplateUrl('templates/sendresp.html', {
//     scope: $scope,
//     animation: 'slide-in-up'
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });
//   $scope.openResp = function() {
//     $scope.modal.show();
//   };
//   $scope.closeResp = function() {
//     $scope.modal.hide();
//   };
//   //Cleanup the modal when we're done with it!
//   $scope.$on('$destroy', function() {
//     $scope.modal.remove();
//   });
//   // Execute action on hide modal
//   $scope.$on('modal.hidden', function() {
//     // Execute action
//   });
//   // Execute action on remove modal
//   $scope.$on('modal.removed', function() {
//     // Execute action
//   });










  // $scope.map = {center: {latitude: 23.1550519, longitude: 72.66679909999999 }, zoom: 15 };
  //       $scope.options = {scrollwheel: false};
  //       $scope.circles = [
  //           {
  //               id: 1,
  //               center: {
  //                   latitude: 23.1550519,
  //                   longitude: 72.66679909999999
  //               },
  //               radius: 200,
  //               stroke: {
  //                   color: '#08B21F',
  //                   weight: 2,
  //                   opacity: 1
  //               },
  //               fill: {
  //                   color: '#08B21F',
  //                   opacity: 0.5
  //               },
  //               geodesic: true, // optional: defaults to false
  //               draggable: false, // optional: defaults to false
  //               clickable: true, // optional: defaults to true
  //               editable: true, // optional: defaults to false
  //               visible: true // optional: defaults to true
  //           }
  //       ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {

})
.controller('HomeCtrl', function($scope) {
  $scope.show = false;

})
.controller('BrowseCtrl',function  ($scope) {
  
})
.controller('AlertCtrl',function  ($scope,$ionicModal) {
  $ionicModal.fromTemplateUrl('templates/volunteer.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.resp = true;
  $scope.openVol = function() {
    $scope.modal.show();
  };
  $scope.closeVol = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
    
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
 
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
 
  });
  
});