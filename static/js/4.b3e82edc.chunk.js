(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[4],{299:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3BbyK",dialogsItems:"Dialogs_dialogsItems__3CQH-",active:"Dialogs_active__1v3nP",message:"Dialogs_message__1zh7e"}},304:function(e,s,a){"use strict";a.r(s);var i=a(17),n=a(10),t=a(128),c=(a(0),a(90)),d=a(129),o=a(21),r=a(299),l=a.n(r),j=a(1),g=function(e){var s="/dialogs/"+e.id;return Object(j.jsx)("div",{className:l.a.dialog+" "+l.a.active,children:Object(j.jsx)(o.b,{to:s,children:e.name})})},b=function(e){return Object(j.jsx)("div",{className:l.a.message,children:e.message})},m=a(47),u=a(50),O=Object(u.a)(10),h=Object(d.a)({form:"dialogAddMessageForm"})((function(e){return Object(j.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(j.jsx)("div",{children:Object(j.jsx)(c.a,{component:m.b,validate:[u.b,O],name:"newMessageBody",placeholder:"Enter your message"})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Send"})})]})})),f=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(j.jsx)(g,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return Object(j.jsx)(b,{message:e.message,id:e.id},e.id)}));return Object(j.jsxs)("div",{className:l.a.dialogs,children:[Object(j.jsx)("div",{className:l.a.dialogsItems,children:a}),Object(j.jsxs)("div",{className:l.a.messages,children:[Object(j.jsx)("div",{children:i}),Object(j.jsx)(h,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})};s.default=Object(n.d)(Object(i.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(s){e(Object(t.c)(s))},sendMessage:function(s){e(Object(t.b)(s))}}})))(f)}}]);
//# sourceMappingURL=4.b3e82edc.chunk.js.map