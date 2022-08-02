"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.View = exports.Controller = void 0;

var dependency_0 = require("@beyond-js/kernel/bundle");

var dependency_1 = require("@beyond-js/widgets/render");

var dependency_2 = require("@beyond-js/kernel/styles");

var dependency_3 = require("@beyond-js/react-widgets/controllers");

var dependency_4 = require("react");

const {
  Bundle: __Bundle,
  externals
} = dependency_0;

const __pkg = new __Bundle({
  "module": "@beyond/web-tutorial/welcome",
  "bundle": "widget"
}).package();

;
externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/widgets/render", dependency_1], ["@beyond-js/kernel/styles", dependency_2], ["@beyond-js/react-widgets/controllers", dependency_3], ["react", dependency_4]]));

require('@beyond-js/widgets/render').widgets.register([{
  "name": "welcome-page",
  "id": "@beyond/web-tutorial/welcome",
  "is": "page",
  "route": "/welcome"
}]);

require('@beyond-js/kernel/styles').styles.register('@beyond/web-tutorial/welcome');

const ims = new Map();
/****************************
INTERNAL MODULE: ./controller
****************************/

ims.set('./controller', {
  hash: 3993917803,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Controller = void 0;

    var _controllers = require("@beyond-js/react-widgets/controllers");

    var _views = require("./views");
    /*bundle*/


    class Controller extends _controllers.PageReactWidgetController {
      get Widget() {
        return _views.View;
      }

    }

    exports.Controller = Controller;
  }
});
/*****************************
INTERNAL MODULE: ./views/index
*****************************/

ims.set('./views/index', {
  hash: 477242776,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.View = View;

    var React = require("react");
    /*bundle*/


    function View() {
      return React.createElement("h2", null, "Hello i'm a page");
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "Controller",
  "name": "Controller"
}, {
  "im": "./views/index",
  "from": "View",
  "name": "View"
}];
let Controller, View; // Module exports

exports.View = View;
exports.Controller = Controller;

__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Controller') && (exports.Controller = Controller = require ? require('./controller').Controller : value);
  (require || prop === 'View') && (exports.View = View = require ? require('./views/index').View : value);
};

const hmr = new function () {
  this.on = (event, listener) => __pkg.hmr.on(event, listener);

  this.off = (event, listener) => __pkg.hmr.off(event, listener);
}();
exports.hmr = hmr;

__pkg.initialise(ims);