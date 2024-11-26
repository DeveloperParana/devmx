import{a as et}from"./chunk-APGMUVIT.js";import{a as at}from"./chunk-NTYXZ34B.js";import{d as ot,e as nt}from"./chunk-QJXU5I4V.js";import{a as x,b as S,c as lt,d as rt,e as k,f as D,g as v,h as b}from"./chunk-XZXDZXVR.js";import{c as it}from"./chunk-JMFPL2WB.js";import{n as C,t as M}from"./chunk-WJBOH2N4.js";import{b as B,i as R,j as $}from"./chunk-EVUXJHDY.js";import{h as Y,k as Z,l as tt}from"./chunk-TPOWQI3K.js";import{c as z,e as q,h as H,i as J,j as K,l as O,m as Q,p as U,s as W,x as X}from"./chunk-5R3537JV.js";import{$b as A,Jc as G,Kc as L,L as w,Nb as F,Tb as p,Yb as T,ac as E,bc as n,cc as a,dc as V,hc as I,je as j,ka as c,kc as d,lb as m,mc as g,ta as f,ua as u,ub as _,wc as N,xc as r,zc as h}from"./chunk-TEKHUYWQ.js";var y=class extends K{constructor(){super({id:new O("",{nonNullable:!0}),name:new O("",{nonNullable:!0,validators:[q.required]})})}};var gt=(i,l)=>l.id;function ft(i,l){if(i&1&&(n(0,"mat-list-option",5),r(1),a()),i&2){let t=l.$implicit;p("value",t),m(),h(" ",t.name," ")}}function ut(i,l){if(i&1){let t=I();n(0,"mat-dialog-content",2)(1,"devmx-search-field",3),d("searchChange",function(o){f(t);let s=g();return u(s.onSearchChange(o))}),a(),n(2,"mat-selection-list",4,0),A(4,ft,2,2,"mat-list-option",5,gt),a(),n(6,"devmx-paginator",6),d("pageChange",function(o){f(t);let s=g();return u(s.onPageChange(o))}),a()(),n(7,"mat-dialog-actions",7)(8,"button",8),d("click",function(){f(t);let o=N(3),s=g();return u(s.close(o.selectedOptions.selected))}),r(9," Selecionar "),a(),n(10,"button",9),d("click",function(){f(t);let o=g();return u(o.ref.close())}),r(11,"Cancelar"),a()()}if(i&2){let t=l,e=g();m(2),p("multiple",e.data.multiple),m(2),E(t.data),m(2),p("items",t.items)}}var st=(()=>{class i{ref=c(x);data=c(S);skillFacade=c(et);constructor(){this.skillFacade.load()}onSearchChange(t){this.skillFacade.setFilter({name:t}),this.skillFacade.load()}onPageChange({page:t,size:e}){this.skillFacade.setParams({page:t,size:e}),this.skillFacade.load()}close(t){this.data.multiple?this.ref.close(t.map(e=>e.value)):this.ref.close(t[0].value)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["devmx-select-skill"]],decls:4,vars:3,consts:[["skill",""],["mat-dialog-title",""],[1,"dialog-content"],[3,"searchChange"],[1,"skills",3,"multiple"],[3,"value"],[3,"pageChange","items"],["align","end",1,"dialog-actions"],["mat-raised-button","","type","button",3,"click"],["mat-button","","type","button",3,"click"]],template:function(e,o){if(e&1&&(n(0,"h2",1),r(1,"Encontre habilidades"),a(),F(2,ut,12,2),G(3,"async")),e&2){let s;m(2),T((s=L(3,1,o.skillFacade.response$))?2:-1,s)}},dependencies:[it,at,b,k,v,D,M,C,tt,Z,Y,j],styles:["[_nghost-%COMP%]{display:block;width:24em;max-width:calc(98vw - 32px)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:0}[_nghost-%COMP%]   .skills[_ngcontent-%COMP%]{margin-top:0}[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:.6em}[_nghost-%COMP%]   .dialog-footer[_ngcontent-%COMP%]{padding:0 16px;display:flex;justify-content:space-between}[_nghost-%COMP%]   .dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:space-between;margin-left:-8px}"],changeDetection:0})}return i})();var mt=(()=>{class i{ref=c(x);data=c(S);form=new y;ngOnInit(){this.data&&this.form.patchValue(this.data)}onSubmit(){if(this.form.valid){let t=this.form.getRawValue();return this.ref.close(t)}this.form.markAllAsTouched()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_({type:i,selectors:[["devmx-skill"]],decls:13,vars:2,consts:[["mat-dialog-title",""],[3,"submit","formGroup"],[1,"dialog-content"],["matInput","","formControlName","name"],["align","end",1,"dialog-actions"],["mat-flat-button",""],["type","button","mat-button","","mat-dialog-close",""]],template:function(e,o){e&1&&(n(0,"h2",0),r(1),a(),n(2,"form",1),d("submit",function(){return o.onSubmit()}),n(3,"mat-dialog-content",2)(4,"mat-form-field")(5,"mat-label"),r(6,"Habilidade"),a(),V(7,"input",3),a()(),n(8,"mat-dialog-actions",4)(9,"button",5),r(10,"Salvar"),a(),n(11,"button",6),r(12,"Cancelar"),a()()()),e&2&&(m(),h("",o.data!=null&&o.data.id?"Editar":"Cadastrar"," habilidade"),m(),p("formGroup",o.form))},dependencies:[X,Q,z,H,J,U,W,$,R,B,b,rt,k,v,D,nt,ot,M,C],styles:["[_nghost-%COMP%]{display:block;width:24em;max-width:calc(98vw - 32px)}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.2em;margin-bottom:0}[_nghost-%COMP%]   .dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:.6em}[_nghost-%COMP%]   .dialog-actions[_ngcontent-%COMP%]{display:flex;flex-direction:row-reverse;justify-content:space-between;margin-left:-8px}"],changeDetection:0})}return i})();var P=class{dialog;constructor(l){this.dialog=l}select(l={}){return this.dialog.open(st,{data:l}).afterClosed().pipe(w(1))}open(l){return this.dialog.open(mt,{data:l}).afterClosed().pipe(w(1))}};function Kt(){return{provide:P,deps:[lt]}}export{y as a,P as b,Kt as c};