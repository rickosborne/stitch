/*
  Base class for standard eventd things.
  Based in part on EmberJS's evented.
*/


(function() {
  var Evented,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __slice = [].slice;

  window.Evented = Evented = (function() {
    function Evented() {
      this.trigger = __bind(this.trigger, this);
      this.on = __bind(this.on, this);
    }

    Evented.prototype.eventedListeners = {};

    Evented.prototype.on = function(eventName, method, context) {
      var _base;
      console.log("Evented.on " + eventName);
      if ((_base = this.eventedListeners)[eventName] == null) {
        _base[eventName] = [];
      }
      if (!context) {
        context = null;
      }
      this.eventedListeners[eventName].push({
        method: method,
        context: context
      });
      return this;
    };

    Evented.prototype.trigger = function() {
      var eventName, listener, options, _i, _len, _ref;
      eventName = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      if (!(eventName in this.eventedListeners)) {
        return this;
      }
      console.log("Trigger: " + eventName, options, this.eventedListeners);
      _ref = this.eventedListeners[eventName];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        listener = _ref[_i];
        listener.method.apply(listener.context, options);
      }
      return this;
    };

    return Evented;

  })();

}).call(this);
