"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.Auth = void 0;

var dependency_0 = require("@beyond-js/kernel/bundle");

var dependency_1 = require("@beyond-js/backend/client");

const {
  Bundle: __Bundle,
  externals
} = dependency_0;

const __pkg = new __Bundle({
  "module": "@beyond/web-tutorial/auth",
  "bundle": "bridge"
}).package();

;
externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/backend/client", dependency_1]]));

const {
  ActionsBridge
} = require('@beyond-js/backend/client');

const ims = new Map();
/***********************
INTERNAL MODULE: ./index
***********************/

ims.set('./index', {
  hash: 659769672,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Auth = void 0;
    const data = {
      user: 'admin',
      password: '123456.'
    };
    /*actions*/

    /*bundle*/

    class Auth {
      async login(user, password) {
        if (user !== data.user || password !== data.password) {
          return {
            status: true,
            error: 'Invalid data'
          };
        }

        return {
          status: true,
          data: {
            valid: true
          }
        };
      }

    }

    exports.Auth = Auth;
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Auth",
  "name": "Auth"
}];
let Auth; // Module exports

exports.Auth = Auth;

__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Auth') && (exports.Auth = Auth = require ? require('./index').Auth : value);
};

const hmr = new function () {
  this.on = (event, listener) => __pkg.hmr.on(event, listener);

  this.off = (event, listener) => __pkg.hmr.off(event, listener);
}();
exports.hmr = hmr;

__pkg.initialise(ims);