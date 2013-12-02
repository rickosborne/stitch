###
Full Window Drop Zone by Rick Osborne
###

class FullWindowDropZone extends window.Evented

  @DROP_MESSAGE: 'Drop anywhere'
  @DROP_ZONE_ID: 'fwdz'
  @DROP_ZONE_HTML: "<div id=\"#{@DROP_ZONE_ID}\"><div class=\"#{@DROP_ZONE_ID}-message\"><div>#{@DROP_MESSAGE}</div></div>"

  @_make_or_find_zone: =>
    zone = $("##{@DROP_ZONE_ID}")
    return zone if zone.length
    $(@DROP_ZONE_HTML).appendTo document.body

  register: =>
    $ =>
      document.body.addEventListener 'dragover', (e) =>
        e.preventDefault()
        FullWindowDropZone._make_or_find_zone().show()
        false
      document.body.addEventListener 'dragleave', (e) =>
        e.preventDefault()
        FullWindowDropZone._make_or_find_zone().hide()
        false
      document.body.addEventListener 'drop', (e) =>
        e.preventDefault()
        @trigger 'drop', e.dataTransfer.files
        FullWindowDropZone._make_or_find_zone().hide()
        false
      return
    return

window.FullWindowDropZone = new FullWindowDropZone()
window.FullWindowDropZone.register()
