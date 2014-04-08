$(function() {

  $('#feedback').on('keypress', function(e){
  	if(e.keyCode === 13)
  		var input = $( this ).val()

  		console.log(input)
  })

})

var submitFB = function(str) {
	$.post()
}