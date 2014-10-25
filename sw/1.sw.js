'use strict'

let log = console.log.bind(console)

log('hellow!')

self.oninstall       = e => { log(e) }
self.onactivate      = e => { log(e) }
self.onbeforeevicted = e => { log(e) }
self.onevicted       = e => { log(e) }
self.ongeofenceenter = e => { log(e) }
self.ongeofenceleave = e => { log(e) }
self.onmessage       = e => { log(e) }
self.onpush          = e => { log(e) }
self.onsync          = e => { log(e) }
self.onfetch         = e => { 
	log(e)
	let url = e.request.url
	e.respondWith(new Response('you try accsess to ' + url ))
}






