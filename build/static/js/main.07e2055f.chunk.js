(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(29),s=n.n(a),o=n(4),i=n(12),u=n(3),j=n(6),l=n(10),b=n.n(l),O=n(14),h=n(30),p=n.n(h).a.create({baseURL:"http://localhost:3001"}),x=function(e){return p.post("/user",e)},d=function(e){return p.get("/user/query?email=".concat(e))},f=function(e){return p.get("/user/find/".concat(e))},g=function(e){return p.delete("/user/".concat(e))},v=function(){return p.get("/slots/all")},m=n(2),w=function(){var e=Object(r.useState)({email:"",apartment_nr:"",password:""}),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),s=Object(o.a)(a,2),i=s[0],u=s[1],l=Object(r.useState)({starttime:""}),h=Object(o.a)(l,2),p=(h[0],h[1],function(){var e=Object(O.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(n);case 3:t=e.sent,r=t.data,console.log(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error!!!",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()),w=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(i);case 3:t=e.sent,n=t.data,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error!!!",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(i);case 3:t=e.sent,n=t.data,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error!!!",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(O.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(i,n);case 3:t=e.sent,r=t.data,c(i),console.log(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error!!!",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(i);case 3:t=e.sent,n=t.data,c(i),console.log(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error!!!",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:t=e.sent,n=t.data,console.log(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error!!!",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Register"}),Object(m.jsx)("input",{placeholder:"Email",onChange:function(e){return c(Object(j.a)(Object(j.a)({},n),{},{email:e.target.value}))}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{placeholder:"Password",onChange:function(e){return c(Object(j.a)(Object(j.a)({},n),{},{password:e.target.value}))}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{placeholder:"Apartment number",onChange:function(e){return c(Object(j.a)(Object(j.a)({},n),{},{apartment_nr:e.target.value}))}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){return p()},children:"register"}),Object(m.jsx)("hr",{}),Object(m.jsx)("h1",{children:"Get One User By query"}),Object(m.jsx)("input",{placeholder:"User ID",onChange:function(e){return u(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){return w()},children:"Get user by query"}),Object(m.jsx)("hr",{}),Object(m.jsx)("h1",{children:"Get One User By ID"}),Object(m.jsx)("input",{placeholder:"User ID",onChange:function(e){return u(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){return k()},children:"Get user  by ID"}),Object(m.jsx)("h1",{children:"Update"}),Object(m.jsx)("input",{placeholder:"User ID",onChange:function(e){return u(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{placeholder:"Email",onChange:function(e){return c(Object(j.a)(Object(j.a)({},n),{},{email:e.target.value}))}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{placeholder:"Password",onChange:function(e){return c(Object(j.a)(Object(j.a)({},n),{},{password:e.target.value}))}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{placeholder:"Apartment number",onChange:function(e){return c(Object(j.a)(Object(j.a)({},n),{},{apartment_nr:e.target.value}))}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){return C()},children:"Update"}),Object(m.jsx)("h1",{children:"Delet User By ID"}),Object(m.jsx)("input",{placeholder:"User ID",onChange:function(e){return u(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){return V()},children:"Delete"}),Object(m.jsx)("h1",{children:"Get All Slots"}),Object(m.jsx)("button",{onClick:function(){return y()},children:"All slots"}),Object(m.jsx)("hr",{})]})},k=n(32),C={homeView:"/",signInView:"/signin",profileView:"/profile",settingsView:"/settings",registerView:"/register",bookingView:"/bookings"},V=(n(57),function(){var e=Object(r.useState)(new Date),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(u.f)();return Object(m.jsxs)("div",{children:[Object(m.jsx)(k.a,{showWeekNumbers:!0,onChange:function(e){c(e),console.log(e.toLocaleDateString("sv-se"))},value:n})," ",Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){return a.push(C.bookingView,{swedishDate:n.toLocaleDateString("sv-se")})},children:"book"})]})}),y=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(V,{})})},D=Object(r.createContext)(),S=function(e){var t=Object(r.useState)(),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(m.jsx)(D.Provider,{value:[c,a],children:e.children})},I=function(){var e=Object(u.f)(),t=Object(r.useState)(),n=Object(o.a)(t,2),c=n[0],a=n[1],s=Object(r.useState)(),i=Object(o.a)(s,2),j=(i[0],i[1]),l=Object(r.useContext)(D),b=Object(o.a)(l,2),O=(b[0],b[1]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:" Username: "})," ",Object(m.jsx)("input",{onChange:function(e){return a(e.target.value)}})," ",Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:" Password: "})," ",Object(m.jsx)("input",{type:"password",onChange:function(e){return j(e.target.value)}})," ",Object(m.jsx)("br",{}),Object(m.jsx)("button",{onClick:function(){return O(c),localStorage.setItem("username",c),void e.push("/")},children:"Login"})]})},U=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"This is the ProfileView!"})})},N=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"This is the SettingsView!"})})},P=function(){var e,t=Object(u.g)(),n=Object(u.f)(),c=Object(r.useState)({date:"",starttime:""}),a=Object(o.a)(c,2),s=a[0],i=a[1];Object(r.useEffect)((function(){var e;(null===(e=t.state)||void 0===e?void 0:e.swedishDate)||n.push(C.HomeView)}));return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h1",{children:["Date : ",null===(e=t.state)||void 0===e?void 0:e.swedishDate]}),Object(m.jsx)("span",{onClick:function(e){return function(e){e.preventDefault(),i(Object(j.a)(Object(j.a)({},s),{},{starttime:e.target.value})),console.log(s)}(e)},value:"07:00",children:"07:00"})]})},B=function(e){var t=Object(r.useContext)(D),n=Object(o.a)(t,2),c=n[0],a=n[1],s=function(e){return c?y:e},j=function(e){return c?e:I};return Object(r.useEffect)((function(){a(localStorage.getItem("username"))})),Object(m.jsxs)(i.a,{children:[e.children,Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{exact:!0,path:C.registerView,component:s(w)}),Object(m.jsx)(u.a,{exact:!0,path:C.signInView,component:s(I)}),Object(m.jsx)(u.a,{exact:!0,path:C.profileView,component:j(U)}),Object(m.jsx)(u.a,{exact:!0,path:C.bookingView,component:j(P)}),Object(m.jsx)(u.a,{exact:!0,path:C.settingsView,component:j(N)}),Object(m.jsx)(u.a,{component:y})]})]})},L=(n(63),n.p+"static/media/logotype.e3e0b841.svg"),E=(n(64),function(){var e=Object(u.f)(),t=Object(r.useContext)(D),n=Object(o.a)(t,2),c=n[0],a=n[1];return Object(m.jsxs)("div",{className:"profileWrapper",children:[Object(m.jsx)("img",{className:"profileImg",src:"https://www.thispersondoesnotexist.com/image",alt:""}),Object(m.jsx)("span",{className:"displayedUsername",children:c}),Object(m.jsxs)("div",{className:"profileDropdown",children:[Object(m.jsx)("a",{onClick:function(){return e.push(C.settingsView)},children:"Settings"}),Object(m.jsx)("a",{onClick:function(){return e.push(C.profileView)},children:"Profile"}),Object(m.jsx)("a",{onClick:function(){return e.push(C.bookingView)},children:"Bookings"}),Object(m.jsx)("hr",{}),Object(m.jsx)("a",{onClick:function(){return localStorage.removeItem("username"),a(!1),void e.push(C.homeView)},children:"Logout"})]})]})}),A=function(){var e=Object(u.f)(),t=Object(r.useContext)(D),n=Object(o.a)(t,2),c=n[0];n[1];return Object(m.jsxs)("div",{className:"navigationBarWrapper",children:[Object(m.jsx)("img",{onClick:function(){return e.push(C.homeView)},className:"logotype",src:L,alt:"Error..."}),Object(m.jsx)("span",{onClick:function(){return e.push(C.registerView)},className:"signIn",children:"Register"}),c?Object(m.jsxs)("div",{className:"profile",children:[" ",Object(m.jsx)(E,{})," "]}):Object(m.jsx)("span",{onClick:function(){return e.push(C.signInView)},className:"signIn",children:"Sign in"})]})};n(65);var G=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(S,{children:Object(m.jsx)(B,{children:Object(m.jsx)(A,{})})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root")),F()}},[[66,1,2]]]);
//# sourceMappingURL=main.07e2055f.chunk.js.map