
// https://angular-ui.github.io/

// setup app and pass ui.bootstrap as dep
var myApp = angular.module("angularTypeahead", ["ui.bootstrap"]);

// define factory for data source
myApp.factory("States", function(){
  var states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
  
  return states;
  
});

// setup controller and pass data source
myApp.controller("TypeaheadCtrl", function($scope, States) {
  
  $scope.selected = undefined;
  
  $scope.states = States;
  
});




















// (function () {
//   'use strict';
//   angular
//       .module('MobilseApp',['ngMaterial', 'ngMessages'])
//       .controller('MainConstroller', DemoCtrl);

//   function DemoCtrl ($timeout, $q, $log, $scope) {
//     var self = this;

//     self.simulateQuery = false;
//     self.isDisabled    = false;

//     // list of `course` value/display objects
//     self.courses        = loadAll();
//     self.querySearch   = querySearch;
//     self.selectedItemChange = selectedItemChange;
//     self.searchTextChange   = searchTextChange;

//     self.newcourse = newcourse;

//     function newcourse(course) {
      
//     }

//     // ******************************
//     // Internal methods
//     // ******************************

//     /**
//      * Search for courses... use $timeout to simulate
//      * remote dataservice call.
//      */
//     function querySearch (query) {
//       var results = query ? self.courses.filter( createFilterFor(query) ) : self.courses,
//           deferred;
//       if (self.simulateQuery) {
//         deferred = $q.defer();
//         $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
//         return deferred.promise;
//       } else {
//         return results;
//       }
//     }

//     function searchTextChange(text) {
//       $log.info('Text changed to ' + text);
//     }

//     function selectedItemChange(item) {
//       $log.info('Item changed to ' + JSON.stringify(item));
//     }

//     /**
//      * Build `courses` list of key/value pairs
//      */
    
//     function loadAll($scope) {
//       // var allcourses = '0447 Intro to Systems Software, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
//       //         Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
//       //         Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
//       //         Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
//       //         North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
//       //         South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
//       //         Wisconsin, Wyoming';

//        var courses = [ 
//        {
//         name:"Intro to Systems Software",
//         catalogue: "0449",
//         credits: 3
//        },
//        {
//          name:"Computer Organization and Assembly",
//          catalogue: "0447",
//          credits: 3
//        },
//        {
//          name:"Applied Regression",
//          catalogue: "1221",
//          credits: 4
//        } 
//      ];
//       // console.log($scope.courses[0].name);
//       var allcourses = courses[0].name;


//       return allcourses.split(/, +/g).map( function (course) {
//         return {
//           value: course.toLowerCase(),
//           display: course
//         };
//       });
//     }

//     /**
//      * Create filter function for a query string
//      */
//     function createFilterFor(query) {
//       var lowercaseQuery = angular.lowercase(query);

//       return function filterFn(course) {
//         return (course.value.indexOf(lowercaseQuery) === 0);
//       };

//     }
//   }
// })();


// /**
// Copyright 2016 Google Inc. All Rights Reserved. 
// Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
// **/