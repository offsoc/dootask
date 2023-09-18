import{m as r,n}from"./app.374dd20e.js";var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"common-user-select",class:e.warpClass},[e.module?e._e():t("ul",[e._l(e.values,function(s){return s?t("li",{on:{click:e.onSelection}},[t("UserAvatar",{attrs:{userid:s,size:e.avatarSize,"show-icon":e.avatarIcon,"show-name":e.avatarName,"tooltip-disabled":""}})],1):e._e()}),e.addIcon||e.values.length===0?t("li",{staticClass:"add-icon",style:e.addStyle,on:{click:e.onSelection}}):e._e()],2),t("Modal",{attrs:{"class-name":"common-user-select-modal","mask-closable":!1,closable:!e.isFullscreen,fullscreen:e.isFullscreen,"footer-hide":e.isFullscreen,width:"640"},scopedSlots:e._u([{key:"header",fn:function(){return[e.isFullscreen?t("div",{staticClass:"user-modal-header"},[t("div",{staticClass:"user-modal-close",on:{click:function(s){e.showModal=!1}}},[e._v(e._s(e.$L("\u5173\u95ED")))]),t("div",{staticClass:"user-modal-title"},[t("span",[e._v(e._s(e.localTitle))])]),t("div",{staticClass:"user-modal-submit",on:{click:e.onSubmit}},[e.loadIng>0?t("div",{staticClass:"submit-loading"},[t("Loading")],1):e._e(),e._v(" "+e._s(e.$L("\u786E\u5B9A"))+" "),e.selects.length>0?[e._v(" ("+e._s(e.selects.length)),e.multipleMax?t("span",[e._v("/"+e._s(e.multipleMax))]):e._e(),e._v(") ")]:e._e()],2)]):t("div",{staticClass:"ivu-modal-header-inner"},[e._v(e._s(e.localTitle))])]},proxy:!0},{key:"close",fn:function(){return[t("i",{staticClass:"ivu-icon ivu-icon-ios-close"})]},proxy:!0},{key:"footer",fn:function(){return[t("Button",{attrs:{type:"primary",loading:e.submittIng>0},on:{click:e.onSubmit}},[e._v(" "+e._s(e.$L("\u786E\u5B9A"))+" "),e.selects.length>0?[e._v(" ("+e._s(e.selects.length)),e.multipleMax?t("span",[e._v("/"+e._s(e.multipleMax))]):e._e(),e._v(") ")]:e._e()],2)]},proxy:!0}]),model:{value:e.showModal,callback:function(s){e.showModal=s},expression:"showModal"}},[t("div",{staticClass:"user-modal-search"},[e.selects.length>0?t("Scrollbar",{ref:"selected",staticClass:"search-selected",attrs:{"enable-x":"","enable-y":!1}},[t("ul",e._l(e.formatSelect(e.selects),function(s){return t("li",{attrs:{"data-id":s.userid},on:{click:function(i){return i.stopPropagation(),e.onRemoveItem(s.userid)}}},[s.type=="group"?[s.avatar?t("EAvatar",{staticClass:"img-avatar",attrs:{src:s.avatar,size:32}}):s.group_type=="department"?t("i",{staticClass:"taskfont icon-avatar department"},[e._v("\uE75C")]):s.group_type=="project"?t("i",{staticClass:"taskfont icon-avatar project"},[e._v("\uE6F9")]):s.group_type=="task"?t("i",{staticClass:"taskfont icon-avatar task"},[e._v("\uE6F4")]):s.group_type=="okr"?t("i",{staticClass:"taskfont icon-avatar task"},[e._v("\uE6F4")]):t("Icon",{staticClass:"icon-avatar",attrs:{type:"ios-people"}})]:t("UserAvatar",{attrs:{userid:s.userid,"tooltip-disabled":""}})],2)}),0)]):e._e(),t("Input",{staticClass:"search-input",attrs:{placeholder:e.localPlaceholder,clearable:""},model:{value:e.searchKey,callback:function(s){e.searchKey=s},expression:"searchKey"}},[t("div",{staticClass:"search-pre",attrs:{slot:"prefix"},slot:"prefix"},[e.loadIng>0?t("Loading"):t("Icon",{attrs:{type:"ios-search"}})],1)])],1),e.isWhole?t("ul",{staticClass:"user-modal-switch"},e._l(e.switchItems,function(s){return t("li",{key:s.key,class:{active:e.switchActive===s.key},on:{click:function(i){e.switchActive=s.key}}},[e._v(e._s(e.$L(s.label)))])}),0):e._e(),e.lists.length>0?t("Scrollbar",{staticClass:"user-modal-list"},[e.switchActive=="project"?t("ul",{staticClass:"user-modal-project"},e._l(e.lists,function(s){return t("li",{class:e.selectClass(s.userid_list),on:{click:function(i){return e.onSelectProject(s.userid_list)}}},[t("Icon",{staticClass:"user-modal-icon",attrs:{type:e.selectIcon(s.userid_list)}}),t("div",{staticClass:"user-modal-avatar"},[t("i",{staticClass:"taskfont icon-avatar"},[e._v("\uE6F9")]),t("div",{staticClass:"project-name"},[t("div",{staticClass:"label"},[e._v(e._s(s.name))]),t("div",{staticClass:"subtitle"},[e._v(" "+e._s(s.userid_list.length)+" "+e._s(e.$L("\u9879\u76EE\u6210\u5458"))+" "),t("em",{staticClass:"all"},[e._v(e._s(e.$L("\u5DF2\u5168\u9009")))]),t("em",{staticClass:"some"},[e._v(e._s(e.$L("\u5DF2\u9009\u90E8\u5206")))])])])])],1)}),0):t("ul",[e.showSelectAll?t("li",{class:e.selectClass("all"),on:{click:e.onSelectAll}},[t("Icon",{staticClass:"user-modal-icon",attrs:{type:e.selectIcon("all")}}),t("div",{staticClass:"user-modal-all"},[e._v(e._s(e.$L("\u5168\u9009")))])],1):e._e(),e._l(e.lists,function(s){return t("li",{class:{selected:e.selects.includes(s.userid),disabled:e.isUncancelable(s.userid)||e.isDisabled(s.userid)},on:{click:function(i){return e.onSelectItem(s)}}},[e.selects.includes(s.userid)?t("Icon",{staticClass:"user-modal-icon",attrs:{type:"ios-checkmark-circle"}}):t("Icon",{staticClass:"user-modal-icon",attrs:{type:"ios-radio-button-off"}}),s.type=="group"?t("div",{staticClass:"user-modal-avatar"},[s.avatar?t("EAvatar",{staticClass:"img-avatar",attrs:{src:s.avatar,size:40}}):s.group_type=="department"?t("i",{staticClass:"taskfont icon-avatar department"},[e._v("\uE75C")]):s.group_type=="project"?t("i",{staticClass:"taskfont icon-avatar project"},[e._v("\uE6F9")]):s.group_type=="task"?t("i",{staticClass:"taskfont icon-avatar task"},[e._v("\uE6F4")]):s.group_type=="okr"?t("i",{staticClass:"taskfont icon-avatar task"},[e._v("\uE6F4")]):t("Icon",{staticClass:"icon-avatar",attrs:{type:"ios-people"}}),t("div",{staticClass:"avatar-name"},[t("span",[e._v(e._s(s.name))])])],1):t("UserAvatar",{staticClass:"user-modal-avatar",attrs:{userid:s.userid,size:40,"show-name":"","tooltip-disabled":""}})],1)})],2)]):t("div",{staticClass:"user-modal-empty"},[e.waitIng>0?t("Loading"):[t("div",{staticClass:"empty-icon"},[t("Icon",{attrs:{type:"ios-cafe-outline"}})],1),t("div",{staticClass:"empty-text"},[e._v(e._s(e.$L("\u6682\u65E0\u7ED3\u679C")))])]],2)],1)],1)},h=[];const u={name:"UserSelect",props:{value:{type:[String,Number,Array],default:()=>[]},uncancelable:{type:Array,default:()=>[]},disabledChoice:{type:Array,default:()=>[]},projectId:{type:Number,default:0},noProjectId:{type:Number,default:0},dialogId:{type:Number,default:0},showBot:{type:Boolean,default:!1},showDisable:{type:Boolean,default:!1},multipleMax:{type:Number},avatarSize:{type:Number,default:28},avatarIcon:{type:Boolean,default:!0},avatarName:{type:Boolean,default:!1},addIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},title:{type:String},placeholder:{type:String},showSelectAll:{type:Boolean,default:!0},showDialog:{type:Boolean,default:!1},module:{type:Boolean,default:!1},disable:{type:Boolean,default:!1},beforeSubmit:Function},data(){return{switchItems:[{key:"recent",label:"\u6700\u8FD1"},{key:"contact",label:"\u901A\u8BAF\u5F55"},{key:"project",label:"\u9879\u76EE\u6210\u5458"}],switchActive:"recent",loadIng:0,waitIng:0,submittIng:0,values:[],selects:[],recents:[],contacts:[],projects:[],showModal:!1,searchKey:null,searchCache:[]}},watch:{value:{handler(e){typeof e=="number"?this.$emit("input",e>0?[e]:[]):typeof e=="string"&&(e=e.indexOf(",")>-1?e.split(","):[e],this.$emit("input",e.map(a=>$A.runNum(a)).filter(a=>a>0))),this.values=e},immediate:!0},isWhole:{handler(e){e?this.switchActive="recent":this.switchActive="contact"},immediate:!0},showModal(e){e?this.searchBefore():this.searchKey="",this.$emit("on-show-change",e,this.values)},searchKey(){this.searchBefore()},switchActive(){this.searchBefore()}},computed:{...r(["cacheDialogs"]),isFullscreen({windowWidth:e}){return e<576},isWhole({projectId:e,noProjectId:a,dialogId:t}){return e===0&&a===0&&t===0},lists({switchActive:e,searchKey:a,recents:t,contacts:s,projects:i}){switch(e){case"recent":return a?t.filter(l=>`${l.name}`.indexOf(a)>-1):t;case"contact":return s;case"project":return i}return[]},isSelectAll({lists:e,selects:a}){return e.length>0&&e.filter(t=>a.includes(t.userid)).length===e.length},warpClass(){return{"select-module":this.module,"select-border":this.border,"select-whole":this.isWhole}},addStyle({avatarSize:e}){return{width:e+"px",height:e+"px"}},localTitle({title:e}){return e===void 0?this.$L("\u9009\u62E9\u4F1A\u5458"):e},localPlaceholder({placeholder:e}){return e===void 0?this.$L("\u641C\u7D22"):e}},methods:{isUncancelable(e){return this.uncancelable.length===0?!1:this.uncancelable.includes(e)},isDisabled(e){return this.disabledChoice.length===0?!1:this.disabledChoice.includes(e)},formatSelect(e){return e.map(a=>$A.leftExists(a,"d:")?this.recents.find(t=>t.userid===a):{type:"user",userid:a})},selectIcon(e){if(e==="all")return this.isSelectAll?"ios-checkmark-circle":"ios-radio-button-off";if($A.isArray(e)&&e.length>0){const a=e.filter(t=>this.selects.includes(t)).length;if(a===e.length)return"ios-checkmark-circle";if(a>0)return"ios-remove-circle"}return"ios-radio-button-off"},selectClass(e){switch(this.selectIcon(e)){case"ios-checkmark-circle":return"selected";case"ios-remove-circle":return"somed"}return""},searchBefore(){!this.showModal||(this.switchActive==="recent"?this.searchRecent():this.switchActive==="contact"?this.searchContact():this.switchActive==="project"&&this.searchProject())},searchRecent(){this.recents=this.cacheDialogs.filter(e=>e.name===void 0||e.dialog_delete===1||!this.showBot&&e.bot?!1:this.showDialog||e.type==="user").sort((e,a)=>e.top_at||a.top_at?$A.Date(a.top_at)-$A.Date(e.top_at):e.todo_num>0||a.todo_num>0?a.todo_num-e.todo_num:$A.Date(a.last_at)-$A.Date(e.last_at)).map(({id:e,name:a,type:t,group_type:s,avatar:i,dialog_user:l})=>({name:a,type:t,group_type:s,avatar:i,userid:t==="user"?l.userid:`d:${e}`}))},searchContact(){let e=this.searchKey;const a=this.searchCache.find(t=>t.type==="contact"&&t.key==e);a&&(this.contacts=a.data),this.waitIng++,setTimeout(()=>{if(this.searchKey!=e){this.waitIng--;return}setTimeout(()=>{this.loadIng++},300),this.$store.dispatch("call",{url:"users/search",data:{keys:{key:e,project_id:this.projectId,no_project_id:this.noProjectId,dialog_id:this.dialogId,bot:this.showBot&&e?2:0,disable:this.showDisable&&e?2:0},take:50}}).then(({data:t})=>{t=t.map(l=>Object.assign(l,{type:"user"})),this.contacts=t;const s=this.searchCache.findIndex(l=>l.key==e),i={type:"contact",key:e,data:t,time:$A.Time()};s>-1?this.searchCache.splice(s,1,i):this.searchCache.push(i)}).catch(({msg:t})=>{this.contacts=[],$A.messageWarning(t)}).finally(t=>{this.loadIng--,this.waitIng--})},this.searchCache.length>0?300:0)},searchProject(){let e=this.searchKey;const a=this.searchCache.find(t=>t.type==="project"&&t.key==e);a&&(this.projects=a.data),this.waitIng++,setTimeout(()=>{if(this.searchKey!=e){this.waitIng--;return}setTimeout(()=>{this.loadIng++},300),this.$store.dispatch("call",{url:"project/lists",data:{type:"team",keys:{name:e},getuserid:"yes",getstatistics:"no"}}).then(({data:t})=>{t=t.data.map(l=>Object.assign(l,{type:"project"})),this.projects=t;const s=this.searchCache.findIndex(l=>l.key==e),i={type:"project",key:e,data:t,time:$A.Time()};s>-1?this.searchCache.splice(s,1,i):this.searchCache.push(i)}).catch(({msg:t})=>{this.projects=[],$A.messageWarning(t)}).finally(t=>{this.loadIng--,this.waitIng--})},this.searchCache.length>0?300:0)},onSelection(){this.disable||this.$nextTick(e=>{this.selects=$A.cloneJSON(this.values),this.showModal=!0})},onSelectAll(){if(this.isSelectAll){this.selects=$A.cloneJSON(this.uncancelable);return}this.lists.some(e=>{if(this.isDisabled(e.userid))return!1;if(this.multipleMax&&this.selects.length>=this.multipleMax)return $A.messageWarning("\u5DF2\u8D85\u8FC7\u6700\u5927\u9009\u62E9\u6570\u91CF"),!0;this.selects.includes(e.userid)||this.selects.push(e.userid)})},onSelectItem({userid:e}){if(this.selects.includes(e)){if(this.isUncancelable(e))return;this.selects=this.selects.filter(a=>a!=e)}else{if(this.isDisabled(e))return;if(this.multipleMax&&this.selects.length>=this.multipleMax){$A.messageWarning("\u5DF2\u8D85\u8FC7\u6700\u5927\u9009\u62E9\u6570\u91CF");return}this.selects.push(e),this.$nextTick(()=>{$A.scrollIntoViewIfNeeded(this.$refs.selected.querySelector(`li[data-id="${e}"]`))})}},onSelectProject(e){switch(this.selectIcon(e)){case"ios-checkmark-circle":const a=e.filter(s=>!this.isUncancelable(s));a.length!=e.length&&$A.messageWarning("\u90E8\u5206\u6210\u5458\u7981\u6B62\u53D6\u6D88"),this.selects=this.selects.filter(s=>!a.includes(s));break;default:const t=e.filter(s=>!this.isDisabled(s));t.length!=e.length&&$A.messageWarning("\u90E8\u5206\u6210\u5458\u7981\u6B62\u9009\u62E9"),this.selects=this.selects.concat(t.filter(s=>!this.selects.includes(s))),this.multipleMax&&this.selects.length>this.multipleMax&&($A.messageWarning("\u5DF2\u8D85\u8FC7\u6700\u5927\u9009\u62E9\u6570\u91CF"),this.selects=this.selects.slice(0,this.multipleMax));break}},onRemoveItem(e){this.isUncancelable(e)||(this.selects=this.selects.filter(a=>a!=e))},onSubmit(){if(this.submittIng>0)return;const e=$A.cloneJSON(this.values);if(this.values=$A.cloneJSON(this.selects),this.$emit("input",this.values),this.$emit("onSubmit",this.values),!this.beforeSubmit){this.showModal=!1;return}const a=this.beforeSubmit();a&&a.then?(this.submittIng++,a.then(()=>{this.showModal=!1}).catch(()=>{this.values=e,this.$emit("input",this.values)}).finally(()=>{this.submittIng--})):this.showModal=!1}}},c={};var d=n(u,o,h,!1,f,null,null,null);function f(e){for(let a in c)this[a]=c[a]}var m=function(){return d.exports}();export{m as U};