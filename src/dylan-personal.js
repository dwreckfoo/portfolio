define(["./dylan-app.js"],function(_dylanApp){"use strict";function _templateObject_831840f05e8b11e8a6de59b35b3128aa(){var data=babelHelpers.taggedTemplateLiteral(["\n            <style>\n                :host {\n                display: block;\n                }\n            </style>\n\n            <iron-ajax\n                auto\n                handle-as=\"json\"\n                url=\"[[rootPath]]data/elements_personal.json\"\n                last-response=\"{{elementsPersonal}}\"></iron-ajax>\n\n            <iron-list items=\"[[elementsPersonal]]\" as=\"item\" grid>\n                <template>\n                    <div>\n                        <element-card\n                        element-category=\"[[item.element_category]]\"\n                        element-name=\"[[item.element_name]]\"\n                        element-symbol=\"[[item.element_symbol]]\"\n                        element-color=\"[[item.element_color]]\"\n                        element-link=\"[[item.element_link]]\"\n                        element-lead=\"[[item.element_lead]]\"></element-card>\n                    </div>\n                </template>\n            </iron-list>\n        "]);_templateObject_831840f05e8b11e8a6de59b35b3128aa=function(){return data};return data}var DylanPersonal=function(_PolymerElement){babelHelpers.inherits(DylanPersonal,_PolymerElement);function DylanPersonal(){babelHelpers.classCallCheck(this,DylanPersonal);return babelHelpers.possibleConstructorReturn(this,(DylanPersonal.__proto__||Object.getPrototypeOf(DylanPersonal)).apply(this,arguments))}babelHelpers.createClass(DylanPersonal,null,[{key:"template",get:function get(){return(0,_dylanApp.html)(_templateObject_831840f05e8b11e8a6de59b35b3128aa())}},{key:"properties",get:function get(){return{elementsPersonal:Object,rootPath:String}}}]);return DylanPersonal}(_dylanApp.PolymerElement);window.customElements.define("dylan-personal",DylanPersonal)});