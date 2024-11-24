import{B as o,r as S,s as P,t as A,u as F,y,z as D}from"./chunk-EVMZ5VSZ.js";import{F as H,O as w,ba as L,c as E}from"./chunk-UAGQGKX7.js";var s=class extends P{};var i=class extends P{};var c=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.create(e)}};var d=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.create(e)}};var m=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.delete(e)}};var l=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.delete(e)}};var h=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.findOne(e)}};var x=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.find(e)}};var f=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.findOne(e)}};var v=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.find(e)}};var C=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.update(e.id,e)}};var U=class{photoService;constructor(e){this.photoService=e}execute(e){return this.photoService.update(e.id,e)}};var b=class{albumService;constructor(e){this.albumService=e}execute(e){return this.albumService.upload(e)}};var g=class extends y{createAlbumUseCase;findAlbumsUseCase;findAlbumByIdUseCase;updateAlbumUseCase;deleteAlbumUseCase;constructor(e,r,n,p,a){super({response:{data:[],items:0,pages:0},params:{page:0,size:10,filter:{title:""}},selected:null}),this.createAlbumUseCase=e,this.findAlbumsUseCase=r,this.findAlbumByIdUseCase=n,this.updateAlbumUseCase=p,this.deleteAlbumUseCase=a}load(){this.onLoad(this.findAlbumsUseCase.execute(this.state.params))}loadOne(e){this.onLoadOne(this.findAlbumByIdUseCase.execute(e))}create(e){return this.createAlbumUseCase.execute(e)}update(e){let r=this.updateAlbumUseCase.execute(e).pipe(L(()=>this.loadOne(e.id)));return this.onUpdate(r),r}delete(e){this.onDelete(this.deleteAlbumUseCase.execute(e))}};function $(){return D(g,[c,x,h,C,m])}var B=class extends y{createPhotoUseCase;findPhotosUseCase;findPhotoByIdUseCase;updatePhotoUseCase;deletePhotoUseCase;uploadPhotoUseCase;constructor(e,r,n,p,a,u){super({response:{data:[],items:0,pages:0},params:{page:0,size:10,filter:{caption:""}},selected:null}),this.createPhotoUseCase=e,this.findPhotosUseCase=r,this.findPhotoByIdUseCase=n,this.updatePhotoUseCase=p,this.deletePhotoUseCase=a,this.uploadPhotoUseCase=u}load(){this.onLoad(this.findPhotosUseCase.execute(this.state.params))}upload(e){return this.uploadPhotoUseCase.execute(e)}loadOne(e){this.onLoadOne(this.findPhotoByIdUseCase.execute(e))}create(e){return this.createPhotoUseCase.execute(e)}update(e){let r=this.updatePhotoUseCase.execute(e);return this.onUpdate(r),this.loadOne(e.id),r}delete(e){return this.deletePhotoUseCase.execute(e)}};function q(){return D(B,[d,v,f,U,l,b])}function z(){return[$(),q()]}var O=class extends S{upload({album:e,photo:r,width:n,height:p,caption:a}){let u=new FormData;u.append("file",r),u.append("album",e),u.append("width",String(n)),u.append("height",String(p)),u.append("caption",a??"");let G=[this.url,e,"upload"];return this.http.post(G.join("/"),u,{reportProgress:!0,observe:"events"})}};function j(){return{provide:s,useFactory(t,e){return new O(t,e,"albums")},deps:[F,A]}}var I=class extends S{upload(n){var p=n,{photo:e}=p,r=E(p,["photo"]);let a=new FormData;return a.set("file",e),this.http.post(this.url,r,{body:a,reportProgress:!0,observe:"events"})}};function R(){return{provide:i,useFactory(t,e){return new I(t,e,"photos")},deps:[F,A]}}function W(){return[j(),R()]}function J(){return o(c,[s])}function K(){return o(x,[s])}function M(){return o(h,[s])}function N(){return o(C,[s])}function Q(){return o(m,[s])}function T(){return o(d,[i])}function V(){return o(v,[i])}function X(){return o(f,[i])}function Y(){return o(U,[i])}function Z(){return o(l,[i])}function _(){return o(b,[s])}function k(){return[J(),K(),M(),N(),Q(),T(),V(),X(),Y(),Z(),_()]}function vt(){return[...W(),...k(),...z()]}var bt=(t,e)=>(t.loadOne(e.id),t.selected$.pipe(w(),H(r=>!!r)));export{g as a,B as b,vt as c,bt as d};
