(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[3],{300:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__vvslZ",mainPhoto:"ProfileInfo_mainPhoto__6f2ON",contact:"ProfileInfo_contact__2hKmd"}},301:function(t,e,s){t.exports={item:"Post_item__3J393"}},302:function(t,e,s){t.exports={item:"MyPosts_item__13rCi",posts:"MyPosts_posts__19Y5m",postsBlock:"MyPosts_postsBlock__3MJQI"}},303:function(t,e,s){"use strict";s.r(e);var n=s(3),c=s(35),i=s(36),o=s(37),r=s(38),a=s(0),u=s.n(a),j=s(17),l=s(11),b=s(10),d=s(97),p=s(39),O=s(1),h=function(t){var e=Object(a.useState)(!1),s=Object(d.a)(e,2),n=s[0],c=s[1],i=Object(a.useState)(t.status),o=Object(d.a)(i,2),r=o[0],u=o[1];Object(a.useEffect)((function(){u(t.status)}),[t.status]);return Object(O.jsxs)("div",{children:[!n&&Object(O.jsx)("div",{children:Object(O.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"---"})}),n&&Object(O.jsx)("div",{children:Object(O.jsx)("input",{value:r,onBlur:function(){c(!1),t.updateStatus(r)},onChange:function(t){u(t.target.value)},autoFocus:!0})})]})},f=s(129),m=s(47),x=s(300),v=s.n(x),g=s(49),P=s.n(g),k=Object(f.a)({form:"editProfile"})((function(t){return Object(O.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(O.jsx)("button",{children:"save"}),t.error&&Object(O.jsx)("div",{className:P.a.formSummaryError,children:t.error}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Full name:"})," ",Object(m.c)("Full name","fullName",[],m.a)]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Full name:"})," ",Object(m.c)("","lookingForAJob",[],m.a,{type:"checkbox"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Skills:"})," ",Object(m.c)("Skills","lookingForAJobDescription",[],m.b)]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"About me:"})," ",Object(m.c)("About me","aboutMe",[],m.b)]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"Contacts:"})," ",Object.keys(t.profile.contacts).map((function(t){return Object(O.jsx)("div",{className:v.a.contact,children:Object(O.jsxs)("b",{children:[t,": ",Object(m.c)(t,"contacts."+t,[],m.a)]})},t)}))]})]})})),_=s(107),S=function(t){var e=Object(n.a)({},t.profile),s=e.lookingForAJob,c=e.lookingForAJobDescription,i=e.aboutMe,o=e.fullName,r=e.contacts;e.isOwner;return Object(O.jsxs)("div",{children:[t.isOwner&&Object(O.jsx)("button",{onClick:function(){t.setEditMode(!0)},children:"edit"}),Object(O.jsxs)("div",{children:["Looking for a job ",s?"yes":"no"]}),s&&Object(O.jsxs)("div",{children:["Skills ",c]}),Object(O.jsxs)("div",{children:["About me ",i]}),Object(O.jsxs)("div",{children:["Full name ",o]}),Object(O.jsxs)("div",{children:["Contacts: ",Object.keys(r).map((function(t){return Object(O.jsx)(y,{contactTitle:t,contactValue:r[t]},t)}))]})]})},y=function(t){var e=t.contactTitle,s=t.contactValue;return Object(O.jsxs)("div",{className:v.a.contact,children:[Object(O.jsx)("b",{children:e})," ",s]})},w=function(t){var e=Object(a.useState)(!1),s=Object(d.a)(e,2),n=s[0],c=s[1];if(!t.profile)return Object(O.jsx)(p.a,{});return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:v.a.descriptionBlock,children:[Object(O.jsx)("img",{src:t.profile.photos.large||_.a,alt:"",className:v.a.mainPhoto}),t.isOwner&&Object(O.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}}),Object(O.jsx)(h,{status:t.status,updateStatus:t.updateStatus}),n?Object(O.jsx)(k,{initialValues:t.profile,profile:t.profile,onSubmit:function(e){t.saveProfile(e).then((function(){c(!1)}))}}):Object(O.jsx)(S,{profile:t.profile,isOwner:t.isOwner,setEditMode:c})]})})},A=s(96),N=s(90),C=s(301),F=s.n(C),I=function(t){return Object(O.jsxs)("div",{className:F.a.item,children:[Object(O.jsx)("img",{src:"https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-avatar-silhouette-picture-image_1067774.jpg",alt:"ava"}),t.message," likes ",t.likesCount]})},M=s(50),J=s(302),B=s.n(J),T=Object(M.a)(10),D=Object(a.memo)((function(t){var e=t.posts.map((function(t,e){return Object(O.jsx)(I,{message:t.message,likesCount:t.likesCount},e)}));return Object(O.jsxs)("div",{className:B.a.postsBlock,children:[Object(O.jsx)("h3",{children:"MyPosts"}),Object(O.jsx)(U,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(O.jsx)("div",{className:B.a.posts,children:e})]})})),U=function(t){return Object(O.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(O.jsx)("div",{children:Object(O.jsx)(N.a,{name:"newPostText",component:m.b,validate:[M.b,T]})}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"Add post"})})]})};U=Object(f.a)({form:"profileAddNewPostForm"})(U);var E=D,V=Object(j.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{updateNewPostText:function(e){var s=Object(A.g)(e);t(s)},addPost:function(e){t(Object(A.a)(e))}}}))(E),z=function(t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),Object(O.jsx)(V,{})]})},K=function(t){return{isAuth:t.auth.isAuth}},L=function(t){Object(o.a)(s,t);var e=Object(r.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("login"),this.props.isAuth&&(this.props.getUserProfile(t),this.props.getStatus(t))}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(O.jsx)(z,Object(n.a)(Object(n.a)({},this.props),{},{isOwner:!this.props.match.params.userId}))}}]),s}(u.a.Component);e.default=Object(b.d)(Object(j.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:A.d,getStatus:A.c,updateStatus:A.h,savePhoto:A.e,saveProfile:A.f}),l.g,(function(t){var e=function(e){Object(o.a)(a,e);var s=Object(r.a)(a);function a(){return Object(c.a)(this,a),s.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(O.jsx)(t,Object(n.a)({},this.props)):Object(O.jsx)(l.a,{to:"/login"})}}]),a}(u.a.Component);return Object(j.b)(K)(e)}))(L)}}]);
//# sourceMappingURL=3.7718f68a.chunk.js.map