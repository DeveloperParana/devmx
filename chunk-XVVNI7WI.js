import{b as zt,d as Ut,e as Ht}from"./chunk-27JLR3AO.js";import{a as N,b as Nt,e as z,f as U,g as H,l as j}from"./chunk-PAP2P7QR.js";import{a as Q,b as q,e as jt,f as W,g as Qt,i as $}from"./chunk-EC6LD5KM.js";import{a as A,b as Ft,c as Gt,e as rt,g as Dt,h as Lt,j as Rt,l as lt,o as Vt,x as At}from"./chunk-EDIJ2EBQ.js";import{j as Mt}from"./chunk-KXTQ2UTD.js";import{Q as It,T as nt,U as St,Y as it,ca as wt,ga as Et,ha as Pt,ia as Bt,q as Tt,xa as Ot}from"./chunk-W5KNOAKV.js";import{$b as O,Aa as pt,Ea as I,Fc as kt,Ha as S,Hc as T,Ia as w,Ja as E,Jc as C,Kb as vt,Kc as at,Lc as R,Mb as K,Nb as M,Sb as B,Sc as ot,Tb as g,Vb as X,Vc as m,Yb as y,ac as F,bc as i,cc as r,da as dt,dc as p,fa as ct,gb as mt,ha as J,hc as _t,ka as u,kc as v,lb as s,mb as P,mc as x,nc as G,oc as D,pc as yt,pe as V,qc as xt,rc as tt,sb as bt,sc as et,ta as ut,ua as gt,ub as b,vb as ht,wb as ft,wc as Ct,xb as h,xc as d,yc as _,zc as L}from"./chunk-TEKHUYWQ.js";var Xt=(e,c)=>c.id,te=e=>[e],ee=e=>({right:e}),ae=e=>({outlets:e}),oe=e=>["/","eventos",e];function ne(e,c){if(e&1&&(i(0,"a",1),p(1,"devmx-icon",2),i(2,"div",3),d(3),r(),i(4,"div",4),d(5),C(6,"date"),r()()),e&2){let t=c.$implicit;g("routerLink",T(12,oe,T(10,ae,T(8,ee,T(6,te,t.id))))),s(3),_(t.title),s(2),_(R(6,3,t.date,"longDate"))}}var Te=(()=>{class e{data=w([]);static \u0275fac=function(a){return new(a||e)};static \u0275cmp=b({type:e,selectors:[["devmx-event-card-list"]],inputs:{data:[1,"data"]},decls:7,vars:0,consts:[[1,"events-card"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","name","calendar"],["matListItemTitle",""],["matListItemLine",""]],template:function(a,o){a&1&&(i(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),d(3,"Eventos"),r()(),i(4,"mat-list"),O(5,ne,7,14,"a",1,Xt),r()()),a&2&&(s(5),F(o.data()))},dependencies:[$,Q,W,q,j,U,H,z,Nt,N,A,V,Mt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   a[_ngcontent-%COMP%]:link{cursor:pointer}"],changeDetection:0})}return e})();var ie=(e,c)=>c.value;function re(e,c){if(e&1&&(i(0,"mat-chip-option",1),d(1),r()),e&2){let t=c.$implicit;g("value",t.value),s(),L(" ",t.viewValue," ")}}var Oe=(()=>{class e{filterChange=S();formats=[{value:"in-person",viewValue:"Presencial"},{value:"online",viewValue:"Online"},{value:"mixed",viewValue:"H\xEDbrido"}];static \u0275fac=function(a){return new(a||e)};static \u0275cmp=b({type:e,selectors:[["devmx-event-filter"]],outputs:{filterChange:"filterChange"},decls:3,vars:0,consts:[[3,"change"],[3,"value"]],template:function(a,o){a&1&&(i(0,"mat-chip-listbox",0),v("change",function(l){return o.filterChange.emit(l.value)}),O(1,re,2,2,"mat-chip-option",1,ie),r()),a&2&&(s(),F(o.formats))},dependencies:[Ht,Ut,zt],encapsulation:2,changeDetection:0})}return e})();var le=["button"],se=["*"];function de(e,c){if(e&1&&p(0,"mat-pseudo-checkbox",3),e&2){let t=x();g("disabled",t.disabled)}}function ce(e,c){if(e&1&&p(0,"mat-pseudo-checkbox",3),e&2){let t=x();g("disabled",t.disabled)}}var qt=new J("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:ue});function ue(){return{hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1}}var Wt=new J("MatButtonToggleGroup"),ge={provide:Ft,useExisting:dt(()=>st),multi:!0},Y=class{source;value;constructor(c,t){this.source=c,this.value=t}},st=(()=>{class e{_changeDetector=u(ot);_dir=u(St,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=u(nt).getId("mat-button-toggle-group-");vertical;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(a=>a.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new I;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new I;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=u(qt,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this.hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this.hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Ot(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled)return;let o=t.target.id,n=this._buttonToggles.toArray().findIndex(k=>k.buttonId===o),l=null;switch(t.keyCode){case 32:case 13:l=this._buttonToggles.get(n)||null;break;case 38:l=this._getNextButton(n,-1);break;case 37:l=this._getNextButton(n,this.dir==="ltr"?-1:1);break;case 40:l=this._getNextButton(n,1);break;case 39:l=this._getNextButton(n,this.dir==="ltr"?1:-1);break;default:return}l&&(t.preventDefault(),l._onButtonClick(),l.focus())}_emitChangeEvent(t){let a=new Y(t,this.value);this._rawValue=a.value,this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(t,a,o=!1,n=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?a?this._selectionModel.select(t):this._selectionModel.deselect(t):n=!0,n?Promise.resolve().then(()=>this._updateModelValue(t,o)):this._updateModelValue(t,o)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(a=>t.value!=null&&a===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let a=this._buttonToggles.get(t);if(!a.disabled){a.tabIndex=0;break}}this._markButtonsForCheck()}_getNextButton(t,a){let o=this._buttonToggles;for(let n=1;n<=o.length;n++){let l=(t+a*n+o.length)%o.length,k=o.get(l);if(k&&!k.disabled)return k}return null}_setSelectionByValue(t){this._rawValue=t,this._buttonToggles&&(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(a=>this._selectValue(a))):(this._clearSelection(),this._selectValue(t)))}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t){let a=this._buttonToggles.find(o=>o.value!=null&&o.value===t);a&&(a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0))}_updateModelValue(t,a){a&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(a){return new(a||e)};static \u0275dir=ft({type:e,selectors:[["mat-button-toggle-group"]],contentQueries:function(a,o,n){if(a&1&&yt(n,Z,5),a&2){let l;tt(l=et())&&(o._buttonToggles=l)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(a,o){a&1&&v("keydown",function(l){return o._keydown(l)}),a&2&&(B("role",o.multiple?"group":"radiogroup")("aria-disabled",o.disabled),X("mat-button-toggle-vertical",o.vertical)("mat-button-toggle-group-appearance-standard",o.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",m],value:"value",multiple:[2,"multiple","multiple",m],disabled:[2,"disabled","disabled",m],disabledInteractive:[2,"disabledInteractive","disabledInteractive",m],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",m],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",m]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[kt([ge,{provide:Wt,useExisting:e}]),K]})}return e})(),Z=(()=>{class e{_changeDetectorRef=u(ot);_elementRef=u(E);_focusMonitor=u(It);_idGenerator=u(nt);_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex}set tabIndex(t){this._tabIndex=t,this._markForCheck()}_tabIndex;disableRipple;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new I;constructor(){u(Tt).load(wt);let t=u(Wt,{optional:!0}),a=u(new pt("tabindex"),{optional:!0}),o=u(qt,{optional:!0}),n=Number(a);this.tabIndex=n||n===0?n:null,this.buttonToggleGroup=t,this.appearance=o&&o.appearance?o.appearance:"standard",this.disabledInteractive=o?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new Y(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=b({type:e,selectors:[["mat-button-toggle"]],viewQuery:function(a,o){if(a&1&&xt(le,5),a&2){let n;tt(n=et())&&(o._buttonElement=n.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(a,o){a&1&&v("focus",function(){return o.focus()}),a&2&&(B("aria-label",null)("aria-labelledby",null)("id",o.id)("name",null),X("mat-button-toggle-standalone",!o.buttonToggleGroup)("mat-button-toggle-checked",o.checked)("mat-button-toggle-disabled",o.disabled)("mat-button-toggle-disabled-interactive",o.disabledInteractive)("mat-button-toggle-appearance-standard",o.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",m],appearance:"appearance",checked:[2,"checked","checked",m],disabled:[2,"disabled","disabled",m],disabledInteractive:[2,"disabledInteractive","disabledInteractive",m]},outputs:{change:"change"},exportAs:["matButtonToggle"],features:[K],ngContentSelectors:se,decls:8,vars:14,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-label-content"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(a,o){if(a&1){let n=_t();G(),i(0,"button",1,0),v("click",function(){return ut(n),gt(o._onButtonClick())}),i(2,"span",2),M(3,de,1,1,"mat-pseudo-checkbox",3)(4,ce,1,1,"mat-pseudo-checkbox",3),D(5),r()(),p(6,"span",4)(7,"span",5)}if(a&2){let n=Ct(1);g("id",o.buttonId)("disabled",o.disabled&&!o.disabledInteractive||null),B("role",o.isSingleSelector()?"radio":"button")("tabindex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("aria-pressed",o.isSingleSelector()?null:o.checked)("aria-checked",o.isSingleSelector()?o.checked:null)("name",o._getButtonName())("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),s(3),y(o.buttonToggleGroup&&o.checked&&!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator?3:-1),s(),y(o.buttonToggleGroup&&o.checked&&o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator?4:-1),s(3),g("matRippleTrigger",n)("matRippleDisabled",o.disableRipple||o.disabled)}},dependencies:[Et,Bt],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-standard-button-toggle-background-color, transparent);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full))}"],encapsulation:2,changeDetection:0})}return e})(),$t=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=ht({type:e});static \u0275inj=ct({imports:[it,Pt,Z,it]})}return e})();var pa=(()=>{class e extends Gt{ngControl;statusChange=S();get control(){return this.ngControl.control}constructor(t,a,o){super(t,a,!0),this.ngControl=o,this.ngControl.valueAccessor=this}static \u0275fac=function(a){return new(a||e)(P(bt),P(E),P(Dt,10))};static \u0275cmp=b({type:e,selectors:[["devmx-rsvp-button"]],outputs:{statusChange:"statusChange"},features:[vt],decls:7,vars:1,consts:[["aria-label","Presen\xE7a",1,"button-group",3,"change","formControl"],["value","confirmed"],["value","declined"],["value","maybe"]],template:function(a,o){a&1&&(i(0,"mat-button-toggle-group",0),v("change",function(){return o.statusChange.emit()}),i(1,"mat-button-toggle",1),d(2,"Vou!"),r(),i(3,"mat-button-toggle",2),d(4,"N\xE3o vou"),r(),i(5,"mat-button-toggle",3),d(6,"Talvez"),r()()),a&2&&g("formControl",o.control)},dependencies:[At,Lt,Vt,$t,st,Z],encapsulation:2,changeDetection:0})}return e})();var Yt=(()=>{class e{transform(t){switch(t){case"in-person":return"Presencial";case"online":return"Online";case"mixed":return"H\xEDbrido"}}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"eventFormat",type:e,pure:!0})}return e})();var ha=(()=>{class e{transform(t,a){return t.find(o=>o.user.id===a)??null}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"findInRSVP",type:e,pure:!0})}return e})();var va=(()=>{class e{transform(t,a){return t.filter(o=>o.status===a)}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"rsvpByStatus",type:e,pure:!0})}return e})();var ya=(()=>{class e{transform(t){return["in-person","mixed"].includes(t)}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"showEventAddress",type:e,pure:!0})}return e})();var Ca=(()=>{class e{transform(t){return["online","mixed"].includes(t)}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"showEventLink",type:e,pure:!0})}return e})();var me=["*"];function be(e,c){if(e&1&&p(0,"img",1),e&2){let t=x();g("src",t.event.cover,mt)("alt",t.event.title)}}function he(e,c){if(e&1&&(i(0,"mat-list-item"),p(1,"devmx-icon",3),i(2,"div",4),d(3),C(4,"eventFormat"),r()(),i(5,"mat-list-item"),p(6,"devmx-icon",5),i(7,"div",4),d(8),C(9,"date"),r()(),i(10,"mat-list-item"),p(11,"devmx-icon",6),i(12,"div",4),d(13),C(14,"date"),r()()),e&2){let t=x();s(3),_(at(4,3,t.event.format)),s(5),L("",R(9,5,t.event.date,"shortTime"),"h"),s(5),_(at(14,8,t.event.date))}}var Oa=(()=>{class e{data=w.required();get event(){return this.data()}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=b({type:e,selectors:[["devmx-event-card"]],inputs:{data:[1,"data"]},ngContentSelectors:me,decls:9,vars:3,consts:[[1,"event-card"],["mat-card-image","",3,"src","alt"],["align","end",1,"event-card-actions"],["matListItemIcon","","name","transport/flag-pin"],["matListItemTitle",""],["matListItemIcon","","name","alarm-clock-alert"],["matListItemIcon","","name","calendar"]],template:function(a,o){a&1&&(G(),i(0,"mat-card",0),M(1,be,1,2,"img",1),i(2,"mat-card-header")(3,"mat-card-title"),d(4),r()(),i(5,"mat-list"),M(6,he,15,10),r(),i(7,"mat-card-actions",2),D(8),r()()),a&2&&(s(),y(o.event.cover?1:-1),s(3),_(o.event.title),s(2),y(o.event.date&&o.event.time?6:-1))},dependencies:[$,Q,jt,W,Qt,q,j,U,H,z,N,Yt,A,V],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;max-width:100%}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]   .event-address[_ngcontent-%COMP%]   .mdc-list-item__primary-text[_ngcontent-%COMP%]{max-width:calc(100% - 4em)}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]{padding-bottom:1em}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{gap:.4em;display:flex;line-height:1;align-items:center}[_nghost-%COMP%]   .event-card-content[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]:hover{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}[_nghost-%COMP%]   .event-card-actions[_ngcontent-%COMP%]:empty{display:none}"],changeDetection:0})}return e})();var Zt=class extends Rt{constructor(){super({event:new lt("",{nonNullable:!0,validators:[rt.required]}),status:new lt("",{nonNullable:!0,validators:[rt.required]})})}};export{Te as a,Oe as b,pa as c,Yt as d,ha as e,va as f,ya as g,Ca as h,Oa as i,Zt as j};
