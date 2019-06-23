$(document).ready(() => {
    $('#text').on('keyup', (event) => {
    $('.preview').html($(event.currentTarget).val())
    });
    
    $('#font').change(() => {
      $('.preview').css('fontFamily', $('#font').val());
    })
    
    $('#weight').change(() => {
      $('.preview').css('fontWeight', $('#weight').val())
    })
    
    $('#size').on('keyup', () => {
      const fontSize = $('#size').val() + 'px';
      $('.preview').css('fontSize', fontSize);
    });
    
    
  });