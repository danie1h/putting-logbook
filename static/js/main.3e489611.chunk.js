(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(54)},24:function(e,t,a){},35:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(17),i=a.n(s),c=(a(24),a(15)),r=a(7),l=a(8),u=a(12),h=a(9),m=a(13),d=a(3),p=a(56),g=a(55),v=a(58),C=a(57),k=a(6),b=(a(35),function(){return o.a.createElement("div",{className:"home"},o.a.createElement("h1",{className:"title"},"Disc Golf Putting Logbook"),o.a.createElement("h2",{className:"description"},"Log Putts, View Stats, Learn and Improve, Repeat"),o.a.createElement(g.a,{to:"/disc-golf-putting-logbook/log",className:"get-started"},"Get Started"))}),f=(a(39),function(e){return o.a.createElement("button",{className:e.className,onClick:e.onClick},e.content)}),E=(a(41),function(e){return o.a.createElement("div",{className:"putting-details"},o.a.createElement("h2",{className:"putting-details-title"},"Hole #",e.holeNum),o.a.createElement("div",{className:"hit-or-miss"},o.a.createElement(f,{className:"hit-btn",onClick:e.handleHitBtn,content:"Hit"}),o.a.createElement(f,{className:"miss-btn",onClick:e.handleMissBtn,content:"Miss"})))}),N=(a(43),function(e){var t="hit"===e.mode?o.a.createElement(k.Circle,{x:e.x,y:e.y,radius:20,fill:"green",draggable:!0,onDragEnd:e.captureDrag}):"miss"===e.mode?o.a.createElement(k.Star,{x:e.x,y:e.y,numPoints:7,innerRadius:10,outerRadius:20,fill:"red",draggable:!0,onDragEnd:e.captureDrag}):o.a.createElement(k.Line,null);return o.a.createElement("div",{className:"track-putt"},o.a.createElement("div",{className:"canvas-container",onClick:e.captureClick},o.a.createElement(k.Stage,{width:e.canvasWidth,height:e.canvasHeight},o.a.createElement(k.Layer,null,t))))}),y=(a(45),function(e){return o.a.createElement("div",{className:"log-putt"},o.a.createElement(E,{holeNum:e.holeNum,handleHitBtn:e.handleHitBtn,handleMissBtn:e.handleMissBtn}),o.a.createElement(N,{mode:e.mode,x:e.x,y:e.y,captureDrag:e.captureCanvasDrag,captureClick:e.captureCanvasClick,canvasWidth:e.canvasWidth,canvasHeight:e.canvasHeight}),o.a.createElement("div",{className:"master-controls"},o.a.createElement(f,{className:"reset-all-btn",onClick:e.onClickReset,content:"Reset All"}),o.a.createElement(f,{className:"next-btn",onClick:e.onClickNext,content:"Next"})))}),O=(a(47),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.puttLog.length>0?this.props.puttLog.map(function(e){return o.a.createElement("p",{key:e.holeNum},"Hole #",e.holeNum,": ",e.mode," ")}):o.a.createElement("p",null,"No Data Available. Log your putts ",o.a.createElement(g.a,{to:"/disc-golf-putting-logbook/log"},"here"),", then check your overview.");return o.a.createElement("div",{className:"putting-overview"},o.a.createElement("h1",{className:"title"},"Overview"),o.a.createElement("h2",{className:"description"},"More features and stats coming soon!"),e)}}]),t}(n.Component)),j=(a(49),function(){return o.a.createElement("div",{className:"no-match"},o.a.createElement("h1",{className:"title"},"404 Error: Page Not Found"))}),w=(a(51),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={puttLog:[],puttCanvasShapes:[],holeNum:1,mode:"",locale:"",canvasWidth:300,canvasHeight:300,shapeXCoordinate:150,shapeYCoordinate:150},a.handleHitBtn=a.handleHitBtn.bind(Object(d.a)(Object(d.a)(a))),a.handleMissBtn=a.handleMissBtn.bind(Object(d.a)(Object(d.a)(a))),a.captureCanvasClick=a.captureCanvasClick.bind(Object(d.a)(Object(d.a)(a))),a.captureCanvasDrag=a.captureCanvasDrag.bind(Object(d.a)(Object(d.a)(a))),a.captureNextClick=a.captureNextClick.bind(Object(d.a)(Object(d.a)(a))),a.captureResetClick=a.captureResetClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleHitBtn",value:function(){this.setState({mode:"hit"})}},{key:"handleMissBtn",value:function(){this.setState({mode:"miss"})}},{key:"captureCanvasClick",value:function(e){var t=document.getElementsByClassName("konvajs-content")[0].offsetLeft,a=document.getElementsByClassName("konvajs-content")[0].offsetTop;this.setState({shapeXCoordinate:e.clientX-t,shapeYCoordinate:e.pageY-a})}},{key:"captureCanvasDrag",value:function(e){this.setState({shapeXCoordinate:e.target.x(),shapeYCoordinate:e.target.y()})}},{key:"captureNextClick",value:function(){var e="hit"===this.state.mode?o.a.createElement(k.Circle,{key:this.state.holeNum,x:this.state.shapeXCoordinate,y:this.state.shapeYCoordinate,radius:20,fill:"green",stroke:"black"}):o.a.createElement(k.Star,{key:this.state.holeNum,x:this.state.shapeXCoordinate,y:this.state.shapeYCoordinate,numPoints:7,innerRadius:10,outerRadius:20,fill:"red",stroke:"black"});this.setState({puttLog:Object(c.a)(this.state.puttLog).concat([{holeNum:this.state.holeNum,mode:this.state.mode,shapeXCoordinate:this.state.shapeXCoordinate,shapeYCoordinate:this.state.shapeYCoordinate}]),puttCanvasShapes:Object(c.a)(this.state.puttCanvasShapes).concat([e]),holeNum:this.state.holeNum+1,mode:"",shapeXCoordinate:150,shapeYCoordinate:150})}},{key:"captureOverviewClick",value:function(){var e=this.state.puttLog.map(function(e){return"hit"===e.mode?o.a.createElement(k.Circle,{key:e.holeNum,x:e.shapeXCoordinate,y:e.shapeYCoordinate,radius:20,fill:"green",stroke:"black"}):o.a.createElement(k.Star,{key:e.holeNum,x:e.shapeXCoordinate,y:e.shapeYCoordinate,numPoints:7,innerRadius:10,outerRadius:20,fill:"red",stroke:"black"})});this.setState({puttCanvasShapes:e})}},{key:"captureResetClick",value:function(){this.setState({puttLog:[],puttCanvasShapes:[],holeNum:1,mode:"",shapeXCoordinate:150,shapeYCoordinate:150})}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"putting-log-app"},o.a.createElement("header",{className:"header-container"},o.a.createElement(g.a,{to:"/disc-golf-putting-logbook/",className:"header-title"},"Putting Logbook"),o.a.createElement("nav",{className:"header-nav"},o.a.createElement(g.a,{to:"/disc-golf-putting-logbook/log",className:"header-log"},"Log"),o.a.createElement(g.a,{to:"/disc-golf-putting-logbook/overview",className:"header-overview"},"Overview"))),o.a.createElement(v.a,null,o.a.createElement(C.a,{exact:!0,path:"/disc-golf-putting-logbook/",component:b}),o.a.createElement(C.a,{path:"/disc-golf-putting-logbook/log",render:function(t){return o.a.createElement(y,Object.assign({},t,{holeNum:e.state.holeNum,handleHitBtn:e.handleHitBtn,handleMissBtn:e.handleMissBtn,mode:e.state.mode,x:e.state.shapeXCoordinate,y:e.state.shapeYCoordinate,captureCanvasDrag:e.captureCanvasDrag,captureCanvasClick:e.captureCanvasClick,canvasWidth:e.state.canvasWidth,canvasHeight:e.state.canvasHeight,onClickNext:e.captureNextClick,onClickReset:e.captureResetClick}))}}),o.a.createElement(C.a,{path:"/disc-golf-putting-logbook/overview",render:function(t){return o.a.createElement(O,Object.assign({},t,{puttLog:e.state.puttLog}))}}),o.a.createElement(C.a,{component:j}))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.3e489611.chunk.js.map