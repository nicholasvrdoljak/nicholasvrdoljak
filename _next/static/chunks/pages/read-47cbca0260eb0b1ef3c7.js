_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{EfC6:function(t,e,i){"use strict";i.r(e);var a=i("nKUr"),n=i("Ff2n"),o=i("wx14"),r=i("q1tI"),s=(i("17x9"),i("iuhU")),c=i("H2TA"),l=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=parseFloat(t);return"".concat(i/e).concat(String(t).replace(String(i),"")||"px")}var m=r.forwardRef((function(t,e){var i=t.alignContent,a=void 0===i?"stretch":i,c=t.alignItems,l=void 0===c?"stretch":c,d=t.classes,p=t.className,m=t.component,h=void 0===m?"div":m,g=t.container,u=void 0!==g&&g,f=t.direction,b=void 0===f?"row":f,x=t.item,y=void 0!==x&&x,v=t.justify,j=void 0===v?"flex-start":v,w=t.lg,O=void 0!==w&&w,N=t.md,M=void 0!==N&&N,C=t.sm,S=void 0!==C&&C,E=t.spacing,W=void 0===E?0:E,k=t.wrap,R=void 0===k?"wrap":k,T=t.xl,A=void 0!==T&&T,I=t.xs,B=void 0!==I&&I,_=t.zeroMinWidth,z=void 0!==_&&_,H=Object(n.a)(t,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),V=Object(s.a)(d.root,p,u&&[d.container,0!==W&&d["spacing-xs-".concat(String(W))]],y&&d.item,z&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==R&&d["wrap-xs-".concat(String(R))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==a&&d["align-content-xs-".concat(String(a))],"flex-start"!==j&&d["justify-xs-".concat(String(j))],!1!==B&&d["grid-xs-".concat(String(B))],!1!==S&&d["grid-sm-".concat(String(S))],!1!==M&&d["grid-md-".concat(String(M))],!1!==O&&d["grid-lg-".concat(String(O))],!1!==A&&d["grid-xl-".concat(String(A))]);return r.createElement(h,Object(o.a)({className:V,ref:e},H))})),h=Object(c.a)((function(t){return Object(o.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(t,e){var i={};return l.forEach((function(a){var n=t.spacing(a);0!==n&&(i["spacing-".concat(e,"-").concat(a)]={margin:"-".concat(p(n,2)),width:"calc(100% + ".concat(p(n),")"),"& > $item":{padding:p(n,2)}})})),i}(t,"xs"),t.breakpoints.keys.reduce((function(e,i){return function(t,e,i){var a={};d.forEach((function(t){var e="grid-".concat(i,"-").concat(t);if(!0!==t)if("auto"!==t){var n="".concat(Math.round(t/12*1e8)/1e6,"%");a[e]={flexBasis:n,flexGrow:0,maxWidth:n}}else a[e]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[e]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===i?Object(o.a)(t,a):t[e.breakpoints.up(i)]=a}(e,t,i),e}),{}))}),{name:"MuiGrid"})(m),g=i("ofer"),u=i("kKAo"),f=r.forwardRef((function(t,e){var i=t.classes,a=t.className,c=t.raised,l=void 0!==c&&c,d=Object(n.a)(t,["classes","className","raised"]);return r.createElement(u.a,Object(o.a)({className:Object(s.a)(i.root,a),elevation:l?8:1,ref:e},d))})),b=Object(c.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(f),x=i("VD++"),y=r.forwardRef((function(t,e){var i=t.children,a=t.classes,c=t.className,l=t.focusVisibleClassName,d=Object(n.a)(t,["children","classes","className","focusVisibleClassName"]);return r.createElement(x.a,Object(o.a)({className:Object(s.a)(a.root,c),focusVisibleClassName:Object(s.a)(l,a.focusVisible),ref:e},d),i,r.createElement("span",{className:a.focusHighlight}))})),v=Object(c.a)((function(t){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:t.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:t.transitions.create("opacity",{duration:t.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(y),j=r.forwardRef((function(t,e){var i=t.disableSpacing,a=void 0!==i&&i,c=t.classes,l=t.className,d=Object(n.a)(t,["disableSpacing","classes","className"]);return r.createElement("div",Object(o.a)({className:Object(s.a)(c.root,l,!a&&c.spacing),ref:e},d))})),w=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(j),O=r.forwardRef((function(t,e){var i=t.classes,a=t.className,c=t.component,l=void 0===c?"div":c,d=Object(n.a)(t,["classes","className","component"]);return r.createElement(l,Object(o.a)({className:Object(s.a)(i.root,a),ref:e},d))})),N=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(O),M=["video","audio","picture","iframe","img"],C=r.forwardRef((function(t,e){var i=t.children,a=t.classes,c=t.className,l=t.component,d=void 0===l?"div":l,p=t.image,m=t.src,h=t.style,g=Object(n.a)(t,["children","classes","className","component","image","src","style"]),u=-1!==M.indexOf(d),f=!u&&p?Object(o.a)({backgroundImage:'url("'.concat(p,'")')},h):h;return r.createElement(d,Object(o.a)({className:Object(s.a)(a.root,c,u&&a.media,-1!=="picture img".indexOf(d)&&a.img),ref:e,style:f,src:u?p||m:void 0},g),i)})),S=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(C),E=i("Z3vd"),W=[{title:"My first post",excerpt:"This is my first post with more content inside",image:"https://bit.ly/2WNi2Ml"},{title:"My second post",excerpt:"This is my second post with more content inside",image:"https://bit.ly/2WNi2Ml"},{title:"My third post",excerpt:"This is my third post with more content inside",image:"https://bit.ly/2WNi2Ml"},{title:"My fourth post",excerpt:"This is my fourth post with more content inside",image:"https://bit.ly/2WNi2Ml"},{title:"My fifth post",excerpt:"This is my fifth post with more content inside",image:"https://bit.ly/2WNi2Ml"},{title:"My sixth post",excerpt:"This is my sixth post with more content inside",image:"https://bit.ly/2WNi2Ml"}];e.default=function(t){return Object(a.jsx)("div",{style:{marginTop:20,padding:30},children:Object(a.jsx)(h,{container:!0,spacing:10,justify:"center",children:W.map((function(t){return Object(a.jsx)(h,{item:!0,children:Object(a.jsxs)(b,{children:[Object(a.jsxs)(v,{children:[Object(a.jsx)(S,{component:"img",alt:"Contemplative Reptile",height:"140",image:t.image,title:"Contemplative Reptile"}),Object(a.jsxs)(N,{children:[Object(a.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(a.jsx)(g.a,{component:"p",children:t.excerpt})]})]}),Object(a.jsxs)(w,{children:[Object(a.jsx)(E.a,{size:"small",color:"primary",children:"Share"}),Object(a.jsx)(E.a,{size:"small",color:"primary",children:"Learn More"})]})]})},t.title)}))})})}},H5Ow:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/read",function(){return i("EfC6")}])},kKAo:function(t,e,i){"use strict";var a=i("Ff2n"),n=i("wx14"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),s=i("H2TA"),c=o.forwardRef((function(t,e){var i=t.classes,s=t.className,c=t.component,l=void 0===c?"div":c,d=t.square,p=void 0!==d&&d,m=t.elevation,h=void 0===m?1:m,g=t.variant,u=void 0===g?"elevation":g,f=Object(a.a)(t,["classes","className","component","square","elevation","variant"]);return o.createElement(l,Object(n.a)({className:Object(r.a)(i.root,s,"outlined"===u?i.outlined:i["elevation".concat(h)],!p&&i.rounded),ref:e},f))}));e.a=Object(s.a)((function(t){var e={};return t.shadows.forEach((function(t,i){e["elevation".concat(i)]={boxShadow:t}})),Object(n.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},e)}),{name:"MuiPaper"})(c)},ofer:function(t,e,i){"use strict";var a=i("wx14"),n=i("Ff2n"),o=i("q1tI"),r=(i("17x9"),i("iuhU")),s=i("H2TA"),c=i("NqtD"),l={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=o.forwardRef((function(t,e){var i=t.align,s=void 0===i?"inherit":i,d=t.classes,p=t.className,m=t.color,h=void 0===m?"initial":m,g=t.component,u=t.display,f=void 0===u?"initial":u,b=t.gutterBottom,x=void 0!==b&&b,y=t.noWrap,v=void 0!==y&&y,j=t.paragraph,w=void 0!==j&&j,O=t.variant,N=void 0===O?"body1":O,M=t.variantMapping,C=void 0===M?l:M,S=Object(n.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),E=g||(w?"p":C[N]||l[N])||"span";return o.createElement(E,Object(a.a)({className:Object(r.a)(d.root,p,"inherit"!==N&&d[N],"initial"!==h&&d["color".concat(Object(c.a)(h))],v&&d.noWrap,x&&d.gutterBottom,w&&d.paragraph,"inherit"!==s&&d["align".concat(Object(c.a)(s))],"initial"!==f&&d["display".concat(Object(c.a)(f))]),ref:e},S))}));e.a=Object(s.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)}},[["H5Ow",0,1,2]]]);