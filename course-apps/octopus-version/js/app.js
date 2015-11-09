$(function(){
var catInfo = [];	
	var model = {
		init: function(){
			catInfo.push({'name': 'Sir Gregory', 
				'img': 'cat1.jpg',
				'clickScore': 0}, 
				{'name': 'Lawrence', 
				'img': 'cat2.jpg',
				'clickScore': 0},
				{'name': 'Mister Manager', 
				'img': 'cat3.jpg',
				'clickScore': 0},
				{'name': 'Flat Snout', 
				'img': 'cat4.jpg',
				'clickScore': 0},
				{'name': 'Bubbles', 
				'img': 'cat5.jpg',
				'clickScore': 0},
				{'name': 'Ro-meow & Julie-cat',
				'img': 'cat6.jpg',
				'clickScore': 0}
				);
		},
		
		getAllCats: function(){
			return catInfo;
		}
	}
	
	var octopus = {
		updateSelectedCat: function(catNum){
			var catNumber = $(catNum).data('cat');
			imageView.render(catNumber);
		},
		updateScore: function(catNum){
			var catNumber = $(catNum).data('cat');
			var catListID = $('#cat-list-score-' + catNumber);
			catInfo[catNumber].clickScore += 1;
			imageView.render(catNumber);
			catListID.html(catInfo[catNumber].clickScore);
		},
		getCats: function(){			
			return model.getAllCats();
		},
		init: function(){
			model.init();
			listView.init();
			imageView.init();
				var catListHeight = $('#cat-list').height();
				$('#outer-container').height(catListHeight);

		}
		
	}
	
	var listView = {
		render: function(){
				var htmlStr = '';
				octopus.getCats().forEach(function(cat, e){
					htmlStr += '<li class="cat-item" id="cat-name-' + (e) + '" data-cat="' + (e) +'">'+
                        '<h3 class="cat-name">' + cat.name + ' - Score: <span id="cat-list-score-' + (e) + '">0</span>' +
                    '</li>';
				});
				this.catList.html(htmlStr);
		},
		init: function(){
				this.catList = $('#cat-list');
				listView.render();
				var clickedListItem = $('.cat-item');
				$(clickedListItem.click(function(cat){
					octopus.updateSelectedCat(this);
				}))
		}
	}
	
	var imageView = {
		render: function(catNumber){
				octopus.getCats();
				this.catImage.attr('src', 'assets/' + catInfo[catNumber].img);
				this.catImage.data('cat', catNumber);
				this.catNameContainer.text(catInfo[catNumber].name);
				this.catScoreContainer.text(catInfo[catNumber].clickScore);
		},
		init: function(){
				this.catImage = $('#cat-image');
				this.catNameContainer = $('#cat-info-name');
				this.catScoreContainer = $('#cat-info-score');
				this.catNumber = 0;
				this.catImage.click(function(){
					octopus.updateScore(this);
				})
				imageView.render(this.catNumber);
		}
	}
/*	
	var adminView = {
		render: function(){
			
		}
	}
*/
	octopus.init();
})