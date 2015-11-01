var catInfo = [	{'name': 'Sir Gregory', 
				'img': 'cat1.jpg'}, 
				{'name': 'Lawrence', 
				'img': 'cat2.jpg'},
				{'name': 'Mister Manager', 
				'img': 'cat3.jpg'},
				{'name': 'Flat Snout', 
				'img': 'cat4.jpg'},
				{'name': 'Bubbles', 
				'img': 'cat5.jpg'},
				{'name': 'Ro-meow & Julie-cat',
				'img': 'cat6.jpg'}
				]
var catScore = [];
for (var i = 0; i < catInfo.length; i++) {
	catScore.push(0)
}
var divHeights = [];
$(document).ready(function(){
/*	
$(catInfo).each(function(e){
	var catContainer = document.createElement('div');
	$(catContainer).addClass('cat-container');	
	$(catContainer).data('cat', (e+1));
	var catName = document.createElement('p');
	$(catName).text(catInfo[e].name);
	$(catName).addClass('cat-name');
	var catImage = document.createElement('img');
	$(catImage).attr('src', 'assets/' + catInfo[e].img);
	$(catImage).addClass('cat-image')
	var thisID = 'cat' + (e+1);
	$(catImage).attr('id', thisID);
	var imageDiv = document.createElement('div');
	$(imageDiv).addClass('image-container');
	//add score area
	var catScore = document.createElement('p');
	$(catScore).html('Score: <span id="cat-score-' + (e+1) + '">0</span>');
	$(catScore).addClass('cat-score');
	$(catScore).attr('id', 'cat-score-container-' + (e+1));
	$(catContainer).append(catName);
	$(imageDiv).append(catImage);
	$(catContainer).append(imageDiv);
	$(catContainer).append(catScore);
	$('#outer-container').append(catContainer);

})
*/
//start list of cats
var listDiv = $('#cat-list');
var catList = document.createElement('ul');
$(listDiv).append(catList);

$(catInfo).each(function(e){
	//list
	var catListItem = document.createElement('li');
	$(catListItem).addClass('cat-item');
	$(catListItem).attr('id', 'cat-name-' + (e+1));
	$(catListItem).data('associated-container', 'cat-container-' + (e+1))
	var catName = document.createElement('h3');
	$(catName).html(catInfo[e].name + ' - Score: <span id="cat-list-score-' + (e+1) + '">0</span>');
	$(catName).addClass('cat-name');
	$(catListItem).append(catName);
	$(catList).append(catListItem);
	
	//cat container
	var catContainer = document.createElement('div');
	$(catContainer).addClass('cat-container');	
	$(catContainer).data('cat', (e+1));
	$(catContainer).data('associated-list-item', 'cat-name-' + (e+1));
	$(catContainer).attr('id', 'cat-container-' + (e+1));	
	var catImage = document.createElement('img');
	$(catImage).attr('src', 'assets/' + catInfo[e].img);
	$(catImage).addClass('cat-image')
	var thisID = 'cat' + (e+1);
	$(catImage).attr('id', thisID);
	var imageDiv = document.createElement('div');
	$(imageDiv).addClass('image-container');
	$(imageDiv).append(catImage);
	$(catContainer).append('<p class="cat-name">' + catInfo[e].name + ' - Score: <span id="cat-image-score-' + (e+1) + '">0</span></p>');
	$(catContainer).append(imageDiv);
	$('#image-container').append(catContainer);
	
})

$('.cat-item').click(function(){
	var catContainerID = '#' + $(this).data('associated-container');
	$('.cat-container').hide();
	$(catContainerID).show();
})

$('.cat-container').click(function(){
	var catNumber = $(this).data('cat');
	var catScoreNumber = $(this).data('cat') - 1;
	console.log(catScore[catScoreNumber]);
	catScore[catScoreNumber] = catScore[catScoreNumber] + 1;
	$('#cat-image-score-' + catNumber).text(catScore[catScoreNumber]);
	$('#cat-list-score-' + catNumber).text(catScore[catScoreNumber]);	
})



setTimeout(function(){
	//set equal heights
$('.cat-container').each(function(e){
//push each container height to array
	var thisHeight = $(this).height();
	divHeights.push(thisHeight);
})
var containerHeight;
//compare 2 heights; smaller one is set to containerHeight
containerHeight = divHeights[0];
console.log(containerHeight);
$('.cat-container').css('max-height', containerHeight);
}, 500)
})