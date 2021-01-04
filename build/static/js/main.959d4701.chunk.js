(this.webpackJsonpfloodit=this.webpackJsonpfloodit||[]).push([[0],{136:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),a=r(17),i=r.n(a),u=r(7),o=r(19),s=r(70),l=r(71),d={gameGrid:[],playerNumber:1,playerTurn:1,colorNumber:5,w:25,h:25},j=function(e){return{type:"SET_GAMESTATE",data:e}},b=function(e){return{type:"SET_GAME_VISIBLE",data:e}},h=function(e){return{type:"SET_GAME_OVER",data:e}},f=function(e){return{type:"SET_CURRENT_ROOM",data:e}},m=function(e){return{type:"SET_ROOMID",data:e}},O=function(e){return{type:"SET_SHOW_ROOMS",data:e}},p={gameStateReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAMESTATE":return t.data;default:return e}},gameVisibleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_VISIBLE":return t.data;default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return t.data;default:return e}},currentRoomReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_ROOM":return t.data;default:return e}},roomIdReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ROOMID":return t.data;default:return e}},showRoomsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SHOW_ROOMS":return t.data;default:return e}},gameOverReducer:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GAME_OVER":return t.data;default:return e}}},g=Object(o.combineReducers)({gameState:p.gameStateReducer,currentRoom:p.currentRoomReducer,gameVisible:p.gameVisibleReducer,user:p.userReducer,roomId:p.roomIdReducer,showRooms:p.showRoomsReducer,gameOver:p.gameOverReducer}),v=Object(o.createStore)(g,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(s.a))),x=r(6),y=r(8),w=r.n(y),S=r(10),k=r(23),N=r(16),R=r(26),G=r.n(R),T="/api/rooms",E={getAll:function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("".concat(T));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(S.a)(w.a.mark((function e(t){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.post(T,t);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),remove:function(){var e=Object(S.a)(w.a.mark((function e(t){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.delete("".concat(T,"/").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),join:function(){var e=Object(S.a)(w.a.mark((function e(t,r){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.put("".concat(T,"/").concat(t),r);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},_=r(33),C=r.n(_),I=r(138),M=r(77),H=function(e){var t=Object(c.useState)([]),r=Object(N.a)(t,2),a=r[0],i=r[1],u=Object(c.useRef)();return Object(c.useEffect)((function(){return E.getAll().then((function(e){i(e.data.filter((function(e){return e.users.length<e.playerNumber})))})).catch((function(e){console.log("fail")})),u.current=C()(),u.current.on("new_availableroom",(function(e){i((function(t){return[].concat(Object(k.a)(t),[e]).filter((function(e){return e.users.length<e.playerNumber}))}))})),u.current.on("updated_availableroom",(function(e){i((function(t){return t.map((function(t){return t.id===e.id?e:t})).filter((function(e){return e.users.length<e.playerNumber}))}))})),u.current.on("remove_availableroom",(function(e){i((function(t){return t.filter((function(t){return t.id!==e}))}))})),function(){return u.current.disconnect()}}),[]),Object(n.jsxs)(I.a,{striped:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Host"}),Object(n.jsx)("th",{children:"W"}),Object(n.jsx)("th",{children:"H"}),Object(n.jsx)("th",{children:"colors"}),Object(n.jsx)("th",{})]})}),Object(n.jsx)("tbody",{children:a.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.host}),Object(n.jsx)("td",{children:t.w}),Object(n.jsx)("td",{children:t.h}),Object(n.jsx)("td",{children:t.colorNumber}),Object(n.jsx)("td",{children:Object(n.jsx)(M.a,{variant:"primary",onClick:function(){return e.handleJoinRoom(Object(x.a)(Object(x.a)({},t),{},{users:t.users.concat(e.nickName)}))},children:"Join"})})]},t.id)}))})]})},A=r(146),L=r(139),B=r(140),V=r(141),U=function(e){var t=Object(u.b)(),r=Object(u.c)((function(e){return e.gameState})),a=Object(c.useState)({w:25,h:25,cn:5,pn:1}),i=Object(N.a)(a,2),o=i[0],s=i[1];Object(c.useEffect)((function(){s({w:r.w,h:r.h,cn:r.colorNumber,pn:r.playerNumber})}),[r]);var l=function(e,t){"w"===t&&s(Object(x.a)(Object(x.a)({},o),{},{w:Number(e.target.value)})),"h"===t&&s(Object(x.a)(Object(x.a)({},o),{},{h:Number(e.target.value)})),"cn"===t&&s(Object(x.a)(Object(x.a)({},o),{},{cn:Number(e.target.value)})),"pn"===t&&s(Object(x.a)(Object(x.a)({},o),{},{pn:Number(e.target.value)}))};return Object(n.jsx)("div",{children:Object(n.jsxs)(A.a,{children:[Object(n.jsxs)(A.a.Group,{children:[Object(n.jsx)("h5",{className:"text-center",children:Object(n.jsx)(L.a,{variant:"secondary",children:"WODTH"})}),Object(n.jsxs)(B.a,{className:"d-flex",toggle:!0,children:[Object(n.jsx)(M.a,{variant:"secondary",onClick:function(){return s(Object(x.a)(Object(x.a)({},o),{},{w:Math.max(o.w-5,0)}))},children:"-"}),Object(n.jsx)(M.a,{variant:"secondary",disabled:!0,children:o.w}),Object(n.jsx)(M.a,{variant:"secondary",onClick:function(){return s(Object(x.a)(Object(x.a)({},o),{},{w:Math.min(o.w+5,100)}))},children:"+"})]})]}),Object(n.jsxs)(A.a.Group,{children:[Object(n.jsx)("h5",{className:"text-center",children:Object(n.jsx)(L.a,{variant:"secondary",children:"HEIGHT"})}),Object(n.jsxs)(B.a,{className:"d-flex",toggle:!0,children:[Object(n.jsx)(M.a,{variant:"secondary",onClick:function(){return s(Object(x.a)(Object(x.a)({},o),{},{h:Math.max(o.h-5,0)}))},children:"-"}),Object(n.jsx)(M.a,{variant:"secondary",disabled:!0,children:o.h}),Object(n.jsx)(M.a,{variant:"secondary",onClick:function(){return s(Object(x.a)(Object(x.a)({},o),{},{h:Math.min(o.h+5,100)}))},children:"+"})]})]}),Object(n.jsxs)(A.a.Group,{children:[Object(n.jsx)("h5",{className:"text-center",children:Object(n.jsx)(L.a,{variant:"secondary",children:"COLORS"})}),Object(n.jsx)(B.a,{className:"d-flex",toggle:!0,children:[3,4,5,6].map((function(e){return Object(n.jsx)(V.a,{type:"radio",variant:"secondary",value:e,checked:o.cn===e,onChange:function(e){return l(e,"cn")},children:e},e)}))})]}),Object(n.jsxs)(A.a.Group,{children:[Object(n.jsx)("h5",{className:"text-center",children:Object(n.jsx)(L.a,{variant:"secondary",children:"PLAYERS"})}),Object(n.jsxs)(B.a,{className:"d-flex",toggle:!0,children:[Object(n.jsx)(V.a,{type:"radio",variant:"secondary",value:1,checked:1===o.pn,onChange:function(e){return l(e,"pn")},children:"1"}),Object(n.jsx)(V.a,{type:"radio",variant:"secondary",value:2,checked:2===o.pn,onChange:function(e){return l(e,"pn")},children:"2"})]})]}),Object(n.jsx)(A.a.Group,{children:r.w!==o.w||r.h!==o.h||r.playerNumber!==o.pn||r.colorNumber!==o.cn?Object(n.jsx)(M.a,{variant:"outline-primary",block:!0,onClick:function(){return function(){var e=Object(x.a)(Object(x.a)({},r),{},{w:o.w,h:o.h,colorNumber:o.cn,playerNumber:o.pn});t(j(e))}()},children:"Save Settings"}):""})]})})},D=function(e){var t=Object(u.c)((function(e){return e.gameState})),r=Object(c.useRef)(null),a=14,i=function(e){switch(e){case 1:return"#ff3300";case 2:return"#0000ff";case 3:return"#00ff00";case 4:return"#ffff00";case 5:return"#cc00cc";case 6:return"turquoise";default:return"black"}},o=function(e,t,r){return-1!==t&&(-1!==r&&(t!==e[0].length&&r!==e.length))};Object(c.useEffect)((function(){!function(e){e.clearRect(0,0,t.gameGrid[0].length*a,t.gameGrid.length*a);for(var r=0;r<t.gameGrid[0].length;r++)for(var n=0;n<t.gameGrid.length;n++)e.fillStyle=i(t.gameGrid[n][r][0]),e.fillRect(r*a,n*a,a,a),o(t.gameGrid,r+1,n)&&t.gameGrid[n][r][0]!==t.gameGrid[n][r+1][0]&&(e.beginPath(),e.strokeStyle="black",e.moveTo(r*a+a,n*a),e.lineTo(r*a+a,n*a+a),e.stroke(),e.closePath()),o(t.gameGrid,r,n+1)&&t.gameGrid[n][r][0]!==t.gameGrid[n+1][r][0]&&(e.beginPath(),e.strokeStyle="black",e.moveTo(r*a,n*a+a),e.lineTo(r*a+a,n*a+a),e.stroke(),e.closePath())}(r.current.getContext("2d"))}),[t]);return Object(n.jsx)("canvas",{ref:r,width:t.gameGrid[0].length*a,height:t.gameGrid.length*a,style:{outline:"black 1px solid",display:"block",marginLeft:"auto",marginRight:"auto"},children:" "})},F=function(e){var t=Object(u.c)((function(e){return e.gameState})),r=t.gameGrid?function(e,t,r){if(0===e.length)return[];for(var n=[],c=0;c<t;c++)n.push(c+1);return 1===r?n.filter((function(t){return t!==e[0][0][0]})):n.filter((function(t){return t!==e[0][0][0]&&t!==e[e.length-1][e[0].length-1][0]}))}(t.gameGrid,t.colorNumber,t.playerNumber):[],c=function(e){switch(e){case 1:return"#ff3300";case 2:return"#0000ff";case 3:return"#00ff00";case 4:return"#ffff00";case 5:return"#cc00cc";case 6:return"turquoise";default:return"black"}},a={height:"50px",width:"50px",borderRadius:"8px"};return Object(n.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:r.map((function(t){return Object(n.jsx)("button",{style:Object(x.a)({marginBottom:"6px",backgroundColor:e.clickable?c(t):"grey",border:"2px solid ".concat(e.clickable?c(t):"grey")},a),disabled:!e.clickable,onClick:function(){return e.playTurnButtonHandler(t)}},t)}))})},J=function(e){var t=Object(u.c)((function(e){return e.gameState})),r=Object(u.c)((function(e){return e.currentRoom})),c=function(e){switch(e){case 1:return"red";case 2:return"indigo";case 3:return"green";case 4:return"yellow";case 5:return"purple";case 6:return"aqua";default:return"gray"}},a=[t.gameGrid[0][0][0],t.gameGrid[t.gameGrid[0].length-1][t.gameGrid.length-1][0]],i=[c(a[0]),c(a[1])];return Object(n.jsx)("div",{children:function(){for(var e=[],r=0;r<t.playerNumber;r++){e.push([0,r]);for(var n=0;n<t.gameGrid[0].length;n++)for(var c=0;c<t.gameGrid.length;c++)t.gameGrid[c][n][1]===r+1&&(e[r]=[e[r][0]+1,e[r][1]])}var a=t.gameGrid[0].length*t.gameGrid.length;return e.map((function(e){return[e[0]/a,e[1]]}))}().map((function(e){return Object(n.jsx)("div",{className:"w3-light-grey w3-round",style:{marginTop:"4px",marginBottom:"4px"},children:Object(n.jsx)("div",{className:"w3-container w3-round w3-".concat(i[e[1]]),style:{width:"".concat(String(100*e[0]*t.playerNumber),"%")},children:r.users[e[1]]},e[1])},e[1])}))})},P=r(142),W=r(72),q=function(e){var t=Object(u.b)(),r=Object(u.c)((function(e){return e.gameState})),c=Object(u.c)((function(e){return e.gameVisible})),a=Object(u.c)((function(e){return e.currentRoom})),i=Object(u.c)((function(e){return e.gameOver})),o=a.users[r.playerTurn-1],s=r.playerTurn&&1===r.playerTurn?[0,0]:[r.gameGrid[0].length-1,r.gameGrid.length-1],l=function(e,t){for(var n=[],c=[1,0],a=0;a<t;a++){n.push([]);for(var i=0;i<e;i++){var u=[1,0];c=u=Math.random()<.09&&0!==i?c:Math.random()<.09&&0!==a?[n[a-1][i][0],0]:[Math.floor(Math.random()*r.colorNumber)+1,0],n[a].push(u)}}return n},d=function(e){var t=e.map((function(e){return e.map((function(e){return e[1]}))})).flat(),n=r.gameGrid[0].length*r.gameGrid.length;if(0===t.filter((function(e){return 0===e})).length){if(2===r.playerNumber){for(var c=function(e){if(t.filter((function(t){return t===e+1})).length/n>.5)return{v:a.users[e]}},i=0;i<r.playerNumber;i++){var u=c(i);if("object"===typeof u)return u.v}return"tie"}return"won"}return""},b=[],h=function e(t,n,c){return!0===b[n][t][2]?void 0:2===r.playerNumber&&0!==b[n][t][1]&&b[n][t][1]!==r.playerTurn?void(b[n][t][2]=!0):b[n][t][1]===r.playerTurn?(b[n][t][2]=!0,0!==t&&e(t-1,n,c),0!==n&&e(t,n-1,c),t!==b[0].length-1&&e(t+1,n,c),void(n!==b.length-1&&e(t,n+1,c))):b[n][t][0]===c?(b[n][t][2]=!0,b[n][t][1]=r.playerTurn,0!==t&&e(t-1,n,c),0!==n&&e(t,n-1,c),t!==b[0].length-1&&e(t+1,n,c),void(n!==b.length-1&&e(t,n+1,c))):void(b[n][t][2]=!0)},f=function(n){var c=r.gameGrid.map((function(e){return e.map((function(e){return e[1]===r.playerTurn?[n,r.playerTurn]:e}))}));b=c.map((function(e){return e.map((function(e){return[].concat(Object(k.a)(e),[!1])}))})),h(s[0],s[1],n);var a=b.map((function(e){return e.map((function(e){return[e[0],e[1]]}))})),i=Object(x.a)(Object(x.a)({},r),{},{gameGrid:a,playerTurn:1===r.playerNumber?1:1===r.playerTurn?2:1});switch(t(j(i)),e.handleUpdate(i),d(a)){case"":break;case"tie":e.gameOver("Draw!");break;case"won":e.gameOver("You won!");break;default:e.gameOver(d(a)+"won")}};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(P.a,{children:Object(n.jsx)(W.a,{md:{span:4,offset:4},children:i&&e.isHost?Object(n.jsx)(M.a,{variant:"outline-danger",block:!0,onClick:function(){!function(n,c){var a,i=[];do{(i=l(n,c).slice(0))[0][0]=[i[0][0][0],1],2===r.playerNumber&&(i[c-1][n-1]=[i[c-1][n-1][0],2])}while((a=i)[0][0][0]===a[1][0][0]||a[0][0][0]===a[0][1][0]||2===r.playerNumber&&(a[a.length-1][a[0].length-1][0]===a[a.length-2][a[0].length-1][0]||a[a.length-1][a[0].length-1][0]===a[a.length-1][a[0].length-2][0])||2===r.playerNumber&&a[a.length-1][a[0].length-1][0]===a[0][0][0]);var u=Object(x.a)(Object(x.a)({},r),{},{gameGrid:i.slice(0),playerTurn:1});t(j(u)),e.handleStart(u)}(r.w,r.h)},children:"Start game!"}):""})}),c?Object(n.jsxs)("div",{children:[Object(n.jsx)(P.a,{children:Object(n.jsx)(W.a,{md:{span:4,offset:4},children:i?"":Object(n.jsx)(F,{playTurnButtonHandler:function(e){f(e)},clickable:o===e.me})})}),Object(n.jsx)(P.a,{children:Object(n.jsx)(W.a,{children:Object(n.jsx)(D,{})})}),Object(n.jsx)(P.a,{children:Object(n.jsx)(W.a,{md:{span:4,offset:4},children:Object(n.jsx)(J,{})})})]}):""]})},z=r(145),Y=r(143),K=function(e){var t=Object(c.useState)(""),r=Object(N.a)(t,2),a=r[0],i=r[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h4",{className:"text-center",children:Object(n.jsx)(L.a,{variant:"primary",children:"CHAT"})}),e.chatLog.map((function(t){return Object(n.jsxs)(z.a,{children:[Object(n.jsx)(z.a.Header,{closeButton:!1,children:Object(n.jsx)("strong",{className:t.sender===e.me?"ml-auto":"mr-auto",children:t.sender})}),Object(n.jsx)(z.a.Body,{children:Object(n.jsx)("div",{className:t.sender===e.me?"text-right":"text-left",children:t.message})})]},t.id)})),Object(n.jsxs)(Y.a,{className:"mb-3",children:[Object(n.jsx)(A.a.Control,{"aria-describedby":"basic-addon1",placeholder:"say something",value:a,onChange:function(e){i(e.target.value)}}),Object(n.jsx)(Y.a.Append,{children:Object(n.jsx)(M.a,{variant:"outline-secondary",onClick:function(){e.handleSendChat(a),i("")},children:"Send"})})]})]})},Q=function(e){var t=Object(u.b)(),r=Object(u.c)((function(e){return e.currentRoom})),a=Object(u.c)((function(e){return e.roomId})),i=Object(u.c)((function(e){return e.showRooms})),o=Object(u.c)((function(e){return e.gameState})),s=Object(c.useState)(""),l=Object(N.a)(s,2),d=l[0],p=l[1],g=Object(c.useState)([]),v=Object(N.a)(g,2),y=v[0],R=v[1],G=Object(c.useRef)();Object(c.useEffect)((function(){return G.current=C()(),a&&V()&&G.current.emit("create",a),a&&!V()&&G.current.emit("join",{roomId:a,roomObject:r}),a&&!V()&&G.current.on("leave_host",(function(e){t(f(null)),t(m(null)),t(h(!0)),t(b(!1)),t(O(!1)),alert("host left")})),a&&V()&&G.current.on("leave_room",(function(e){t(h(!0)),t(b(!1)),t(f(e)),alert("player left")})),a&&G.current.on("update_game",(function(e){t(j(e))})),a&&G.current.on("game_over",(function(e){t(h(!0)),alert(e)})),a&&G.current.on("send_message",(function(e){R((function(t){return[].concat(Object(k.a)(t),[e])}))})),a&&G.current.on("start_game",(function(e){t(j(e)),t(b(!0)),t(h(!1))})),a&&G.current.on("update_room",(function(e){t(f(e))})),a&&window.addEventListener("beforeunload",(function(){return T()})),function(){a&&window.removeEventListener("beforeunload",(function(){return T(a)})),G.current.disconnect()}}),[a]);var T=function(e){V()&&I(),!V()&&L()},_=function(){var e=Object(S.a)(w.a.mark((function e(){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.create({nickName:d,w:o.w,h:o.h,colorNumber:o.colorNumber,playerNumber:o.playerNumber});case 2:r=e.sent,t(f(r)),t(m(r.id)),G.current.emit("new_availableroom",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(S.a)(w.a.mark((function e(){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.remove(r.id);case 2:n=e.sent,t(f(null)),t(m(null)),t(h(!0)),t(b(!1)),G.current.emit("leave_host",{roomId:n.id});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(S.a)(w.a.mark((function e(){var n,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(x.a)(Object(x.a)({},r),{},{users:r.users.filter((function(e){return e!==d}))}),e.next=3,E.join(r.id,n);case 3:c=e.sent,G.current.emit("leave_room",{roomId:c.id,roomObject:c}),G.current.emit("new_availableroom",c),t(f(null)),t(m(null)),t(h(!0)),t(b(!1));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(S.a)(w.a.mark((function e(r){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.join(r.id,r);case 2:n=e.sent,t(f(n)),t(m(n.id));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){return!(!r||r.host!==d)},D=function(){t(O(!i))};return Object(n.jsx)(n.Fragment,{children:r?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:r.users.length===r.playerNumber?Object(n.jsx)("div",{children:Object(n.jsx)(q,{me:d,handleUpdate:function(e){G.current.emit("update_game",{roomId:a,gameState:e})},handleStart:function(e){G.current.emit("start_game",{roomId:a,gameState:e})},isHost:V(),gameOver:function(e){G.current.emit("game_over",{roomId:a,text:e})}})}):""}),Object(n.jsx)(P.a,{children:Object(n.jsxs)(W.a,{md:{span:4,offset:4},children:[Object(n.jsx)(K,{handleSendChat:function(e){var t={sender:d,message:e,id:y.length+1};G.current.emit("send_message",{roomId:a,chatObject:t})},me:d,chatLog:y}),V()?Object(n.jsxs)("div",{children:[Object(n.jsx)(M.a,{size:"sm",variant:"outline-primary",block:!0,onClick:function(){return I()},children:"Leave room"}),Object(n.jsx)("br",{})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(M.a,{size:"sm",variant:"outline-primary",block:!0,onClick:function(){return L()},children:"Leave"}),Object(n.jsx)("br",{})]})]})})]}):Object(n.jsx)(P.a,{children:Object(n.jsx)(W.a,{md:{span:4,offset:4},children:i?Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(H,{handleJoinRoom:B,nickName:d}),Object(n.jsx)(M.a,{variant:"outline-primary",block:!0,onClick:D,children:"Hide rooms"})]})}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(A.a,{children:[Object(n.jsx)(A.a.Group,{children:Object(n.jsx)(A.a.Control,{value:d,placeholder:"set username",onChange:function(e){return p(e.target.value.length>10?d:e.target.value)}})}),Object(n.jsx)(A.a.Group,{children:""!==d?Object(n.jsx)(M.a,{variant:"outline-primary",block:!0,onClick:_,children:"Create room"}):""}),Object(n.jsx)(A.a.Group,{children:""!==d?Object(n.jsx)(M.a,{variant:"outline-primary",block:!0,onClick:D,children:"Show rooms"}):""})]}),Object(n.jsx)(U,{})]})})})})},X=r(144),Z=function(){var e=Object(u.b)();return Object(c.useEffect)((function(){var t=window.localStorage.getItem("loggedFloodItUser");if(t){var r=JSON.parse(t);e({type:"SET_USER",data:r})}}),[e]),Object(n.jsxs)(X.a,{fluid:!0,children:[Object(n.jsx)(P.a,{children:Object(n.jsx)(W.a,{md:{span:4,offset:4},children:Object(n.jsx)("h1",{className:"text-center",children:Object(n.jsx)(L.a,{variant:"primary",children:"FLOOD IT"})})})}),Object(n.jsx)(Q,{})]})};i.a.render(Object(n.jsx)(u.a,{store:v,children:Object(n.jsx)(Z,{})}),document.getElementById("root"))}},[[136,1,2]]]);
//# sourceMappingURL=main.959d4701.chunk.js.map