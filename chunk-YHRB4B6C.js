import{a as he,c as Pe,f as xe,g as ve}from"./chunk-4UL4NXP6.js";import{a as se}from"./chunk-6O4U64UM.js";import{a as ae}from"./chunk-HUIVMMA5.js";import"./chunk-ZQOXWN4S.js";import"./chunk-VE4FGS76.js";import"./chunk-LFAX4DK3.js";import{a as I}from"./chunk-2OBVYTLU.js";import"./chunk-NIICEBMY.js";import"./chunk-XRCHBHTT.js";import{b as oe}from"./chunk-H733ET44.js";import{a as E}from"./chunk-ZHS65JNW.js";import{c as re}from"./chunk-FLBC3GGY.js";import"./chunk-KI3VPBOH.js";import"./chunk-YPGVGGAF.js";import"./chunk-MLNPCJDD.js";import{a as k,b as Q,c as W}from"./chunk-SFTIEISQ.js";import"./chunk-UOTKRQ63.js";import"./chunk-BJXILAOS.js";import{a as ge}from"./chunk-NOICPS42.js";import"./chunk-3SNV2MVI.js";import"./chunk-2IAXMR6M.js";import{a as Ce}from"./chunk-3622IAQP.js";import"./chunk-S6X337YX.js";import{a as M}from"./chunk-A3N3AUUJ.js";import"./chunk-2P22RRAG.js";import{t as ne,u as ie}from"./chunk-VPARQAQJ.js";import"./chunk-27JLR3AO.js";import"./chunk-2K6IALUF.js";import{g as w,i as S,j as b,p as P}from"./chunk-KXTQ2UTD.js";import"./chunk-I7VYXJU2.js";import{a as K,e as X,f as Y,g as Z,i as ee,l as te}from"./chunk-PAP2P7QR.js";import{a as le,b as me,c as ce,d as pe,f as de,g as _e,h as fe,i as ue}from"./chunk-EC6LD5KM.js";import{a as J}from"./chunk-EDIJ2EBQ.js";import"./chunk-W5KNOAKV.js";import{$b as O,Ba as $,F as A,Hc as v,Jc as g,Kc as h,Nb as c,Ob as x,Pb as B,Qb as q,Rb as U,Tb as l,Yb as u,_b as V,ac as D,bc as n,cc as a,dc as s,gb as y,hc as N,je as H,ka as m,kc as L,lb as o,mc as _,t as R,ta as z,ua as j,ub as C,xc as p,yc as G,zc as F}from"./chunk-TEKHUYWQ.js";var ye=(()=>{class e{router=m(S);destroyRef=m($);authenticationFacade=m(Ce);layoutFacade=m(oe);ngOnInit(){this.authenticationFacade.auth$.pipe(M(this.destroyRef)).subscribe(t=>{t&&(this.layoutFacade.loadNavLinks(t.roles),this.waitingForLogout())}),this.authenticationFacade.load()}waitingForLogout(){this.authenticationFacade.auth$.pipe(M(this.destroyRef)).subscribe(t=>{t===null&&(this.layoutFacade.resetNavLinks(),this.router.navigateByUrl("/conta/autenticacao"))})}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=C({type:e,selectors:[["devmx-presentation-feature-shell"]],decls:1,vars:0,template:function(i,d){i&1&&s(0,"devmx-layout")},dependencies:[P,ae],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}"],changeDetection:0})}return e})();var Oe=e=>W(m(k),e.params);var be=()=>[xe];function ke(e,r){if(e&1&&s(0,"img",7),e&2){let t=_();l("src",t.cover,y)("alt",t.title)}}function Te(e,r){if(e&1&&s(0,"devmx-presentation-embed",12),e&2){let t=_(2);l("data",t)}}function Le(e,r){e&1&&(n(0,"div",13)(1,"div")(2,"blockquote")(3,"p"),p(4,'"O conhecimento sem fronteiras transcende barreiras"'),a(),n(5,"cite"),p(6,"\u2014 Guilherme Siquinelli"),a()()()())}function Ee(e,r){e&1&&(c(0,Te,1,1)(1,Le,7,0),x(2,0,be,null,1),q(0,-1))}function Ie(e,r){if(e&1&&(n(0,"mat-list-item"),s(1,"devmx-icon",15),n(2,"div",9)(3,"a",16),p(4),a()()()),e&2){let t=r.$implicit;o(3),l("href",t,y),o(),F(" ",t," ")}}function Re(e,r){if(e&1&&(n(0,"mat-list")(1,"h3",14),p(2,"Materiais"),a(),O(3,Ie,5,2,"mat-list-item",null,V),a()),e&2){let t=_();o(3),D(t.resources)}}function Ae(e,r){if(e&1&&(n(0,"mat-card",0)(1,"mat-card-header",1)(2,"a",2),s(3,"devmx-icon",3),a(),n(4,"mat-card-title",4),p(5),a(),n(6,"a",5),s(7,"devmx-icon",6),a()(),c(8,ke,1,2,"img",7),n(9,"mat-list")(10,"mat-list-item"),s(11,"devmx-icon",8),n(12,"div",9),p(13),g(14,"presentationFormat"),a()()(),c(15,Ee,4,0),n(16,"mat-card-content"),s(17,"devmx-markdown-view",10),a(),c(18,Re,5,0,"mat-list"),n(19,"mat-card-header"),s(20,"img",11),g(21,"photo"),n(22,"mat-card-title"),p(23),a(),n(24,"mat-card-subtitle"),p(25," Autor "),a()()()),e&2){let t=r;o(5),F(" ",t.title," "),o(3),u(t.cover?8:-1),o(5),G(h(14,9,t.format)),o(2),u(t.link?15:-1),o(2),l("content",t.description),o(),u(t.resources.length?18:-1),o(2),l("src",h(21,11,t.owner.profile==null?null:t.owner.profile.photo),y)("alt",t.owner.displayName),o(3),F(" ",t.owner.displayName," ")}}var De=(()=>{class e{route=m(w);presentation$=this.route.data.pipe(A(t=>"presentation"in t),R(t=>t.presentation));static \u0275fac=function(i){return new(i||e)};static \u0275cmp=C({type:e,selectors:[["devmx-presentation-details"]],decls:2,vars:3,consts:[[1,"presentation-card"],[1,"presentation-card-header","sticky"],["mat-card-avatar","","routerLink","..","mat-icon-button",""],["name","arrow/left"],[1,"presentation-card-header-title"],["routerLink","..","mat-icon-button",""],["name","close-cross"],["mat-card-image","",3,"src","alt"],["matListItemIcon","","name","user-presentation"],["matListItemTitle",""],[3,"content"],["mat-card-avatar","",3,"src","alt"],[3,"data"],[1,"presentation-placeholder"],["mat-subheader",""],["matListItemIcon","","name","external-link"],["target","_blank","rel","noopener noreferrer",3,"href"]],template:function(i,d){if(i&1&&(c(0,Ae,26,13,"mat-card",0),g(1,"async")),i&2){let f;u((f=h(1,1,d.presentation$))?0:-1,f)}},dependencies:[P,b,ue,le,fe,ce,de,_e,pe,me,te,Y,Z,X,ee,K,ie,ne,J,ge,he,se,H],styles:["[_nghost-%COMP%]{flex:1;height:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .presentation-card[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .presentation-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 16px;font-size:1.2em;font-weight:500;opacity:.6}[_nghost-%COMP%]   .presentation-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-line;line-height:1.2em;word-wrap:break-word}[_nghost-%COMP%]   .presentation-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link:hover{text-decoration:underline}[_nghost-%COMP%]   .presentation-card-header[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}[_nghost-%COMP%]   .presentation-card-header[_ngcontent-%COMP%]   .mat-mdc-card-avatar[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   .presentation-placeholder[_ngcontent-%COMP%]{position:relative;width:100%;padding-top:56.25%;overflow:hidden}[_nghost-%COMP%]   .presentation-placeholder[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:calc(100% - 2em);height:calc(100% - 2em);border:0;aspect-ratio:16/9;padding:1em;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .presentation-placeholder[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:1.2em;line-height:1.2em;opacity:.8}[_nghost-%COMP%]   .presentation-placeholder[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%]   cite[_ngcontent-%COMP%]{margin:.4em;display:flex;font-size:1em;opacity:.4}"],changeDetection:0})}return e})();var ze=(e,r)=>r.id,je=()=>[E,re,import("./chunk-QQ3DFMVY.js").then(e=>e.AsyncPipe)],$e=()=>[ve,b],Be=e=>[e],qe=e=>({right:e}),Ue=e=>({outlets:e}),Ve=e=>["/","apresentacoes",e];function Ne(e,r){if(e&1&&(n(0,"a",4),s(1,"devmx-presentation-card",5),a()),e&2){let t=_().$implicit;l("routerLink",v(8,Ve,v(6,Ue,v(4,qe,v(2,Be,t.id))))),o(),l("data",t)}}function Ge(e,r){e&1&&s(0,"devmx-skeleton",6),e&2&&l("rows",3)}function He(e,r){e&1&&(c(0,Ne,2,10)(1,Ge,1,1),x(2,0,$e,null,1),U(0,-1))}function Qe(e,r){if(e&1){let t=N();n(0,"div",1),O(1,He,4,0,null,null,ze),a(),s(3,"div",2),n(4,"footer")(5,"devmx-paginator",3),L("pageChange",function(d){z(t);let f=_(2);return j(f.onPageChange(d))}),a()()}if(e&2){let t=r;o(),D(t.data),o(4),l("size",10)("items",t.items)}}function We(e,r){if(e&1&&(c(0,Qe,6,2),g(1,"async")),e&2){let t,i=_();u((t=h(1,1,i.presentationFacade.response$))?0:-1,t)}}function Je(e,r){e&1&&(n(0,"div",1),s(1,"devmx-skeleton",6)(2,"devmx-skeleton",6)(3,"devmx-skeleton",6),a()),e&2&&(o(),l("rows",3),o(),l("rows",2),o(),l("rows",3))}var Fe=(()=>{class e{presentationFacade=m(k);router=m(S);route=m(w);constructor(){this.route.queryParams.pipe(M()).subscribe(this.onQueryParams)}onQueryParams=t=>{let{page:i=0,size:d=10}=t,{title:f="",format:T=""}=t,we={title:f,format:T};this.presentationFacade.setParams({page:i,size:d,filter:we}),this.presentationFacade.load()};onFilterChange(t){let i={format:t};this.router.navigate([],{queryParams:i})}onPageChange(t){this.router.navigate([],{queryParams:t})}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=C({type:e,selectors:[["devmx-presentations"]],decls:6,vars:0,consts:[[3,"filterChange"],[1,"presentations-container"],[1,"spacer"],[3,"pageChange","size","items"],[3,"routerLink"],[3,"data"],[3,"rows"]],template:function(i,d){i&1&&(n(0,"header")(1,"devmx-presentation-filter",0),L("filterChange",function(T){return d.onFilterChange(T)}),a()(),c(2,We,2,3)(3,Je,4,3),x(4,2,je,null,3),B(500))},dependencies:[E,Pe,P],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;padding:.4em .8em}[_nghost-%COMP%]   .presentations-container[_ngcontent-%COMP%]{gap:1em;padding:1em;display:grid;grid-auto-flow:dense;grid-template-columns:repeat(4,1fr)}@media (max-width: 1918px){[_nghost-%COMP%]   .presentations-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 1278px){[_nghost-%COMP%]   .presentations-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 767px){[_nghost-%COMP%]   .presentations-container[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]   .presentations-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{flex:1;display:flex}[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0})}return e})();var Nt=[{path:"",providers:[...Q()],data:{breadcrumb:"Apresenta\xE7\xF5es"},canActivate:[I("member")],component:ye,children:[{path:"administracao",canActivate:[I("speaker","director","manager","staff")],loadChildren:()=>import("./chunk-CIU4NFLE.js").then(e=>e.presentationFeatureAdminRoutes)},{path:"",title:"Apresenta\xE7\xF5es",component:Fe},{path:":id",data:{breadcrumb:e=>e.presentation.title},title:"Apresenta\xE7\xE3o",resolve:{presentation:Oe},component:De,outlet:"right"}]}];export{ye as PresentationFeatureShellComponent,Nt as presentationFeatureShellRoutes};
