/*global bookstrap: true */
require([
  'jquery',
  'MyApp',
  'lib/events',
  'lib/text!../nav.html',
  'lib/ftscroller',
  'lib/underscore'
  ], function($, events, nav) {

    function deviceready() {
      console.log('Device ready');
      $('body').append('<p>device ready!</p>');
    }

    $(function() {
      console.log('DOM ready');
      var isMobileBrowser = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
      if (isMobileBrowser) {
        document.addEventListener('deviceready', deviceready, false);
      } else {
        deviceready();
      }
    });
});