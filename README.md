# base-desires
A lib for converting between node Buffers and base32 strings.

Assumes Node v6+.

TODO: use ArrayBuffer

### API

```
const base32 = require('./index.js');

base32.bufferToBase32(<Buffer object>);  // returns a base32 string
base32.base32ToBuffer(<String>);  // returns a Buffer
base32.isValidBase32(<String>);  // returns Boolean
```
