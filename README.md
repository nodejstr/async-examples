# async-examples
Nodejstr article examples   

Async is a utility module which provides straight-forward, powerful functions
for working with asynchronous JavaScript. Although originally designed for
use with [Node.js](http://nodejs.org) and installable via `npm install async`,
it can also be used directly in the browser.

Async is also installable via:

- [bower](http://bower.io/): `bower install async`
- [component](https://github.com/component/component): `component install
  caolan/async`
- [jam](http://jamjs.org/): `jam install async`
- [spm](http://spmjs.io/): `spm install async`

Async provides around 20 functions that include the usual 'functional'
suspects (`map`, `reduce`, `filter`, `each`…) as well as some common patterns
for asynchronous control flow (`parallel`, `series`, `waterfall`…). All these
functions assume you follow the Node.js convention of providing a single
callback as the last argument of your `async` function.
