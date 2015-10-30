var catScore = 0;
$(document).ready(function(){
$('#cat').click(function(){
	catScore = catScore + 1;
	$('#cat-score').text(catScore);
})
})