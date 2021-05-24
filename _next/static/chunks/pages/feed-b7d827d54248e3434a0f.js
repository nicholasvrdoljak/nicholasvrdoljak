(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{6562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var i=n(5893),o=n(2949),a=n(2122),r=n(7294),s=(n(5697),n(6010)),c=n(4670),l=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=r.forwardRef((function(e,t){var n=e.alignContent,i=void 0===n?"stretch":n,c=e.alignItems,l=void 0===c?"stretch":c,d=e.classes,u=e.className,m=e.component,f=void 0===m?"div":m,p=e.container,g=void 0!==p&&p,h=e.direction,x=void 0===h?"row":h,v=e.item,b=void 0!==v&&v,w=e.justify,y=void 0===w?"flex-start":w,j=e.lg,Z=void 0!==j&&j,N=e.md,C=void 0!==N&&N,S=e.sm,k=void 0!==S&&S,M=e.spacing,E=void 0===M?0:M,I=e.wrap,W=void 0===I?"wrap":I,_=e.xl,R=void 0!==_&&_,B=e.xs,T=void 0!==B&&B,z=e.zeroMinWidth,O=void 0!==z&&z,V=(0,o.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=(0,s.Z)(d.root,u,g&&[d.container,0!==E&&d["spacing-xs-".concat(String(E))]],b&&d.item,O&&d.zeroMinWidth,"row"!==x&&d["direction-xs-".concat(String(x))],"wrap"!==W&&d["wrap-xs-".concat(String(W))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==i&&d["align-content-xs-".concat(String(i))],"flex-start"!==y&&d["justify-xs-".concat(String(y))],!1!==T&&d["grid-xs-".concat(String(T))],!1!==k&&d["grid-sm-".concat(String(k))],!1!==C&&d["grid-md-".concat(String(C))],!1!==Z&&d["grid-lg-".concat(String(Z))],!1!==R&&d["grid-xl-".concat(String(R))]);return r.createElement(f,(0,a.Z)({className:A,ref:t},V))})),f=(0,c.Z)((function(e){return(0,a.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return l.forEach((function(i){var o=e.spacing(i);0!==o&&(n["spacing-".concat(t,"-").concat(i)]={margin:"-".concat(u(o,2)),width:"calc(100% + ".concat(u(o),")"),"& > $item":{padding:u(o,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var i={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var o="".concat(Math.round(e/12*1e8)/1e6,"%");i[t]={flexBasis:o,flexGrow:0,maxWidth:o}}else i[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else i[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,a.Z)(e,i):e[t.breakpoints.up(n)]=i}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m),p=n(2318),g=n(9895),h=r.forwardRef((function(e,t){var n=e.classes,i=e.className,c=e.raised,l=void 0!==c&&c,d=(0,o.Z)(e,["classes","className","raised"]);return r.createElement(g.Z,(0,a.Z)({className:(0,s.Z)(n.root,i),elevation:l?8:1,ref:t},d))})),x=(0,c.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(h),v=n(4720),b=r.forwardRef((function(e,t){var n=e.children,i=e.classes,c=e.className,l=e.focusVisibleClassName,d=(0,o.Z)(e,["children","classes","className","focusVisibleClassName"]);return r.createElement(v.Z,(0,a.Z)({className:(0,s.Z)(i.root,c),focusVisibleClassName:(0,s.Z)(l,i.focusVisible),ref:t},d),n,r.createElement("span",{className:i.focusHighlight}))})),w=(0,c.Z)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(b),y=r.forwardRef((function(e,t){var n=e.classes,i=e.className,c=e.component,l=void 0===c?"div":c,d=(0,o.Z)(e,["classes","className","component"]);return r.createElement(l,(0,a.Z)({className:(0,s.Z)(n.root,i),ref:t},d))})),j=(0,c.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(y),Z=["video","audio","picture","iframe","img"],N=r.forwardRef((function(e,t){var n=e.children,i=e.classes,c=e.className,l=e.component,d=void 0===l?"div":l,u=e.image,m=e.src,f=e.style,p=(0,o.Z)(e,["children","classes","className","component","image","src","style"]),g=-1!==Z.indexOf(d),h=!g&&u?(0,a.Z)({backgroundImage:'url("'.concat(u,'")')},f):f;return r.createElement(d,(0,a.Z)({className:(0,s.Z)(i.root,c,g&&i.media,-1!=="picture img".indexOf(d)&&i.img),ref:t,style:h,src:g?u||m:void 0},p),n)})),C=(0,c.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(N),S=n(1120),k=n(8920),M=[{type:"youtube",title:"Suburbs that don't Suck",link:"MWsGBRdK2N0",date:"May 24, 2021"},{type:"youtube",title:"The Insane Logistics of Shutting Down the Cruise Industry",link:"N4dOCfWlgBw",date:"May 24, 2021"},{type:"quote",title:"C.S. Lewis",excerpt:"Of all tyrannies, a tyranny sincerely exercised for the good of its victims may be the most oppressive. It would be better to live under robber barons than under omnipotent moral busybodies. The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for our own good will torment us without end for they do so with the approval of their own conscience",image:"",date:"May 22, 2021"},{type:"article",title:"I can tolerate anything except the outgroup",excerpt:"Slate Star Codex",href:"https://web.archive.org/web/20210105161328/https://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/",image:"/images/outgroup.jpg",date:"January 27, 2021"}],E=(0,S.Z)((function(e){return{videoResponsive:{overflow:"hidden",paddingBottom:"56.25%",position:"relative",height:"0"},videoResponsiveIframe:{left:0,top:0,height:"100%",width:"100%",position:"absolute"},cardArea:{width:"100%"}}}));var I=function(e){var t=(0,k.Z)(),n=E(t);function o(e){var t="https://www.youtube.com/embed/".concat(e.link);return(0,i.jsx)("div",{className:n.videoResponsive,children:(0,i.jsx)("iframe",{className:n.videoResponsiveIframe,width:"560",height:"315",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}function a(e){return(0,i.jsx)(w,{children:(0,i.jsxs)(j,{children:["youtube"===e.type&&o(e),e.image&&(0,i.jsx)(C,{component:"img",alt:"Thumbnail",height:"140",image:e.image,title:"Thumbnail"}),e.title&&(0,i.jsx)(p.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),e.excerpt&&(0,i.jsx)(p.Z,{component:"p",children:e.excerpt}),e.date&&(0,i.jsxs)(p.Z,{component:"p",variant:"caption",children:[(0,i.jsx)("br",{}),"Posted on ",e.date]})]})})}return(0,i.jsx)("div",{style:{marginTop:20,padding:30},children:(0,i.jsx)(f,{container:!0,spacing:10,justify:"center",children:M.map((function(e){return(0,i.jsx)(f,{item:!0,className:n.cardArea,children:(0,i.jsxs)(x,{children:[e.href&&(0,i.jsx)("a",{href:e.href,target:"_blank",children:a(e)}),!e.href&&(0,i.jsx)("div",{children:a(e)})]})},e.title)}))})})}},8203:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feed",function(){return n(6562)}])}},function(e){e.O(0,[774,888,179],(function(){return t=8203,e(e.s=t);var t}));var t=e.O();_N_E=t}]);