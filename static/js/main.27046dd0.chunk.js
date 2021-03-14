(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{31:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var c,r=n(0),a=n(8),o=n.n(a),u=n(4),i=n(3),b=n(7),j=n(16),s=n(2),l="FETCH_CONTACTS",f="ADD_CONTACT",O="DELETE_CONTACT",d="FILTER_CONTACTS",m=Object(i.b)(l),h=Object(i.b)(f),x=Object(i.b)(O),C=Object(i.b)(d),p=Object(i.c)([],(c={},Object(b.a)(c,m,(function(t,e){return e.payload})),Object(b.a)(c,h,(function(t,e){return[].concat(Object(j.a)(t),[e.payload])})),Object(b.a)(c,x,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),c)),v=Object(i.c)("",Object(b.a)({},C,(function(t,e){return e.payload}))),g=Object(s.c)({contacts:p,filter:v}),y=Object(i.a)({reducer:g}),F=n(34);var S=n(13),T=n(1),D=function(t){var e=t.onFormSubmit,n=Object(r.useState)(""),c=Object(S.a)(n,2),a=c[0],o=c[1],u=Object(r.useState)(""),i=Object(S.a)(u,2),b=i[0],j=i[1];return Object(T.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a&&b&&(e({name:a,number:b}),o(""),j(""))},children:[Object(T.jsxs)("label",{htmlFor:"name",children:[Object(T.jsx)("h2",{children:" Name"}),Object(T.jsx)("input",{type:"text",value:a,name:"name",required:!0,onChange:function(t){var e=t.target;return o(e.value)}})]}),Object(T.jsxs)("label",{htmlFor:"number",children:[Object(T.jsx)("h2",{children:" Number"}),Object(T.jsx)("input",{name:"number",required:!0,value:b,onChange:function(t){var e=t.target;return j(e.value)}})]}),Object(T.jsx)("p",{}),Object(T.jsx)("button",{type:"submit",children:"Add new contact"})]})},N=n(5),A=function(t){return t.contacts},E=function(t){return t.filter},w=Object(N.a)([A,E],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),k=function(t){var e=t.contact,n=t.onDeleteContact;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("span",{children:[e.name,": ",e.number]}),Object(T.jsx)("button",{onClick:function(){return n(e.id)},children:"Delete"})]})},I=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(T.jsx)("ul",{children:e.map((function(t){return Object(T.jsx)("li",{children:Object(T.jsx)(k,{contact:t,onDeleteContact:n})},t.id)}))})},J=Object(u.b)((function(t){return{contacts:w(t)}}),(function(t){return{onDeleteContact:function(e){return t(x(e))}}}))(I),L=function(t){var e=t.value,n=t.onChangeFilter;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("p",{children:"Find contacts by name:"}),Object(T.jsx)("input",{name:"filter",onChange:n,value:e})]})},_=Object(u.b)((function(t){return{value:t.filter}}),(function(t){return{onChangeFilter:function(e){return t(C(e.target.value))}}}))(L);n(30);var q=function(t){var e=t.contacts,n=t.onAddContact,c=t.fetchContacts;return Object(r.useEffect)((function(){var t=function(){try{return JSON.parse(localStorage.getItem("contacts"))}catch(t){return}}();t&&c(t)}),[c]),Object(r.useEffect)((function(){!function(t){localStorage.setItem("contacts",JSON.stringify(t))}(e)}),[e]),Object(T.jsxs)("div",{className:"container",children:[Object(T.jsx)("h1",{children:"Phonebook"}),Object(T.jsx)(D,{onFormSubmit:function(t){var c={id:Object(F.a)(),name:t.name,number:t.number};e.find((function(t){return t.name===c.name}))?alert("".concat(c.name," is already in contacts!")):e.find((function(t){return t.number===c.number}))?alert("".concat(c.number," is already in contacts!")):n(c)}}),e.length>1&&Object(T.jsx)(_,{}),Object(T.jsx)(J,{})]})},B=Object(u.b)((function(t){return{contacts:A(t),filter:E(t)}}),(function(t){return{fetchContacts:function(e){return t(m(e))},onAddContact:function(e){return t(h(e))}}}))(q);n(31);o.a.render(Object(T.jsx)(u.a,{store:y,children:Object(T.jsx)(B,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.27046dd0.chunk.js.map