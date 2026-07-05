# toad.jsx

JSX support for [toad.js](https://github.com/markandre13/toad.js) with support for react and solid.js compatible transpilers.

```
jsx-runtime           -> toad.js' jsx runtime, including react jsx support

additional files needed for solid jsx (quite experimental):

    NOTE: there is a proper way to include the runtime. this isn't it.

          i tried to do it the proper way but failed. so i copied it from
              https://github.com/ryansolid/dom-expressions/packages/dom-expressions/src/client.*
          and extended it to typescript

src/rxcore.ts         -> implements toad.js variations of methods needed by dom-expressions
src/shared.ts         -> types shared between toad.js and dom-expressions

src/constants.ts      -> dom-expressions/packages/dom-expressions/src/constants.js
src/reconcile.ts      -> dom-expressions/packages/dom-expressions/src/reconcile.js
src/solid-runtime.ts  -> dom-expressions/packages/dom-expressions/src/client.js (e.g. render(), template(), ...)

```
