// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.
// None of this is production-quality. Do not use for production. Use as inspiration and guidance for yours.

var Helper = require('../utilities/helper');

// Disable functionality if class is present
if (document.querySelectorAll('.docs__page').length == 0) {

  var navGlobal = document.querySelectorAll('.fds-nav-global');
  var navGlobal__menuItem = document.querySelectorAll('.fds-nav-global__link--has-sub-menu');
  var navGlobal__main = document.querySelectorAll('.fds-tophat, .fds-header-app, #main-content, .fds-footer');

  Helper.forEach(navGlobal__main, function (index, value) {
    var _el = value; 

    _el.addEventListener('click', function (e) {
      if (document.querySelector('.fds-nav-global__link[aria-expanded="true"]')) {
        document.querySelector('.fds-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
        document.querySelector('.fds-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
      }
    });
  

  });

  Helper.forEach(navGlobal__menuItem, function (index, value) {
    var _el = value;

    _el.addEventListener('click', function (e) {

      var _self = this;
      var _component = Helper.getClosest(_self, '.fds-nav-global');
      var _listItem = Helper.getClosest(_self, '.fds-nav-global__list-item');
      var _target = _listItem.querySelector('.fds-nav-global__sub-menu');
      var _currentlyActiveTab = _component.querySelector('.fds-nav-global__link[aria-expanded="true"]');
      var _currentlyActiveFlyout = _component.querySelector('.fds-nav-global__sub-menu[aria-hidden="false"]');
      var _menuState = _self.getAttribute('aria-expanded');
      // $target.classList.add('OUTLINE');

      if (_currentlyActiveTab) {
        _currentlyActiveTab.setAttribute('aria-expanded', 'false');
        _currentlyActiveFlyout.setAttribute('aria-hidden', 'true');
      }

      // TOGGLE MENU ITEM OPENED STATE
      if (_menuState == 'true') {
        // $self.classList.remove('OUTLINE');
        _self.setAttribute('aria-expanded', 'false');
        _target.setAttribute('aria-hidden', 'true');
      } else {
        // $self.classList.add('OUTLINE');
        _self.setAttribute('aria-expanded', 'true');
        _target.setAttribute('aria-hidden', 'false');
      }

      // if ($self.classList.contains('OUTLINE')) {
      //   $self.classList.remove('OUTLINE');
      //   $target.setAttribute('aria-hidden', 'true');
      // } else {
      //   $self.classList.add('OUTLINE');
      //   $target.setAttribute('aria-hidden', 'false');
      // }
      //
    });

    _el.addEventListener('focus', function (e) {
      if (document.querySelector('.fds-nav-global__link[aria-expanded="true"]')) {
        document.querySelector('.fds-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
        document.querySelector('.fds-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
      }
  
    });

  });

  Helper.forEach(navGlobal, function (index, value) {
    var _el = value;
    _el.addEventListener('keydown', function (e) {      
      if(e.keyCode == 27){
        document.querySelector('.fds-nav-global__link[aria-expanded="true"]').setAttribute('aria-expanded', 'false');
        document.querySelector('.fds-nav-global__sub-menu[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
      }
    });
  });

}
