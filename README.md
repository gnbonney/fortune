fortune
=======

An expanded fortune collection for javascript. 
Combines fortunes from BSD Unix minus the offensive categories plus extra categories added from other sources.

## To install
```js
npm install gnbonney/fortune
```

## To use
```js
const fortune = require('fortune')

const fortune = fortune.fortune()
// or
// const maxLength = 280
// const fortune = fortune.fortune(maxLength)
```
======

On install fortune converts the fortunes in fortunes/ into json. You can add or remove files / folders from here and rebuild using npm

Fortune for Node.js
