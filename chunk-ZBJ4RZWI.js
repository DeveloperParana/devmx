import{a as Ue}from"./chunk-XUKBPA5N.js";import{a as Ee}from"./chunk-JQW63IXS.js";import{a as me,b as ue,c as de,f as pe,g as fe}from"./chunk-C2HTKUNV.js";import{a as it,b as wt}from"./chunk-AYG3YMSX.js";import{d as yt,e as De}from"./chunk-HCYHNZV2.js";import{a as Oe,b as Fe}from"./chunk-YEG4EZPQ.js";import{a as Ft,b as je}from"./chunk-BXNVTP2G.js";import{a as Te,b as Ve,c as Ae,d as Re,e as $e,f as Ne,g as Le,h as ze,i as Be,j as Ge,k as qe}from"./chunk-S5YNRUC2.js";import{a as Dt,b as Ie}from"./chunk-QI34HWLF.js";import{a as ye,b as we}from"./chunk-AFH22WZE.js";import{a as ke}from"./chunk-VPMLF55Z.js";import{a as $,b as L,c as xt,e as _e}from"./chunk-2VPO5IL5.js";import{a as ge}from"./chunk-EL2X2KCH.js";import{a as Pe}from"./chunk-TICJBGV4.js";import{d as X,e as Y}from"./chunk-JT2DD3I4.js";import{a as Z,b as ve,c as tt,e as et,f as nt,g as ot}from"./chunk-S2HSXFZX.js";import"./chunk-PP7QIMAL.js";import{a as Ce,b as Pt,c as I}from"./chunk-YBVNTHNC.js";import"./chunk-UOFKNBGB.js";import"./chunk-H2KJYRW3.js";import"./chunk-GX5I6M3U.js";import{a as Se}from"./chunk-2AFHEO5G.js";import"./chunk-3SNV2MVI.js";import"./chunk-2IAXMR6M.js";import{a as xe}from"./chunk-CW3OAA4T.js";import{a as k}from"./chunk-A3N3AUUJ.js";import"./chunk-OCN2RHRZ.js";import{l as Wt,n as R,r as ce,s as K,t as le,u as P}from"./chunk-CVM2AHGP.js";import{a as oe,c as ie,f as re,g as ae,h as W,i as se,k as J,l as j}from"./chunk-PAP2P7QR.js";import{a as vt,b as he,c as Me,e as Ot,f as be,i as St}from"./chunk-EC6LD5KM.js";import{a as D,c as H,e as E,h as Q,i as Jt,j as V,l as C,m as Kt,n as Xt,o as Mt,p as Yt,q as Zt,r as te,s as ee,t as ne,w as bt,x as A}from"./chunk-EDIJ2EBQ.js";import{b as Ut,c as Ht,d as Qt,i as q,j as U}from"./chunk-QOJBU3AI.js";import{g as G,h as Gt,i as Ct,j as qt,p as ht}from"./chunk-KXTQ2UTD.js";import"./chunk-W5KNOAKV.js";import"./chunk-I7VYXJU2.js";import{$ as N,$b as O,F as Lt,Fb as zt,J as pt,Jc as y,Kc as w,L as ft,Nb as h,Sc as Bt,Tb as m,Yb as x,ac as S,bc as a,cc as r,dc as d,ec as _t,fc as gt,hc as M,j as at,je as F,k as ut,ka as u,kc as p,lb as c,mc as f,t as st,ta as _,u as dt,ua as g,ub as b,wc as z,xc as l,yc as B,zc as T}from"./chunk-TEKHUYWQ.js";var He=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["devmx-academy-feature-admin"]],decls:1,vars:0,template:function(e,i){e&1&&d(0,"router-outlet")},dependencies:[Gt],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}"],changeDetection:0})}return n})();var sn=(n,o)=>o.id;function cn(n,o){if(n&1&&(a(0,"mat-list-option",7),l(1),r()),n&2){let t=o.$implicit;m("value",t),c(),T(" ",t.name," ")}}function ln(n,o){if(n&1){let t=M();a(0,"mat-dialog-content",2)(1,"mat-form-field"),d(2,"input",3),r(),a(3,"button",4),p("click",function(){_(t);let i=f();return g(i.addInstitution())}),d(4,"devmx-icon",5),a(5,"span"),l(6,"Adicionar institui\xE7\xE3o"),r()(),a(7,"mat-selection-list",6,0),O(9,cn,2,2,"mat-list-option",7,sn),r(),a(11,"devmx-paginator",8),p("pageChange",function(i){_(t);let s=f();return g(s.onPageChange(i))}),r()(),a(12,"mat-dialog-actions",9)(13,"button",10),p("click",function(){_(t);let i=z(8),s=f();return g(s.close(i.selectedOptions.selected[0]))}),l(14," Salvar "),r(),a(15,"button",11),p("click",function(){_(t);let i=f();return g(i.ref.close())}),l(16,"Cancelar"),r()()}if(n&2){let t=o,e=f();c(2),m("formControl",e.search),c(2),m("size",18),c(3),m("multiple",!1),c(2),S(t.data),c(2),m("items",t.items)}}var Ke=(()=>{class n{institutionFacade=u(L);ref=u(Z);search=new C("");#t=new ut(!1);addInstitution$=this.#t.asObservable();constructor(){this.search.valueChanges.pipe(pt(300)).pipe(k()).subscribe(t=>{let e=t||"";this.institutionFacade.setFilter({name:e}),this.institutionFacade.load()}),this.institutionFacade.load()}addInstitution(){this.#t.value===!0&&this.#t.next(!1),this.#t.next(!0)}close(t){this.ref.close(t.value)}onPageChange({page:t,size:e}){this.institutionFacade.setParams({page:t,size:e}),this.institutionFacade.load()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["devmx-admin-search-institution"]],decls:4,vars:3,consts:[["institutions",""],["mat-dialog-title",""],[1,"dialog-content"],["matInput","","placeholder","Qual institui\xE7\xE3o procura?",3,"formControl"],["type","button","mat-button","",1,"add-institution",3,"click"],["name","plus",3,"size"],[1,"institutions",3,"multiple"],[3,"value"],[3,"pageChange","items"],["align","end",1,"dialog-actions"],["mat-raised-button","","type","button",3,"click"],["mat-button","","type","button",3,"click"]],template:function(e,i){if(e&1&&(a(0,"h2",1),l(1,"Encontre institui\xE7\xF5es"),r(),h(2,ln,17,4),y(3,"async")),e&2){let s;c(2),x((s=w(3,1,i.institutionFacade.response$))?2:-1,s)}},dependencies:[A,H,Q,Mt,U,q,I,et,nt,ot,P,R,Y,X,D,j,J,W,F],styles:["[_nghost-%COMP%]{display:block;width:24em}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:0}[_nghost-%COMP%]   .institutions[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .add-institution[_ngcontent-%COMP%]{align-self:flex-end}[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:.6em}[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]{padding:0 16px;display:flex;justify-content:space-between}[_nghost-%COMP%]   .dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:space-between;margin-left:-8px}"],changeDetection:0})}return n})();var mn=(n,o)=>o.id;function un(n,o){if(n&1&&(a(0,"mat-list-option",7),l(1),r()),n&2){let t=o.$implicit;m("value",t),c(),T(" ",t.name," ")}}function dn(n,o){if(n&1){let t=M();a(0,"mat-dialog-content",2)(1,"mat-form-field"),d(2,"input",3),r(),a(3,"button",4),p("click",function(){_(t);let i=f();return g(i.addSubject())}),d(4,"devmx-icon",5),a(5,"span"),l(6,"Adicionar assunto"),r()(),a(7,"mat-selection-list",6,0),O(9,un,2,2,"mat-list-option",7,mn),r(),a(11,"devmx-paginator",8),p("pageChange",function(i){_(t);let s=f();return g(s.onPageChange(i))}),r()(),a(12,"mat-dialog-actions",9)(13,"button",10),p("click",function(){_(t);let i=z(8),s=f();return g(s.close(i.selectedOptions.selected))}),l(14," Salvar "),r(),a(15,"button",11),p("click",function(){_(t);let i=f();return g(i.ref.close())}),l(16,"Cancelar"),r()()}if(n&2){let t=o,e=f();c(2),m("formControl",e.search),c(2),m("size",18),c(5),S(t.data),c(2),m("items",t.items)}}var Xe=(()=>{class n{subjectFacade=u(xt);ref=u(Z);search=new C("");#t=new ut(!1);addSubject$=this.#t.asObservable();constructor(){this.search.valueChanges.pipe(pt(300)).pipe(k()).subscribe(t=>{let e=t||"";this.subjectFacade.setFilter({name:e}),this.subjectFacade.load()}),this.subjectFacade.load()}addSubject(){this.#t.value===!0&&this.#t.next(!1),this.#t.next(!0)}close(t){this.ref.close(t.map(e=>e.value))}onPageChange({page:t,size:e}){this.subjectFacade.setParams({page:t,size:e})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["devmx-admin-search-subjects"]],decls:4,vars:3,consts:[["subjects",""],["mat-dialog-title",""],[1,"dialog-content"],["matInput","","placeholder","Qual assunto procura?",3,"formControl"],["type","button","mat-button","",1,"add-subject",3,"click"],["name","plus",3,"size"],[1,"subjects"],[3,"value"],[3,"pageChange","items"],["align","end",1,"dialog-actions"],["mat-raised-button","","type","button",3,"click"],["mat-button","","type","button",3,"click"]],template:function(e,i){if(e&1&&(a(0,"h2",1),l(1,"Encontre assuntos"),r(),h(2,dn,17,3),y(3,"async")),e&2){let s;c(2),x((s=w(3,1,i.subjectFacade.response$))?2:-1,s)}},dependencies:[A,H,Q,Mt,U,q,I,et,nt,ot,P,R,Y,X,D,j,J,W,F],styles:["[_nghost-%COMP%]{display:block;width:24em;max-width:calc(98vw - 32px)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:0}[_nghost-%COMP%]   .subjects[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .add-subject[_ngcontent-%COMP%]{align-self:flex-end}[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]{padding:0 16px;display:flex;justify-content:space-between}[_nghost-%COMP%]   .dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:space-between;margin-left:-8px}"],changeDetection:0})}return n})();var lt=class{dialog;formService;constructor(o,t){this.dialog=o,this.formService=t}openInstitution(o=null){let t={id:it({label:"ID",type:"hidden",value:o&&o.id?o.id:""}),name:it({label:"Nome",type:"text",value:o&&o.name?o.name:"",errors:{required:"Obrigat\xF3rio"}})},e=wt(t),i=(o?"Editar":"Cadastrar")+" institui\xE7\xE3o";return this.formService.open({title:i,fields:t,form:e})}searchInstitution(){return this.dialog.open(Ke)}};function Ye(){return{provide:lt,deps:[tt,yt]}}var mt=class{dialog;formService;constructor(o,t){this.dialog=o,this.formService=t}openSubject(o=null){let t={id:it({label:"ID",type:"hidden",value:o&&o.id?o.id:""}),name:it({label:"Assunto",type:"text",value:o&&o.name?o.name:"",errors:{required:"Obrigat\xF3rio"}})},e=wt(t),i=(o?"Editar":"Cadastrar")+" assunto";return this.formService.open({title:i,fields:t,form:e})}searchSubjects(){return this.dialog.open(Xe)}};function Ze(){return{provide:mt,deps:[tt,yt]}}var pn=(n,o)=>o.id;function fn(n,o){if(n&1&&(a(0,"mat-list-option",4),l(1),r()),n&2){let t=o.$implicit;m("value",t),c(),T(" ",t.name," ")}}function _n(n,o){if(n&1){let t=M();a(0,"mat-dialog-content",2)(1,"mat-selection-list",3,0),O(3,fn,2,2,"mat-list-option",4,pn),r(),a(5,"devmx-paginator",5),p("pageChange",function(i){_(t);let s=f();return g(s.onPageChange(i))}),r()(),a(6,"mat-dialog-actions",6)(7,"button",7),p("click",function(){_(t);let i=z(2),s=f();return g(s.close(i.selectedOptions.selected))}),l(8," Selecionar "),r(),a(9,"button",8),p("click",function(){_(t);let i=f();return g(i.ref.close())}),l(10,"Cancelar"),r()()}if(n&2){let t=o,e=f();c(),m("multiple",e.data.multiple),c(2),S(t.data),c(2),m("items",t.items)}}var tn=(()=>{class n{institutionFacade=u(L);ref=u(Z);data=u(ve);constructor(){this.institutionFacade.load()}onSearchChange(t){this.institutionFacade.setFilter(t),this.institutionFacade.load()}onPageChange({page:t,size:e}){this.institutionFacade.setParams({page:t,size:e}),this.institutionFacade.load()}close(t){this.data.multiple?this.ref.close(t.map(e=>e.value)):this.ref.close(t[0].value)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["devmx-select-institution"]],decls:4,vars:3,consts:[["institution",""],["mat-dialog-title",""],[1,"dialog-content"],[1,"institutions",3,"multiple"],[3,"value"],[3,"pageChange","items"],["align","end",1,"dialog-actions"],["mat-raised-button","","type","button",3,"click"],["mat-button","","type","button",3,"click"]],template:function(e,i){if(e&1&&(a(0,"h2",1),l(1,"Encontre institui\xE7\xF5es"),r(),h(2,_n,11,2),y(3,"async")),e&2){let s;c(2),x((s=w(3,1,i.institutionFacade.response$))?2:-1,s)}},dependencies:[A,I,et,nt,ot,P,R,j,J,W,F],styles:["[_nghost-%COMP%]{display:block;width:24em;max-width:calc(98vw - 32px)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:0}[_nghost-%COMP%]   .institutions[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:.6em}[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]{padding:0 16px;display:flex;justify-content:space-between}[_nghost-%COMP%]   .dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:space-between;margin-left:-8px}"],changeDetection:0})}return n})();var Et=class{dialog;constructor(o){this.dialog=o}open(o={}){return this.dialog.open(tn,{data:o}).afterClosed().pipe(ft(1))}};function en(){return{provide:Et,deps:[tt]}}var nn=[en(),Ye(),je(),Ze(),De(),Ie()];var on=n=>_e(u($),n.params);function Cn(n,o){n&1&&(a(0,"th",15),l(1,"Nome do curso"),r())}function hn(n,o){if(n&1&&(a(0,"td",16),l(1),r()),n&2){let t=o.$implicit;c(),B(t.name)}}function Mn(n,o){n&1&&(a(0,"th",15),l(1,"Criado por"),r())}function bn(n,o){if(n&1&&(a(0,"td",16),l(1),r()),n&2){let t=o.$implicit;c(),B(t.owner.displayName)}}function xn(n,o){n&1&&d(0,"th",15)}function Pn(n,o){if(n&1){let t=M();a(0,"td",16)(1,"button",17),p("click",function(){let i=_(t).$implicit,s=f(2);return g(s.openDelete(i))}),d(2,"devmx-icon",18),r()()}}function vn(n,o){n&1&&d(0,"tr",19)}function On(n,o){n&1&&d(0,"tr",20)}function Sn(n,o){if(n&1){let t=M();a(0,"table",5),_t(1,6),h(2,Cn,2,0,"th",7)(3,hn,2,1,"td",8),gt(),_t(4,9),h(5,Mn,2,0,"th",7)(6,bn,2,1,"td",8),gt(),_t(7,10),h(8,xn,1,0,"th",7)(9,Pn,3,0,"td",8),gt(),h(10,vn,1,0,"tr",11)(11,On,1,0,"tr",12),r(),a(12,"mat-card-actions",13)(13,"devmx-paginator",14),p("pageChange",function(i){_(t);let s=f();return g(s.onPageChange(i))}),r()()}if(n&2){let t=o,e=f();m("dataSource",t.data),c(10),m("matHeaderRowDef",e.columns),c(),m("matRowDefColumns",e.columns),c(2),m("size",10)("items",t.items)}}var rn=(()=>{class n{router=u(Ct);route=u(G);dialogFacade=u(Dt);courseFacade=u($);selectUser=u(Ft);#t=Wt(null);columns=["name","owner","actions"];constructor(){let t=this.#t.observe().pipe(st(i=>i?i.id:"")),e=this.route.queryParams;dt([t,e]).pipe(k()).subscribe(this.onQueryParams)}onQueryParams=([t,e])=>{let{page:i=0,size:s=10}=e,v={name:"",owner:t};this.courseFacade.setParams({page:i,size:s,filter:v}),this.courseFacade.load()};openDelete({id:t,name:e}){this.dialogFacade.confirm(`Confirme que deseja apagar o curso ${e}`,"Esta a\xE7\xE3o n\xE3o poder\xE1 ser desfeita").subscribe(i=>{i&&this.courseFacade.delete(t)})}openSelectUser(){this.selectUser.open({onlyRole:"academic",multiple:!1}).subscribe(t=>{t&&this.#t.update(t)})}onSearchChange(t=""){this.courseFacade.setFilter({name:t}),this.courseFacade.load()}onPageChange({page:t,size:e}){let i={page:t,size:e};this.router.navigate([],{queryParams:i})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["devmx-career-admin-manage-courses"]],decls:10,vars:4,consts:[[1,"courses-card"],[1,"courses-card-header"],["mat-icon-button","",3,"click"],["name","filter"],[3,"searchChange","debounce"],["mat-table","",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","owner"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["align","end"],[3,"pageChange","size","items"],["mat-header-cell",""],["mat-cell",""],["type","button","mat-icon-button","",3,"click"],["name","trash"],["mat-header-row",""],["mat-row",""]],template:function(e,i){if(e&1&&(a(0,"mat-card",0)(1,"mat-card-header",1)(2,"mat-card-title"),l(3,"Cursos"),r(),a(4,"div")(5,"button",2),p("click",function(){return i.openSelectUser()}),d(6,"devmx-icon",3),r(),a(7,"devmx-search-field",4),p("searchChange",function(v){return i.onSearchChange(v)}),r()()(),h(8,Sn,14,5),y(9,"async"),r()),e&2){let s;c(7),m("debounce",1e3),c(),x((s=w(9,2,i.courseFacade.response$))?8:-1,s)}},dependencies:[ht,P,K,Pe,I,qe,Te,Ae,Le,Re,Ve,ze,$e,Ne,Be,Ge,St,vt,Ot,be,he,D,F],styles:["[_nghost-%COMP%]{flex:1;padding:1em;display:flex;flex-direction:column}[_nghost-%COMP%]   .courses-card[_ngcontent-%COMP%]{overflow:hidden}[_nghost-%COMP%]   .courses-card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border-bottom:1px dashed rgba(0,0,0,.1)}[_nghost-%COMP%]   .courses-card-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{gap:2em;display:flex;align-items:baseline}[_nghost-%COMP%]   .mat-mdc-table[_ngcontent-%COMP%]   .mat-column-actions[_ngcontent-%COMP%]{max-width:3em}"],changeDetection:0})}return n})();var yn=(n,o)=>o.id;function wn(n,o){if(n&1){let t=M();a(0,"devmx-course-card",3)(1,"a",6),d(2,"devmx-icon",7),r(),a(3,"button",8),p("click",function(){let i=_(t).$implicit,s=f(2);return g(s.deleteCourse(i))}),d(4,"devmx-icon",9),r()()}if(n&2){let t=o.$implicit;m("data",t),c(),m("routerLink",t.id)}}function Fn(n,o){n&1&&(a(0,"div",4)(1,"h2"),l(2,"N\xE3o temos nada aqui..."),r(),a(3,"h3"),l(4," Siga nessa dire\xE7\xE3o "),d(5,"devmx-icon",10)(6,"br"),l(7," at\xE9 encontrar o bot\xE3o com um "),d(8,"devmx-icon",11)(9,"br"),l(10," e cadastre seus cursos. "),d(11,"devmx-icon",12),r()()),n&2&&(c(5),m("size",32),c(3),m("size",32),c(3),m("size",32))}function Dn(n,o){if(n&1){let t=M();a(0,"div",2),O(1,wn,5,2,"devmx-course-card",3,yn),r(),h(3,Fn,12,3,"div",4),a(4,"footer")(5,"devmx-paginator",5),p("pageChange",function(i){_(t);let s=f();return g(s.onPageChange(i))}),r()()}if(n&2){let t=o;c(),S(t.data),c(2),x(t.items?-1:3),c(2),m("size",10)("items",t.items)}}var an=(()=>{class n{router=u(Ct);route=u(G);dialogFacade=u(Dt);authFacade=u(xe);courseFacade=u($);constructor(){let t=this.authFacade.auth$.pipe(Lt(i=>!!i),st(({id:i})=>i)),e=this.route.queryParams.pipe(st(({page:i,size:s,open:v=null,active:At=null})=>({page:i,size:s,open:v,active:At})));dt([t,e]).pipe(k()).subscribe(this.onQueryParams)}onQueryParams=([t,e])=>{let{page:i,size:s,name:v=""}=e,At={name:v,owner:t};this.courseFacade.setParams({page:i,size:s,filter:At}),this.courseFacade.load()};deleteCourse({id:t,name:e}){this.dialogFacade.confirm(`Confirme que deseja apagar o curso ${e}`,"Esta a\xE7\xE3o n\xE3o poder\xE1 ser desfeita").subscribe(i=>{i&&this.courseFacade.delete(t)})}onPageChange({page:t,size:e}){let i={page:t,size:e};this.router.navigate([],{queryParams:i})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["devmx-academy-admin-my-courses"]],decls:4,vars:3,consts:[["mat-fab","","routerLink","novo",1,"add-button","tertiary-fab"],["name","plus"],[1,"courses-container"],[3,"data"],[1,"no-courses-yet"],[3,"pageChange","size","items"],["mat-icon-button","","matTooltip","Editar curso","matTooltipPosition","before",3,"routerLink"],["name","software/edit"],["type","button","mat-icon-button","","matTooltip","Apagar curso","matTooltipPosition","after",3,"click"],["name","trash-alt"],["color","#3BCE53","name","arrow/up-right",3,"size"],["color","#3BCE53","name","plus",3,"size"],["color","#3BCE53","name","emoji/smirking-alt",3,"size"]],template:function(e,i){if(e&1&&(a(0,"a",0),d(1,"devmx-icon",1),r(),h(2,Dn,6,3),y(3,"async")),e&2){let s;c(2),x((s=w(3,1,i.courseFacade.response$))?2:-1,s)}},dependencies:[ht,qt,j,P,le,K,ce,Pt,Ce,I,Ue,D,F],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column;justify-content:space-between}[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%]{gap:1em;padding:1em;display:flex;flex-flow:row wrap;justify-content:flex-start;grid-template-columns:repeat(2,1fr)}[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1;max-width:50%}[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:-webkit-box;line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}[_nghost-%COMP%]   .no-courses-yet[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}[_nghost-%COMP%]   .no-courses-yet[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   .no-courses-yet[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;padding:0;white-space:normal}[_nghost-%COMP%]   .no-courses-yet[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:160%}[_nghost-%COMP%]   .no-courses-yet[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:120%;text-align:end}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}@media (min-width: 1920px){[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1;max-width:33%}}@media (max-width: 767px){[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%]{align-content:flex-start;grid-template-columns:1fr}[_nghost-%COMP%]   .courses-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:inline-flex;min-width:100%}}[_nghost-%COMP%]   .add-button[_ngcontent-%COMP%]{position:fixed;right:4em;top:2em}"],changeDetection:0})}return n})();var jt=class extends V{constructor(){super({id:new C("",{nonNullable:!0}),name:new C("",{nonNullable:!0,validators:[E.required]})})}};var $t=class extends V{constructor(o){super({subject:new jt,instructor:new C("",{nonNullable:!0}),hours:new C(0,{nonNullable:!0,validators:[E.min(0)]})}),o&&this.patchValue(o)}get subject(){return this.controls.subject}},kt=class extends bt{constructor(){super([],{validators:[E.required]})}add(o){this.push(new $t(o))}childrenErrors=zt([]);updateErrors(){let o=this.controls.map(t=>t.errors);this.childrenErrors.set(o)}};var It=class extends bt{constructor(){super([])}add(o){this.push(new Ee(o))}};var Tt=class extends V{constructor(){super({id:new C("",{nonNullable:!0}),name:new C("",{nonNullable:!0,validators:[E.required]})})}patch(o){this.patchValue(o)}};var Vt=class extends V{constructor(){super({id:new C("",{nonNullable:!0}),name:new C("",{nonNullable:!0,validators:[E.required]}),institution:new Tt,subjects:new kt,goal:new C("",{nonNullable:!0,validators:[E.required]}),ead:new C(!1,{nonNullable:!0}),details:new C,link:new C,contributors:new It})}get institution(){return this.controls.institution}get contributors(){return this.controls.contributors}get subjects(){return this.controls.subjects}patch(o){if(this.patchValue(o),o.subjects){this.subjects.clear();for(let t of o.subjects)this.subjects.add(t)}if(o.contributors){this.contributors.clear();for(let t of o.contributors)this.contributors.add(t)}}};var En=(n,o)=>o.value,jn=(n,o)=>o.value.id;function kn(n,o){if(n&1){let t=M();a(0,"mat-form-field")(1,"mat-label"),l(2,"Professor"),r(),d(3,"input",22),r(),a(4,"mat-form-field")(5,"mat-label"),l(6,"Carga hor\xE1ria"),r(),d(7,"input",23),r(),a(8,"footer",24)(9,"button",7),p("click",function(){_(t);let i=f().$index,s=f();return g(s.form.subjects.removeAt(i))}),d(10,"devmx-icon",25),r()()}}function In(n,o){if(n&1&&(a(0,"mat-expansion-panel",10)(1,"mat-expansion-panel-header"),l(2),r(),h(3,kn,11,0,"ng-template",21),r()),n&2){let t=o.$implicit,e=o.$index;m("formGroupName",e),c(2),T(" ",t.subject.value.name," ")}}function Tn(n,o){n&1&&(a(0,"mat-error"),l(1,"Selecione ou cadastre ao menos uma assunto"),r())}function Vn(n,o){if(n&1){let t=M();a(0,"mat-list-item")(1,"span",26),l(2),r(),a(3,"button",27),p("click",function(){let i=_(t).$index,s=f();return g(s.form.contributors.removeAt(i))}),d(4,"devmx-icon",25),r()()}if(n&2){let t=o.$implicit;c(2),B(t.value.name)}}function An(n,o){if(n&1&&(a(0,"mat-list-item")(1,"span",26),l(2),r()()),n&2){let t=f();c(2),B(t.form.institution.value.name)}}var Nt=(()=>{class n{route=u(G);cdr=u(Bt);subjectFacade=u(xt);institutionFacade=u(L);institutionDialog=u(lt);subjectDialog=u(mt);selectAccount=u(Ft);courseFacade=u($);messageService=u(ge);form=new Vt;#t={openSubject:new at,searchSubject:new at,openInstitution:new at,searchInstitution:new at};constructor(){this.route.data.pipe(k()).subscribe(({course:t})=>{t&&t.id&&this.form.patch(t)})}openSelectContributor(){this.selectAccount.open({onlyRole:"academic",multiple:!0}).pipe(ft(1)).subscribe(t=>{if(t&&t.length)for(let e of t)this.form.contributors.add(e);this.cdr.detectChanges()})}openInstitution(t=null){return this.institutionDialog.openInstitution(t).afterClosed().pipe(N(this.#t.openInstitution)).subscribe(e=>{e&&(e.id?this.institutionFacade.update(e):this.institutionFacade.create(e))})}openSearchInstitution(){let t=this.institutionDialog.searchInstitution();t.componentInstance.addInstitution$.pipe(N(this.#t.searchInstitution)).subscribe(e=>{e&&this.openInstitution()}),t.afterClosed().pipe(N(this.#t.searchInstitution)).subscribe(e=>{e&&this.form.patchValue({institution:e}),this.#t.openInstitution.next(),this.#t.openInstitution.complete(),this.#t.searchInstitution.next(),this.#t.searchInstitution.complete()})}openSubject(t=null){return this.subjectDialog.openSubject(t).afterClosed().pipe(N(this.#t.openSubject)).subscribe(e=>{e&&(e.id?this.subjectFacade.update(e):this.subjectFacade.create(e))})}openSearchSubjects(){let t=this.subjectDialog.searchSubjects();t.componentInstance.addSubject$.pipe(N(this.#t.searchSubject)).subscribe(e=>{e&&this.openSubject(),console.log(e)}),t.afterClosed().pipe(N(this.#t.searchSubject)).subscribe(e=>{if(e&&e.length){for(let i of e){let s={hours:0,instructor:"",subject:i};this.form.subjects.add(s)}this.cdr.detectChanges()}this.#t.openSubject.next(),this.#t.openSubject.complete(),this.#t.searchSubject.next(),this.#t.searchSubject.complete()})}onSubmit(){if(this.form.valid){let t=this.form.getRawValue();return t.id?this.courseFacade.update(t):this.courseFacade.create(t),this.messageService.open({message:"Armazenando informa\xE7\xF5es"})}return this.form.markAllAsTouched()}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=b({type:n,selectors:[["devmx-academy-admin-course"]],decls:55,vars:8,consts:[[3,"submit","formGroup"],[1,"course"],[1,"course-content"],["matInput","","formControlName","name","autofocus",""],["formControlName","ead"],[1,"course-subjects"],["mat-subheader",""],["type","button","mat-icon-button","",3,"click"],["name","plus"],["formArrayName","subjects"],[3,"formGroupName"],[1,"course-contributors"],["formArrayName","contributors",1,"contributors"],[1,"course-institution"],["name","software/edit"],["label","Objetivo","hint","Compat\xEDvel com markdown do Github","formControlName","goal",3,"minRows"],[3,"content"],["label","Detalhes","hint","Compat\xEDvel com markdown do Github","formControlName","details",3,"minRows"],["matInput","","formControlName","link"],["align","end",1,"course-actions"],["mat-flat-button","",3,"disabled"],["matExpansionPanelContent",""],["matInput","","formControlName","instructor"],["matInput","","type","number","formControlName","hours","min","0"],[1,"course-subjects-action"],["name","trash"],["matListItemTitle",""],["type","button","mat-icon-button","","matListItemMeta","",3,"click"]],template:function(e,i){if(e&1&&(a(0,"form",0),p("submit",function(){return i.onSubmit()}),a(1,"mat-card",1)(2,"mat-card-content",2)(3,"section")(4,"mat-form-field")(5,"mat-label"),l(6,"Nome do curso"),r(),d(7,"input",3),a(8,"mat-error"),l(9,"Obrigat\xF3rio"),r()(),a(10,"mat-checkbox",4),l(11,"Ensino a dist\xE2ncia"),r(),a(12,"div",5)(13,"header")(14,"h3",6),l(15,"Disciplinas"),r(),a(16,"button",7),p("click",function(){return i.openSearchSubjects()}),d(17,"devmx-icon",8),r()(),a(18,"mat-accordion",9),O(19,In,4,2,"mat-expansion-panel",10,En),r(),h(21,Tn,2,0,"mat-error"),r(),a(22,"div",11)(23,"header")(24,"h3",6),l(25,"Contribuidores"),r(),a(26,"button",7),p("click",function(){return i.openSelectContributor()}),d(27,"devmx-icon",8),r()(),a(28,"mat-list",12),O(29,Vn,5,1,"mat-list-item",null,jn),r()(),a(31,"div",13)(32,"header")(33,"h3",6),l(34,"Institui\xE7\xE3o"),r(),a(35,"button",7),p("click",function(){return i.openSearchInstitution()}),d(36,"devmx-icon",14),r()(),a(37,"mat-list"),h(38,An,3,1,"mat-list-item"),r()()(),a(39,"section")(40,"devmx-markdown-toolbar"),d(41,"devmx-markdown-editor",15)(42,"devmx-markdown-view",16),r(),a(43,"devmx-markdown-toolbar"),d(44,"devmx-markdown-editor",17)(45,"devmx-markdown-view",16),r(),a(46,"mat-form-field")(47,"mat-label"),l(48,"Link"),r(),d(49,"input",18),a(50,"mat-hint"),l(51,"Opcional"),r()()()(),a(52,"mat-card-actions",19)(53,"button",20),l(54,"Salvar"),r()()()()),e&2){let s,v;m("formGroup",i.form),c(19),S(i.form.subjects.controls),c(2),x(i.form.subjects.touched&&i.form.subjects.hasError("required")?21:-1),c(8),S(i.form.contributors.controls),c(9),x(i.form.institution.valid?38:-1),c(3),m("minRows",10),c(),m("content",(s=i.form.value.goal)!==null&&s!==void 0?s:""),c(2),m("minRows",10),c(),m("content",(v=i.form.value.details)!==null&&v!==void 0?v:""),c(8),m("disabled",i.form.invalid)}},dependencies:[Fe,Oe,Se,A,Kt,H,Xt,Q,Jt,ne,Yt,ee,Zt,te,fe,pe,ue,de,me,we,ye,U,q,Ut,Qt,Ht,Pt,P,R,K,Y,X,St,vt,Ot,Me,j,re,ae,se,oe,ie,D],styles:["[_nghost-%COMP%]{display:block;padding:1em}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]{flex:1;gap:1.6em;display:flex;flex-flow:row wrap}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:.6em}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:100%;opacity:.72;margin-bottom:0}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .add-button[_ngcontent-%COMP%]{align-self:flex-start}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{gap:1em;display:flex;flex-flow:row wrap}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-institution[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-contributors[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-subjects[_ngcontent-%COMP%]{flex-direction:column;margin-bottom:1em}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-institution[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-contributors[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-subjects[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-institution[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-contributors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-subjects[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:flex;align-items:center}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-institution[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-contributors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-subjects[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{width:8em}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-institution[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-contributors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child, [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-subjects[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child{width:3em}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-institution[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-contributors[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-subjects[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}[_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-institution-action[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-contributors-action[_ngcontent-%COMP%], [_nghost-%COMP%]   .course-content[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   div.course-subjects-action[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}  body .mat-mdc-button .mdc-button__label{display:inline-flex;align-items:center;gap:4px}"],changeDetection:0})}return n})();var Wr=[{path:"",data:{breadcrumb:"Administra\xE7\xE3o"},providers:nn,component:He,children:[{path:"meus-cursos/novo",data:{breadcrumb:"Novo"},component:Nt},{path:"meus-cursos/:id",data:{breadcrumb:n=>n.course.name},resolve:{course:on},component:Nt},{path:"meus-cursos",data:{breadcrumb:"Meus cursos"},component:an},{path:"gerenciar-cursos",data:{breadcrumb:"Gerenciar cursos"},canActivate:[ke("director","manager","staff")],component:rn},{path:"",pathMatch:"prefix",redirectTo:"meus-cursos"}]}];export{He as AcademyFeatureAdminComponent,Wr as academyFeatureAdminRoutes};
