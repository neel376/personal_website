
var myApp = angular.module("MobileApp", ["ui.bootstrap"]);
// define factory for data source
myApp.factory("Cats", function(){
   var cats = [
    {
      name: "Computer Science"
    }, 
    {
      name: "Philosophy"
    }, 
    {
      name: "Statistics"
    }, 
    {
      name: "Creative Expression"
    },
    {
      name: "International Foreign Culture"
    },
    {
      name: "Writing Intensive"
    }

  ];
  return cats;
  });

myApp.factory("Courses", function(){
  var courses = [
    {
      name: "0447 Intro to Systems Software",
      credits: 3
    }, 
    {
      name: "0449 Computr Orgztn & Assmbly Lang",
       credits: 3
    }, 
    {
      name: "1221 Applied Regression",
       credits: 3
    }, 
    {
      name: "0400 East Asian Civilization to 1800",
       credits: 3
    },
    {
      name: "0007 Intro To Computer Programming",
       credits: 4
    },
    {
      name: "0008 Int Computer Prgmg With Python",
       credits: 3
    }

  ];
  
  return courses;
  
});
myApp.factory("Cart", function(){
  var cart = [];
  
  return cart;
  
});

// setup controller and pass data source
myApp.controller("MainController", function($scope, Cats, Courses, Cart, $timeout) {
   $timeout(function(){
        $scope.showLoad = !$scope.showLoad;
       }, 2000);
  var tempCart = [];
  $scope.errmsg = "";
  $scope.checked = 'name';
  $scope.required = 'Required';
  
 //Change color of clear button if input box is empty  
 $('#courses').keyup(function() {
    var value = $.trim($("#courses").val());
    $('#searchclear').addClass('clearable');    
    if(value.length == 0){
        $('#searchclear').removeClass('clearable');
    }
  });
 $('#cats').keyup(function() {
    var value = $.trim($("#cats").val());
    $('#searchclear2').addClass('clearable');    
    if(value.length == 0){
        $('#searchclear2').removeClass('clearable');
    }
  });
 
  $scope.selected = undefined;
  $scope.courses = Courses;
  $scope.cats = Cats;
  $scope.coursecart = Cart;
  $scope.tempname;
  
  $scope.addClass = function(course, checked, required, time){
   //If input is empty, ask user to enter a valid course
    if( $("#courses").val() == ''){
       $('#courses').attr('title', "Enter Valid Course");
      $("#courses").popover('show');
       $timeout(function(){
        $("#courses").popover('destroy');

       }, 2000);
  
    }else{
        if(course == undefined || course.name == undefined){
          $('#courses').attr('title', "Enter Valid Course");
          $("#courses").popover('show');
          $timeout(function(){
              $("#courses").popover('destroy');
          }, 2000);
          $('#courses').attr('title', "Enter Valid Category");
          $("#cats").popover('show');
          $timeout(function(){
              $("#cats").popover('destroy');
          }, 2000);

        }else{
           $scope.isDuplicate = false;
            if(checked == "name"){ 
              for(var i = 0; i < $scope.coursecart.length; i++){
                if(course.name == $scope.coursecart[i].name){
                  $('#courses').attr('title', "Course Already in Cart");
                  $("#courses").popover('show');
                  $timeout(function(){
                  $("#courses").popover('destroy');

                }, 2000);
                    $scope.isDuplicate = true;
                    break;
                }
              }
            }else{
              for(var i = 0; i < $scope.coursecart.length; i++){
                if(course.name == $scope.coursecart[i].name){
                    course.count += 1;
                    break;
                }
              }
            }
            if(!$scope.isDuplicate){
              course.type = checked;
              course.required = required;
              course.time = time;
              if(course.type == "category"){
                course.meta = "course";
              }

              tempCart.push(course);
              $scope.coursecart = tempCart;
              $("#courses").val('');
              $('#searchclear').removeClass('clearable');
              $("#cats").val('');
              $('#searchclear2').removeClass('clearable');
            }
          }
        }
    }
   //Clear input field
   $scope.clear = function(){
    $("#courses").val('');
    $('#searchclear').removeClass('clearable');
    $("#cats").val('');
    $('#searchclear2').removeClass('clearable');
  }
  //Clear Cart
  $scope.clearAll = function(){
    $scope.coursecart = [];
     tempCart = [];
  }
  //Clear single course
  $scope.removeCourse = function($index){
    $scope.coursecart.splice($index, 1);
  }
  
  
  
});
