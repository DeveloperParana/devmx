import{a as E}from"./chunk-JC5LZ7BO.js";import{a as L,b as h,e as T,f as J,i as _}from"./chunk-6EB4LZC4.js";import{a as I,e as y,f as O,g as P,l as S}from"./chunk-KBOBKUAD.js";import{a as M}from"./chunk-IQJW4AXX.js";import{Ac as j,Ja as f,Kc as d,Lc as s,Ob as u,Zb as b,cc as t,dc as a,ec as p,mb as o,nc as x,oc as C,pc as v,vb as g,yb as l,yc as r,zc as c}from"./chunk-UAGQGKX7.js";var D=(()=>{class e{transform(i){switch(i){case"internship":return"Estagi\xE1rio";case"junior":return"Junior";case"mid":return"Pleno";case"senior":return"Senior"}}static \u0275fac=function(n){return new(n||e)};static \u0275pipe=l({name:"jobLevel",type:e,pure:!0})}return e})();var F=(()=>{class e{transform(i){switch(i){case"contract":return"Contrato";case"freelance":return"Freelance";case"part-time":return"Meio per\xEDodo";case"full-time":return"Tempo integral"}}static \u0275fac=function(n){return new(n||e)};static \u0275pipe=l({name:"jobType",type:e,pure:!0})}return e})();var B=["*"];function k(e,q){if(e&1&&(t(0,"mat-list-item"),p(1,"devmx-icon",8),t(2,"span",3),r(3),a()()),e&2){let i=x();o(3),c(i.jobOpening.company)}}var X=(()=>{class e{data=f.required();discrete=f(!1);get jobOpening(){return this.data()}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=g({type:e,selectors:[["devmx-job-opening-card"]],inputs:{data:[1,"data"],discrete:[1,"discrete"]},ngContentSelectors:B,decls:27,vars:12,consts:[[1,"job-opening-card"],[1,"job-opening-list"],["matListItemIcon","","name","transport/location-pin-alt"],["matListItemTitle",""],["matListItemIcon","","name","doc/check"],["matListItemIcon","","name","doc/shield"],["matListItemIcon","","name","time-loading"],["align","end",1,"job-opening-card-actions"],["matListItemIcon","","name","building/building"]],template:function(n,m){n&1&&(C(),t(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),r(3),a()(),t(4,"mat-list",1),u(5,k,4,1,"mat-list-item"),t(6,"mat-list-item"),p(7,"devmx-icon",2),t(8,"div",3),r(9),d(10,"jobMode"),a()(),t(11,"mat-list-item"),p(12,"devmx-icon",4),t(13,"div",3),r(14),a()(),t(15,"mat-list-item"),p(16,"devmx-icon",5),t(17,"div",3),r(18),d(19,"jobLevel"),a()(),t(20,"mat-list-item"),p(21,"devmx-icon",6),t(22,"div",3),r(23),d(24,"jobType"),a()()(),t(25,"mat-card-actions",7),v(26),a()()),n&2&&(o(3),c(m.jobOpening.title),o(2),b(m.jobOpening.company?5:-1),o(4),c(s(10,6,m.jobOpening.mode)),o(5),j("Contrato ",m.jobOpening.contract,""),o(4),c(s(19,8,m.jobOpening.experience)),o(5),c(s(24,10,m.jobOpening.type)))},dependencies:[_,L,T,J,h,S,O,P,y,I,M,E,F,D],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   .job-opening-card[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}[_nghost-%COMP%]   .job-opening-card[_ngcontent-%COMP%]   .job-opening-list[_ngcontent-%COMP%]{flex:1}"],changeDetection:0})}return e})();export{D as a,F as b,X as c};
