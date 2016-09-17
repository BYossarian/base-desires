# base-desires
A lib for converting between node Buffers and base32/url-safe base64 strings.

Assumes Node v6+.

TODO: use ArrayBuffer

### API

```
const baseDesires = require('./index.js');

baseDesires.bufferToBase32(<Buffer object>);  // returns a base32 string
baseDesires.base32ToBuffer(<String>);  // returns a Buffer
baseDesires.isValidBase32(<String>);  // returns a boolean
baseDesires.bufferToUrlSafeBase64(<Buffer object>);  // returns a url-safe base64 string
baseDesires.urlSafeBase64ToBuffer(<String>);  // returns a Buffer
baseDesires.isValidUrlSafeBase64(<String>);  // returns a boolean
```
