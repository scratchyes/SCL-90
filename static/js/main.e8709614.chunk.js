(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),s=t(2),n=t.n(s),i=(t(14),t(3)),o=t(4),l=t(6),m=t(5),d=t(7);var u=function(e){return r.a.createElement("div",{className:"title_card",onClick:function(){e.check_answer(e.id)}},r.a.createElement("img",{className:"pic-card",src:e.src,alt:""}))};var g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card bg-dark text-white"},r.a.createElement("img",{className:"head card-img",src:"https://ak1.picdn.net/shutterstock/videos/1016011171/thumb/1.jpg",alt:""}),r.a.createElement("div",{className:"card-img-overlay centered box"},r.a.createElement("h1",{className:"text_head",style:{paddingTop:"50px"}},"The Clicky Game!"),r.a.createElement("h5",{className:"text_head"},"Directions: Click any unique image. Choosing a previous image will result in a Game Over."))))};var h=function(e){return r.a.createElement("ul",{className:"nav justify-content-center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("h4",{className:"nav-link",style:{color:"white"}},"Clicky Game")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h4",{className:"nav-link",style:{color:"white"}},e.message)),r.a.createElement("li",{className:"nav-item"},r.a.createElement("h4",{className:"nav-link",style:{color:"white"}},"Current Score ",e.current," | High Score ",e.high)))},p=[{src:"../../images/angelica.png",picked:!1},{src:"../../images/arnold.jpg",picked:!1},{src:"../../images/cyborg.jpg",picked:!1},{src:"../../images/deedee.png",picked:!1},{src:"../../images/dexter.png",picked:!1},{src:"../../images/helga.jpg",picked:!1},{src:"../../images/patrick.jpg",picked:!1},{src:"../../images/robin.png",picked:!1},{src:"../../images/rocko.jpg",picked:!1},{src:"../../images/spongebob.jpg",picked:!1},{src:"../../images/spunky.jpg",picked:!1},{src:"../../images/tommy.jpg",picked:!1}],k=function(e){function a(){var e,t;Object(i.a)(this,a);for(var c=arguments.length,r=new p(c),s=0;s<c;s++)r[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={current_score:0,high_score:0,stored_cards:p,message:"Welcome, please click an image to start!"},t.check_answer=function(e){console.log(e);var a=t.state.stored_cards;if(!1===a[e].picked){a[e].picked=!0;var c=t.state.current_score+1;c>=t.state.high_score?t.setState({stored_cards:t.shuffle(a),current_score:c,high_score:c,message:"You Guessed Correctly"}):t.setState({stored_cards:t.shuffle(a),current_score:c,message:"You Guessed Correctly"})}else{for(var r=0;r<a.length;r++)a[r].picked=!1;t.setState({stored_cards:t.shuffle(a),current_score:0,message:"You Guess Incorrectly, Try Again"}),console.log(t.state.stored_cards)}},t.shuffle=function(e){return e.sort(function(){return Math.random()-.5})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h,{message:this.state.message,current:this.state.current_score,high:this.state.high_score}),r.a.createElement(g,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-center"},this.state.stored_cards.map(function(a,t){return r.a.createElement(u,{id:t,src:a.src,check_answer:e.check_answer})}))))}}]),a}(r.a.Component);t(15);var v=function(){return r.a.createElement(k,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(v,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.e8709614.chunk.js.map