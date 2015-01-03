(function () {
    'use strict';
    
    var myApp = angular.module('MyApp', ["treeControl"]);
    
	myApp.controller('AppCtrl', function($scope) {

        $("#example").popover(); 
    
		$scope.heading = "Tree POC";

		$scope.selectedItem = "";

		$scope.options = {
			nodeChildren: "subitems"
		};

		$scope.data = [{id: 0, label: "أرض", subitems: [
	{
		id: 1,
		label: "Africa",
		subitems: [{
			id: 11,
			label: "Algeria",
			subitems: []
		}, {
			id: 12,
			label: "Egypt",
			subitems: []
		}, {
			id: 13,	label: "Libya",	subitems: []
		}, {
			id: 14,	label: "Morocco", subitems: []
		}, {
			id: 15,	label: "Sudan",	subitems: []
		}, {
			id: 16,label: "Tunisia",subitems: []
		}]
	},{
		id: 2,
		label: "Europe",
		subitems: [{
			id: 21, label: "Albania", subitems: []
		}, {
			id: 22, label: "Belgium", subitems: []
		}, {
			id: 23, label: "Finland", subitems: []
		}, {
			id: 24, label: "Denmark", subitems: []
		}, {
			id: 25,	label: "Germany", subitems: []
		}, {
			id: 26, label: "Greece", subitems: []
		}, {
			id: 27, label: "Latvia", subitems: []
		}]
	}, {
		id: 3,
		label: "Asia",
		subitems: [{
			id: 31, label: "Maldives", subitems: []
		}, {
			id: 32,	label: "United Arab Emirates", subitems: [
		{id: 321, label: "Fujairah", subitems:[]}
		]
	}]
}, {
	id: 4, label: "America",	subitems: [{
		id: 41, label: "Canada", subitems: []
	}, ] 
}, {
	id: 5, label: "Antarctica", subitems: []
}, {
	id: 6, label: "Australia",	subitems: []
}
		]}];

		$scope.onNodeSelection = function(node) {
			console.log(node.label + " was selected!");
			$scope.selectedItem = node.label;
		};

	});

})();
