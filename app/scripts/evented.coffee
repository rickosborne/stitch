###
  Base class for standard eventd things.
  Based in part on EmberJS's evented.
###

window.Evented = class Evented

  eventedListeners: {}

  on: (eventName, method, context) =>
    console.log "Evented.on #{eventName}"
    @eventedListeners[eventName] ?= []
    context = null unless context
    @eventedListeners[eventName].push {method: method, context: context}
    @

  trigger: (eventName, options...) =>
    return @ unless eventName of @eventedListeners
    console.log "Trigger: #{eventName}", options, @eventedListeners
    listener.method.apply(listener.context, options) for listener in @eventedListeners[eventName]
    @
