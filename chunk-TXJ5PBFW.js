import{a as u,b as c,c as p,d as a,h as d,n as C}from"./chunk-2P22RRAG.js";import{F as J}from"./chunk-TEKHUYWQ.js";function r(t,e){return{provide:t,useFactory(...n){return new t(...n)},deps:e}}var o=class extends u{};var s=class extends u{};var i=class extends u{};var v=class{courseService;constructor(e){this.courseService=e}execute(e){return this.courseService.create(e)}};function K(){return r(v,[o])}var f=class{institutionService;constructor(e){this.institutionService=e}execute(e){return this.institutionService.create(e)}};function M(){return r(f,[s])}var m=class{subjectService;constructor(e){this.subjectService=e}execute(e){return this.subjectService.create(e)}};function N(){return r(m,[i])}var x=class{courseService;constructor(e){this.courseService=e}execute(e){return this.courseService.delete(e)}};function Q(){return r(x,[o])}var U=class{institutionService;constructor(e){this.institutionService=e}execute(e){return this.institutionService.delete(e)}};function T(){return r(U,[s])}var S=class{subjectService;constructor(e){this.subjectService=e}execute(e){return this.subjectService.delete(e)}};function V(){return r(S,[i])}var l=class{courseService;constructor(e){this.courseService=e}execute(e){return this.courseService.findOne(e)}};function X(){return r(l,[o])}var h=class{courseService;constructor(e){this.courseService=e}execute(e){return this.courseService.find(e)}};function Y(){return r(h,[o])}var I=class{institutionService;constructor(e){this.institutionService=e}execute(e){return this.institutionService.findOne(e)}};function Z(){return r(I,[s])}var b=class{institutionService;constructor(e){this.institutionService=e}execute(e){return this.institutionService.find(e)}};function _(){return r(b,[s])}var j=class{subjectService;constructor(e){this.subjectService=e}execute(e){return this.subjectService.findOne(e)}};function ee(){return r(j,[i])}var F=class{subjectService;constructor(e){this.subjectService=e}execute(e){return this.subjectService.find(e)}};function te(){return r(F,[i])}var y=class{courseService;constructor(e){this.courseService=e}execute(e){return this.courseService.update(e.id,e)}};function re(){return r(y,[o])}var D=class{institutionService;constructor(e){this.institutionService=e}execute(e){return this.institutionService.update(e.id,e)}};function oe(){return r(D,[s])}var P=class{subjectService;constructor(e){this.subjectService=e}execute(e){return this.subjectService.update(e.id,e)}};function se(){return r(P,[i])}var E=class extends d{};function w(){return{provide:o,useFactory(t,e){return new E(t,e,"courses")},deps:[p,c]}}var g=class extends d{};function L(){return{provide:s,useFactory(t,e){return new g(t,e,"institutions")},deps:[p,c]}}var z=class extends d{};function R(){return{provide:i,useFactory(t,e){return new z(t,e,"subjects")},deps:[p,c]}}var W=class extends C{createCourseUseCase;findCoursesUseCase;findCourseByIdUseCase;updateCourseUseCase;deleteCourseUseCase;constructor(e,n,B,H,O){super({response:{data:[],items:0,pages:0},params:{page:0,size:10,filter:{name:""}},selected:null}),this.createCourseUseCase=e,this.findCoursesUseCase=n,this.findCourseByIdUseCase=B,this.updateCourseUseCase=H,this.deleteCourseUseCase=O}load(){this.onLoad(this.findCoursesUseCase.execute(this.state.params))}loadOne(e){this.onLoadOne(this.findCourseByIdUseCase.execute(e))}create(e){this.onCreate(this.createCourseUseCase.execute(e))}update(e){this.onUpdate(this.updateCourseUseCase.execute(e))}delete(e){this.onDelete(this.deleteCourseUseCase.execute(e))}};function $(){return a(W,[v,h,l,y,x])}var A=class extends C{createInstitutionUseCase;findInstitutionsUseCase;findInstitutionByIdUseCase;updateInstitutionUseCase;deleteInstitutionUseCase;constructor(e,n,B,H,O){super({response:{data:[],items:0,pages:0},params:{page:0,size:10,filter:{name:""}},selected:null}),this.createInstitutionUseCase=e,this.findInstitutionsUseCase=n,this.findInstitutionByIdUseCase=B,this.updateInstitutionUseCase=H,this.deleteInstitutionUseCase=O}load(){this.onLoad(this.findInstitutionsUseCase.execute(this.state.params))}loadOne(e){this.onLoadOne(this.findInstitutionByIdUseCase.execute(e))}create(e){this.onCreate(this.createInstitutionUseCase.execute(e))}update(e){this.onUpdate(this.updateInstitutionUseCase.execute(e))}delete(e){this.onDelete(this.deleteInstitutionUseCase.execute(e))}};function k(){return a(A,[f,b,I,D,U])}var q=class extends C{createSubjectUseCase;findSubjectsUseCase;findSubjectByIdUseCase;updateSubjectUseCase;deleteSubjectUseCase;constructor(e,n,B,H,O){super({response:{data:[],items:0,pages:0},params:{page:0,size:10,filter:{name:""}},selected:null}),this.createSubjectUseCase=e,this.findSubjectsUseCase=n,this.findSubjectByIdUseCase=B,this.updateSubjectUseCase=H,this.deleteSubjectUseCase=O}load(){this.onLoad(this.findSubjectsUseCase.execute(this.state.params))}loadOne(e){this.onLoadOne(this.findSubjectByIdUseCase.execute(e))}create(e){this.onCreate(this.createSubjectUseCase.execute(e))}update(e){this.onUpdate(this.updateSubjectUseCase.execute(e))}delete(e){this.onDelete(this.deleteSubjectUseCase.execute(e))}};function G(){return a(q,[m,F,j,P,S])}function ie(){return[w(),K(),Y(),X(),re(),Q(),$()]}function ne(){return[L(),M(),_(),Z(),oe(),T(),k()]}function ue(){return[R(),N(),te(),ee(),se(),V(),G()]}function Nr(){return[...ue(),...ne(),...ie()]}var Vr=(t,e)=>(t.loadOne(e.id),t.selected$.pipe(J(n=>!!n)));export{W as a,A as b,q as c,Nr as d,Vr as e};