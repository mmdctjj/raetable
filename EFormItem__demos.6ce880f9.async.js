"use strict";(self.webpackChunkraetable=self.webpackChunkraetable||[]).push([[971],{68479:function(v,m,t){t.r(m);var p=t(5574),f=t.n(p),d=t(67759),y=t(72269),n=t(92394),c=t(67294),e=t(85893),x={autoComplete:"\u725B\u8089",input:"mmdctjj",number:18,datePicker:void 0,rangePicker:[],rate:3,slider:50,switch:!0,select:1,radio:2,checkbox:[1,2],textArea:JSON.stringify({name:"mmdctjj",age:12},null,4),treeSelect:"leaf1"},E=[{dataIndex:"autoComplete",key:"autoComplete",title:"autoComplete",affairType:"AutoComplete",filterOption:function(r,u){return u.value.toUpperCase().indexOf(r.toUpperCase())!==-1},options:[{value:"\u725B\u8089",key:1},{value:"\u9E21\u86CB",key:2}]},{dataIndex:"input",key:"input",title:"input",affairType:"Input"},{dataIndex:"number",key:"number",title:"number",affairType:"InputNumber"},{dataIndex:"datePicker",key:"datePicker",title:"datePicker",affairType:"DatePicker",format:"YYYY-MM-DD HH:mm:ss"},{dataIndex:"time",key:"time",title:"time",affairType:"TimePicker",format:"HH:mm:ss"},{dataIndex:"rate",key:"rate",title:"rate",affairType:"Rate"},{dataIndex:"rangePicker",key:"rangePicker",title:"rangePicker",affairType:"RangePicker",placeholder:["\u8BF7\u8F93\u5165\u5F00\u59CB\u65F6\u95F4","\u8BF7\u8F93\u5165\u7ED3\u675F\u65F6\u95F4"],format:["YYYY-MM-DD HH:mm:ss","YYYY-MM-DD HH:mm:ss"]},{dataIndex:"slider",key:"slider",title:"slider",affairType:"Slider"},{dataIndex:"switch",key:"switch",title:"switch",affairType:"Switch"},{dataIndex:"textArea",key:"textArea",title:"textArea",affairType:"TextArea"},{dataIndex:"checkbox",key:"checkbox",title:"checkbox",affairType:n.FORMTYPE.Checkbox,options:[{value:1,label:"\u725B\u8089",key:1},{value:2,label:"\u9E21\u86CB",key:2},{value:3,label:"\u9752\u83DC",key:3}]},{dataIndex:"radio",key:"radio",title:"radio",affairType:"Radio",options:[{value:1,label:"\u725B\u8089",key:1},{value:2,label:"\u9E21\u86CB",key:2},{value:3,label:"\u9752\u83DC",key:3}]},{dataIndex:"select",key:"select",title:"select",affairType:"Select",options:[{value:1,label:"\u725B\u8089",key:1},{value:2,label:"\u9E21\u86CB",key:2},{value:3,label:"\u9752\u83DC",key:3}]},{dataIndex:"transfer",key:"transfer",title:"transfer",affairType:"Transfer",dataSource:Array.from({length:20}).map(function(s,r){return{key:r.toString(),title:"content".concat(r+1),description:"description of content".concat(r+1)}}),targetKeys:["1","3","5"],render:function(r){return r.title}},{dataIndex:"treeSelect",key:"treeSelect",title:"treeSelect",affairType:"TreeSelect",treeData:[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"}]},{value:"parent 1-1",title:"parent 1-1",children:[{value:"leaf3",title:(0,e.jsx)("b",{style:{color:"#08c"},children:"leaf3"})}]}]}]}];m.default=function(){var s=d.Z.useForm(),r=f()(s,1),u=r[0];(0,c.useEffect)(function(){return u.setFieldsValue(x)});var i=(0,c.useState)("edit"),a=f()(i,2),_=a[0],o=a[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:{margin:"10px 0"},children:["\u7F16\u8F91/\u5C55\u793A\uFF1A",(0,e.jsx)(y.Z,{checked:_==="display",onClick:function(){return o(function(k){return k!=="edit"?"edit":"display"})}})]}),(0,e.jsx)("br",{}),(0,e.jsx)(d.Z,{form:u,children:E.map(function(l,k){return(0,e.jsx)(n.EAnimation,{index:k,children:(0,e.jsx)(d.Z.Item,{label:l.title,name:l.key,children:(0,e.jsx)(n.EFormItem,{content:l,type:_,typeKey:"affairType"})})},l.key)})})]})}},36703:function(v,m,t){t.r(m);var p=t(5574),f=t.n(p),d=t(67759),y=t(89847),n=t(92394),c=t(67294),e=t(85893),x={name:"\u840C\u840C\u54D2\u8349\u5934\u5C06\u519B",age:18,admin:!0,eat:[1,2]},E=[{dataIndex:"name",key:"name",title:"name",affairType:"data"},{dataIndex:"age",key:"age",title:"age",affairType:"data2"},{dataIndex:"admin",key:"admin",title:"admin",affairType:"Switch"},{dataIndex:"eat",key:"eat",title:"eat",affairType:n.FORMTYPE.Checkbox,options:[{value:1,label:"\u725B\u8089",key:1},{value:2,label:"\u9E21\u86CB",key:2}]}];m.default=function(){var s=d.Z.useForm(),r=f()(s,1),u=r[0];return(0,c.useEffect)(function(){return u.setFieldsValue(x)}),(0,n.useExtendFormItem)({data:function(a){var _=a.type,o=a.value,l=a.onChange;return _==="display"?(0,e.jsx)(e.Fragment,{children:o}):(0,e.jsx)(y.Z,{value:o+"\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6Input",onChange:l})}}),(0,n.useExtendFormItem)({data2:function(a){var _=a.type,o=a.value,l=a.onChange;return _==="display"?(0,e.jsx)(e.Fragment,{children:o}):(0,e.jsx)(y.Z,{value:o+"\u81EA\u5B9A\u4E49\u7684\u7EC4\u4EF6Input2",onChange:l})}}),(0,e.jsx)(d.Z,{form:u,children:E.map(function(i,a){return(0,e.jsx)(n.EAnimation,{index:a,children:(0,e.jsx)(d.Z.Item,{label:i.title,name:i.key,children:(0,e.jsx)(n.EFormItem,{content:i,type:"edit",typeKey:"affairType"})})},i.key)})})}}}]);
