import{c as Q,e as $,f as q}from"./chunk-HGOTYYGI.js";import{j as St}from"./chunk-KXTQ2UTD.js";import{a as N,b as Ht,e as z,f as U,g as H,l as j}from"./chunk-PAP2P7QR.js";import{a as W,b as Y,e as jt,f as Z,g as Qt,i as J}from"./chunk-EC6LD5KM.js";import{a as A,b as Lt,c as Rt,e as dt,g as Vt,h as At,j as Nt,l as ct,o as zt,x as Ut}from"./chunk-EDIJ2EBQ.js";import{Q as Et,T as lt,U as Pt,Y as st,ca as Ot,ga as Bt,ha as Ft,ia as Dt,q as wt,xa as Gt}from"./chunk-W5KNOAKV.js";import{$b as C,Aa as ht,Ea as P,Fc as It,Ha as y,Hc as E,Ia as O,Ja as B,Jc as I,Kb as xt,Kc as it,Lc as R,Mb as et,Nb as w,Sb as D,Sc as rt,Tb as u,Vb as at,Vc as b,Yb as x,ac as k,bc as n,cc as r,da as gt,dc as p,fa as mt,gb as ft,ha as tt,hc as Ct,ka as g,kc as f,lb as l,mb as F,mc as M,nc as G,oc as L,pc as kt,pe as V,qc as Mt,rc as ot,sb as vt,sc as nt,ta as pt,ua as bt,ub as m,vb as _t,wb as yt,wc as Tt,xb as h,xc as c,yc as _,zc as T}from"./chunk-TEKHUYWQ.js";var Xt=(e,d)=>d.id,te=e=>[e],ee=e=>({right:e}),ae=e=>({outlets:e}),oe=e=>["/","eventos",e];function ne(e,d){if(e&1&&(n(0,"a",1),p(1,"devmx-icon",2),n(2,"div",3),c(3),r(),n(4,"div",4),c(5),I(6,"date"),r()()),e&2){let t=d.$implicit;u("routerLink",E(12,oe,E(10,ae,E(8,ee,E(6,te,t.id))))),l(3),_(t.title),l(2),_(R(6,3,t.date,"longDate"))}}var we=(()=>{class e{data=O([]);static \u0275fac=function(a){return new(a||e)};static \u0275cmp=m({type:e,selectors:[["devmx-event-card-list"]],inputs:{data:[1,"data"]},decls:7,vars:0,consts:[[1,"events-card"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","name","calendar"],["matListItemTitle",""],["matListItemLine",""]],template:function(a,o){a&1&&(n(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),c(3,"Eventos"),r()(),n(4,"mat-list"),C(5,ne,7,14,"a",1,Xt),r()()),a&2&&(l(5),k(o.data()))},dependencies:[J,W,Z,Y,j,U,H,z,Ht,N,A,V,St],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   a[_ngcontent-%COMP%]:link{cursor:pointer}"],changeDetection:0})}return e})();var re=(e,d)=>d.value;function le(e,d){if(e&1&&(n(0,"mat-chip-option",1),c(1),r()),e&2){let t=d.$implicit;u("value",t.value),l(),T(" ",t.viewValue," ")}}var De=(()=>{class e{filterChange=y();formats=[{value:"in-person",viewValue:"Presencial"},{value:"online",viewValue:"Online"},{value:"mixed",viewValue:"H\xEDbrido"}];static \u0275fac=function(a){return new(a||e)};static \u0275cmp=m({type:e,selectors:[["devmx-event-filter"]],outputs:{filterChange:"filterChange"},decls:3,vars:0,consts:[[3,"change"],[3,"value"]],template:function(a,o){a&1&&(n(0,"mat-chip-listbox",0),f("change",function(s){return o.filterChange.emit(s.value)}),C(1,le,2,2,"mat-chip-option",1,re),r()),a&2&&(l(),k(o.formats))},dependencies:[q,$,Q],encapsulation:2,changeDetection:0})}return e})();var se=["button"],de=["*"];function ce(e,d){if(e&1&&p(0,"mat-pseudo-checkbox",3),e&2){let t=M();u("disabled",t.disabled)}}function ue(e,d){if(e&1&&p(0,"mat-pseudo-checkbox",3),e&2){let t=M();u("disabled",t.disabled)}}var $t=new tt("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:ge});function ge(){return{hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1}}var qt=new tt("MatButtonToggleGroup"),me={provide:Lt,useExisting:gt(()=>ut),multi:!0},K=class{source;value;constructor(d,t){this.source=d,this.value=t}},ut=(()=>{class e{_changeDetector=g(rt);_dir=g(Pt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=g(lt).getId("mat-button-toggle-group-");vertical;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(a=>a.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new P;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new P;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=g($t,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this.hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this.hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Gt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled)return;let o=t.target.id,i=this._buttonToggles.toArray().findIndex(S=>S.buttonId===o),s=null;switch(t.keyCode){case 32:case 13:s=this._buttonToggles.get(i)||null;break;case 38:s=this._getNextButton(i,-1);break;case 37:s=this._getNextButton(i,this.dir==="ltr"?-1:1);break;case 40:s=this._getNextButton(i,1);break;case 39:s=this._getNextButton(i,this.dir==="ltr"?1:-1);break;default:return}s&&(t.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(t){let a=new K(t,this.value);this._rawValue=a.value,this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(t,a,o=!1,i=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?a?this._selectionModel.select(t):this._selectionModel.deselect(t):i=!0,i?Promise.resolve().then(()=>this._updateModelValue(t,o)):this._updateModelValue(t,o)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(a=>t.value!=null&&a===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let a=this._buttonToggles.get(t);if(!a.disabled){a.tabIndex=0;break}}this._markButtonsForCheck()}_getNextButton(t,a){let o=this._buttonToggles;for(let i=1;i<=o.length;i++){let s=(t+a*i+o.length)%o.length,S=o.get(s);if(S&&!S.disabled)return S}return null}_setSelectionByValue(t){this._rawValue=t,this._buttonToggles&&(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(a=>this._selectValue(a))):(this._clearSelection(),this._selectValue(t)))}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t){let a=this._buttonToggles.find(o=>o.value!=null&&o.value===t);a&&(a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0))}_updateModelValue(t,a){a&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(a){return new(a||e)};static \u0275dir=yt({type:e,selectors:[["mat-button-toggle-group"]],contentQueries:function(a,o,i){if(a&1&&kt(i,X,5),a&2){let s;ot(s=nt())&&(o._buttonToggles=s)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(a,o){a&1&&f("keydown",function(s){return o._keydown(s)}),a&2&&(D("role",o.multiple?"group":"radiogroup")("aria-disabled",o.disabled),at("mat-button-toggle-vertical",o.vertical)("mat-button-toggle-group-appearance-standard",o.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",b],value:"value",multiple:[2,"multiple","multiple",b],disabled:[2,"disabled","disabled",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",b]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[It([me,{provide:qt,useExisting:e}]),et]})}return e})(),X=(()=>{class e{_changeDetectorRef=g(rt);_elementRef=g(B);_focusMonitor=g(Et);_idGenerator=g(lt);_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex}set tabIndex(t){this._tabIndex=t,this._markForCheck()}_tabIndex;disableRipple;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new P;constructor(){g(wt).load(Ot);let t=g(qt,{optional:!0}),a=g(new ht("tabindex"),{optional:!0}),o=g($t,{optional:!0}),i=Number(a);this.tabIndex=i||i===0?i:null,this.buttonToggleGroup=t,this.appearance=o&&o.appearance?o.appearance:"standard",this.disabledInteractive=o?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new K(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=m({type:e,selectors:[["mat-button-toggle"]],viewQuery:function(a,o){if(a&1&&Mt(se,5),a&2){let i;ot(i=nt())&&(o._buttonElement=i.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(a,o){a&1&&f("focus",function(){return o.focus()}),a&2&&(D("aria-label",null)("aria-labelledby",null)("id",o.id)("name",null),at("mat-button-toggle-standalone",!o.buttonToggleGroup)("mat-button-toggle-checked",o.checked)("mat-button-toggle-disabled",o.disabled)("mat-button-toggle-disabled-interactive",o.disabledInteractive)("mat-button-toggle-appearance-standard",o.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",b],appearance:"appearance",checked:[2,"checked","checked",b],disabled:[2,"disabled","disabled",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b]},outputs:{change:"change"},exportAs:["matButtonToggle"],features:[et],ngContentSelectors:de,decls:8,vars:14,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-label-content"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(a,o){if(a&1){let i=Ct();G(),n(0,"button",1,0),f("click",function(){return pt(i),bt(o._onButtonClick())}),n(2,"span",2),w(3,ce,1,1,"mat-pseudo-checkbox",3)(4,ue,1,1,"mat-pseudo-checkbox",3),L(5),r()(),p(6,"span",4)(7,"span",5)}if(a&2){let i=Tt(1);u("id",o.buttonId)("disabled",o.disabled&&!o.disabledInteractive||null),D("role",o.isSingleSelector()?"radio":"button")("tabindex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("aria-pressed",o.isSingleSelector()?null:o.checked)("aria-checked",o.isSingleSelector()?o.checked:null)("name",o._getButtonName())("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),l(3),x(o.buttonToggleGroup&&o.checked&&!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator?3:-1),l(),x(o.buttonToggleGroup&&o.checked&&o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator?4:-1),l(3),u("matRippleTrigger",i)("matRippleDisabled",o.disableRipple||o.disabled)}},dependencies:[Bt,Dt],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-standard-button-toggle-background-color, transparent);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full))}"],encapsulation:2,changeDetection:0})}return e})(),Wt=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=_t({type:e});static \u0275inj=mt({imports:[st,Ft,X,st]})}return e})();var ba=(()=>{class e extends Rt{ngControl;statusChange=y();get control(){return this.ngControl.control}constructor(t,a,o){super(t,a,!0),this.ngControl=o,this.ngControl.valueAccessor=this}static \u0275fac=function(a){return new(a||e)(F(vt),F(B),F(Vt,10))};static \u0275cmp=m({type:e,selectors:[["devmx-rsvp-button"]],outputs:{statusChange:"statusChange"},features:[xt],decls:7,vars:1,consts:[["aria-label","Presen\xE7a",1,"button-group",3,"change","formControl"],["value","confirmed"],["value","declined"],["value","maybe"]],template:function(a,o){a&1&&(n(0,"mat-button-toggle-group",0),f("change",function(){return o.statusChange.emit()}),n(1,"mat-button-toggle",1),c(2,"Vou!"),r(),n(3,"mat-button-toggle",2),c(4,"N\xE3o vou"),r(),n(5,"mat-button-toggle",3),c(6,"Talvez"),r()()),a&2&&u("formControl",o.control)},dependencies:[Ut,At,zt,Wt,ut,X],encapsulation:2,changeDetection:0})}return e})();var Yt=(()=>{class e{transform(t){switch(t){case"in-person":return"Presencial";case"online":return"Online";case"mixed":return"H\xEDbrido"}}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"eventFormat",type:e,pure:!0})}return e})();var va=(()=>{class e{transform(t,a){return t.find(o=>o.user.id===a)??null}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"findInRSVP",type:e,pure:!0})}return e})();var ya=(()=>{class e{transform(t,a){return t.filter(o=>o.status===a)}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"rsvpByStatus",type:e,pure:!0})}return e})();var Ca=(()=>{class e{transform(t){return["in-person","mixed"].includes(t)}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"showEventAddress",type:e,pure:!0})}return e})();var Ma=(()=>{class e{transform(t){return["online","mixed"].includes(t)}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=h({name:"showEventLink",type:e,pure:!0})}return e})();var be=["*"];function he(e,d){if(e&1&&p(0,"img",1),e&2){let t=M();u("src",t.event.cover,ft)("alt",t.event.title)}}function fe(e,d){if(e&1&&(n(0,"mat-list-item"),p(1,"devmx-icon",3),n(2,"div",4),c(3),I(4,"eventFormat"),r()(),n(5,"mat-list-item"),p(6,"devmx-icon",5),n(7,"div",4),c(8),I(9,"date"),r()(),n(10,"mat-list-item"),p(11,"devmx-icon",6),n(12,"div",4),c(13),I(14,"date"),r()()),e&2){let t=M();l(3),_(it(4,3,t.event.format)),l(5),T("",R(9,5,t.event.date,"shortTime"),"h"),l(5),_(it(14,8,t.event.date))}}var Da=(()=>{class e{data=O.required();get event(){return this.data()}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=m({type:e,selectors:[["devmx-event-card"]],inputs:{data:[1,"data"]},ngContentSelectors:be,decls:9,vars:3,consts:[[1,"event-card"],["mat-card-image","",3,"src","alt"],["align","end",1,"event-card-actions"],["matListItemIcon","","name","transport/flag-pin"],["matListItemTitle",""],["matListItemIcon","","name","alarm-clock-alert"],["matListItemIcon","","name","calendar"]],template:function(a,o){a&1&&(G(),n(0,"mat-card",0),w(1,he,1,2,"img",1),n(2,"mat-card-header")(3,"mat-card-title"),c(4),r()(),n(5,"mat-list"),w(6,fe,15,10),r(),n(7,"mat-card-actions",2),L(8),r()()),a&2&&(l(),x(o.event.cover?1:-1),l(3),_(o.event.title),l(2),x(o.event.date?6:-1))},dependencies:[J,W,jt,Z,Qt,Y,j,U,H,z,N,Yt,A,V],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;max-width:100%}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]   .event-address[_ngcontent-%COMP%]   .mdc-list-item__primary-text[_ngcontent-%COMP%]{max-width:calc(100% - 4em)}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]{padding-bottom:1em}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{gap:.4em;display:flex;line-height:1;align-items:center}[_nghost-%COMP%]   .event-card-content[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]:hover{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}[_nghost-%COMP%]   .event-card-actions[_ngcontent-%COMP%]:empty{display:none}"],changeDetection:0})}return e})();var ve=(e,d)=>d.value;function _e(e,d){if(e&1&&(n(0,"mat-chip-option",1),c(1),r()),e&2){let t=d.$implicit;u("value",t.value),l(),T(" ",t.viewValue," ")}}var Na=(()=>{class e{timeChange=y();times=[{value:"",viewValue:"Chegando"},{value:"until",viewValue:"Passados"}];static \u0275fac=function(a){return new(a||e)};static \u0275cmp=m({type:e,selectors:[["devmx-event-time"]],outputs:{timeChange:"timeChange"},decls:3,vars:0,consts:[[3,"change"],[3,"value"]],template:function(a,o){a&1&&(n(0,"mat-chip-listbox",0),f("change",function(s){return o.timeChange.emit(s.value)}),C(1,_e,2,2,"mat-chip-option",1,ve),r()),a&2&&(l(),k(o.times))},dependencies:[q,$,Q],encapsulation:2,changeDetection:0})}return e})();var Zt=class extends Nt{constructor(){super({event:new ct("",{nonNullable:!0,validators:[dt.required]}),status:new ct("",{nonNullable:!0,validators:[dt.required]})})}};export{we as a,De as b,ba as c,Yt as d,va as e,ya as f,Ca as g,Ma as h,Da as i,Na as j,Zt as k};
