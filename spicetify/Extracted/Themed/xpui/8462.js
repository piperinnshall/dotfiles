"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[8462],{43830:(e,a,s)=>{s.d(a,{R:()=>me});var i=s(30758),n=s(97500),o=s.n(n),t=s(77),l=s(58923),r=s(42365),d=s(15231),c=s(72790),u=s(59677),m=s(41331),h=s(80171),x=s(2304),g=s(64234),p=s(19477),y=s(44608),b=s(14392),j=s(31352),f=s(12953),k=s(97074),v=s(63128),N=s(72888),P=s(65312),E=s(60285),S=s(78487),w=s(33904),C=s(86070);const I={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},T=i.memo((function({episodeUri:e,showUri:a,sharingInfo:s,canDownload:n,requestId:t,onMarkAsPlayed:l,onMoreButtonClick:r,name:d,fullyPlayed:c,index:u}){const T=(0,P.T)(e),{spec:D,logger:M}=(0,S.r)(h.d,{data:{uri:e,reason:t||"",position:u}}),R=(0,v.v)(e),A=(0,i.useMemo)((()=>(0,C.jsx)(k.g,{size:"medium",uri:e})),[e]),L=(0,i.useMemo)((()=>(0,C.jsx)(g.e,{uri:e,size:g.M.sm,className:o()({[w.A.visibleAction]:(0,N.X)(T)}),onClick:(a,s)=>{s===E.NV.ADD?M.logInteraction(D.downloadButtonFactory().hitDownload({itemToDownload:e})):E.NV.REMOVE&&M.logInteraction(D.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:e}))},canDownload:n,condensed:!0})),[e,T,D,M,n]),U=(0,i.useMemo)((()=>(0,C.jsx)(b.w,{uri:e,sharingInfo:s,interactionData:I,onClick:()=>{M.logInteraction(D.copyLinkFactory().hitShare({entityToBeShared:e,shareId:s?.shareId||""}))}})),[e,s,D,M]),B=(0,i.useMemo)((()=>(0,C.jsx)(y.b,{uri:e,size:x.t.sm,className:w.A.visibleAction,onClick:a=>{a?M.logInteraction(D.saveToLibraryButtonFactory().hitLike({itemToBeLiked:e})):M.logInteraction(D.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:e}))},condensed:!0})),[e,D,M]),z=(0,i.useMemo)((()=>(0,C.jsx)(j.b,{menu:(0,C.jsx)(f.b,{uri:e,showUri:a,isPlayed:c,onMarkAsPlayed:l}),children:(0,C.jsx)(p.e,{size:p.M.sm,label:m.Ru.get("more.label.context",d),onClick:r})})),[e,c,d,l,r,a]);return(0,C.jsxs)(C.Fragment,{children:[U,L,R?A:B,z]})}));var D=s(69745),M=s(76918),R=s(61108),A=s(45647),L=s(56144);var U=s(56192),B=s(1514),z=s(69798),V=s(86317),_=s(35293),Z=s(19845);const F="TT1tIewS2iI8Uz8kLuQB",q="Mn93NeoqnZzVnPIP83_9",Q="show-episodeBlock-title",G="show-episodeBlock-titleLink",H="show-episodeBlock-actions",O="show-episodeBlock-titleContainer",W="q80ZFqNlDZCC7OTfUPj8",J="show-episodeBlock-metadata",Y="YhOAZFuFU1oI_YQSof4z",K="DKIjGP8CcZyjr2O2HNST",X="A7qeQBIk3sqr7bYadWA8",$="_IJaGA3ZdVU0NiTxbGsI",ee="show-episodeBlock-imageContainer",ae="show-episodeBlock-showImage",se="show-episodeBlock-description",ie="hFCGY5gjCjN10WzV2VQ4",ne="gk0rZwqBxJjSeiWV5lgV",oe="te8hrsPnSvx9SUkzV0ME",te="show-episodeBlock-header",le="acjrpluRnLumVxPt2QG9",re="show-episodeBlock-descriptionContainer",de="DyuLxip2Kl8P7H8fW62u",ce="vak8N953oXaq9F7jZDsD",ue="WBxE9PQe96PpkE9RuTo5",me=i.memo(i.forwardRef((function({uri:e,name:a,showName:s,showUri:n,size:h,description:x,durationMs:g,images:p,badges:y,fullyPlayed:b,releaseDate:j,resumePositionMs:f,isCurrentlyPlaying:k,isPlaying:v,onContextMenu:N,onTouchStart:P,onTouchEnd:E,handlePlaybackClick:S,handleDragStart:w,handleClick:I,position:me,index:he,isPlayable:xe,isPaywalled:ge,isUserSubscribed:pe,episodeSharingInfo:ye,playButtonWrapper:be=null,highlightText:je=(e=>e),onMarkAsPlayed:fe,contentInformation:ke,requestId:ve,onMoreButtonClick:Ne,status:Pe,variant:Ee="default",mediaTypes:Se},we){const Ce=(0,t.Zp)(),Ie=k&&v,Te=(0,u.o_)(e).toURLPath(!0),De=(0,u.o_)(n)?.toURLPath(!0),Me=function({episodeUri:e}){const[a,s]=(0,i.useState)([]),n=(0,L.o)();return(0,i.useEffect)((()=>{let a=!0;return async function(){const i=await n.getArtists(e);a&&s(i)}(),()=>{a=!1}}),[e,n]),a}({episodeUri:e}),Re=(0,M.hD)(e,j,f,b),Ae=Se?.includes(_.C.Video)??!1,Le=(0,i.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Ce(Te),I&&I(e)}),[Ce,Te,I]),Ue=(0,i.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),De&&Ce(De)}),[De,Ce]),Be=ge&&!pe,ze=(0,i.useCallback)((e=>{e.stopPropagation(),Be||S(e)}),[S,Be]),Ve=Be||xe,_e=m.Ru.get("tracklist.a11y.play",a,s),Ze=m.Ru.get("tracklist.a11y.pause",a,s),Fe=(0,C.jsx)(R.R,{size:"small",version:"next-best-episode"===Ee?R.H.primary:R.H.secondary,onClick:ze,isPlaying:Ie,disabled:!Ve,locked:Be,ariaPlayLabel:_e,ariaPauseLabel:Ze}),qe=be?be(Fe):Fe;return(0,C.jsxs)("div",{ref:we,className:o()(F,{[q]:k,[ne]:h===z.E.MEDIUM,[oe]:h===z.E.LARGE,[$]:h===z.E.XSMALL,[ue]:"next-best-episode"===Ee}),"data-testid":`episode-${he}`,draggable:!!w,onDragStart:w,onClick:Le,onContextMenu:N,onTouchStart:P,onTouchEnd:E,children:[Pe&&(0,C.jsx)(d.E,{className:le,paddingBottom:r.vw,children:Pe}),ke&&(0,C.jsx)(D.g,{className:ce,cardHeaderText:ke.cardHeaderText,buttonText:ke.buttonText,buttonTarget:ke.buttonTarget}),"default"===Ee&&(0,C.jsx)("div",{className:ee,children:(0,C.jsx)(U.b,{className:ae,type:V.c.EPISODE,size:(e=>{switch(e){case z.E.LARGE:return B.Qe.SIZE_112;case z.E.MEDIUM:return B.Qe.SIZE_64;default:return B.Qe.SIZE_48}})(h),title:a,shape:U.u.ROUNDED_CORNERS,images:p})}),(0,C.jsxs)("div",{className:te,children:[(0,C.jsxs)("div",{className:O,children:[(0,C.jsx)(l.N_,{className:G,to:Te,onClick:Le,children:(0,C.jsxs)(d.E,{as:"div",variant:"bodyMediumBold",className:Q,"data-testid":"episodeTitle",children:[Re&&(0,C.jsx)(M.Tc,{}),je(a)]})}),Me.length>0&&(0,C.jsxs)("div",{className:Y,children:[(0,C.jsx)(c.e,{size:"small",className:X}),(0,C.jsx)(d.E,{as:"p",variant:"bodySmall",className:K,children:je(Me.join(m.Ru.getSeparator()))})]})]}),(0,C.jsxs)("div",{className:W,children:[Ae&&(0,C.jsx)(d.E,{variant:"bodySmall",semanticColor:"textSubdued",children:(0,C.jsx)(A.T,{})}),s&&De&&(0,C.jsx)(l.N_,{className:G,to:De,onClick:Ue,children:(0,C.jsx)(d.E,{variant:"bodySmall",semanticColor:"textSubdued",children:je(s)})})]})]}),(0,C.jsx)("div",{className:re,children:(0,C.jsx)(d.E,{as:"p",variant:"bodySmall",className:se,children:je(x??"")})}),(0,C.jsxs)("div",{className:J,children:[(0,C.jsx)("div",{className:ie,children:y}),(0,C.jsx)(Z.j,{isPlaying:Ie,fullyPlayed:b,durationMs:g,releaseDate:j,resumePositionMs:f,position:k?me:void 0})]}),(0,C.jsx)("div",{onClick:e=>{e.stopPropagation()},className:H,children:(0,C.jsx)(T,{episodeUri:e,showUri:n??"",sharingInfo:ye,canDownload:!ge||ge&&pe,requestId:ve,index:he,name:a,fullyPlayed:b,onMarkAsPlayed:fe,onMoreButtonClick:Ne})}),(0,C.jsx)("div",{className:de,children:qe})]})})))},56144:(e,a,s)=>{s.d(a,{o:()=>o});var i=s(39621),n=s(89035);function o(){return(0,n.N)(i.g)}},88869:(e,a,s)=>{s.d(a,{_:()=>c});var i=s(30758),n=s(57574),o=s(97500),t=s.n(o);const l="eqw9lvuoZHrkWMTdyTpY",r="lb08f71wES9AQnKx6e0R";var d=s(86070);const c=i.memo((function(e){const{triggerOnInitialLoad:a=!1,onReachBottom:s,showScrollbar:o=!0,horizontalScroll:c=!1,className:u}=e,{ref:m,inView:h}=(0,n.Wx)({initialInView:a});return(0,i.useEffect)((()=>{h&&s&&s()}),[h,s]),(0,d.jsxs)("div",{className:t()({[r]:!o,[l]:c},u),"data-testid":"infinite-scroll-list",children:[e.children,(0,d.jsx)("div",{ref:m})]})}))}}]);
//# sourceMappingURL=8462.js.map