import{a as r}from"./chunk-XIUDFJWJ.js";import{B as O,a as g,b as y,c as F,d as D,v as B}from"./chunk-THCNWKDC.js";import{G as S,M as L,P as A,c as $,ca as j}from"./chunk-FZSJMIDG.js";var s=class extends g{};var i=class extends g{};var c=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.create(e)}};function q(){return r(c,[s])}var n=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.create(e)}};function z(){return r(n,[i])}var d=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.delete(e)}};function R(){return r(d,[s])}var l=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.delete(e)}};function W(){return r(l,[i])}var h=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.findOne(e)}};function k(){return r(h,[s])}var f=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.find(e)}};function G(){return r(f,[s])}var v=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.findOne(e)}};function J(){return r(v,[i])}var x=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.find(e)}};function K(){return r(x,[i])}var U=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.update(e.id,e)}};function M(){return r(U,[s])}var C=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.updateTags(e.id,e)}};function N(){return r(C,[i])}var b=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.update(e.id,e)}};function Q(){return r(b,[i])}var P=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.upload(e)}};function V(){return r(P,[s])}var T=class extends B{upload({album:e,photo:o,width:p,height:a,caption:u}){let m=new FormData;m.append("file",o),m.append("album",e),m.append("width",String(p)),m.append("height",String(a)),m.append("caption",u??"");let I=[this.url,e,"upload"];return this.http.post(I.join("/"),m,{reportProgress:!0,observe:"events"})}};function X(){return{provide:s,useFactory(t,e){return new T(t,e,"albums")},deps:[F,y]}}var E=class extends B{updateTags(e,o){let p=[this.url,e,"tags"];return this.http.patch(p.join("/"),o)}upload(p){var a=p,{photo:e}=a,o=$(a,["photo"]);let u=new FormData;return u.set("file",e),this.http.post(this.url,o,{body:u,reportProgress:!0,observe:"events"})}};function Y(){return{provide:i,useFactory(t,e){return new E(t,e,"photos")},deps:[F,y]}}var H=class extends O{createAlbumUseCase;findAlbumsUseCase;findAlbumByIdUseCase;updateAlbumUseCase;deleteAlbumUseCase;constructor(e,o,p,a,u){super({response:{data:[],items:0,pages:0},params:{page:0,size:10,filter:{title:""}},selected:null}),this.createAlbumUseCase=e,this.findAlbumsUseCase=o,this.findAlbumByIdUseCase=p,this.updateAlbumUseCase=a,this.deleteAlbumUseCase=u}load(){this.onLoad(this.findAlbumsUseCase.execute(this.state.params))}loadOne(e){this.onLoadOne(this.findAlbumByIdUseCase.execute(e))}create(e){return this.createAlbumUseCase.execute(e)}update(e){let o=this.updateAlbumUseCase.execute(e).pipe(j(()=>this.loadOne(e.id)));return this.onUpdate(o),o}delete(e){this.onDelete(this.deleteAlbumUseCase.execute(e))}};function Z(){return D(H,[c,f,h,U,d])}var w=class extends O{createPhotoUseCase;findPhotosUseCase;findPhotoByIdUseCase;updatePhotoUseCase;updatePhotoTagsUseCase;deletePhotoUseCase;uploadPhotoUseCase;constructor(e,o,p,a,u,m,I){super({response:{data:[],items:0,pages:0},params:{page:0,size:10,filter:{caption:""}},selected:null}),this.createPhotoUseCase=e,this.findPhotosUseCase=o,this.findPhotoByIdUseCase=p,this.updatePhotoUseCase=a,this.updatePhotoTagsUseCase=u,this.deletePhotoUseCase=m,this.uploadPhotoUseCase=I}load(){this.onLoad(this.findPhotosUseCase.execute(this.state.params))}upload(e){return this.uploadPhotoUseCase.execute(e)}loadOne(e){this.onLoadOne(this.findPhotoByIdUseCase.execute(e))}create(e){return this.createPhotoUseCase.execute(e)}update(e){let o=this.updatePhotoUseCase.execute(e);return this.loadOne(e.id),o.pipe(L(1))}updateTags(e){return this.updatePhotoTagsUseCase.execute(e)}delete(e){return this.deletePhotoUseCase.execute(e)}};function _(){return D(w,[n,x,v,b,C,l,P])}function ee(){return[X(),q(),R(),k(),G(),M(),Z()]}function te(){return[Y(),z(),W(),J(),K(),N(),Q(),V(),_()]}function Mt(){return[...te(),...ee()]}var Vt=(t,e)=>(t.loadOne(e.id),t.selected$.pipe(A(),S(o=>!!o)));var Zt=(t,e)=>(t.loadOne(e.id),t.selected$.pipe(A(),S(o=>!!o)));export{H as a,w as b,Mt as c,Vt as d,Zt as e};