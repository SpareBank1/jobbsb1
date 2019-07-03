(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.fixed"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("minimatch"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["@reach/router", "core-js/modules/es6.array.iterator", "core-js/modules/es6.array.sort", "core-js/modules/es6.function.name", "core-js/modules/es6.map", "core-js/modules/es6.object.assign", "core-js/modules/es6.object.to-string", "core-js/modules/es6.regexp.constructor", "core-js/modules/es6.regexp.split", "core-js/modules/es6.regexp.to-string", "core-js/modules/es6.string.ends-with", "core-js/modules/es6.string.fixed", "core-js/modules/es6.string.iterator", "core-js/modules/web.dom.iterable", "crypto", "fs", "lodash", "minimatch", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("@reach/router"), require("core-js/modules/es6.array.iterator"), require("core-js/modules/es6.array.sort"), require("core-js/modules/es6.function.name"), require("core-js/modules/es6.map"), require("core-js/modules/es6.object.assign"), require("core-js/modules/es6.object.to-string"), require("core-js/modules/es6.regexp.constructor"), require("core-js/modules/es6.regexp.split"), require("core-js/modules/es6.regexp.to-string"), require("core-js/modules/es6.string.ends-with"), require("core-js/modules/es6.string.fixed"), require("core-js/modules/es6.string.iterator"), require("core-js/modules/web.dom.iterable"), require("crypto"), require("fs"), require("lodash"), require("minimatch"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["@reach/router"], root["core-js/modules/es6.array.iterator"], root["core-js/modules/es6.array.sort"], root["core-js/modules/es6.function.name"], root["core-js/modules/es6.map"], root["core-js/modules/es6.object.assign"], root["core-js/modules/es6.object.to-string"], root["core-js/modules/es6.regexp.constructor"], root["core-js/modules/es6.regexp.split"], root["core-js/modules/es6.regexp.to-string"], root["core-js/modules/es6.string.ends-with"], root["core-js/modules/es6.string.fixed"], root["core-js/modules/es6.string.iterator"], root["core-js/modules/web.dom.iterable"], root["crypto"], root["fs"], root["lodash"], root["minimatch"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_fixed__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__, __WEBPACK_EXTERNAL_MODULE_crypto__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_minimatch__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr */ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "trackingId": "UA-143149392-1"
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "gatsby-starter-default",
    "short_name": "starter",
    "start_url": "/",
    "background_color": "#663399",
    "theme_color": "#663399",
    "display": "minimal-ui",
    "icon": "src/images/sb1-icon.png"
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper component around pages that won't get
 * unmounted on page change. For setting Provider components use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapPageElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout")
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to setup any Providers component that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_ [There is equivalent hook in Browser API](/docs/browser-apis/#wrapRootElement)
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/data.json":
/*!**************************!*\
  !*** ./.cache/data.json ***!
  \**************************/
/*! exports provided: pages, dataPaths, default */
/***/ (function(module) {

module.exports = {"pages":[{"componentChunkName":"component---src-pages-index-js","jsonName":"index","path":"/"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-html-516","path":"/404.html"},{"componentChunkName":"component---src-pages-404-js","jsonName":"404-22d","path":"/404/"},{"componentChunkName":"component---src-templates-opening-template-js","jsonName":"arkitekter-ef2","path":"/arkitekter"},{"componentChunkName":"component---src-templates-page-template-js","jsonName":"designsystem-6f0","path":"/designsystem"},{"componentChunkName":"component---src-templates-page-template-js","jsonName":"fagdag-ab0","path":"/fagdag"},{"componentChunkName":"component---src-templates-page-template-js","jsonName":"fagforum-43d","path":"/fagforum"},{"componentChunkName":"component---src-templates-page-template-js","jsonName":"hackathon-51c","path":"/hackathon"},{"componentChunkName":"component---src-templates-opening-template-js","jsonName":"teamleder-5da","path":"/teamleder"},{"componentChunkName":"component---src-templates-generic-template-js","jsonName":"tester-1-f19","path":"/tester1"},{"componentChunkName":"component---src-templates-opening-template-js","jsonName":"utvikler-fullstack-38f","path":"/utvikler-fullstack"},{"componentChunkName":"component---src-templates-opening-template-js","jsonName":"utvikler-sparing-24e","path":"/utvikler-sparing"},{"componentChunkName":"component---src-templates-generic-template-js","jsonName":"utvikler-1-200","path":"/utvikler1"},{"componentChunkName":"component---src-templates-opening-template-js","jsonName":"utviklere-e08","path":"/utviklere"},{"componentChunkName":"component---src-templates-generic-template-js","jsonName":"ux-1-f70","path":"/ux1"}],"dataPaths":{"404-22d":"820/path---404-22-d-bce-0SUcWyAf8ecbYDsMhQkEfPzV8","404-html-516":"285/path---404-html-516-62a-0SUcWyAf8ecbYDsMhQkEfPzV8","arkitekter-ef2":"649/path---arkitekter-ef-2-abd-WuPZJ7VyHxjJ6xh72d1x9gAkRw","designsystem-6f0":"959/path---designsystem-6-f-0-e33-n32nKOC4sg8hrJ08brIiuk78Sc","fagdag-ab0":"760/path---fagdag-ab-0-c90-TmCd8ffvGiG3asLExlltfVRUXg0","fagforum-43d":"172/path---fagforum-43-d-4cc-zr3eac1bboE1BvrPQF9CKfDSWR8","hackathon-51c":"713/path---hackathon-51-c-321-BB5LMBvuw6v5T4V0ys0agRsCA","index":"815/path---index-6a9-Lpx43vEPhPVd0MeUlTbXkyb9DEI","sq--src-components-employee-js":1687665919,"sq--src-components-image-js":2011440971,"sq--src-components-instagram-js":1975873584,"sq--src-components-jobs-jobs-js":478700288,"sq--src-components-jobs-mjobs-js":332715481,"sq--src-components-layout-js":755544856,"sq--src-components-medium-js":3208260626,"sq--src-components-seo-js":1025518380,"teamleder-5da":"871/path---teamleder-5-da-a19-lw61As9SW2Ms9ZtZ1ckvszTSpWY","tester-1-f19":"173/path---tester-1-f-19-f82-nNm5Vxbh3bwdqmbAntQ5Njavw","utvikler-1-200":"584/path---utvikler-1-200-b45-re2LLi9G3It1AEziQVGrgEUm4zk","utvikler-fullstack-38f":"166/path---utvikler-fullstack-38-f-252-9KLq2dMUzVXlls8ocQPesDnZ10","utvikler-sparing-24e":"334/path---utvikler-sparing-24-e-189-f6rNpVcYDQGYSA1Tod830laIrPA","utviklere-e08":"69/path---utviklere-e-08-9c7-kdFllGxMEP8UeQp1QfISovDqkzA","ux-1-f70":"97/path---ux-1-f-70-27e-GuYaQERyX1W1azNqwTvB9IPBe0"}};

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("noscript", {
    key: "noscript",
    id: "gatsby-noscript"
  }, "This app works best with JavaScript enabled."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });




var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext !== "function" && "production" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n" + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.ends-with */ "core-js/modules/es6.string.ends-with");
/* harmony import */ var core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_ends_with__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.sort */ "core-js/modules/es6.array.sort");
/* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "core-js/modules/es6.regexp.to-string");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "core-js/modules/es6.regexp.constructor");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.map */ "core-js/modules/es6.map");
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);














var React = __webpack_require__(/*! react */ "react");

var fs = __webpack_require__(/*! fs */ "fs");

var _require = __webpack_require__(/*! path */ "path"),
    join = _require.join;

var _require2 = __webpack_require__(/*! react-dom/server */ "react-dom/server"),
    renderToString = _require2.renderToString,
    renderToStaticMarkup = _require2.renderToStaticMarkup;

var _require3 = __webpack_require__(/*! @reach/router */ "@reach/router"),
    ServerLocation = _require3.ServerLocation,
    Router = _require3.Router,
    isRedirect = _require3.isRedirect;

var _require4 = __webpack_require__(/*! lodash */ "lodash"),
    get = _require4.get,
    merge = _require4.merge,
    isObject = _require4.isObject,
    flatten = _require4.flatten,
    uniqBy = _require4.uniqBy;

var apiRunner = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");

var syncRequires = __webpack_require__(/*! ./sync-requires */ "./.cache/sync-requires.js");

var _require5 = __webpack_require__(/*! ./data.json */ "./.cache/data.json"),
    dataPaths = _require5.dataPaths,
    pages = _require5.pages;

var _require6 = __webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),
    gatsbyVersion = _require6.version; // Speed up looking up pages.


var pagesObjectMap = new Map();
pages.forEach(function (p) {
  return pagesObjectMap.set(p.path, p);
});
var stats = JSON.parse(fs.readFileSync(process.cwd() + "/public/webpack.stats.json", "utf-8"));
var chunkMapping = JSON.parse(fs.readFileSync(process.cwd() + "/public/chunk-map.json", "utf-8")); // const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(/*! ../src/html */ "./src/html.js");
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    throw err;
  }
}

Html = Html && Html.__esModule ? Html.default : Html;

var getPage = function getPage(path) {
  return pagesObjectMap.get(path);
};

var createElement = React.createElement;

var sanitizeComponents = function sanitizeComponents(components) {
  if (Array.isArray(components)) {
    // remove falsy items
    return components.filter(function (val) {
      return Array.isArray(val) ? val.length > 0 : val;
    });
  } else {
    // we also accept single components, so we need to handle this case as well
    return components ? [components] : [];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var _postBodyComponents;

  var bodyHtml = "";
  var headComponents = [React.createElement("meta", {
    name: "generator",
    content: "Gatsby " + gatsbyVersion,
    key: "generator-" + gatsbyVersion
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};

  var replaceBodyHTMLString = function replaceBodyHTMLString(body) {
    bodyHtml = body;
  };

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(sanitizeComponents(components));
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = merge(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = merge(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(sanitizeComponents(components));
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(sanitizeComponents(components));
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = merge({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = sanitizeComponents(components);
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = sanitizeComponents(components);
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = sanitizeComponents(components);
  };

  var page = getPage(pagePath);
  var dataAndContext = {};

  if (page.jsonName in dataPaths) {
    var pathToJsonData = join(process.cwd(), "/public/static/d", dataPaths[page.jsonName] + ".json");

    try {
      dataAndContext = JSON.parse(fs.readFileSync(pathToJsonData));
    } catch (e) {
      console.log("error", pathToJsonData, e);
      process.exit();
    }
  }

  var RouteHandler =
  /*#__PURE__*/
  function (_React$Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_4___default()(RouteHandler, _React$Component);

    function RouteHandler() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = RouteHandler.prototype;

    _proto.render = function render() {
      var props = Object.assign({}, this.props, dataAndContext, {
        pathContext: dataAndContext.pageContext
      });
      var pageElement = createElement(syncRequires.components[page.componentChunkName], props);
      var wrappedPage = apiRunner("wrapPageElement", {
        element: pageElement,
        props: props
      }, pageElement, function (_ref) {
        var result = _ref.result;
        return {
          element: result,
          props: props
        };
      }).pop();
      return wrappedPage;
    };

    return RouteHandler;
  }(React.Component);

  var routerElement = createElement(ServerLocation, {
    url: "" + "" + pagePath
  }, createElement(Router, {
    baseuri: "" + ""
  }, createElement(RouteHandler, {
    path: "/*"
  })));
  var bodyComponent = apiRunner("wrapRootElement", {
    element: routerElement,
    pathname: pagePath
  }, routerElement, function (_ref2) {
    var result = _ref2.result;
    return {
      element: result,
      pathname: pagePath
    };
  }).pop(); // Let the site or plugin render the page component.

  apiRunner("replaceRenderer", {
    bodyComponent: bodyComponent,
    replaceBodyHTMLString: replaceBodyHTMLString,
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    pathPrefix: ""
  }); // If no one stepped up, we'll handle it.

  if (!bodyHtml) {
    try {
      bodyHtml = renderToString(bodyComponent);
    } catch (e) {
      // ignore @reach/router redirect errors
      if (!isRedirect(e)) throw e;
    }
  } // Create paths to scripts


  var scriptsAndStyles = flatten(["app", page.componentChunkName].map(function (s) {
    var fetchKey = "assetsByChunkName[" + s + "]";
    var chunks = get(stats, fetchKey);
    var namedChunkGroups = get(stats, "namedChunkGroups");

    if (!chunks) {
      return null;
    }

    chunks = chunks.map(function (chunk) {
      if (chunk === "/") {
        return null;
      }

      return {
        rel: "preload",
        name: chunk
      };
    });
    namedChunkGroups[s].assets.forEach(function (asset) {
      return chunks.push({
        rel: "preload",
        name: asset
      });
    });
    var childAssets = namedChunkGroups[s].childAssets;

    var _loop = function _loop(rel) {
      chunks = merge(chunks, childAssets[rel].map(function (chunk) {
        return {
          rel: rel,
          name: chunk
        };
      }));
    };

    for (var rel in childAssets) {
      _loop(rel);
    }

    return chunks;
  })).filter(function (s) {
    return isObject(s);
  }).sort(function (s1, s2) {
    return s1.rel == "preload" ? -1 : 1;
  }); // given priority to preload

  scriptsAndStyles = uniqBy(scriptsAndStyles, function (item) {
    return item.name;
  });
  var scripts = scriptsAndStyles.filter(function (script) {
    return script.name && script.name.endsWith(".js");
  });
  var styles = scriptsAndStyles.filter(function (style) {
    return style.name && style.name.endsWith(".css");
  });
  apiRunner("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath,
    bodyHtml: bodyHtml,
    scripts: scripts,
    styles: styles,
    pathPrefix: ""
  });
  scripts.slice(0).reverse().forEach(function (script) {
    // Add preload/prefetch <link>s for scripts.
    headComponents.push(React.createElement("link", {
      as: "script",
      rel: script.rel,
      key: script.name,
      href: "" + "/" + script.name
    }));
  });

  if (page.jsonName in dataPaths) {
    var dataPath = "" + "/static/d/" + dataPaths[page.jsonName] + ".json";
    headComponents.push(React.createElement("link", {
      as: "fetch",
      rel: "preload",
      key: dataPath,
      href: dataPath,
      crossOrigin: "use-credentials"
    }));
  }

  styles.slice(0).reverse().forEach(function (style) {
    // Add <link>s for styles that should be prefetched
    // otherwise, inline as a <style> tag
    if (style.rel === "prefetch") {
      headComponents.push(React.createElement("link", {
        as: "style",
        rel: style.rel,
        key: style.name,
        href: "" + "/" + style.name
      }));
    } else {
      headComponents.unshift(React.createElement("style", {
        "data-href": "" + "/" + style.name,
        dangerouslySetInnerHTML: {
          __html: fs.readFileSync(join(process.cwd(), "public", style.name), "utf-8")
        }
      }));
    }
  }); // Add page metadata for the current page

  var windowData = "/*<![CDATA[*/window.page=" + JSON.stringify(page) + ";" + (page.jsonName in dataPaths ? "window.dataPath=\"" + dataPaths[page.jsonName] + "\";" : "") + "/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "script-loader",
    id: "gatsby-script-loader",
    dangerouslySetInnerHTML: {
      __html: windowData
    }
  })); // Add chunk mapping metadata

  var scriptChunkMapping = "/*<![CDATA[*/window.___chunkMapping=" + JSON.stringify(chunkMapping) + ";/*]]>*/";
  postBodyComponents.push(React.createElement("script", {
    key: "chunk-mapping",
    id: "gatsby-chunk-mapping",
    dangerouslySetInnerHTML: {
      __html: scriptChunkMapping
    }
  })); // Filter out prefetched bundles as adding them as a script tag
  // would force high priority fetching.

  var bodyScripts = scripts.filter(function (s) {
    return s.rel !== "prefetch";
  }).map(function (s) {
    var scriptPath = "" + "/" + JSON.stringify(s.name).slice(1, -1);
    return React.createElement("script", {
      key: scriptPath,
      src: scriptPath,
      async: true
    });
  });

  (_postBodyComponents = postBodyComponents).push.apply(_postBodyComponents, bodyScripts);

  apiRunner("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath,
    pathPrefix: ""
  });
  var html = "<!DOCTYPE html>" + renderToStaticMarkup(React.createElement(Html, Object.assign({}, bodyProps, {
    headComponents: headComponents,
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents,
    body: bodyHtml,
    path: pagePath
  })));
  callback(null, html);
});

/***/ }),

/***/ "./.cache/sync-requires.js":
/*!*********************************!*\
  !*** ./.cache/sync-requires.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),
    hot = _require.hot; // prefer default export if available


var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

exports.components = {
  "component---src-templates-page-template-js": hot(preferDefault(__webpack_require__(/*! ./src/templates/pageTemplate.js */ "./src/templates/pageTemplate.js"))),
  "component---src-templates-opening-template-js": hot(preferDefault(__webpack_require__(/*! ./src/templates/openingTemplate.js */ "./src/templates/openingTemplate.js"))),
  "component---src-templates-generic-template-js": hot(preferDefault(__webpack_require__(/*! ./src/templates/genericTemplate.js */ "./src/templates/genericTemplate.js"))),
  "component---src-pages-404-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/404.js */ "./src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")))
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/ActionButton.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/ActionButton.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseButton */ "./node_modules/@sb1/ffe-buttons-react/es/BaseButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





function ActionButton(props) {
  var className = props.className,
      ghost = props.ghost,
      rest = _objectWithoutProperties(props, ["className", "ghost"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BaseButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    buttonType: "action",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      'ffe-button--ghost': ghost
    })
  }, rest));
}
ActionButton.defaultProps = {
  ghost: false,
  dark: false
};
ActionButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Condensed modifier. Use in condensed designs */
  condensed: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Disable a button in certain situations */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Applies the ghost modifier if true. */
  ghost: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],

  /** Shows a loader if true */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Icon shown to the left of the label */
  leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Icon shown to the right of the label */
  rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Dark variant */
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
};

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/BackButton.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/BackButton.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InlineBaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InlineBaseButton */ "./node_modules/@sb1/ffe-buttons-react/es/InlineBaseButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var BackButton = function BackButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InlineBaseButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    buttonType: "back"
  }, props));
};

BackButton.propTypes = {
  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
};
/* harmony default export */ __webpack_exports__["default"] = (BackButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/BaseButton.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/BaseButton.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Internal component
 */

var BaseButton = function BaseButton(props) {
  var ariaLoadingMessage = props.ariaLoadingMessage,
      buttonType = props.buttonType,
      children = props.children,
      className = props.className,
      condensed = props.condensed,
      disabled = props.disabled,
      Element = props.element,
      innerRef = props.innerRef,
      isLoading = props.isLoading,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      dark = props.dark,
      rest = _objectWithoutProperties(props, ["ariaLoadingMessage", "buttonType", "children", "className", "condensed", "disabled", "element", "innerRef", "isLoading", "leftIcon", "rightIcon", "dark"]);

  var supportsSpinner = ['action', 'primary', 'secondary'].includes(buttonType);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
    "aria-busy": isLoading && supportsSpinner,
    "aria-disabled": disabled || isLoading && supportsSpinner,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ffe-button', "ffe-button--".concat(buttonType), {
      'ffe-button--condensed': condensed
    }, {
      'ffe-button--dark': dark
    }, {
      'ffe-button--loading': isLoading && supportsSpinner
    }, className),
    disabled: disabled || isLoading && supportsSpinner,
    ref: innerRef
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ffe-button__label"
  }, leftIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(leftIcon, {
    className: 'ffe-button__icon ffe-button__icon--left'
  }), children, rightIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(rightIcon, {
    className: 'ffe-button__icon ffe-button__icon--right'
  })), supportsSpinner && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "aria-hidden": !isLoading,
    "aria-label": ariaLoadingMessage,
    className: "ffe-button__spinner"
  }));
};

BaseButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /**
   * Enum of supported prop types. Used internally only.
   * @ignore
   */
  buttonType: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(['action', 'primary', 'secondary', 'shortcut', 'task']),

  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Condensed modifier. Use in condensed designs */
  condensed: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Disable a button in certain situations */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],

  /** Shows a loader if true */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Icon shown to the left of the label */
  leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Icon shown to the right of the label */
  rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Dark variant */
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
};
BaseButton.defaultProps = {
  ariaLoadingMessage: 'Vennligst vent',
  element: 'button',
  dark: false
};
/* harmony default export */ __webpack_exports__["default"] = (BaseButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/ButtonGroup.js":
/*!***************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/ButtonGroup.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      thin = _ref.thin,
      inline = _ref.inline,
      rest = _objectWithoutProperties(_ref, ["className", "thin", "inline"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ffe-button-group', {
      'ffe-button-group--thin': thin
    }, {
      'ffe-button-group--inline': inline
    }, className)
  }, rest));
};

ButtonGroup.propTypes = {
  /** Extra class name applied in addition to the FFE classes */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Applies the thin modifier to remove margins */
  thin: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Applies the inline modifier to make all child buttons inline */
  inline: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonGroup);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/ExpandButton.js":
/*!****************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/ExpandButton.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _sb1_ffe_icons_react_lib_kryss_ikon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sb1/ffe-icons-react/lib/kryss-ikon */ "./node_modules/@sb1/ffe-icons-react/lib/kryss-ikon.js");
/* harmony import */ var _sb1_ffe_icons_react_lib_kryss_ikon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sb1_ffe_icons_react_lib_kryss_ikon__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var ExpandButton = function ExpandButton(props) {
  var children = props.children,
      className = props.className,
      Element = props.element,
      innerRef = props.innerRef,
      isExpanded = props.isExpanded,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      rest = _objectWithoutProperties(props, ["children", "className", "element", "innerRef", "isExpanded", "leftIcon", "rightIcon"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
    "aria-expanded": isExpanded,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ffe-button', 'ffe-button--expand', {
      'ffe-button--expanded': isExpanded
    }, className),
    ref: innerRef
  }, rest), isExpanded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_icons_react_lib_kryss_ikon__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "ffe-button__icon"
  }), !isExpanded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, leftIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(leftIcon, {
    className: 'ffe-button__icon ffe-button__icon--left'
  }), children, rightIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(rightIcon, {
    className: 'ffe-button__icon ffe-button__icon--right'
  })));
};

ExpandButton.propTypes = {
  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Icon shown to the left of the label */
  leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Icon shown to the right of the label */
  rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],

  /** When true the component will render a circle with an X indicating whatever is controlled is in an expanded state. */
  isExpanded: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"].isRequired,

  /** Use to listen for clicks and toggle the `isExpanded` property together with whatever it is you're expanding. */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
};
ExpandButton.defaultProps = {
  element: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (ExpandButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/InlineBaseButton.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/InlineBaseButton.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * Internal component
 * @ignore
 */

var InlineBaseButton = function InlineBaseButton(props) {
  var buttonType = props.buttonType,
      children = props.children,
      className = props.className,
      Element = props.element,
      innerRef = props.innerRef,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      dark = props.dark,
      rest = _objectWithoutProperties(props, ["buttonType", "children", "className", "element", "innerRef", "leftIcon", "rightIcon", "dark"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ffe-inline-button', "ffe-inline-button--".concat(buttonType), {
      'ffe-inline-button--dark': dark
    }, className),
    ref: innerRef
  }, rest), leftIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(leftIcon, {
    className: 'ffe-inline-button__icon ffe-inline-button__icon--left'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ffe-inline-button__label"
  }, children), rightIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(rightIcon, {
    className: 'ffe-inline-button__icon ffe-inline-button__icon--right'
  }));
};

InlineBaseButton.propTypes = {
  /**
   * Enum of supported prop types. Used internally only.
   * @ignore
   */
  buttonType: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(['tertiary', 'back', 'expand']),

  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired,

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["string"], prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]]),

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],

  /** Icon shown to the left of the label */
  leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Icon shown to the right of the label */
  rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Dark variant */
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
};
InlineBaseButton.defaultProps = {
  element: 'button',
  dark: false
};
/* harmony default export */ __webpack_exports__["default"] = (InlineBaseButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/InlineExpandButton.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/InlineExpandButton.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sb1_ffe_icons_react_lib_chevron_ikon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sb1/ffe-icons-react/lib/chevron-ikon */ "./node_modules/@sb1/ffe-icons-react/lib/chevron-ikon.js");
/* harmony import */ var _sb1_ffe_icons_react_lib_chevron_ikon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sb1_ffe_icons_react_lib_chevron_ikon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InlineBaseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InlineBaseButton */ "./node_modules/@sb1/ffe-buttons-react/es/InlineBaseButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var InlineExpandButton = function InlineExpandButton(props) {
  var isExpanded = props.isExpanded,
      rest = _objectWithoutProperties(props, ["isExpanded"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InlineBaseButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    buttonType: "expand",
    rightIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_icons_react_lib_chevron_ikon__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        marginLeft: '5px',
        transform: isExpanded ? 'rotateX(180deg)' : 'none'
      }
    })
  }, rest));
};

InlineExpandButton.propTypes = {
  /** Text that should reflect the isExpanded state. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],

  /** When true it will indicate the button is in its open state */
  isExpanded: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"].isRequired,

  /** Listen for clicks to toggle the isExpanded state. */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (InlineExpandButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/PrimaryButton.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/PrimaryButton.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseButton */ "./node_modules/@sb1/ffe-buttons-react/es/BaseButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var PrimaryButton = function PrimaryButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BaseButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    buttonType: "primary"
  }, props));
};

PrimaryButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Condensed modifier. Use in condensed designs */
  condensed: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Disable a button in certain situations */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],

  /** Shows a loader if true */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Icon shown to the left of the label */
  leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Icon shown to the right of the label */
  rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Dark variant */
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
};
PrimaryButton.defaultProps = {
  dark: false
};
/* harmony default export */ __webpack_exports__["default"] = (PrimaryButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/SecondaryButton.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/SecondaryButton.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseButton */ "./node_modules/@sb1/ffe-buttons-react/es/BaseButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var SecondaryButton = function SecondaryButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BaseButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    buttonType: "secondary"
  }, props));
};

SecondaryButton.propTypes = {
  /** Aria label for loading indicator */
  ariaLoadingMessage: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Condensed modifier. Use in condensed designs */
  condensed: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Disable a button in certain situations */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],

  /**  Shows a loader if true */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Icon shown to the left of the label */
  leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Icon shown to the right of the label */
  rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Dark variant */
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
};
SecondaryButton.defaultProps = {
  dark: false
};
/* harmony default export */ __webpack_exports__["default"] = (SecondaryButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/ShortcutButton.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/ShortcutButton.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sb1_ffe_icons_react_lib_chevron_ikon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sb1/ffe-icons-react/lib/chevron-ikon */ "./node_modules/@sb1/ffe-icons-react/lib/chevron-ikon.js");
/* harmony import */ var _sb1_ffe_icons_react_lib_chevron_ikon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sb1_ffe_icons_react_lib_chevron_ikon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseButton */ "./node_modules/@sb1/ffe-buttons-react/es/BaseButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






var ShortcutButton = function ShortcutButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BaseButton__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    buttonType: "shortcut",
    rightIcon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_icons_react_lib_chevron_ikon__WEBPACK_IMPORTED_MODULE_2___default.a, null)
  }, props));
};

ShortcutButton.propTypes = {
  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Condensed modifier. Use in condensed designs */
  condensed: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Disable a button in certain situations */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],

  /** Icon shown to the left of the label */
  leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"]
};
/* harmony default export */ __webpack_exports__["default"] = (ShortcutButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/TaskButton.js":
/*!**************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/TaskButton.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BaseButton */ "./node_modules/@sb1/ffe-buttons-react/es/BaseButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var TaskButton = function TaskButton(_ref) {
  var icon = _ref.icon,
      rest = _objectWithoutProperties(_ref, ["icon"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BaseButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    buttonType: "task",
    leftIcon: icon
  }, rest));
};

TaskButton.propTypes = {
  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Condensed modifier. Use in condensed designs */
  condensed: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Disable a button in certain situations */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Task icon, show to the left of the label */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"].isRequired,

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
};
/* harmony default export */ __webpack_exports__["default"] = (TaskButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/TertiaryButton.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/TertiaryButton.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InlineBaseButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InlineBaseButton */ "./node_modules/@sb1/ffe-buttons-react/es/InlineBaseButton.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var TertiaryButton = function TertiaryButton(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InlineBaseButton__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    buttonType: "tertiary"
  }, props));
};

TertiaryButton.propTypes = {
  /** The button label */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Extra class names */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** The rendered element, like an `<a />` or `<Link />` */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Ref-setting function passed to the button element */
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"],

  /** Icon shown to the left of the label */
  leftIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Icon shown to the right of the label */
  rightIcon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Dark variant */
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
};
TertiaryButton.defaultProps = {
  dark: false
};
/* harmony default export */ __webpack_exports__["default"] = (TertiaryButton);

/***/ }),

/***/ "./node_modules/@sb1/ffe-buttons-react/es/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@sb1/ffe-buttons-react/es/index.js ***!
  \*********************************************************/
/*! exports provided: ActionButton, BackButton, ButtonGroup, ExpandButton, InlineExpandButton, PrimaryButton, SecondaryButton, ShortcutButton, TaskButton, TertiaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionButton */ "./node_modules/@sb1/ffe-buttons-react/es/ActionButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _ActionButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BackButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackButton */ "./node_modules/@sb1/ffe-buttons-react/es/BackButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackButton", function() { return _BackButton__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/@sb1/ffe-buttons-react/es/ButtonGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return _ButtonGroup__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ExpandButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExpandButton */ "./node_modules/@sb1/ffe-buttons-react/es/ExpandButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandButton", function() { return _ExpandButton__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _InlineExpandButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InlineExpandButton */ "./node_modules/@sb1/ffe-buttons-react/es/InlineExpandButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineExpandButton", function() { return _InlineExpandButton__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _PrimaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PrimaryButton */ "./node_modules/@sb1/ffe-buttons-react/es/PrimaryButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return _PrimaryButton__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SecondaryButton */ "./node_modules/@sb1/ffe-buttons-react/es/SecondaryButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecondaryButton", function() { return _SecondaryButton__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ShortcutButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShortcutButton */ "./node_modules/@sb1/ffe-buttons-react/es/ShortcutButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShortcutButton", function() { return _ShortcutButton__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _TaskButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TaskButton */ "./node_modules/@sb1/ffe-buttons-react/es/TaskButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskButton", function() { return _TaskButton__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _TertiaryButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TertiaryButton */ "./node_modules/@sb1/ffe-buttons-react/es/TertiaryButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TertiaryButton", function() { return _TertiaryButton__WEBPACK_IMPORTED_MODULE_9__["default"]; });












/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/CardBase.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/CardBase.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var CardBase = function CardBase(props) {
  var className = props.className,
      Element = props.element,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "element", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-card-base', className)
  }, rest), children);
};

CardBase.defaultProps = {
  element: 'div'
};
CardBase.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],

  /** The element to render the card as */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]])
};
/* harmony default export */ __webpack_exports__["default"] = (CardBase);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/IconCard/IconCard.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/IconCard/IconCard.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardBase */ "./node_modules/@sb1/ffe-cards-react/es/CardBase.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./node_modules/@sb1/ffe-cards-react/es/components/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var IconCard = function IconCard(props) {
  var className = props.className,
      icon = props.icon,
      condensed = props.condensed,
      greyCharcoal = props.greyCharcoal,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "icon", "condensed", "greyCharcoal", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardBase__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-icon-card', {
      'ffe-icon-card--condensed': condensed
    }, {
      'ffe-icon-card--grey-charcoal': greyCharcoal
    }, className)
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(icon, {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-icon-card__icon', icon.props.className)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ffe-icon-card__body"
  }, typeof children === 'function' ? children(_components__WEBPACK_IMPORTED_MODULE_4__) : children));
};

IconCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],

  /** A rendered icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"].isRequired,

  /** Smaller icon and less space */
  condensed: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

  /** Icon and text will all be ffe-grey-charcoal */
  greyCharcoal: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

  /** The element to render the card as */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]]),

  /** Function that's passed available sub-components as arguments, or regular children */
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["node"]])
};
/* harmony default export */ __webpack_exports__["default"] = (IconCard);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/ImageCard/ImageCard.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/ImageCard/ImageCard.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardBase */ "./node_modules/@sb1/ffe-cards-react/es/CardBase.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./node_modules/@sb1/ffe-cards-react/es/components/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var ImageCard = function ImageCard(props) {
  var className = props.className,
      image = props.image,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "image", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardBase__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-image-card', className)
  }, rest), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ffe-image-card__image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ffe-image-card__image__overlay"
  }), image), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ffe-image-card__body"
  }, typeof children === 'function' ? children(_components__WEBPACK_IMPORTED_MODULE_4__) : children));
};

ImageCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],

  /** A rendered image */
  image: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"].isRequired,

  /** The element to render the card as */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]]),

  /** Function that's passed available sub-components as arguments, or regular children */
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["node"]])
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCard);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/LinkCard.js":
/*!**********************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/LinkCard.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * @deprecated This card comes with an outdated design. Use one of the new cards instead.
 */

var LinkCard = function LinkCard(props) {
  var center = props.center,
      className = props.className,
      details = props.details,
      ElementType = props.elementType,
      heading = props.heading,
      icon = props.icon,
      number = props.number,
      plain = props.plain,
      size = props.size,
      status = props.status,
      subHeading = props.subHeading,
      rest = _objectWithoutProperties(props, ["center", "className", "details", "elementType", "heading", "icon", "number", "plain", "size", "status", "subHeading"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementType, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ffe-link-card', {
      'ffe-link-card--center': center
    }, _defineProperty({}, "ffe-link-card--".concat(size), !!size), {
      'ffe-link-card--plain': plain
    }, className)
  }, rest), status && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ffe-link-card__status"
  }, status), icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(icon, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ffe-link-card__icon', icon.props.className)
  }), number && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ffe-link-card__number"
  }, number), heading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-link-card__heading"
  }, heading), subHeading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-link-card__sub-heading"
  }, subHeading), details && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-link-card__details"
  }, details));
};

LinkCard.defaultProps = {
  elementType: 'a'
};
LinkCard.propTypes = {
  /** Center the card's content horizontally */
  center: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Bottom text - should only be used with `size="large"` */
  details: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** The element to render the card as. Typically `'a'`, `Link` or `'button'` */
  elementType: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Text shown at the top */
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** A rendered icon - will be sized appropriately */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /**
   * An enumerating number, typically to show which "step" a card represents. Should be used only when `plain` is true
   */
  number: prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],

  /** Optional size modifiers */
  size: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(['medium', 'large']),

  /** Make less "clickable" - works well with specifying `number` prop */
  plain: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Status text displayed at the top of the card with a 1 second delay */
  status: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],
  subHeading: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (LinkCard);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/ProductCard.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/ProductCard.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




/**
 * @deprecated This card comes with an outdated design. Use one of the new cards instead.
 */

var ProductCard = function ProductCard(props) {
  var className = props.className,
      details = props.details,
      ElementType = props.elementType,
      heading = props.heading,
      icon = props.icon,
      status = props.status,
      rest = _objectWithoutProperties(props, ["className", "details", "elementType", "heading", "icon", "status"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementType, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ffe-product-card', className)
  }, rest), status && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ffe-product-card__status"
  }, status), icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(icon, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ffe-product-card__icon', icon.props.className)
  }), heading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-product-card__heading"
  }, heading), details && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-product-card__details"
  }, details));
};

ProductCard.defaultProps = {
  elementType: 'div'
};
ProductCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Bottom text - should only be used with `size="large"` */
  details: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** The element to render the card as. */
  elementType: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["func"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

  /** Text shown at the top */
  heading: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** A rendered icon - will be sized appropriately */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Status text displayed at the top of the card with a 1 second delay */
  status: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/TextCard/TextCard.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/TextCard/TextCard.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CardBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardBase */ "./node_modules/@sb1/ffe-cards-react/es/CardBase.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./node_modules/@sb1/ffe-cards-react/es/components/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var TextCard = function TextCard(props) {
  var className = props.className,
      leftAlign = props.leftAlign,
      children = props.children,
      rest = _objectWithoutProperties(props, ["className", "leftAlign", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardBase__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-text-card', {
      'ffe-text-card--left-align': leftAlign
    }, className)
  }, rest), typeof children === 'function' ? children(_components__WEBPACK_IMPORTED_MODULE_4__) : children);
};

TextCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],

  /** Left-aligned text on the card */
  leftAlign: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

  /** The element to render the card as */
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]]),

  /** Function that's passed available sub-components as arguments, or regular children */
  children: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["node"]])
};
/* harmony default export */ __webpack_exports__["default"] = (TextCard);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/components/CardName.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/components/CardName.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentBase */ "./node_modules/@sb1/ffe-cards-react/es/components/ComponentBase.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var CardName = function CardName(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComponentBase__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-card-component--card-name', className)
  }, rest));
};

CardName.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (CardName);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/components/ComponentBase.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/components/ComponentBase.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var ComponentBase = function ComponentBase(_ref) {
  var className = _ref.className,
      Element = _ref.element,
      rest = _objectWithoutProperties(_ref, ["className", "element"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-card-component', className)
  }, rest));
};

ComponentBase.defaultProps = {
  element: 'p'
};
ComponentBase.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  element: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_2__["func"], prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"]
};
/* harmony default export */ __webpack_exports__["default"] = (ComponentBase);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/components/Subtext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/components/Subtext.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentBase */ "./node_modules/@sb1/ffe-cards-react/es/components/ComponentBase.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Subtext = function Subtext(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComponentBase__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-card-component--subtext', className)
  }, rest));
};

Subtext.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Subtext);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/components/Text.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/components/Text.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentBase */ "./node_modules/@sb1/ffe-cards-react/es/components/ComponentBase.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Text = function Text(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComponentBase__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-card-component--text', className)
  }, rest));
};

Text.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/components/Title.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/components/Title.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ComponentBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComponentBase */ "./node_modules/@sb1/ffe-cards-react/es/components/ComponentBase.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Title = function Title(_ref) {
  var className = _ref.className,
      overflowEllipsis = _ref.overflowEllipsis,
      rest = _objectWithoutProperties(_ref, ["className", "overflowEllipsis"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ComponentBase__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ffe-card-component--title', {
      'ffe-card-component--title--overflow-ellipsis': overflowEllipsis
    }, className)
  }, rest));
};

Title.defaultProps = {
  overflowEllipsis: true
};
Title.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],

  /** Disable wrapping and hide overflow with ellipsis */
  overflowEllipsis: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"]
};
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/components/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/components/index.js ***!
  \******************************************************************/
/*! exports provided: CardName, Subtext, Text, Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardName__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardName */ "./node_modules/@sb1/ffe-cards-react/es/components/CardName.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardName", function() { return _CardName__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Subtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subtext */ "./node_modules/@sb1/ffe-cards-react/es/components/Subtext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Subtext", function() { return _Subtext__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text */ "./node_modules/@sb1/ffe-cards-react/es/components/Text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Text__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Title */ "./node_modules/@sb1/ffe-cards-react/es/components/Title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return _Title__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/@sb1/ffe-cards-react/es/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@sb1/ffe-cards-react/es/index.js ***!
  \*******************************************************/
/*! exports provided: LinkCard, ProductCard, CardBase, TextCard, IconCard, ImageCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LinkCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinkCard */ "./node_modules/@sb1/ffe-cards-react/es/LinkCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkCard", function() { return _LinkCard__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard */ "./node_modules/@sb1/ffe-cards-react/es/ProductCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductCard", function() { return _ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _CardBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardBase */ "./node_modules/@sb1/ffe-cards-react/es/CardBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardBase", function() { return _CardBase__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TextCard_TextCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextCard/TextCard */ "./node_modules/@sb1/ffe-cards-react/es/TextCard/TextCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextCard", function() { return _TextCard_TextCard__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _IconCard_IconCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconCard/IconCard */ "./node_modules/@sb1/ffe-cards-react/es/IconCard/IconCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconCard", function() { return _IconCard_IconCard__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ImageCard_ImageCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImageCard/ImageCard */ "./node_modules/@sb1/ffe-cards-react/es/ImageCard/ImageCard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageCard", function() { return _ImageCard_ImageCard__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/@sb1/ffe-grid-react/es/Grid.js":
/*!*****************************************************!*\
  !*** ./node_modules/@sb1/ffe-grid-react/es/Grid.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@sb1/ffe-grid-react/es/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Grid =
/*#__PURE__*/
function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* istanbul ignore else: there is no else  */
      if (false) {}
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          condensed = _this$props.condensed,
          element = _this$props.element,
          topPadding = _this$props.topPadding,
          rest = _objectWithoutProperties(_this$props, ["children", "className", "condensed", "element", "topPadding"]);

      var Element = element || 'div';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'ffe-grid', {
          'ffe-grid--condensed': condensed
        }, {
          'ffe-grid--no-top-padding': !topPadding
        })
      }, rest), children);
    }
  }]);

  return Grid;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Grid.defaultProps = {
  topPadding: true
};
Grid.propTypes = {
  /** Any children of a Grid must be a GridRow */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],

  /** Any extra classes are attached to the root node, in addition to ffe-grid classes */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],

  /** For a more compact grid */
  condensed: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"],

  /** Specify the DOM element being used to create the Grid */
  element: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],

  /** Add top padding */
  topPadding: prop_types__WEBPACK_IMPORTED_MODULE_2__["bool"]
};

/***/ }),

/***/ "./node_modules/@sb1/ffe-grid-react/es/GridCol.js":
/*!********************************************************!*\
  !*** ./node_modules/@sb1/ffe-grid-react/es/GridCol.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridCol; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _background_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background-colors */ "./node_modules/@sb1/ffe-grid-react/es/background-colors.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@sb1/ffe-grid-react/es/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }







function camelCaseToDashCase(str) {
  return str.split('').reduce(function (previous, current) {
    return /[A-Z]/.test(current) ? "".concat(previous, "-").concat(current.toLowerCase()) : "".concat(previous).concat(current);
  });
}

var MODIFIER_LIST = ['around', 'background', 'between', 'bottom', 'center', 'end', 'horizontal', 'middle', 'reverse', 'start', 'centerText', 'top'];

var sizeClasses = function sizeClasses(size, def) {
  var _classNames;

  switch (_typeof(def)) {
    case 'undefined':
      return '';

    case 'object':
      return classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, _defineProperty(_classNames, "ffe-grid__col--".concat(size, "-").concat(def.cols), def.cols || def.cols === 0), _defineProperty(_classNames, "ffe-grid__col--".concat(size, "-offset-").concat(def.offset), def.offset || def.offset === 0), _classNames));

    default:
      return "ffe-grid__col--".concat(size, "-").concat(def);
  }
};

var modifiers = function modifiers(props) {
  return Object.keys(props).filter(function (key) {
    return MODIFIER_LIST.indexOf(key) !== -1 && !!props[key];
  }).map(function (key) {
    return "ffe-grid__col--".concat(camelCaseToDashCase(key));
  }).join(' ');
};

var backgroundClass = function backgroundClass(_ref) {
  var background = _ref.background;

  if (!background) {
    return null;
  }

  if (_background_colors__WEBPACK_IMPORTED_MODULE_3__["removedColors"].includes(background)) {
    throw new Error("Support for the ".concat(background, " background on <GridCol> has been removed, please see the CHANGELOG"));
  }

  return _background_colors__WEBPACK_IMPORTED_MODULE_3__["default"].includes(background) ? "ffe-grid__col--bg-".concat(background) : null;
};

var GridCol =
/*#__PURE__*/
function (_Component) {
  _inherits(GridCol, _Component);

  function GridCol() {
    var _this;

    _classCallCheck(this, GridCol);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GridCol).call(this));
    _this.ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
    return _this;
  }

  _createClass(GridCol, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* istanbul ignore else: there is no else  */
      if (false) {}
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bottomPadding = _this$props.bottomPadding,
          children = _this$props.children,
          className = _this$props.className,
          Element = _this$props.element,
          lg = _this$props.lg,
          md = _this$props.md,
          sm = _this$props.sm,
          rest = _objectWithoutProperties(_this$props, ["bottomPadding", "children", "className", "element", "lg", "md", "sm"]);

      Object.keys(rest).forEach(function (key) {
        if (MODIFIER_LIST.includes(key)) {
          delete rest[key];
        }
      });
      var classes = [className, sizeClasses('lg', lg), sizeClasses('md', md), sizeClasses('sm', !sm && !lg && !md ? 12 : sm), modifiers(this.props), backgroundClass(this.props), !bottomPadding ? 'ffe-grid__col--no-bottom-padding' : null].filter(function (x) {
        return x;
      }).join(' ');
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
        className: classes,
        ref: this.ref
      }, rest), children);
    }
  }]);

  return GridCol;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


GridCol.defaultProps = {
  bottomPadding: true,
  element: 'div'
};
GridCol.propTypes = {
  /** Supported background colors */
  background: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(['blue-ice', 'blue-pale', 'green-mint', 'grey-cloud', 'sand', 'grey-warm', 'orange-salmon', 'red', 'blue-sky']),

  /** Any extra classes are attached to the root node, in addition to ffe-grid__col classes */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** Specify the DOM element being used to create the GridCol */
  element: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Distribute remaining space around the content elements */
  around: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Distribute remaining space between the content elements */
  between: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Place content elements at the bottom of the column */
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Center content horizontally */
  center: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Center text content horizontally */
  centerText: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** The content of the column */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Place content elements to the right of the column */
  end: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Layout column content horizontally and flip flex direction */
  horizontal: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Center content vertically */
  middle: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Add bottom padding */
  bottomPadding: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Reverse layout direction */
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Place content elements to the left of the column */
  start: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Place content elements at the top of the column */
  top: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** Size modifiers for small screen sizes */
  sm: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([
  /** Number of columns, 0-12 */
  prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  /** Number of columns, 0-12 */
  prop_types__WEBPACK_IMPORTED_MODULE_1__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    /** Number of columns, 0-12 */
    cols: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

    /** Number of colums offset, 0-12 */
    offset: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]])
  })]),

  /** Size modifiers for medium screen sizes */
  md: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([
  /** Number of columns, 0-12 */
  prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  /** Number of columns, 0-12 */
  prop_types__WEBPACK_IMPORTED_MODULE_1__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    /** Number of columns, 0-12 */
    cols: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

    /** Number of colums offset, 0-12 */
    offset: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]])
  })]),

  /** Size modifiers for large screen sizes */
  lg: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([
  /** Number of columns, 0-12 */
  prop_types__WEBPACK_IMPORTED_MODULE_1__["number"],
  /** Number of columns, 0-12 */
  prop_types__WEBPACK_IMPORTED_MODULE_1__["string"], Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["shape"])({
    /** Number of columns, 0-12 */
    cols: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]]),

    /** Number of colums offset, 0-12 */
    offset: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOfType"])([prop_types__WEBPACK_IMPORTED_MODULE_1__["number"], prop_types__WEBPACK_IMPORTED_MODULE_1__["string"]])
  })])
};

/***/ }),

/***/ "./node_modules/@sb1/ffe-grid-react/es/GridRow.js":
/*!********************************************************!*\
  !*** ./node_modules/@sb1/ffe-grid-react/es/GridRow.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _background_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background-colors */ "./node_modules/@sb1/ffe-grid-react/es/background-colors.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./node_modules/@sb1/ffe-grid-react/es/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var GridRow =
/*#__PURE__*/
function (_Component) {
  _inherits(GridRow, _Component);

  function GridRow() {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridRow).apply(this, arguments));
  }

  _createClass(GridRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* istanbul ignore else: there is no else */
      if (false) {}
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          background = _this$props.background,
          className = _this$props.className,
          children = _this$props.children,
          element = _this$props.element,
          reverse = _this$props.reverse,
          topPadding = _this$props.topPadding,
          rest = _objectWithoutProperties(_this$props, ["background", "className", "children", "element", "reverse", "topPadding"]);

      var content = children;
      var hasBackgroundColor = _background_colors__WEBPACK_IMPORTED_MODULE_3__["default"].includes(background);
      var hasRemovedColor = _background_colors__WEBPACK_IMPORTED_MODULE_3__["removedColors"].includes(background);

      if (hasBackgroundColor) {
        content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ffe-grid__row-wrapper"
        }, children);
      }

      if (hasRemovedColor) {
        throw new Error("Support for the ".concat(background, " background on <GridRow> has been removed, please see the CHANGELOG"));
      }

      var Element = element || 'div';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'ffe-grid__row', _defineProperty({}, "ffe-grid__row--bg-".concat(background), hasBackgroundColor), {
          'ffe-grid__row--reverse': reverse
        }, {
          'ffe-grid__row--top-padding': topPadding
        })
      }, rest), content);
    }
  }]);

  return GridRow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


GridRow.defaultProps = {
  topPadding: false
};
GridRow.propTypes = {
  /** Supported background colors */
  background: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["oneOf"])(['blue-ice', 'blue-pale', 'green-mint', 'grey-cloud', 'sand', 'grey-warm', 'orange-salmon', 'red', 'blue-sky']),

  /** Any extra classes are attached to the root node, in addition to ffe-grid__row classes */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** All children of a `<GridRow />` must be `<GridCol />`. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__["node"],

  /** Specify the DOM element being used to create the GridRow */
  element: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"],

  /** If true, columns are reversed */
  reverse: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],

  /** If true, row receives top padding. Useful for when you have background colored rows */
  topPadding: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
};

/***/ }),

/***/ "./node_modules/@sb1/ffe-grid-react/es/InlineGrid.js":
/*!***********************************************************!*\
  !*** ./node_modules/@sb1/ffe-grid-react/es/InlineGrid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InlineGrid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/@sb1/ffe-grid-react/es/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! . */ "./node_modules/@sb1/ffe-grid-react/es/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var InlineGrid =
/*#__PURE__*/
function (_Component) {
  _inherits(InlineGrid, _Component);

  function InlineGrid() {
    _classCallCheck(this, InlineGrid);

    return _possibleConstructorReturn(this, _getPrototypeOf(InlineGrid).apply(this, arguments));
  }

  _createClass(InlineGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* istanbul ignore else: there is no else  */
      if (false) {}
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Element = _this$props.element,
          rest = _objectWithoutProperties(_this$props, ["className", "element"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Element, _extends({
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'ffe-grid', 'ffe-grid--inline')
      }, rest));
    }
  }]);

  return InlineGrid;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


InlineGrid.propTypes = {
  /** Any children of a InlineGrid must be a GridRow */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__["node"],

  /** Any extra classes are attached to the root node, in addition to ffe-grid classes */
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],

  /** Specify the DOM element being used to create the Grid */
  element: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
InlineGrid.defaultProps = {
  element: 'div'
};

/***/ }),

/***/ "./node_modules/@sb1/ffe-grid-react/es/background-colors.js":
/*!******************************************************************!*\
  !*** ./node_modules/@sb1/ffe-grid-react/es/background-colors.js ***!
  \******************************************************************/
/*! exports provided: default, removedColors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removedColors", function() { return removedColors; });
/* harmony default export */ __webpack_exports__["default"] = (['blue-ice', 'blue-pale', 'green-mint', 'grey-cloud', 'sand', 'grey-warm', 'orange-salmon', 'red', 'blue-sky']);
var removedColors = ['blue-cobalt', 'blue-royal', 'purple-magenta'];

/***/ }),

/***/ "./node_modules/@sb1/ffe-grid-react/es/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@sb1/ffe-grid-react/es/index.js ***!
  \******************************************************/
/*! exports provided: Grid, InlineGrid, GridRow, GridCol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid */ "./node_modules/@sb1/ffe-grid-react/es/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _Grid__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _InlineGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InlineGrid */ "./node_modules/@sb1/ffe-grid-react/es/InlineGrid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineGrid", function() { return _InlineGrid__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _GridRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GridRow */ "./node_modules/@sb1/ffe-grid-react/es/GridRow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridRow", function() { return _GridRow__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _GridCol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridCol */ "./node_modules/@sb1/ffe-grid-react/es/GridCol.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridCol", function() { return _GridCol__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./node_modules/@sb1/ffe-grid-react/es/utils.js":
/*!******************************************************!*\
  !*** ./node_modules/@sb1/ffe-grid-react/es/utils.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore if: I don't see any good way of getting around NODE_ENV */
if (true) {
  var emptyFn = function emptyFn() {};

  module.exports = {
    checkForDeprecatedModifiers: emptyFn,
    checkForNestedComponent: emptyFn,
    checkValidColumnCount: emptyFn
  };
} else {}

/***/ }),

/***/ "./node_modules/@sb1/ffe-icons-react/lib/chevron-ikon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@sb1/ffe-icons-react/lib/chevron-ikon.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var svg = _react.default.createElement("svg", {
  viewBox: "0 0 200 200"
}, _react.default.createElement("path", {
  d: "m16.171492,41.999998c-4.143269,0-8.2852797,1.57464-11.4277496,4.706478-6.3249899,6.283609-6.3249899,16.499474,0,22.803034l84.0286676,83.76282c6.30496,6.30356,16.54928,6.30356,22.87426,0l83.60959-83.26412c6.32499-6.28361,6.32499-16.499477,0-22.803038-6.30496-6.30356-16.55553-6.30356-22.88051,0l-72.13806,71.893768-72.613438-72.373767c-3.14247-3.151781-7.29074-4.725174-11.433999-4.725174h-0.0188z"
}));

var Icon = function Icon(_ref) {
  var desc = _ref.desc,
      _ref$focusable = _ref.focusable,
      focusable = _ref$focusable === void 0 ? false : _ref$focusable,
      title = _ref.title,
      iconName = _ref.iconName,
      rest = _objectWithoutProperties(_ref, ["desc", "focusable", "title", "iconName"]);

  return _react.default.createElement("svg", _extends({
    focusable: String(focusable)
  }, rest, svg.props), title && _react.default.createElement("title", null, title), desc && _react.default.createElement("desc", null, desc), svg.props.children);
};

Icon.propTypes = {
  desc: _propTypes.string,
  focusable: _propTypes.bool,
  title: _propTypes.string,
  iconName: _propTypes.string
};
Icon.displayName = 'ChevronIkon';
var _default = Icon;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@sb1/ffe-icons-react/lib/kryss-ikon.js":
/*!*************************************************************!*\
  !*** ./node_modules/@sb1/ffe-icons-react/lib/kryss-ikon.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var svg = _react.default.createElement("svg", {
  viewBox: "0 0 200 200"
}, _react.default.createElement("path", {
  d: "M18.77,0c-3.562,0-7.125,1.347-9.834,4.044l-4.429,4.439c-5.381,5.394-5.381,14.25,0,19.68l71.19,71.83-71.66,71.83c-5.381,5.394-5.381,14.25,0,19.68l4.429,4.439c5.381,5.394,14.22,5.394,19.64,0l71.66-71.83,71.65,71.83c5.381,5.394,14.23,5.394,19.65,0l4.429-4.439c5.381-5.394,5.381-14.25,0-19.68l-71.19-71.83,71.66-71.83c5.381-4.914,5.381-13.78,0-19.21l-4.429-4.423c-5.381-5.394-14.22-5.394-19.64,0l-72.13,71.34-71.17-71.83c-2.691-2.697-6.257-4.044-9.819-4.044z"
}));

var Icon = function Icon(_ref) {
  var desc = _ref.desc,
      _ref$focusable = _ref.focusable,
      focusable = _ref$focusable === void 0 ? false : _ref$focusable,
      title = _ref.title,
      iconName = _ref.iconName,
      rest = _objectWithoutProperties(_ref, ["desc", "focusable", "title", "iconName"]);

  return _react.default.createElement("svg", _extends({
    focusable: String(focusable)
  }, rest, svg.props), title && _react.default.createElement("title", null, title), desc && _react.default.createElement("desc", null, desc), svg.props.children);
};

Icon.propTypes = {
  desc: _propTypes.string,
  focusable: _propTypes.bool,
  title: _propTypes.string,
  iconName: _propTypes.string
};
Icon.displayName = 'KryssIkon';
var _default = Icon;
exports.default = _default;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

/*global __PATH_PREFIX__ */
function withPrefix(path) {
  return normalizePath("" + "/" + path);
}

function normalizePath(path) {
  return path.replace(/\/+/g, "/");
}

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool // Set up IntersectionObserver

};

var handleIntersection = function handleIntersection(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
};

var GatsbyLink =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "defaultGetProps", function (_ref) {
      var isPartiallyCurrent = _ref.isPartiallyCurrent,
          isCurrent = _ref.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    });
    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(this.props.to).pathname);
    }
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      handleIntersection(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(_this2.props.to).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);
    var LOCAL_URL = /^\/(?!\/)/;

    if (false) {}

    var prefixedTo = withPrefix(to);
    return _react.default.createElement(_router.Link, (0, _extends2.default)({
      to: prefixedTo,
      state: state,
      getProps: getProps,
      innerRef: this.handleRef,
      onMouseEnter: function onMouseEnter(e) {
        if (_onMouseEnter) {
          _onMouseEnter(e);
        }

        ___loader.hovering((0, _parsePath.parsePath)(to).pathname);
      },
      onClick: function onClick(e) {
        if (_onClick) {
          _onClick(e);
        }

        if (e.button === 0 && // ignore right clicks
        !_this3.props.target && // let browser handle "target=_blank"
        !e.defaultPrevented && // onClick prevented default
        !e.metaKey && // ignore clicks with modifier keys...
        !e.altKey && !e.ctrlKey && !e.shiftKey) {
          e.preventDefault(); // Make sure the necessary scripts and data are
          // loaded before continuing.

          navigate(to, {
            state: state,
            replace: replace
          });
        }

        return true;
      }
    }, rest));
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(withPrefix(to), options);
};

exports.navigate = navigate;

var push = function push(to) {
  console.warn("The \"push\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___push(withPrefix(to));
};

exports.push = push;

var replace = function replace(to) {
  console.warn("The \"replace\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");

  window.___replace(withPrefix(to));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  console.warn("The \"navigateTo\" method is now deprecated and will be removed in Gatsby v3. Please use \"navigate\" instead.");
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var knownOptions = {
  clientId: "string",
  sampleRate: "number",
  siteSpeedSampleRate: "number",
  alwaysSendReferrer: "boolean",
  allowAnchor: "boolean",
  cookieName: "string",
  cookieExpires: "number",
  storeGac: "boolean",
  legacyCookieDomain: "string",
  legacyHistoryImport: "boolean",
  allowLinker: "boolean"
};

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents,
      setPostBodyComponents = _ref.setPostBodyComponents;

  if (false) {} // Lighthouse recommends pre-connecting to google analytics


  setHeadComponents([_react.default.createElement("link", {
    rel: "preconnect dns-prefetch",
    key: "preconnect-google-analytics",
    href: "https://www.google-analytics.com"
  })]);
  var excludeGAPaths = [];

  if (typeof pluginOptions.exclude !== "undefined") {
    var Minimatch = __webpack_require__(/*! minimatch */ "minimatch").Minimatch;

    pluginOptions.exclude.map(function (exclude) {
      var mm = new Minimatch(exclude);
      excludeGAPaths.push(mm.makeRe());
    });
  }

  var gaCreateOptions = {};

  for (var option in knownOptions) {
    if (typeof pluginOptions[option] === knownOptions[option]) {
      gaCreateOptions[option] = pluginOptions[option];
    }
  }

  var setComponents = pluginOptions.head ? setHeadComponents : setPostBodyComponents;
  return setComponents([_react.default.createElement("script", {
    key: "gatsby-plugin-google-analytics",
    dangerouslySetInnerHTML: {
      __html: "\n  " + (excludeGAPaths.length ? "window.excludeGAPaths=[" + excludeGAPaths.join(",") + "];" : "") + "\n  " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "function gaOptout(){document.cookie=disableStr+'=true; expires=Thu, 31 Dec 2099 23:59:59 UTC;path=/',window[disableStr]=!0}var gaProperty='" + pluginOptions.trackingId + "',disableStr='ga-disable-'+gaProperty;document.cookie.indexOf(disableStr+'=true')>-1&&(window[disableStr]=!0);" : "") + "\n  if(" + (typeof pluginOptions.respectDNT !== "undefined" && pluginOptions.respectDNT == true ? "!(navigator.doNotTrack == \"1\" || window.doNotTrack == \"1\")" : "true") + ") {\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n  }\n  if (typeof ga === \"function\") {\n    ga('create', '" + pluginOptions.trackingId + "', '" + (typeof pluginOptions.cookieDomain === "string" ? pluginOptions.cookieDomain : "auto") + "', " + (typeof pluginOptions.name === "string" ? "'" + pluginOptions.name + "', " : "") + JSON.stringify(gaCreateOptions) + ");\n      " + (typeof pluginOptions.anonymize !== "undefined" && pluginOptions.anonymize === true ? "ga('set', 'anonymizeIp', true);" : "") + "\n      " + (typeof pluginOptions.optimizeId !== "undefined" ? "ga('require', '" + pluginOptions.optimizeId + "');" : "") + "\n      " + (typeof pluginOptions.experimentId !== "undefined" ? "ga('set', 'expId', '" + pluginOptions.experimentId + "');" : "") + "\n      " + (typeof pluginOptions.variationId !== "undefined" ? "ga('set', 'expVar', '" + pluginOptions.variationId + "');" : "") + "}\n      "
    }
  })]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

var _crypto = _interopRequireDefault(__webpack_require__(/*! crypto */ "crypto"));

// default icons for generating icons
exports.defaultIcons = [{
  src: "icons/icon-48x48.png",
  sizes: "48x48",
  type: "image/png"
}, {
  src: "icons/icon-72x72.png",
  sizes: "72x72",
  type: "image/png"
}, {
  src: "icons/icon-96x96.png",
  sizes: "96x96",
  type: "image/png"
}, {
  src: "icons/icon-144x144.png",
  sizes: "144x144",
  type: "image/png"
}, {
  src: "icons/icon-192x192.png",
  sizes: "192x192",
  type: "image/png"
}, {
  src: "icons/icon-256x256.png",
  sizes: "256x256",
  type: "image/png"
}, {
  src: "icons/icon-384x384.png",
  sizes: "384x384",
  type: "image/png"
}, {
  src: "icons/icon-512x512.png",
  sizes: "512x512",
  type: "image/png"
}];
/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */

exports.doesIconExist = function doesIconExist(srcIcon) {
  try {
    return _fs.default.statSync(srcIcon).isFile();
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw e;
    }

    return false;
  }
};

exports.createContentDigest = function createContentDigest(content) {
  var digest = _crypto.default.createHash("sha1").update(content).digest("hex");

  return digest;
};
/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */


exports.addDigestToPath = function (path, digest, method) {
  if (method === "name") {
    var parsedPath = _path.default.parse(path);

    return parsedPath.dir + "/" + parsedPath.name + "-" + digest + parsedPath.ext;
  }

  if (method === "query") {
    return path + "?v=" + digest;
  }

  return path;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var iconDigest = null;

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
  var headComponents = [];
  var icons = pluginOptions.icons || _common.defaultIcons;
  var legacy = typeof pluginOptions.legacy !== "undefined" ? pluginOptions.legacy : true;
  var cacheBusting = typeof pluginOptions.cache_busting_mode !== "undefined" ? pluginOptions.cache_busting_mode : "query"; // If icons were generated, also add a favicon link.

  if (pluginOptions.icon) {
    var favicon = icons && icons.length ? icons[0].src : null;

    if (cacheBusting !== "none") {
      iconDigest = (0, _common.createContentDigest)(_fs.default.readFileSync(pluginOptions.icon));
    }

    var insertFaviconLinkTag = typeof pluginOptions.include_favicon !== "undefined" ? pluginOptions.include_favicon : true;

    if (favicon && insertFaviconLinkTag) {
      headComponents.push(_react.default.createElement("link", {
        key: "gatsby-plugin-manifest-icon-link",
        rel: "shortcut icon",
        href: (0, _gatsby.withPrefix)((0, _common.addDigestToPath)(favicon, iconDigest, cacheBusting))
      }));
    }
  } // Add manifest link tag.


  headComponents.push(_react.default.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: (0, _gatsby.withPrefix)("/manifest.webmanifest"),
    crossOrigin: pluginOptions.crossOrigin
  })); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (pluginOptions.theme_color) {
    var insertMetaTag = typeof pluginOptions.theme_color_in_head !== "undefined" ? pluginOptions.theme_color_in_head : true;

    if (insertMetaTag) {
      headComponents.push(_react.default.createElement("meta", {
        key: "gatsby-plugin-manifest-meta",
        name: "theme-color",
        content: pluginOptions.theme_color
      }));
    }
  }

  if (legacy) {
    var iconLinkTags = icons.map(function (icon) {
      return _react.default.createElement("link", {
        key: "gatsby-plugin-manifest-apple-touch-icon-" + icon.sizes,
        rel: "apple-touch-icon",
        sizes: icon.sizes,
        href: (0, _gatsby.withPrefix)((0, _common.addDigestToPath)(icon.src, iconDigest, cacheBusting))
      });
    });
    headComponents = headComponents.concat(iconLinkTags);
  }

  setHeadComponents(headComponents);
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bin, bugs, dependencies, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = {"_args":[["gatsby@2.3.35","/home/travis/build/SpareBank1/jobbsb1"]],"_from":"gatsby@2.3.35","_id":"gatsby@2.3.35","_inBundle":false,"_integrity":"sha512-yb1KnX5P45WMeJvvCE2YePpPtSAxTIYHGjYCCJN6xI+cDJLL+lXmz7Q5WsvwiMPAZTdCUR26m3ZyJhERtnwHeg==","_location":"/gatsby","_phantomChildren":{"@babel/code-frame":"7.0.0","@babel/runtime":"7.3.1","bluebird":"3.5.3","chalk":"2.4.2","ci-info":"2.0.0","clipboardy":"1.2.3","common-tags":"1.8.0","convert-hrtime":"2.0.0","core-js":"2.6.5","cross-spawn":"5.1.0","decamelize":"1.2.0","dot-prop":"4.2.0","envinfo":"5.12.1","fs-exists-cached":"1.0.0","gatsby-telemetry":"1.0.9","get-caller-file":"1.0.3","get-stream":"3.0.0","graceful-fs":"4.1.15","hosted-git-info":"2.7.1","is-stream":"1.1.0","is-valid-path":"0.1.1","jsonfile":"4.0.0","lodash":"4.17.11","map-age-cleaner":"0.1.3","meant":"1.0.1","nice-try":"1.0.5","npm-run-path":"2.0.2","opentracing":"0.14.3","p-finally":"1.0.0","p-is-promise":"2.1.0","path-exists":"3.0.0","path-key":"2.0.1","pretty-error":"2.1.1","prompts":"2.0.4","pump":"3.0.0","require-directory":"2.1.1","require-main-filename":"1.0.1","resolve-cwd":"2.0.0","semver":"5.6.0","set-blocking":"2.0.0","shebang-command":"1.2.0","signal-exit":"3.0.2","source-map":"0.5.7","stack-trace":"0.0.10","string-width":"2.1.1","strip-eof":"1.0.0","unique-string":"1.0.0","universalify":"0.1.2","update-notifier":"2.5.0","uuid":"3.3.2","which":"1.3.1","which-module":"2.0.0","wrap-ansi":"2.1.0","write-file-atomic":"2.4.2","xdg-basedir":"3.0.0","y18n":"3.2.1","yurnalist":"1.0.5"},"_requested":{"type":"version","registry":true,"raw":"gatsby@2.3.35","name":"gatsby","escapedName":"gatsby","rawSpec":"2.3.35","saveSpec":null,"fetchSpec":"2.3.35"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/gatsby/-/gatsby-2.3.35.tgz","_spec":"2.3.35","_where":"/home/travis/build/SpareBank1/jobbsb1","author":{"name":"Kyle Mathews","email":"mathews.kyle@gmail.com"},"bin":{"gatsby":"./dist/bin/gatsby.js"},"bugs":{"url":"https://github.com/gatsbyjs/gatsby/issues"},"dependencies":{"@babel/code-frame":"^7.0.0","@babel/core":"^7.0.0","@babel/parser":"^7.0.0","@babel/polyfill":"^7.0.0","@babel/runtime":"^7.0.0","@babel/traverse":"^7.0.0","@gatsbyjs/relay-compiler":"2.0.0-printer-fix.2","@mikaelkristiansson/domready":"^1.0.9","@pieh/friendly-errors-webpack-plugin":"1.7.0-chalk-2","@reach/router":"^1.1.1","@stefanprobst/lokijs":"^1.5.6-b","address":"1.0.3","autoprefixer":"^9.4.3","babel-core":"7.0.0-bridge.0","babel-eslint":"^9.0.0","babel-loader":"^8.0.0","babel-plugin-add-module-exports":"^0.2.1","babel-plugin-dynamic-import-node":"^1.2.0","babel-plugin-remove-graphql-queries":"^2.6.3","babel-preset-gatsby":"^0.1.11","better-opn":"0.1.4","better-queue":"^3.8.6","bluebird":"^3.5.0","browserslist":"3.2.8","cache-manager":"^2.9.0","cache-manager-fs-hash":"^0.0.6","chalk":"^2.3.2","chokidar":"2.1.2","common-tags":"^1.4.0","compression":"^1.7.3","convert-hrtime":"^2.0.0","copyfiles":"^1.2.0","core-js":"^2.5.0","css-loader":"^1.0.0","debug":"^3.1.0","del":"^3.0.0","detect-port":"^1.2.1","devcert-san":"^0.3.3","dotenv":"^4.0.0","eslint":"^5.6.0","eslint-config-react-app":"^3.0.0","eslint-loader":"^2.1.0","eslint-plugin-flowtype":"^2.46.1","eslint-plugin-graphql":"^3.0.3","eslint-plugin-import":"^2.9.0","eslint-plugin-jsx-a11y":"^6.0.3","eslint-plugin-react":"^7.8.2","event-source-polyfill":"^1.0.5","express":"^4.16.3","express-graphql":"^0.7.1","fast-levenshtein":"~2.0.4","file-loader":"^1.1.11","flat":"^4.0.0","fs-exists-cached":"1.0.0","fs-extra":"^5.0.0","gatsby-cli":"^2.5.12","gatsby-link":"^2.0.17","gatsby-plugin-page-creator":"^2.0.12","gatsby-react-router-scroll":"^2.0.7","gatsby-telemetry":"^1.0.9","glob":"^7.1.1","got":"8.0.0","graphql":"^14.1.1","graphql-compose":"6.0.3","graphql-playground-middleware-express":"^1.7.10","hash-mod":"^0.0.5","invariant":"^2.2.4","is-relative":"^1.0.0","is-relative-url":"^2.0.0","is-wsl":"^1.1.0","jest-worker":"^23.2.0","joi":"12.x.x","json-loader":"^0.5.7","json-stringify-safe":"^5.0.1","kebab-hash":"^0.1.2","lodash":"^4.17.10","md5":"^2.2.1","md5-file":"^3.1.1","mime":"^2.2.0","mini-css-extract-plugin":"^0.4.0","mitt":"^1.1.2","mkdirp":"^0.5.1","moment":"^2.21.0","name-all-modules-plugin":"^1.0.1","normalize-path":"^2.1.1","null-loader":"^0.1.1","opentracing":"^0.14.3","optimize-css-assets-webpack-plugin":"^5.0.1","parseurl":"^1.3.2","physical-cpu-count":"^2.0.0","pnp-webpack-plugin":"^1.4.1","postcss-flexbugs-fixes":"^3.0.0","postcss-loader":"^2.1.3","prop-types":"^15.6.1","raw-loader":"^0.5.1","react-dev-utils":"^4.2.1","react-error-overlay":"^3.0.0","react-hot-loader":"^4.6.2","redux":"^4.0.0","semver":"^5.6.0","shallow-compare":"^1.2.2","sift":"^5.1.0","signal-exit":"^3.0.2","slash":"^1.0.0","socket.io":"^2.0.3","stack-trace":"^0.0.10","string-similarity":"^1.2.0","style-loader":"^0.21.0","terser-webpack-plugin":"^1.2.2","true-case-path":"^1.0.3","type-of":"^2.0.1","url-loader":"^1.0.1","util.promisify":"^1.0.0","uuid":"^3.1.0","v8-compile-cache":"^1.1.0","webpack":"~4.28.4","webpack-dev-middleware":"^3.0.1","webpack-dev-server":"^3.1.14","webpack-hot-middleware":"^2.21.0","webpack-merge":"^4.1.0","webpack-stats-plugin":"^0.1.5","xstate":"^4.3.2","yaml-loader":"^0.5.0"},"description":"Blazing fast modern site generator for React","devDependencies":{"@babel/cli":"^7.0.0","@babel/runtime":"^7.0.0","babel-preset-gatsby-package":"^0.1.4","cross-env":"^5.1.4","rimraf":"^2.6.1"},"engines":{"node":">=6.0.0"},"files":["cache-dir","dist","graphql.js","index.d.ts","utils.js"],"gitHead":"2c2f2a7b4d420072136c113724541159b28a5901","homepage":"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme","keywords":["blog","generator","jekyll","markdown","react","ssg","website"],"license":"MIT","main":"cache-dir/commonjs/gatsby-browser-entry.js","module":"cache-dir/gatsby-browser-entry.js","name":"gatsby","peerDependencies":{"react":"^16.4.2","react-dom":"^16.4.2"},"repository":{"type":"git","url":"git+https://github.com/gatsbyjs/gatsby.git"},"resolutions":{"graphql":"^14.1.1"},"scripts":{"build":"npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs","build:cjs":"babel cache-dir --out-dir cache-dir/commonjs --ignore **/__tests__","build:internal-plugins":"copyfiles -u 1 src/internal-plugins/**/package.json dist","build:rawfiles":"copyfiles -u 1 src/internal-plugins/**/raw_* dist","build:src":"babel src --out-dir dist --source-maps --verbose --ignore **/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__","clean-test-bundles":"find test/ -type f -name bundle.js* -exec rm -rf {} +","prebuild":"rimraf dist && rimraf cache-dir/commonjs","prepare":"cross-env NODE_ENV=production npm run build","watch":"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch"},"types":"index.d.ts","version":"2.3.35","yargs":{"boolean-negation":false}};

/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  exports.hot = function(a) {
    return a
  }
}


/***/ }),

/***/ "./node_modules/react-timestamp/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-timestamp/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e=__webpack_require__(/*! react */ "react"),t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=function(e,t,r){return 1==t?e:r||e+"s"},a=function(e){if(!e)return new Date;if("number"==typeof e||""+parseInt(e,10)==e){if(e=parseInt(e,10),isNaN(e))return null;e=new Date(1e3*e)}if(e=new Date(e),isNaN(e.getTime()))return null;var t=e.toJSON().split(/[:\-\+TZ\. ]/);for(var r in t)if(""!==t[r]&&isNaN(parseInt(t[r],10)))return null;return e},u=function(e,n){var a,u,o;void 0===n&&(n={}),(n=Object.assign({format:"full",includeDay:!1,twentyFourHour:!1},n)).twentyFourHour?(a=e.getHours().toString(),o=""):(a=e.getHours()%12==0?"12":(e.getHours()%12).toString(),o=e.getHours()>11?"pm":"am"),u=e.getMinutes()<10?"0"+e.getMinutes():""+e.getMinutes();var i=n.includeDay?r[e.getDay()]+", ":"";switch(n.format){case"date":return""+i+e.getDate()+" "+t[e.getMonth()]+" "+e.getFullYear();case"time":return a+":"+u+o;case"json":return e.toJSON();case"full":default:return""+i+e.getDate()+" "+t[e.getMonth()]+" "+e.getFullYear()+", "+a+":"+u+o}};"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){var r=arguments;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),a=1;a<arguments.length;a++){var u=r[a];if(null!=u)for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&(n[o]=u[o])}return n},writable:!0,configurable:!0}),module.exports=function(t){if(t.autoUpdate){var r=e.useState(0),o=r[0],i=r[1];e.useEffect(function(){var e=setInterval(function(){return i(o+1)},6e4);return function(){return clearInterval(e)}},[])}var s=t.component||"time",l=a(t.date);if(!l)return e.createElement(s,{},["Invalid date"]);var c=l,f=function(e,t){return Math.floor((t.getTime()-e.getTime())/1e3)}(c,a(t.relativeTo)||new Date),d=!t.relative||Math.abs(f)>31536e3?u(c,t.options):function(e,t){void 0===t&&(t=!0);var r,a,u=e>=0;return e=Math.abs(e),t&&e<60?u?"just then":"soon":(a=e<60?e+" "+n("second",e):e<3600?(r=Math.round(e/60))+" "+n("minute",r):e<86400?(r=Math.round(e/3600))+" "+n("hour",r):e<604800?(r=Math.round(e/86400))+" "+n("day",r):e<2628e3?(r=Math.round(e/604800))+" "+n("week",r):e<31536e3?(r=Math.round(e/2628e3))+" "+n("month",r):(r=Math.round(e/31536e3))+" "+n("year",r),t?u?a+" ago":"in "+a:a)}(f,!t.relativeTo);return e.createElement(s,{className:t.className||"",style:t.style||{},timestamp:u(c,{format:"json"})},d)};


/***/ }),

/***/ "./public/static/d/1025518380.json":
/*!*****************************************!*\
  !*** ./public/static/d/1025518380.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"SpareBank 1 Utvikling","description":".","author":"@antidecaf"}}}};

/***/ }),

/***/ "./public/static/d/1975873584.json":
/*!*****************************************!*\
  !*** ./public/static/d/1975873584.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"allInstaNode":{"edges":[{"node":{"id":"BzNmX9XFYqP","likes":51,"comments":null,"original":"https://scontent-iad3-1.cdninstagram.com/vp/447d56b6fb9362b1d2c63d8c9eb8f111/5D1F1036/t51.2885-15/e35/62534662_143586673494138_6166436952845223582_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1561637464,"caption":"I dag har vi jobbet med rolledefinisjoner innen design. Utfordringen er at ikke alle designere er like, så vi har sett på en måte visualisere ulike designprofiler og deres kompetanse. #godesammen #ux","localFile":{"childImageSharp":{"fixed":{"src":"/static/52c942b8497bd2ebe7b7267cc806be9c/e6798/62534662_143586673494138_6166436952845223582_n.jpg"}}}}},{"node":{"id":"By8AAeQF8MB","likes":77,"comments":3,"original":"https://scontent-iad3-1.cdninstagram.com/vp/83abe4bf4fe26aeb164add14aab18d0b/5D1F435E/t51.2885-15/e35/62541652_665285497231213_1345826146855962719_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1561046518,"caption":"Sommeravslutning med de beste folka 💖🎉","localFile":null}},{"node":{"id":"By511FTCUKe","likes":51,"comments":1,"original":"https://scontent-iad3-1.cdninstagram.com/vp/75fd79eb6b68f0766e600210f6e23304/5DAFBBA5/t51.2885-15/e35/s1080x1080/61900913_141950103578534_1227894365958790553_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1560973982,"caption":"Våra målgrupper ser ut att passa gott in hemma hos oss ❤️ #homesweethome #sparebank1design #printdesign","localFile":null}},{"node":{"id":"Byzh4cUoP5L","likes":30,"comments":null,"original":"https://scontent-ort2-2.cdninstagram.com/vp/399bcefe59cff55f1ef5e5b9f40f3107/5DBE2E3F/t51.2885-15/e35/65042229_2333118916767725_4612591333780486142_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com","timestamp":1560762197,"caption":"Have I been pwned? @troyhunt besøkte oss forrige uke. To herlige dager med masse hacking 🤓","localFile":{"childImageSharp":{"fixed":{"src":"/static/a5bf65086f1f5a2dcf4653fed4f8c8bb/e6798/65042229_2333118916767725_4612591333780486142_n.jpg"}}}}},{"node":{"id":"BysCmZoiKmh","likes":47,"comments":1,"original":"https://scontent-iad3-1.cdninstagram.com/vp/2bbc35ae69faef90607fededda6adf78/5DA9086E/t51.2885-15/e35/s1080x1080/62271632_432409557339795_584592214396561153_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1560510915,"caption":"Noen ganger funker geriljatesting bra, særlig når det handler om kjapp testing av flyt og funksjonalitet #kundesentrisk #datadrevet #godesammen","localFile":null}},{"node":{"id":"Byk46vDCl0Z","likes":36,"comments":3,"original":"https://scontent-iad3-1.cdninstagram.com/vp/63165bd0b359e9a40e8ef9b39bfcf4a6/5DC37BEF/t51.2885-15/e35/s1080x1080/61954510_2128637107437332_2836805605832264776_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1560270958,"caption":"Arild i aksjon. Kartlegging av kundereiser er i gang for å avdekke hvor det er smertepunkter for kunden. #kundesentrisk #datadrevet #godesammen","localFile":null}},{"node":{"id":"ByIp7HailgF","likes":43,"comments":1,"original":"https://scontent-iad3-1.cdninstagram.com/vp/ecbaba2dc63a10f20acbc097a2a03460/5DB888E1/t51.2885-15/e35/p1080x1080/61710348_646234902514820_6269958526009607282_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1559323573,"caption":"It’s been a delightful experience @uxlondon so thanks for having us! We’re leaving with lots of inspiration and new UX energy and bringing it back to Norway 👏🏻🇳🇴 Hopefully see you next year 🇬🇧😁","localFile":null}},{"node":{"id":"ByIJh2Ei0y8","likes":17,"comments":null,"original":"https://scontent-iad3-1.cdninstagram.com/vp/389fabf8e7910bbd00bd2ed948240f68/5DAA83E6/t51.2885-15/e35/s1080x1080/60393686_380301505918557_4231296823818284710_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1559306588,"caption":"Sarah Doody, a User Experience Designer, Entrepreneur, and Educator discusses anticipatory design vs automated design in the AI world 👏🏻🤖 @uxlondon","localFile":null}},{"node":{"id":"ByH2DgBigFg","likes":21,"comments":null,"original":"https://scontent-iad3-1.cdninstagram.com/vp/817373a55131389e2d45b09114e7d870/5DB40244/t51.2885-15/e35/s1080x1080/60572167_300295337522238_5335482549016139516_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1559296378,"caption":"“Design is the business. It’s not separate from the business”. Erika Hall from Mule Design on Designing for the Triple Storyline 🇺🇸🤜🏻 @uxlondon","localFile":null}},{"node":{"id":"ByGGCl9CILV","likes":19,"comments":null,"original":"https://scontent-iad3-1.cdninstagram.com/vp/87bc4995eeaac1d5fcfdaf1f52675882/5DAD7E12/t51.2885-15/e35/s1080x1080/60645328_442285149902933_8079907625757234605_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1559237651,"caption":"”People learn UX design by growing from unconscious incompetence to conscious competence, finally to unconscious competence”. 🤯 Jared Spool on Beyond the UX Tipping Point @uxlondon 😻","localFile":null}},{"node":{"id":"ByFZsFwC9pl","likes":35,"comments":null,"original":"https://scontent-iad3-1.cdninstagram.com/vp/decd3e563503fad7dc293ea73880705c/5DA5B9FE/t51.2885-15/e35/s1080x1080/60763763_368353050451366_8069778044426259732_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1559214398,"caption":"“People don’t remember everything in an experience, they remember the peaks.” Jamin Hegeman from Capital One on Service Design @uxlondon 🇺🇸🗽","localFile":null}},{"node":{"id":"ByDY2lECrVY","likes":38,"comments":1,"original":"https://scontent-iad3-1.cdninstagram.com/vp/455cee63bfe3e7c7df7e98ed11d3273b/5DBEAF2F/t51.2885-15/e35/s1080x1080/60803709_197846664521864_5656015976869208056_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com","timestamp":1559146850,"caption":"Before, during and after: Workshop on design sprints and process 🤜🏻🔥 @uxlondon #godeepquickly","localFile":null}}]}}};

/***/ }),

/***/ "./public/static/d/3208260626.json":
/*!*****************************************!*\
  !*** ./public/static/d/3208260626.json ***!
  \*****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"allMediumPost":{"edges":[{"node":{"id":"b10f1b6b-ac6e-5db5-a34b-65cf37a5e914","title":"Datadrevet og kundeorientert utvikling, sa du?","uniqueSlug":"datadrevet-og-kundeorientert-utvikling-sa-du-9a18e89ba416","virtuals":{"subtitle":"Å ha en mer datadrevet og kundeorientert tilnærming til utvikling av digitale tjenester og produkter er stadig viktigere for å henge med i…","previewImage":{"imageId":"1*s5kv_uqcQRq2jDdxOopMZg.png"}},"author":{"name":"Jostein Emmerhoff"}}},{"node":{"id":"d4e03ca4-bfc7-588d-90a7-eb9b1675e394","title":"Denne PSD2-datoen bør du kjenne til","uniqueSlug":"denne-psd2-datoen-bør-du-kjenne-til-1f397b470b76","virtuals":{"subtitle":"Mye er sagt om PSD2 (eller betalingtjenestedirektivet som vi så kortfattet sier på norsk), men det er spesielt to datoer som har vært…","previewImage":{"imageId":"1*GMQTll7lRXPBAXAQiDcLCg.png"}},"author":{"name":"Kristine Ursfjord"}}},{"node":{"id":"dcfa816f-ef2c-5dd3-9be2-9238e02c9ae1","title":"Fra ti om året til ti om dagen","uniqueSlug":"fra-ti-om-året-til-ti-om-dagen-70a703dcf178","virtuals":{"subtitle":"Det er bare få år siden vi hadde ti nettbankreleaser i året. Nå er det enkelte dager vi har ti releaser på forskjellige deler av nett- og…","previewImage":{"imageId":"1*3Sxsb5u8oGE16sGPlVVKGQ.jpeg"}},"author":{"name":"Vidar Moe"}}},{"node":{"id":"53240d36-8d1c-5e2b-b668-c78aa393ab27","title":"Hendelsedrevet læring i SpareBank 1","uniqueSlug":"hendelsedrevet-læring-i-sparebank-1-ba50d96130c1","virtuals":{"subtitle":"Erfaringer fra to år med post mortem","previewImage":{"imageId":"1*aX8zGc9p3uGwI_4X7E9FIA.jpeg"}},"author":{"name":"Kristoffer Berg"}}},{"node":{"id":"016670bf-8d2b-51b1-8177-04568291d31f","title":"Vår utviklerportal for PSD2 er klar!","uniqueSlug":"vår-utviklerportal-for-psd2-er-klar-52fcb6929048","virtuals":{"subtitle":"Da er den her — den første viktige datoen for implementeringen av PSD2 i Norge: 14. mars. Dagen da vi kan boltre oss i nye…","previewImage":{"imageId":"1*LhzWnEivT2A8VngnlmJiJg.png"}},"author":{"name":"Kristine Ursfjord"}}},{"node":{"id":"6c5dc343-d8a1-5e62-af65-c2817ce0ddbb","title":"Beretninger om en varslet katastrofe","uniqueSlug":"beretninger-om-en-varslet-katastrofe-f310ad50dbeb","virtuals":{"subtitle":"“Den dagen de skulle drepe ham, stod Santiago Nasar opp klokken 5.30 om morgenen for å vente på båten som biskopen kom med. Han hadde…","previewImage":{"imageId":"1*Z6gLJIrN09PA93pMvwgJaA.png"}},"author":{"name":"Jan Erik Modal"}}},{"node":{"id":"32792086-35d1-558a-8dcb-6c777b1c6ae4","title":"“Full forvirring og sukk og stønn over hele oppsettet”","uniqueSlug":"full-forvirring-og-sukk-og-stønn-over-hele-oppsettet-1de990315123","virtuals":{"subtitle":"Eller “ Meget ryddig og avklarende. Den/de ansvarlige for layout og kommunikasjon fortjener en honnør i en eller annen form.”","previewImage":{"imageId":"1*IqBWGaDawnGtsMapjNtv1g.png"}},"author":{"name":"Jan Erik Modal"}}},{"node":{"id":"733195c9-e648-5dc6-9e3f-01f7a6b14a18","title":"Hvem er i nabolaget?","uniqueSlug":"hvem-er-i-nabolaget-54d068f68a67","virtuals":{"subtitle":"En stor del av arbeidet når en jobber med maskinlæring, er å forstå dataene en jobber med. En måte å bli bedre kjent med dataene på, er å…","previewImage":{"imageId":"0*zL-lxOuvDJXQRIXt"}},"author":{"name":"Vidar Moe"}}},{"node":{"id":"6942650f-9e2a-5173-bb96-dd809550f0a0","title":"Tekstanalyse for realister — eller hvordan gjøre tekst til tall","uniqueSlug":"tekstanalyse-for-realister-eller-hvordan-gjøre-tekst-til-tall-99943afccfc1","virtuals":{"subtitle":"Mye av informasjonen vi utveksler mellom oss, utveksler vi skriftlig. Med maskinlæring kan vi trekke ut meningen av denne informasjonen…","previewImage":{"imageId":"1*BDdeC0EU4AxoGYwHrjy0gQ.jpeg"}},"author":{"name":"Vidar Moe"}}},{"node":{"id":"fd8c1b37-6364-5c06-9dc0-63f78e4575e5","title":"Learning machine learning: de allra bästa kurserna","uniqueSlug":"learning-machine-learning-de-allra-bästa-kurserna-bfa3584639d4","virtuals":{"subtitle":"Att vara programmerare bör vara att alltid lära sig något nytt. Att konstant operera på gränsen av sin egen kompetens gør yrkesvalet…","previewImage":{"imageId":"1*6FPpgL4uuFR2H0C1R5RQzw.jpeg"}},"author":{"name":"Jonas Nordstrand"}}},{"node":{"id":"83536f9e-7c5e-5c96-8897-4c115255d049","title":"Kjenn dine data","uniqueSlug":"kjenn-dine-data-5ce7fadb1d22","virtuals":{"subtitle":"Når man starter et maskinlæringsprosjekt er det veldig fristende å gå rett på de forskjellige maskinlæringsalgoritmene. I et forsøk på å…","previewImage":{"imageId":"0*vIs6neLQ3Rug1j9m"}},"author":{"name":"Inge Johnsen"}}},{"node":{"id":"c5aaaee5-ab17-5982-a572-69c59a7579d0","title":"Evinnelige og Forbanna Sjekklister — Nekrolog","uniqueSlug":"evinnelige-og-forbanna-sjekklister-nekrolog-864a38f58461","virtuals":{"subtitle":"«Den tredje lord Moynihan, som er død i Manilla i en alder av 55 år, gav med sin personlighet og karriere kritikere av adelsvesenet mange…","previewImage":{"imageId":"1*4EkoLJepB3SExa3J-ussSg.png"}},"author":{"name":"Jan Erik Modal"}}}]}}};

/***/ }),

/***/ "./public/static/d/332715481.json":
/*!****************************************!*\
  !*** ./public/static/d/332715481.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"allMarkdownRemark":{"totalCount":5,"edges":[{"node":{"frontmatter":{"path":"/utviklere","title":"Frontender, backender, fullstack, tech-lead","description":"Jobbe i et av Norges triveligste og største inhouse utviklingsmiljøer?"}}},{"node":{"frontmatter":{"path":"/arkitekter","title":"IT-arkitekter til vår nye avdeling","description":"Har du lyst til å bli med på å forme fremtidens bank? I SpareBank 1s utviklingsselskap etablerer vi nå en arkitekturavdeling som skal sette retning og løfte oss inn i vår teknologiske fremtid."}}},{"node":{"frontmatter":{"path":"/teamleder","title":"Smidig teamleder","description":"Vil du kjempe sammen med oss for en enklere og bedre hverdagsøkonomi for folk flest?"}}},{"node":{"frontmatter":{"path":"/utvikler-fullstack","title":"Fullstack utvikler til et av Norges største utviklingsmiljøer","description":"Kreativ problemløser? Lyst til å jobbe i team på tvers av fagdisipliner? Med mulighet til å fordype deg faglig?"}}},{"node":{"frontmatter":{"path":"/utvikler-sparing","title":"Utvikler til team sparing","description":"Vi prøver å gi folk gode sparevaner. Derfor fokuserer vi mye på å finne kundenes behov, prøve ut hypoteser og utvikle MVP’er. Vi håper du vil være med på denne reisen."}}}]}}};

/***/ }),

/***/ "./public/static/d/478700288.json":
/*!****************************************!*\
  !*** ./public/static/d/478700288.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"allHRmanagerJob":{"totalCount":1,"edges":[{"node":{"Id":7,"Name":"dummy","ShortDescription":"","AdvertisementUrl":"","LastUpdated":"/Date(1549611757000+0100)/","Created":"/Date(1549611757000+0100)/"}}]}}};

/***/ }),

/***/ "./public/static/d/755544856.json":
/*!****************************************!*\
  !*** ./public/static/d/755544856.json ***!
  \****************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = {"data":{"site":{"siteMetadata":{"title":"SpareBank 1 Utvikling"}}}};

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "@reach/router");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sb1_ffe_buttons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sb1/ffe-buttons-react */ "./node_modules/@sb1/ffe-buttons-react/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);







var Header = function Header(_ref) {
  var siteTitle = _ref.siteTitle,
      opening = _ref.opening;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('sb1-header', {
      'sb1-header--opening': opening
    })
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Location"], null, function (_ref2) {
    var location = _ref2.location;
    var path = location.pathname;

    if (path === '/') {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_sb1_ffe_buttons_react__WEBPACK_IMPORTED_MODULE_4__["BackButton"], {
        element: "a",
        href: "/",
        dark: true,
        className: "sb1-header__link sb1-header__link--back"
      }, "Tilbake");
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"], {
    to: "/",
    className: "sb1-header__link sb1-header__link--home"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    viewBox: "0 0 182 40",
    xmlns: "http://www.w3.org/2000/svg",
    className: "sb1-header__logo"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, siteTitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M181.144 20.07c0 10.952-8.89 19.83-19.86 19.83-10.968 0-19.86-8.878-19.86-19.83 0-10.95 8.892-19.827 19.86-19.827 10.97 0 19.86 8.877 19.86 19.828",
    fill: "#F00000"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M155.267 1.172c-8.025 2.545-13.842 10.043-13.842 18.9 0 1.942.285 3.818.807 5.593 4.135 6.106 13.075 8.315 21.256 4.86 9.12-3.855 13.84-13.286 10.543-21.066C171.18 2.726 163.26-.56 155.268 1.17",
    fill: "#B40000"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M165.64 7.94h-4.618c-.33 0-.515.072-.81.182l-5.958 3.062c-.367.148-.514.367-.514.736v3.336c0 .392.32.71.71.71h3.814v15.99c1.74-.24 3.498-.704 5.224-1.432 1.02-.432 1.982-.936 2.887-1.497V8.673c0-.405-.33-.734-.736-.734",
    fill: "#FFF"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M8.33 31.303c-3.668 0-6.576-.845-7.112-1.014-.283-.114-.424-.34-.424-.593v-.14l.367-1.86c.058-.283.255-.367.48-.367.058 0 .114 0 .2.028.592.113 3.47.93 6.18.93 2.315 0 4.375-.677 4.375-3.072 0-2.424-2.117-2.677-4.855-3.072-3.048-.45-6.97-1.268-6.97-6.06 0-4.93 3.668-6.228 8.015-6.228 3.302 0 6.04.79 6.66.96.34.083.51.31.51.59v.142l-.396 1.83c-.03.198-.226.396-.452.396-.028 0-.057-.028-.085-.028-1.355-.282-3.444-.846-5.928-.846-2.09 0-4.29.395-4.29 2.762 0 2.34 2.37 2.677 4.883 3.044 3.303.507 7.057.986 7.057 6.228 0 4.932-4.008 6.37-8.214 6.37M44.195 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.544-4.398l5.025-.817v-.902c0-.79-.087-1.353-.793-1.662-.45-.197-1.13-.28-2.144-.28-1.92 0-4.01.562-4.855.788-.085 0-.14.028-.198.028-.14 0-.282-.057-.31-.254l-.396-1.747v-.113c0-.253.198-.366.34-.423.677-.254 3.273-.96 6.153-.96 2.003 0 3.358.283 4.262.79 1.438.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.625 2.932zm-1.156-7.16l-3.502.565c-1.157.17-2.23.34-2.23 2.17 0 2.2 1.778 2.368 3.134 2.368 1.1 0 2.003-.197 2.597-.395v-4.706zM56.89 18.734c-1.72 0-3.188.17-3.98.366v11.47c0 .254-.168.424-.422.424h-2.88c-.17 0-.48-.17-.48-.423V18.397c0-1.1.65-1.437 2.005-1.832 1.242-.395 3.246-.676 4.855-.705h.48c.395 0 .395 0 .593.084.114.056.255.17.255.45v1.832c0 .283-.03.508-.424.508M71.665 24.68c0 .31-.17.65-.593.65h-9.456c0 1.296.367 2 1.13 2.59.733.593 1.806.846 3.33.846 1.75 0 3.077-.422 3.952-.676.057-.028.085-.028.14-.028.17 0 .312.113.396.395l.367 1.437c0 .028.03.085.03.14 0 .227-.142.34-.34.424-.96.395-2.878.9-5.108.9-5.532 0-7.706-2.17-7.706-7.692 0-5.298 1.467-7.835 6.972-7.835 2.85 0 4.6.734 5.617 2.087.96 1.268 1.27 3.072 1.27 5.41v1.354zm-3.98-4.2c-.367-1.55-1.214-2.056-2.878-2.056-1.892 0-2.683.564-2.993 1.972-.198.79-.198 1.608-.225 2.537l6.32-.028c0-.9-.027-1.663-.225-2.424zM103.776 30.966c-.988.225-2.343.393-3.923.393-3.05 0-6.803-.31-6.803-4.79 0-3.637 2.286-4.03 4.545-4.398l5.024-.817v-.902c0-.79-.086-1.353-.79-1.662-.453-.197-1.13-.28-2.146-.28-1.92 0-4.01.562-4.856.788-.085 0-.14.028-.197.028-.14 0-.28-.057-.31-.254l-.395-1.747v-.113c0-.253.197-.366.338-.423.678-.254 3.275-.96 6.154-.96 2.004 0 3.36.283 4.262.79 1.44.79 1.72 2.114 1.72 3.636v7.778c0 2.114-.705 2.48-2.624 2.932zm-1.157-7.16l-3.5.565c-1.16.17-2.23.34-2.23 2.17 0 2.2 1.777 2.368 3.13 2.368 1.102 0 2.006-.197 2.6-.395v-4.706zM121.497 30.994h-2.908c-.255 0-.452-.17-.452-.423v-9.948c0-1.634-.622-2.198-2.117-2.198-1.693 0-3.528.48-3.528.48V30.57c0 .254-.17.424-.423.424h-2.88c-.283 0-.48-.17-.48-.423V18.425c0-1.07.536-1.438 2.117-1.86 1.44-.395 3.81-.733 5.617-.733 3.528 0 5.476.903 5.476 4.285V30.57c0 .254-.17.424-.423.424M137.865 30.74c0 .113-.113.254-.283.254H133.8c-.14 0-.282 0-.424-.17L129 24.877h-.96v5.694c0 .254-.14.424-.42.424h-2.91c-.252 0-.45-.17-.45-.423v-19.7c0-.337.14-.506.48-.59l2.765-.48h.114c.252 0 .42.17.42.48v12.06h.96l4.46-5.945c.114-.17.227-.197.368-.197l3.444.084c.198 0 .282.14.282.254 0 .056-.028.085-.056.14l-5.335 6.708 5.646 7.215c.027.027.055.084.055.14M26.125 15.83c-1.89 0-4.065.31-5.76.903-1.27.395-1.776.817-1.776 2.283V36.46c0 .283.22.513.627.44l2.674-.492c.34-.057.48-.225.48-.564V30.93c1.003.244 2.266.43 3.67.43 5.25 0 6.238-3.298 6.238-7.75 0-4.48-.705-7.78-6.153-7.78zm-1.073 12.936c-1.524 0-2.68-.337-2.68-.337v-9.5s1.664-.45 2.962-.45c2.146 0 3.077.48 3.077 5.046 0 4.283-.79 5.24-3.358 5.24zM84.07 30.994h-9.4c-.253 0-.48-.198-.48-.45V10.616c0-.253.227-.45.48-.45h9.43c4.772 0 6.717 1.868 6.717 5.252 0 2.986-1.662 4.056-4.234 4.79 2.855.47 4.94 2.02 4.94 5.344 0 3.777-2.654 5.44-7.453 5.44zm-.367-17.925h-5.447v6.03l5.25-.225c2.146-.084 3.246-.846 3.246-2.987 0-1.973-.96-2.82-3.05-2.82zm-.14 8.764l-5.307-.17v6.426h5.307c2.85 0 3.782-1.24 3.782-2.96 0-2.31-.762-3.21-3.782-3.296z",
    fill: "#FFF"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://github.com/SpareBank1/jobbsb1",
    className: "sb1-header__link"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 42 41",
    className: "sb1-header__github-logo"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, "SpareBank1.dev p\xE5 GitHub"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("clipPath", {
    id: "a"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    d: "M0 0h42v41H0z"
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("g", {
    clipPath: "url(#a)"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M20.998.5C9.676.5.494 9.681.494 21.007c0 9.059 5.875 16.745 14.024 19.458 1.025.187 1.399-.446 1.399-.99 0-.487-.017-1.776-.027-3.487-5.704 1.239-6.908-2.749-6.908-2.749-.932-2.369-2.277-3-2.277-3-1.862-1.271.141-1.246.141-1.246 2.058.145 3.141 2.114 3.141 2.114 1.829 3.133 4.8 2.228 5.968 1.703.186-1.325.716-2.228 1.302-2.741-4.553-.518-9.341-2.277-9.341-10.135 0-2.239.799-4.068 2.111-5.502-.211-.519-.915-2.604.202-5.427 0 0 1.72-.552 5.638 2.101 1.635-.455 3.39-.681 5.134-.69 1.742.009 3.495.235 5.133.69 3.915-2.653 5.634-2.101 5.634-2.101 1.119 2.823.415 4.908.205 5.427 1.314 1.434 2.107 3.263 2.107 5.502 0 7.878-4.795 9.612-9.362 10.119.735.633 1.391 1.884 1.391 3.798 0 2.74-.025 4.952-.025 5.624 0 .549.37 1.188 1.41.987 8.142-2.717 14.012-10.398 14.012-19.455 0-2.88-.593-5.62-1.665-8.107C36.699 5.606 29.445.5 20.998.5"
  })))));
};

Header.propTypes = {
  siteTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  opening: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"]
};
Header.defaultProps = {
  siteTitle: "",
  opening: false
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/instagallery.js":
/*!****************************************!*\
  !*** ./src/components/instagallery.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.fixed */ "core-js/modules/es6.string.fixed");
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-timestamp */ "./node_modules/react-timestamp/dist/index.js");
/* harmony import */ var react_timestamp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_timestamp__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sb1-somefeed",
    "data-testid": "instafeed"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "ffe-h3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://instagram.com/sparebank1design",
    className: "ffe-link-text ffe-link-text--no-underline",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "@sparebank1design"), " og ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://instagram.com/sparebank1utvikler",
    className: "ffe-link-text ffe-link-text--no-underline",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "@sparebank1utvikler"), " p\xE5 Instagram"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sb1-instafeed sb1-somefeed"
  }, posts.edges.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: item.node.id,
      id: 'ig-' + index,
      className: "sb1-instafeed__article"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sb1-instafeed__inner"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://www.instagram.com/p/" + item.node.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.node.localFile.childImageSharp.fixed.src,
      alt: ""
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sb1-instafeed__meta"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sb1-instafeed__meta-item--interactions"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      focusable: "false",
      viewBox: "0 0 200 200",
      className: "sb1-instafeed__icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Likes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "M99.91,185c-5.33,0-10.54-1.6-15.1-4.6-20.87-14.1-58.28-45.5-72.16-67.6-14.54-23.36-16.76-50.36-5.548-70.91,9.328-17.11,26.87-26.89,48.18-26.89,14.32,0,29.65,6.56,44.72,18.89,11.3-9.33,27.2-18.89,44.8-18.89,21.32,0,38.74,9.778,48.18,26.89,11.1,20.33,8.992,47.56-5.551,70.67-13.88,22.11-51.29,53.56-72.16,67.67-4.5,3.1-9.7,4.7-15.1,4.7zm-44.74-154.9c-15.88,0-28.2,6.778-35.19,19.11-8.55,15.56-6.55,36.78,5.22,55.58,11.32,17.89,44.18,47.22,68.05,63.33,3.997,2.556,9.325,2.556,13.1,0,23.65-16.11,56.73-45.56,68.05-63.33,11.77-18.67,13.77-40,5.218-55.56-6.772-12.33-19.32-19.11-35.19-19.11-15.32,0-30.09,10.56-39.63,19.33l-5,4.54-4.99-4.56c-9.55-9-24.09-19.33-39.64-19.33z"
    })), item.node.likes ? item.node.likes : '0'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      focusable: "false",
      viewBox: "0 0 200 200",
      className: "sb1-instafeed__icon"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Kommentarer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
      d: "m54.8 2.1c-29.3 0-52.6 22.8-52.6 51.3l0 46.7c0 28.5 23.3 51.3 52.2 51.3l0 37c0 5.3 6.3 10.4 12.9 10.4 2.9 0 6.2-1.1 8.7-3.2l53.8-44.2 16.4 0c29.3 0 52.6-22.8 52.6-51.3l0-47C198.5 25.3 175.1 2.1 146.2 2.1l-91.4 0zm-0.5 17.4 91.9 0c19 0 34.7 15.3 34.7 33.8l0 46.7c0 18.5-15.7 33.8-34.7 33.8l-22.7 0-5.1 4.2-46.5 37.8 0-42-17.9 0c-19 0-34.4-15.3-34.4-33.8l0-46.7c0-18.5 15.7-33.8 34.7-33.8z"
    })), item.node.comments ? item.node.comments : '0')), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sb1-instafeed__meta-item sb1-instafeed__meta-item--caption"
    }, item.node.caption), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "sb1-instafeed__meta-item sb1-instafeed__meta-item--timestamp"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_timestamp__WEBPACK_IMPORTED_MODULE_2___default.a, {
      time: item.node.timestamp
    }))))));
  })));
});

/***/ }),

/***/ "./src/components/instagram.js":
/*!*************************************!*\
  !*** ./src/components/instagram.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1975873584_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/1975873584.json */ "./public/static/d/1975873584.json");
var _public_static_d_1975873584_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1975873584.json */ "./public/static/d/1975873584.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _instagallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./instagallery */ "./src/components/instagallery.js");






var Instagram = function Instagram(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "1975873584",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_instagallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
        posts: data.allInstaNode
      }));
    },
    data: _public_static_d_1975873584_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Instagram.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Instagram);

/***/ }),

/***/ "./src/components/jobs/job.js":
/*!************************************!*\
  !*** ./src/components/jobs/job.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sb1_ffe_cards_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sb1/ffe-cards-react */ "./node_modules/@sb1/ffe-cards-react/es/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var id = _ref.id,
      path = _ref.path,
      title = _ref.title,
      desc = _ref.desc,
      target = _ref.target;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-joblist__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_cards_react__WEBPACK_IMPORTED_MODULE_1__["TextCard"], {
    element: "a",
    className: "sb1-joblist__item--content",
    key: id,
    href: path,
    target: target
  }, function (_ref2) {
    var Title = _ref2.Title,
        Text = _ref2.Text;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, null, desc));
  }));
});

/***/ }),

/***/ "./src/components/jobs/jobs.js":
/*!*************************************!*\
  !*** ./src/components/jobs/jobs.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_478700288_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/478700288.json */ "./public/static/d/478700288.json");
var _public_static_d_478700288_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/478700288.json */ "./public/static/d/478700288.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _mjobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mjobs */ "./src/components/jobs/mjobs.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "478700288",
    render: function render(data) {
      if (data.allHRmanagerJob.edges[0].node.Name === "dummy") {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mjobs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          numHRopenings: 0,
          hrData: []
        });
      } else {
        var numOpenings = data.allHRmanagerJob.totalCount > 20 ? 20 : data.allHRmanagerJob.totalCount;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mjobs__WEBPACK_IMPORTED_MODULE_3__["default"], {
          numHRopenings: numOpenings,
          hrData: data.allHRmanagerJob.edges
        });
      }
    },
    data: _public_static_d_478700288_json__WEBPACK_IMPORTED_MODULE_0__
  });
});

/***/ }),

/***/ "./src/components/jobs/mjobs.js":
/*!**************************************!*\
  !*** ./src/components/jobs/mjobs.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_332715481_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/static/d/332715481.json */ "./public/static/d/332715481.json");
var _public_static_d_332715481_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/d/332715481.json */ "./public/static/d/332715481.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _job__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job */ "./src/components/jobs/job.js");




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var numHRopenings = _ref.numHRopenings,
      hrData = _ref.hrData;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"], {
    query: "332715481",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sb1-joblist"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "ffe-h3"
      }, data.allMarkdownRemark.totalCount + numHRopenings, " ledige stillinger - vil du v\xE6re med p\xE5 laget?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sb1-joblist__list"
      }, hrData.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: post.node.id,
          path: post.node.AdvertisementUrl,
          title: post.node.Name,
          desc: post.node.ShortDescription,
          target: "_blank"
        });
      }), data.allMarkdownRemark.edges.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_job__WEBPACK_IMPORTED_MODULE_3__["default"], {
          id: post.node.id,
          path: post.node.frontmatter.path,
          title: post.node.frontmatter.title,
          desc: post.node.frontmatter.description,
          target: "_top"
        });
      })));
    },
    data: _public_static_d_332715481_json__WEBPACK_IMPORTED_MODULE_0__
  });
});

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json");
var _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/755544856.json */ "./public/static/d/755544856.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.less */ "./src/components/layout.less");
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_less__WEBPACK_IMPORTED_MODULE_4__);






var Layout = function Layout(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "755544856",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "sb1-layout"
      }, children));
    },
    data: _public_static_d_755544856_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/layout.less":
/*!************************************!*\
  !*** ./src/components/layout.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// empty (null-loader)

/***/ }),

/***/ "./src/components/medium.js":
/*!**********************************!*\
  !*** ./src/components/medium.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_3208260626_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/3208260626.json */ "./public/static/d/3208260626.json");
var _public_static_d_3208260626_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/3208260626.json */ "./public/static/d/3208260626.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _components_mediumarticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/mediumarticles */ "./src/components/mediumarticles.js");






var Medium = function Medium(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["StaticQuery"], {
    query: "3208260626",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_mediumarticles__WEBPACK_IMPORTED_MODULE_4__["default"], {
        posts: data.allMediumPost
      }));
    },
    data: _public_static_d_3208260626_json__WEBPACK_IMPORTED_MODULE_0__
  });
};

Medium.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Medium);

/***/ }),

/***/ "./src/components/mediumarticles.js":
/*!******************************************!*\
  !*** ./src/components/mediumarticles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sb1_ffe_cards_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sb1/ffe-cards-react */ "./node_modules/@sb1/ffe-cards-react/es/index.js");






function next(e) {
  var elem = document.querySelector('.sb1-mediumfeed--visible');
  var elemIdSplit = elem.getAttribute('id').split('-');
  var elemId = parseInt(elemIdSplit[1]);
  var elemPrefix = '#' + elemIdSplit[0] + '-';

  if (elemId < 11) {
    var nextElemId = parseInt(elemId + 1);
    var nextElem = document.querySelector(elemPrefix + nextElemId);
    var track = document.querySelector('.sb1-mediumfeed .sb1-somefeed__track-inner');
    track.classList.remove('sb1-somefeed__track-inner--' + elemId);
    track.classList.add('sb1-somefeed__track-inner--' + nextElemId);
    elem.classList.remove('sb1-mediumfeed--visible');
    nextElem.classList.add('sb1-mediumfeed--visible');
  }
}

function prev(e) {
  var elem = document.querySelector('.sb1-mediumfeed--visible');
  var elemIdSplit = elem.getAttribute('id').split('-');
  var elemId = parseInt(elemIdSplit[1]);
  var elemPrefix = '#' + elemIdSplit[0] + '-';

  if (elemId > 0) {
    var nextElemId = parseInt(elemId - 1);
    var nextElem = document.querySelector(elemPrefix + nextElemId);
    var track = document.querySelector('.sb1-mediumfeed .sb1-somefeed__track-inner');
    track.classList.remove('sb1-somefeed__track-inner--' + elemId);
    track.classList.add('sb1-somefeed__track-inner--' + nextElemId);
    elem.classList.remove('sb1-mediumfeed--visible');
    nextElem.classList.add('sb1-mediumfeed--visible');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var posts = _ref.posts;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sb1-mediumfeed sb1-somefeed"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "ffe-h3"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://medium.com/sparebank1-digital",
    className: "ffe-link-text ffe-link-text--no-underline",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "@sparebank1-digital"), " p\xE5 Medium"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sb1-somefeed__track"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sb1-somefeed__track-inner"
  }, posts.edges.map(function (item, index) {
    var active = index === 0;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: item.node.id,
      id: 'med-' + index,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('sb1-mediumfeed__article', {
        'sb1-mediumfeed--visible': active
      })
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_sb1_ffe_cards_react__WEBPACK_IMPORTED_MODULE_4__["ImageCard"], {
      element: "a",
      href: "https://medium.com/sparebank1-digital/" + item.node.uniqueSlug,
      image: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        src: "https://cdn-images-1.medium.com/max/500/" + item.node.virtuals.previewImage.imageId,
        alt: ""
      })
    }, function (_ref2) {
      var Title = _ref2.Title,
          Subtext = _ref2.Subtext,
          Text = _ref2.Text;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title, null, item.node.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Text, null, item.node.virtuals.subtitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Subtext, null, "Av ", item.node.author.name));
    })));
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "sb1-somefeed__controls"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: prev,
    className: "ffe-inline-button ffe-inline-button--tertiary"
  }, "Forrige"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: next,
    className: "ffe-inline-button ffe-inline-button--tertiary"
  }, "Neste")));
});

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/d/1025518380.json */ "./public/static/d/1025518380.json");
var _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/d/1025518380.json */ "./public/static/d/1025518380.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");






function SEO(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta,
      keywords = _ref.keywords,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_4__["StaticQuery"], {
    query: detailsQuery,
    render: function render(data) {
      var metaDescription = description || data.site.siteMetadata.description;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, {
        htmlAttributes: {
          lang: lang
        },
        title: title,
        titleTemplate: "%s | " + data.site.siteMetadata.title,
        meta: [{
          name: "description",
          content: metaDescription
        }, {
          property: "og:title",
          content: title
        }, {
          property: "og:description",
          content: metaDescription
        }, {
          property: "og:type",
          content: "website"
        }, {
          name: "twitter:card",
          content: "summary"
        }, {
          name: "twitter:creator",
          content: data.site.siteMetadata.author
        }, {
          name: "twitter:title",
          content: title
        }, {
          name: "twitter:description",
          content: metaDescription
        }].concat(keywords.length > 0 ? {
          name: "keywords",
          content: keywords.join(", ")
        } : []).concat(meta)
      });
    },
    data: _public_static_d_1025518380_json__WEBPACK_IMPORTED_MODULE_0__
  });
}

SEO.defaultProps = {
  lang: "no",
  meta: [],
  keywords: []
};
SEO.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  lang: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  keywords: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SEO);
var detailsQuery = "1025518380";

/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_sb1_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/sb1-icon.png */ "./src/images/sb1-icon.png");
/* harmony import */ var _images_sb1_icon_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_sb1_icon_png__WEBPACK_IMPORTED_MODULE_3__);





var HTML =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(HTML, _React$Component);

  function HTML() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HTML.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", this.props.htmlAttributes, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      charSet: "utf-8"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }), this.props.headComponents, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
      rel: "shortcut icon",
      type: "image/png",
      href: _images_sb1_icon_png__WEBPACK_IMPORTED_MODULE_3___default.a
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", this.props.bodyAttributes, this.props.preBodyComponents, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: "body",
      id: "___gatsby",
      dangerouslySetInnerHTML: {
        __html: this.props.body
      }
    }), this.props.postBodyComponents));
  };

  return HTML;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};

/***/ }),

/***/ "./src/images/sb1-icon.png":
/*!*********************************!*\
  !*** ./src/images/sb1-icon.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEpklEQVRYR8WYa2gcVRSAv7sx26StmV3TarSNtaE22moqWjX4Q63YUlooSUFEEIxFQf9VCgEJCLa2tLXSIuZf8IEQ8sdEQRQfkSRiHm1oKFTbGCuxatMlDdlHYrJ1syN3ZrfO7s7s3NlN9PxZmDmPb8+955x7R1CgXIKNC/AssMUHt5dAeTnE/XBdgA785oNuP/SUw+UCwyC8GPZDeSkcj0LTHKx0svUDywANWA2sgFHgOwGfV8CXqT+gFFoJcAyWhaF9ChoS4FPybFGSoHemgHU454NXNBhU8eMKeBpejcCpOMjEFCWVwN3ATeYW+MAHzRUwlc9pXsAf4ONpeL4oqixjufSbgeXm82s+eKkCPnOKYQuog68PhmKwdTHh0r5KgPvJ2MQtAThiF8sWsA9OR+HhpYBL+5T75UFzudPyegCOZsfMAeyDjqjZPjxLoL6ekrKyDLv5iQlmR2UR58otwKZ/H+s67A3Cp1bNDMAB2DsFn3glW71zJ7WHDqFtzd0ReiLBV8EgCzMztm63ADen3ugQA+qCMJ5WvgE4DKXTEIubLUxJVu3YwT2HD9uCWR18U1XF9VDI1mcAuM/yRofeIDyZAzgEXZPQoEK2avt2ag8eRC6piuQDlPaPkNnDdGhML7WRwXOwYgJiCdwny/r9+9l08qQK1w0dN8D1wJpMj+MabBCwYACegfdD8KJK1HtPnKDmwAEVVWXA21IN3OrUB00V8JEB2A0zc8bIdJelAAymmndW9C8CsFv8AtUXPZw2lgJQVrGs5iz5W4OgGIFjf0Kze+5Mjep9+6hrawPhOsaVl9ghg3JgN4oBGJyCR1UBs/WE38+ueDyvuVuR3ApstPdwVHwPv0dg7f8JeBeOAJ2iB8Iz5tmyIFmMDNYBFfbRB0U3zM1B5gD1gFosoDwsyP1lt6N1OC++hfl5D+NtsffgHUCNQ0J0+En0QiTmmGH3VBabQXm8yLN8g7JI/ojkTBp3sLRGMYDVwLr8oTrFEPROwuPqSJmahQLKsfWAw96zRDgizsKbV+CN/xJQFoaEU6jMZ8SPUHUZJhYKJPSaQVmt8vyn0tcEVBrVPQbDo/BQIYxeAGUweaOTh1QFGQjAYwZgFF64Ch/+rGBVaJtJhELUAvJurCgvB6DNANShNAxj07DuIpBU9CDVVDI4WFVFTSikfpeAaxqsEeZ3HlOm5ckBOmeBX4GIImQ+wNkLF4i2tLC8q0vRm6mmw2tBOGUkwGo5DT0CnpDP5B3sCjBpGjiKHWCsv5/Z1lbKOzog6WU9jDBnNKgXqYXMAIzAhiSMCMulX1a3zGY49SszbJVSv59t4+PER0bQh4ehvZ2kwz3YLY06zJTBZuvnupwZHYU9SfPyrH4idYus9l73QWP2dxpbiLB5wj6m5nfRtJoD8Ha2N8cshaEFeGvRwud35O3jkaWyGwS0eWtfnv5SXECTBh1OVq77LAqVSTiOeW921feAd0nAc5pxLc/TJVQdRqBeh/cocCRa4lwF3tHgXdmI3eJ7yogOIga7k7ALeAqM6aUkOvQJaNWgU0BCyajYJfsL1sbhaWCbzdlTts5xH5wtga9XgsycZ/kHjIV44opTGU0AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");




var NotFoundPage = function NotFoundPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "404: Not found"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "NOT FOUND"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You just hit a route that doesn't exist... the sadness."));
};

/* harmony default export */ __webpack_exports__["default"] = (NotFoundPage);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sb1/ffe-grid-react */ "./node_modules/@sb1/ffe-grid-react/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_instagram__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/instagram */ "./src/components/instagram.js");
/* harmony import */ var _components_medium__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/medium */ "./src/components/medium.js");
/* harmony import */ var _components_jobs_jobs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/jobs/jobs */ "./src/components/jobs/jobs.js");








 // import Img from "gatsby-image"

var IndexPage = function IndexPage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Vi s\xF8ker nye medarbeidere",
    keywords: ["sparebank 1", "utvikling", "react", "frontend", "backend", "design", "UX", "IxD"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-hero"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-hero__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-hero__preamble"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "ffe-h2"
  }, "Et spennende sted \xE5 jobbe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-body-text"
  }, "Vi er de 14 SpareBank 1-bankenes felles utviklingsselskap. V\xE5r oppgave er \xE5 skape de aller beste l\xF8sningene og brukeropplevelsene i bransjen \u2013 fordi hverdags\xF8konomien er viktig for folk. Vi lykkes ved \xE5 la kompetanse, l\xE6ring og frihet definere oss, og fordi vi jobber kompromissl\xF8st data- og kundedrevet.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridRow"], {
    topPadding: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 10,
      offset: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["InlineGrid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 6
    },
    lg: {
      cols: 3
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "sb1-frontpage-link",
    to: "/fagdag/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-frontpage-link__circle sb1-frontpage-link__circle--fagdag"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "ffe-h3"
  }, "Fagdag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-small-text"
  }, "Individuell faglig utvikling og felles kompetanseheving."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 6
    },
    lg: {
      cols: 3
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "sb1-frontpage-link",
    to: "/fagforum/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-frontpage-link__circle sb1-frontpage-link__circle--fagforum"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "ffe-h3"
  }, "Fagforum"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-small-text"
  }, "Arena for kompetansedeling og erfaringsutveksling."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 6
    },
    lg: {
      cols: 3
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "sb1-frontpage-link",
    to: "/hackathon/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-frontpage-link__circle sb1-frontpage-link__circle--hackathon"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "ffe-h3"
  }, "Hackathon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-small-text"
  }, "Dedikert tid til \xE5 jobbe med ideer vi tror p\xE5 og brenner for."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 6
    },
    lg: {
      cols: 3
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "sb1-frontpage-link",
    to: "/designsystem/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-frontpage-link__circle sb1-frontpage-link__circle--designsystem"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "ffe-h3"
  }, "Designsystem"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-small-text"
  }, "Felles spr\xE5k og delte ressurser for design og utvikling.")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridRow"], {
    topPadding: true,
    background: "blue-pale"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 10,
      offset: 1
    },
    center: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_jobs_jobs__WEBPACK_IMPORTED_MODULE_8__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridRow"], {
    reverse: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-vids__preamble"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "ffe-h3"
  }, "Et godt sted \xE5 v\xE6re"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-body-text"
  }, "For \xE5 kunne yte p\xE5 jobb, m\xE5 vi trives p\xE5 jobb. V\xE5re medarbeidere f\xE5r derfor stor tillit og mye ansvar, men ogs\xE5 den st\xF8tten, veiledningen og oppl\xE6ringen de trenger for \xE5 mestre og like jobben sin. Dessuten passer vi p\xE5 \xE5 le sammen. Mye. Det blir nemlig veldig gode l\xF8sninger av god stemning.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 6
    },
    lg: {
      cols: 5,
      offset: 1
    },
    center: true,
    bottomPadding: false
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-video"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    width: "100%",
    height: "315",
    title: "Utvikler i SpareBank 1",
    src: "https://www.youtube.com/embed/Zs3quTUlzj8",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 6
    },
    lg: {
      cols: 5
    },
    center: true,
    bottomPadding: false
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-video"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    width: "100%",
    height: "315",
    title: "Teamleder i SpareBank 1",
    src: "https://www.youtube.com/embed/afoKcCZuRes",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridRow"], {
    topPadding: true,
    background: "grey-warm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 10,
      offset: 1
    },
    center: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_medium__WEBPACK_IMPORTED_MODULE_7__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    topPadding: false
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridRow"], {
    topPadding: true,
    background: "grey-warm"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_2__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 10,
      offset: 1
    },
    center: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_instagram__WEBPACK_IMPORTED_MODULE_6__["default"], null)))));
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);
var pageQuery = "864832547";

/***/ }),

/***/ "./src/templates/genericTemplate.js":
/*!******************************************!*\
  !*** ./src/templates/genericTemplate.js ***!
  \******************************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");



function Template(_ref) {
  var data = _ref.data;
  var markdownRemark = data.markdownRemark; // data.markdownRemark holds our post data

  var frontmatter = markdownRemark.frontmatter,
      html = markdownRemark.html;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: frontmatter.title,
    keywords: ["sparebank 1", "karriere", "stilling", "utvikling", "design"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, frontmatter.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, frontmatter.rolle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }))));
}
var pageQuery = "2129077578";

/***/ }),

/***/ "./src/templates/openingTemplate.js":
/*!******************************************!*\
  !*** ./src/templates/openingTemplate.js ***!
  \******************************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sb1/ffe-grid-react */ "./node_modules/@sb1/ffe-grid-react/es/index.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");





function Template(_ref) {
  var data = _ref.data;
  var markdownRemark = data.markdownRemark; // data.markdownRemark holds our post data

  var frontmatter = markdownRemark.frontmatter,
      html = markdownRemark.html;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    opening: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: frontmatter.title,
    keywords: ["sparebank 1", "karriere", "stilling", "utvikling", "design"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-hero sb1-hero--opening"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-hero__inner"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    className: "sb1-opening__header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_3__["GridRow"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_3__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 10,
      offset: 1
    },
    lg: {
      cols: 8,
      offset: 2
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "ffe-h1"
  }, frontmatter.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ffe-lead-paragraph"
  }, frontmatter.description)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sb1-markdown"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_3__["GridRow"], {
    background: "grey-warm",
    topPadding: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_3__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 10,
      offset: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: html
    }
  }))))));
}
var pageQuery = "1331255806";

/***/ }),

/***/ "./src/templates/pageTemplate.js":
/*!***************************************!*\
  !*** ./src/templates/pageTemplate.js ***!
  \***************************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Template; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.string.fixed */ "core-js/modules/es6.string.fixed");
/* harmony import */ var core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_fixed__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/header */ "./src/components/header.js");
/* harmony import */ var _sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sb1/ffe-grid-react */ "./node_modules/@sb1/ffe-grid-react/es/index.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");






function Template(_ref) {
  var data = _ref.data;
  var markdownRemark = data.markdownRemark; // data.markdownRemark holds our post data

  var frontmatter = markdownRemark.frontmatter,
      html = markdownRemark.html;
  console.log(frontmatter.image);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: frontmatter.title,
    keywords: ["sparebank 1", "karriere", "stilling", "utvikling", "design"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "sb1-markdown-page"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    className: "sb1-markdown-page__header"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_4__["GridRow"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_4__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 6
    },
    lg: {
      cols: 6,
      offset: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "ffe-h1"
  }, frontmatter.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ffe-lead-paragraph"
  }, frontmatter.description)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_4__["GridRow"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_4__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 8
    },
    lg: {
      cols: 6,
      offset: 1
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "content sb1-markdown",
    dangerouslySetInnerHTML: {
      __html: html
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_sb1_ffe_grid_react__WEBPACK_IMPORTED_MODULE_4__["GridCol"], {
    sm: {
      cols: 12
    },
    md: {
      cols: 4
    },
    lg: {
      cols: 4
    },
    end: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: frontmatter.image.childImageSharp.fixed.src,
    alt: frontmatter.title,
    className: "sb1-markdown-page__image"
  }))))));
}
var pageQuery = "3910965894";

/***/ }),

/***/ "@reach/router":
/*!********************************!*\
  !*** external "@reach/router" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_iterator__;

/***/ }),

/***/ "core-js/modules/es6.array.sort":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.sort" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_array_sort__;

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_function_name__;

/***/ }),

/***/ "core-js/modules/es6.map":
/*!******************************************!*\
  !*** external "core-js/modules/es6.map" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_map__;

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_assign__;

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_object_to_string__;

/***/ }),

/***/ "core-js/modules/es6.regexp.constructor":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.regexp.constructor" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_split__;

/***/ }),

/***/ "core-js/modules/es6.regexp.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.regexp.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es6.string.ends-with":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.string.ends-with" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es6.string.fixed":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.string.fixed" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_fixed__;

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es6_string_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_iterable__;

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_crypto__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "minimatch":
/*!****************************!*\
  !*** external "minimatch" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_minimatch__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map