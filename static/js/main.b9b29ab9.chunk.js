(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,i){},13:function(e,t,i){},14:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),n=i(7),c=i.n(n),h=(i(12),i(2)),l=i(4),r=i(5);var o,d,g,j=function(){function e(t,i,a,s,n,c){Object(l.a)(this,e),this.x=t,this.y=i,this.symbol=a,this.color=s,this.gray=n/255,this.res=c*this.gray}return Object(r.a)(e,[{key:"draw",value:function(e,t){var i=this.color;e.fillStyle=i,e.font="".concat(t,"px monospace"),e.fillText(this.symbol,this.x,this.y)}},{key:"drawRect",value:function(e){e.fillStyle="white",e.fillRect(this.x,this.y,this.res,this.res)}}]),e}(),u=function(){function e(t,i,a){Object(l.a)(this,e),this.img=t,this.canvas=i,this.ctx=a,this.imageCell=[],this.resizeImage(this.img,this.canvas),a.drawImage(t,0,0,i.width,i.height),this.pixels=a.getImageData(0,0,i.width,i.height)}return Object(r.a)(e,[{key:"resizeImage",value:function(e,t){window.innerHeight>window.innerWidth?(t.width=.8*window.innerWidth,e.height>e.width?(t.height=.6*window.innerHeight,t.width=e.width/e.height*t.height):t.height=e.height/e.width*t.width):(t.width=.4*window.innerWidth,e.height>e.width?(t.height=.8*window.innerHeight,t.width=e.width/e.height*t.height):t.height=e.height/e.width*t.width)}},{key:"convertToSymbol",value:function(e){return e>250?"@":e<250&&e>220?"#":e<220&&e>190?"a":e<190&&e>160?"n":e<160&&e>130?"&":e<130&&e>100?"^":e<100&&e>70?"*":"."}},{key:"scanImage",value:function(e){for(var t=0;t<this.pixels.height;t+=e)for(var i=0;i<this.pixels.width;i+=e){var a=4*(t*this.pixels.width+i),s=this.pixels.data[a],n=this.pixels.data[a+1],c=this.pixels.data[a+2],h=(s+n+c)/3,l="rgb(".concat(s,",").concat(n,",").concat(c,")"),r=this.convertToSymbol(h);this.imageCell.push(new j(i,t,r,l,h,e))}}},{key:"makeGray",value:function(e,t,i){this.resizeImage(this.img,e),t.drawImage(this.img,0,0,e.width,e.height);for(var a=0;a<this.pixels.height;a+=i)for(var s=0;s<this.pixels.width;s+=i){var n=4*(a*this.pixels.width+s),c=(this.pixels.data[n]+this.pixels.data[n+1]+this.pixels.data[n+2])/3;this.pixels.data[n]=c,this.pixels.data[n+1]=c,this.pixels.data[n+2]=c}t.putImageData(this.pixels,0,0)}},{key:"toAscii",value:function(e,t,i){this.scanImage(i),this.resizeImage(this.img,e),t.fillStyle="black",t.fillRect(0,0,e.width,e.height);for(var a=0;a<this.imageCell.length;a++)this.imageCell[a].draw(t,i)}},{key:"toRect",value:function(e,t,i){this.scanImage(i),this.resizeImage(this.img,e),t.fillStyle="black",t.fillRect(0,0,e.width,e.height);for(var a=0;a<this.imageCell.length;a++)this.imageCell[a].drawRect(t)}}]),e}(),b=(i(13),i(14),i.p+"static/media/Earth_nasa.f1d69829.jpg"),m=i(6),f=i(0);var x=function(){var e=Object(a.useState)(null),t=Object(h.a)(e,2),i=t[0],s=t[1],n=Object(a.useState)(10),c=Object(h.a)(n,2),l=c[0],r=c[1],j=Object(a.useState)(null),x=Object(h.a)(j,2),O=x[0],v=x[1],w=Object(a.useState)(null),p=Object(h.a)(w,2),y=p[0],N=p[1],I=Object(a.useState)(10),S=Object(h.a)(I,2),C=S[0],R=S[1],k=Object(a.useState)(b),L=Object(h.a)(k,2),D=L[0],z=L[1],A=Object(a.useState)([]),E=Object(h.a)(A,2),T=(E[0],E[1]),H=Object(a.useState)(!1),U=Object(h.a)(H,2),W=U[0],B=U[1],G=Object(a.useState)(),J=Object(h.a)(G,2),P=J[0],F=J[1],M=Object(a.useState)(),_=Object(h.a)(M,2),q=_[0],K=_[1],Q=Object(a.useRef)(null),V=Object(a.useRef)(null),X=Object(a.useRef)(null);return Object(a.useEffect)((function(){B(!0);var e=new Image;!function(e,t){var i,a=new Image;a.crossOrigin="Anonymous",a.src=e,console.log(a),a.onload=function(){var e=document.createElement("canvas"),a=e.getContext("2d");e.height=this.naturalHeight,e.width=this.naturalWidth,console.log(this),a.drawImage(this,0,0),i=e.toDataURL("image/jpeg"),t(i)}}(D,(function(t){e.src=t})),e.onload=function(){return s(e)},B(!1)}),[D]),Object(a.useEffect)((function(){if(i&&Q){B(!0);var e=Q.current.getContext("2d");o=V.current.getContext("2d"),d=X.current.getContext("2d"),(g=new u(i,Q.current,e)).toAscii(V.current,o,l),g.toRect(X.current,d,l),T(g.imageCell),g.img.width/g.img.height;var t=V.current.toDataURL(),a=X.current.toDataURL();F(t),K(a),B(!1)}}),[i,l]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{className:"logo",children:"GenArt."}),Object(f.jsxs)("div",{className:"flex",children:[W?Object(f.jsx)("h1",{children:"loading"}):Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("canvas",{ref:Q,className:"canvas"})}),Object(f.jsxs)("div",{className:"barBox",children:[Object(f.jsxs)("div",{className:"fileContainer",children:[Object(f.jsx)("input",{className:"file",id:"file",type:"file",accept:"image/png, image/jpeg",onChange:function(e){var t=new FileReader;null==e.target.files[0]||(N(e.target.files[0].name),t.readAsDataURL(e.target.files[0]),t.onloadend=function(){v(t.result)})}}),Object(f.jsx)("label",{className:"fileLabel",for:"file",children:"choose image"}),y?Object(f.jsx)("p",{className:"title",children:y}):""]}),Object(f.jsx)("div",{className:"2",children:Object(f.jsx)("input",{step:"2",className:"",type:"range",min:"5",max:"30",onChange:function(e){R(e.target.value)}})}),Object(f.jsx)("div",{className:"3",children:Object(f.jsx)("button",{className:"btn",type:"button",onClick:function(){z(O),console.log(V.current),r(parseInt(C))},children:"set it"})})]}),W?Object(f.jsx)("h1",{children:"loading"}):Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"relative",children:[Object(f.jsx)("canvas",{ref:V,className:"canvas"}),Object(f.jsx)("a",{href:P,download:"".concat(y,"ascii.png"),className:"btn2 TopLeftParent",type:"button",children:Object(f.jsx)(m.a,{})})]})}),W?Object(f.jsx)("h1",{children:"loading"}):Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:"relative",children:[Object(f.jsx)("canvas",{ref:X,className:"canvas"}),Object(f.jsx)("a",{href:q,download:"".concat(y,"grid.png"),className:"btn2 TopLeftParent",type:"button",children:Object(f.jsx)(m.a,{})})]})})]})]})};c.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b9b29ab9.chunk.js.map