$(function() {

  $('#feedback').on('keypress', function(e){
  	if(e.keyCode === 13){
  		var input = $( this ).val()
  		
  		// should change to $.ajax instead...
  		$.post('http://localhost:3000/', input)
  	}
  })

})