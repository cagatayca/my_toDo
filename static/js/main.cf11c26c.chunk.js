(this.webpackJsonpyap=this.webpackJsonpyap||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),o=c(7),a=c.n(o),l=(c(13),c(5)),d=c(6),r=c(8),s=(c(14),c(0)),u=[{id:1,title:"Pay the Bill",completed:!1},{id:2,title:"Workout",completed:!0}];var b=function(){var t=Object(n.useState)(u),e=Object(l.a)(t,2),c=e[0],i=e[1],o=Object(n.useState)(""),a=Object(l.a)(o,2),b=a[0],j=a[1];return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("div",{className:"borderr",children:[Object(s.jsx)("h1",{children:"MY TODO"}),Object(s.jsxs)("div",{className:"add_form",children:[Object(s.jsx)("input",{className:"form-control",value:b,onChange:function(t){return j(t.target.value)},placeholder:"add list..."}),Object(s.jsx)("button",{className:"btn btn-info",type:"button",id:"button-addon1",onClick:function(){return i([].concat(Object(r.a)(c),[{id:Date.now(),title:b,completed:!1}])),void j("")},children:"Add"})]}),Object(s.jsx)("div",{className:"list",children:c.map((function(t,e){return Object(s.jsx)("div",{onClick:function(){return e=t.id,void i(c.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{completed:!t.completed}):t})));var e},className:t.completed?"completed":"",children:t.title},e)}))}),Object(s.jsx)("button",{type:"button",onClick:function(){i(c.filter((function(t){return!t.completed})))},className:"cleaner btn btn-info",children:"Clear Completed"})]})})};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cf11c26c.chunk.js.map