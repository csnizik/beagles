var $ = window.jQuery = require('jquery');

$('body').on('change', '[data-behavior~="toggle-fullscreen-components"]', function(event) {

  $('.fds-section')    .toggleClass('fds-section--fullscreen');
  $('.fds-tophat')     .toggleClass('fds-tophat--fullscreen');
  $('.fds-header-app') .toggleClass('fds-header-app--fullscreen');
  $('.fds-nav-global') .toggleClass('fds-nav-global--fullscreen');
  $('.fds-topper')     .toggleClass('fds-topper--fullscreen');
  $('.fds-footer')     .toggleClass('fds-footer--fullscreen');
  $('.fds-screen-id')  .toggleClass('fds-screen-id--fullscreen');

})

