(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4783"],{"0728":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),c=Object(a["i"])("strong",null,"Имя",-1),r=Object(a["i"])("strong",null,"Телефон",-1),u=Object(a["i"])("strong",null,"Сумма",-1),s=Object(a["i"])("strong",null,"Статус",-1),i=Object(a["h"])(": "),o={class:"form-control"},b=Object(a["i"])("label",{for:"status"},"Статус",-1),l=Object(a["i"])("option",{value:"done"},"Завершен",-1),p=Object(a["i"])("option",{value:"cancelled"},"Отменен",-1),O=Object(a["i"])("option",{value:"active"},"Активен",-1),j=Object(a["i"])("option",{value:"pending"},"Выполняется",-1),d={key:2,class:"text-center text-white"};function v(e,t,n,v,f,h){var m=Object(a["A"])("app-loader"),g=Object(a["A"])("app-status"),w=Object(a["A"])("app-page");return v.loading?(Object(a["u"])(),Object(a["e"])(m,{key:0})):v.request?(Object(a["u"])(),Object(a["e"])(w,{key:1,back:"",title:"Заявка"},{default:Object(a["K"])((function(){return[Object(a["i"])("p",null,[c,Object(a["h"])(": "+Object(a["D"])(v.request.fio),1)]),Object(a["i"])("p",null,[r,Object(a["h"])(": "+Object(a["D"])(v.request.phone),1)]),Object(a["i"])("p",null,[u,Object(a["h"])(": "+Object(a["D"])(v.currency(v.request.amount)),1)]),Object(a["i"])("p",null,[s,i,Object(a["i"])(g,{type:v.request.status},null,8,["type"])]),Object(a["i"])("div",o,[b,Object(a["L"])(Object(a["i"])("select",{id:"status","onUpdate:modelValue":t[1]||(t[1]=function(e){return v.status=e})},[l,p,O,j],512),[[a["G"],v.status]])]),Object(a["i"])("button",{class:"btn danger",onClick:t[2]||(t[2]=function(){return v.remove&&v.remove.apply(v,arguments)})},"Удалить"),v.hasChanges?(Object(a["u"])(),Object(a["e"])("button",{key:0,class:"btn",onClick:t[3]||(t[3]=function(){return v.update&&v.update.apply(v,arguments)})},"Изменить")):Object(a["f"])("",!0)]})),_:1})):(Object(a["u"])(),Object(a["e"])("h3",d," Заявка с id: "+Object(a["D"])(e.$route.params.id)+" не найдена ",1))}var f=n("5530"),h=n("1da1"),m=(n("96cf"),n("6c02")),g=n("5502"),w=n("1da6"),k=n("ddc6"),y=n("0aeb"),x=n("3f9b"),q={setup:function(){var e=Object(m["c"])(),t=Object(m["d"])(),n=Object(g["b"])(),c=Object(a["x"])(!0),r=Object(a["x"])({}),u=Object(a["x"])();Object(a["s"])(Object(h["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c.value=!0,t.next=3,n.dispatch("request/loadOne",e.params.id);case 3:r.value=t.sent,u.value=null===(a=r.value)||void 0===a?void 0:a.status,c.value=!1;case 6:case"end":return t.stop()}}),t)}))));var s=Object(a["c"])((function(){return r.value.status!==u.value})),i=function(){var a=Object(h["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,n.dispatch("request/remove",e.params.id);case 2:t.push("/");case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),o=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=Object(f["a"])(Object(f["a"])({},r),{},{status:u.value,id:e.params.id}),t.next=3,n.dispatch("request/update",a);case 3:r.value.status=u.value;case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{loading:c,request:r,currency:x["a"],remove:i,update:o,status:u,hasChanges:s}},components:{AppPage:w["a"],AppLoader:k["a"],AppStatus:y["a"]}};q.render=v;t["default"]=q}}]);
//# sourceMappingURL=chunk-2d0a4783.779ea9fe.js.map