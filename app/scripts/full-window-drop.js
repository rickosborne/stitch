/*
Full Window Drop Zone by Rick Osborne
*/


(function() {
  var FullWindowDropZone;

  FullWindowDropZone = (function() {
    function FullWindowDropZone() {}

    FullWindowDropZone.DROP_MESSAGE = 'Drop anywhere';

    FullWindowDropZone._image_files = function(f) {
      var file, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = f.length; _i < _len; _i++) {
        file = f[_i];
        if (file.type.indexOf('image') === 0) {
          _results.push(file);
        }
      }
      return _results;
    };

    FullWindowDropZone._make_or_find_zone = function() {
      var fwdz;
      fwdz = $('#fwdz');
      if (fwdz.length) {
        return fwdz;
      }
      return fwdz = $('<div id="fwdz"><div class="fwdz-message"><div>' + FullWindowDropZone.DROP_MESSAGE + '</div></div>').appendTo(document.body);
    };

    FullWindowDropZone.register = function() {
      $(function() {
        document.body.addEventListener('dragover', function(e) {
          e.preventDefault();
          FullWindowDropZone._make_or_find_zone().show();
          return false;
        });
        document.body.addEventListener('dragend', function(e) {
          e.preventDefault();
          FullWindowDropZone._make_or_find_zone().hide();
          return false;
        });
        document.body.addEventListener('drop', function(e) {
          var images;
          images = FullWindowDropZone._image_files(e.dataTransfer.files);
          console.log(images);
          e.preventDefault();
          FullWindowDropZone._make_or_find_zone().hide();
          return false;
        });
      });
    };

    return FullWindowDropZone;

  }).call(this);

  FullWindowDropZone.register();

}).call(this);
