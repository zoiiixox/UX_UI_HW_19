console.log("Your index.js file is loaded correctly!");
$(document).ready(function() {

    function scrollToSection(event) {
      event.preventDefault();
      const target = $(this).attr('href');
      const section = $(target);

      if (section.length) {
        const yOffset = -50; 
        const y = section.offset().top + yOffset;
        $('html, body').animate({ scrollTop: y }, 1000);
      }
    }
}

$('.navigation a').on('click', scrollToSection(){
});

$(document).ready(function() {

  function addHoverClass() {
    $(this).addClass('hover-effect');
  }

  function removeHoverClass() {
    $(this).removeClass('hover-effect');
  }

  $('.email, .linkedin').hover(addHoverClass, removeHoverClass);
});

$(document).ready(function() {
    $('.AbilityOnline, .Healink').hover(function() {
      $(this).addClass('hover-effect');
    }, function() {
      $(this).removeClass('hover-effect');
    });
  });
  $(document).ready(function() {
    $('.AbilityOnline, .Healink, .gridContainer button').hover(function() {
      $(this).addClass('hover-effect');
    }, function() {
      $(this).removeClass('hover-effect');
    });
  });