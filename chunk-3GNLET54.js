import{a as r}from"./chunk-XIUDFJWJ.js";import{A as D,a as S,b as A,c as g,d as y,u as F}from"./chunk-P77LSAIN.js";import{G as w,M as L,P as $,c as H,ca as j}from"./chunk-FZSJMIDG.js";var s=class extends S{};var i=class extends S{};var c=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.create(e)}};function q(){return r(c,[s])}var n=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.create(e)}};function z(){return r(n,[i])}var d=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.delete(e)}};function k(){return r(d,[s])}var h=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.delete(e)}};function R(){return r(h,[i])}var l=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.findOne(e)}};function W(){return r(l,[s])}var v=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.find(e)}};function G(){return r(v,[s])}var f=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.findOne(e)}};function J(){return r(f,[i])}var x=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.find(e)}};function K(){return r(x,[i])}var U=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.update(e.id,e)}};function M(){return r(U,[s])}var C=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.updateTags(e.id,e)}};function N(){return r(C,[i])}var b=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.update(e.id,e)}};function Q(){return r(b,[i])}var P=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.upload(e)}};function V(){return r(P,[s])}var O=class extends F{upload({album:e,photo:o,width:p,height:a,caption:u}){let m=new FormData;m.append("file",o),m.append("album",e),m.append("width",String(p)),m.append("height",String(a)),m.append("caption",u??"");let B=[this.url,e,"upload"];return this.http.post(B.join("/"),m,{reportProgress:!0,observe:"events"})}};function X(){return{provide:s,useFactory(t,e){return new O(t,e,"albums")},deps:[g,A]}}var I=class extends F{updateTags(e,o){let p=[this.url,e,"tags"];return this.http.patch(p.join("/"),o)}upload(p){var a=p,{photo:e}=a,o=H(a,["photo"]);let u=new FormData;return u.set("file",e),this.http.post(this.url,o,{body:u,reportProgress:!0,observe:"events"})}};function Y(){return{provide:i,useFactory(t,e){return new I(t,e,"photos")},deps:[g,A]}}var T=class extends D{createAlbumUseCase;findAlbumsUseCase;findAlbumByIdUseCase;updateAlbumUseCase;deleteAlbumUseCase;constructor(e,o,p,a,u){super({response:{data:[],items:0,pages:0},params:{page:0,size:10,filter:{title:""}},selected:null}),this.createAlbumUseCase=e,this.findAlbumsUseCase=o,this.findAlbumByIdUseCase=p,this.updateAlbumUseCase=a,this.deleteAlbumUseCase=u}load(){this.onLoad(this.findAlbumsUseCase.execute(this.state.params))}loadOne(e){this.onLoadOne(this.findAlbumByIdUseCase.execute(e))}create(e){return this.createAlbumUseCase.execute(e)}update(e){let o=this.updateAlbumUseCase.execute(e).pipe(j(()=>this.loadOne(e.id)));return this.onUpdate(o),o}delete(e){this.onDelete(this.deleteAlbumUseCase.execute(e))}};function Z(){return y(T,[c,v,l,U,d])}var E=class extends D{createPhotoUseCase;findPhotosUseCase;findPhotoByIdUseCase;updatePhotoUseCase;updatePhotoTagsUseCase;deletePhotoUseCase;uploadPhotoUseCase;constructor(e,o,p,a,u,m,B){super({response:{data:[],items:0,pages:0},params:{page:0,size:10,filter:{caption:""}},selected:null}),this.createPhotoUseCase=e,this.findPhotosUseCase=o,this.findPhotoByIdUseCase=p,this.updatePhotoUseCase=a,this.updatePhotoTagsUseCase=u,this.deletePhotoUseCase=m,this.uploadPhotoUseCase=B}load(){this.onLoad(this.findPhotosUseCase.execute(this.state.params))}upload(e){return this.uploadPhotoUseCase.execute(e)}loadOne(e){this.onLoadOne(this.findPhotoByIdUseCase.execute(e))}create(e){return this.createPhotoUseCase.execute(e)}update(e){let o=this.updatePhotoUseCase.execute(e);return this.loadOne(e.id),o.pipe(L(1))}updateTags(e){this.onUpdate(this.updatePhotoTagsUseCase.execute(e))}delete(e){return this.deletePhotoUseCase.execute(e)}};function _(){return y(E,[n,x,f,b,C,h,P])}function ee(){return[X(),q(),k(),W(),G(),M(),Z()]}function te(){return[Y(),z(),R(),J(),K(),N(),Q(),V(),_()]}function Mt(){return[...te(),...ee()]}var Vt=(t,e)=>(t.loadOne(e.id),t.selected$.pipe($(),w(o=>!!o)));export{T as a,E as b,Mt as c,Vt as d};
