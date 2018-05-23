define(["./dylan-app.js"],function(_dylanApp){"use strict";function _templateObject_830889805e8b11e8a6de59b35b3128aa(){var data=babelHelpers.taggedTemplateLiteral(["\n            <style>\n                :host {\n                display: block;\n                }\n            </style>\n\n            <iron-ajax\n                auto\n                handle-as=\"json\"\n                url=\"[[rootPath]]data/elements_developer.json\"\n                last-response=\"{{elementsDeveloper}}\"></iron-ajax>\n\n            <iron-list items=\"[[elementsDeveloper]]\" as=\"item\" grid>\n                <template>\n                    <div>\n                        <element-card\n                        element-category=\"[[item.element_category]]\"\n                        element-name=\"[[item.element_name]]\"\n                        element-symbol=\"[[item.element_symbol]]\"\n                        element-color=\"[[item.element_color]]\"\n                        element-link=\"[[item.element_link]]\"\n                        element-lead=\"[[item.element_lead]]\"></element-card>\n                    </div>\n                </template>\n            </iron-list>\n        "]);_templateObject_830889805e8b11e8a6de59b35b3128aa=function(){return data};return data}var DylanDeveloper=function(_PolymerElement){babelHelpers.inherits(DylanDeveloper,_PolymerElement);function DylanDeveloper(){babelHelpers.classCallCheck(this,DylanDeveloper);return babelHelpers.possibleConstructorReturn(this,(DylanDeveloper.__proto__||Object.getPrototypeOf(DylanDeveloper)).apply(this,arguments))}babelHelpers.createClass(DylanDeveloper,null,[{key:"template",get:function get(){return(0,_dylanApp.html)(_templateObject_830889805e8b11e8a6de59b35b3128aa())}},{key:"properties",get:function get(){return{elementsDeveloper:Object,rootPath:String}}}]);return DylanDeveloper}(_dylanApp.PolymerElement);window.customElements.define("dylan-developer",DylanDeveloper)});