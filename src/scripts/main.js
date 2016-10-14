const $ = require('jquery'),
      Waypoints = require('waypoints');;

$(function () {
  new Waypoint({
    element: document.getElementById('t'),
    handler: function(direction) {
      console.log(direction);
    },
    offset: '50%'
  })
});
