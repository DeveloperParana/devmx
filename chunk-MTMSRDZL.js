import{g as h,m as a}from"./chunk-WJBOH2N4.js";import{L as s,a as p}from"./chunk-TEKHUYWQ.js";var f=class{};var i=class{};var n=class{};var c=class{};function X(r){return{provide:n,useValue:r}}function Y(r){return{provide:c,useClass:r}}function m(r,t){return{provide:r,useFactory(...e){return new r(...e)},deps:t}}function H(r,t,e){return{provide:r,useFactory(...o){return new t(...o)},deps:e}}function d(r,t,e){return{provide:r,useFactory(...o){return new t(...o)},deps:e}}function et(r,t){return{provide:r,useFactory(...e){return new r(...e)},deps:t}}var l=class{http;env;constructor(t,e){this.http=t,this.env=e}findRepoContributors(t){let e=`${this.env.api.url}/github/contributors/${t}`;return this.http.get(e)}};function ht(){return d(i,l,[c,n])}var x=class{http;env;endpoint;get url(){return`${this.env.api.url}/${this.endpoint}`}constructor(t,e,o){this.http=t,this.env=e,this.endpoint=o}create(t){return this.http.post(this.url,t)}find(t){let e=[this.url,h(t)];return this.http.get(e.join("?"))}findOne(t){let e=[this.url,t];return this.http.get(e.join("/"))}update(t,e){let o=[this.url,t];return this.http.patch(o.join("/"),e)}delete(t){let e=[this.url,t];return this.http.delete(e.join("/"))}};var u=class extends a{githubService;contributors$=this.select(t=>t.contributors);constructor(t){super({contributors:[]}),this.githubService=t}loadContributors(t){let e=this.githubService.findRepoContributors(t),o=v=>{this.setState({contributors:v})};e.pipe(s(1)).subscribe(o)}};function zt(){return m(u,[i])}var g=class{static toParams(t,e){return{sort:e?`${t}:${e}`:null}}static fromParams(t){let[e,o]=t.split(":")??[];return o?{[e]:o}:{}}};var b=class extends a{response$=this.select(t=>t.response);selected$=this.select(t=>t.selected);setParams(t){this.setState({params:t})}patchParams(t){let e=p(p({},this.state.params),t);this.setState({params:e})}setPage(t,e=10){let{params:o}=this.state;o.page=t,o.size=e,this.setState({params:o})}setFilter(t){let{params:e}=this.state;e.filter=t,this.setState({params:e})}setSort(t){let{params:e}=this.state;e.sort=t,this.setState({params:e})}onLoad(t){t.pipe(s(1)).subscribe(e=>this.setState({response:e}))}onLoadOne(t){this.setState({selected:null}),t.pipe(s(1)).subscribe(e=>this.setState({selected:e}))}onCreate(t){t.pipe(s(1)).subscribe(()=>this.load())}onUpdate(t){t.pipe(s(1)).subscribe(()=>this.load())}onDelete(t){t.pipe(s(1)).subscribe(()=>this.load())}};export{f as a,n as b,c,m as d,H as e,et as f,ht as g,x as h,u as i,zt as j,X as k,Y as l,g as m,b as n};
