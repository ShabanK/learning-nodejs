I'll summarize what i learned here in this file.
I'm no expert at writing. This readme is for me anyways so... yeah

Starting off with: eventEmitter

cool stuff. i can emit events... thats about it. i mean.. the name really couldn't be anymore accurate than that. those events can act as terminators or initiators for event listeners. i think.

lets say we have an eventEmitter called ee... ee.on(event, callback(s?)) will act as an event listener, taking two parameters, the event that triggers it and the call back function(s)(?) that gets executed. ee.emit(event) is used to emit an event whenever you want. if you only want an eventEmitter object to do a thing once and not more than that, ee.on can be replaced by ee.once().

ALWAYS READ THE DOCS!!!

next up is readline. its an extension of eventEmitter. it requires closing via rl.close(), assuming we have an object named rl.

readline is mainly used to provide an interface to get inputs via "Readable Streams". in the nodejs docs, it says...

Readable streams are an abstraction for a source from which data is consumed.

Examples of Readable streams include:

HTTP responses, on the client;

HTTP requests, on the server;

fs read streams;

zlib streams;

crypto streams;

TCP sockets;

child process stdout and stderr;

process.stdin;

All Readable streams implement the interface defined by the stream.Readable class.

to create an interface... we use readline.createInterface(obj). in this object we pass two attributes(?), the choice of input stream and the choice of output stream. in rl.js, process.stdin is used as input and process.stdout is used as as the output stream.

speaking of output streams, this is what the nodejs docs has to say about them:

Writable streams are an abstraction for a destination to which data is written.

Examples of Writable streams include:


HTTP requests, on the client

HTTP responses, on the server

fs write streams

zlib streams

crypto streams

TCP sockets

child process stdin

process.stdout, process.stderr

side-note: str.trim() is always good to use on user-inputs

rl.close() triggers an event called 'close'. so it can be used in eventEmitters and such.

line breaks and return key press trigger events called 'line'. 

'pause' and 'resume' events also exist and a bunch of others... check the docs.
