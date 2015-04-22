$(document).ready(function(){
	$('.dropdown').click(function(e){
		$(this).find('ul, .drop-icon').toggleClass('open');
		e.preventDefault();
	});
});