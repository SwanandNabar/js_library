// Code goes here

window.dome = (function() {
  function Dome(els) {
    for (var i = 0; i < els.length; i++) {
      this[i] = els[i];
    }
    this.length = els.length;
  }

  //map is an uitlity method designed to loop over elements
  Dome.prototype.map = function(callback) {
    var results = [],
      i = 0;
    for (; i < this.length; i++) {
      results.push(callback.call(this, this[i], i));
    }
    return results;
  };

  //forEach -->each
  Dome.prototype.forEach = function(callback) {
    this.map(callback);
    return this;
  };

  //will return an array or single item 
  Dome.prototype.mapOne = function(callback) {
    var m = this.map(callback);
    return m.length > 1 ? m : m[0];
  };

  var dome = {
    //get
    get: function(selector) {
      var els;
      if (typeof selector === "string") {
        els = document.querySelectorAll(selector);
      } else if (selector.length) {
        els = selector;
      } else {
        els = [selector];
      }
      return new Dome(els);
    }
  };
  return dome;
})();