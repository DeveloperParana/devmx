import{a as Oe}from"./chunk-ZTJS4K5V.js";import{a as Se}from"./chunk-M5BYPXOP.js";import"./chunk-ZQOXWN4S.js";import{a as Y}from"./chunk-Q33OVU5J.js";import{h as Xe}from"./chunk-73QBZNVE.js";import"./chunk-Q2N7RZTH.js";import{b as Fe}from"./chunk-WKFJTKSD.js";import{a as W}from"./chunk-ZHS65JNW.js";import{c as be}from"./chunk-BLJCB4Q7.js";import"./chunk-2XST3EDK.js";import"./chunk-MLNPCJDD.js";import{a as Ne,b as ze,c as Ue,d as je}from"./chunk-FVH3EPWM.js";import"./chunk-UOTKRQ63.js";import{a as $e}from"./chunk-WD4JQH2Z.js";import"./chunk-VAO4SSMZ.js";import"./chunk-2IAXMR6M.js";import{c as w,d as De,g as we}from"./chunk-V6KASOE3.js";import"./chunk-XIUDFJWJ.js";import{a as z}from"./chunk-TPJZ2OYR.js";import"./chunk-ZTWYID37.js";import"./chunk-XYJHVZQT.js";import{b as qe,d as Qe,e as Ge,i as He,j as We,k as Ye,l as Je,m as Ke}from"./chunk-DAURILCW.js";import"./chunk-O3T3UZHL.js";import"./chunk-VVQ6JEVH.js";import"./chunk-HGOTYYGI.js";import"./chunk-AND6K73U.js";import"./chunk-BJXILAOS.js";import{a as M}from"./chunk-A3N3AUUJ.js";import{g as A,i as V,j as $,p as S,r as Ee,v as Me,w as Pe,x as D}from"./chunk-6BGAZ7SQ.js";import"./chunk-I7VYXJU2.js";import{a as _e,d as fe,e as Ce,f as ge,g as he,i as xe,l as ye}from"./chunk-PAP2P7QR.js";import{a as Te,b as Ie,c as ke,d as Le,f as Re,g as Be,h as Ae,i as Ve}from"./chunk-EC6LD5KM.js";import{a as N,h as le,i as ce,m as pe,p as de,s as ue,x as ve}from"./chunk-EDIJ2EBQ.js";import"./chunk-W5KNOAKV.js";import{$b as P,Ba as ee,F as T,Fb as ie,Ha as te,Hc as E,Ia as Q,Jc as v,Kc as g,Lc as H,Nb as f,Ob as G,Pb as ae,Rb as oe,Tb as l,Yb as C,Yd as re,_b as L,a as j,ac as F,ba as Z,bc as a,cc as r,dc as s,gb as b,hc as R,je as me,ka as d,kc as x,lb as o,mc as u,pe as se,t as q,ta as I,u as X,ua as k,ub as h,xb as ne,xc as c,yc as y,zc as B}from"./chunk-TEKHUYWQ.js";var Ze=(()=>{class e{router=d(V);destroyRef=d(ee);authFacade=d(z);layoutFacade=d(Fe);ngOnInit(){this.authFacade.auth$.pipe(M(this.destroyRef)).subscribe(t=>{t&&(this.layoutFacade.loadNavLinks(t.roles),this.waitingForLogout())}),this.authFacade.load()}waitingForLogout(){this.authFacade.auth$.pipe(M(this.destroyRef)).subscribe(t=>{t===null&&(this.layoutFacade.resetNavLinks(),this.router.navigateByUrl("/conta/autenticacao"))})}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["devmx-event-feature-shell"]],decls:1,vars:0,template:function(i,n){i&1&&s(0,"devmx-layout")},dependencies:[S,Se],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}"],changeDetection:0})}return e})();var et=e=>we(d(w),e.params);var tt=(()=>{class e{transform(t){switch(t){case"in-person":return"Presencial";case"online":return"Online";case"mixed":return"H\xEDbrido"}}static \u0275fac=function(i){return new(i||e)};static \u0275pipe=ne({name:"eventFormat",type:e,pure:!0})}return e})();var pt=e=>["/","evento",e];function dt(e,m){if(e&1&&s(0,"img",7),e&2){let t=u();l("src",t.cover,b)("alt",t.title)}}function ut(e,m){if(e&1&&(a(0,"mat-list-item"),s(1,"devmx-icon",16),a(2,"div",9),c(3),r()()),e&2){let t=u();o(3),y(t.address)}}function vt(e,m){if(e&1&&s(0,"devmx-maps-button",18),e&2){let t=u();l("data",t)}}function _t(e,m){if(e&1&&s(0,"devmx-youtube-button",19),e&2){let t=u();l("data",t)}}function ft(e,m){if(e&1&&(a(0,"mat-card-content",12),s(1,"devmx-calendar-button",17),f(2,vt,1,1,"devmx-maps-button",18),v(3,"showEventAddress"),f(4,_t,1,1,"devmx-youtube-button",19),v(5,"showEventLink"),s(6,"devmx-whats-app-button",20),r()),e&2){let t=m;o(),l("data",t),o(),C(g(3,4,t.format)&&t.address?2:-1),o(2),C(g(5,6,t.format)&&t.link?4:-1),o(2),l("data",t)}}function Ct(e,m){if(e&1&&(a(0,"mat-list-item"),s(1,"devmx-icon",22),a(2,"div",9),c(3),r()()),e&2){let t=m.$implicit;o(3),y(t.title)}}function gt(e,m){if(e&1&&(a(0,"mat-list")(1,"h3",21),c(2,"Apresenta\xE7\xF5es"),r(),P(3,Ct,4,1,"mat-list-item",null,L),r()),e&2){let t=u();o(3),F(t.presentations)}}function ht(e,m){if(e&1&&(a(0,"mat-list-item"),s(1,"img",23),v(2,"photo"),a(3,"div",9),c(4),r()()),e&2){let t=m.$implicit;o(),l("src",g(2,3,t==null||t.profile==null?null:t.profile.photo),b)("alt",t.displayName),o(3),y(t.displayName)}}function xt(e,m){if(e&1&&(a(0,"mat-list")(1,"h3",21),c(2,"Organizadores"),r(),P(3,ht,5,5,"mat-list-item",null,L),r()),e&2){let t=u();o(3),F(t.leaders)}}function yt(e,m){if(e&1&&(a(0,"mat-list-item"),s(1,"img",23),v(2,"photo"),a(3,"div",9),c(4),r()()),e&2){let t=m.$implicit;o(),l("src",g(2,3,t.user.profile==null?null:t.user.profile.photo),b)("alt",t.user.displayName),o(3),y(t.user.displayName)}}function Et(e,m){if(e&1){let t=R();a(0,"form",24)(1,"devmx-rsvp-button",25),x("statusChange",function(){I(t);let n=u(2);return k(n.onStatusChange())}),r()(),a(2,"mat-list")(3,"h3",21),c(4,"Presen\xE7as"),r(),P(5,yt,5,5,"mat-list-item",null,L),r()}if(e&2){let t=u(2);l("formGroup",t.rsvpForm),o(5),F(m)}}function Mt(e,m){if(e&1&&(a(0,"mat-card",0)(1,"mat-card-header",1)(2,"a",2),s(3,"devmx-icon",3),r(),a(4,"mat-card-title",4),c(5),r(),a(6,"a",5),s(7,"devmx-icon",6),r()(),f(8,dt,1,2,"img",7),a(9,"mat-list")(10,"mat-list-item"),s(11,"devmx-icon",8),a(12,"div",9),c(13),v(14,"eventFormat"),r()(),a(15,"mat-list-item"),s(16,"devmx-icon",10),a(17,"div",9),c(18),v(19,"date"),r()(),a(20,"mat-list-item"),s(21,"devmx-icon",11),a(22,"div",9),c(23),v(24,"date"),r()(),f(25,ut,4,1,"mat-list-item"),r(),f(26,ft,7,8,"mat-card-content",12),v(27,"async"),a(28,"mat-card-content"),s(29,"devmx-markdown-view",13),a(30,"a",14),c(31," Ir para p\xE1gina do evento "),r()(),f(32,gt,5,0,"mat-list")(33,xt,5,0,"mat-list")(34,Et,7,1),v(35,"async"),a(36,"mat-card-header"),s(37,"img",15),v(38,"photo"),a(39,"mat-card-title"),c(40),r(),a(41,"mat-card-subtitle"),c(42," Organizador "),r()()()),e&2){let t,i,n=m,p=u();o(5),B(" ",n.title," "),o(3),C(n.cover?8:-1),o(5),y(g(14,15,n.format)),o(5),y(H(19,17,n.date,"shortDate")),o(5),B("",H(24,20,n.date,"shortTime"),"h"),o(2),C(n.address?25:-1),o(),C((t=g(27,23,p.eventFacade.page$))?26:-1,t),o(3),l("content",n.description),o(),l("routerLink",E(29,pt,n.id)),o(2),C(n.presentations.length?32:-1),o(),C(n.leaders.length?33:-1),o(),C((i=g(35,25,p.rsvpFacade.response$))?34:-1,i),o(3),l("src",g(38,27,n.owner.profile==null?null:n.owner.profile.photo),b)("alt",n.owner.displayName),o(3),B(" ",n.owner.displayName," ")}}var nt=(()=>{class e{route=d(A);rsvpForm=new Ke;authFacade=d(z);eventFacade=d(w);rsvpFacade=d(De);event$=this.route.data.pipe(T(t=>"event"in t),q(t=>t.event),Z(t=>this.setRSVPEvent(t.id)));constructor(){let t=this.authFacade.auth$.pipe(T(n=>!!n),q(n=>n.id)),i=this.rsvpFacade.response$.pipe(T(n=>n.length>0));X([t,i]).pipe(M()).subscribe(([n,p])=>{let _=p.find(U=>U.user.id===n);_&&this.setRSVPStatus(_)})}setRSVPEvent=t=>{this.rsvpForm.patchValue({event:t}),this.rsvpFacade.loadConfirmed(t)};setRSVPStatus({status:t}){this.rsvpForm.patchValue({status:t},{emitEvent:!1})}onStatusChange(){this.rsvpForm.valid&&this.rsvpFacade.create(this.rsvpForm.getRawValue())}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["devmx-event-details"]],decls:2,vars:3,consts:[[1,"event-card"],[1,"event-card-header","sticky"],["mat-card-avatar","","routerLink","..","mat-icon-button",""],["name","arrow/left"],[1,"event-card-header-title"],["routerLink","..","mat-icon-button",""],["name","close-cross"],["mat-card-image","",3,"src","alt"],["matListItemIcon","","name","transport/flag-pin"],["matListItemTitle",""],["matListItemIcon","","name","calendar"],["matListItemIcon","","name","alarm-clock-alert"],[1,"event-card-buttons"],[3,"content"],["mat-raised-button","",3,"routerLink"],["mat-card-avatar","",3,"src","alt"],["matListItemIcon","","name","transport/map-pin"],["text","Definir lembrete",3,"data"],["text","Ver no mapa",3,"data"],["text","Assistir",3,"data"],["text","Compartilhar",3,"data"],["mat-subheader",""],["matListItemIcon","","name","presentation"],["matListItemAvatar","",3,"src","alt"],[1,"rsvp-button",3,"formGroup"],["formControlName","status",3,"statusChange"]],template:function(i,n){if(i&1&&(f(0,Mt,43,31,"mat-card",0),v(1,"async")),i&2){let p;C((p=g(1,1,n.event$))?0:-1,p)}},dependencies:[S,$,ve,pe,le,ce,de,ue,Ge,ze,Ue,Ne,je,Ve,Te,Ae,ke,Re,Be,Le,Ie,ye,ge,he,fe,Ce,xe,_e,D,Ee,Pe,N,tt,$e,He,We,Oe,me,se],styles:["[_nghost-%COMP%]{flex:1;height:100%;display:flex;flex-direction:column}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]{height:100%}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 16px;font-size:1.2em;font-weight:500;opacity:.6}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{white-space:pre-line;line-height:1.2em;word-wrap:break-word}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]   .mat-mdc-card-avatar[_ngcontent-%COMP%]{margin-bottom:0}[_nghost-%COMP%]   .event-card-buttons[_ngcontent-%COMP%]{gap:1em;display:flex;flex-flow:row wrap}[_nghost-%COMP%]   .rsvp-button[_ngcontent-%COMP%]{padding:1em}"],changeDetection:0})}return e})();var it=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["devmx-event-home"]],decls:0,vars:0,template:function(i,n){},dependencies:[D,Xe],encapsulation:2,changeDetection:0})}return e})();var at=(()=>{class e{ascText=Q("");descText=Q("");sortChange=te();current=ie("asc");toggle(){this.current()==="asc"?this.current.set("desc"):this.current.set("asc"),this.sortChange.emit(this.current())}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["devmx-sort-direction"]],inputs:{ascText:[1,"ascText"],descText:[1,"descText"]},outputs:{sortChange:"sortChange"},exportAs:["sortDirection"],decls:4,vars:2,consts:[["mat-icon-button","",3,"click","ngClass"],["name","arrow/up"]],template:function(i,n){i&1&&(a(0,"span"),c(1),r(),a(2,"button",0),x("click",function(){return n.toggle()}),s(3,"devmx-icon",1),r()),i&2&&(o(),y(n.current()==="asc"?n.ascText():n.descText()),o(),l("ngClass",n.current()))},dependencies:[D,Me,N,re],styles:["[_nghost-%COMP%]{display:inline-flex;align-items:center}[_nghost-%COMP%]   button[_ngcontent-%COMP%]{transition:transform .6s cubic-bezier(.175,.885,.32,1.275)}[_nghost-%COMP%]   button.asc[_ngcontent-%COMP%]{transform:rotate(-360deg)}[_nghost-%COMP%]   button.desc[_ngcontent-%COMP%]{transform:rotate(540deg)}"]})}return e})();var Pt=(e,m)=>m.id,Ft=()=>[be,W,import("./chunk-QQ3DFMVY.js").then(e=>e.AsyncPipe)],St=()=>[Ye,$],Dt=e=>[e],wt=e=>({right:e}),bt=e=>({outlets:e}),Ot=e=>["/","eventos",e];function Tt(e,m){if(e&1&&(a(0,"a",7),s(1,"devmx-event-card",8),r()),e&2){let t=u().$implicit;l("routerLink",E(8,Ot,E(6,bt,E(4,wt,E(2,Dt,t.id))))),o(),l("data",t)}}function It(e,m){e&1&&s(0,"devmx-skeleton",9),e&2&&l("rows",3)}function kt(e,m){e&1&&(f(0,Tt,2,10)(1,It,1,1),G(2,0,St,null,1),oe(0,-1))}function Lt(e,m){if(e&1){let t=R();a(0,"div",4),P(1,kt,4,0,null,null,Pt),r(),s(3,"div",5),a(4,"footer")(5,"devmx-paginator",6),x("pageChange",function(n){I(t);let p=u(2);return k(p.onPageChange(n))}),r()()}if(e&2){let t=m;o(),F(t.data),o(4),l("size",10)("items",t.items)}}function Rt(e,m){if(e&1&&(f(0,Lt,6,2),v(1,"async")),e&2){let t,i=u();C((t=g(1,1,i.eventFacade.response$))?0:-1,t)}}function Bt(e,m){e&1&&(a(0,"div",4),s(1,"devmx-skeleton",9)(2,"devmx-skeleton",9)(3,"devmx-skeleton",9),r()),e&2&&(o(),l("rows",3),o(),l("rows",2),o(),l("rows",3))}var ot=(()=>{class e{router=d(V);route=d(A);eventFacade=d(w);constructor(){this.route.queryParams.pipe(M()).subscribe(this.onQueryParams)}onQueryParams=t=>{let{title:i="",format:n="",date:p="asc",time:_=""}=t,{page:U=0,size:rt=10}=t,mt={title:i,format:n},{start:J,end:K}=t,st={date:p};this.eventFacade.setParams({page:U,size:rt,filter:mt,sort:st}),J&&K?this.eventFacade.loadDateRange(new Date(J),new Date(K)):_==="until"?this.eventFacade.loadUntil():this.eventFacade.load()};onFilterChange(t){let i=this.mergeQueryParams({format:t});this.router.navigate([],{queryParams:i})}onTimeChange(t){let i={time:t};this.router.navigate([],{queryParams:i})}onRangeChange({start:t,end:i}){let n=this.mergeQueryParams({start:t,end:i});this.router.navigate([],{queryParams:n})}onSortChange(t){let i=this.mergeQueryParams({date:t});this.router.navigate([],{queryParams:i})}onPageChange(t){this.router.navigate([],{queryParams:t})}mergeQueryParams(t){return j(j({},this.route.snapshot.queryParams),t)}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=h({type:e,selectors:[["devmx-events"]],decls:11,vars:0,consts:[[3,"filterChange"],[3,"timeChange"],[3,"rangeChange"],[3,"sortChange"],[1,"events-container"],[1,"spacer"],[3,"pageChange","size","items"],[3,"routerLink"],[1,"event-card",3,"data"],[3,"rows"]],template:function(i,n){i&1&&(a(0,"header")(1,"section")(2,"devmx-event-filter",0),x("filterChange",function(_){return n.onFilterChange(_)}),r(),a(3,"devmx-event-time",1),x("timeChange",function(_){return n.onTimeChange(_)}),r()(),a(4,"div")(5,"devmx-event-date-range",2),x("rangeChange",function(_){return n.onRangeChange(_)}),r(),a(6,"devmx-sort-direction",3),x("sortChange",function(_){return n.onSortChange(_)}),r()()(),f(7,Rt,2,3)(8,Bt,4,3),G(9,7,Ft,null,8),ae(500))},dependencies:[Je,Qe,qe,at,W,S],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;padding:.4em .8em}[_nghost-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{gap:1em;display:flex;align-items:baseline}[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]{gap:1em;padding:1em;display:grid;grid-auto-flow:dense;grid-template-columns:repeat(4,1fr)}@media (max-width: 1918px){[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 1278px){[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 767px){[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]   .events-container[_ngcontent-%COMP%]   .event-card[_ngcontent-%COMP%]{width:100%;max-width:100%;box-sizing:border-box}[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0})}return e})();var Xn=[{path:"",data:{breadcrumb:"Eventos"},canActivate:[Y("member")],component:Ze,children:[{path:"administracao",canActivate:[Y("leader","director","manager","staff")],loadChildren:()=>import("./chunk-MYMD7E64.js").then(e=>e.eventFeatureAdminRoutes)},{path:"",title:"Eventos",component:ot},{path:":id",data:{breadcrumb:e=>e.event.title},title:"Evento",resolve:{event:et},component:nt,outlet:"right"},{path:"",component:it}]}];export{Ze as EventFeatureShellComponent,Xn as eventFeatureShellRoutes};
