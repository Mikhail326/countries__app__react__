(this.webpackJsonpcountries__app=this.webpackJsonpcountries__app||[]).push([[0],{51:function(n,e,t){},52:function(n,e,t){},90:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,l,d,b,j,u,h,m,O,p,x,g,f,v,w,y,k,C,S,E,L,F,A=t(0),T=t.n(A),z=t(17),B=t.n(z),N=(t(51),t(8)),P=t(5),R=(t(52),t(3)),_=t(4),D=_.a.div(r||(r=Object(R.a)(["\nwidth: 100%; \nmax-width: 1280px; \nmargin: 0 auto; \npadding: 0 2rem;\n"]))),I=t(15),J=t(14),M=t(1),U=_.a.header(a||(a=Object(R.a)(["\nbox-shadow: var(--shadow);\nbackground-color: var(--color-ui-base);\n"]))),W=_.a.div(c||(c=Object(R.a)(["\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\npadding: 2rem 0;\n"]))),q=Object(_.a)(J.b).attrs({to:"/"})(i||(i=Object(R.a)(["\ncolor: var(--color-text);\nfont-size: var(--fs-sm);\nfont-weight: var(--fw-bold);\ntext-decoration: none;\n"]))),G=_.a.div(o||(o=Object(R.a)(["\ncolor: var(--color-text);\nfont-size: var(--fs-sm);\nfont-weight: var(--fw-bold);\ncursor: pointer;\ntext-transform: capitalize;\n"]))),H=function(){var n=Object(A.useState)("light"),e=Object(N.a)(n,2),t=e[0],r=e[1];return Object(A.useEffect)((function(){document.body.setAttribute("data-theme",t)}),[t]),Object(M.jsx)(U,{children:Object(M.jsx)(D,{children:Object(M.jsxs)(W,{children:[Object(M.jsx)(q,{children:"Where is the world?"}),Object(M.jsxs)(G,{onClick:function(){r("light"===t?"dark":"light")},children:["light"===t?Object(M.jsx)(I.c,{}):Object(M.jsx)(I.b,{}),Object(M.jsxs)("span",{style:{marginLeft:"0.20rem"},children:[" ",t," Theme"]})]})]})})})},K=_.a.main(s||(s=Object(R.a)(["\npadding: 2rem 0;\n\n@media(min-with: 767px) {\n    padding: 4rem 0;\n}\n"]))),Q=function(n){var e=n.children;return Object(M.jsx)(K,{children:Object(M.jsx)(D,{children:e})})},V=t(12),X=t(16),Y=t.n(X),Z=_.a.button(l||(l=Object(R.a)(["\npadding: 0 1rem;\nbackground-color: var(--color-ui-base);\nbox-shadow: var(--shadow);\nline-height: 2.5;\nborder-radius: var(--radius);\n\nborder: none;\ndisplay: flex;\nalign-items: center;\ngap: 0.75rem;\n\ncolor: var(--color-text);\ncursor: pointer;\n"]))),$="https://restcountries.com/v2/",nn=_.a.section(d||(d=Object(R.a)(["\nmargin-top: 3rem;\nwidth: 100%;\ndisplay: grid;\ngrid-template-columns: 100%;\ngap: 2rem;\n\n@media (min-width: 767px) {\ngrid-template-columns: minmax(100px, 400px) 1fr;\nalign-items: center;\ngap: 5 rep;\n}\n\n@media (min-width: 1024px) {\n  grid-template-columns: minmax(400px, 600px) 1fr;\n}\n"]))),en=_.a.img(b||(b=Object(R.a)(["\ndisplay: block;\nwidth: 100%;\nheight: 100%;\nobject-fit: contain;\n"]))),tn=_.a.h1(j||(j=Object(R.a)(["\nmargin: 0;\nfont-weight: var(--fw-normal);\n"]))),rn=_.a.div(u||(u=Object(R.a)(["\ndisplay: flex;\nflex-direction: column;\n\ngap: 2rem;\n\n@media (min-width: 1024px) {\n  flex-direction: row;\n  gap: 4rem;\n}\n"]))),an=_.a.ul(h||(h=Object(R.a)(["\nlist-style: none;\nmargin: 0;\npadding: 0;\n"]))),cn=_.a.li(m||(m=Object(R.a)(["\nline-height: 1.8rem;\n\n& > b {\n  font-weight: var(--fw-bold);\n}\n"]))),on=_.a.div(O||(O=Object(R.a)(["\nmargin-top: rem;\ndisplay: flex;\ngap: 1.5rem;\nflex-direction: column;\nalign-items: flex-start;\n\n& > b {\n  font-weight: var(--fw-bold);\n}\n\n@media (min-width: 767px) {\nflex-direction: row;\nalign-items: center;\n}\n"]))),sn=_.a.div(p||(p=Object(R.a)(["\ndisplay: flex;\ngap: 1rem;\nflex-wrap: wrap;\n"]))),ln=_.a.span(x||(x=Object(R.a)(["\npadding: 0 1rem;\nbackground-color: var(--color-ui-base);\nbox-shadow: var(--shadow);\nline-height: 1.5;\ncursor: pointer;\ncolor: var(--color-text);\n\n:hover {\n background-color: var(--color-hover);\n color: black;\n}\n"]))),dn=function(n){var e=n.name,t=n.nativeName,r=n.flag,a=n.capital,c=n.population,i=n.region,o=n.subregion,s=n.topLevelDomain,l=n.currencies,d=void 0===l?[]:l,b=n.languages,j=void 0===b?[]:b,u=n.borders,h=void 0===u?[]:u,m=n.push,O=Object(A.useState)([]),p=Object(N.a)(O,2),x=p[0],g=p[1];return Object(A.useEffect)((function(){var n;h.length&&Y.a.get((n=h,$+"alpha?codes="+n.join(","))).then((function(n){var e=n.data;return g(e.map((function(n){return n.name})))}))}),[h]),Object(M.jsxs)(nn,{children:[Object(M.jsx)(en,{src:r,alt:e}),Object(M.jsxs)("div",{children:[Object(M.jsx)(tn,{children:e}),Object(M.jsxs)(rn,{children:[Object(M.jsxs)(an,{children:[Object(M.jsxs)(cn,{children:[Object(M.jsx)("b",{children:"Native name:"})," ",t]}),Object(M.jsxs)(cn,{children:[Object(M.jsx)("b",{children:"Population:"})," ",c]}),Object(M.jsxs)(cn,{children:[Object(M.jsx)("b",{children:"Region:"})," ",i]}),Object(M.jsxs)(cn,{children:[Object(M.jsx)("b",{children:"Sub Region:"})," ",o]}),Object(M.jsxs)(cn,{children:[Object(M.jsx)("b",{children:"Capital:"})," ",a]})]}),Object(M.jsxs)(an,{children:[Object(M.jsxs)(cn,{children:[Object(M.jsx)("b",{children:"Top Level domain"})," ",s.map((function(n){return Object(M.jsx)("span",{children:n},n)}))]}),Object(M.jsxs)(cn,{children:[Object(M.jsx)("b",{children:"Currency"})," ",d.map((function(n){return Object(M.jsx)("span",{children:n.name},n.code)}))]}),Object(M.jsxs)(cn,{children:[Object(M.jsx)("b",{children:"Languages"})," ",j.map((function(n){return Object(M.jsxs)("span",{children:[n.name," "]},n.name)}))]})]})]}),Object(M.jsxs)(on,{children:[Object(M.jsx)("b",{children:"Border Countries"}),h.length?Object(M.jsx)(sn,{children:x.map((function(n){return Object(M.jsx)(ln,{onClick:function(){return m("/country/".concat(n))},children:n},n)}))}):Object(M.jsx)("span",{children:"There is no border countries"})]})]})]})},bn=function(n){n.match;var e=Object(P.g)().name,t=Object(P.f)(),r=t.push,a=t.goBack,c=Object(A.useState)(null),i=Object(N.a)(c,2),o=i[0],s=i[1];return Object(A.useEffect)((function(){Y.a.get(function(n){return $+"name/"+n}(e)).then((function(n){var e=n.data;return s(e[0])}))}),[e]),Object(M.jsxs)("div",{children:[Object(M.jsxs)(Z,{onClick:a,children:[Object(M.jsx)(I.a,{})," Back"]}),o&&Object(M.jsx)(dn,Object(V.a)({push:r},o))]})},jn=t(46),un=t(45),hn=Object(_.a)(un.a).attrs({styles:{control:function(n){return Object(V.a)(Object(V.a)({},n),{},{backgroundColor:"var(--color-ui-base)",color:"var(--color-text)",bordedRadius:"var(--radius)",padding:"0.25rem",border:"none",boxShadow:"var(--shadow)",height:"50px"})},option:function(n,e){return Object(V.a)(Object(V.a)({},n),{},{cursor:"pointer",color:"var(--color-text)",backgroundColor:e.isSelected?"var(--color-bg)":"var(--color-ui-base)"})}}})(g||(g=Object(R.a)(["\nwidth: 200px;\nborder-radius: var(--radius);\nborder: none;\n\n& > * {\n  box-shadow: var(--shadow);\n}\n\n& * {\n  color: var(--color-text) !important;\n}\n& > div[id] {\n  background-color: var(--color-ui-base);\n}\n\n"]))),mn=_.a.label(f||(f=Object(R.a)(["\nbackground-color: var(--color-ui-base);\npadding: 1rem 2rem;\ndisplay: flex;\nalign-items: center;\n\nborder-radius: var(--radius);\nbox-shadow: var(--shadow);\nwidth: 100%;\nmargin-bottom: 1rem;\n\n@media(min-width: 767px) {\n  margin-bottom: 0;\n  width: 280px;\n}"]))),On=_.a.input.attrs({type:"search",placeholder:"Search for a country..."})(v||(v=Object(R.a)(["\nmargin-left: 2 rem;\nborder: none;\noutline: none;\nbackground-color: var(--color-ui-base);\ncolor: var(--color-text); \n"]))),pn=function(n){var e=n.search,t=n.setSearch;return Object(M.jsxs)(mn,{children:[Object(M.jsx)(I.d,{}),Object(M.jsx)(On,{onChange:function(n){return t(n.target.value)},value:e})]})},xn=[{value:"Africa",label:"Africa"},{value:"America",label:"America"},{value:"Asia",label:"Asia"},{value:"Europe",label:"Europe"},{value:"Oceania",label:"Oceania"}],gn=_.a.div(w||(w=Object(R.a)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: flex-start;\n\n@media(min-width: 767px) {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n"]))),fn=function(n){var e=n.onSearch,t=Object(A.useState)(""),r=Object(N.a)(t,2),a=r[0],c=r[1],i=Object(A.useState)(""),o=Object(N.a)(i,2),s=o[0],l=o[1];return Object(A.useEffect)((function(){var n=(null===s||void 0===s?void 0:s.value)||"";e(a,n)}),[a,s]),Object(M.jsxs)(gn,{children:[Object(M.jsx)(pn,{search:a,setSearch:c}),Object(M.jsx)(hn,{options:xn,placeholder:"Filter by region",isClearable:!0,isSearchable:!1,value:s,onChange:l})]})},vn=_.a.section(y||(y=Object(R.a)(["\n width: 100%;\n padding: 2rem 0;\n\n display: grid;\n grid-template-columns: repeat(1, 1fr);\n gap: 2rem;\n\n@media(min-width: 767px) {\n grid-template-columns: repeat(2, 1fr);\n gap: 2.5rem;\n\n padding: 2.5rem 0;\n}\n\n @media(min-width: 1024px) {\n  grid-template-columns: repeat(4, 1fr);\n  gap: 3rem;\n}\n"]))),wn=function(n){var e=n.children;return Object(M.jsx)(vn,{children:e})},yn=_.a.article(k||(k=Object(R.a)(["\nborder-radius: var(--radius);\nbackground-color: var(--color-ui-base);\nbox-shadow: var(--shadow);\ncursor: pointer;\noverflow: hidden;\n"]))),kn=_.a.img(C||(C=Object(R.a)(["\ndisplay: block;\nwidth: 100%;\nheight: 150px;\nobject-fit: cover;\nobject-position: center;\nbox-shadow: var(--shadow);\n"]))),Cn=_.a.div(S||(S=Object(R.a)(["\npadding: 1rem 1.5rem 2rem;\n"]))),Sn=_.a.h3(E||(E=Object(R.a)(["\ncolor: var(--color-text);\nmargin: 0;\nfont-size: var(--fs-md);\nfont-weight: var(--fw-bold);\n"]))),En=_.a.ul(L||(L=Object(R.a)(["\nlist-style: none;\ncolor: var(--color-text);\nmargin: 0;\npadding: 1rem 0 0;\n"]))),Ln=_.a.li(F||(F=Object(R.a)(["\nfont-size: var(--fs-sm);\nfont-height: 1.5;\nfont-weight: var(--fw-light); \n\n& > b {\n  font-weight: var(--fw-bold);\n}\n"]))),Fn=function(n){var e=n.img,t=n.name,r=n.info,a=void 0===r?[]:r,c=n.onClick;return Object(M.jsxs)(yn,{onClick:c,children:[Object(M.jsx)(kn,{src:e,alt:t}),Object(M.jsxs)(Cn,{children:[Object(M.jsx)(Sn,{children:t}),Object(M.jsx)(En,{children:a.map((function(n){return Object(M.jsxs)(Ln,{children:[Object(M.jsxs)("b",{children:[n.title,":"]})," ",n.description]},n.title)}))})]})]})},An=function(n){var e=n.countries,t=n.setCountries,r=Object(A.useState)(e),a=Object(N.a)(r,2),c=a[0],i=a[1],o=function(n,t){var r=Object(jn.a)(e);t&&(r=r.filter((function(n){return n.region.includes(t)}))),n&&(r=r.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))),i(r)},s=Object(P.f)().push;return Object(A.useEffect)((function(){e.length||Y.a.get("https://restcountries.com/v2/all/?fields=name,capital,flags,population,region").then((function(n){var e=n.data;return t(e)}))}),[e.length,t]),Object(A.useEffect)((function(){o()}),[e]),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(fn,{onSearch:o}),Object(M.jsx)(wn,{children:c.map((function(n){var e={img:n.flags.png,name:n.name,info:[{title:"Population",description:n.population.toLocaleString()},{title:"Region",description:n.region},{title:"Capital",description:n.capital}]};return Object(M.jsx)(Fn,Object(V.a)({onClick:function(){return s("/country/".concat(n.name))}},e),n.name)}))})]})},Tn=function(){return Object(M.jsx)("div",{children:"NOT FOUND"})};var zn=function(){var n=Object(A.useState)([]),e=Object(N.a)(n,2),t=e[0],r=e[1];return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(H,{}),Object(M.jsx)(Q,{children:Object(M.jsxs)(P.c,{children:[Object(M.jsxs)(P.a,{exact:!0,path:"/",children:[" ",Object(M.jsx)(An,{countries:t,setCountries:r})," "]}),Object(M.jsx)(P.a,{path:"/country/:name",component:bn}),Object(M.jsx)(P.a,{component:Tn})]})})]})},Bn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;t(n),r(n),a(n),c(n),i(n)}))};B.a.render(Object(M.jsx)(T.a.StrictMode,{children:Object(M.jsx)(J.a,{children:Object(M.jsx)(zn,{})})}),document.getElementById("root")),Bn()}},[[90,1,2]]]);
//# sourceMappingURL=main.8efa8e62.chunk.js.map