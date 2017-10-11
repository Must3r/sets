jQuery(document).ready(function() {
  $('.popover-trigger').webuiPopover({
    placement: 'bottom',
    animation: 'pop'
  });

  $('#miniRegCall').on('click', function() {
    $('.menu-mini-reg').slideToggle(300);
  })

  $('#miniListCall').on('click', function() {
    $('.menu-mini-list').slideToggle(300);
  })

  $('#miniListCallFooter').on('click', function() {
    $('.menu-mini-list-footer').slideToggle(300);
  })

  $('.menu-mini-close').on('click', function() {
    $(this).parent().slideToggle(300);
  })

  $('.menu-mini-close-footer').on('click', function() {
    $(this).parent().slideToggle(300);
  })
})
// console.log("Hello, World!");
