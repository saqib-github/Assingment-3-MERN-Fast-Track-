(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(7),u=n.n(i),r=(n(12),n(4)),a=n(6),s=n(0);var j=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),j=u[0],l=u[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Assignment No.3 in React (Todo List)"}),Object(s.jsx)("input",{type:"todo",onChange:function(t){l(t.target.value)},value:j}),Object(s.jsx)("button",{onClick:function(){return function(){var t=[].concat(Object(r.a)(n),[{todo:j}]);o(t),l("")}()},children:" Add "}),Object(s.jsx)("ul",{children:n.map((function(t,e){return Object(s.jsxs)("li",{style:{textDecoration:t.isCompleted?"line-through":""},children:[t.todo,Object(s.jsx)("button",{onClick:function(){!function(t){var e=Object(r.a)(n);e[t].isCompleted=!0,o(e)}(e)},children:" Complete "}),Object(s.jsx)("button",{onClick:function(){!function(t){var e=Object(r.a)(n);e.splice(t,1),o(e)}(e)},children:" Delete "})]})}))})]})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,u=e.getTTFB;n(t),c(t),o(t),i(t),u(t)}))};u.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),l()}},[[14,1,2]]]);
//# sourceMappingURL=main.faeb5b94.chunk.js.map