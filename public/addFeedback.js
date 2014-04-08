$(function() {

  $('#feedback').on('keypress', function(e){

  	if(e.keyCode === 13) {

  		var value = $( this ).val()

      var data = {
        thingy: value
      }

      $.ajax({
        url: '/',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(data),
      })
      .done(function(res) {
        console.log(res)
      })

  	}
  })

})
