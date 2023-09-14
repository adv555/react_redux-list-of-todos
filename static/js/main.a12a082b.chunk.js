(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var a,n=c(9),s=c.n(n),r=c(8),l=c(16),i=c(6),o=c(14),d=c(15);!function(e){e.SET="currentTodo/SET",e.REMOVE="currentTodo/REMOVE"}(a||(a={}));var u,j,b=function(e){return{type:a.SET,payload:e}},h=function(){return{type:a.REMOVE}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET:return t.payload;case a.REMOVE:return null;default:return e}},m=c(4);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(u||(u={})),function(e){e.SET_QUERY="filter/setQuery",e.REMOVE_QUERY="filter/removeQuery",e.SET_STATUS="filter/setStatus"}(j||(j={}));var f=function(e){return{type:j.SET_QUERY,payload:e}},x=function(){return{type:j.REMOVE_QUERY}},v=function(e){return{type:j.SET_STATUS,payload:e}},p={query:"",status:u.All},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.SET_QUERY:return Object(m.a)(Object(m.a)({},e),{},{query:t.payload});case j.REMOVE_QUERY:return Object(m.a)(Object(m.a)({},e),{},{query:""});case j.SET_STATUS:return Object(m.a)(Object(m.a)({},e),{},{status:t.payload});default:return e}},N=function(e){return{type:"todos/SET",payload:e}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?t.payload:e},E=Object(i.combineReducers)({currentTodo:O,filter:y,todos:g}),T=Object(i.createStore)(E,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),S=c(3),w=c(0);c(25),c(26);function R(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var _=c(17),k=r.b,C=r.c,A=c(10),U=c.n(A),M=c(1),Q=function(e){var t=e.todo,c=k(),a=C((function(e){return e})).currentTodo,n=(null===a||void 0===a?void 0:a.id)===t.id;return Object(M.jsxs)("tr",{"data-cy":"todo",className:U()({"has-background-info-light":n}),children:[Object(M.jsx)("td",{className:"is-vcentered",children:t.id}),t.completed?Object(M.jsx)("td",{className:"is-vcentered",children:Object(M.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(M.jsx)("i",{className:"fas fa-check"})})}):Object(M.jsx)("td",{className:"is-vcentered"}),Object(M.jsx)("td",{className:"is-vcentered is-expanded",children:Object(M.jsx)("p",{className:U()({"has-text-danger":!t.completed,"has-text-success":t.completed}),children:t.title})}),Object(M.jsx)("td",{className:"has-text-right is-vcentered",children:Object(M.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(b(t))},children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:U()("fas",{"fa-eye-slash":n,"fa-eye":!n})})})})})]})},V=function(){var e=function(e,t){var c=Object(_.a)(e),a=t.status,n=t.query;return n&&(c=c.filter((function(e){var t=n.toLowerCase().trim();return e.title.toLowerCase().includes(t)}))),a===u.Active&&(c=c.filter((function(e){return!1===e.completed}))),a===u.Completed&&(c=c.filter((function(e){return!0===e.completed}))),c}(C((function(e){return e})).todos,C((function(e){return e})).filter);return Object(M.jsxs)(M.Fragment,{children:[0===e.length&&Object(M.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),e.length>0&&Object(M.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(M.jsx)("thead",{children:Object(M.jsxs)("tr",{children:[Object(M.jsx)("th",{children:"#"}),Object(M.jsx)("th",{children:Object(M.jsx)("span",{className:"icon",children:Object(M.jsx)("i",{className:"fas fa-check"})})}),Object(M.jsx)("th",{children:"Title"}),Object(M.jsx)("th",{children:" "})]})}),Object(M.jsx)("tbody",{children:e.map((function(e){return Object(M.jsx)(Q,{todo:e},e.id)}))})]})]})},q=function(){var e=k(),t=C((function(e){return e})).filter;return Object(M.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(M.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t.query,onChange:function(t){var c=t.target.value;e(f(c))}}),Object(M.jsx)("span",{className:"icon is-left",children:Object(M.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.query&&Object(M.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(M.jsx)("button",{"data-cy":"clearSearchButton",type:"button","aria-label":"clear search",className:"delete",onClick:function(){e(x())}})})]})},Y=[{value:u.All,label:"All"},{value:u.Active,label:"Active"},{value:u.Completed,label:"Completed"}],L=function(){var e=k(),t=C((function(e){return e})).filter;return Object(M.jsx)("p",{className:"control",children:Object(M.jsx)("span",{className:"select",children:Object(M.jsx)("select",{"data-cy":"statusSelect",value:t.status,onChange:function(t){var c=t.target.value;e(v(c))},children:Y.map((function(e){var t=e.value,c=e.label;return Object(M.jsx)("option",{value:t,children:c},t)}))})})})},B=function(){return Object(M.jsxs)("form",{className:"field has-addons",children:[Object(M.jsx)(L,{}),Object(M.jsx)(q,{})]})},I=(c(28),function(){return Object(M.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(M.jsx)("div",{className:"Loader__content"})})}),D=function(){var e=k(),t=C((function(e){return e.currentTodo})),c=Object(w.useState)(!1),a=Object(S.a)(c,2),n=a[0],s=a[1],r=Object(w.useState)(null),l=Object(S.a)(r,2),i=l[0],o=l[1],d=Object(w.useState)(null),u=Object(S.a)(d,2),j=u[0],b=u[1];return Object(w.useEffect)((function(){var e;t&&(s(!0),o(null),(e=t.userId,R("/users/".concat(e))).then(b).catch(o).finally((function(){s(!1)})))}),[t]),Object(M.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(M.jsx)("div",{className:"modal-background"}),n?Object(M.jsx)(I,{}):Object(M.jsxs)("div",{className:"modal-card",children:[Object(M.jsxs)("header",{className:"modal-card-head",children:[Object(M.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(M.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close","aria-label":"close",onClick:function(){return e(h())}})]}),Object(M.jsxs)("div",{className:"modal-card-body",children:[Object(M.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(M.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(M.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(M.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",i?Object(M.jsx)("span",{className:"has-text-danger",children:"Error loading user"}):Object(M.jsx)("a",{href:"mailto:".concat(null===j||void 0===j?void 0:j.email),children:null===j||void 0===j?void 0:j.name})]})]})]})]})},F=function(){var e=k(),t=C((function(e){return e})).currentTodo,c=Object(w.useState)(!1),a=Object(S.a)(c,2),n=a[0],s=a[1],r=Object(w.useState)(null),l=Object(S.a)(r,2),i=l[0],o=l[1];return Object(w.useEffect)((function(){s(!0),o(null),R("/todos").then((function(t){e(N(t))})).catch(o).finally((function(){s(!1)}))}),[]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("div",{className:"section",children:Object(M.jsx)("div",{className:"container",children:Object(M.jsxs)("div",{className:"box",children:[Object(M.jsx)("h1",{className:"title",children:"Todos:"}),Object(M.jsx)("div",{className:"block",children:Object(M.jsx)(B,{})}),Object(M.jsxs)("div",{className:"block",children:[n&&Object(M.jsx)(I,{}),i&&Object(M.jsx)("p",{className:"notification is-danger",children:"Something went wrong..."}),!n&&!i&&Object(M.jsx)(V,{})]})]})})}),t&&Object(M.jsx)(D,{})]})},J=function(){return Object(M.jsx)(r.a,{store:T,children:Object(M.jsx)(l.a,{children:Object(M.jsx)(F,{})})})};s.a.render(Object(M.jsx)(J,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.a12a082b.chunk.js.map