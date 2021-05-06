(this["webpackJsonpreact-morveux"]=this["webpackJsonpreact-morveux"]||[]).push([[0],{21:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(15),r=a.n(s),o=(a(21),a(4)),l=a(3),i=a(16);function d(e){e&&(console.log("service/token setToken ".concat(e.substr(0,10),"...")),localStorage.setItem("token",e))}var u={baseURL:"https://declare-ton-morveux.herokuapp.com/",method:"get",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}},b=a.n(i).a.create(u);b.interceptors.request.use((function(e){var t=localStorage.getItem("token");return console.log("interceptors request with token ".concat(t)),t&&(e.headers.Authorization="Bearer ".concat(t)),e})),b.interceptors.response.use((function(e){return console.log("interceptors response : ",e),e}),(function(e){if(401===e.response.status)throw localStorage.removeItem("token"),new Error("Invalid token");throw e}));var j=b;var h=a(0);var m=function(e){var t=e.hasDeclared,a=e.setHasDeclared,n=e.setIsAuth,c=e.isAuth;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("span",{className:"navbar-brand",children:"DtM Logo"}),Object(h.jsx)("button",{className:"btn btn-outline-success",type:"submit",onClick:function(){return a(!t)},children:"D\xe9clarez un enfant"}),c&&Object(h.jsx)("button",{className:"btn btn-outline-warning",type:"submit",onClick:function(){j.post("logout").then((function(e){return n(e.data)}))},children:"Se d\xe9connecter"})]})})})},O=a(5);var p=function(e){var t=e.spec,a=e.handleChange,n=e.handleSubmit;return Object(h.jsxs)("div",{className:"col-sm",children:[Object(h.jsx)("h3",{children:t.header}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group text-left",children:[Object(h.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Nom d'utilisateur"}),Object(h.jsx)("input",{type:"username",className:"form-control",id:t.userId,"aria-describedby":"usernameHelp",placeholder:"Entrez votre nom d'utilisateur",value:t.state.username,onChange:a}),Object(h.jsx)("small",{id:"usernameHelp",className:"form-text text-muted",children:"Nom d'utilisateur (pas l'email)"})]}),Object(h.jsxs)("div",{className:"form-group text-left",children:[Object(h.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Mot de passe"}),Object(h.jsx)("input",{type:"password",className:"form-control",id:t.passId,placeholder:"Entrez votre mot de passe",autoComplete:"new-password",value:t.state.password,onChange:a})]}),Object(h.jsx)("div",{className:"form-check"}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:n,children:t.btnValue})]})]})};var f=function(e){var t=e.setHasDeclared,a=e.hasDeclared,c=Object(n.useState)({signinUsername:"",signinPassword:""}),s=Object(l.a)(c,2),r=s[0],i=s[1],u=Object(n.useState)({loginUsername:"",loginPassword:""}),b=Object(l.a)(u,2),m=b[0],f=b[1],x={header:"Cr\xe9er un compte",userId:Object.keys(r)[0],state:r,passId:Object.keys(r)[1],btnValue:"Cr\xe9er un compte"},v={header:"Se connecter",userId:Object.keys(m)[0],state:m,passId:Object.keys(m)[1],btnValue:"Se connecter"};return Object(h.jsx)("div",{className:"container-fluid",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)(p,{spec:x,handleChange:function(e){var t=e.target,a=t.id,n=t.value;i((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(o.a)({},a,n))}))},handleSubmit:function(e){e.preventDefault();var n,c,s=r.signinUsername,o=r.signinPassword;(n=s,c=o,j.post("register",{username:n,password:c}).then((function(e){var t=e.data.token;return d(t),t}))).then((function(e){t(!a),console.log(e)}),(function(){return console.log("already taken")})).catch((function(e){return alert("Sorry, there was an error")}))}})}),Object(h.jsx)("div",{className:"col-sm-6",children:Object(h.jsx)(p,{spec:v,handleChange:function(e){var t=e.target,a=t.id,n=t.value;f((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(o.a)({},a,n))}))},handleSubmit:function(e){e.preventDefault();var n,c,s=m.loginUsername,r=m.loginPassword;(n=s,c=r,j.post("authenticate",{username:n,password:c}).then((function(e){var t=e.data.token;return d(t),t}))).then((function(e){t(!a)})).catch((function(e){alert("Sorry, there was an error"),console.log(e)}))}})})]})})};var x=function(e){var t=e.handleChangeSchool,a=e.passedId,n=e.schools;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:a,children:"Choisissez une \xe9cole :"}),Object(h.jsx)("input",{list:"school-lists",id:a,name:"school-choice",onChange:t,placeholder:"Cliquez ou entrez une \xe9cole"}),Object(h.jsx)("datalist",{id:"school-lists",children:n.map((function(e,t){return Object(h.jsx)("option",{value:e.name},e.id)}))})]})};var v=function(e){var t=e.schools,a=Object(n.useState)({firstName:"",lastName:""}),c=Object(l.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)(),d=Object(l.a)(i,2),u=d[0],b=d[1],m=function(e){var t=e.target,a=t.id,n=t.value;r((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(o.a)({},a,n))}))};return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"form-group text-left",children:[Object(h.jsx)("label",{children:"Pr\xe9nom du morveux :"}),Object(h.jsx)("input",{id:"firstName",onChange:m})]}),Object(h.jsxs)("div",{className:"form-group text-left",children:[Object(h.jsx)("label",{children:"Nom de famille du morveux :"}),Object(h.jsx)("input",{id:"lastName",onChange:m})]}),Object(h.jsx)("div",{className:"form-group text-left",children:Object(h.jsx)(x,{passedId:"add-child-shool-list",handleChangeSchool:function(e){b(e.target.value)},schools:t})}),Object(h.jsx)("div",{className:"form-check"}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){e.preventDefault();var a=s.firstName,n=s.lastName,c=t.find((function(e){return e.name.includes(u)}));console.log(a,n,c.id),function(e){var t=e.firstName,a=e.lastName,n=e.schoolId;return j.post("api/children",{firstName:t,lastName:a,school:{id:n}}).then((function(e){return e}))}(a,c.id).then((function(e){return console.log(e.data)}))},children:"Ajoutez"})]})})};var g=function(e){var t=e.setHasDeclared,a=e.hasDeclared,n=["toto","bobby"];return Object(h.jsxs)(h.Fragment,{children:[n.map((function(e,t){return Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)("input",{className:"form-check-input",type:"radio",name:"child",id:e}),Object(h.jsx)("label",{className:"form-check-label",htmlFor:e,children:e})]},t)})),Object(h.jsxs)("button",{className:"btn btn-primary",onClick:function(){return t(!a)},children:["Mettre \xe0 jour l'\xe9tat ",n.length>1?"des enfants":"de l'enfant"]})]})};var N=function(e){var t=e.setHasDeclared,a=e.hasDeclared,n=e.schools;return Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t(!a)},children:"Retour"}),Object(h.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(h.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"false","aria-controls":"collapseOne",children:"Ajouter un enfant"})}),Object(h.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(h.jsx)("div",{className:"accordion-body",children:Object(h.jsx)(v,{schools:n})})})]}),Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(h.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"true","aria-controls":"collapseTwo",children:"Liste d'enfants"})}),Object(h.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(h.jsx)("div",{className:"accordion-body",children:Object(h.jsx)(g,{setHasDeclared:t,hasDeclared:a})})})]})]})]})};var k=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),r=Object(l.a)(s,2),i=r[0],d=r[1],u=Object(n.useState)([]),b=Object(l.a)(u,2),O=b[0],p=b[1],v=Object(n.useState)(),g=Object(l.a)(v,2),k=g[0],y=g[1],w=Object(n.useState)(),C=Object(l.a)(w,2),S=C[0],D=C[1];return Object(n.useEffect)((function(){j.get("isAuthenticated").then((function(e){return e})).then((function(e){return D(e.data)})),j.get("/api/schools").then((function(e){return e})).then((function(e){return p(e.data)})),j.get("api/children/sick").then((function(e){return e})).then((function(e){return d(e.data.sick)}))}),[]),a&&!S?Object(h.jsx)(f,{setHasDeclared:c,hasDeclared:a}):a&&S?Object(h.jsx)(N,{setHasDeclared:c,hasDeclared:a,schools:O}):Object(h.jsxs)("div",{className:"contaier-fluid",children:[Object(h.jsx)(m,{setHasDeclared:c,setIsAuth:D,isAuth:S}),Object(h.jsxs)("h1",{className:"text-center mb-3",children:["Bienvenue sur ",Object(h.jsx)("br",{})," D\xe9clare ton Morveux"]}),Object(h.jsxs)("h2",{className:"text-center mb-3",children:["Le total de morveux est de : ",i]}),Object(h.jsxs)("form",{children:[Object(h.jsx)("div",{className:"form-group text-left",children:Object(h.jsx)(x,{passedId:"school-choice",handleChangeSchool:function(e){var t=e.target,a=t.id,n=t.value;y((function(){return Object(o.a)({},a,n)})),console.log(e.target)},schools:O})}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(e){e.preventDefault(),console.log("school : ",k)},children:"Recherchez"})]})]})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,42)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),y()}},[[41,1,2]]]);
//# sourceMappingURL=main.c332c155.chunk.js.map