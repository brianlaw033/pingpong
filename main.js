$(document).ready(function(){
  $('#value').keydown(function(key){
    if(key.which === 13){
      $('#pingpong-button').click();
    }
  })
  $('#pingpong-button').click(function pingpong(){
    var value = $('#value').val();
    for(i = 1; i <= value; i++){
    if(i%15===0){
        $('.result').append('<li>pingpong</li>')
    }else if(i%3===0){
      $('.result').append('<li>ping</li>')
      }else if(i%5===0){
        $('.result').append('<li>pong</li>')
      }else {
          $('.result').append('<li>'+i+'</li>');
        }
      }
  })
})
