var starter = angular.module('starter.controllers', [])
.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate, $http) {
    $scope.users;
    $scope.users = [];
    $scope.Alldata;
    $http.get('js/image.json').success(function(data) 
    {
        $scope.Alldata = data.images;
        angular.forEach(data.images, function(value)
        {
            if(value.default == 'default'){
                $scope.users.push(value);
            }
        })
        $scope.imsizes = data;
        $scope.imtypes = data;
        $scope.imcolors = data;
        $scope.imdacorations = data;
    })
        $scope.$watch('users', function()
    {
        console.log($scope.users);
    })
        $scope.change = function(user){
        $scope.sizesixarray  = [];
        if(user.size6 == true)
        {
            console.log("size6");
            angular.forEach($scope.Alldata, function(value, key) {
            console.log(key + ': ' + JSON.stringify(value));
              if(value.size == 6 )
              {
                console.log("pass "+ JSON.stringify(value));
                $scope.users.push(value);
                $ionicSlideBoxDelegate.update();
                return true;
                }
            });
            console.log("samar ...... "+JSON.stringify( $scope.users));
            return true;
        }else if (user.size6 == false){
          angular.forEach($scope.users, function(value, key) {
            console.log(key + ': ' + value);
            if(value.size == 6){
                console.log("delete "+ JSON.stringify(value));
                var users = $scope.users;
                users.splice(users.indexOf(value), 2);
               
                }
            });console.log(" delete ...... "+JSON.stringify( $scope.users));
            }
            }
        $scope.change1 = function(user){
        $scope.sizesixarray  = [];
        if(user.size7 == true)
            {angular.forEach($scope.Alldata, function(value, key) {
            console.log(key + ': ' + value);
              if(value.size == 7.5)
              {
                console.log("pass "+ JSON.stringify(value));
                $scope.users.push(value);
                return true;
            }
        });
            console.log(JSON.stringify( $scope.users));
            return true;
        }
        else if (user.size7 == false)
            {
            angular.forEach($scope.users, function(value, key) {
                console.log(key + ': ' + value);
                if(value.size == 7.5){
                   console.log("delete "+ JSON.stringify(value));
                   var users = $scope.users;
                    users.splice(users.indexOf(value), 2);
                   }
                });console.log("delete ...... "+JSON.stringify( $scope.users));
            }
        }
        $scope.change2 = function(user){
        $scope.sizesixarray  = [];
            if(user.size9 == true)
                {angular.forEach($scope.Alldata, function(value, key) {
                    console.log(key + ': ' + value);
                    if(value.size == 9){
                    console.log("pass "+ JSON.stringify(value));
                    $scope.users.push(value);
                    return true;
                    }
                });
                console.log(JSON.stringify( $scope.users));
                return true;
                }
            else if (user.size9 == false){
                console.log("user.size9");
                angular.forEach($scope.users, function(value, key) {
                console.log(key + ': ' + value);
                if(value.size == 9){
                   console.log("delete "+ JSON.stringify(value));
                    var users = $scope.users;
                    users.splice(users.indexOf(value), 2);
                  }console.log("delete ...... "+JSON.stringify( $scope.users));
                });
                }
                }
                $scope.changeR = function(user){
                $scope.sizesixarray  = [];
                if(user.typeR == true)
                {
                    angular.forEach($scope.Alldata, function(value, key) {
                    console.log(key + ': ' + value);
                    if(value.type == "R"){
                        console.log("pass "+ JSON.stringify(value));
                        $scope.users.push(value);
                        return true;
                        }
                    });
                    console.log(JSON.stringify( $scope.users));
                    return true;
                }
                else if (user.typeR == false){
                    console.log("user.typeR");
                    angular.forEach($scope.users, function(value, key) {
                    console.log(key + ': ' + value);
                    if(value.type == "R"){
                        console.log("delete "+ JSON.stringify(value));
                        var users = $scope.users;
                        users.splice(users.indexOf(value), 1);
                  }console.log("delete ...... "+JSON.stringify( $scope.users));
                 });
                }
                }
                $scope.changeS = function(user){
                $scope.sizesixarray  = [];
                if(user.typeS == true)
                {
                    angular.forEach($scope.Alldata, function(value, key) {
                    console.log(key + ': ' + value);
                    if(value.type == "S"){
                        console.log("pass "+ JSON.stringify(value));
                        $scope.users.push(value);
                        return true;
                        }
                    });console.log(JSON.stringify( $scope.users));
                return true;
                }
                else if (user.typeS == false){
                    console.log("user.typeS");
                    angular.forEach($scope.users, function(value, key) {
                    console.log(key + ': ' + value);
                if(value.type == "S"){
                    console.log("delete "+ JSON.stringify(value));
                    var users = $scope.users;
                    users.splice(users.indexOf(value), 1);
                  }console.log("delete ...... "+JSON.stringify( $scope.users));
                });
            }
       }
        $scope.changeWW = function(user){
        $scope.sizesixarray  = [];
        if(user.colorWW == true)
            {
            angular.forEach($scope.Alldata, function(value, key) {
            console.log(key + ': ' + value);
            if(value.color == "WW"){
                console.log("pass "+ JSON.stringify(value));
                $scope.users.push(value);
                return true;
            }
        });
            console.log(JSON.stringify( $scope.users));
            return true;
            }
        else if (user.colorWW == false){
            console.log("user.colorWW");
            angular.forEach($scope.users, function(value, key) {
            console.log(key + ': ' + value);
            if(value.color == "WW"){
                console.log("delete "+ JSON.stringify(value));
                 var users = $scope.users;
                 users.splice(users.indexOf(value), 1);
                  
                 }console.log("delete ...... "+JSON.stringify( $scope.users));
                });
            }
        }
        $scope.changeMC = function(user){
        $scope.sizesixarray  = [];
        if(user.colorMC == true)
            {
                
           angular.forEach($scope.Alldata, function(value, key) {
                console.log(key + ': ' + value);
              
               if(value.color == "MC"){
                    console.log("pass "+ JSON.stringify(value));
                   $scope.users.push(value);
                  return true;
                    
                   }
                });
                console.log(JSON.stringify( $scope.users));
                return true;
                }
        else if (user.colorMC == false){
           console.log("user.colorMC");
            angular.forEach($scope.users, function(value, key) {
            console.log(key + ': ' + value);
              if(value.color == "MC"){
                console.log("delete "+ JSON.stringify(value));
                 var users = $scope.users;
                users.splice(users.indexOf(value), 1);
                 
                }console.log("delete ...... "+JSON.stringify( $scope.users));
                });
            }
    }
        $scope.changNone = function(user){
        scope.sizesixarray  = [];
        if(user.decoNone == true)
            {}
        else if (user.decoNone == false){
            console.log("user.decoNone");
            }
        }
         $scope.changT1 = function(user){
            $scope.sizesixarray  = [];
            if(user.decoT1 == true)
            {
            angular.forEach($scope.Alldata, function(value, key) {
                console.log(key + ': ' + value);
              
               if(value.Decoration == "T1"){
                    console.log("pass "+ JSON.stringify(value));
                   $scope.users.push(value);
                    return true;
                }
            });
            console.log(JSON.stringify( $scope.users));
            return true;
            }
            else if (user.decoT1 == false){
           console.log("user.decoT1");
                angular.forEach($scope.users, function(value, key) {
                console.log(key + ': ' + value);
              if(value.Decoration == "T1"){
                console.log("delete "+ JSON.stringify(value));
                 var users = $scope.users;
                users.splice(users.indexOf(value), 1);
            }console.log(" delete ...... "+JSON.stringify( $scope.users));
        });
    }
}
          $scope.changT2 = function(user){
          $scope.sizesixarray  = [];
        if(user.decoT2 == true)
            {
            angular.forEach($scope.Alldata, function(value, key) {
                console.log(key + ': ' + value);
              
               if(value.Decoration == "T2"){
                    console.log("pass "+ JSON.stringify(value));
                   $scope.users.push(value);
                  return true;
                    
                   }
                
               
            });
                console.log(JSON.stringify( $scope.users));
                return true;
        }
        else if (user.decoT2 == false){
           console.log("user.decoT2");
 angular.forEach($scope.users, function(value, key) {
                console.log(key + ': ' + value);
              
               if(value.Decoration == "T2"){
                   console.log("delete "+ JSON.stringify(value));
                 var users = $scope.users;
                    users.splice(users.indexOf(value), 1);
                  
                  
                 
                    
                   }
                
               console.log("samar delete ...... "+JSON.stringify( $scope.users));
                
            });
            
            
         }
       
        
    }
           $scope.changT3 = function(user){
          $scope.sizesixarray  = [];
        if(user.decoT3 == true)
            {
                
           angular.forEach($scope.Alldata, function(value, key) {
                console.log(key + ': ' + value);
              
               if(value.Decoration == "T3"){
                    console.log("pass "+ JSON.stringify(value));
                   $scope.users.push(value);
                  return true;
                    
                   }
                
               
            });
                console.log(JSON.stringify( $scope.users));
                return true;
        }
        else if (user.decoT3 == false){
           console.log("user.decoT3");
 angular.forEach($scope.users, function(value, key) {
                console.log(key + ': ' + value);
              
               if(value.Decoration == "T3"){
                   console.log("delete "+ JSON.stringify(value));
                 var users = $scope.users;
                    users.splice(users.indexOf(value), 1);
                  
                  
                 
                    
                   }
                
               console.log("samar delete ...... "+JSON.stringify( $scope.users));
                
            });
            
            
         }
       
        
    }
    $scope.$watch('data.sliderDelegate', function(newVal, oldVal) {
      if (newVal != null) {
        $scope.data.sliderDelegate.on('slideChangeEnd', function() {
          $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
          //use $scope.$apply() to refresh any content external to the slider
          $scope.$apply();
        });
      }
    });
     
    
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
     
      
  }
})




