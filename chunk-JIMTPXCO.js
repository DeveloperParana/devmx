import{a as ye}from"./chunk-XUKBPA5N.js";import{a as ve,b as Me}from"./chunk-MAALDF7A.js";import{a as ae}from"./chunk-HUIVMMA5.js";import"./chunk-ZQOXWN4S.js";import{a as R}from"./chunk-2OBVYTLU.js";import{a as S,e as se}from"./chunk-TXJ5PBFW.js";import{b as re}from"./chunk-H733ET44.js";import{a as I}from"./chunk-ZHS65JNW.js";import{c as ce}from"./chunk-FLBC3GGY.js";import"./chunk-KI3VPBOH.js";import"./chunk-YPGVGGAF.js";import"./chunk-MLNPCJDD.js";import"./chunk-UOTKRQ63.js";import"./chunk-BJXILAOS.js";import"./chunk-2IAXMR6M.js";import{a as xe}from"./chunk-3622IAQP.js";import"./chunk-S6X337YX.js";import{a as y}from"./chunk-A3N3AUUJ.js";import"./chunk-2P22RRAG.js";import{o as ne,t as ie,u as oe}from"./chunk-VPARQAQJ.js";import{b as me,d as le,e as de}from"./chunk-27JLR3AO.js";import"./chunk-2K6IALUF.js";import{g as O,i as w,j as b,p as x}from"./chunk-KXTQ2UTD.js";import"./chunk-I7VYXJU2.js";import{a as K,b as X,e as Y,f as Z,g as ee,l as te}from"./chunk-PAP2P7QR.js";import{a as pe,b as ue,c as fe,e as Ce,f as _e,h as he,i as ge}from"./chunk-EC6LD5KM.js";import{a as J}from"./chunk-EDIJ2EBQ.js";import"./chunk-W5KNOAKV.js";import{$b as P,Ba as U,F as B,Ha as V,Hc as M,Jc as C,Kc as _,Nb as u,Ob as E,Pb as N,Rb as Q,Tb as c,Yb as h,a as k,ac as D,bc as i,cc as o,dc as s,fb as T,gb as q,hc as G,je as W,ka as m,kc as v,lb as r,mc as f,t as $,ta as z,ua as H,ub as p,xc as l,yc as F,zc as A}from"./chunk-TEKHUYWQ.js";var Pe=(()=>{class e{router=m(w);destroyRef=m(U);authFacade=m(xe);layoutFacade=m(re);constructor(){this.authFacade.auth$.pipe(y()).subscribe(t=>{t&&(this.layoutFacade.loadNavLinks(t.roles),this.waitingForLogout())}),this.authFacade.load()}waitingForLogout(){this.authFacade.auth$.pipe(y(this.destroyRef)).subscribe(t=>{t===null&&(this.layoutFacade.resetNavLinks(),this.router.navigateByUrl("/conta/autenticacao"))})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(n,d){n&1&&s(0,"devmx-layout")},dependencies:[x,ae],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}"],changeDetection:0})}return e})();var Se=(e,a)=>a.subject.id;function Le(e,a){if(e&1&&l(0),e&2){let t=f().$implicit;A(" com ",t.instructor," ")}}function ke(e,a){if(e&1&&(i(0,"mat-list-item"),s(1,"devmx-icon",11),i(2,"span",8),l(3),o(),i(4,"span",12),l(5),u(6,Le,1,1),o()()),e&2){let t=a.$implicit;r(3),F(t.subject.name),r(2),A("",t.hours," horas "),r(),h(t.instructor?6:-1)}}function Te(e,a){if(e&1&&(i(0,"mat-card-content")(1,"h3"),l(2,"Detalhes"),o(),s(3,"div",9),C(4,"markdown"),C(5,"html"),o()),e&2){let t=f();r(3),c("innerHTML",_(5,3,_(4,1,t.details)),T)}}function Ee(e,a){if(e&1&&(i(0,"mat-card-actions",10)(1,"a",13),s(2,"devmx-icon",14),i(3,"span"),l(4,"Inscreva-se"),o()()()),e&2){let t=f();r(),c("href",t.link,q)}}function Ae(e,a){if(e&1&&(i(0,"mat-card",0)(1,"mat-card-header",1)(2,"a",2),s(3,"devmx-icon",3),o(),i(4,"mat-card-title",4),l(5),o(),i(6,"a",5),s(7,"devmx-icon",6),o()(),i(8,"mat-list")(9,"mat-list-item"),s(10,"devmx-icon",7),i(11,"span",8),l(12),o()()(),i(13,"mat-card-content")(14,"h3"),l(15,"Objetivo"),o(),s(16,"div",9),C(17,"markdown"),C(18,"html"),o(),i(19,"mat-list"),P(20,ke,7,3,"mat-list-item",null,Se),o(),u(22,Te,6,5,"mat-card-content")(23,Ee,5,1,"mat-card-actions",10),o()),e&2){let t=a;r(5),F(t.name),r(7),F(t.institution.name),r(4),c("innerHTML",_(18,7,_(17,5,t.goal)),T),r(4),D(t.subjects),r(2),h(t.details?22:-1),r(),h(t.link?23:-1)}}var De=(()=>{class e{route=m(O);course$=this.route.data.pipe(B(t=>"course"in t),$(t=>t.course));static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["devmx-course-details"]],decls:2,vars:3,consts:[[1,"course-card"],[1,"course-card-header","sticky"],["mat-card-avatar","","routerLink","..","mat-icon-button",""],["name","arrow/left"],[1,"course-card-header-title"],["routerLink","..","mat-icon-button",""],["name","close-cross"],["matListItemIcon","","name","building/school"],["matListItemTitle",""],[3,"innerHTML"],[1,"course-card-actions"],["matListItemIcon","","name","arrow/chevron-right"],["matListItemLine",""],["target","_blank","rel","noopener noreferrer","mat-stroked-button","",3,"href"],["name","external-link"]],template:function(n,d){if(n&1&&(u(0,Ae,24,9,"mat-card",0),C(1,"async")),n&2){let g;h((g=_(1,1,d.course$))?0:-1,g)}},dependencies:[x,b,ge,pe,Ce,he,fe,_e,ue,te,Z,ee,Y,X,K,oe,ne,ie,J,ve,Me,W],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]{height:100%;box-shadow:none;position:relative}[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-weight:600;font-size:1.2em}[_nghost-%COMP%]   .course-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-line;line-height:1.2em;word-wrap:break-word}[_nghost-%COMP%]   .course-card-header[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}[_nghost-%COMP%]   .course-card-header[_ngcontent-%COMP%]   .mat-mdc-card-avatar[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   .course-card-actions[_ngcontent-%COMP%]     .mdc-button__label{gap:.6em;display:flex;align-items:center}"],changeDetection:0})}return e})();var Fe=(()=>{class e{filterChange=V();static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["devmx-course-ead-filter"]],outputs:{filterChange:"filterChange"},decls:3,vars:1,consts:[[3,"change"],[3,"value"]],template:function(n,d){n&1&&(i(0,"mat-chip-listbox",0),v("change",function(L){return d.filterChange.emit(L.value)}),i(1,"mat-chip-option",1),l(2," EAD "),o()()),n&2&&(r(),c("value",!0))},dependencies:[de,le,me],encapsulation:2,changeDetection:0})}return e})();var Ie=(e,a)=>a.id,Re=()=>[ce,I,import("./chunk-QQ3DFMVY.js").then(e=>e.AsyncPipe)],je=()=>[ye,b],$e=e=>[e],Be=e=>({right:e}),ze=e=>({outlets:e}),He=e=>["/","academia",e];function Ue(e,a){if(e&1&&(i(0,"a",4),s(1,"devmx-course-card",5),o()),e&2){let t=f().$implicit;c("routerLink",M(8,He,M(6,ze,M(4,Be,M(2,$e,t.id))))),r(),c("data",t)}}function Ve(e,a){e&1&&s(0,"devmx-skeleton",6),e&2&&c("rows",3)}function qe(e,a){e&1&&(u(0,Ue,2,10)(1,Ve,1,1),E(2,0,je,null,1),Q(0,-1))}function Ne(e,a){if(e&1){let t=G();i(0,"div",1),P(1,qe,4,0,null,null,Ie),o(),s(3,"div",2),i(4,"footer")(5,"devmx-paginator",3),v("pageChange",function(d){z(t);let g=f(2);return H(g.onPageChange(d))}),o()()}if(e&2){let t=a;r(),D(t.data),r(4),c("size",10)("items",t.items)}}function Qe(e,a){if(e&1&&(u(0,Ne,6,2),C(1,"async")),e&2){let t,n=f();h((t=_(1,1,n.courseFacade.response$))?0:-1,t)}}function Ge(e,a){e&1&&(i(0,"div",1),s(1,"devmx-skeleton",6)(2,"devmx-skeleton",6)(3,"devmx-skeleton",6),o()),e&2&&(r(),c("rows",3),r(),c("rows",2),r(),c("rows",3))}var Oe=(()=>{class e{courseFacade=m(S);router=m(w);route=m(O);constructor(){this.route.queryParams.pipe(y()).subscribe(this.onQueryParams)}onQueryParams=t=>{let{page:n=0,size:d=10}=t;this.courseFacade.setParams({page:n,size:d}),this.courseFacade.load()};onEADFilterChange(t){let n=this.mergeParams({ead:t});this.router.navigate([],{queryParams:n})}mergeParams(t){return k(k({},this.route.snapshot.queryParams),t)}onPageChange(t){this.router.navigate([],{queryParams:t})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["devmx-courses"]],decls:6,vars:0,consts:[[3,"filterChange"],[1,"courses-container"],[1,"spacer"],[3,"pageChange","size","items"],[3,"routerLink"],[3,"data"],[3,"rows"]],template:function(n,d){n&1&&(i(0,"header")(1,"devmx-course-ead-filter",0),v("filterChange",function(L){return d.onEADFilterChange(L)}),o()(),u(2,Qe,2,3)(3,Ge,4,3),E(4,2,Re,null,3),N(500))},dependencies:[Fe,I,x],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;padding:.4em .8em}[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%]{gap:1em;padding:1em;display:grid;grid-auto-flow:dense;grid-template-columns:repeat(4,1fr)}@media (max-width: 1918px){[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 1278px){[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 767px){[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{flex:1;display:flex}[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0})}return e})();var we=e=>se(m(S),e.params);var Qt=[{path:"",data:{breadcrumb:"Academia"},title:"Academia",canActivate:[R("member")],component:Pe,children:[{path:"administracao",canActivate:[R("academic","director","manager","staff")],loadChildren:()=>import("./chunk-ZIB6TWHX.js").then(e=>e.academyFeatureAdminRoutes)},{path:"",data:{breadcrumb:"Cursos"},title:"Cursos",component:Oe},{path:":id",data:{breadcrumb:e=>e.course.name},resolve:{course:we},component:De,outlet:"right"}]}];export{Pe as AcademyFeatureShellComponent,Qt as academyFeatureShellRoutes};
