import{a as N}from"./chunk-QO5VEQVM.js";import"./chunk-PLROVZFR.js";import"./chunk-AUORC2F5.js";import{a as A}from"./chunk-ZHS65JNW.js";import{a as W}from"./chunk-WE4XRG6V.js";import{a as y,d as Q}from"./chunk-DZFXPWJ3.js";import{b as q}from"./chunk-KEKON2PL.js";import{c as G}from"./chunk-JMFPL2WB.js";import"./chunk-L6JZTMID.js";import"./chunk-X4DJDWG6.js";import"./chunk-SBAV4Z7U.js";import"./chunk-OUHM5675.js";import{a as H}from"./chunk-ZY67Z3LE.js";import{a as g}from"./chunk-A3N3AUUJ.js";import"./chunk-MTMSRDZL.js";import"./chunk-WJBOH2N4.js";import"./chunk-EVUXJHDY.js";import{g as P,i as O,j as U,p as f}from"./chunk-KXTQ2UTD.js";import"./chunk-I7VYXJU2.js";import"./chunk-TPOWQI3K.js";import"./chunk-A6OBOLX6.js";import"./chunk-5R3537JV.js";import"./chunk-U457VICD.js";import{$b as C,Ba as R,F,Hc as B,Jc as M,Kc as x,Nb as u,Ob as w,Pb as L,Rb as $,Tb as r,Yb as _,a as v,ac as h,bc as l,cc as s,dc as m,gb as T,hc as E,je as I,ka as o,kc as j,lb as a,mc as b,t as D,ta as k,ua as S,ub as p,xc as z,yc as V}from"./chunk-TEKHUYWQ.js";var J=[];var X=(()=>{class e{router=o(O);destroyRef=o(R);authFacade=o(H);layoutFacade=o(q);constructor(){this.authFacade.auth$.pipe(g()).subscribe(t=>{t&&(this.layoutFacade.loadNavLinks(t.roles),this.waitingForLogout())}),this.authFacade.load()}waitingForLogout(){this.authFacade.auth$.pipe(g(this.destroyRef)).subscribe(t=>{t===null&&(this.layoutFacade.resetNavLinks(),this.router.navigateByUrl("/conta/autenticacao"))})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["devmx-album-feature-shell"]],decls:1,vars:0,template:function(n,c){n&1&&m(0,"devmx-layout")},dependencies:[f,N],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}"],changeDetection:0})}return e})();var ne=(e,i)=>i.id,ie=()=>[G,A,import("./chunk-QQ3DFMVY.js").then(e=>e.AsyncPipe)],oe=()=>[import("./chunk-PWYCQNWS.js").then(e=>e.AlbumCardComponent),U],ae=e=>[".",e];function re(e,i){if(e&1&&(l(0,"a",3),m(1,"devmx-album-card",4),s()),e&2){let t=b().$implicit;r("routerLink",B(2,ae,t.id)),a(),r("data",t)}}function me(e,i){e&1&&m(0,"devmx-skeleton",5),e&2&&r("rows",3)}function le(e,i){e&1&&(u(0,re,2,4)(1,me,1,1),w(2,0,oe,null,1),$(0,-1))}function ce(e,i){if(e&1){let t=E();l(0,"div",0),C(1,le,4,0,null,null,ne),s(),m(3,"div",1),l(4,"footer")(5,"devmx-paginator",2),j("pageChange",function(c){k(t);let d=b(2);return S(d.onPageChange(c))}),s()()}if(e&2){let t=i;a(),h(t.data),a(4),r("size",10)("items",t.items)}}function se(e,i){if(e&1&&(u(0,ce,6,2),M(1,"async")),e&2){let t,n=b();_((t=x(1,1,n.albumFacade.response$))?0:-1,t)}}function de(e,i){e&1&&(l(0,"div",0),m(1,"devmx-skeleton",5)(2,"devmx-skeleton",5)(3,"devmx-skeleton",5),s()),e&2&&(a(),r("rows",3),a(),r("rows",2),a(),r("rows",3))}var Y=(()=>{class e{albumFacade=o(y);router=o(O);route=o(P);constructor(){this.route.queryParams.pipe(g()).subscribe(this.onQueryParams)}onQueryParams=t=>{let{page:n=0,size:c=10}=t,{title:d=""}=t,te={title:d};this.albumFacade.setParams({page:n,size:c,filter:te}),this.albumFacade.load()};mergeParams(t){return v(v({},this.route.snapshot.queryParams),t)}onPageChange(t){this.router.navigate([],{queryParams:t})}static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["devmx-admin-albums"]],decls:5,vars:0,consts:[[1,"albums-container"],[1,"spacer"],[3,"pageChange","size","items"],[3,"routerLink"],[3,"data"],[3,"rows"]],template:function(n,c){n&1&&(m(0,"header"),u(1,se,2,3)(2,de,4,3),w(3,1,ie,null,2),L(500))},dependencies:[A,f],styles:["[_nghost-%COMP%]{flex:1;display:flex;flex-direction:column}[_nghost-%COMP%]   header[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;justify-content:space-between;padding:.4em .8em}[_nghost-%COMP%]   .albums-container[_ngcontent-%COMP%]{gap:1em;padding:1em;display:grid;grid-auto-flow:dense;grid-template-columns:repeat(4,1fr)}@media (max-width: 1918px){[_nghost-%COMP%]   .albums-container[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 1278px){[_nghost-%COMP%]   .albums-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 767px){[_nghost-%COMP%]   .albums-container[_ngcontent-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]   .albums-container[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{flex:1;display:flex}[_nghost-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"],changeDetection:0})}return e})();var pe=(e,i)=>i.id;function ue(e,i){if(e&1&&(l(0,"figure"),m(1,"img",0),l(2,"figcaption"),z(3),s()()),e&2){let t=i.$implicit;a(),r("src",t.data,T)("alt",t.caption),a(2),V(t.caption)}}function fe(e,i){e&1&&C(0,ue,4,3,"figure",null,pe),e&2&&h(i.photos)}var Z=(()=>{class e{route=o(P);album$=this.route.data.pipe(F(t=>"album"in t),D(t=>t.album));static \u0275fac=function(n){return new(n||e)};static \u0275cmp=p({type:e,selectors:[["devmx-album"]],decls:2,vars:3,consts:[["loading","lazy",3,"src","alt"]],template:function(n,c){if(n&1&&(u(0,fe,2,0),M(1,"async")),n&2){let d;_((d=x(1,1,c.album$))?0:-1,d)}},dependencies:[f,I],styles:["[_nghost-%COMP%]{gap:1em;padding:1em;display:grid;grid-auto-flow:dense;grid-template-columns:repeat(4,1fr)}@media (max-width: 1918px){[_nghost-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media (max-width: 1278px){[_nghost-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 767px){[_nghost-%COMP%]{grid-template-columns:repeat(1,1fr)}}[_nghost-%COMP%]   figure[_ngcontent-%COMP%]{margin:0;box-sizing:border-box;border-radius:.4em;position:relative;overflow:hidden;background-color:#0000000a;transition:width .3s ease-in-out}[_nghost-%COMP%]   figure.selected[_ngcontent-%COMP%]{width:16em;transition:width .3s ease-in-out}[_nghost-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;display:flex;object-fit:cover;height:24em}[_nghost-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]{display:flex;width:100%;padding:.4em;position:absolute;bottom:0;background-color:#0006;color:#fff9;z-index:100}[_nghost-%COMP%]   figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]:empty{display:none}"],changeDetection:0})}return e})();var ee=e=>Q(o(y),e.params);var it=[{path:"",data:{breadcrumb:"Albuns"},canActivate:[W("member")],providers:J,component:X,children:[{path:"administracao",loadChildren:()=>import("./chunk-RVR7NIIN.js").then(e=>e.albumFeatureAdminRoutes)},{path:"",data:{breadcrumb:"Albuns"},component:Y},{path:":id",data:{breadcrumb:e=>e.album.title},resolve:{album:ee},component:Z}]}];export{X as AlbumFeatureShellComponent,it as albumFeatureShellRoutes};