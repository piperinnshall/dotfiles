"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[4879],{33691:(e,n,s)=>{s.d(n,{l:()=>u});var t=s(97500),l=s.n(t);const a="x-toggle-wrapper",i="x-toggle-indicator",o="JCFCfOY_6UEZZSOO2xrl",c="x-toggle-indicatorWrapper",r="x-toggle-input";var d=s(86070);const u=({value:e,disabled:n,onSelected:s,id:t,className:u,condensed:m=!1,inputRef:h})=>(0,d.jsxs)("label",{className:l()(a,u),children:[(0,d.jsx)("input",{id:t,className:r,type:"checkbox",disabled:n,checked:e,onChange:e=>{const n=e.target.checked;s(n)},ref:h}),(0,d.jsx)("span",{className:l()(c,{[o]:m}),children:(0,d.jsx)("span",{className:l()(i,{[o]:m})})})]})},51103:(e,n,s)=>{s.d(n,{p:()=>v});var t=s(30758),l=s(97500),a=s.n(l),i=s(15231),o=s(89539),c=s(45237),r=s(74946),d=s(41331),u=s(76355);const m="jAjrv_00X1qyxaEHmJCb",h="YVnLJCNcdaEeIGBQYqJS",C="pxocyhWhrvAeBiSlfjbd",p="aOt09fJWpST6CG8xfHuo";var x=s(86070);const v=t.memo((function({onClose:e,onConfirm:n,isOpen:s,itemCount:l}){const v=(0,t.useCallback)((s=>{n(),e(s)}),[n,e]),g=d.Ru.get("queue.confirm-title",l);return(0,x.jsx)(u.A,{animated:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:e,contentLabel:g,isOpen:s,children:(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)(i.E,{as:"h2",variant:"bodyMediumBold",className:h,children:g}),(0,x.jsx)(i.E,{as:"p",variant:"bodySmall",className:C,paddingBottom:o.lT,children:d.Ru.get("queue.confirm-message")}),(0,x.jsxs)("div",{className:a()("encore-light-theme",p),children:[(0,x.jsx)(c.H,{onClick:e,children:d.Ru.get("queue.cancel-button")}),(0,x.jsx)(r.$,{onClick:v,children:d.Ru.get("queue.confirm-button")})]})]})})}))},51629:(e,n,s)=>{s.d(n,{K:()=>d});var t=s(36127),l=s(15231),a=s(74946),i=s(41331),o=s(91360),c=s(81504),r=s(86070);const d=()=>(0,r.jsxs)("div",{className:c.A.emptyContainer,children:[(0,r.jsx)(t.j,{size:"xxlarge","aria-hidden":"true"}),(0,r.jsxs)("div",{className:c.A.titleContainer,children:[(0,r.jsx)(l.E,{as:"h1",variant:"titleMedium",semanticColor:"textBase",children:i.Ru.get("queue.empty-title")}),(0,r.jsx)("p",{children:i.Ru.get("queue.empty-description")})]}),(0,r.jsx)(o.N,{to:"/search",children:(0,r.jsx)(a.$,{colorSet:"invertedLight",children:i.Ru.get("queue.fine-something")})})]})},11061:(e,n,s)=>{s.d(n,{O:()=>r});var t=s(30758),l=s(43828),a=s(80535),i=s(85930),o=s(78487),c=s(86070);const r=()=>{const{spec:e,logger:n,UBIFragment:s}=(0,o.r)(l.J,{}),{uri:r}=(0,i.f)(),d=(0,t.useCallback)(((s,t)=>{const l=e.inviteButtonFactory().hitShare({entityToBeShared:s,shareId:t});n.logInteraction(l)}),[n,e]),u=(0,t.useCallback)((()=>{const s=e.endButtonFactory().hitUiReveal();n.logInteraction(s)}),[n,e]),m=(0,t.useCallback)((()=>{const s=e.leaveButtonFactory().hitUiReveal();n.logInteraction(s)}),[n,e]),h=(0,t.useCallback)((()=>{const s=e.facepileButtonFactory().hitUiNavigate({destination:a.S.PARTICIPANTS_PAGE});n.logInteraction(s)}),[n,e]),C=(0,t.useCallback)((n=>(0,c.jsx)(s,{spec:e,...n})),[s,e]);return{logInviteClick:d,logEndClick:u,logLeaveClick:m,logFacePileClick:h,logStartJam:(0,t.useCallback)((()=>{const s=e.createJamButtonFactory().hitUiNavigate({destination:r??""});n.logInteraction(s)}),[n,e,r]),UBIFragmentWithSpec:C}}},82769:(e,n,s)=>{s.d(n,{Z:()=>$});var t=s(21560),l=s(30758),a=s(41978),i=s(15231),o=s(39733),c=s(41331),r=s(33691),d=s(97500),u=s.n(d),m=s(33242),h=s(78309),C=s(45237),p=s(74554),x=s(74946),v=s(70362);const g="_GA0LJ6qjoKBsWLq34XF",b="s_iKX8Su0w1W5b9yObSm",j="aQ5ntWUtU9bcqS9fS9aC",k="SxLR9RMcR2XyJCZuxYqv",y="vtk1i3JMLWObMppMQ0gH",S="x8qh9EgeC3AdLO0C54Og",N="Dm9gGjGoA7yNxClwSV24",f="MPtthrsnd9PdsCTssJqk";var E=s(86070);const w=({onClose:e,onCopyLink:n,inviteUrlQR:s})=>(0,E.jsxs)(h.a,{className:g,padding:"0",children:[(0,E.jsxs)("div",{className:b,children:[(0,E.jsxs)("div",{className:k,children:[(0,E.jsx)(i.E,{variant:"bodySmallBold",children:c.Ru.get("web-player.social-connect.invitation.qr-code.title")}),(0,E.jsx)(i.E,{variant:"bodySmall",semanticColor:"textSubdued",children:c.Ru.get("web-player.social-connect.invitation.qr-code.description")})]}),(0,E.jsx)(C.H,{semanticColor:"textSubdued",iconOnly:p.M,size:"small",onClick:e,condensedAll:!0,"aria-label":c.Ru.get("web-player.social-connect.invitation-modal.button-tertiary")})]}),(0,E.jsx)("div",{className:y}),(0,E.jsxs)("div",{className:u()(b,j,S),children:[(0,E.jsx)(x.$,{iconLeading:v._,colorSet:"invertedLight",size:"small",onClick:n,className:N,children:c.Ru.get("web-player.social-connect.invitation-modal.button-primary")}),(0,E.jsx)("div",{className:f,children:(0,E.jsx)(m.Ay,{value:s,size:100})})]})]});var I=s(89531),R=s(36131),A=s(91822);const O=({onClick:e})=>{const n=(0,a.wA)(),s=(0,l.useCallback)((()=>{e(),n((0,R.A9)(A.EL.END_SESSION))}),[n,e]);return(0,E.jsx)(I.n,{size:"small",onClick:s,children:c.Ru.get("web-player.social-connect.end-session.end-session-button")})},B=({onClick:e})=>(0,E.jsx)(I.n,{size:"small",onClick:async n=>{e(n)},children:c.Ru.get("web-player.social-connect.invite-button")}),L=({onClick:e})=>{const n=(0,a.wA)(),s=(0,l.useCallback)((()=>{e(),n((0,R.A9)(A.EL.LEAVE_SESSION))}),[n,e]);return(0,E.jsx)(I.n,{size:"small",onClick:s,children:c.Ru.get("web-player.social-connect.leave-session.leave-session-button")})};var q=s(77),U=s(5394),P=s(59293),F=s(57171),T=s(80535),J=s(19019);const W="E6U6SyOECK4IENpzZw2R",Q="rirXgOjB8QWiJWDk5hSD",_=({currentSession:e,username:n,onClick:s})=>{const{sessionMembers:t}=e,a=(0,q.Zp)(),r=(0,o.NC)(J.eWj),{setQueueView:d}=(0,U.m)(),u=t.length+2>3?t.length-3:0,m=(0,F.t)(e,n,{userFirst:!0}),h=(0,l.useCallback)((()=>{s&&s(),r?d(U.p.PARTICIPANT_LIST):a(T.S.PARTICIPANTS_PAGE)}),[r,a,s,d]);return(0,E.jsxs)(I.n,{size:"small",className:W,onClick:h,"aria-label":c.Ru.get("web-player.social-connect.participant-list.title"),children:[(0,E.jsx)(P.g,{users:m,maxSlots:3,withoutOverflowBadge:!0}),u>0&&(0,E.jsx)(i.E,{variant:"bodySmallBold",semanticColor:"textBase",className:Q,children:`+${u}`})]})};var M=s(12401),V=s(11061),z=s(80451);const G="CyBimvsotsoxqwtiZeAn",H="_GKa4bilkTYbQLgcLogI",Z="uXHR7rkHhuz9kVPNWwYW",D="KFGFA5pPG0hgIB97pZfI",Y=({id:e,label:n,value:s,onChange:t})=>(0,E.jsxs)("label",{htmlFor:e,className:D,children:[(0,E.jsx)(i.E,{variant:"bodySmall",semanticColor:"textSubdued",children:n}),(0,E.jsx)(r.l,{id:e,value:s,onSelected:t,condensed:!0})]}),K=({className:e,emptyStateComponent:n})=>{const{currentSession:s,setQueueOnlyMode:t,setParticipantVolumeControl:r}=(0,z.D)(),d=(0,a.d4)((({session:e})=>e.user?.id)),u=s?.joinSessionShortLink,m=s?.joinSessionShortLinkQR,{logFacePileClick:h,logInviteClick:C,logEndClick:p,logLeaveClick:x,UBIFragmentWithSpec:v}=(0,V.O)(),g=(0,M.Z)(),b=(0,o.NC)(J.eWj),[j,k]=(0,l.useState)(!0),y=(0,l.useCallback)((()=>{h()}),[h]),S=(0,l.useCallback)((async()=>{u&&await g(u),C(u?.spotifyUri??"",u?.shareId??"")}),[g,u,C]),N=(0,l.useCallback)((async()=>{b?k((e=>!e)):S()}),[S,b]),f=(0,l.useCallback)((()=>{p()}),[p]),I=(0,l.useCallback)((()=>{x()}),[x]);if(!s?.active)return n?(0,E.jsx)(E.Fragment,{children:n}):null;const R=s.sessionMembers.find((e=>e.id===s.sessionOwnerId));return(0,E.jsx)(v,{children:(0,E.jsxs)("div",{className:e,children:[(0,E.jsx)("div",{className:G,children:(0,E.jsx)(i.E,{as:"h1",variant:"titleSmall",semanticColor:"textBase",children:c.Ru.get("web-player.social-connect.session-info.title",{host:R?.displayName??""})})}),(0,E.jsxs)("div",{className:H,children:[(0,E.jsxs)("div",{className:Z,children:[(0,E.jsx)(_,{currentSession:s,username:d,onClick:y}),(0,E.jsx)(B,{onClick:N}),s.isSessionOwner?(0,E.jsx)(O,{onClick:f}):(0,E.jsx)(L,{onClick:I})]}),j&&(0,E.jsx)(w,{onClose:()=>k(!1),onCopyLink:S,inviteUrlQR:m?.shareableUrl??""}),s.isSessionOwner&&(0,E.jsxs)("div",{children:[(0,E.jsx)(Y,{id:"queueOnlyMode",label:c.Ru.get("web-player.social-connect.controls.queue-only-mode"),value:!s.queueOnlyMode,onChange:e=>t(!e)}),"UNAVAILABLE"!==s.participantVolumeControl&&(0,E.jsx)(Y,{id:"participantVolumeControl",label:c.Ru.get("web-player.social-connect.controls.participant-volume-control"),value:"ENABLED"===s.participantVolumeControl,onChange:e=>r(e)})]})]})]})})};var X=s(85961);const $=e=>(0,E.jsx)(t.s,{onError:e=>{(0,X.Jy)(e,"JamQueueHeader")},suspenseFallback:e.emptyStateComponent,children:(0,E.jsx)(K,{...e})})},46457:(e,n,s)=>{s.d(n,{$:()=>t});let t=function(e){return e[e.NowPlaying=0]="NowPlaying",e[e.NextInQueue=1]="NextInQueue",e[e.NextUp=2]="NextUp",e}({})},16325:(e,n,s)=>{s.d(n,{H:()=>i,K:()=>a});var t=s(13343),l=s(85930);function a(e){return"autoplay"===e?.provider}function i(){const{uri:e,description:n}=(0,l.f)(),{current:s,nextUp:i,queued:o}=(0,t.w)(),c=i.filter((e=>a(e)?e:"autoplay"!==e.provider)),r=!!o?.length,d=!!c?.length;return{uri:e,description:n,current:s,nextUp:c,queued:o,isEmpty:!1===(s||r||d),hasQueuedTracks:r,hasNextTracks:d}}},5394:(e,n,s)=>{s.d(n,{m:()=>t.m,p:()=>t.p});var t=s(94499)},13343:(e,n,s)=>{s.d(n,{w:()=>o});var t=s(30758),l=s(90650),a=s(69180),i=s(79124);function o(){const e=(0,a.z)(),[n,s]=(0,t.useState)(e.getQueue());return(0,i.p)(l.gd.QUEUE_UPDATE,(e=>s(e.data))),n}},81504:(e,n,s)=>{s.d(n,{A:()=>t});const t={emptyContainer:"BP2Fv3OX_ZYbjdA4lovg",titleContainer:"Olk6uKV_CIIVtWRrdRJc"}}}]);
//# sourceMappingURL=4879.js.map