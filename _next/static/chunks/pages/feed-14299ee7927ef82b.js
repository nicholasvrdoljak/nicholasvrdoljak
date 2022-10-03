(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{8203:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feed",function(){return n(2815)}])},2815:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var i=n(5893),o=n(7294),r=n(3366),a=n(7462),s=n(6010),c=n(5408),l=n(9707),d=n(7192),u=n(2151),m=n(3616);var h=o.createContext(),p=n(8979),g=n(6087);function f(e){return(0,p.Z)("MuiGrid",e)}const w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var v=(0,g.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...w.map((e=>`grid-xs-${e}`)),...w.map((e=>`grid-sm-${e}`)),...w.map((e=>`grid-md-${e}`)),...w.map((e=>`grid-lg-${e}`)),...w.map((e=>`grid-xl-${e}`))]);const b=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function y(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function x(e,t,n={}){if(!t||!e||e<=0)return[];if("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e)return[n[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:i,sm:o,md:r,lg:a,xl:s}=e;return[Number(i)>0&&(n[`spacing-xs-${String(i)}`]||`spacing-xs-${String(i)}`),Number(o)>0&&(n[`spacing-sm-${String(o)}`]||`spacing-sm-${String(o)}`),Number(r)>0&&(n[`spacing-md-${String(r)}`]||`spacing-md-${String(r)}`),Number(a)>0&&(n[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(n[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const S=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:n,direction:i,item:o,lg:r,md:a,sm:s,spacing:c,wrap:l,xl:d,xs:u,zeroMinWidth:m}=e.ownerState;return[t.root,n&&t.container,o&&t.item,m&&t.zeroMinWidth,...x(c,n,t),"row"!==i&&t[`direction-xs-${String(i)}`],"wrap"!==l&&t[`wrap-xs-${String(l)}`],!1!==u&&t[`grid-xs-${String(u)}`],!1!==s&&t[`grid-sm-${String(s)}`],!1!==a&&t[`grid-md-${String(a)}`],!1!==r&&t[`grid-lg-${String(r)}`],!1!==d&&t[`grid-xl-${String(d)}`]]}})((({ownerState:e})=>(0,a.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,c.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,c.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${v.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:i}=t;let o={};if(n&&0!==i){const t=(0,c.P$)({values:i,breakpoints:e.breakpoints.values});o=(0,c.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{marginTop:`-${y(n)}`,[`& > .${v.item}`]:{paddingTop:y(n)}}:{}}))}return o}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:i}=t;let o={};if(n&&0!==i){const t=(0,c.P$)({values:i,breakpoints:e.breakpoints.values});o=(0,c.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{width:`calc(100% + ${y(n)})`,marginLeft:`-${y(n)}`,[`& > .${v.item}`]:{paddingLeft:y(n)}}:{}}))}return o}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((i,o)=>{let r={};if(t[o]&&(n=t[o]),!n)return i;if(!0===n)r={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)r={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,c.P$)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"===typeof s?s[o]:s;if(void 0===l||null===l)return i;const d=Math.round(n/l*1e8)/1e6+"%";let u={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${d} + ${y(n)})`;u={flexBasis:e,maxWidth:e}}}r=(0,a.Z)({flexBasis:d,flexGrow:0,maxWidth:d},u)}return 0===e.breakpoints.values[o]?Object.assign(i,r):i[e.breakpoints.up(o)]=r,i}),{})}));var Z=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiGrid"}),c=(0,l.Z)(n),{className:u,columns:p,columnSpacing:g,component:w="div",container:v=!1,direction:y="row",item:Z=!1,lg:k=!1,md:$=!1,rowSpacing:M,sm:C=!1,spacing:N=0,wrap:j="wrap",xl:R=!1,xs:W=!1,zeroMinWidth:T=!1}=c,P=(0,r.Z)(c,b),A=M||N,z=g||N,B=o.useContext(h),I=v?p||12:B,O=(0,a.Z)({},c,{columns:I,container:v,direction:y,item:Z,lg:k,md:$,sm:C,rowSpacing:A,columnSpacing:z,wrap:j,xl:R,xs:W,zeroMinWidth:T}),H=(e=>{const{classes:t,container:n,direction:i,item:o,lg:r,md:a,sm:s,spacing:c,wrap:l,xl:u,xs:m,zeroMinWidth:h}=e,p={root:["root",n&&"container",o&&"item",h&&"zeroMinWidth",...x(c,n),"row"!==i&&`direction-xs-${String(i)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==m&&`grid-xs-${String(m)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==r&&`grid-lg-${String(r)}`,!1!==u&&`grid-xl-${String(u)}`]};return(0,d.Z)(p,f,t)})(O);return(0,i.jsx)(h.Provider,{value:I,children:(0,i.jsx)(S,(0,a.Z)({ownerState:O,className:(0,s.Z)(H.root,u),as:w,ref:t},P))})})),k=n(5861),$=n(5113);function M(e){return(0,p.Z)("MuiCard",e)}(0,g.Z)("MuiCard",["root"]);const C=["className","raised"],N=(0,u.ZP)($.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({overflow:"hidden"})));var j=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCard"}),{className:o,raised:c=!1}=n,l=(0,r.Z)(n,C),u=(0,a.Z)({},n,{raised:c}),h=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"]},M,t)})(u);return(0,i.jsx)(N,(0,a.Z)({className:(0,s.Z)(h.root,o),elevation:c?8:void 0,ref:t,ownerState:u},l))}));function R(e){return(0,p.Z)("MuiCardActionArea",e)}var W=(0,g.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]),T=n(2607);const P=["children","className","focusVisibleClassName"],A=(0,u.ZP)(T.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e})=>({display:"block",textAlign:"inherit",width:"100%",[`&:hover .${W.focusHighlight}`]:{opacity:e.palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},[`&.${W.focusVisible} .${W.focusHighlight}`]:{opacity:e.palette.action.focusOpacity}}))),z=(0,u.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,t)=>t.focusHighlight})((({theme:e})=>({overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})})));var B=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCardActionArea"}),{children:o,className:c,focusVisibleClassName:l}=n,u=(0,r.Z)(n,P),h=n,p=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"],focusHighlight:["focusHighlight"]},R,t)})(h);return(0,i.jsxs)(A,(0,a.Z)({className:(0,s.Z)(p.root,c),focusVisibleClassName:(0,s.Z)(l,p.focusVisible),ref:t,ownerState:h},u,{children:[o,(0,i.jsx)(z,{className:p.focusHighlight,ownerState:h})]}))}));function I(e){return(0,p.Z)("MuiCardContent",e)}(0,g.Z)("MuiCardContent",["root"]);const O=["className","component"],H=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var _=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCardContent"}),{className:o,component:c="div"}=n,l=(0,r.Z)(n,O),u=(0,a.Z)({},n,{component:c}),h=(e=>{const{classes:t}=e;return(0,d.Z)({root:["root"]},I,t)})(u);return(0,i.jsx)(H,(0,a.Z)({as:c,className:(0,s.Z)(h.root,o),ownerState:u,ref:t},l))}));function G(e){return(0,p.Z)("MuiCardMedia",e)}(0,g.Z)("MuiCardMedia",["root","media","img"]);const L=["children","className","component","image","src","style"],q=(0,u.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:i,isImageComponent:o}=n;return[t.root,i&&t.media,o&&t.img]}})((({ownerState:e})=>(0,a.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),E=["video","audio","picture","iframe","img"],V=["picture","img"];var F=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiCardMedia"}),{children:o,className:c,component:l="div",image:u,src:h,style:p}=n,g=(0,r.Z)(n,L),f=-1!==E.indexOf(l),w=!f&&u?(0,a.Z)({backgroundImage:`url("${u}")`},p):p,v=(0,a.Z)({},n,{component:l,isMediaComponent:f,isImageComponent:-1!==V.indexOf(l)}),b=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:i}=e,o={root:["root",n&&"media",i&&"img"]};return(0,d.Z)(o,G,t)})(v);return(0,i.jsx)(q,(0,a.Z)({className:(0,s.Z)(b.root,c),as:l,role:!f&&u?"img":void 0,ref:t,style:w,ownerState:v,src:f?u||h:void 0},g,{children:o}))})),D=n(2734),Y=n(1664),X=n.n(Y),J=n(9874),K=[{type:"quote",title:'Percy Shelley, "Ozymandias"',excerpt:'I met a traveller from an antique land\n\n\t\tWho said: Two vast and trunkless legs of stone\n\n\t\tStand in the desart.[d] Near them, on the sand,\n\n\t\tHalf sunk, a shattered visage lies, whose frown,\n\n\t\tAnd wrinkled lip, and sneer of cold command,\n\n\t\tTell that its sculptor well those passions read\n\n\t\tWhich yet survive, stamped on these lifeless things,\n\n\t\tThe hand that mocked them and the heart that fed:\n\n\t\tAnd on the pedestal these words appear:\n\n\t\t"My name is Ozymandias, king of kings:\n\n\t\tLook on my works, ye Mighty, and despair!"\n\n\t\tNothing beside remains. Round the decay\n\n\t\tOf that colossal wreck, boundless and bare\n\n\t\tThe lone and level sands stretch far away.',date:"October 3, 2022",image:""},{type:"youtube",title:"Snowboarding vs. Skiing",link:"XPZDEWBzneY",date:"March 23, 2022"},{type:"youtube",title:"Chevy Commercial",link:"GQ1uqkBeTHY",date:"December 25, 2021"},{type:"quote",title:"Captain Corelli's Mandolin",excerpt:'Love is a temporary madness, it erupts like volcanoes and then subsides. And when it subsides, you have to make a decision. You have to work out whether your roots have so entwined together that it is inconceivable that you should ever part. Because this is what love is. Love is not breathlessness, it is not excitement, it is not the promulgation of promises of eternal passion, it is not the desire to mate every second minute of the day, it is not lying awake at night imagining that he is kissing every cranny of your body. No, don\'t blush, I am telling you some truths. That is just being "in love", which any fool can do. Love itself is what is left over when being in love has burned away, and this is both an art and a fortunate accident.',date:"May 28, 2021",image:""},{type:"quote",title:"Thomas Jefferson",excerpt:"Rightful liberty is unobstructed action according to our will within limits drawn around us by the equal rights of others. I do not add \u2018within the limits of the law\u2019 because law is often but the tyrant\u2019s will, and always so when it violates the rights of the individual.",date:"May 28, 2021",image:""},{type:"youtube",title:"Pokemon Cards",link:"wuBABzFi3r4",date:"May 25, 2021"},{type:"youtube",title:"Suburbs that don't Suck",link:"MWsGBRdK2N0",date:"May 24, 2021"},{type:"youtube",title:"The Insane Logistics of Shutting Down the Cruise Industry",link:"N4dOCfWlgBw",date:"May 24, 2021"},{type:"quote",title:"C.S. Lewis",excerpt:"Of all tyrannies, a tyranny sincerely exercised for the good of its victims may be the most oppressive. It would be better to live under robber barons than under omnipotent moral busybodies. The robber baron's cruelty may sometimes sleep, his cupidity may at some point be satiated; but those who torment us for our own good will torment us without end for they do so with the approval of their own conscience. They may be more likely to go to Heaven yet at the same time likelier to make a Hell of earth. This very kindness stings with intolerable insult. To be 'cured' against one's will and cured of states which we may not regard as disease is to be put on a level of those who have not yet reached the age of reason or those who never will; to be classed with infants, imbeciles, and domestic animals",image:"",date:"May 22, 2021"},{type:"article",title:"I can tolerate anything except the outgroup",excerpt:"Slate Star Codex",href:"https://web.archive.org/web/20210105161328/https:/slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/",image:"/images/outgroup.jpg",date:"January 27, 2021"}],Q=(0,J.Z)((function(){return{videoResponsive:{overflow:"hidden",paddingBottom:"56.25%",position:"relative",height:"0"},videoResponsiveIframe:{left:0,top:0,height:"100%",width:"100%",position:"absolute"},cardArea:{width:"100%"}}}));var U=function(){var e=function(e){var t="https://www.youtube.com/embed/".concat(e.link);return(0,i.jsx)("div",{className:o.videoResponsive,children:(0,i.jsx)("iframe",{className:o.videoResponsiveIframe,width:"560",height:"315",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})},t=function(t){return(0,i.jsx)(B,{children:(0,i.jsxs)(_,{children:["youtube"===t.type&&e(t),t.image&&(0,i.jsx)(F,{component:"img",alt:"Thumbnail",height:"140",image:t.image,title:"Thumbnail"}),t.title&&(0,i.jsx)(k.Z,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),t.excerpt&&(0,i.jsx)(k.Z,{component:"p",children:t.excerpt}),t.date&&(0,i.jsxs)(k.Z,{component:"p",variant:"caption",children:[(0,i.jsx)("br",{}),"Posted on ",t.date]})]})})},n=(0,D.Z)(),o=Q(n);return(0,i.jsx)("div",{style:{marginTop:20,padding:30},children:(0,i.jsx)(Z,{container:!0,spacing:10,justifyContent:"center",children:K.map((function(e){return(0,i.jsx)(Z,{item:!0,className:o.cardArea,xs:12,sm:6,md:4,children:(0,i.jsxs)(j,{children:[e.href&&(0,i.jsx)(X(),{href:e.href,target:"_blank",rel:"noreferrer",passHref:!0,children:t(e)}),!e.href&&(0,i.jsx)("div",{children:t(e)})]})},e.title)}))})})}}},function(e){e.O(0,[774,888,179],(function(){return t=8203,e(e.s=t);var t}));var t=e.O();_N_E=t}]);