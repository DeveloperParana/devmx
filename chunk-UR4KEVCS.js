import{a as G,b as I}from"./chunk-2POEB7DK.js";import{c as U}from"./chunk-C7SLAMGT.js";import"./chunk-WK53HQNR.js";import{a as B}from"./chunk-ZHS65JNW.js";import{a as A}from"./chunk-WDSWN242.js";import{c as $}from"./chunk-LINV6GUW.js";import"./chunk-2YKGLQQL.js";import"./chunk-B7JMTDAV.js";import{a as z,b as L}from"./chunk-SBAV4Z7U.js";import{a as Q}from"./chunk-2EW4OCWF.js";import"./chunk-AY37A6YV.js";import{a as q}from"./chunk-A3N3AUUJ.js";import"./chunk-JS3QJ7O4.js";import"./chunk-HSPBE7XI.js";import"./chunk-S2ACWC3V.js";import"./chunk-TPOWQI3K.js";import"./chunk-A6OBOLX6.js";import{a as V}from"./chunk-5R3537JV.js";import"./chunk-EK453PHD.js";import{g as T,h as k,i as R,j as u,p as C}from"./chunk-KXTQ2UTD.js";import"./chunk-U457VICD.js";import"./chunk-I7VYXJU2.js";import{$b as F,Hc as g,Jc as J,Kc as E,Nb as x,Ob as M,Rb as v,Tb as c,Yb as y,a as h,ac as j,bc as i,cc as o,dc as r,hc as w,je as S,ka as d,kc as f,lb as l,mc as O,ta as b,ua as P,ub as _,xc as D}from"./chunk-TEKHUYWQ.js";var X=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["devmx-career-feature-page"]],decls:10,vars:0,consts:[[1,"app-toolbar"],["routerLink","/",1,"app-logo"],["src","devmx.svg","height","48","alt","DevMX"],[1,"app-title"],[1,"spacer"],["target","_blank","rel","noreferrer","title","Github","href","https://github.com/DeveloperParana/devmx"],["name","github"]],template:function(t,a){t&1&&(i(0,"devmx-app-shell")(1,"mat-toolbar",0)(2,"a",1),r(3,"img",2),o(),i(4,"h1",3),D(5,"Vagas"),o(),r(6,"span",4),i(7,"a",5),r(8,"devmx-icon",6),o()(),r(9,"router-outlet"),o())},dependencies:[C,k,u,L,z,Q,V],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}[_nghost-%COMP%]   .app-toolbar[_ngcontent-%COMP%]{display:flex;gap:.4em}[_nghost-%COMP%]   .app-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:48px}[_nghost-%COMP%]   .app-title[_ngcontent-%COMP%]{font-size:.9em;font-weight:500;opacity:.4;margin:0}[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}"],changeDetection:0})}return e})();var Y=(e,m)=>m.id,Z=()=>[U,u],ee=e=>[e],ne=e=>({right:e}),te=e=>({outlets:e}),oe=e=>["/","carreiras",e];function ie(e,m){if(e&1&&(i(0,"a",4),r(1,"devmx-job-opening-card",5),o()),e&2){let n=O().$implicit;c("routerLink",g(8,oe,g(6,te,g(4,ne,g(2,ee,n.id))))),l(),c("data",n)}}function re(e,m){e&1&&r(0,"devmx-skeleton",6),e&2&&c("rows",3)}function ae(e,m){e&1&&(x(0,ie,2,10)(1,re,1,1),M(2,0,Z,null,1),v(0,-1))}function pe(e,m){if(e&1){let n=w();i(0,"div",1),F(1,ae,4,0,null,null,Y),o(),r(3,"div",2),i(4,"footer")(5,"devmx-paginator",3),f("pageChange",function(a){b(n);let p=O();return P(p.onPageChange(a))}),o()()}if(e&2){let n=m;l(),j(n.data),l(4),c("size",10)("items",n.items)}}var H=(()=>{class e{jobOpeningFacade=d(A);router=d(R);route=d(T);constructor(){this.route.queryParams.pipe(q()).subscribe(this.onQueryParams)}onQueryParams=n=>{let{page:t=0,size:a=10}=n,{experience:p="",mode:s=""}=n,K={experience:p,mode:s};this.jobOpeningFacade.setParams({page:t,size:a,filter:K}),this.jobOpeningFacade.load()};onExperienceFilterChange(n){let t=this.mergeParams({experience:n});this.router.navigate([],{queryParams:t})}onModeFilterChange(n){let t=this.mergeParams({mode:n});this.router.navigate([],{queryParams:t})}mergeParams(n){return h(h({},this.route.snapshot.queryParams),n)}onPageChange(n){this.router.navigate([],{queryParams:n})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=_({type:e,selectors:[["devmx-job-openings"]],decls:5,vars:3,consts:[[3,"filterChange"],[1,"job-openings-container"],[1,"spacer"],[3,"pageChange","size","items"],[3,"routerLink"],[1,"job-opening-card",3,"data"],[3,"rows"]],template:function(t,a){if(t&1&&(i(0,"header")(1,"devmx-job-opening-experience-filter",0),f("filterChange",function(s){return a.onExperienceFilterChange(s)}),o(),i(2,"devmx-job-opening-mode-filter",0),f("filterChange",function(s){return a.onModeFilterChange(s)}),o()(),x(3,pe,6,2),J(4,"async")),t&2){let p;l(3),y((p=E(4,1,a.jobOpeningFacade.response$))?3:-1,p)}},dependencies:[G,I,$,B,C,S],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column;background-color:#fff}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;padding:.4em .8em;gap:1em}[_nghost-%COMP%]   .job-openings-container[_ngcontent-%COMP%]{gap:1em;padding:1em;display:grid;grid-auto-flow:dense;grid-template-columns:repeat(4,1fr)}@media (max-width: 1918px){[_nghost-%COMP%]   .job-openings-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 1278px){[_nghost-%COMP%]   .job-openings-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 767px){[_nghost-%COMP%]   .job-openings-container[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]   .job-openings-container[_ngcontent-%COMP%]   .job-opening-card[_ngcontent-%COMP%]{width:100%;max-width:100%;box-sizing:border-box}[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0})}return e})();var Je=[{path:"",title:"Vagas",component:X,children:[{path:"",component:H}]}];export{X as CareerFeaturePageComponent,Je as careerFeaturePageRoutes};
