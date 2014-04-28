$(function() {


  $('#feedbackInput').focus()


  // add input when user presses enter key
  $('#feedbackInput').on('keypress', function(e){

  	if(e.keyCode === 13) {

  		var input = $( this ).val()
      var inputHTML = "<div class='feedbackBlock'><p class='response'>" + input + "</p></div>"
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
        $('#AllFeedback').prepend(inputHTML)


      })

      $(this).val("")
      
  	}
  })

  // opens admin reply field
  $('.feedbackBlock').click(function(){
    
    KEY = $(this).data('key')
    
    $('.adminInput', this).toggleClass('open')
    $('.adminInput', this).focus()
  })
  

  // add admin feedback to database
  $('.adminInput').on('keypress', function(e){

    if(e.keyCode === 13) {
      var val = $( this ).val()
      KEY = KEY.toString()
      IN = {'key':KEY, 'text':val}

      $.ajax({
        url: '/admin',
        method: 'POST',
        data: IN,
      })
      .done(function(res) {


      })
    }

  })

})

 





