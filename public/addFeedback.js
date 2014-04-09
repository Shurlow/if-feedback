$(function() {

  $('#feedback').on('keypress', function(e){

  	if(e.keyCode === 13) {

  		var input = $( this ).val()

      var time = Date.now()
      
      var data = {
        key: time,
        value: input
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
      $(this).hide()

  	}
  })

})
