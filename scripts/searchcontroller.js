'use strict';

 app.controller('SearchController', ['$scope',function ($scope) {


	$scope.datas = [
		{
			name: 'Mashrafe Mortaza',
			picture: 'image/mash.jpg',
			role:'Right arm bowler'
		},
		{
	 	name: 'Sakib Al Hasan',
			picture: 'image/sakib.jpg',
			role:'Allrounder'
		},
		{
	 	name: 'Soumya Sarkar',
			picture: 'image/somuya.jpg',
			role:'Left hand batsman'
		},
		{
	 	name: 'Sabbir Rahman',
			picture: 'image/sabbir.jpg',
			role:'Right hand batsman'
		},
		{
	 	name: 'Mustafizur Rahman',
			picture: 'image/mustafiz.jpg',
			role:'Left arm fast bowler'
		},
		{
	 	name: 'King Suvagata Hom',
			picture: 'image/hom.jpg',
			role:'Dangerous spinner'
		},
			{
	 	name: 'Professor Mithun Ali',
			picture: 'image/mithun.jpg',
			role:'Hard hitter batsman'
		},
		{
	 	name: 'Musfiqur Rahman',
			picture: 'image/mushfiq.jpg',
			role:'Wicket keeper'
		}

];
  }]);