(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3887:function(r,e,n){"use strict";n.d(e,{Ee:function(){return c}});var t=n(7294),i=n(2067),o=n(4040);function l(r,e=[]){const n=Object.assign({},r);for(const t of e)t in n&&delete n[t];return n}var a=(0,i.Gp)((function(r,e){const{htmlWidth:n,htmlHeight:i,alt:o,...l}=r;return t.createElement("img",{width:n,height:i,ref:e,alt:o,...l})}));a.displayName="NativeImage";var c=(0,i.Gp)((function(r,e){const{fallbackSrc:n,fallback:c,src:s,srcSet:u,align:d,fit:f,loading:x,ignoreFallback:g,crossOrigin:h,fallbackStrategy:m="beforeLoadOrError",referrerPolicy:p,...j}=r,b=null!=x||g||!(void 0!==n||void 0!==c),k=function(r){const{loading:e,src:n,srcSet:i,onLoad:l,onError:a,crossOrigin:c,sizes:s,ignoreFallback:u}=r,[d,f]=(0,t.useState)("pending");(0,t.useEffect)((()=>{f(n?"loading":"pending")}),[n]);const x=(0,t.useRef)(),g=(0,t.useCallback)((()=>{if(!n)return;h();const r=new Image;r.src=n,c&&(r.crossOrigin=c),i&&(r.srcset=i),s&&(r.sizes=s),e&&(r.loading=e),r.onload=r=>{h(),f("loaded"),null==l||l(r)},r.onerror=r=>{h(),f("failed"),null==a||a(r)},x.current=r}),[n,c,i,s,l,a,e]),h=()=>{x.current&&(x.current.onload=null,x.current.onerror=null,x.current=null)};return(0,o.G)((()=>{if(!u)return"loading"===d&&g(),()=>{h()}}),[d,g,u]),u?"loaded":d}({...r,ignoreFallback:b}),y=((r,e)=>"loaded"!==r&&"beforeLoadOrError"===e||"failed"===r&&"onError"===e)(k,m),v={ref:e,objectFit:f,objectPosition:d,...b?j:l(j,["onError","onLoad"])};return y?c||t.createElement(i.m$.img,{as:a,className:"chakra-image__placeholder",src:n,...v}):t.createElement(i.m$.img,{as:a,src:s,srcSet:u,crossOrigin:h,loading:x,referrerPolicy:p,className:"chakra-image",...v})}));c.displayName="Image";(0,i.Gp)(((r,e)=>t.createElement(i.m$.img,{ref:e,as:a,className:"chakra-image",...r})))},9886:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2365)}])},1872:function(r,e,n){"use strict";n.d(e,{Z:function(){return f}});var t=n(5893),i=n(639),o=n(8395),l=n(3382),a=n(3887),c=n(3614),s=n(1664),u=n.n(s);function d(r){return(0,t.jsx)(i.fG,{w:"360px",m:"13.5px",children:(0,t.jsx)(u(),{href:{pathname:"/product/[pid]",query:{pid:"1"}},passHref:!0,children:(0,t.jsx)(i.AB,{children:(0,t.jsx)(i.M5,{flexDirection:"column",children:(0,t.jsxs)(i.xu,{pos:"relative",backgroundColor:(0,o.ff)("background.light","background.dark"),borderRadius:"xl",children:[(0,t.jsx)(i.xu,{pos:"relative",mb:"10px",borderRadius:"xl",children:(0,t.jsx)(a.Ee,{src:r.image||"https://i.etsystatic.com/26514007/r/il/b310e5/3653094048/il_570xN.3653094048_d2ul.jpg",alt:r.title||"Product Title","object-fit":"cover",rounded:"lg",w:"360px",h:"300px",borderRadius:"xl",ml:"auto",mr:"auto"})}),(0,t.jsxs)(i.Kq,{children:[(0,t.jsxs)(i.xu,{mb:"5px",children:[(0,t.jsx)(i.xv,{noOfLines:2,fontSize:"20px",fontWeight:"semibold",children:r.title||"Product Title"}),(0,t.jsx)(i.xv,{as:"h4",fontSize:"17px",noOfLines:1,children:r.price||"$3,523"})]}),(0,t.jsxs)(i.kC,{as:"span",color:"gray.600",fontSize:"xs",alignContent:"center",gap:"3px",flexDirection:"row",children:[(0,t.jsx)(c.Z,{fill:(0,o.ff)("background.dark","background.light"),boxSize:"15px",width:"15px"}),(0,t.jsx)(i.xv,{color:(0,o.ff)("gray.700","gray.500"),children:"One day delivery"})]}),(0,t.jsxs)(i.xu,{display:"flex",mt:"2",alignItems:"center",children:[Array(5).fill("").map((function(r,e){return(0,t.jsx)(l.r7,{color:e<4?"teal.500":"gray.300"},e)})),(0,t.jsx)(i.xu,{as:"span",ml:"2",color:(0,o.ff)("gray.700","gray.500"),fontSize:"sm",children:"420 reviews"})]})]})]})})})})})}function f(r){return(0,t.jsx)(i.M5,{children:(0,t.jsxs)(i.xu,{p:"5px",children:[(0,t.jsx)(i.xv,{fontFamily:"body",fontWeight:"600",fontSize:"lg",color:(0,o.ff)("text.light","text.dark"),pl:"15px",children:r.rowTitle}),(0,t.jsx)(i.rj,{templateColumns:"repeat(4, 1fr)",children:Array(r.amount).fill(0).map((function(){return(0,t.jsx)(i.P4,{children:(0,t.jsx)(d,{})})}))})]})})}},2365:function(r,e,n){"use strict";n.r(e),n.d(e,{default:function(){return a}});var t=n(5893),i=n(639),o=n(8395),l=n(1872),a=function(){return(0,t.jsx)(i.kC,{bgColor:(0,o.ff)("background.light","background.dark"),p:"0",pt:"20px",m:"0",h:"100%",children:(0,t.jsxs)(i.xu,{mx:"auto",children:[(0,t.jsx)(l.Z,{amount:4,rowTitle:"Product Category"},"1"),(0,t.jsx)(l.Z,{amount:4,rowTitle:"Product Category"},"2")]})})}}},function(r){r.O(0,[774,888,179],(function(){return e=9886,r(r.s=e);var e}));var e=r.O();_N_E=e}]);