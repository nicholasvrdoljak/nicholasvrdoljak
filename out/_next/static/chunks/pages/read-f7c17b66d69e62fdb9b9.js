_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{EfC6:function(e,t,n){"use strict";n.r(t);var a=n("nKUr"),i=n("Ff2n"),c=n("wx14"),o=n("q1tI"),r=(n("17x9"),n("iuhU")),s=n("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var f=o.forwardRef((function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,f=e.component,g=void 0===f?"div":f,m=e.container,p=void 0!==m&&m,x=e.direction,b=void 0===x?"row":x,h=e.item,j=void 0!==h&&h,v=e.justify,w=void 0===v?"flex-start":v,O=e.lg,y=void 0!==O&&O,C=e.md,N=void 0!==C&&C,S=e.sm,E=void 0!==S&&S,k=e.spacing,_=void 0===k?0:k,M=e.wrap,W=void 0===M?"wrap":M,I=e.xl,R=void 0!==I&&I,z=e.xs,H=void 0!==z&&z,V=e.zeroMinWidth,A=void 0!==V&&V,B=Object(i.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),D=Object(r.a)(d.root,u,p&&[d.container,0!==_&&d["spacing-xs-".concat(String(_))]],j&&d.item,A&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==W&&d["wrap-xs-".concat(String(W))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==a&&d["align-content-xs-".concat(String(a))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==H&&d["grid-xs-".concat(String(H))],!1!==E&&d["grid-sm-".concat(String(E))],!1!==N&&d["grid-md-".concat(String(N))],!1!==y&&d["grid-lg-".concat(String(y))],!1!==R&&d["grid-xl-".concat(String(R))]);return o.createElement(g,Object(c.a)({className:D,ref:t},B))})),g=Object(s.a)((function(e){return Object(c.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(u(i,2)),width:"calc(100% + ".concat(u(i),")"),"& > $item":{padding:u(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(c.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(f),m=n("ofer"),p=n("kKAo"),x=o.forwardRef((function(e,t){var n=e.classes,a=e.className,s=e.raised,l=void 0!==s&&s,d=Object(i.a)(e,["classes","className","raised"]);return o.createElement(p.a,Object(c.a)({className:Object(r.a)(n.root,a),elevation:l?8:1,ref:t},d))})),b=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(x),h=n("VD++"),j=o.forwardRef((function(e,t){var n=e.children,a=e.classes,s=e.className,l=e.focusVisibleClassName,d=Object(i.a)(e,["children","classes","className","focusVisibleClassName"]);return o.createElement(h.a,Object(c.a)({className:Object(r.a)(a.root,s),focusVisibleClassName:Object(r.a)(l,a.focusVisible),ref:t},d),n,o.createElement("span",{className:a.focusHighlight}))})),v=Object(s.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(j),w=o.forwardRef((function(e,t){var n=e.classes,a=e.className,s=e.component,l=void 0===s?"div":s,d=Object(i.a)(e,["classes","className","component"]);return o.createElement(l,Object(c.a)({className:Object(r.a)(n.root,a),ref:t},d))})),O=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(w),y=["video","audio","picture","iframe","img"],C=o.forwardRef((function(e,t){var n=e.children,a=e.classes,s=e.className,l=e.component,d=void 0===l?"div":l,u=e.image,f=e.src,g=e.style,m=Object(i.a)(e,["children","classes","className","component","image","src","style"]),p=-1!==y.indexOf(d),x=!p&&u?Object(c.a)({backgroundImage:'url("'.concat(u,'")')},g):g;return o.createElement(d,Object(c.a)({className:Object(r.a)(a.root,s,p&&a.media,-1!=="picture img".indexOf(d)&&a.img),ref:t,style:x,src:p?u||f:void 0},m),n)})),N=Object(s.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(C),S=(n("YFqc"),[{title:"I can tolerate anything except the outgroup",excerpt:"Classic SSC that was very influential to me.",href:"https://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/",image:"/images/icantolerateanythingexcepttheoutgroup.png",date:"January 27, 2021"}]);t.default=function(e){return Object(a.jsx)("div",{style:{marginTop:20,padding:30},children:Object(a.jsx)(g,{container:!0,spacing:10,justify:"center",children:S.map((function(e){return Object(a.jsx)(g,{item:!0,children:Object(a.jsx)(b,{children:Object(a.jsx)("a",{href:e.href,target:"_blank",children:Object(a.jsxs)(v,{children:[Object(a.jsx)(N,{component:"img",alt:"Contemplative Reptile",height:"140",image:e.image,title:"Contemplative Reptile"}),Object(a.jsxs)(O,{children:[Object(a.jsx)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(a.jsx)(m.a,{component:"p",children:e.excerpt}),Object(a.jsxs)(m.a,{component:"p",variant:"caption",children:[Object(a.jsx)("br",{}),"Posted on ",e.date]})]})]})})})},e.title)}))})})}},H5Ow:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/read",function(){return n("EfC6")}])}},[["H5Ow",0,1,3,2,4]]]);