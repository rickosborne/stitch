/*
Full Window Drop Zone by Rick Osborne
*/


(function() {
  var FullWindowDropZone, root,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  FullWindowDropZone = (function(_super) {
    __extends(FullWindowDropZone, _super);

    FullWindowDropZone.DROP_MESSAGE = 'Drop anywhere';

    FullWindowDropZone.DROP_ZONE_ID = 'fwdz';

    FullWindowDropZone.DROP_ZONE_HTML = "<div id=\"" + FullWindowDropZone.DROP_ZONE_ID + "\"><div class=\"" + FullWindowDropZone.DROP_ZONE_ID + "-message\"><div>" + FullWindowDropZone.DROP_MESSAGE + "</div></div>";

    FullWindowDropZone._make_or_find_zone = function() {
      var zone;
      zone = $("#" + FullWindowDropZone.DROP_ZONE_ID);
      if (zone.length) {
        return zone;
      }
      return $(FullWindowDropZone.DROP_ZONE_HTML).appendTo(document.body);
    };

    function FullWindowDropZone() {
      this.register = __bind(this.register, this);
      this.register();
    }

    FullWindowDropZone.prototype.register = function() {
      var _this = this;
      $(function() {
        document.body.addEventListener('dragover', function(e) {
          e.preventDefault();
          FullWindowDropZone._make_or_find_zone().show();
          return false;
        });
        document.body.addEventListener('dragleave', function(e) {
          e.preventDefault();
          FullWindowDropZone._make_or_find_zone().hide();
          return false;
        });
        document.body.addEventListener('drop', function(e) {
          e.preventDefault();
          _this.trigger('drop', e.dataTransfer.files);
          FullWindowDropZone._make_or_find_zone().hide();
          return false;
        });
      });
    };

    return FullWindowDropZone;

  }).call(this, window.Evented);

  root.FullWindowDropZone = new FullWindowDropZone();

}).call(this);
