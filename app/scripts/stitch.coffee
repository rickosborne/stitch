###
  Stitch by Rick Osborne
###

class Stitch

  @message:
    NO_IMAGE: 'You must drop an image file, such as a PNG, GIF, JPEG, or SVG.'
    TOO_MANY: 'You dropped more than one image.'

  constructor: ->
    console.log 'Stitch loaded'
    window.FullWindowDropZone.on 'drop', @onDrop, @

  onDrop: (files) =>
    console.log "Stitch.onDrop", files
    images = (file for file in files when file.type.indexOf('image') == 0)
    alert(Stitch.message.NO_IMAGE) if images.length < 1
    alert(Stitch.message.TOO_MANY) if images.length > 1
    return unless images.length == 1
    @loadImage images.pop()
    return

  loadImage: (image) =>
    console.log "Stitch.loadImage", image

$ =>
  window.Stitch = new Stitch()