import{a as z}from"./chunk-EQDX552D.js";import{a as R,b as j,c as B,e as $,f as I,g as N}from"./chunk-SHICUOO6.js";import{a as A}from"./chunk-ERUAW4UO.js";import{b as L}from"./chunk-FGIWLLTD.js";import{h as T,k as U,l as k}from"./chunk-MVGT6HIX.js";import{x as F}from"./chunk-57VKPFDS.js";import{Ga as E,za as V}from"./chunk-XMIP7OAF.js";import{Ac as w,M as h,Mc as P,Nc as O,Ob as x,Ub as u,Zb as M,ac as v,bc as S,cc as r,dc as l,ic as y,la as _,lc as d,mb as s,me as b,nc as c,ua as m,va as p,vb as C,xc as D,yc as g}from"./chunk-FZSJMIDG.js";var q=(i,n)=>n.id;function H(i,n){if(i&1&&(r(0,"mat-list-option",5),g(1),l()),i&2){let e=n.$implicit;u("value",e),s(),w(" ",e.displayName," ")}}function J(i,n){if(i&1){let e=y();r(0,"mat-dialog-content",2)(1,"devmx-search-field",3),d("searchChange",function(o){m(e);let a=c();return p(a.onSearchChange(o))}),l(),r(2,"mat-selection-list",4,0),v(4,H,2,2,"mat-list-option",5,q),l(),r(6,"devmx-paginator",6),d("pageChange",function(o){m(e);let a=c();return p(a.onPageChange(o))}),l()(),r(7,"mat-dialog-actions",7)(8,"button",8),d("click",function(){m(e);let o=D(3),a=c();return p(a.close(o.selectedOptions.selected))}),g(9," Selecionar "),l(),r(10,"button",9),d("click",function(){m(e);let o=c();return p(o.ref.close())}),g(11,"Cancelar"),l()()}if(i&2){let e=n,t=c();s(2),u("multiple",t.data.multiple),s(2),S(e.data),s(2),u("items",e.items)}}var G=(()=>{class i{userFacade=_(L);ref=_(R);data=_(j);search="";constructor(){this.load()}onSearchChange(e){this.search=e,this.load()}onPageChange({page:e,size:t}){this.userFacade.setParams({page:e,size:t}),this.load()}load(){let e=this.search,t=this.data.onlyRole?{roles:this.data.onlyRole,displayName:e}:{displayName:e};this.userFacade.setFilter(t),this.userFacade.load()}close(e){this.data.multiple?this.ref.close(e.map(t=>t.value)):this.ref.close(e[0].value)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=C({type:i,selectors:[["devmx-select-user"]],decls:4,vars:3,consts:[["user",""],["mat-dialog-title",""],[1,"dialog-content"],[3,"searchChange"],[1,"users",3,"multiple"],[3,"value"],[3,"pageChange","items"],["align","end",1,"dialog-actions"],["mat-raised-button","","type","button",3,"click"],["mat-button","","type","button",3,"click"]],template:function(t,o){if(t&1&&(r(0,"h2",1),g(1,"Encontre uma conta"),l(),x(2,J,12,2),P(3,"async")),t&2){let a;s(2),M((a=O(3,1,o.userFacade.response$))?2:-1,a)}},dependencies:[F,A,z,$,I,N,E,V,k,U,T,b],styles:["[_nghost-%COMP%]{display:block;width:24em;max-width:calc(98vw - 32px)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:0}[_nghost-%COMP%]   .users[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:.6em}[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]{padding:0 16px;display:flex;justify-content:space-between}[_nghost-%COMP%]   .dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:space-between;margin-left:-8px}"],changeDetection:0})}return i})();var f=class{dialog;constructor(n){this.dialog=n}open(n={}){return this.dialog.open(G,{data:n}).afterClosed().pipe(h(1))}};function _e(){return{provide:f,deps:[B]}}export{f as a,_e as b};