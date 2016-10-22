$(document).ready(function() {
  $('.project-list li').on('click', function() {
    $li = $(this);
    $li.find('.project-data').stop().slideToggle(400, function() {
      $li.toggleClass('minus');
    });
  })
});
