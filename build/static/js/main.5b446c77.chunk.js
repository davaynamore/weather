(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{158:function(e,t,a){e.exports=a(330)},163:function(e,t,a){},187:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){},330:function(e,t,a){"use strict";a.r(t);var i=a(1),r=a.n(i),u=a(11),n=a.n(u),s=(a(163),a(338)),o=a(333),m=a(339),c=a(28),l=a(29),p=a(42),d=a(41),f=a(43),h=function(e,t){return function(a){return r.a.createElement(e,Object.assign({},a,{data:t}))}},v=a(107),b=a.n(v),q=a(143),g=function(){function e(){Object(c.a)(this,e),this.forecastData={request:"Amount of rainfall by day",days:[{day:1,amount:50},{day:2,amount:10},{day:3,amount:10},{day:4,amount:150},{day:5,amount:130},{day:6,amount:45},{day:7,amount:10}]}}return Object(l.a)(e,[{key:"getForecast",value:function(){var e=Object(q.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.forecastData.days;case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),E=a(332),y=function(e){return function(t){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return(t=Object(p.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={data:null},t.forecastService=new g,t.getForecastData=function(){t.forecastService.getForecast().then(function(e){t.setState({data:e})}).catch(function(e){console.error(e)})},t}return Object(f.a)(a,t),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getForecastData()}},{key:"componentDidUpdate",value:function(e){this.props.pressure===e.pressure&&this.props.temperature===e.temperature||this.getChanceOfRain()}},{key:"getChanceOfRain",value:function(e,t,a){var i=Math.log(a+1)*Math.log(e-929)*Math.log(t- -9),r=Math.min(Math.max(i,0),100),u=Math.min(1.5*r,100);return[Math.max(.5*r,0),r,u]}},{key:"render",value:function(){var t=this,a=this.state.data,i=this.props,u=i.temperature,n=i.pressure;if(!a)return r.a.createElement(E.a,{tip:"Loading..."});var s=function(e){var a=[],i=[],r=[];return e.map(function(e,a){var i=++a;return t.getChanceOfRain(+n,+u,e.amount).map(function(e){return{x:i,y:e}})}).forEach(function(e){e.forEach(function(e,t){0===t&&a.push(e),1===t&&i.push(e),2===t&&r.push(e)})}),[a,i,r]}(a);return r.a.createElement(e,Object.assign({},this.props,{data:s}))}}]),a}(i.Component)},x=a(334),O=a(335),j=(a(187),function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={average:(a.props.data.min+a.props.data.max)/2},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.getValue(this.state.average)}},{key:"render",value:function(){var e=this.props.data,t=e.min,a=e.max,i=e.title,u=e.measure,n=r.a.createElement("h2",null,"".concat(i," [").concat(u,"]"));return r.a.createElement(x.a,{className:"slider_card"},n,r.a.createElement(O.a,{onChange:this.props.getValue,defaultValue:this.state.average,min:t,max:a,tooltipVisible:!0}))}}]),t}(i.Component)),w=h(j,{min:970,max:1030,title:"Pressure",measure:"hPa"}),k=h(j,{min:10,max:35,title:"Temperature",measure:"\u2103"}),C=a(151),N=(a(319),y(function(e){var t=e.data,a=r.a.createElement("h2",null,"Chance of Rain");return r.a.createElement(x.a,{className:"forecast-chart"},a,r.a.createElement(C.AreaChart,{axes:!0,margin:{top:50,right:10,bottom:50,left:50},interpolate:"cardinal",width:1100,height:400,yDomainRange:[0,100],data:t}))})),M=a(62),D=a(26),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={pressure:null,temperature:null},a.getPressure=function(e){a.setState({pressure:e})},a.getTemperature=function(e){a.setState({temperature:e})},a}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.pressure,a=e.temperature;return r.a.createElement("div",{className:"container"},r.a.createElement(M.a,{type:"flex",justify:"space-between",className:"sliders-row"},r.a.createElement(D.a,{span:10},r.a.createElement(w,{getValue:this.getPressure})),r.a.createElement(D.a,{span:10},r.a.createElement(k,{getValue:this.getTemperature}))),r.a.createElement(M.a,{type:"flex",justify:"center",className:"forecast-row"},r.a.createElement(D.a,null,r.a.createElement(N,{pressure:t,temperature:a}))))}}]),t}(i.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(M.a,{type:"flex",justify:"space-between",className:"sliders-row"},r.a.createElement(D.a,null,r.a.createElement(x.a,null,r.a.createElement("h1",null,"Forecast Single Page Application"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam qui at id voluptates deleniti delectus optio asperiores a eos."),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, aliquam velit eos beatae possimus perferendis amet deleniti quisquam labore ipsam a optio delectus! Sequi, magni veniam quibusdam quidem dicta error possimus unde fugit praesentium facilis! Tempora nihil iusto voluptatibus harum autem iure labore vel illo, commodi repudiandae hic at! Odio laudantium ullam temporibus voluptatibus. Voluptates magni sit itaque vero error a in cumque inventore deleniti, quibusdam nihil perspiciatis id accusantium accusamus harum incidunt amet enim velit eos et labore ratione corporis. Enim, libero ullam nostrum debitis vel aliquid perspiciatis, suscipit provident quibusdam nemo quasi minima. Quis adipisci sit optio earum?"),r.a.createElement("p",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus laborum est culpa officia nihil corporis harum, eos ex ducimus assumenda. Quae ipsa optio fugiat expedita totam. Quod nisi alias sint, nihil, repellat a eum distinctio voluptatum non, dicta provident saepe obcaecati asperiores? Id reprehenderit quaerat voluptate fuga tenetur quisquam odit vero maiores culpa sit quae fugit similique cum, fugiat placeat iure unde quod omnis delectus vel iusto tempora velit aut. Magni sunt voluptas delectus, beatae nesciunt minima laborum tenetur reprehenderit repellat illo hic mollitia provident quisquam facilis officiis, laboriosam labore dolorem? Dolorum necessitatibus placeat at modi repellat voluptate quasi tenetur est perferendis exercitationem consequuntur sequi excepturi magnam cumque minus, sunt itaque sapiente cupiditate neque amet? Incidunt, delectus veritatis vitae consequatur quam expedita laborum id officiis ducimus consequuntur quae iste exercitationem at molestiae iure repellendus? Dicta cum unde esse molestias quasi deserunt voluptas architecto odio numquam illum? Perferendis, reiciendis facilis voluptatibus beatae iure nobis maiores at pariatur tempore, exercitationem ipsa obcaecati est cupiditate ducimus. Magni laboriosam nemo perferendis doloremque vel. Iste iusto perferendis quam itaque eaque commodi similique corrupti, est error laboriosam dolor reprehenderit inventore asperiores autem voluptatum neque omnis, maxime magnam accusamus debitis ut, ducimus facilis delectus ipsa? Voluptatem harum dolor voluptates. Repellendus, dignissimos magnam. Nobis dolor maxime, voluptates aperiam sed blanditiis error ipsam esse! Ab consectetur, porro quo dolorum et repellendus dolor dicta dolorem accusantium unde aliquid sapiente quaerat optio corporis accusamus qui eum quia sed nostrum? Officiis dolores ut, ipsum, at magnam molestiae iure a modi asperiores alias facere ratione maxime quas itaque repudiandae harum ex enim odit fuga. Rem labore qui, quibusdam ullam aliquam possimus voluptatibus voluptatem quaerat quo, veritatis accusamus? Perspiciatis nulla ipsum quam sequi recusandae eligendi vitae fugiat repellat labore et fuga reiciendis sapiente dolorem officiis doloribus suscipit facere reprehenderit necessitatibus cumque maxime, porro voluptate, sint odio. Sed doloribus culpa veritatis beatae dolorem odit eius unde nostrum molestias rerum? Est alias voluptatibus ullam veritatis, ipsum rem beatae eum et vitae modi, facere odio minus ab eaque! Dolorem minima modi itaque ipsum, sapiente cum dolore adipisci rerum eum sed velit officiis beatae, unde laborum deleniti voluptas molestiae nostrum tempora aspernatur quo dicta totam impedit quae! Cumque minus quaerat ducimus corporis inventore necessitatibus doloremque explicabo reprehenderit iusto beatae unde voluptas, provident ab laborum sint voluptate distinctio, veritatis nemo possimus aspernatur? Iste soluta iusto molestiae nam enim ipsum! Eius impedit doloremque unde quae dolores, rerum, ducimus nobis fuga amet voluptatum quis illum? Eaque perspiciatis sapiente sed nemo aliquid amet saepe harum labore cupiditate ut sunt mollitia suscipit incidunt quo fugit est, non recusandae odio quidem assumenda? Magni sit, voluptatem dolores minima velit dicta. Excepturi saepe, quisquam eos beatae et fugiat est nihil aperiam nesciunt molestiae maxime illum voluptatibus minima id optio itaque sit dolor vitae repudiandae omnis qui accusamus. Assumenda accusantium laboriosam natus ullam nemo soluta atque, dolores adipisci accusamus rerum repudiandae veniam delectus? Sunt delectus veritatis non voluptatem inventore impedit ratione laboriosam enim similique? Vitae cupiditate earum molestias provident pariatur expedita vero sequi accusamus. Fuga, distinctio iure!")))))}}]),t}(i.Component),F=a(336),V=a(337),I=(a(320),F.a.Header),P=F.a.Content,R=F.a.Footer,L=function(){return r.a.createElement(s.a,null,r.a.createElement(F.a,{className:"layout"},r.a.createElement(I,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(V.a,{className:"menu",theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"]},r.a.createElement(V.a.Item,{key:"1"},r.a.createElement(o.a,{to:"/"},"Intro")),r.a.createElement(V.a.Item,{key:"2"},r.a.createElement(o.a,{to:"/forecast"},"Forecast")))),r.a.createElement(P,null,r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"app"},r.a.createElement(m.a,{path:"/",exact:!0,component:A}),r.a.createElement(m.a,{path:"/forecast",component:S})))),r.a.createElement(R,{style:{textAlign:"center"}},"ForecastApp \xa92019 Created by Sergey Chuprina")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[158,1,2]]]);
//# sourceMappingURL=main.5b446c77.chunk.js.map