!function(e){function r(r){for(var n,l,i=r[0],u=r[1],s=r[2],p=0,d=[];p<i.length;p++)l=i[p],o[l]&&d.push(o[l][0]),o[l]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(c&&c(r);d.length;)d.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,r=0;r<a.length;r++){for(var t=a[r],n=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(n=!1)}n&&(a.splice(r--,1),e=l(l.s=t[0]))}return e}var n={},o={0:0},a=[];function l(r){if(n[r])return n[r].exports;var t=n[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=n,l.d=function(e,r,t){l.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,r){if(1&r&&(e=l(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)l.d(t,n,function(r){return e[r]}.bind(null,n));return t},l.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(r,"a",r),r},l.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},l.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=r,i=i.slice();for(var s=0;s<i.length;s++)r(i[s]);var c=u;a.push([4,1]),t()}([,,,,function(e,r,t){"use strict";var n=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),o=t(0),a=s(o),l=s(t(6)),i=s(t(11)),u=s(t(12));function s(e){return e&&e.__esModule?e:{default:e}}t(16);var c=function(e){function r(e){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={selectdFilter:"all",filterList:[{value:"all",label:"所有项目组"},{value:"locked",label:"锁定"},{value:"private",label:"私密"}],groupList:[{groupName:"墨刀实验室",groupColor:"#66bb6a",projectCount:3,isLocked:!1,isPrivate:!1},{groupName:"墨刀魔法棒团队",groupColor:"#ffc107",projectCount:0,isLocked:!1,isPrivate:!1},{groupName:"超级工作组",groupColor:"#ff6333",projectCount:4,isLocked:!1,isPrivate:!0},{groupName:"冷笑客服组",groupColor:"#f44336",projectCount:4,isLocked:!1,isPrivate:!1},{groupName:"设计部门",groupColor:"#ffc107",projectCount:4,isLocked:!1,isPrivate:!1},{groupName:"Third Reactor",groupColor:"#00b0ff",projectCount:1,isLocked:!0,isPrivate:!0}]},t.changeFilter=t.changeFilter.bind(t),t}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(r,o.Component),n(r,[{key:"render",value:function(){var e=this.state,r=e.filterList,t=e.selectdFilter,n=e.groupList;return a.default.createElement(a.default.Fragment,null,a.default.createElement("header",null,a.default.createElement(i.default,{list:r,value:t,onChange:this.changeFilter})),a.default.createElement("article",null,a.default.createElement(u.default,{list:n,filter:t,onBuildClick:this.buildNewGroup})))}}]),n(r,[{key:"changeFilter",value:function(e){this.setState({selectdFilter:e.target.value})}},{key:"buildNewGroup",value:function(){alert("click")}}]),r}();l.default.render(a.default.createElement(c,null),document.getElementById("root"))},,,,,,,function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=t(0),a=(n=o)&&n.__esModule?n:{default:n};r.default=function(e){var r=e.onChange,t=e.list,n=e.value;return a.default.createElement("select",{onChange:r,value:n},t.map(function(e){var r=e.value,t=e.label;return a.default.createElement("option",{key:r,value:r},t)}))}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=t(0),a=(n=o)&&n.__esModule?n:{default:n};t(13);r.default=function(e){var r=e.filter,t=e.list,n=void 0===t?[]:t,o=e.onBuildClick,l=n.filter(function(e){var t=e.isLocked,n=e.isPrivate;switch(r){case"all":return!0;case"locked":return t;case"private":return n}}).map(function(e){var r=e.groupName,t=e.groupColor,n=e.isLocked,o=e.isPrivate,l=e.projectCount;return a.default.createElement("li",{key:r,className:"group-list-item "+(n?"locked":"")},a.default.createElement("article",{className:"group-list-main"},a.default.createElement("div",{className:"group-color-container"},a.default.createElement("div",{className:"group-color",style:{backgroundColor:t}})),a.default.createElement("header",{className:"group-detail"},a.default.createElement("h5",{className:"group-detail-name"},r),a.default.createElement("div",{className:"group-detail-status"},n&&a.default.createElement("div",{className:"group-detail-status-tag"},"锁定"),o&&a.default.createElement("div",{className:"group-detail-status-tag"},"私密")," "),a.default.createElement("div",{className:"group-detail-count"},a.default.createElement("strong",{className:"group-detail-count-num"},l),"项目"))))});return l.push(a.default.createElement("li",{key:"",className:"group-list-item"},a.default.createElement("article",{className:"align-wrapper",onClick:o},a.default.createElement("div",{className:"build-group-button"},"新建项目组")))),a.default.createElement("ul",{className:"group-list-ul"},l)}},function(e,r,t){var n=t(14);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(n,o);n.locals&&(e.exports=n.locals)},function(e,r,t){(e.exports=t(2)(!1)).push([e.i,".group-list-ul {\r\n    margin: 20px 0;\r\n    padding: 0;\r\n    display: grid;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    grid-column-gap: 30px;\r\n}\r\n\r\n.group-list-item {\r\n    border: 2px solid #fff;\r\n    box-sizing: border-box;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: none;\r\n    transition: box-shadow 0.5s linear;\r\n    padding: 20px;\r\n    margin: 20px 0;\r\n}\r\n\r\n.group-list-item:hover {\r\n    box-shadow: 0px 5px 5px #ccc;\r\n}\r\n\r\n.group-list-item.locked {\r\n    border: 2px solid rgba(180, 180, 180, 0.8);\r\n}\r\n\r\n@media screen and (max-width: 376px) {\r\n    .group-list-ul {\r\n        grid-template-columns: 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 376px) and (max-width: 769px) {\r\n    .group-list-ul {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 769px) and (max-width: 1200px) {\r\n    .group-list-ul {\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n}\r\n\r\n.group-list-main {\r\n    display: flex;\r\n}\r\n\r\n.group-color {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.group-detail {\r\n    margin-left: 15px;\r\n}\r\n\r\n.group-detail-name {\r\n    margin: 5px 0;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    font-size: 16px;\r\n}\r\n\r\n.group-detail-status {\r\n    margin: 5px 0;\r\n    display: flex;\r\n    align-items: center;\r\n    height: 20px;\r\n}\r\n\r\n.group-detail-status-tag {\r\n    font-size: 12px;\r\n    color: rgba(120, 120, 120, 0.6);\r\n    padding: 2px;\r\n    border: solid 1px rgba(180, 180, 180, 0.5);\r\n    margin-right: 5px;\r\n}\r\n\r\n.group-detail-count {\r\n    font-size: 12px;\r\n    color: rgba(120, 120, 120, 0.6);\r\n    height: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n    margin: 10px 0 5px 0;\r\n}\r\n\r\n.group-detail-count-num {\r\n    color: rgba(0, 0, 0, 0.5);\r\n    font-size: 16px;\r\n    vertical-align: middle;\r\n    padding-right: 5px;\r\n}\r\n\r\n.align-wrapper {\r\n    position: relative;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.build-group-button {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 24px;\r\n}",""])},,function(e,r,t){var n=t(17);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(3)(n,o);n.locals&&(e.exports=n.locals)},function(e,r,t){(e.exports=t(2)(!1)).push([e.i,"body {\r\n    background: #eee;\r\n    padding: 10px;\r\n}\r\n\r\nul {\r\n    list-style: none;\r\n}",""])}]);