(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),i=n(9),s=n(7),u=(n(27),n(17)),l=(n(28),n(1)),h=n(2),d=n(4),b=n(3),p=n(5),m=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"roobots",src:"https://robohash.org/".concat(a,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},E=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=function(e){var t=e.searchChanged;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search roobots",onChange:t}))},O=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"It is not good to see."):this.props.children}}]),t}(a.Component),v=(n(30),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).updateCount=function(){e.setState(function(e){return{count:e.count+1}})},e.state={count:0},e}return Object(p.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state.count!==t.count}},{key:"render",value:function(){return r.a.createElement("button",{color:this.props.color,onClick:this.updateCount},"Count:",this.state.count)}}]),t}(a.PureComponent)),j=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{color:"yellow"}),r.a.createElement("h1",{className:"f1"},"RoobotFriens"))}}]),t}(a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChanged,a=e.robots,o=e.isPanding,c=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"tc"},r.a.createElement(j,null),r.a.createElement(f,{searchChanged:n}),r.a.createElement(O,null,r.a.createElement(g,null,r.a.createElement(E,{robots:c}))))}},{key:"componentDidMount",value:function(){this.props.onRequestRobots()}}]),t}(a.Component),C=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPanding:e.requestRobots.isPanding,error:e.requestRobots.error}},function(e){return{onSearchChanged:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCES",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R={searchField:""},S={isPending:!1,robots:[],error:""},w=(n(32),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPanding:!0});case"REQUEST_ROBOTS_SUCCES":return Object.assign({},e,{robots:t.payload,isPanding:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPanding:!1});default:return e}}})),k=Object(s.d)(w,Object(s.a)(u.a));c.a.render(r.a.createElement(i.a,{store:k},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.cb327868.chunk.js.map