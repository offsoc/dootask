import{M as i}from"./MicroApps.12ba6189.js";import{n}from"./app.6136d002.js";import"./DialogWrapper.40561701.js";import"./longpress.43ca7fd9.js";import"./index.69e50b2d.js";import"./UserSelect.6b0617f8.js";import"./ImgUpload.cce35aee.js";import"./details.69e2eb78.js";var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return t.loading?t._e():e("MicroApps",{attrs:{url:t.appUrl,path:t.path}})},p=[];const s={components:{MicroApps:i},data(){return{loading:!1,appUrl:"",path:""}},deactivated(){this.loading=!0},watch:{$route:{handler(t){this.loading=!0,t.name=="manage-apps"&&this.$nextTick(()=>{this.loading=!1,this.appUrl={}.VITE_OKR_WEB_URL||$A.apiUrl("../apps/okr"),this.path=this.$route.query.path||""})},immediate:!0}}},a={};var l=n(s,o,p,!1,_,null,null,null);function _(t){for(let r in a)this[r]=a[r]}var U=function(){return l.exports}();export{U as default};