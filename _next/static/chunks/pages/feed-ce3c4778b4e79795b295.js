_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"6iYV":function(e,t,a){"use strict";a.r(t);var o=a("nKUr"),i=a("ofer"),n=a("Ff2n"),r=a("wx14"),c=a("q1tI"),s=(a("17x9"),a("iuhU")),l=a("H2TA"),d=[0,1,2,3,4,5,6,7,8,9,10],p=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var h=c.forwardRef((function(e,t){var a=e.alignContent,o=void 0===a?"stretch":a,i=e.alignItems,l=void 0===i?"stretch":i,d=e.classes,p=e.className,u=e.component,h=void 0===u?"div":u,m=e.container,g=void 0!==m&&m,f=e.direction,b=void 0===f?"row":f,v=e.item,x=void 0!==v&&v,y=e.justify,j=void 0===y?"flex-start":y,w=e.lg,O=void 0!==w&&w,N=e.md,C=void 0!==N&&N,S=e.sm,k=void 0!==S&&S,E=e.spacing,I=void 0===E?0:E,M=e.wrap,R=void 0===M?"wrap":M,W=e.xl,B=void 0!==W&&W,T=e.xs,A=void 0!==T&&T,_=e.zeroMinWidth,V=void 0!==_&&_,q=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=Object(s.a)(d.root,p,g&&[d.container,0!==I&&d["spacing-xs-".concat(String(I))]],x&&d.item,V&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==R&&d["wrap-xs-".concat(String(R))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==o&&d["align-content-xs-".concat(String(o))],"flex-start"!==j&&d["justify-xs-".concat(String(j))],!1!==A&&d["grid-xs-".concat(String(A))],!1!==k&&d["grid-sm-".concat(String(k))],!1!==C&&d["grid-md-".concat(String(C))],!1!==O&&d["grid-lg-".concat(String(O))],!1!==B&&d["grid-xl-".concat(String(B))]);return c.createElement(h,Object(r.a)({className:z,ref:t},q))})),m=Object(l.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return d.forEach((function(o){var i=e.spacing(o);0!==i&&(a["spacing-".concat(t,"-").concat(o)]={margin:"-".concat(u(i,2)),width:"calc(100% + ".concat(u(i),")"),"& > $item":{padding:u(i,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var o={};p.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");o[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else o[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else o[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,o):e[t.breakpoints.up(a)]=o}(t,e,a),t}),{}))}),{name:"MuiGrid"})(h),g=a("kKAo"),f=c.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.raised,l=void 0!==i&&i,d=Object(n.a)(e,["classes","className","raised"]);return c.createElement(g.a,Object(r.a)({className:Object(s.a)(a.root,o),elevation:l?8:1,ref:t},d))})),b=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(f),v=a("VD++"),x=c.forwardRef((function(e,t){var a=e.children,o=e.classes,i=e.className,l=e.focusVisibleClassName,d=Object(n.a)(e,["children","classes","className","focusVisibleClassName"]);return c.createElement(v.a,Object(r.a)({className:Object(s.a)(o.root,i),focusVisibleClassName:Object(s.a)(l,o.focusVisible),ref:t},d),a,c.createElement("span",{className:o.focusHighlight}))})),y=Object(l.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(x),j=c.forwardRef((function(e,t){var a=e.classes,o=e.className,i=e.component,l=void 0===i?"div":i,d=Object(n.a)(e,["classes","className","component"]);return c.createElement(l,Object(r.a)({className:Object(s.a)(a.root,o),ref:t},d))})),w=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(j),O=["video","audio","picture","iframe","img"],N=c.forwardRef((function(e,t){var a=e.children,o=e.classes,i=e.className,l=e.component,d=void 0===l?"div":l,p=e.image,u=e.src,h=e.style,m=Object(n.a)(e,["children","classes","className","component","image","src","style"]),g=-1!==O.indexOf(d),f=!g&&p?Object(r.a)({backgroundImage:'url("'.concat(p,'")')},h):h;return c.createElement(d,Object(r.a)({className:Object(s.a)(o.root,i,g&&o.media,-1!=="picture img".indexOf(d)&&o.img),ref:t,style:f,src:g?p||u:void 0},m),a)})),C=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(N),S=a("R/WZ"),k=a("tr08"),E=[{type:"youtube",title:"Suburbs that don't Suck",link:"MWsGBRdK2N0",date:"May 24, 2021"},{type:"youtube",title:"The Insane Logistics of Shutting Down the Cruise Industry",link:"N4dOCfWlgBw",date:"May 24, 2021"},{type:"quote",title:"C.S. Lewis",excerpt:"Of all tyrannies, a tyranny sincerely exercised for the good of its victims may be the most oppressive. It would be better to live under robber barons than under omnipotent moral busybodies. The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for our own good will torment us without end for they do so with the approval of their own conscience",image:"",date:"May 22, 2021"},{type:"article",title:"I can tolerate anything except the outgroup",excerpt:"Slate Star Codex",href:"https://web.archive.org/web/20210105161328/https://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/",image:"/images/outgroup.jpg",date:"January 27, 2021"}],I=Object(S.a)((function(e){return{videoResponsive:{overflow:"hidden",paddingBottom:"56.25%",position:"relative",height:"0"},videoResponsiveIframe:{left:0,top:0,height:"100%",width:"100%",position:"absolute"},cardArea:{width:"100%"}}}));t.default=function(e){var t=Object(k.a)(),a=I(t);function n(e){var t="https://www.youtube.com/embed/".concat(e.link);return Object(o.jsx)("div",{className:a.videoResponsive,children:Object(o.jsx)("iframe",{className:a.videoResponsiveIframe,width:"560",height:"315",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}function r(e){return Object(o.jsx)(y,{children:Object(o.jsxs)(w,{children:["youtube"===e.type&&n(e),e.image&&Object(o.jsx)(C,{component:"img",alt:"Thumbnail",height:"140",image:e.image,title:"Thumbnail"}),e.title&&Object(o.jsx)(i.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),e.excerpt&&Object(o.jsx)(i.a,{component:"p",children:e.excerpt}),e.date&&Object(o.jsxs)(i.a,{component:"p",variant:"caption",children:[Object(o.jsx)("br",{}),"Posted on ",e.date]})]})})}return Object(o.jsx)("div",{style:{marginTop:20,padding:30},children:Object(o.jsx)(m,{container:!0,spacing:10,justify:"center",children:E.map((function(e){return Object(o.jsx)(m,{item:!0,className:a.cardArea,xs:12,sm:6,md:4,children:Object(o.jsxs)(b,{children:[e.href&&Object(o.jsx)("a",{href:e.href,target:"_blank",children:r(e)}),!e.href&&Object(o.jsx)("div",{children:r(e)})]})},e.title)}))})})}},"R/WZ":function(e,t,a){"use strict";var o=a("wx14"),i=a("RD7I"),n=a("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,Object(o.a)({defaultTheme:n.a},t))}},UaL4:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feed",function(){return a("6iYV")}])},kKAo:function(e,t,a){"use strict";var o=a("Ff2n"),i=a("wx14"),n=a("q1tI"),r=(a("17x9"),a("iuhU")),c=a("H2TA"),s=n.forwardRef((function(e,t){var a=e.classes,c=e.className,s=e.component,l=void 0===s?"div":s,d=e.square,p=void 0!==d&&d,u=e.elevation,h=void 0===u?1:u,m=e.variant,g=void 0===m?"elevation":m,f=Object(o.a)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(l,Object(i.a)({className:Object(r.a)(a.root,c,"outlined"===g?a.outlined:a["elevation".concat(h)],!p&&a.rounded),ref:t},f))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(i.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},ofer:function(e,t,a){"use strict";var o=a("wx14"),i=a("Ff2n"),n=a("q1tI"),r=(a("17x9"),a("iuhU")),c=a("H2TA"),s=a("NqtD"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=n.forwardRef((function(e,t){var a=e.align,c=void 0===a?"inherit":a,d=e.classes,p=e.className,u=e.color,h=void 0===u?"initial":u,m=e.component,g=e.display,f=void 0===g?"initial":g,b=e.gutterBottom,v=void 0!==b&&b,x=e.noWrap,y=void 0!==x&&x,j=e.paragraph,w=void 0!==j&&j,O=e.variant,N=void 0===O?"body1":O,C=e.variantMapping,S=void 0===C?l:C,k=Object(i.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),E=m||(w?"p":S[N]||l[N])||"span";return n.createElement(E,Object(o.a)({className:Object(r.a)(d.root,p,"inherit"!==N&&d[N],"initial"!==h&&d["color".concat(Object(s.a)(h))],y&&d.noWrap,v&&d.gutterBottom,w&&d.paragraph,"inherit"!==c&&d["align".concat(Object(s.a)(c))],"initial"!==f&&d["display".concat(Object(s.a)(f))]),ref:t},k))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},tr08:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var o=a("aXM8"),i=(a("q1tI"),a("cNwE"));function n(){return Object(o.a)()||i.a}}},[["UaL4",0,1,2,3]]]);