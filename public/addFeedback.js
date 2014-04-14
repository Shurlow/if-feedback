$(function() {

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
        
        // Adding new submition to the current list
        $('#feedbackBlock').prepend(inputHTML)

      })
      
      $(this)
      .animate(
        {backgroundColor: 'white'},
        {duration: 120,
          easing:"easeInExpo",
          queue: false})
      .animate({height: "0%"},
        {duration: 100,
          easing: "easeInOutQuart",
          queue: false})

  	}
  })

})


