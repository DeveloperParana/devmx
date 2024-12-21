import{c as ae,d as oe,e as ne,f as ie,g as re,h as le}from"./chunk-O3T3UZHL.js";import{c as K,e as X,f as tt}from"./chunk-HGOTYYGI.js";import{c as zt,e as Ut,i as Ht,j as jt}from"./chunk-AND6K73U.js";import{a as Xt}from"./chunk-A3N3AUUJ.js";import{j as Pt}from"./chunk-6BGAZ7SQ.js";import{a as q,b as Kt,e as W,f as Y,g as Z,l as J}from"./chunk-PAP2P7QR.js";import{a as et,b as at,e as te,f as ot,g as ee,i as nt}from"./chunk-EC6LD5KM.js";import{a as U,b as $t,c as H,e as ft,g as qt,h as j,i as Wt,j as Q,l as E,o as Yt,p as Zt,s as Jt,x as $}from"./chunk-EDIJ2EBQ.js";import{Q as Bt,T as bt,U as Gt,Y as ht,aa as Rt,ca as Lt,ga as Vt,ha as At,ia as Nt,q as Ot,xa as Qt}from"./chunk-W5KNOAKV.js";import{$b as k,Aa as kt,Ea as F,Fc as A,Ha as y,Hc as D,Ia as P,Ja as O,Jc as S,Kb as Et,Kc as mt,Lc as N,Mb as dt,Nb as C,Sb as G,Sc as pt,Tb as u,Vb as ct,Vc as b,Yb as _,ac as M,bc as n,cc as r,da as _t,dc as m,fa as yt,gb as Mt,ha as st,hc as wt,ka as p,kc as v,lb as l,mb as B,mc as T,nc as R,oc as L,pc as Dt,pe as z,qc as Ft,rc as ut,sb as Tt,sc as gt,ta as Ct,ua as xt,ub as g,vb as It,wb as St,wc as V,xb as f,xc as s,yc as x,zc as I}from"./chunk-TEKHUYWQ.js";var it=class extends Q{constructor(){super({start:new E,end:new E})}};function pe(e,c){e&1&&s(0," Data inicial ")}function be(e,c){e&1&&s(0," Data final ")}var Ke=(()=>{class e{rangeChange=y();form=new it;constructor(){this.form.valueChanges.pipe(Xt()).subscribe(t=>{t.start instanceof Date&&t.end instanceof Date&&this.rangeChange.emit(this.form.getRawValue())})}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=g({type:e,selectors:[["devmx-event-date-range"]],outputs:{rangeChange:"rangeChange"},features:[A([Rt()])],decls:11,vars:5,consts:[["picker",""],[3,"formGroup","rangePicker"],["matStartDate","","formControlName","start","placeholder","Data inicial"],["matEndDate","","formControlName","end","placeholder","Data final"],["matIconSuffix","",3,"for"]],template:function(a,o){if(a&1&&(n(0,"mat-form-field")(1,"mat-date-range-input",1),m(2,"input",2)(3,"input",3),r(),m(4,"mat-datepicker-toggle",4)(5,"mat-date-range-picker",null,0),n(7,"mat-error"),C(8,pe,1,0)(9,be,1,0),s(10," inv\xE1lida "),r()()),a&2){let i=V(6);l(),u("formGroup",o.form)("rangePicker",i),l(3),u("for",i),l(4),_(o.form.controls.start.hasError("matStartDateInvalid")?8:-1),l(),_(o.form.controls.end.hasError("matEndDateInvalid")?9:-1)}},dependencies:[$,H,j,Wt,Zt,Jt,jt,Ht,zt,Ut,le,ae,ie,oe,ne,re],encapsulation:2,changeDetection:0})}return e})();var ve=(e,c)=>c.id,_e=e=>[e],ye=e=>({right:e}),Ce=e=>({outlets:e}),xe=e=>["/","eventos",e];function ke(e,c){if(e&1&&(n(0,"a",1),m(1,"devmx-icon",2),n(2,"div",3),s(3),r(),n(4,"div",4),s(5),S(6,"date"),r()()),e&2){let t=c.$implicit;u("routerLink",D(12,xe,D(10,Ce,D(8,ye,D(6,_e,t.id))))),l(3),x(t.title),l(2),x(N(6,3,t.date,"longDate"))}}var sa=(()=>{class e{data=P([]);static \u0275fac=function(a){return new(a||e)};static \u0275cmp=g({type:e,selectors:[["devmx-event-card-list"]],inputs:{data:[1,"data"]},decls:7,vars:0,consts:[[1,"events-card"],["mat-list-item","",3,"routerLink"],["matListItemIcon","","name","calendar"],["matListItemTitle",""],["matListItemLine",""]],template:function(a,o){a&1&&(n(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),s(3,"Eventos"),r()(),n(4,"mat-list"),k(5,ke,7,14,"a",1,ve),r()()),a&2&&(l(5),M(o.data()))},dependencies:[nt,et,ot,at,J,Y,Z,W,Kt,q,U,z,Pt],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   a[_ngcontent-%COMP%]:link{cursor:pointer}"],changeDetection:0})}return e})();var Te=(e,c)=>c.value;function Ie(e,c){if(e&1&&(n(0,"mat-chip-option",1),s(1),r()),e&2){let t=c.$implicit;u("value",t.value),l(),I(" ",t.viewValue," ")}}var pa=(()=>{class e{filterChange=y();formats=[{value:"in-person",viewValue:"Presencial"},{value:"online",viewValue:"Online"},{value:"mixed",viewValue:"H\xEDbrido"}];static \u0275fac=function(a){return new(a||e)};static \u0275cmp=g({type:e,selectors:[["devmx-event-filter"]],outputs:{filterChange:"filterChange"},decls:3,vars:0,consts:[[3,"change"],[3,"value"]],template:function(a,o){a&1&&(n(0,"mat-chip-listbox",0),v("change",function(d){return o.filterChange.emit(d.value)}),k(1,Ie,2,2,"mat-chip-option",1,Te),r()),a&2&&(l(),M(o.formats))},dependencies:[tt,X,K],encapsulation:2,changeDetection:0})}return e})();var Se=["button"],Ee=["*"];function we(e,c){if(e&1&&m(0,"mat-pseudo-checkbox",3),e&2){let t=T();u("disabled",t.disabled)}}function De(e,c){if(e&1&&m(0,"mat-pseudo-checkbox",3),e&2){let t=T();u("disabled",t.disabled)}}var se=new st("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:Fe});function Fe(){return{hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1}}var de=new st("MatButtonToggleGroup"),Pe={provide:$t,useExisting:_t(()=>vt),multi:!0},rt=class{source;value;constructor(c,t){this.source=c,this.value=t}},vt=(()=>{class e{_changeDetector=p(pt);_dir=p(Gt,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(t){this._name=t,this._markButtonsForCheck()}_name=p(bt).getId("mat-button-toggle-group-");vertical;get value(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t.map(a=>a.value):t[0]?t[0].value:void 0}set value(t){this._setSelectionByValue(t),this.valueChange.emit(this.value)}valueChange=new F;get selected(){let t=this._selectionModel?this._selectionModel.selected:[];return this.multiple?t:t[0]||null}get multiple(){return this._multiple}set multiple(t){this._multiple=t,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new F;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(t){this._hideSingleSelectionIndicator=t,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(t){this._hideMultipleSelectionIndicator=t,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let t=p(se,{optional:!0});this.appearance=t&&t.appearance?t.appearance:"standard",this.hideSingleSelectionIndicator=t?.hideSingleSelectionIndicator??!1,this.hideMultipleSelectionIndicator=t?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Qt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(t=>t.checked)),this.multiple||this._initializeTabIndex()}writeValue(t){this.value=t,this._changeDetector.markForCheck()}registerOnChange(t){this._controlValueAccessorChangeFn=t}registerOnTouched(t){this._onTouched=t}setDisabledState(t){this.disabled=t}_keydown(t){if(this.multiple||this.disabled)return;let o=t.target.id,i=this._buttonToggles.toArray().findIndex(w=>w.buttonId===o),d=null;switch(t.keyCode){case 32:case 13:d=this._buttonToggles.get(i)||null;break;case 38:d=this._getNextButton(i,-1);break;case 37:d=this._getNextButton(i,this.dir==="ltr"?-1:1);break;case 40:d=this._getNextButton(i,1);break;case 39:d=this._getNextButton(i,this.dir==="ltr"?1:-1);break;default:return}d&&(t.preventDefault(),d._onButtonClick(),d.focus())}_emitChangeEvent(t){let a=new rt(t,this.value);this._rawValue=a.value,this._controlValueAccessorChangeFn(a.value),this.change.emit(a)}_syncButtonToggle(t,a,o=!1,i=!1){!this.multiple&&this.selected&&!t.checked&&(this.selected.checked=!1),this._selectionModel?a?this._selectionModel.select(t):this._selectionModel.deselect(t):i=!0,i?Promise.resolve().then(()=>this._updateModelValue(t,o)):this._updateModelValue(t,o)}_isSelected(t){return this._selectionModel&&this._selectionModel.isSelected(t)}_isPrechecked(t){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(a=>t.value!=null&&a===t.value):t.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(t=>{t.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let t=0;t<this._buttonToggles.length;t++){let a=this._buttonToggles.get(t);if(!a.disabled){a.tabIndex=0;break}}this._markButtonsForCheck()}_getNextButton(t,a){let o=this._buttonToggles;for(let i=1;i<=o.length;i++){let d=(t+a*i+o.length)%o.length,w=o.get(d);if(w&&!w.disabled)return w}return null}_setSelectionByValue(t){this._rawValue=t,this._buttonToggles&&(this.multiple&&t?(Array.isArray(t),this._clearSelection(),t.forEach(a=>this._selectValue(a))):(this._clearSelection(),this._selectValue(t)))}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(t=>{t.checked=!1,this.multiple||(t.tabIndex=-1)})}_selectValue(t){let a=this._buttonToggles.find(o=>o.value!=null&&o.value===t);a&&(a.checked=!0,this._selectionModel.select(a),this.multiple||(a.tabIndex=0))}_updateModelValue(t,a){a&&this._emitChangeEvent(t),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(t=>t._markForCheck())}static \u0275fac=function(a){return new(a||e)};static \u0275dir=St({type:e,selectors:[["mat-button-toggle-group"]],contentQueries:function(a,o,i){if(a&1&&Dt(i,lt,5),a&2){let d;ut(d=gt())&&(o._buttonToggles=d)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(a,o){a&1&&v("keydown",function(d){return o._keydown(d)}),a&2&&(G("role",o.multiple?"group":"radiogroup")("aria-disabled",o.disabled),ct("mat-button-toggle-vertical",o.vertical)("mat-button-toggle-group-appearance-standard",o.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",b],value:"value",multiple:[2,"multiple","multiple",b],disabled:[2,"disabled","disabled",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",b],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",b]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[A([Pe,{provide:de,useExisting:e}]),dt]})}return e})(),lt=(()=>{class e{_changeDetectorRef=p(pt);_elementRef=p(O);_focusMonitor=p(Bt);_idGenerator=p(bt);_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex}set tabIndex(t){this._tabIndex=t,this._markForCheck()}_tabIndex;disableRipple;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(t){this._appearance=t}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(t){t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(t){this._disabled=t}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(t){this._disabledInteractive=t}_disabledInteractive;change=new F;constructor(){p(Ot).load(Lt);let t=p(de,{optional:!0}),a=p(new kt("tabindex"),{optional:!0}),o=p(se,{optional:!0}),i=Number(a);this.tabIndex=i||i===0?i:null,this.buttonToggleGroup=t,this.appearance=o&&o.appearance?o.appearance:"standard",this.disabledInteractive=o?.disabledInteractive??!1}ngOnInit(){let t=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),t&&(t._isPrechecked(this)?this.checked=!0:t._isSelected(this)!==this._checked&&t._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let t=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),t&&t._isSelected(this)&&t._syncButtonToggle(this,!1,!1,!0)}focus(t){this._buttonElement.nativeElement.focus(t)}_onButtonClick(){if(this.disabled)return;let t=this.isSingleSelector()?!0:!this._checked;if(t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let a=this.buttonToggleGroup._buttonToggles.find(o=>o.tabIndex===0);a&&(a.tabIndex=-1),this.tabIndex=0}this.change.emit(new rt(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=g({type:e,selectors:[["mat-button-toggle"]],viewQuery:function(a,o){if(a&1&&Ft(Se,5),a&2){let i;ut(i=gt())&&(o._buttonElement=i.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(a,o){a&1&&v("focus",function(){return o.focus()}),a&2&&(G("aria-label",null)("aria-labelledby",null)("id",o.id)("name",null),ct("mat-button-toggle-standalone",!o.buttonToggleGroup)("mat-button-toggle-checked",o.checked)("mat-button-toggle-disabled",o.disabled)("mat-button-toggle-disabled-interactive",o.disabledInteractive)("mat-button-toggle-appearance-standard",o.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",b],appearance:"appearance",checked:[2,"checked","checked",b],disabled:[2,"disabled","disabled",b],disabledInteractive:[2,"disabledInteractive","disabledInteractive",b]},outputs:{change:"change"},exportAs:["matButtonToggle"],features:[dt],ngContentSelectors:Ee,decls:8,vars:14,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-label-content"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"]],template:function(a,o){if(a&1){let i=wt();R(),n(0,"button",1,0),v("click",function(){return Ct(i),xt(o._onButtonClick())}),n(2,"span",2),C(3,we,1,1,"mat-pseudo-checkbox",3)(4,De,1,1,"mat-pseudo-checkbox",3),L(5),r()(),m(6,"span",4)(7,"span",5)}if(a&2){let i=V(1);u("id",o.buttonId)("disabled",o.disabled&&!o.disabledInteractive||null),G("role",o.isSingleSelector()?"radio":"button")("tabindex",o.disabled&&!o.disabledInteractive?-1:o.tabIndex)("aria-pressed",o.isSingleSelector()?null:o.checked)("aria-checked",o.isSingleSelector()?o.checked:null)("name",o._getButtonName())("aria-label",o.ariaLabel)("aria-labelledby",o.ariaLabelledby)("aria-disabled",o.disabled&&o.disabledInteractive?"true":null),l(3),_(o.buttonToggleGroup&&o.checked&&!o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideSingleSelectionIndicator?3:-1),l(),_(o.buttonToggleGroup&&o.checked&&o.buttonToggleGroup.multiple&&!o.buttonToggleGroup.hideMultipleSelectionIndicator?4:-1),l(3),u("matRippleTrigger",i)("matRippleDisabled",o.disableRipple||o.disabled)}},dependencies:[Vt,Nt],styles:[".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle .mat-pseudo-checkbox{margin-right:12px}[dir=rtl] .mat-button-toggle .mat-pseudo-checkbox{margin-right:0;margin-left:12px}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-standard-button-toggle-background-color, transparent);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full))}.mat-button-toggle-group-appearance-standard .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-full))}"],encapsulation:2,changeDetection:0})}return e})(),ce=(()=>{class e{static \u0275fac=function(a){return new(a||e)};static \u0275mod=It({type:e});static \u0275inj=yt({imports:[ht,At,lt,ht]})}return e})();var Wa=(()=>{class e extends H{ngControl;statusChange=y();get control(){return this.ngControl.control}constructor(t,a,o){super(t,a,!0),this.ngControl=o,this.ngControl.valueAccessor=this}static \u0275fac=function(a){return new(a||e)(B(Tt),B(O),B(qt,10))};static \u0275cmp=g({type:e,selectors:[["devmx-rsvp-button"]],outputs:{statusChange:"statusChange"},features:[Et],decls:7,vars:1,consts:[["aria-label","Presen\xE7a",1,"button-group",3,"change","formControl"],["value","confirmed"],["value","declined"],["value","maybe"]],template:function(a,o){a&1&&(n(0,"mat-button-toggle-group",0),v("change",function(){return o.statusChange.emit()}),n(1,"mat-button-toggle",1),s(2,"Vou!"),r(),n(3,"mat-button-toggle",2),s(4,"N\xE3o vou"),r(),n(5,"mat-button-toggle",3),s(6,"Talvez"),r()()),a&2&&u("formControl",o.control)},dependencies:[$,j,Yt,ce,vt,lt],encapsulation:2,changeDetection:0})}return e})();var ue=(()=>{class e{transform(t){switch(t){case"in-person":return"Presencial";case"online":return"Online";case"mixed":return"H\xEDbrido"}}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=f({name:"eventFormat",type:e,pure:!0})}return e})();var Ja=(()=>{class e{transform(t,a){return t.find(o=>o.user.id===a)??null}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=f({name:"findInRSVP",type:e,pure:!0})}return e})();var Xa=(()=>{class e{transform(t,a){return t.filter(o=>o.status===a)}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=f({name:"rsvpByStatus",type:e,pure:!0})}return e})();var eo=(()=>{class e{transform(t){return["in-person","mixed"].includes(t)}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=f({name:"showEventAddress",type:e,pure:!0})}return e})();var oo=(()=>{class e{transform(t){return["online","mixed"].includes(t)}static \u0275fac=function(a){return new(a||e)};static \u0275pipe=f({name:"showEventLink",type:e,pure:!0})}return e})();var Be=["*"];function Ge(e,c){if(e&1&&m(0,"img",1),e&2){let t=T();u("src",t.event.cover,Mt)("alt",t.event.title)}}function Re(e,c){if(e&1&&(n(0,"mat-list-item"),m(1,"devmx-icon",3),n(2,"div",4),s(3),S(4,"eventFormat"),r()(),n(5,"mat-list-item"),m(6,"devmx-icon",5),n(7,"div",4),s(8),S(9,"date"),r()(),n(10,"mat-list-item"),m(11,"devmx-icon",6),n(12,"div",4),s(13),S(14,"date"),r()()),e&2){let t=T();l(3),x(mt(4,3,t.event.format)),l(5),I("",N(9,5,t.event.date,"shortTime"),"h"),l(5),x(mt(14,8,t.event.date))}}var po=(()=>{class e{data=P.required();get event(){return this.data()}static \u0275fac=function(a){return new(a||e)};static \u0275cmp=g({type:e,selectors:[["devmx-event-card"]],inputs:{data:[1,"data"]},ngContentSelectors:Be,decls:9,vars:3,consts:[[1,"event-card"],["mat-card-image","",3,"src","alt"],["align","end",1,"event-card-actions"],["matListItemIcon","","name","transport/flag-pin"],["matListItemTitle",""],["matListItemIcon","","name","alarm-clock-alert"],["matListItemIcon","","name","calendar"]],template:function(a,o){a&1&&(R(),n(0,"mat-card",0),C(1,Ge,1,2,"img",1),n(2,"mat-card-header")(3,"mat-card-title"),s(4),r()(),n(5,"mat-list"),C(6,Re,15,10),r(),n(7,"mat-card-actions",2),L(8),r()()),a&2&&(l(),_(o.event.cover?1:-1),l(3),x(o.event.title),l(2),_(o.event.date?6:-1))},dependencies:[nt,et,te,ot,ee,at,J,Y,Z,W,q,ue,U,z],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;width:100%;flex:1}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;transition:box-shadow .28s cubic-bezier(.4,0,.2,1);box-shadow:0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f;max-width:100%}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]   .event-address[_ngcontent-%COMP%]   .mdc-list-item__primary-text[_ngcontent-%COMP%]{max-width:calc(100% - 4em)}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]{padding-bottom:1em}[_nghost-%COMP%]   .event-card-header[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]{gap:.4em;display:flex;line-height:1;align-items:center}[_nghost-%COMP%]   .event-card-content[_ngcontent-%COMP%]{flex:1}[_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]:active, [_nghost-%COMP%]   .event-card[_ngcontent-%COMP%]:hover{box-shadow:0 3px 5px -1px #0003,0 6px 10px #00000024,0 1px 18px #0000001f}[_nghost-%COMP%]   .event-card-actions[_ngcontent-%COMP%]:empty{display:none}"],changeDetection:0})}return e})();var Le=(e,c)=>c.value;function Ve(e,c){if(e&1&&(n(0,"mat-chip-option",1),s(1),r()),e&2){let t=c.$implicit;u("value",t.value),l(),I(" ",t.viewValue," ")}}var yo=(()=>{class e{timeChange=y();times=[{value:"",viewValue:"Chegando"},{value:"until",viewValue:"Passados"}];static \u0275fac=function(a){return new(a||e)};static \u0275cmp=g({type:e,selectors:[["devmx-event-time"]],outputs:{timeChange:"timeChange"},decls:3,vars:0,consts:[[3,"change"],[3,"value"]],template:function(a,o){a&1&&(n(0,"mat-chip-listbox",0),v("change",function(d){return o.timeChange.emit(d.value)}),k(1,Ve,2,2,"mat-chip-option",1,Le),r()),a&2&&(l(),M(o.times))},dependencies:[tt,X,K],encapsulation:2,changeDetection:0})}return e})();var ge=class extends Q{constructor(){super({event:new E("",{nonNullable:!0,validators:[ft.required]}),status:new E("",{nonNullable:!0,validators:[ft.required]})})}};export{it as a,Ke as b,sa as c,pa as d,Wa as e,ue as f,Ja as g,Xa as h,eo as i,oo as j,po as k,yo as l,ge as m};
