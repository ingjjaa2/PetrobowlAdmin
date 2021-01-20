(this.webpackJsonppetrobowl=this.webpackJsonppetrobowl||[]).push([[0],{41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(24),r=n.n(c),s=(n(41),n(1)),i=n(6),o=n(19),u=n(5),j=n(2),d=n(27),l=function(e){var t=e.isAuthenticated,n=e.component,c=Object(d.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(u.b,Object(j.a)(Object(j.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(j.a)({},e)):Object(a.jsx)(u.a,{to:"/login"})}}))},b=function(e){var t=e.isAuthenticated,n=e.component,c=Object(d.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(u.b,Object(j.a)(Object(j.a)({},c),{},{component:function(e){return t?Object(a.jsx)(u.a,{to:"/"}):Object(a.jsx)(n,Object(j.a)({},e))}}))},m=n(12),O=n(14),v=n(8),p=n.n(v),h=n(13),x="https://petrobowl-test.herokuapp.com/api",f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(x,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(x,"/").concat(e),c="",r=localStorage.getItem("user")||"";if(""!==r){var s=JSON.parse(r);c=s.token}return"GET"===n?fetch(a,{method:n,headers:{"x-token":c}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(t)})},N="[ui] abre o cierra modal",y="[ui] set data custom",k="[ui] set remove custom",C=function(e){return{type:y,payload:e}},S=n(16),T=n.n(S),w="[auth] set data de autentifiacion",A="[auth] remove data de autentifiacion",E=function(e){return{type:w,payload:e}},R=function(e){var t=e.active,n=void 0!==t&&t,c=e.texto,r=void 0===c?"...Waiting":c,i=Object(s.useState)(1),o=Object(m.a)(i,2),u=o[0],j=o[1];return Object(s.useEffect)((function(){var e=setTimeout((function(){return j(4===u?1:u+1),function(){}}),300);return function(){clearTimeout(e)}}),[n,u]),Object(a.jsxs)("div",{className:"loadingExternalContainer",children:[Object(a.jsxs)("div",{className:"loadingContainer",children:[Object(a.jsx)("div",{className:"".concat(1===u?"activeContainer":"")}),Object(a.jsx)("div",{className:"".concat(2===u?"activeContainer":"")}),Object(a.jsx)("div",{className:"".concat(3===u?"activeContainer":"")}),Object(a.jsx)("div",{className:"".concat(4===u?"activeContainer":"")})]}),Object(a.jsx)("div",{className:"waitingText",children:r})]})},I={username:"",code:""},L=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(s.useState)(e),n=Object(m.a)(t,2),a=n[0],c=n[1];return[a,function(e){var t=e.target;c(Object(j.a)(Object(j.a)({},a),{},Object(O.a)({},t.name,t.value)))},function(t){c(null===t?e:t)}]}(I),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(i.b)(),o=Object(i.c)((function(e){return e.auth})).userWaitingCode,u=Object(i.c)((function(e){return e.ui})),d=u.loading,l=u.validatingToken;Object(s.useEffect)((function(){""!==(localStorage.getItem("user")||"")&&r(function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C({validatingToken:!0})),e.next=3,g("auth/renew");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).ok?(localStorage.setItem("user",JSON.stringify({token:a.token})),t(E({token:a.token}))):localStorage.removeItem("user"),t(C({validatingToken:!1}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[r]);var b=function(e){c(e)};return Object(a.jsx)("div",{className:"backgroundContainer",children:Object(a.jsxs)("div",{className:"containerLoginScreen",children:[Object(a.jsx)("img",{src:"./assets/logo_petrobowl.png",className:"imageCenter",alt:"logoAlo"}),l?Object(a.jsx)(R,{texto:"validating current User"}):Object(a.jsx)(s.Fragment,{children:o?Object(a.jsx)(s.Fragment,{children:d?Object(a.jsx)(R,{}):Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("h3",{className:"centerText",children:"Introduce the code send to your email"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"number",className:"form-control ",autoComplete:"off",name:"code",value:n.code,onChange:b})}),Object(a.jsx)("div",{className:"button",onClick:function(){var e,t;r((e=o,t=parseInt(n.code),function(){var n=Object(h.a)(p.a.mark((function n(a){var c,r,s;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={username:e,codigo:t},a(C({loading:!0})),n.next=4,f("auth",c,"POST");case 4:return r=n.sent,n.next=7,r.json();case 7:(s=n.sent).ok?(localStorage.setItem("user",JSON.stringify({token:s.token})),a(E({token:s.token}))):T.a.fire("Error en validar Usuario",s.message,"error"),a(C({loading:!1}));case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()))},children:Object(a.jsx)("span",{className:"",children:"Login"})})]})}):Object(a.jsx)(s.Fragment,{children:d?Object(a.jsx)(R,{}):Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("h3",{className:"centerText",children:"Enter the UserName to Login"}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control ",autoComplete:"off",name:"username",value:n.username,onChange:b})}),Object(a.jsx)("div",{className:"button",onClick:function(){var e;r((e=n.username,function(){var t=Object(h.a)(p.a.mark((function t(n){var a,c,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={username:e},n(C({loading:!0})),t.next=4,f("auth/requestCode",a,"POST");case 4:return c=t.sent,t.next=7,c.json();case 7:(r=t.sent).ok?n(E({userWaitingCode:e})):T.a.fire("Error Requesting Code",r.message,"error"),n(C({loading:!1}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:Object(a.jsx)("span",{className:"",children:"Request Code"})})]})})})]})})},B="[gen] set data de general",F="[gen] remove data de general",q=function(e){return{type:B,payload:e}},D=function(e){return{type:F,payload:e}},_=function(e,t){return function(){var n=Object(h.a)(p.a.mark((function n(a){var c,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(C({loadingSummary:!0})),a(C({activeRound:t})),a(C({activeIdRound:e})),n.next=5,g("resumen/".concat(e));case 5:return c=n.sent,n.next=8,c.json();case 8:(r=n.sent).ok?a(q({roundSummary:r.data})):T.a.fire("Error en renovar Usuario",r.message,"error"),a(C({loadingSummary:!1}));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},J=function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(C({loadingRoundDetails:!0})),t.next=3,g("/".concat(e));case 3:return a=t.sent,t.next=6,a.json();case 6:(c=t.sent).ok?n(q({roundDetails:c.data})):T.a.fire("Error en renovar Usuario",c.message,"error"),n(C({loadingRoundDetails:!1}));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=function(e){var t=e.data,n=void 0===t?[]:t,c=e.onClick;return Object(a.jsx)("div",{className:"infoContainer",children:n.map((function(e,t){return Object(a.jsx)("span",{onClick:function(){return c(t)},children:Object(a.jsx)(M,{titulo:e.name,valor:e.rounds.length})},t)}))})},M=function(e){var t=e.titulo,n=void 0===t?"":t,c=e.valor,r=void 0===c?0:c;return Object(a.jsxs)("div",{className:"itemContainer",children:[Object(a.jsxs)("span",{children:[" ",n," "]}),Object(a.jsxs)("span",{children:[" ",r," "]})]})},z=function(e){var t=e.data,n=void 0===t?[]:t,c=e.onClick;return Object(a.jsx)("div",{className:"infoContainer",children:n.map((function(e,t){return Object(a.jsx)("span",{onClick:function(){return c(e.id)},children:Object(a.jsx)(G,{teamA:e.teamA,teamB:e.teamB,roundClasification:e.clasification})},t)}))})},G=function(e){var t=e.teamA,n=void 0===t?"":t,c=e.teamB,r=void 0===c?"":c,s=e.roundClasification,i=void 0===s?"":s;return Object(a.jsxs)("div",{className:"itemContainer round",children:[Object(a.jsxs)("span",{className:"separatorContainer",children:[" ",i," "]}),Object(a.jsxs)("span",{children:[" ",n," "]}),Object(a.jsx)("span",{className:"separatorContainer",children:" VS "}),Object(a.jsxs)("span",{children:[" ",r," "]})]})},P={activo:"Events List",eventActive:null,RoundId:null,other:null},W=function(){var e=Object(s.useState)(P),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(i.b)(),o=Object(u.g)();Object(s.useEffect)((function(){r(function(){var e=Object(h.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C({loadingRoundList:!0})),e.next=3,g("/");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).ok?t(q({roundList:a.data})):T.a.fire("Error en renovar Usuario",a.message,"error"),t(C({loadingRoundList:!1}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[r]);var d=Object(i.c)((function(e){return e.gen})).roundList,l=function(e){switch(e){case"events":c(P);break;case"roundList":c(Object(j.a)(Object(j.a)({},n),{},{activo:"Events List",RoundId:null}));break;case"roundDetails":c(Object(j.a)(Object(j.a)({},n),{},{activo:"Round List",other:null}))}};return Object(a.jsx)("div",{className:"backgroundContainer",children:Object(a.jsx)("div",{className:"mainConatainer",children:d?Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("div",{className:"headerText",children:n.activo}),Object(a.jsxs)("div",{className:"headerTabs",children:[Object(a.jsx)("span",{className:"button tab",onClick:function(){return l("events")},children:"Events List"}),Object(a.jsx)("span",{className:"button tab ".concat(null===n.eventActive&&"unactive"),onClick:function(){return l("roundList")},children:"Round List"})]}),null===n.eventActive&&Object(a.jsx)(U,{data:d,onClick:function(e){c(Object(j.a)(Object(j.a)({},n),{},{activo:"Round List",eventActive:d[e]}))}}),null!==n.eventActive&&Object(a.jsx)(z,{data:n.eventActive.rounds,onClick:function(e){var t=n.eventActive.rounds.find((function(t){return t.id===e})),a="".concat(t.clasification," - ").concat(t.teamA," - ").concat(t.teamB);r(_(e,a)),r(J(e)),c(Object(j.a)(Object(j.a)({},n),{},{activo:"Round Summary",RoundId:e})),o.push("/round")}})]}):Object(a.jsx)(R,{})})})},V=n(33),X=n(17),H=n(18),Q={active:0,question:0},K=function(){var e=Object(s.useState)(Q),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(i.b)(),o=Object(u.g)(),d=Object(i.c)((function(e){return e.ui})),l=d.activeRound,b=d.activeIdRound,O=Object(i.c)((function(e){return e.gen})),v=O.roundSummary,p=O.roundDetails,h=function(){r(D("roundSummary")),r({type:k,payload:"activeRound"}),r(D("roundDetails")),o.push("/events")},x=function(e){c(Object(j.a)(Object(j.a)({},n),{},{active:e}))},f=function(e){var t=0;"back"===e&&(t=-1),"next"===e&&(t=1);var a=parseInt(n.question)+parseInt(t);a>=0&&a<p.length&&c(Object(j.a)(Object(j.a)({},n),{},{question:a}))};return Object(a.jsx)(s.Fragment,{children:v&&p?Object(a.jsxs)("div",{className:"roundSummaryContainer",children:[Object(a.jsx)("div",{className:"RoundSumaryHeader",children:Object(a.jsxs)("span",{className:"roundNameContainer",children:[Object(a.jsx)("span",{className:"iconButton",onClick:function(){return h()},children:Object(a.jsx)(X.a,{icon:H.a})}),Object(a.jsxs)("span",{children:[l," - ",b," "]}),Object(a.jsx)("span",{className:"iconButton",onClick:function(){return r(_(b,l)),void r(J(b))},children:Object(a.jsx)(X.a,{icon:H.e})})]})}),Object(a.jsx)("div",{className:"roundSummaryInfo",children:0===n.active?Object(a.jsx)(Y,{roundSummary:v}):Object(a.jsx)(Z,{questionDetail:p[n.question]})}),0!==n.active&&Object(a.jsxs)("div",{className:"roundSummaryArrowContainer",children:[Object(a.jsxs)("span",{className:"arrow left",onClick:function(){return f("back")},children:[" ",Object(a.jsx)(X.a,{icon:H.a,size:"2x"})," "]}),Object(a.jsx)("span",{className:"activeQuestion",children:n.question+1}),Object(a.jsxs)("span",{className:"arrow right",onClick:function(){return f("next")},children:[" ",Object(a.jsx)(X.a,{icon:H.b,size:"2x"})," "]})]}),Object(a.jsxs)("div",{className:"pageRounSummary_tabsContainer",children:[Object(a.jsx)("span",{className:"pageTabs ".concat(0===n.active&&"active"),onClick:function(){return x(0)},children:Object(a.jsx)(X.a,{icon:H.c,size:"2x"})}),Object(a.jsx)("span",{className:"pageTabs ".concat(1===n.active&&"active"),onClick:function(){return x(1)},children:Object(a.jsx)(X.a,{icon:H.d,size:"2x"})})]})]}):Object(a.jsx)(R,{})})},Y=function(e){var t=e.roundSummary;return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("span",{className:"roundSummaryTeamA",children:Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("span",{className:"headerTeamName",children:"Team A"}),t.equipoA.map((function(e,t){return Object(a.jsx)("span",{children:Object(a.jsx)($,{id:e.id,titulo:e.participante,valor:e.respuestas},t)},t)}))]})}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{className:"roundSummaryTeamB",children:Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("span",{className:"headerTeamName",children:"Team B"}),t.equipoB.map((function(e,t){return Object(a.jsx)("span",{children:Object(a.jsx)($,{id:e.id,titulo:e.participante,valor:e.respuestas},t)},t)}))]})})]})},Z=function(e){var t=e.questionDetail,n=t.respuestaA.map((function(e){return e.tiempo})),c=t.respuestaB.map((function(e){return e.tiempo})),r=n.length>0?Math.min.apply(Math,Object(V.a)(n)):999999,i=c.length>0?Math.min.apply(Math,Object(V.a)(c)):999999;return Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("span",{className:"roundSummaryTeamA",children:Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("span",{className:"headerTeamName ".concat(r<i&&"fastest"),children:"Team A"}),t.respuestaA.map((function(e,t){return Object(a.jsx)("span",{children:Object(a.jsx)($,{id:e.id,titulo:e.jugador,valor:e.tiempo,active:e.tiempo===r},t)},t)}))]})}),Object(a.jsx)("span",{}),Object(a.jsx)("span",{className:"roundSummaryTeamB",children:Object(a.jsxs)(s.Fragment,{children:[Object(a.jsx)("span",{className:"headerTeamName ".concat(r>i&&"fastest"),children:"Team B"}),t.respuestaB.map((function(e,t){return Object(a.jsx)("span",{children:Object(a.jsx)($,{id:e.id,titulo:e.jugador,valor:e.tiempo,active:e.tiempo===i},t)},t)}))]})})]})},$=function(e){var t=e.id,n=void 0===t?"":t,c=e.titulo,r=void 0===c?"":c,s=e.valor,i=void 0===s?0:s,o=e.active,u=void 0!==o&&o;return Object(a.jsxs)("div",{className:"itemContainer player ".concat(u&&"fastest"),children:[Object(a.jsxs)("span",{children:[" ",n," "]}),Object(a.jsxs)("span",{className:"ml-5",children:[" ",r," "]}),Object(a.jsxs)("span",{className:"separatorContainer small",children:[" ",i," "]})]})},ee=function(){var e=Object(i.c)((function(e){return e.auth})).token;return Object(a.jsx)(o.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(b,{exact:!0,path:"/login",component:L,isAuthenticated:!!e}),Object(a.jsx)(l,{exact:!0,path:"/events",component:W,isAuthenticated:!!e}),Object(a.jsx)(l,{exact:!0,path:"/round",component:K,isAuthenticated:!!e}),Object(a.jsx)(u.a,{to:"/events"})]})})})},te=n(15),ne=n(35),ae={},ce={},re={},se=Object(te.c)({ui:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case N:return Object(j.a)(Object(j.a)({},t),{},(e={},Object(O.a)(e,n.payload.name,n.payload.value),Object(O.a)(e,"data",n.payload.data),e));case y:return Object(j.a)(Object(j.a)({},t),n.payload);case k:var a=t;return delete a[n.payload],Object(j.a)({},a);default:return t}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(j.a)(Object(j.a)({},e),t.payload);case A:var n=e;return delete n[t.payload],Object(j.a)({},n);default:return e}},gen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(j.a)(Object(j.a)({},e),t.payload);case F:var n=e;return delete n[t.payload],Object(j.a)({},n);default:return e}}}),ie="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,oe=Object(te.e)(se,ie(Object(te.a)(ne.a))),ue=function(){return Object(a.jsx)(i.a,{store:oe,children:Object(a.jsx)(ee,{})})};r.a.render(Object(a.jsx)(ue,{}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.630e00d1.chunk.js.map