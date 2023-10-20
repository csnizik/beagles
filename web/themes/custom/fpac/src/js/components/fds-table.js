const $ = window.jQuery = require('jquery');

$('body').on('change', '[data-behavior~="select-table-row"]', function(event) {
  const $self = $(this);
  const $row = $self.closest('tr');
  $row.toggleClass('fds-table__row--selected');
})

$('body').on('change', '[data-behavior~="select-one-table-row"]', function(event) {
  const $self = $(this);
  const $row = $self.closest('tr');
  $row
    .addClass('fds-table__row--selected')
    .siblings('tr')
      .removeClass('fds-table__row--selected')
    ;
  ;
})
