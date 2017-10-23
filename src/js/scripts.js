'use strict';

// (function(document, window, index) {
//   var inputs = document.querySelectorAll('.custom-file-input');
//   Array.prototype.forEach.call(inputs, function(input) {
//     var label = input.nextElementSibling,
//       labelVal = label.innerHTML;
//
//     input.addEventListener('change', function(e) {
//       var fileName = '';
//       if (this.files && this.files.length > 1)
//         fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
//       else
//         fileName = e.target.value.split('\\').pop();
//
//       if (fileName)
//         label.querySelector('span').innerHTML = fileName;
//       else
//         label.innerHTML = labelVal;
//     });
//
//     // Firefox bug fix
//     input.addEventListener('focus', function() {
//       input.classList.add('has-focus');
//     });
//     input.addEventListener('blur', function() {
//       input.classList.remove('has-focus');
//     });
//   });
// }(document, window, 0));
//
// var fileInputLicense = document.getElementById('signUpLicense');
// var clearLicense = document.getElementById('signUpLicenseClear');
// fileInputLicense.onchange = function() {
//   if (fileInputLicense.files.length > 0) {
//     clearLicense.style.display = "block";
//   } else {
//     clearLicense.style.display = "none";
//   }
// };
//
// var fileInputResolution = document.getElementById('signUpResolution');
// var clearResolution = document.getElementById('signUpResolutionClear');
// fileInputResolution.onchange = function() {
//   if (fileInputResolution.files.length > 0) {
//     clearResolution.style.display = "block";
//   } else {
//     clearResolution.style.display = "none";
//   }
// };
//
// var fileInputOther = document.getElementById('signUpOther');
// var clearOther = document.getElementById('signUpOtherClear');
// fileInputOther.onchange = function() {
//   if (fileInputOther.files.length > 0) {
//     clearOther.style.display = "block";
//   } else {
//     clearOther.style.display = "none";
//   }
// };

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

  $('.custom-file-string').change(function() {
    var clearButton = $('.custom-file-clear');
    if ($(this).innerHTML === true) {
      clearButton.addClass('d-block');
    }
  })
})
// console.log("Hello, World!");
