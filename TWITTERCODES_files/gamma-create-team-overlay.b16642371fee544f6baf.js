(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{4530:function(e,t,a){var n=a(4531);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,r);n.locals&&(e.exports=n.locals)},4531:function(e,t,a){(t=e.exports=a(20)(!1)).push([e.i,".qb90FI2uVIybRy{background-color:transparent;border:none;box-shadow:none;color:#172b4d;color:#42526e;padding:0;text-decoration:none}.qb90FI2uVIybRy:active,.qb90FI2uVIybRy:hover{background-color:transparent;border:none;box-shadow:none;color:#172b4d;cursor:pointer;outline:0}",""]),t.locals={closeButton:"qb90FI2uVIybRy"}},4534:function(e,t,a){var n=a(4535);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,r);n.locals&&(e.exports=n.locals)},4535:function(e,t,a){(t=e.exports=a(20)(!1)).push([e.i,"._3gUubwRZDWaOF0{align-items:center;box-sizing:border-box;display:flex;height:100vh;justify-content:center;overflow:auto;width:100vw}._1URVGCiHsrWlwF{background:rgba(0,0,0,.6)}._2WhIqhRFBTG7Ry{background:rgba(0,0,0,.75)}._1rhhEuk7pUqNV_{background:transparent;position:relative;top:44px;margin-bottom:80px}._1rhhEuk7pUqNV_:focus{outline:none}",""]),t.locals={overlay:"_3gUubwRZDWaOF0",light:"_1URVGCiHsrWlwF",dark:"_2WhIqhRFBTG7Ry",contents:"_1rhhEuk7pUqNV_"}},4563:function(e,t,a){"use strict";var n,r=a(0),o=a.n(r),i=a(47),c=a(357),l=a(123),s=a(33),m=a(6),u=a.n(m),d=a(4534),p=a.n(d);!function(e){e.LIGHT="light",e.DARK="dark"}(n||(n={}));var b=a(128);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){var t,a,i,c=e.background,l=void 0===c?n.LIGHT:c,m=e.className,d=void 0===m?"":m,v=e.closeOnEscape,h=void 0===v||v,y=e.children,x=e.onClose,_=void 0===x?function(){}:x,O=g(Object(b.useCallbackRef)(),2),w=O[0],E=O[1],T=g(Object(b.useCallbackRef)(),2),I=T[0],S=T[1],N=Object(b.useCurrentElevation)(w),j=Object(r.useCallback)(function(e){e.defaultPrevented||_()},[_]);return Object(b.useClickOutsideHandler)({element:I,handleClickOutside:j}),Object(s.useShortcut)(function(){h&&_()},{scope:s.Scope.Overlay,key:s.Key.Escape}),o.a.createElement("div",{className:u()(p.a.overlay,p.a[l],d),role:"dialog",ref:E},o.a.createElement("div",f({ref:S,className:p.a.contents},(t={},a=b.ELEVATION_ATTR,i=N+1,a in t?Object.defineProperty(t,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[a]=i,t)),y))};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}a.d(t,"a",function(){return n});var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,_(t).apply(this,arguments))}var a,n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,o.a.Component),a=t,(n=[{key:"render",value:function(){return o.a.createElement(c.b,{layer:c.c.Overlay},o.a.createElement(v,this.props))}}])&&y(a.prototype,n),r&&y(a,r),t}(),E=Object(i.c)(void 0,function(e){return{onClose:function(){e(Object(l.removeOverlay)())}}})(w);t.b=E},4564:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=a(34),l=a(299),s=a(4530),m=a.n(s),u=Object(l.a)("CloseButton",function(e,t){var a=e.className,n=e.color,o=e.large,l=void 0!==o&&o,s=e.onClick,u=e.small,d=void 0!==u&&u,p=e.quiet,b=void 0!==p&&p,f=e.style,g=e.testId;return r.a.createElement("button",{className:i()(m.a.closeButton,a),onClick:s,style:f,ref:t,"data-test-id":g},r.a.createElement(c.default,{color:n,large:l,name:c.IconName.Close,small:d,quiet:b}))});a.d(t,"a",function(){return u})},4573:function(e,t,a){"use strict";a.r(t),a.d(t,"InviteTeamMembersAutocompleteComponent",function(){return b});var n=a(0),r=a.n(n),o=a(5),i=a(3),c=a(1),l=a(4939),s=a.n(l);function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=a(111),d=a(778),p=Object(o.forTemplate)("org_members"),b=function(e){var t=e.children,a=e.placeholder,o=e.orgId,l=e.model,b=e.onEmailSelected,f=void 0===b?function(){}:b,g=e.optionsAddMembers,v=e.fullWidthButton,h=e.onInviteTeamMembersSuccess,y=m(Object(n.useState)([]),2),x=y[0],_=y[1],O=m(Object(n.useState)(!1),2),w=O[0],E=O[1],T=g?g.invitationMessage:"",I=!!g&&g.changedInviteMessage,S={placeholder:a,onSubmit:function(){var e;e=T?I?"with personalized invite message":"with canned invite message":"with no invite message",Object(c.trackUe)({category:c.Noun.TEAM_VIEW,verb:c.Verb.SENDS,directObj:c.Noun.TEAM_INVITATION,prepositionalObj:e,indirectObj:"with ".concat(x.length," invites"),method:"by clicking invite to team button on team members page",context:{teamId:l.get("id")}});var t=l.addMembers(x,{invitationMessage:T});return h&&(E(!0),h()),t},onAutocompleteSearch:function(e){return e.length>2?u({url:"/1/search/members/",type:"get",data:{query:e,idOrganization:o},dataType:"json"}):[]},displayDetails:!0,displayUsername:!0,submitText:p("invite-to-team"),onRemoveMemberOption:function(e){_(function(t){return t.filter(function(t,a){return a!==e})})},onSelectMemberOption:function(e){_(function(t){return Object(i.uniq)(Object(i.union)(t,Object(i.flatten)([e])),!1,function(e){return e.username?e.username:e.email})}),f()},shouldFocusOnSelectMemberOption:!0,selectedOptions:x,children:t,fullWidthButton:v,submitDisabled:w||!l};return r.a.createElement("div",{className:"org-team-members-autocomplete-container"},r.a.createElement("label",{className:s.a.teamMemberLabel},r.a.createElement("span",{className:s.a.teamMemberLabelText},p("team-members")),r.a.createElement(d,S)))}},4936:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a(0),r=a.n(n),o=a(6),i=a.n(o),c=a(5),l=a(4937),s=a.n(l),m=a(4573),u=a(11);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=a(38),b=Object(c.forTemplate)("org_members"),f=function(e){var t=e.orgId,a=e.orgDisplayName,o=e.model,c=e.startAnimation,l=e.fullWidthButton,f=e.className,g=e.onInviteTeamMembersSuccess,v=e.preventTextareaResize,h=b("personalized-message-2",{teamName:a}),y=d(Object(n.useState)(h),2),x=y[0],_=y[1],O=d(Object(n.useState)(),2),w=O[0],E=O[1],T=Object(u.useFeatureFlag)("enable-invite-email-message",!1);Object(n.useEffect)(function(){var e;regeneratorRuntime.async(function(a){for(;;)switch(a.prev=a.next){case 0:if(o){a.next=6;break}return a.next=3,regeneratorRuntime.awrap(p.loadOrganizationData(t));case 3:return e=a.sent,a.next=6,regeneratorRuntime.awrap(E(e));case 6:case"end":return a.stop()}})},[o,t]);var I,S,N,j=h!==x;return r.a.createElement("div",{className:i()(s.a.formWrapper,f)},r.a.createElement("div",{className:s.a.heading},b("invite-your-team")),r.a.createElement("div",{className:s.a.subtitle},b("trello-makes-teamwork-your-best-work")),r.a.createElement(m.InviteTeamMembersAutocompleteComponent,{placeholder:b("invite-input-placeholder"),orgId:t,model:o||w,optionsAddMembers:{invitationMessage:x,changedInviteMessage:j},onEmailSelected:c,fullWidthButton:l,onInviteTeamMembersSuccess:g},r.a.createElement("div",{className:s.a.autocompleteHelpText},r.a.createElement("strong",null,b("pro-tip"))," ",b("paste-as-many-emails-here-as-needed")),T&&r.a.createElement("label",{className:s.a.invitationMessageLabel},r.a.createElement("span",{className:s.a.invitationMessageLabelText},b("give-this-message-a-personal-touch")),r.a.createElement("textarea",{className:i()(s.a.invitationMessage,(I={},S=s.a.invitationMessageNoResize,N=v,S in I?Object.defineProperty(I,S,{value:N,enumerable:!0,configurable:!0,writable:!0}):I[S]=N,I)),placeholder:b("personalized-message-placeholder"),value:x,onChange:function(e){_(e.target.value)},maxLength:500}))))}},4937:function(e,t,a){var n=a(4938);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,r);n.locals&&(e.exports=n.locals)},4938:function(e,t,a){(t=e.exports=a(20)(!1)).push([e.i,"._2ozyzeoG-varDs{width:100%}._2ozyzeoG-varDs .autocomplete-input-container{max-width:none}._2ozyzeoG-varDs .autocomplete-btn{margin-bottom:0}._2XVmjWq1Ds8-i2{color:#172b4d;font-size:14px;font-weight:400;line-height:20px;margin:8px 0 16px}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2XVmjWq1Ds8-i2{text-align:center}}._2-T1xH-fhIz60N{color:#172b4d;font-size:24px;font-weight:600;letter-spacing:-.01em;line-height:28px;margin-top:40px;margin-top:0}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2-T1xH-fhIz60N{text-align:center}}._2wzRTdc1Iq0neb{color:#172b4d;font-size:14px;font-weight:400;line-height:20px;color:#5e6c84;margin:8px 0 28px}._1WPFYqViAabF58{margin:0}._3XpIQdKAqERycK{font-weight:700;color:#5e6c84;font-size:12px;line-height:16px;margin-top:12px;margin-bottom:4px;display:block;margin-bottom:12px}.wS5q-Owapul__t{background-color:#fafbfc;color:#172b4d;height:156px;margin-bottom:0}.wS5q-Owapul__t,.wS5q-Owapul__t:hover{border:none;box-shadow:inset 0 0 0 2px #dfe1e6}.wS5q-Owapul__t:hover{background-color:#ebecf0}.wS5q-Owapul__t:focus{background:#fff;border:none;box-shadow:inset 0 0 0 2px #0079bf}._12XgQEL5_g2Lmq{resize:none}",""]),t.locals={formWrapper:"_2ozyzeoG-varDs",subtitle:"_2XVmjWq1Ds8-i2",heading:"_2-T1xH-fhIz60N",autocompleteHelpText:"_2wzRTdc1Iq0neb",invitationMessageLabel:"_1WPFYqViAabF58",invitationMessageLabelText:"_3XpIQdKAqERycK",invitationMessage:"wS5q-Owapul__t",invitationMessageNoResize:"_12XgQEL5_g2Lmq"}},4939:function(e,t,a){var n=a(4940);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,r);n.locals&&(e.exports=n.locals)},4940:function(e,t,a){(t=e.exports=a(20)(!1)).push([e.i,"._3PdcYVtRuHTlvL{font-weight:400;margin:0}._1h9PvS3YBMEHS9{font-weight:700;color:#5e6c84;font-size:12px;line-height:16px;margin-top:12px;margin-bottom:4px;display:block;margin-bottom:12px}",""]),t.locals={teamMemberLabel:"_3PdcYVtRuHTlvL",teamMemberLabelText:"_1h9PvS3YBMEHS9"}},5493:function(e,t,a){var n=a(5494);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,r);n.locals&&(e.exports=n.locals)},5494:function(e,t,a){var n=a(181);(t=e.exports=a(20)(!1)).push([e.i,"._2vrbr9OyhcQOwQ label{margin-top:24px;color:#091e42}._2vrbr9OyhcQOwQ label._2sunXEAJImmfxS{color:#eb5a46}._2vrbr9OyhcQOwQ ._3Iqnw8HlCKvcSz{color:#091e42;font-size:24px;font-weight:600;letter-spacing:-.01em;line-height:28px;display:block;margin-bottom:12px}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2vrbr9OyhcQOwQ ._3Iqnw8HlCKvcSz{text-align:center}}._2vrbr9OyhcQOwQ ._3O-nh6hx6HTp9W{font-size:18px;color:#6b778c;margin:12px auto 24px}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2vrbr9OyhcQOwQ ._3O-nh6hx6HTp9W{display:block;text-align:center}}._2vrbr9OyhcQOwQ input._1CLyNodCAa-vQi{width:100%;height:48px;margin-bottom:6px}._2vrbr9OyhcQOwQ input._1CLyNodCAa-vQi._2sunXEAJImmfxS{border:none;box-shadow:inset 0 0 0 2px #eb5a46}._2vrbr9OyhcQOwQ textarea._15aIJYNKhrO4vB{margin-bottom:6px;resize:none;width:100%}._2vrbr9OyhcQOwQ ._1bvaK5JF03W_82{font-weight:100;color:#6b778c;font-size:12px}._2vrbr9OyhcQOwQ ._2ukuek1N8-13Iw{color:#6b778c;font-size:12px;margin-bottom:12px}._2vrbr9OyhcQOwQ ._2ukuek1N8-13Iw._2sunXEAJImmfxS{color:#eb5a46;font-weight:700}._2vrbr9OyhcQOwQ ._1aS0LdGertk5P7{width:100%;margin-top:12px}._2vrbr9OyhcQOwQ ._1aS0LdGertk5P7 .X1P6DVryq8CYGC{height:48px;width:100%}._2vrbr9OyhcQOwQ ._3TP8F77VrSTeHP{background-image:url("+n(a(1476))+");height:30px;width:30px;background-size:30px 30px;display:block;margin:0 auto}@media only screen and (min-width:901px) and (max-width:1280px),only screen and (min-width:1281px){._2vrbr9OyhcQOwQ,._2vrbr9OyhcQOwQ ._1aS0LdGertk5P7 .X1P6DVryq8CYGC,._2vrbr9OyhcQOwQ input._1CLyNodCAa-vQi,._2vrbr9OyhcQOwQ textarea._15aIJYNKhrO4vB{width:388px}}",""]),t.locals={buildTeam:"_2vrbr9OyhcQOwQ",formError:"_2sunXEAJImmfxS",letsBuildATeam:"_3Iqnw8HlCKvcSz",boostProductivity:"_3O-nh6hx6HTp9W",teamNameInput:"_1CLyNodCAa-vQi",teamDescriptionInput:"_15aIJYNKhrO4vB",optional:"_1bvaK5JF03W_82",inputDescriptionText:"_2ukuek1N8-13Iw",addTeamFooter:"_1aS0LdGertk5P7",continueButton:"X1P6DVryq8CYGC",spinner:"_3TP8F77VrSTeHP"}},5495:function(e,t,a){var n=a(5496);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,r);n.locals&&(e.exports=n.locals)},5496:function(e,t,a){var n=a(181);(t=e.exports=a(20)(!1)).push([e.i,"._3okPZ1UgyOorbL{align-items:stretch;background-color:#fff;border-radius:3px;box-shadow:0 8px 16px -4px rgba(9,30,66,.25),0 0 0 1px rgba(9,30,66,.08);box-sizing:border-box;display:flex;flex-direction:row;min-height:500px;margin-top:16px;outline:0;overflow:hidden;width:calc(100vw - 48px);z-index:1}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._3okPZ1UgyOorbL{flex-direction:column-reverse;max-width:475px}._1wRFJUvIaoq-sR{transform:scaleX(2) rotate(-90deg);z-index:2;background-position:110px}._3lKk_kIqYLGIyx{transform:scaleY(.5) rotate(90deg);z-index:3;padding-top:40px}}@media only screen and (min-width:1281px){._3okPZ1UgyOorbL{width:1200px}}._1f6hQ1rpgO5o-J{align-items:center;display:flex;flex:1;flex-direction:column;padding:0 24px;overflow:auto;text-align:left;z-index:3;margin:64px auto 16px}._1wRFJUvIaoq-sR{align-items:center;background-image:url("+n(a(1480))+");background-repeat:no-repeat;background-size:cover;display:flex;flex:1;justify-content:center}@media only screen and (min-width:901px) and (max-width:1280px),only screen and (min-width:1281px){._1wRFJUvIaoq-sR{align-items:flex-start;padding-top:112px}}._2b_HpRl1Tyl1YK{margin-top:16px;position:absolute;right:8px;top:8px;z-index:2}.eg0KI5SqghoOFd{background-color:#fff;color:#7a869a;margin-bottom:21px;text-decoration:underline}.eg0KI5SqghoOFd:hover{color:#172b4d;text-decoration:none}._1FoUOG87ea9M2R{margin-bottom:16px;width:388px}.VLugHGGP84eldu{margin:12px 0 24px}.b0o1jaEoFEFK9d,.VLugHGGP84eldu{box-sizing:border-box;width:100%}.b0o1jaEoFEFK9d{background-color:#fdfae5;border-radius:3px;padding:4px 8px;text-align:center}._1wAJs3Yqdf_zZl{margin:33px 0 53px}._2Jra8fMPrxjFgW{max-width:298px;margin:0 auto}",""]),t.locals={createTeamContainer:"_3okPZ1UgyOorbL",illustrationContainer:"_1wRFJUvIaoq-sR",illustrationWrapper:"_3lKk_kIqYLGIyx",formContainer:"_1f6hQ1rpgO5o-J",closeButton:"_2b_HpRl1Tyl1YK",doLaterLinkButton:"eg0KI5SqghoOFd",inviteFormWrapper:"_1FoUOG87ea9M2R",messageContainer:"VLugHGGP84eldu",freeTeamWarningMessage:"b0o1jaEoFEFK9d",createTeamRestrictedDescription:"_1wAJs3Yqdf_zZl",restrictionContainer:"_2Jra8fMPrxjFgW"}},5497:function(e,t,a){var n=a(5498);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,r);n.locals&&(e.exports=n.locals)},5498:function(e,t,a){(t=e.exports=a(20)(!1)).push([e.i,"._1M7BOT0FSOTl2E{align-items:flex-start}",""]),t.locals={createTeamOverlay:"_1M7BOT0FSOTl2E"}},5543:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(47),i=a(221),c=a(123),l=a(985),s=a(4936),m=a(969),u=a(4564),d=a(34),p=a(429),b=a(6),f=a.n(b),g=a(30),v=a(150),h=a(27),y=a(5493),x=a.n(y),_=a(5),O=a(393),w=a(201),E=a(11);function T(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=Object(_.forTemplate)("create_team"),N="".concat(Date.now(),"-"),j=function(e){var t=e.submitCreateTeam,a=e.startAnimation,o=e.animationStep,i=Object(E.useFeatureFlag)("btg.team-vertical-selection",!1),c=I(Object(n.useState)(!1),2),l=c[0],s=c[1],m=I(Object(n.useState)(""),2),u=m[0],d=m[1],p=I(Object(n.useState)(),2),b=p[0],y=p[1],_=I(Object(n.useState)(""),2),j=_[0],k=_[1],A=u.length>0&&u.length<=100,C=!!b,R=100===u.length,F=Object(w.useAllUsersAreAdminsEnabled)();return r.a.createElement("form",{className:x.a.buildTeam,onSubmit:Object(v.a)(function(){s(!0),t(i?{displayName:u.trim(),desc:j,allAdminsEnabled:F,teamVerticalType:b}:{displayName:u.trim(),desc:j,allAdminsEnabled:F})})},r.a.createElement("span",{className:x.a.letsBuildATeam},S("lets-build-a-team")),r.a.createElement("span",{className:x.a.boostProductivity},S("boost-productivity")),r.a.createElement("label",{htmlFor:"".concat(N,"create-team-org-display-name"),className:f()(T({},x.a.formError,R))},S("team-name")),r.a.createElement("input",{id:"".concat(N,"create-team-org-display-name"),"data-test-id":h.TeamTestIds.CreateTeamNameInput,type:"text",value:u,onBlur:function(){u&&o<1&&a()},onChange:function(e){d(e.target.value),3===o&&a()},className:f()(x.a.teamNameInput,T({},x.a.formError,R)),autoFocus:!0,maxLength:100,disabled:l,placeholder:S("tacos-co")}),R?r.a.createElement("span",{className:f()(x.a.inputDescriptionText,T({},x.a.formError,R))},S("team-name-error")):r.a.createElement("span",{className:x.a.inputDescriptionText},S("team-name-description")),i&&r.a.createElement(O.TeamTypeSelect,{onChange:function(e){y(e)},isDisabled:l,testId:h.TeamTestIds.CreateTeamTypeInput}),r.a.createElement("label",{htmlFor:"".concat(N,"create-team-org-description")},S("team-description")," ",r.a.createElement("span",{className:x.a.optional},S("optional"))),r.a.createElement("textarea",{id:"".concat(N,"create-team-org-description"),rows:6,value:j,onChange:function(e){k(e.target.value)},className:x.a.teamDescriptionInput,disabled:l,placeholder:S("our-team-organizes-everything-here")}),r.a.createElement("span",{className:x.a.inputDescriptionText},S("team-description-description")),r.a.createElement("footer",{className:x.a.addTeamFooter},r.a.createElement(g.g,{disabled:!A||!C&&i||l,type:"submit",className:x.a.continueButton,testId:h.TeamTestIds.CreateTeamSubmitButton},l?r.a.createElement("div",{className:x.a.spinner}):S("continue"))))},k=a(84),A=a(487),C=a(5495),R=a.n(C),F=a(1),M=a(12);function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var z=Object(_.forTemplate)("create_team"),Q=a(49),q=a(37),P=Object(o.c)(function(e){return{emailAddress:Object(Q.a)(e).email,isDesktop:Object(q.isDesktop)(),freeTeamLimitWarning:E.featureFlagClient.get("fv.domain-level-free-team-warning",!1),freeTeamLimitRestriction:E.featureFlagClient.get("fv.domain-level-free-team-restricted",!1),teamType:Object(l.e)(e)}},function(e){return{onClose:function(){e(Object(c.removeOverlay)())},submitTeamCreation:function(t){var a=t.type,n=t.displayName,r=t.teamType,o=t.desc,c=t.allAdminsEnabled;return e(Object(i.d)({type:a,displayName:n,teamType:r,desc:o,allAdminsEnabled:c}))},onCreateTeamSuccess:function(t,a){return e(Object(i.c)({type:t,team:a}))}}})(function(e){var t=e.isDesktop,a=e.freeTeamLimitWarning,o=e.freeTeamLimitRestriction,c=e.emailAddress,l=e.onClose,b=e.onCreateTeamSuccess,f=e.submitTeamCreation,g=e.teamType,v=L(Object(n.useState)(0),2),y=v[0],x=v[1],_=L(Object(n.useState)({id:"",displayName:"",name:""}),2),O=_[0],w=_[1],T=L(Object(n.useState)(1),2),I=T[0],S=T[1],N=L((c||"").split("@"),2)[1]||"",C=Object(E.useFeatureFlag)("dataeng.gasv3-event-tracking",!1);function Q(){x(y+1)}Object(n.useEffect)(function(){o?N&&C&&M.Analytics.sendScreenEvent({name:"freeTeamRestrictionModal",attributes:{domainName:N}}):C&&M.Analytics.sendScreenEvent({name:"createFreeTeamModal",attributes:{freeTeamLimitRestriction:o,freeTeamLimitWarning:a,domainName:N}}),!o&&a&&N&&Object(F.trackUe)({category:F.Noun.TEAM_BUILDER,verb:F.Verb.SHOWS,directObj:F.Noun.FREE_TEAM_LIMIT_WARNING_MESSAGE,context:{domainName:N,env:t?"desktop":"web"}}),o&&N&&Object(F.trackUe)({category:F.Noun.TEAM_BUILDER,verb:F.Verb.SHOWS,directObj:F.Noun.FREE_TEAM_LIMIT_RESTRICTION_MESSAGE_TEAM_BUILDER,context:{domainName:N,env:t?"desktop":"web"}})},[a,o,N,t,C]);var q=2===I,P=O.id,D=void 0===P?"":P,W=O.displayName,B=void 0===W?"":W,G=O.name,V=void 0===G?"":G;return r.a.createElement("div",{className:R.a.createTeamContainer},r.a.createElement("div",{className:R.a.formContainer},a&&!o&&1===I&&r.a.createElement("div",{className:R.a.messageContainer},r.a.createElement("div",{className:R.a.freeTeamWarningMessage},r.a.createElement("strong",null,z("your-org-is-running-out-of-teams",{emailDomain:N?"(".concat(N,")"):""}))," ",t?r.a.createElement("span",null,z("contact-your-admin")):r.a.createElement("span",null,z("learn-more-about-trello-enterprise",{trelloEnterprise:r.a.createElement("a",{href:"/enterprise?utm_source=trello-product&utm_medium=inapp&utm_campaign=P:trello|O:trello|F:awareness|C:ptour|I:trello-enterprise-in-product|E:cloud|&app_source=warning_message_team_builder",target:"_blank",key:"enterprise-link",onClick:function(){Object(F.trackUe)({category:F.Noun.TEAM_BUILDER,verb:F.Verb.CLICKS,directObj:F.Noun.FREE_TEAM_LIMIT_WARNING_MESSAGE_ENTERPRISE_LINK,context:{domainName:N,env:t?"desktop":"web"}}),C&&M.Analytics.sendUIEvent({action:"clicked",actionSubject:"link",actionSubjectId:"enterpriseLink",source:"createFreeTeamModal",attributes:{domainName:N}})}},"Trello Enterprise")})))),o&&r.a.createElement("div",{className:R.a.restrictionContainer},t?r.a.createElement("h3",null,z("your-organization-has-run-out-of-teams-desktop",{domain:N})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,z("your-organization-has-run-out-of-teams",{domain:N})),r.a.createElement("p",{className:R.a.createTeamRestrictedDescription},z("contact-your-administrator-about-upgrading-to-trello-enterprise")),r.a.createElement(A.a,{isPrimary:!0,link:"/enterprise?utm_source=trello-product&utm_medium=inapp&utm_campaign=P:trello|O:trello|F:awareness|C:ptour|I:trello-enterprise-in-product|E:cloud|&app_source=exceeded_message_team_builder",onClick:function(){Object(F.trackUe)({category:F.Noun.TEAM_BUILDER,verb:F.Verb.CLICKS,directObj:F.Noun.FREE_TEAM_LIMIT_RESTRICTION_MESSAGE_ENTERPRISE_BUTTON,context:{domainName:N,env:t?"desktop":"web"}}),C&&M.Analytics.sendUIEvent({action:"clicked",actionSubject:"button",actionSubjectId:"enterpriseButton",source:"createFreeTeamModal",attributes:{domainName:N}})}},z("learn-more")))),!o&&1===I&&r.a.createElement(j,{submitCreateTeam:function(e){var t=e.displayName,a=e.teamVerticalType,n=e.desc,r=e.allAdminsEnabled;f({type:g,displayName:t,teamType:a,desc:n,allAdminsEnabled:r}).then(function(e){if(e){var t=Object(p.a)(e);w(t||{}),S(2)}})},startAnimation:Q,animationStep:y}),!o&&2===I&&r.a.createElement(s.a,{startAnimation:Q,orgId:D,orgDisplayName:B,model:null,className:R.a.inviteFormWrapper,fullWidthButton:!0,preventTextareaResize:!0,onInviteTeamMembersSuccess:b.bind(void 0,g,O)}),!o&&q&&r.a.createElement(k.a,{className:R.a.doLaterLinkButton,testId:h.TeamTestIds.ShowLaterButton,onClick:l,href:"/".concat(V).concat(g===i.a.Business?"/billing":"")},z("ill-do-this-later"))),r.a.createElement("div",{className:R.a.illustrationContainer},r.a.createElement("div",{className:R.a.illustrationWrapper},r.a.createElement(m.a,{animationStep:y}))),r.a.createElement(u.a,{color:d.IconColor.Dark,className:R.a.closeButton,onClick:l,large:!0}))}),D=a(4563),W=a(5497),B=a.n(W);t.default=function(){return r.a.createElement(D.b,{background:D.a.LIGHT,className:B.a.createTeamOverlay},r.a.createElement(P,null))}}}]);
//# sourceMappingURL=gamma-create-team-overlay.b16642371fee544f6baf.js.map