skysight.directive('tooltipFollowCursor', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var x, y;
      element.on('mousemove', function(e) {
        x = e.pageX, y = e.pageY;
        this.children[1].style.top = (y - 270) + 'px';
        this.children[1].style.left = (x - 120) + 'px';
      });
    }
  };
})