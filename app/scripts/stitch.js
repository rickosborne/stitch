/*
  Stitch by Rick Osborne
*/


(function() {
  var Stitch,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    _this = this;

  Stitch = (function() {
    Stitch.message = {
      NO_IMAGE: 'You must drop an image file, such as a PNG, GIF, JPEG, or SVG.',
      TOO_MANY: 'You dropped more than one image.'
    };

    function Stitch() {
      this.loadImage = __bind(this.loadImage, this);
      this.onDrop = __bind(this.onDrop, this);
      console.log('Stitch loaded');
      window.FullWindowDropZone.on('drop', this.onDrop, this);
    }

    Stitch.prototype.onDrop = function(files) {
      var file, images;
      console.log("Stitch.onDrop", files);
      images = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = files.length; _i < _len; _i++) {
          file = files[_i];
          if (file.type.indexOf('image') === 0) {
            _results.push(file);
          }
        }
        return _results;
      })();
      if (images.length < 1) {
        alert(Stitch.message.NO_IMAGE);
      }
      if (images.length > 1) {
        alert(Stitch.message.TOO_MANY);
      }
      if (images.length !== 1) {
        return;
      }
      this.loadImage(images.pop());
    };

    Stitch.prototype.loadImage = function(image) {
      return console.log("Stitch.loadImage", image);
    };

    return Stitch;

  })();

  $(function() {
    return window.Stitch = new Stitch();
  });

}).call(this);
