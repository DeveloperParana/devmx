import{a as Et,b as Lt}from"./chunk-KI3VPBOH.js";import{e as V,h as zt}from"./chunk-YPGVGGAF.js";import{a as Dt}from"./chunk-BJXILAOS.js";import{s as St,u as wt,v as Ot,y as Mt}from"./chunk-VPARQAQJ.js";import{i as Ct}from"./chunk-2K6IALUF.js";import{H as bt,Q as yt,S as Pt,T as Tt,U as It,Y as X,f as ut,i as ft,na as xt,s as vt,t as H,u as j}from"./chunk-W5KNOAKV.js";import{$ as g,$b as lt,Ea as J,Eb as nt,Fa as tt,Ha as et,Ia as G,Ja as E,Mb as st,Nb as D,Pa as it,Sb as y,Sc as N,Tb as d,Va as ot,Vb as Y,Vc as F,Wc as M,Yb as P,Yd as _t,_b as rt,a as x,ac as pt,bc as s,cc as p,dc as O,ea as Z,ed as gt,fa as z,ha as S,hc as T,j as C,ka as r,kc as c,l as $,la as Q,lb as l,ma as W,mb as L,mc as h,qc as dt,rc as ct,sc as ht,ta as _,ua as u,ub as b,va as w,vb as A,wa as q,wb as at,wc as mt,xc as f,yc as R,za as K,zc as k}from"./chunk-TEKHUYWQ.js";var Ht=["tooltip"],Nt=20;var Ft=new S("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let o=r(V);return()=>o.scrollStrategies.reposition({scrollThrottle:Nt})}});function jt(o){return()=>o.scrollStrategies.reposition({scrollThrottle:Nt})}var Xt={provide:Ft,deps:[V],useFactory:jt};function Ut(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}var $t=new S("mat-tooltip-default-options",{providedIn:"root",factory:Ut});var At="tooltip-panel",Rt=ft({passive:!0}),Zt=8,Qt=8,Wt=24,qt=200,Vt=(()=>{class o{_overlay=r(V);_elementRef=r(E);_scrollDispatcher=r(Ot);_viewContainerRef=r(nt);_ngZone=r(tt);_platform=r(ut);_ariaDescriber=r(bt);_focusMonitor=r(yt);_dir=r(It);_injector=r(K);_defaultOptions=r($t,{optional:!0});_overlayRef;_tooltipInstance;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_scrollStrategy=r(Ft);_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Kt;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending;get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=H(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){let e=H(t);this._disabled!==e&&(this._disabled=e,e?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=j(t)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=j(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(t){let e=this._message;this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(e)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_passiveListeners=[];_document=r(gt);_touchstartTimeout=null;_destroyed=new C;constructor(){let t=this._defaultOptions;t&&(this._showDelay=t.showDelay,this._hideDelay=t.hideDelay,t.position&&(this.position=t.position),t.positionAtOrigin&&(this.positionAtOrigin=t.positionAtOrigin),t.touchGestures&&(this.touchGestures=t.touchGestures),t.tooltipClass&&(this.tooltipClass=t.tooltipClass)),this._dir.change.pipe(g(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)}),this._viewportMargin=Zt}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(g(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let t=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([e,i])=>{t.removeEventListener(e,i,Rt)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let i=this._createOverlay(e);this._detach(),this._portal=this._portal||new Dt(this._tooltipComponent,this._viewContainerRef);let a=this._tooltipInstance=i.attach(this._portal).instance;a._triggerElement=this._elementRef.nativeElement,a._mouseLeaveHideDelay=this._hideDelay,a.afterHidden().pipe(g(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),a.show(t)}hide(t=this.hideDelay){let e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){let a=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&a._origin instanceof E)return this._overlayRef;this._detach()}let e=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),i=this._overlay.position().flexibleConnectedTo(this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e);return i.positionChanges.pipe(g(this._destroyed)).subscribe(a=>{this._updateCurrentPositionClass(a.connectionPair),this._tooltipInstance&&a.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:i,panelClass:`${this._cssClassPrefix}-${At}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(g(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(g(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(g(this._destroyed)).subscribe(a=>{this._isTooltipVisible()&&a.keyCode===27&&!vt(a)&&(a.preventDefault(),a.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){let e=t.getConfig().positionStrategy,i=this._getOrigin(),a=this._getOverlayPosition();e.withPositions([this._addOffset(x(x({},i.main),a.main)),this._addOffset(x(x({},i.fallback),a.fallback))])}_addOffset(t){let e=Qt,i=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=i?-e:e:t.originX==="end"&&(t.offsetX=i?e:-e),t}_getOrigin(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"||e=="below"?i={originX:"center",originY:e=="above"?"top":"bottom"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={originX:"start",originY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={originX:"end",originY:"center"});let{x:a,y:n}=this._invertPosition(i.originX,i.originY);return{main:i,fallback:{originX:a,originY:n}}}_getOverlayPosition(){let t=!this._dir||this._dir.value=="ltr",e=this.position,i;e=="above"?i={overlayX:"center",overlayY:"bottom"}:e=="below"?i={overlayX:"center",overlayY:"top"}:e=="before"||e=="left"&&t||e=="right"&&!t?i={overlayX:"end",overlayY:"center"}:(e=="after"||e=="right"&&t||e=="left"&&!t)&&(i={overlayX:"start",overlayY:"center"});let{x:a,y:n}=this._invertPosition(i.overlayX,i.overlayY);return{main:i,fallback:{overlayX:a,overlayY:n}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),ot(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){let{overlayY:e,originX:i,originY:a}=t,n;if(e==="center"?this._dir&&this._dir.value==="rtl"?n=i==="end"?"left":"right":n=i==="start"?"left":"right":n=e==="bottom"&&a==="top"?"above":"below",n!==this._currentPosition){let m=this._overlayRef;if(m){let I=`${this._cssClassPrefix}-${At}-`;m.removePanelClass(I+this._currentPosition),m.addPanelClass(I+n)}this._currentPosition=n}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}]):this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",t=>{let e=t.targetTouches?.[0],i=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let a=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,i)},this._defaultOptions?.touchLongPressShowDelay??a)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;let t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}],["wheel",e=>this._wheelListener(e)]);else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};t.push(["touchend",e],["touchcancel",e])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([e,i])=>{this._elementRef.nativeElement.addEventListener(e,i,Rt)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){let e=this._document.elementFromPoint(t.clientX,t.clientY),i=this._elementRef.nativeElement;e!==i&&!i.contains(e)&&this.hide()}}_disableNativeGesturesIfNecessary(){let t=this.touchGestures;if(t!=="off"){let e=this._elementRef.nativeElement,i=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(i.userSelect=i.msUserSelect=i.webkitUserSelect=i.MozUserSelect="none"),(t==="on"||!e.draggable)&&(i.webkitUserDrag="none"),i.touchAction="none",i.webkitTapHighlightColor="transparent"}}_syncAriaDescription(t){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,t,"tooltip"),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}static \u0275fac=function(e){return new(e||o)};static \u0275dir=at({type:o,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(e,i){e&2&&Y("mat-mdc-tooltip-disabled",i.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return o})(),Kt=(()=>{class o{_changeDetectorRef=r(N);_elementRef=r(E);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled;_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new C;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){let t=r(it,{optional:!0});this._animationsDisabled=t==="NoopAnimations"}show(t){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Wt&&t.width>=qt}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){let e=this._tooltip.nativeElement,i=this._showAnimation,a=this._hideAnimation;if(e.classList.remove(t?a:i),e.classList.add(t?i:a),this._isVisible!==t&&(this._isVisible=t,this._changeDetectorRef.markForCheck()),t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let n=getComputedStyle(e);(n.getPropertyValue("animation-duration")==="0s"||n.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["mat-tooltip-component"]],viewQuery:function(e,i){if(e&1&&dt(Ht,7),e&2){let a;ct(a=ht())&&(i._tooltip=a.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(e,i){e&1&&c("mouseleave",function(n){return i._handleMouseLeave(n)})},decls:4,vars:4,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend","ngClass"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(e,i){if(e&1){let a=T();s(0,"div",1,0),c("animationend",function(m){return _(a),u(i._handleAnimationEnd(m))}),s(2,"div",2),f(3),p()()}e&2&&(Y("mdc-tooltip--multiline",i._isMultiline),d("ngClass",i.tooltipClass),l(3),R(i.message))},dependencies:[_t],styles:['.mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-sys-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-sys-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-sys-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-sys-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0})}return o})();var Bt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=A({type:o});static \u0275inj=z({providers:[Xt],imports:[Pt,zt,X,X,Mt]})}return o})();function Jt(o,v){if(o&1&&(s(0,"mat-option",17),f(1),p()),o&2){let t=v.$implicit;d("value",t),l(),k(" ",t," ")}}function te(o,v){if(o&1){let t=T();s(0,"mat-form-field",14)(1,"mat-select",16,0),c("selectionChange",function(i){_(t);let a=h(2);return u(a._changePageSize(i.value))}),lt(3,Jt,2,2,"mat-option",17,rt),p(),s(5,"div",18),c("click",function(){_(t);let i=mt(2);return u(i.open())}),p()()}if(o&2){let t=h(2);d("appearance",t._formFieldAppearance)("color",t.color),l(),d("value",t.pageSize)("disabled",t.disabled)("aria-labelledby",t._pageSizeLabelId)("panelClass",t.selectConfig.panelClass||"")("disableOptionCentering",t.selectConfig.disableOptionCentering),l(2),pt(t._displayedPageSizeOptions)}}function ee(o,v){if(o&1&&(s(0,"div",15),f(1),p()),o&2){let t=h(2);l(),R(t.pageSize)}}function ie(o,v){if(o&1&&(s(0,"div",3)(1,"div",13),f(2),p(),D(3,te,6,7,"mat-form-field",14)(4,ee,2,1,"div",15),p()),o&2){let t=h();l(),y("id",t._pageSizeLabelId),l(),k(" ",t._intl.itemsPerPageLabel," "),l(),P(t._displayedPageSizeOptions.length>1?3:-1),l(),P(t._displayedPageSizeOptions.length<=1?4:-1)}}function oe(o,v){if(o&1){let t=T();s(0,"button",19),c("click",function(){_(t);let i=h();return u(i.firstPage())}),w(),s(1,"svg",8),O(2,"path",20),p()()}if(o&2){let t=h();d("matTooltip",t._intl.firstPageLabel)("matTooltipDisabled",t._previousButtonsDisabled())("matTooltipPosition","above")("disabled",t._previousButtonsDisabled()),y("aria-label",t._intl.firstPageLabel)}}function ae(o,v){if(o&1){let t=T();s(0,"button",21),c("click",function(){_(t);let i=h();return u(i.lastPage())}),w(),s(1,"svg",8),O(2,"path",22),p()()}if(o&2){let t=h();d("matTooltip",t._intl.lastPageLabel)("matTooltipDisabled",t._nextButtonsDisabled())("matTooltipPosition","above")("disabled",t._nextButtonsDisabled()),y("aria-label",t._intl.lastPageLabel)}}var B=(()=>{class o{changes=new C;itemsPerPageLabel="Items per page:";nextPageLabel="Next page";previousPageLabel="Previous page";firstPageLabel="First page";lastPageLabel="Last page";getRangeLabel=(t,e,i)=>{if(i==0||e==0)return`0 of ${i}`;i=Math.max(i,0);let a=t*e,n=a<i?Math.min(a+e,i):a+e;return`${a+1} \u2013 ${n} of ${i}`};static \u0275fac=function(e){return new(e||o)};static \u0275prov=Z({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function ne(o){return o||new B}var se={provide:B,deps:[[new Q,new W,B]],useFactory:ne},re=50;var le=new S("MAT_PAGINATOR_DEFAULT_OPTIONS"),U=(()=>{class o{_intl;_changeDetectorRef;_formFieldAppearance;_pageSizeLabelId=r(Tt).getId("mat-paginator-page-size-label-");_intlChanges;_isInitialized=!1;_initializedStream=new $(1);color;get pageIndex(){return this._pageIndex}set pageIndex(t){this._pageIndex=Math.max(t||0,0),this._changeDetectorRef.markForCheck()}_pageIndex=0;get length(){return this._length}set length(t){this._length=t||0,this._changeDetectorRef.markForCheck()}_length=0;get pageSize(){return this._pageSize}set pageSize(t){this._pageSize=Math.max(t||0,0),this._updateDisplayedPageSizeOptions()}_pageSize;get pageSizeOptions(){return this._pageSizeOptions}set pageSizeOptions(t){this._pageSizeOptions=(t||[]).map(e=>M(e,0)),this._updateDisplayedPageSizeOptions()}_pageSizeOptions=[];hidePageSize=!1;showFirstLastButtons=!1;selectConfig={};disabled=!1;page=new J;_displayedPageSizeOptions;initialized=this._initializedStream;constructor(t,e,i){if(this._intl=t,this._changeDetectorRef=e,this._intlChanges=t.changes.subscribe(()=>this._changeDetectorRef.markForCheck()),i){let{pageSize:a,pageSizeOptions:n,hidePageSize:m,showFirstLastButtons:I}=i;a!=null&&(this._pageSize=a),n!=null&&(this._pageSizeOptions=n),m!=null&&(this.hidePageSize=m),I!=null&&(this.showFirstLastButtons=I)}this._formFieldAppearance=i?.formFieldAppearance||"outline"}ngOnInit(){this._isInitialized=!0,this._updateDisplayedPageSizeOptions(),this._initializedStream.next()}ngOnDestroy(){this._initializedStream.complete(),this._intlChanges.unsubscribe()}nextPage(){if(!this.hasNextPage())return;let t=this.pageIndex;this.pageIndex=this.pageIndex+1,this._emitPageEvent(t)}previousPage(){if(!this.hasPreviousPage())return;let t=this.pageIndex;this.pageIndex=this.pageIndex-1,this._emitPageEvent(t)}firstPage(){if(!this.hasPreviousPage())return;let t=this.pageIndex;this.pageIndex=0,this._emitPageEvent(t)}lastPage(){if(!this.hasNextPage())return;let t=this.pageIndex;this.pageIndex=this.getNumberOfPages()-1,this._emitPageEvent(t)}hasPreviousPage(){return this.pageIndex>=1&&this.pageSize!=0}hasNextPage(){let t=this.getNumberOfPages()-1;return this.pageIndex<t&&this.pageSize!=0}getNumberOfPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}_changePageSize(t){let e=this.pageIndex*this.pageSize,i=this.pageIndex;this.pageIndex=Math.floor(e/t)||0,this.pageSize=t,this._emitPageEvent(i)}_nextButtonsDisabled(){return this.disabled||!this.hasNextPage()}_previousButtonsDisabled(){return this.disabled||!this.hasPreviousPage()}_updateDisplayedPageSizeOptions(){this._isInitialized&&(this.pageSize||(this._pageSize=this.pageSizeOptions.length!=0?this.pageSizeOptions[0]:re),this._displayedPageSizeOptions=this.pageSizeOptions.slice(),this._displayedPageSizeOptions.indexOf(this.pageSize)===-1&&this._displayedPageSizeOptions.push(this.pageSize),this._displayedPageSizeOptions.sort((t,e)=>t-e),this._changeDetectorRef.markForCheck())}_emitPageEvent(t){this.page.emit({previousPageIndex:t,pageIndex:this.pageIndex,pageSize:this.pageSize,length:this.length})}static \u0275fac=function(e){return new(e||o)(L(B),L(N),L(le,8))};static \u0275cmp=b({type:o,selectors:[["mat-paginator"]],hostAttrs:["role","group",1,"mat-mdc-paginator"],inputs:{color:"color",pageIndex:[2,"pageIndex","pageIndex",M],length:[2,"length","length",M],pageSize:[2,"pageSize","pageSize",M],pageSizeOptions:"pageSizeOptions",hidePageSize:[2,"hidePageSize","hidePageSize",F],showFirstLastButtons:[2,"showFirstLastButtons","showFirstLastButtons",F],selectConfig:"selectConfig",disabled:[2,"disabled","disabled",F]},outputs:{page:"page"},exportAs:["matPaginator"],features:[st],decls:14,vars:14,consts:[["selectRef",""],[1,"mat-mdc-paginator-outer-container"],[1,"mat-mdc-paginator-container"],[1,"mat-mdc-paginator-page-size"],[1,"mat-mdc-paginator-range-actions"],["aria-live","polite",1,"mat-mdc-paginator-range-label"],["mat-icon-button","","type","button","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["mat-icon-button","","type","button","disabledInteractive","",1,"mat-mdc-paginator-navigation-previous",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true",1,"mat-mdc-paginator-icon"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["mat-icon-button","","type","button","disabledInteractive","",1,"mat-mdc-paginator-navigation-next",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"],["mat-icon-button","","type","button","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],[1,"mat-mdc-paginator-page-size-label"],[1,"mat-mdc-paginator-page-size-select",3,"appearance","color"],[1,"mat-mdc-paginator-page-size-value"],["hideSingleSelectionIndicator","",3,"selectionChange","value","disabled","aria-labelledby","panelClass","disableOptionCentering"],[3,"value"],[1,"mat-mdc-paginator-touch-target",3,"click"],["mat-icon-button","","type","button","disabledInteractive","",1,"mat-mdc-paginator-navigation-first",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"],["mat-icon-button","","type","button","disabledInteractive","",1,"mat-mdc-paginator-navigation-last",3,"click","matTooltip","matTooltipDisabled","matTooltipPosition","disabled"],["d","M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],template:function(e,i){e&1&&(s(0,"div",1)(1,"div",2),D(2,ie,5,4,"div",3),s(3,"div",4)(4,"div",5),f(5),p(),D(6,oe,3,5,"button",6),s(7,"button",7),c("click",function(){return i.previousPage()}),w(),s(8,"svg",8),O(9,"path",9),p()(),q(),s(10,"button",10),c("click",function(){return i.nextPage()}),w(),s(11,"svg",8),O(12,"path",11),p()(),D(13,ae,3,5,"button",12),p()()()),e&2&&(l(2),P(i.hidePageSize?-1:2),l(3),k(" ",i._intl.getRangeLabel(i.pageIndex,i.pageSize,i.length)," "),l(),P(i.showFirstLastButtons?6:-1),l(),d("matTooltip",i._intl.previousPageLabel)("matTooltipDisabled",i._previousButtonsDisabled())("matTooltipPosition","above")("disabled",i._previousButtonsDisabled()),y("aria-label",i._intl.previousPageLabel),l(3),d("matTooltip",i._intl.nextPageLabel)("matTooltipDisabled",i._nextButtonsDisabled())("matTooltipPosition","above")("disabled",i._nextButtonsDisabled()),y("aria-label",i._intl.nextPageLabel),l(3),P(i.showFirstLastButtons?13:-1))},dependencies:[Ct,Et,xt,St,Vt],styles:[".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"],encapsulation:2,changeDetection:0})}return o})(),Gt=(()=>{class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=A({type:o});static \u0275inj=z({providers:[se],imports:[wt,Lt,Bt,U]})}return o})();var Ke=(()=>{class o{items=G(0);size=G(10);pageChange=et();onChange({pageIndex:t,pageSize:e}){this.pageChange.emit({page:t,size:e})}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=b({type:o,selectors:[["devmx-paginator"]],inputs:{items:[1,"items"],size:[1,"size"]},outputs:{pageChange:"pageChange"},decls:1,vars:2,consts:[["hidePageSize","",3,"page","pageSize","length"]],template:function(e,i){e&1&&(s(0,"mat-paginator",0),c("page",function(n){return i.onChange(n)}),p()),e&2&&d("pageSize",i.size())("length",i.items())},dependencies:[Gt,U],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}[_nghost-%COMP%]   .mat-mdc-paginator[_ngcontent-%COMP%]{background-color:transparent}"],changeDetection:0})}return o})();export{Vt as a,Bt as b,Ke as c};
