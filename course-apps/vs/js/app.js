var catInfo = [{'name': 'Sir Gregory', 'img': 'cat1.jpg'}, {'name': 'Lawrence', 'img': 'cat2.jpg'}]
var catScore = [];
for (var i = 0; i < catInfo.length; i++) {
	catScore.push(0)
}
var divHeights = [];
$(document).ready(function(){
$(catInfo).each(function(e){
	var catContainer = document.createElement('div');
	$(catContainer).addClass('cat-container');	
	$(catContainer).data('cat', (e+1));
	var catName = document.createElement('p');
	$(catName).text(catInfo[e].name);
	$(catName).addClass('cat-name');
	var catImage = document.createElement('img');
	$(catImage).attr('src', 'assets/' + catInfo[e].img);
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
$('.cat-container').click(function(){
	var catNumber = $(this).data('cat');
	var catScoreNumber = $(this).data('cat') - 1;
	console.log(catScore[catScoreNumber]);
	catScore[catScoreNumber] = catScore[catScoreNumber] + 1;
	$('#cat-score-' + catNumber).text(catScore[catScoreNumber]);
})



setTimeout(function(){
	//set equal heights
$('.image-container').each(function(e){
//push each container height to array
	var thisHeight = $(this).height();
	divHeights.push(thisHeight);
})
var containerHeight;
//compare 2 heights; smaller one is set to containerHeight
if (divHeights[0] < divHeights[1]){
	containerHeight = divHeights[0];
} else {containerHeight = divHeights[1]};
console.log(containerHeight);
$('.image-container').css('height', containerHeight);
}, 500)
})