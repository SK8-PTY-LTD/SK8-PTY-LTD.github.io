'use strict';

/* Controllers */

var designApp = angular.module('designApp', []);

designApp.controller('ProductListCtrl', function($scope) {
	$scope.product = [{
		'img': 'images/pic02.jpg',
		'name': 'Deepseadeep • sea',
		'summary':'劳力士一只工艺超凡的潜水员腕表，轻巧且坚不可摧。'
	}, {
		'img': 'images/pic02.jpg',
		'name': 'Apple • OOP',
		'summary':'这是一个瑰丽优雅和卓越功能的惊艳结合。'
	}, {
		'img': 'images/pic02.jpg',
		'name': 'Desert • sand',
		'summary':'其特点为独特的富丽表盘及精巧细致的宝石镶嵌，包括钻石、蓝宝石或红宝石。'
	}, {
		'img': 'images/pic02.jpg',
		'name': 'Rolex • man',
		'summary':'仅以18ct黄金、白色黄金或永恒玫瑰金铸造，并由劳力士铸造厂研制。'
	},{
		'img': 'images/pic02.jpg',
		'name': 'Rolex • man',
		'summary':'仅以18ct黄金、白色黄金或永恒玫瑰金铸造，并由劳力士铸造厂研制。'
	},{
		'img': 'images/pic02.jpg',
		'name': 'Rolex • man',
		'summary':'仅以18ct黄金、白色黄金或永恒玫瑰金铸造，并由劳力士铸造厂研制。'
	}];


});

designApp.directive("productCell", function() {
	return {
		restrict: "E",
		replace: true,
		templateUrl: 'product.html'
	};
});