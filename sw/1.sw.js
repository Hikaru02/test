'use strict'

let log = console.log.bind(console)

log('hellow!')

self.oninstall       = e => { log(e) }
self.onactivate      = e => { log(e) }
self.onfetch         = e => { log(e) }
self.onbeforeevicted = e => { log(e) }
self.onevicted       = e => { log(e) }
self.onmessage       = e => { log(e) }







