"use strict";

var dependency_0 = require("@beyond-js/kernel/bundle");

var dependency_1 = require("@beyond-js/kernel/transversals");

var dependency_2 = require("@beyond-js/backend/listen");

const {
  externals
} = dependency_0;
externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/kernel/transversals", dependency_1], ["@beyond-js/backend/listen", dependency_2]]));

const {
  Transversal
} = require('@beyond-js/kernel/transversals');

const transversal = new Transversal('start', '');
const bundles = new Map();
/********************
MODULE: start-backend
********************/

bundles.set({
  "module": "@beyond/web-tutorial/start-backend",
  "bundle": "start"
}, function (ims, exports) {
  /***********************
  INTERNAL MODULE: ./start
  ***********************/
  ims.set('./start', {
    hash: 428960870,
    creator: function (require, exports) {
      "use strict";

      var _listen = require("@beyond-js/backend/listen");
      /*
       * Initialize library beyondJS backend server
       */


      (0, _listen.listen)();
    }
  });
});
transversal.initialise(bundles);