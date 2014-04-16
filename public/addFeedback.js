$(function() {

  $('#feedbackInput').focus()

  $('#feedbackInput').on('keypress', function(e){

  	if(e.keyCode === 13) {

  		var input = $( this ).val()
      var inputHTML = "<p class='response'>" + input + "</p>"
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
        
        // Adding new submition to the current visible list
        $('#feedbackBlock').prepend(inputHTML)

      })

      $(this).val("")
      
  	}
  })

})


