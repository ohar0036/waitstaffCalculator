angular.module('waitstaffApp', ['ngMessages'])

  .controller('waitstaffCtrl', function($scope) {
    $scope.subtotalCC = 0;
    $scope.tipCC = 0;
    $scope.totalCC = 0;
    $scope.tipTotal = 0;
    $scope.mealCount = 0;
    $scope.averageTip = 0;

    $scope.submitForm = function() {
      
      if( $scope.mealDetailsForm.$valid ) {
        //console.log('this form is valid');
        console.log($scope.baseMealPrice);
        $scope.subtotalCC = (($scope.baseMealPrice * $scope.taxRate)/100) + $scope.baseMealPrice;
        $scope.tipCC = (($scope.baseMealPrice * $scope.tipPercentage)/100);
        $scope.totalCC = (($scope.baseMealPrice * $scope.taxRate)/100) + (($scope.baseMealPrice * $scope.tipPercentage)/100) + $scope.baseMealPrice;
        
        $scope.tipTotal = $scope.tipTotal + (($scope.baseMealPrice * $scope.tipPercentage)/100);
        $scope.mealCount = $scope.mealCount + 1;
        $scope.averageTip = $scope.tipTotal / $scope.mealCount;
        
      }
      else {
        console.log('this form is not valid');
      }
    };

    $scope.cancels = function() {
      console.log('cancel');
      $scope.baseMealPrice = 0;
      $scope.taxRate = 0;
      $scope.tipPercentage = 0;
    };
    
  


  $scope.reset = function() {
    $scope.subtotalCC = 0;
    $scope.tipCC = 0;
    $scope.totalCC = 0;
    $scope.tipTotal = 0;
    $scope.mealCount = 0;
    $scope.averageTip = 0;
  };
  
});
