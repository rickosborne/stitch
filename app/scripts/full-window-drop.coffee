###
Full Window Drop Zone by Rick Osborne
###

class FullWindowDropZone

  @DROP_MESSAGE: 'Drop anywhere'

  @_image_files: (f) =>
    file for file in f when file.type.indexOf('image') == 0

  @_make_or_find_zone: =>
    fwdz = $ '#fwdz'
    return fwdz if fwdz.length
    fwdz = $('<div id="fwdz"><div class="fwdz-message"><div>' + @DROP_MESSAGE + '</div></div>').appendTo document.body

  @register: =>
    $ =>
      document.body.addEventListener 'dragover', (e) =>
        e.preventDefault()
        @_make_or_find_zone().show()
        false
      document.body.addEventListener 'dragend', (e) =>
        e.preventDefault()
        @_make_or_find_zone().hide()
        false
      document.body.addEventListener 'drop', (e) =>
        images = @_image_files(e.dataTransfer.files)
        console.log images
        e.preventDefault()
        @_make_or_find_zone().hide()
        false
      return
    return


FullWindowDropZone.register()
