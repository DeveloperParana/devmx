import{a as Fe}from"./chunk-H2NENVBL.js";import{a as ye}from"./chunk-QO5VEQVM.js";import"./chunk-PLROVZFR.js";import"./chunk-AUORC2F5.js";import{a as q}from"./chunk-ZHS65JNW.js";import{a as Q}from"./chunk-WE4XRG6V.js";import{b as xe}from"./chunk-KEKON2PL.js";import{h as Re}from"./chunk-XZXDZXVR.js";import"./chunk-EVGUK2YL.js";import{c as Pe}from"./chunk-JMFPL2WB.js";import"./chunk-L6JZTMID.js";import"./chunk-X4DJDWG6.js";import"./chunk-SBAV4Z7U.js";import{a as Le}from"./chunk-2JFX46Y6.js";import"./chunk-OUHM5675.js";import"./chunk-6UCPZRI7.js";import"./chunk-2HAUDUV5.js";import{c as $,d as Me,g as Ee}from"./chunk-3P3YGXVG.js";import{a as z}from"./chunk-ZY67Z3LE.js";import{a as M}from"./chunk-A3N3AUUJ.js";import"./chunk-MTMSRDZL.js";import{r as ge,s as he,t as S}from"./chunk-WJBOH2N4.js";import{b as Ve,c as Be,i as Ae,j as Ne}from"./chunk-7HDVHEIU.js";import"./chunk-FFVTGNUU.js";import"./chunk-S2ACWC3V.js";import"./chunk-EVUXJHDY.js";import{g as V,i as B,j as A,p as F}from"./chunk-KXTQ2UTD.js";import"./chunk-I7VYXJU2.js";import{a as pe,d as de,e as ue,f as fe,g as ve,i as _e,l as Ce}from"./chunk-TPOWQI3K.js";import{a as Se,b as De,c as Oe,d as we,f as Te,g as be,h as Ie,i as ke}from"./chunk-A6OBOLX6.js";import{a as N,h as ae,i as re,m as se,p as me,s as le,x as ce}from"./chunk-5R3537JV.js";import"./chunk-U457VICD.js";import{$b as E,Ba as K,F as T,Fb as Z,Ha as X,Hc as O,Ia as G,Jc as v,Kc as _,Nb as C,Ob as H,Pb as ee,Rb as te,Tb as l,Yb as g,Yd as ne,_b as k,ac as P,ba as J,bc as i,cc as a,dc as m,gb as D,hc as L,je as ie,ka as p,kc as y,lb as o,mc as d,pe as oe,t as j,ta as b,u as W,ua as I,ub as f,xb as Y,xc as c,yc as h,zc as R}from"./chunk-TEKHUYWQ.js";var $e=(()=>{class e{router=p(B);destroyRef=p(K);authFacade=p(z);layoutFacade=p(xe);ngOnInit(){this.authFacade.auth$.pipe(M(this.destroyRef)).subscribe(t=>{t&&(this.layoutFacade.loadNavLinks(t.roles),this.waitingForLogout())}),this.authFacade.load()}waitingForLogout(){this.authFacade.auth$.pipe(M(this.destroyRef)).subscribe(t=>{t===null&&(this.layoutFacade.resetNavLinks(),this.router.navigateByUrl("/conta/autenticacao"))})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["devmx-event-feature-shell"]],decls:1,vars:0,template:function(n,r){n&1&&m(0,"devmx-layout")},dependencies:[F,ye],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}"],changeDetection:0})}return e})();var ze=e=>Ee(p($),e.params);var Ue=(()=>{class e{transform(t){switch(t){case"in-person":return"Presencial";case"online":return"Online";case"mixed":return"H\xEDbrido"}}static \u0275fac=function(n){return new(n||e)};static \u0275pipe=Y({name:"eventFormat",type:e,pure:!0})}return e})();function Xe(e,s){if(e&1&&m(0,"img",7),e&2){let t=d();l("src",t.cover,D)("alt",t.title)}}function Ye(e,s){if(e&1&&(i(0,"mat-list-item"),m(1,"devmx-icon",14),i(2,"div",9),c(3),a()()),e&2){let t=d();o(3),h(t.address)}}function Ze(e,s){if(e&1&&(i(0,"mat-list-item"),m(1,"devmx-icon",16),i(2,"div",9),c(3),a()()),e&2){let t=s.$implicit;o(3),h(t.title)}}function et(e,s){if(e&1&&(i(0,"mat-list")(1,"h3",15),c(2,"Apresenta\xE7\xF5es"),a(),E(3,Ze,4,1,"mat-list-item",null,k),a()),e&2){let t=d();o(3),P(t.presentations)}}function tt(e,s){if(e&1&&(i(0,"mat-list-item"),m(1,"img",17),v(2,"photo"),i(3,"div",9),c(4),a()()),e&2){let t=s.$implicit;o(),l("src",_(2,3,t==null||t.profile==null?null:t.profile.photo),D)("alt",t.displayName),o(3),h(t.displayName)}}function nt(e,s){if(e&1&&(i(0,"mat-list")(1,"h3",15),c(2,"Organizadores"),a(),E(3,tt,5,5,"mat-list-item",null,k),a()),e&2){let t=d();o(3),P(t.leaders)}}function it(e,s){if(e&1&&(i(0,"mat-list-item"),m(1,"img",17),v(2,"photo"),i(3,"div",9),c(4),a()()),e&2){let t=s.$implicit;o(),l("src",_(2,3,t.user.profile==null?null:t.user.profile.photo),D)("alt",t.user.displayName),o(3),h(t.user.displayName)}}function ot(e,s){if(e&1){let t=L();i(0,"form",18)(1,"devmx-rsvp-button",19),y("statusChange",function(){b(t);let r=d(2);return I(r.onStatusChange())}),a()(),i(2,"mat-list")(3,"h3",15),c(4,"Presen\xE7as"),a(),E(5,it,5,5,"mat-list-item",null,k),a()}if(e&2){let t=d(2);l("formGroup",t.rsvpForm),o(5),P(s)}}function at(e,s){if(e&1&&(i(0,"mat-card",0)(1,"mat-card-header",1)(2,"a",2),m(3,"devmx-icon",3),a(),i(4,"mat-card-title",4),c(5),a(),i(6,"a",5),m(7,"devmx-icon",6),a()(),C(8,Xe,1,2,"img",7),i(9,"mat-list")(10,"mat-list-item"),m(11,"devmx-icon",8),i(12,"div",9),c(13),v(14,"eventFormat"),a()(),i(15,"mat-list-item"),m(16,"devmx-icon",10),i(17,"div",9),c(18),a()(),i(19,"mat-list-item"),m(20,"devmx-icon",11),i(21,"div",9),c(22),v(23,"date"),a()(),C(24,Ye,4,1,"mat-list-item"),a(),i(25,"mat-card-content"),m(26,"devmx-markdown",12),a(),C(27,et,5,0,"mat-list")(28,nt,5,0,"mat-list")(29,ot,7,1),v(30,"async"),i(31,"mat-card-header"),m(32,"img",13),v(33,"photo"),i(34,"mat-card-title"),c(35),a(),i(36,"mat-card-subtitle"),c(37," Organizador "),a()()()),e&2){let t,n=s,r=d();o(5),R(" ",n.title," "),o(3),g(n.cover?8:-1),o(5),h(_(14,13,n.format)),o(5),R("",n.time,"h"),o(4),h(_(23,15,n.date)),o(2),g(n.address?24:-1),o(2),l("content",n.description),o(),g(n.presentations.length?27:-1),o(),g(n.leaders.length?28:-1),o(),g((t=_(30,17,r.rsvpFacade.response$))?29:-1,t),o(3),l("src",_(33,19,n.owner.profile==null?null:n.owner.profile.photo),D)("alt",n.owner.displayName),o(3),R(" ",n.owner.displayName," ")}}var je=(()=>{class e{route=p(V);rsvpForm=new Ne;authFacade=p(z);rsvpFacade=p(Me);event$=this.route.data.pipe(T(t=>"event"in t),j(t=>t.event),J(t=>this.setRSVPEvent(t.id)));constructor(){let t=this.authFacade.auth$.pipe(T(r=>!!r),j(r=>r.id)),n=this.rsvpFacade.response$.pipe(T(r=>r.length>0));W([t,n]).pipe(M()).subscribe(([r,u])=>{let x=u.find(U=>U.user.id===r);x&&this.setRSVPStatus(x)})}setRSVPEvent=t=>{this.rsvpForm.patchValue({event:t}),this.rsvpFacade.loadConfirmed(t)};setRSVPStatus({status:t}){this.rsvpForm.patchValue({status:t},{emitEvent:!1})}onStatusChange(){this.rsvpForm.valid&&this.rsvpFacade.create(this.rsvpForm.getRawValue())}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["devmx-event-details"]],decls:2,vars:3,consts:[[1,"event-card"],[1,"event-card-header","sticky"],["mat-card-avatar","","routerLink","..","mat-icon-button",""],["name","arrow/left"],[1,"event-card-header-title"],["routerLink","..","mat-icon-button",""],["name","close-cross"],["mat-card-image","",3,"src","alt"],["matListItemIcon","","name","transport/flag-pin"],["matListItemTitle",""],["matListItemIcon","","name","alarm-clock-alert"],["matListItemIcon","","name","calendar"],[3,"content"],["mat-card-avatar","",3,"src","alt"],["matListItemIcon","","name","transport/map-pin"],["mat-subheader",""],["matListItemIcon","","name","presentation"],["matListItemAvatar","",3,"src","alt"],[1,"rsvp-button",3,"formGroup"],["formControlName","status",3,"statusChange"]],template:function(n,r){if(n&1&&(C(0,at,38,21,"mat-card",0),v(1,"async")),n&2){let u;g((u=_(1,1,r.event$))?0:-1,u)}},dependencies:[F,A,ce,se,ae,re,me,le,Be,ke,Se,Ie,Oe,Te,be,we,De,Ce,fe,ve,de,ue,_e,pe,S,he,N,Ue,Le,Fe,ie,oe],styles:["[_nghost-%COMP%]{flex:1;height:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 16px;font-size:1.2em;font-weight:500;opacity:.6}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-line;line-height:1.2em;word-wrap:break-word}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]   .mat-mdc-card-avatar[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   .rsvp-button[_ngcontent-%COMP%]{padding:1em}"],changeDetection:0})}return e})();var Ge=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["devmx-event-home"]],decls:0,vars:0,template:function(n,r){},dependencies:[S,Re],encapsulation:2,changeDetection:0})}return e})();var He=(()=>{class e{ascText=G("");descText=G("");sortChange=X();current=Z("asc");toggle(){this.current()==="asc"?this.current.set("desc"):this.current.set("asc"),this.sortChange.emit(this.current())}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["devmx-sort-direction"]],inputs:{ascText:[1,"ascText"],descText:[1,"descText"]},outputs:{sortChange:"sortChange"},exportAs:["sortDirection"],decls:4,vars:2,consts:[["mat-icon-button","",3,"click","ngClass"],["name","arrow/up"]],template:function(n,r){n&1&&(i(0,"span"),c(1),a(),i(2,"button",0),y("click",function(){return r.toggle()}),m(3,"devmx-icon",1),a()),n&2&&(o(),h(r.current()==="asc"?r.ascText():r.descText()),o(),l("ngClass",r.current()))},dependencies:[S,ge,N,ne],styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{transition:transform .6s cubic-bezier(.175,.885,.32,1.275)}[_nghost-%COMP%]   button.asc[_ngcontent-%COMP%]{transform:rotate(-360deg)}[_nghost-%COMP%]   button.desc[_ngcontent-%COMP%]{transform:rotate(540deg)}"]})}return e})();var rt=(e,s)=>s.id,st=()=>[Pe,q,import("./chunk-QQ3DFMVY.js").then(e=>e.AsyncPipe)],mt=()=>[Ae,A],lt=e=>[e],ct=e=>({right:e}),pt=e=>({outlets:e}),dt=e=>["/","eventos",e];function ut(e,s){if(e&1&&(i(0,"a",5),m(1,"devmx-event-card",6),a()),e&2){let t=d().$implicit;l("routerLink",O(8,dt,O(6,pt,O(4,ct,O(2,lt,t.id))))),o(),l("data",t)}}function ft(e,s){e&1&&m(0,"devmx-skeleton",7),e&2&&l("rows",3)}function vt(e,s){e&1&&(C(0,ut,2,10)(1,ft,1,1),H(2,0,mt,null,1),te(0,-1))}function _t(e,s){if(e&1){let t=L();i(0,"div",2),E(1,vt,4,0,null,null,rt),a(),m(3,"div",3),i(4,"footer")(5,"devmx-paginator",4),y("pageChange",function(r){b(t);let u=d(2);return I(u.onPageChange(r))}),a()()}if(e&2){let t=s;o(),P(t.data),o(4),l("size",10)("items",t.items)}}function Ct(e,s){if(e&1&&(C(0,_t,6,2),v(1,"async")),e&2){let t,n=d();g((t=_(1,1,n.eventFacade.response$))?0:-1,t)}}function gt(e,s){e&1&&(i(0,"div",2),m(1,"devmx-skeleton",7)(2,"devmx-skeleton",7)(3,"devmx-skeleton",7),a()),e&2&&(o(),l("rows",3),o(),l("rows",2),o(),l("rows",3))}var qe=(()=>{class e{router=p(B);route=p(V);eventFacade=p($);constructor(){this.route.queryParams.pipe(M()).subscribe(this.onQueryParams)}onQueryParams=t=>{let{title:n="",format:r="",date:u="asc"}=t,{page:x=0,size:U=10}=t,Qe={title:n,format:r},We={date:u};this.eventFacade.setParams({page:x,size:U,filter:Qe,sort:We}),this.eventFacade.load()};onFilterChange(t){let n={format:t};this.router.navigate([],{queryParams:n})}onSortChange(t){let n={date:t};this.router.navigate([],{queryParams:n})}onPageChange(t){this.router.navigate([],{queryParams:t})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=f({type:e,selectors:[["devmx-events"]],decls:7,vars:0,consts:[[3,"filterChange"],[3,"sortChange"],[1,"events-container"],[1,"spacer"],[3,"pageChange","size","items"],[3,"routerLink"],[1,"event-card",3,"data"],[3,"rows"]],template:function(n,r){n&1&&(i(0,"header")(1,"devmx-event-filter",0),y("filterChange",function(x){return r.onFilterChange(x)}),a(),i(2,"devmx-sort-direction",1),y("sortChange",function(x){return r.onSortChange(x)}),a()(),C(3,Ct,2,3)(4,gt,4,3),H(5,3,st,null,4),ee(500))},dependencies:[Ve,He,q,F],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;padding:.4em .8em}[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]{gap:1em;padding:1em;display:grid;grid-auto-flow:dense;grid-template-columns:repeat(4,1fr)}@media (max-width: 1918px){[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 1278px){[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 767px){[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]{width:100%;max-width:100%;box-sizing:border-box}[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0})}return e})();var In=[{path:"",data:{breadcrumb:"Eventos"},canActivate:[Q("member")],component:$e,children:[{path:"administracao",canActivate:[Q("leader","director","manager","staff")],loadChildren:()=>import("./chunk-SP25T6YY.js").then(e=>e.eventFeatureAdminRoutes)},{path:"",component:qe},{path:":id",data:{breadcrumb:e=>e.event.title},resolve:{event:ze},component:je,outlet:"right"},{path:"",component:Ge}]}];export{$e as EventFeatureShellComponent,In as eventFeatureShellRoutes};
