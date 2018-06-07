!function(){"use strict";function s(t,e){for(var n=[],o=[],r=arguments.length,i=Array(2<r?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];for(var u=i.length,l=void 0;0<u--;)n.push(i[u]);for(e&&e.key&&(l=e.key,delete e.key);n.length;){var a=n.pop();if(a&&a.pop)for(u=a.length;u--;)n.push(a[u]);else null!=a&&!0!==a&&!1!==a&&o.push(a)}return"function"==typeof t?t(e||{},o):{type:t,props:e||{},children:o,key:l}}var b=function(t){return t?t.key:null};function g(t,e){var n={};for(var o in t)n[o]=t[o];for(var r in e)n[r]=e[r];return n}function k(t,e,n,o,r){var i,s,u,l,a;"key"!==e&&"onComponentDidMount"!==e&&"onComponentDidUpdate"!==e&&"onComponentWillUnmount"!==e&&("style"===e&&"string"!=typeof n?function(t,e,n,o){for(var r in g(o,n)){var i=null==n||null==n[r]?"":n[r];"-"===r[0]?t[e].setProperty(r,i):t[e][r]=i}}(t,e,n,o):(e=e.toLowerCase(),"classname"===(a=e)&&(a="class"),u=t,l=n,"dangerouslysetinnerhtml"===(e=a)&&(u.innerHTML=l),e in t&&"list"!==e&&!r?t[e]="no"==n?"":n:null!=n&&"null"!==n&&"false"!==n&&"no"!==n&&"off"!==n&&("xlink-href"===e?(s=n,(i=t).setAttributeNS("http://www.w3.org/1999/xlink","href",s),i.setAttribute("href",s)):("true"===n&&(n=""),"dangerouslysetinnerhtml"!==e&&t.setAttribute(e,n))),null!=n&&"null"!==n&&"undefined"!==n&&"false"!==n&&"no"!==n&&"off"!==n||t.removeAttribute(e)))}var S=function(t,e,n){t.removeChild(function t(e,n){if(n.props)for(var o=0;o<n.children.length;o++)t(e.childNodes[o],n.children[o]);return e}(e,n)),n&&n.props&&n.props.onComponentDidUnmount&&n.props.onComponentDidUnmount.call(n.props.onComponentDidUnmount,t)};function U(t,e,n,o,r){if(o!==n){if(null==n||n.type!==o.type){var i=function t(e,n){var o=void 0;"number"==typeof e&&(e=e.toString()),o="string"==typeof e?document.createTextNode(e):(n=n||"svg"===e.type)?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type);var r=e.props;if(r){for(var i=0;i<e.children.length;i++)o.appendChild(t(e.children[i],n));for(var s in r)k(o,s,r[s],null,n)}return o}(o,r);t&&(t.insertBefore(i,e),null!=n&&S(t,e,n)),e=i}else if(null==n.type)e.nodeValue=o;else{!function(t,e,n,o){for(var r in g(e,n))n[r]!==("value"===r||"checked"===r?t[r]:e[r])&&k(t,r,n[r],e[r],o);t.mounted&&n&&n.onComponentDidUpdate&&n.onComponentDidUpdate.call(n.onComponentDidUpdate,e,n,t)}(e,n.props,o.props,r=r||"svg"===o.type);for(var s={},u={},l=[],a=n.children,c=o.children,p=0;p<a.length;p++){l[p]=e.childNodes[p];var h=b(a[p]);null!=h&&(s[h]=[l[p],a[p]])}for(var f=0,d=0;d<c.length;){var m=b(a[f]),v=b(c[d]);if(u[m])f++;else if(null==v||v!==b(a[f+1]))if(null==v)null==m&&(U(e,l[f],a[f],c[d],r),d++),f++;else{var y=s[v]||[];m===v?(U(e,y[0],y[1],c[d],r),f++):y[0]?U(e,e.insertBefore(y[0],l[f]),y[1],c[d],r):U(e,l[f],null,c[d],r),u[v]=c[d],d++}else null==m&&S(e,l[f],a[f]),f++}for(;f<a.length;)null==b(a[f])&&S(e,l[f],a[f]),f++;for(var w in s)u[w]||S(e,s[w][0],s[w][1])}return e}}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=(function(){function a(t){this.value=t}function t(r){var i,s;function u(t,e){try{var n=r[t](e),o=n.value;o instanceof a?Promise.resolve(o.value).then(function(t){u("next",t)},function(t){u("throw",t)}):l(n.done?"return":"normal",n.value)}catch(t){l("throw",t)}}function l(t,e){switch(t){case"return":i.resolve({value:e,done:!0});break;case"throw":i.reject(e);break;default:i.resolve({value:e,done:!1})}(i=i.next)?u(i.key,i.arg):s=null}this._invoke=function(o,r){return new Promise(function(t,e){var n={key:o,arg:r,resolve:t,reject:e,next:null};s?s=s.next=n:(i=s=n,u(o,r))})},"function"!=typeof r.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(t){return this._invoke("next",t)},t.prototype.throw=function(t){return this._invoke("throw",t)},t.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),r=function(){function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}}(),u=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var s,u=t[Symbol.iterator]();!(o=(s=u.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&u.return&&u.return()}finally{if(r)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=window&&window.requestAnimationFrame||window&&window.msRequestAnimationFrame||function(t){return setTimeout(t,16)};function i(t){return!Array.isArray(t)&&"object"===(void 0===t?"undefined":e(t))}var l=(new Date).getTime(),a=function(){function e(t){o(this,e),t||(t={}),this.props=t,this.selector=t.container||"body",t.render&&(this.render=t.render),t.state&&(this.state=t.state),this.selector&&(this.container=document.querySelector(this.selector)),this.componentShouldUpdate=!0,this.mounted=!1,this.element,t.componentWillMount&&(this.componentWillMount=t.componentWillMount),t.componentDidMount&&(this.componentDidMount=t.componentDidMount),t.componentWillUpdate&&(this.componentWillUpdate=t.componentWillUpdate),t.componentDidUpdate&&(this.componentDidUpdate=t.componentDidUpdate),t.componentWillUnmount&&(this.componentWillUnmount=t.componentWillUnmount)}return r(e,[{key:"componentWillMount",value:function(t){return t}},{key:"componentDidMount",value:function(t){return t}},{key:"componentWillUpdate",value:function(t){return t}},{key:"componentDidUpdate",value:function(t){return t}},{key:"componentWillUnmount",value:function(t){return t}},{key:"render",value:function(t){return t}},{key:"setState",value:function(t){if("function"==typeof t){var e=t.call(this,this.state);e&&(this.state=e)}else if(i(this.state)&&i(t)){var n=this.state;this.state=g(n,t)}else this.state=t}},{key:"update",value:function(t){if(this.render&&(this.componentShouldUpdate||!this.mounted)){var e=this.state;!0!==t&&t&&(e=t),this.container&&"string"==typeof this.container&&(this.selector=this.container,this.container=document.querySelector(this.container));var n=this.render(e),o=void 0;n&&n.props&&n.props.id&&this.container&&(o=this.container&&this.container.querySelector("#"+n.props.id)),o&&!this.mounted&&o.parentNode.removeChild(o);var r=this.element&&this.element.node;if(i=r,s=e,!(u=this)||JSON.stringify(i)!==JSON.stringify(u.render(s))){var i,s,u,l,a;if(this.element=(l=this.render(e),(a=this.element)?U(a.parentNode,a,a&&a.node,l):a=U(null,null,null,l),a.node=l,a),!this.mounted)return this.componentWillMount&&this.componentWillMount(this),this.container&&1===this.container.nodeType||console.error("The container for a class component is not a valid DOM node. Check the selector provided for the class to make sure it is a valid CSS selector and that the container exists in the DOM. You might be targeting a nonexistent node."),this.container.appendChild(this.element),this.mounted=!0,void(this.componentDidMount&&this.componentDidMount(this));this.componentWillUpdate&&this.componentWillUpdate(this),this.componentDidUpdate&&this.componentDidUpdate(this)}}}},{key:"unmount",value:function(){var e=this;if(this.element){for(var t in this.componentWillUnmount&&this.componentWillUnmount(this),["change","click","dblclick","input","keydown","keypress","keyup","mousedown","mouseleave","mouseout","mouseover","mouseup","pointercancel","pointerdown","pointermove","pointerup","select","submit","touchcancel","touchend","touchmove","touchstart"].map(function(t){e.element.removeEventListener(t,e)}),this.container.removeChild(this.element),this.container=void 0,this)delete this[t];delete this.state,this.update=void 0,this.unmount=void 0}}},{key:"state",get:function(){return this[l]},set:function(t){var e=this;this[l]=t,n(function(){return e.update()})}}]),e}(),t=new a({container:"header",render:function(t){return s("nav",null,s("h1",null,t))}});function c(t){return s("button",{class:"square "+(t.won?"won":""),onclick:t.onClick},t.value)}function p(n){function t(e){var t=void 0;n.winner&&(t=n.winner.map(function(t){return String(t)}).find(function(t){return t===String(e)}),console.log(t));return s(c,{value:n.squares[e],onClick:function(){return n.onClick(e)},won:t})}return s("div",null,s("div",{class:"board-row"},t(0),t(1),t(2)),s("div",{class:"board-row"},t(3),t(4),t(5)),s("div",{class:"board-row"},t(6),t(7),t(8)))}var h=function(t){function n(t){o(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,a),r(n,[{key:"handleClick",value:function(t){var e=this.state.history.slice(0,this.state.stepNumber+1),n=e[e.length-1].squares.slice();f(n)||n[t]||(n[t]=this.state.xIsNext?"X":"O",this.setState({history:e.concat([{squares:n}]),stepNumber:e.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(t){this.setState({stepNumber:t,xIsNext:t%2==0})}},{key:"render",value:function(){var n=this,t=this.state.history,e=t[this.state.stepNumber],o=f(e.squares),r=t.map(function(t,e){return s("li",{key:e},s("button",{class:"button-moves",onclick:function(){return n.jumpTo(e)}},e?"Go to move #"+e:"Go to game start"))}),i=void 0;return i=o?"Winner: "+o.who:"Next player: "+(this.state.xIsNext?"X":"O"),s("div",{class:"game"},s("div",{class:"game-board"},s(p,{squares:e.squares,onClick:function(t){return n.handleClick(t)},winner:o&&o.line})),s("div",{class:"game-info"},s("div",{class:/Winner/gim.test(i)?"winner":""},i),s("ol",null,r)))}}]),n}();function f(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var o=u(e[n],3),r=o[0],i=o[1],s=o[2];if(t[r]&&t[r]===t[i]&&t[r]===t[s])return{who:t[r],line:e[n]}}return null}t.state="Composi - Tic Tac Toe";var d=new h({container:"section"});window.game=d}();
//# sourceMappingURL=app.js.map
