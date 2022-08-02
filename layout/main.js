"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.Controller = void 0;

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
  "module": "@beyond/web-tutorial/layout/main",
  "bundle": "widget"
}).package();

;
externals.register(new Map([["@beyond-js/kernel/bundle", dependency_0], ["@beyond-js/widgets/render", dependency_1], ["@beyond-js/kernel/styles", dependency_2], ["@beyond-js/react-widgets/controllers", dependency_3], ["react", dependency_4]]));

require('@beyond-js/widgets/render').widgets.register([{
  "name": "main-layout",
  "id": "@beyond/web-tutorial/layout/main",
  "is": "layout"
}]);

require('@beyond-js/kernel/styles').styles.register('@beyond/web-tutorial/layout/main');

const ims = new Map();
/****************************
INTERNAL MODULE: ./controller
****************************/

ims.set('./controller', {
  hash: 3321893905,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Controller = void 0;

    var _controllers = require("@beyond-js/react-widgets/controllers");

    var _views = require("./views");
    /*bundle*/


    class Controller extends _controllers.ReactWidgetController {
      get Widget() {
        return _views.Layout;
      }

    }

    exports.Controller = Controller;
  }
});
/*****************************
INTERNAL MODULE: ./views/index
*****************************/

ims.set('./views/index', {
  hash: 2455165074,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Layout = Layout;

    var React = require("react");

    function Layout() {
      return React.createElement("main", null, React.createElement("beyond-layout-children", null));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "Controller",
  "name": "Controller"
}];
let Controller; // Module exports

exports.Controller = Controller;

__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Controller') && (exports.Controller = Controller = require ? require('./controller').Controller : value);
};

const hmr = new function () {
  this.on = (event, listener) => __pkg.hmr.on(event, listener);

  this.off = (event, listener) => __pkg.hmr.off(event, listener);
}();
exports.hmr = hmr;

__pkg.initialise(ims);