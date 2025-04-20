"use strict";(self.webpackChunkraetable=self.webpackChunkraetable||[]).push([[904],{58795:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(10313),d={}},27616:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(53767),d={}},5783:function(o,a,e){e.r(a),e.d(a,{demos:function(){return M}});var t=e(15009),n=e.n(t),d=e(9783),T=e.n(d),E=e(99289),b=e.n(E),x=e(67294),P=e(9018),O=e(53415),M={"docs-guide-guide-demo-0":{component:x.memo(x.lazy(b()(n()().mark(function D(){var y,m,u,i,c,r,v,l;return n()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.bind(e,53415));case 2:return y=p.sent,m=y.EPage,u=[{dataIndex:"name",key:"name",title:"name",affairType:"Input",conditionType:"Input"},{dataIndex:"age",key:"age",title:"age",affairType:"Input",conditionType:"Input"},{dataIndex:"admin",key:"admin",title:"admin",affairType:"Select",conditionType:"Select",options:[{key:1,value:!0,label:"\u662F"},{key:2,value:!1,label:"\u5426"}]},{dataIndex:"eat",key:"eat",title:"eat",affairType:"Select",conditionType:"Select",options:[{value:1,label:"\u725B\u8089",key:1},{value:2,label:"\u9E21\u86CB",key:2}]},{dataIndex:"gender",key:"gender",title:"gender",conditionType:"Select",more:!0,options:[{value:1,label:"\u7537",key:1},{value:2,label:"\u5973",key:2}]},{dataIndex:"test",key:"test",title:"test",more:!0,conditionType:"Input"},{dataIndex:"test1",key:"test1",title:"test1",more:!0,conditionType:"Input"},{dataIndex:"test2",key:"test2",title:"test2",more:!0,conditionType:"Input"}],i=[T()({name:"mmdctjj",age:18,eat:1,admin:!0,gender:1,test:"test",test1:"test1",test2:"test2"},"test","test3"),T()({name:"xiaofeng",age:28,eat:2,admin:!1,gender:1,test:"test",test1:"test1",test2:"test2"},"test","test3"),T()({name:"zhuming",age:12,eat:1,admin:!1,gender:1,test:"test",test1:"test1",test2:"test2"},"test","test3")],c=function(){return new Promise(function(s,g){setTimeout(function(){s({data:i,msg:"ok",code:200})},1e3)})},r=function(){return new Promise(function(s,g){setTimeout(function(){s({msg:"ok",code:200})},1e3)})},v=function(){return new Promise(function(s,g){setTimeout(function(){s({msg:"ok",code:200})},1e3)})},l=function(){return new Promise(function(s,g){setTimeout(function(){s({msg:"ok",code:200})},1e3)})},p.abrupt("return",{default:function(){return x.createElement(m,{affairName:"\u9753\u4ED4",addAffair:r,columns:u,delAffair:v,editAffair:l,getLists:c,pageTitle:"\u9753\u4ED4\u7BA1\u7406",rowKey:"name"})}});case 11:case"end":return p.stop()}},D)})))),asset:{type:"BLOCK",id:"docs-guide-guide-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { EPage } from 'raetable';

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name',
    affairType: 'Input',
    conditionType: 'Input',
  },
  {
    dataIndex: 'age',
    key: 'age',
    title: 'age',
    affairType: 'Input',
    conditionType: 'Input',
  },
  {
    dataIndex: 'admin',
    key: 'admin',
    title: 'admin',
    affairType: 'Select',
    conditionType: 'Select',
    options: [
      {
        key: 1,
        value: true,
        label: '\u662F',
      },
      {
        key: 2,
        value: false,
        label: '\u5426',
      },
    ],
  },
  {
    dataIndex: 'eat',
    key: 'eat',
    title: 'eat',
    affairType: 'Select',
    conditionType: 'Select',
    options: [
      {
        value: 1,
        label: '\u725B\u8089',
        key: 1,
      },
      {
        value: 2,
        label: '\u9E21\u86CB',
        key: 2,
      },
    ],
  },
  {
    dataIndex: 'gender',
    key: 'gender',
    title: 'gender',
    conditionType: 'Select',
    more: true,
    options: [
      {
        value: 1,
        label: '\u7537',
        key: 1,
      },
      {
        value: 2,
        label: '\u5973',
        key: 2,
      },
    ],
  },
  {
    dataIndex: 'test',
    key: 'test',
    title: 'test',
    more: true,
    conditionType: 'Input',
  },
  {
    dataIndex: 'test1',
    key: 'test1',
    title: 'test1',
    more: true,
    conditionType: 'Input',
  },
  {
    dataIndex: 'test2',
    key: 'test2',
    title: 'test2',
    more: true,
    conditionType: 'Input',
  },
];

const datas = [
  {
    name: 'mmdctjj',
    age: 18,
    eat: 1,
    admin: true,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
  {
    name: 'xiaofeng',
    age: 28,
    eat: 2,
    admin: false,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
  {
    name: 'zhuming',
    age: 12,
    eat: 1,
    admin: false,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: datas,
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

const addData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

const delData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

const editData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

export default () => (
  <EPage
    affairName="\u9753\u4ED4"
    addAffair={addData}
    columns={columns}
    delAffair={delData}
    editAffair={editData}
    getLists={getData}
    pageTitle="\u9753\u4ED4\u7BA1\u7406"
    rowKey="name"
  />
);`},raetable:{type:"NPM",value:"2.4.20"}},entry:"index.jsx",description:"\u9875\u9762\u5927\u81F4\u53EF\u4EE5\u5206\u4E3A\u6807\u9898\u680F\uFF0C\u4E1A\u52A1\u5F39\u51FA\u5C42\uFF08\u7F16\u8F91\u6216\u8005\u9884\u89C8\uFF09\uFF0C\u4E1A\u52A1\u5217\u8868\u3001\u6761\u4EF6\u63A7\u5236\u56DB\u4E2A\u6A21\u5757",title:"\u5B8C\u6574\u7684\u5217\u8868"},context:{raetable:O},renderOpts:{compile:function(){var D=b()(n()().mark(function m(){var u,i=arguments;return n()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(335).then(e.bind(e,37335));case 2:return r.abrupt("return",(u=r.sent).default.apply(u,i));case 3:case"end":return r.stop()}},m)}));function y(){return D.apply(this,arguments)}return y}()}}}},69073:function(o,a,e){var t;e.r(a),e.d(a,{demos:function(){return y}});var n=e(15009),d=e.n(n),T=e(9783),E=e.n(T),b=e(99289),x=e.n(b),P=e(67294),O=e(83789),M=e(53415),D=e(90978),y={"docs-guide-start-demo-0":{component:P.memo(P.lazy(x()(d()().mark(function m(){var u,i,c,r,v,l,A,p,_,s,g,j,L;return d()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return I.next=2,Promise.resolve().then(e.bind(e,53415));case 2:return u=I.sent,i=u.EPage,I.next=6,Promise.resolve().then(e.bind(e,90978));case 6:return c=I.sent,r=c.Form,I.next=10,Promise.resolve().then(e.t.bind(e,67294,19));case 10:return v=I.sent,l=v.useEffect,A=v.useState,p=[{dataIndex:"name",key:"name",title:"name",affairType:"Input",conditionType:"Input"},{dataIndex:"age",key:"age",title:"age",affairType:"Input",conditionType:"Input"},{dataIndex:"admin",key:"admin",title:"admin",affairType:"Select",conditionType:"Select",options:[{key:1,value:!0,label:"\u662F"},{key:2,value:!1,label:"\u5426"}]},{dataIndex:"eat",key:"eat",title:"eat",affairType:"Select",conditionType:"Select",options:[{value:1,label:"\u725B\u8089",key:1},{value:2,label:"\u9E21\u86CB",key:2}]},{dataIndex:"gender",key:"gender",title:"gender",conditionType:"Select",more:!0,options:[{value:1,label:"\u7537",key:1},{value:2,label:"\u5973",key:2}]},{dataIndex:"test",key:"test",title:"test",more:!0,conditionType:"Input"},{dataIndex:"test1",key:"test1",title:"test1",more:!0,conditionType:"Input"},{dataIndex:"test2",key:"test2",title:"test2",more:!0,conditionType:"Input"}],_=[E()({name:"mmdctjj",age:18,eat:1,admin:!0,gender:1,test:"test",test1:"test1",test2:"test2"},"test","test3"),E()({name:"xiaofeng",age:28,eat:2,admin:!1,gender:1,test:"test",test1:"test1",test2:"test2"},"test","test3"),E()({name:"zhuming",age:12,eat:1,admin:!1,gender:1,test:"test",test1:"test1",test2:"test2"},"test","test3")],s=function(){return new Promise(function(f,k){setTimeout(function(){f({data:_,msg:"ok",code:200})},1e3)})},g=function(){return new Promise(function(f,k){setTimeout(function(){f({msg:"ok",code:200})},1e3)})},j=function(){return new Promise(function(f,k){setTimeout(function(){f({msg:"ok",code:200})},1e3)})},L=function(){return new Promise(function(f,k){setTimeout(function(){f({msg:"ok",code:200})},1e3)})},I.abrupt("return",{default:function(){return P.createElement(i,{affairName:"\u9753\u4ED4",addAffair:g,columns:p,delAffair:j,editAffair:L,getLists:s,pageTitle:"\u9753\u4ED4\u7BA1\u7406",rowKey:"name"})}});case 20:case"end":return I.stop()}},m)})))),asset:{type:"BLOCK",id:"docs-guide-start-demo-0",refAtomIds:[],dependencies:{"index.jsx":{type:"FILE",value:`import { EPage } from 'raetable';
import { Form } from 'antd';
import { useEffect, useState } from 'react';

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name',
    affairType: 'Input',
    conditionType: 'Input',
  },
  {
    dataIndex: 'age',
    key: 'age',
    title: 'age',
    affairType: 'Input',
    conditionType: 'Input',
  },
  {
    dataIndex: 'admin',
    key: 'admin',
    title: 'admin',
    affairType: 'Select',
    conditionType: 'Select',
    options: [
      {
        key: 1,
        value: true,
        label: '\u662F',
      },
      {
        key: 2,
        value: false,
        label: '\u5426',
      },
    ],
  },
  {
    dataIndex: 'eat',
    key: 'eat',
    title: 'eat',
    affairType: 'Select',
    conditionType: 'Select',
    options: [
      {
        value: 1,
        label: '\u725B\u8089',
        key: 1,
      },
      {
        value: 2,
        label: '\u9E21\u86CB',
        key: 2,
      },
    ],
  },
  {
    dataIndex: 'gender',
    key: 'gender',
    title: 'gender',
    conditionType: 'Select',
    more: true,
    options: [
      {
        value: 1,
        label: '\u7537',
        key: 1,
      },
      {
        value: 2,
        label: '\u5973',
        key: 2,
      },
    ],
  },
  {
    dataIndex: 'test',
    key: 'test',
    title: 'test',
    more: true,
    conditionType: 'Input',
  },
  {
    dataIndex: 'test1',
    key: 'test1',
    title: 'test1',
    more: true,
    conditionType: 'Input',
  },
  {
    dataIndex: 'test2',
    key: 'test2',
    title: 'test2',
    more: true,
    conditionType: 'Input',
  },
];

const datas = [
  {
    name: 'mmdctjj',
    age: 18,
    eat: 1,
    admin: true,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
  {
    name: 'xiaofeng',
    age: 28,
    eat: 2,
    admin: false,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
  {
    name: 'zhuming',
    age: 12,
    eat: 1,
    admin: false,
    gender: 1,
    test: 'test',
    test1: 'test1',
    test2: 'test2',
    test: 'test3',
  },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: datas,
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

const addData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

const delData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

const editData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        msg: 'ok',
        code: 200,
      });
    }, 1000);
  });
};

export default () => (
  <EPage
    affairName="\u9753\u4ED4"
    addAffair={addData}
    columns={columns}
    delAffair={delData}
    editAffair={editData}
    getLists={getData}
    pageTitle="\u9753\u4ED4\u7BA1\u7406"
    rowKey="name"
  />
);`},raetable:{type:"NPM",value:"2.4.20"},antd:{type:"NPM",value:"5.24.7"},react:{type:"NPM",value:"18.3.1"}},entry:"index.jsx"},context:{raetable:M,antd:D,react:t||(t=e.t(P,2))},renderOpts:{compile:function(){var m=x()(d()().mark(function i(){var c,r=arguments;return d()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.e(335).then(e.bind(e,37335));case 2:return l.abrupt("return",(c=l.sent).default.apply(c,r));case 3:case"end":return l.stop()}},i)}));function u(){return m.apply(this,arguments)}return u}()}}}},11171:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(68537),d={}},92069:function(o,a,e){e.r(a),e.d(a,{demos:function(){return d}});var t=e(67294),n=e(44906),d={}},86524:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(10313);const n=[{value:"columns",paraId:0},{value:"\u672C\u7EC4\u4EF6\u5E93\u7684\u914D\u7F6E\u6838\u5FC3\u662F",paraId:1,tocIndex:0},{value:"columns",paraId:1,tocIndex:0},{value:"\uFF0C\u5B83\u7EE7\u627F\u4E86",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684",paraId:1,tocIndex:0},{value:"Table",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684",paraId:1,tocIndex:0},{value:"ColumnType",paraId:1,tocIndex:0},{value:"\u7C7B\u578B\uFF0C\u8FD9\u662F\u4E3A\u4E86\u8868\u683C\u4E2D\u7684\u5C55\u793A\uFF1B\u540C\u65F6\u7EE7\u627F\u4E86",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684",paraId:1,tocIndex:0},{value:"Form",paraId:1,tocIndex:0},{value:"\u7EC4\u4EF6\u7684",paraId:1,tocIndex:0},{value:"FormProps",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"FormItemProps",paraId:1,tocIndex:0},{value:"\uFF0C\u8FD9\u662F\u4E3A\u4E86\u5728\u8868\u5355\u4E2D\u5C55\u793A\uFF0C\u8FD8\u6709\u6700\u91CD\u8981\u7684\u4E00\u70B9\u662F\uFF0C\u5B83\u8FD8\u652F\u6301\u8868\u5355\u4E8B\u4EF6\uFF0C\u4F8B\u5982",paraId:1,tocIndex:0},{value:"onChange",paraId:1,tocIndex:0},{value:"\u4E8B\u4EF6\u3002",paraId:1,tocIndex:0},{value:"\u4E3A\u4E86\u51CF\u5C11\u4E66\u5199\uFF0C\u8868\u5355\u4E2D\u7684",paraId:2},{value:"name",paraId:2},{value:"\u548C",paraId:2},{value:"label",paraId:2},{value:"\u5171\u7528\u4E86",paraId:2},{value:"columns",paraId:2},{value:"\u4E2D\u7684",paraId:2},{value:"title",paraId:2},{value:"\u548C",paraId:2},{value:"dataIndex",paraId:2},{value:"\uFF0C\u6240\u4EE5\u4E0D\u7528\u518D\u6B21\u58F0\u660E\u4E86",paraId:2},{value:"\u4E00\u4E2A\u57FA\u7840\u7684\u914D\u7F6E\u5982\u4E0B\uFF0C\u5B83\u4EC5\u4EC5\u4F1A\u5728\u8868\u683C\u4E2D\u5C55\u793A",paraId:3,tocIndex:1},{value:`const columns = [
  { dataIndex: 'name', title: '\u59D3\u540D', key: 'name' },
  { dataIndex: 'age', title: '\u5E74\u9F84', key: 'age' },
  { dataIndex: 'food', title: '\u98DF\u7269', key: 'food' },
  { dataIndex: 'test', title: '\u6D4B\u8BD5\u5B57\u6BB5', key: 'test' },
];
`,paraId:4,tocIndex:1},{value:"\u5982\u679C\u4F60\u60F3\u5728\u8868\u683C\u4E2D\u9690\u85CF\u67D0\u4E2A\u680F\u76EE\uFF0C\u53EA\u9700\u8981\u6807\u660E",paraId:5,tocIndex:2},{value:"hideInTable",paraId:5,tocIndex:2},{value:"\u4E3A",paraId:5,tocIndex:2},{value:"true",paraId:5,tocIndex:2},{value:"\u3002",paraId:5,tocIndex:2},{value:`const columns = [
  { dataIndex: 'name', title: '\u59D3\u540D', key: 'name' },
  { dataIndex: 'age', title: '\u5E74\u9F84', key: 'age', hideInTable: true },
  { dataIndex: 'food', title: '\u98DF\u7269', key: 'food' },
  { dataIndex: 'test', title: '\u6D4B\u8BD5\u5B57\u6BB5', key: 'test' },
];
`,paraId:6,tocIndex:2},{value:"\u5982\u679C\u67D0\u4E2A\u5B57\u6BB5\u662F\u9700\u8981\u5728\u6761\u4EF6\u680F\u91CC\u663E\u793A\uFF0C\u4F60\u53EA\u9700\u8981\u52A0\u4E0A",paraId:7,tocIndex:3},{value:"conditionType",paraId:7,tocIndex:3},{value:"\u5B57\u6BB5\uFF0C\u53EF\u9009\u503C\u4E3A",paraId:7,tocIndex:3},{value:"Input",paraId:7,tocIndex:3},{value:"\uFF0C",paraId:7,tocIndex:3},{value:"Select",paraId:7,tocIndex:3},{value:"\u7B49\u8868\u5355\u7C7B\u578B\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u7167",paraId:7,tocIndex:3},{value:"FORMTYPE",paraId:7,tocIndex:3},{value:"\u679A\u4E3E\u7C7B\u578B",paraId:7,tocIndex:3},{value:"\u3002",paraId:7,tocIndex:3},{value:`const columns = [
  { dataIndex: 'name', title: '\u59D3\u540D', key: 'name', conditionType: 'Input' },
  { dataIndex: 'age', title: '\u5E74\u9F84', key: 'age', conditionType: 'Input' },
  { dataIndex: 'food', title: '\u98DF\u7269', key: 'food' },
  { dataIndex: 'test', title: '\u6D4B\u8BD5\u5B57\u6BB5', key: 'test' },
];
`,paraId:8,tocIndex:3},{value:"\u5982\u679C\u67D0\u4E2A\u5B57\u6BB5\u662F\u9700\u8981\u5728\u65B0\u589E\u7F16\u8F91\u7684\u8868\u5355\u91CC\u663E\u793A\uFF0C\u4F60\u53EA\u9700\u8981\u52A0\u4E0A",paraId:9,tocIndex:4},{value:"affairType",paraId:9,tocIndex:4},{value:"\u5B57\u6BB5\uFF0C\u53EF\u9009\u503C\u540C",paraId:9,tocIndex:4},{value:"conditionType",paraId:9,tocIndex:4},{value:"\u3002",paraId:9,tocIndex:4},{value:`const columns = [
  { dataIndex: 'name', title: '\u59D3\u540D', key: 'name', conditionType: 'Input' },
  {
    dataIndex: 'age',
    title: '\u5E74\u9F84',
    key: 'age',
    conditionType: 'Input',
    affairType: 'Input',
  },
  { dataIndex: 'food', title: '\u98DF\u7269', key: 'food', affairType: 'Input' },
  { dataIndex: 'test', title: '\u6D4B\u8BD5\u5B57\u6BB5', key: 'test', affairType: 'Input' },
];
`,paraId:10,tocIndex:4},{value:"Select",paraId:0},{value:"\u5982\u679C\u8868\u5355\u7C7B\u578B\u662F",paraId:11,tocIndex:5},{value:"Select",paraId:11,tocIndex:5},{value:"\uFF0C\u90A3\u4E48\u4F60\u8FD8\u9700\u8981\u63D0\u4F9B\u4ED6\u7684\u4E0B\u62C9\u6846\u9009\u9879",paraId:11,tocIndex:5},{value:"option",paraId:11,tocIndex:5},{value:"\u3002\u7C7B\u578B\u662F",paraId:11,tocIndex:5},{value:"SelectProps",paraId:11,tocIndex:5},{value:"\u3002",paraId:11,tocIndex:5},{value:`const columns = [
  { dataIndex: 'name', title: '\u59D3\u540D', key: 'name', conditionType: 'Input' },
  {
    dataIndex: 'age',
    title: '\u5E74\u9F84',
    key: 'age',
    conditionType: 'Input',
    affairType: 'Input',
  },
  {
    dataIndex: 'food',
    title: '\u98DF\u7269',
    key: 'food',
    affairType: 'Select',
    options: [
      { value: '1', lable: '\u725B\u8089', key: '1' },
      { value: '2', lable: '\u7F8A\u8089', key: '2' },
    ],
  },
  { dataIndex: 'test', title: '\u6D4B\u8BD5\u5B57\u6BB5', key: 'test', affairType: 'Input' },
];
`,paraId:12,tocIndex:5},{value:"\u5728\u65E5\u5E38\u7684\u5F00\u53D1\u4E2D\uFF0C\u4F60\u53EF\u80FD\u4F1A\u9047\u5230\uFF0CA\u680F\u76EE\u7684\u503C\uFF0C\u9700\u8981\u548CB\u680F\u76EE\u7684\u503C\u8054\u52A8\uFF0C\u6700\u65B0\u7684\u7248\u672C\uFF0C\u5DF2\u7ECF\u652F\u6301\u8FD9\u4E2D\u9700\u6C42\u3002",paraId:13,tocIndex:6},{value:`
\u4F60\u53EF\u4EE5\u4F7F\u7528`,paraId:13,tocIndex:6},{value:"linked",paraId:13,tocIndex:6},{value:"\u6307\u5B9A\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u5F53\u6307\u5B9A\u680F\u76EE\u7684\u89E6\u53D1",paraId:13,tocIndex:6},{value:"onChange",paraId:13,tocIndex:6},{value:"\u65F6\uFF0C\u5F53\u524D\u680F\u76EE\u4F1A\u6E05\u7A7A\u5F53\u524D\u503C\uFF0C\u7B49\u5F85\u65B0\u7684\u4EA4\u4E92\u3002",paraId:13,tocIndex:6},{value:`const columns = [
  { dataIndex: 'name', title: '\u59D3\u540D', key: 'name', conditionType: 'Input' },
  {
    dataIndex: 'age',
    title: '\u5E74\u9F84',
    key: 'age',
    conditionType: 'Input',
    affairType: 'Input',
  },
  {
    dataIndex: 'food',
    title: '\u98DF\u7269',
    key: 'food',
    linked: 'age',
    affairType: 'Select',
    options: [
      { value: '1', lable: '\u725B\u8089', key: '1' },
      { value: '2', lable: '\u7F8A\u8089', key: '2' },
    ],
  },
];
`,paraId:14,tocIndex:6}]},52938:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(53767);const n=[{value:"\u672C\u6587\u6839\u636E\u7EC4\u4EF6\u7684\u7C7B\u578B\u5206\u4E3A",paraId:0,tocIndex:0},{value:"\u57FA\u7840\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u3001",paraId:0,tocIndex:0},{value:"\u8FDB\u9636\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u3001",paraId:0,tocIndex:0},{value:"\u4E1A\u52A1\u7EC4\u4EF6",paraId:0,tocIndex:0},{value:"\u3002",paraId:0,tocIndex:0},{value:"\u57FA\u7840\u7EC4\u4EF6",paraId:1,tocIndex:0},{value:"\u4E3B\u8981\u662F\u6839\u636E\u9875\u9762\u7684\u5212\u5206\u57FA\u7840\u5355\u5143\uFF0C\u867D\u7136\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u65E0\u9700\u5173\u6CE8\u4ED6\u4EEC\uFF0C\u4F46\u662F\u5076\u5C14\u4F60\u60F3\u81EA\u5B9A\u4E49\u9875\u9762\u5E03\u5C40\uFF0C\u8FD8\u662F\u6709\u5FC5\u8981\u4F7F\u7528\u5B83\u4EEC\u3002",paraId:1,tocIndex:0},{value:"\u8FDB\u9636\u7EC4\u4EF6",paraId:2,tocIndex:0},{value:"(\u5373",paraId:2,tocIndex:0},{value:"ETable",paraId:2,tocIndex:0},{value:"\u7EC4\u4EF6)\u662F\u4F7F\u7528\u57FA\u7840\u7EC4\u4EF6\u7EC4\u88C5\u800C\u6210\u7684\u5927\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u7EC4\u4EF6\u4EC5\u4EC5\u5305\u542B\u8868\u5355\u81EA\u52A8\u5904\u7406\uFF08",paraId:2,tocIndex:0},{value:"\u65B0\u589E\u7F16\u8F91",paraId:2,tocIndex:0},{value:"\u3001",paraId:2,tocIndex:0},{value:"\u6761\u4EF6\u641C\u7D22",paraId:2,tocIndex:0},{value:"\uFF09\u548C\u5217\u8868\u5C55\u793A\u90E8\u5206\uFF0C\u5F00\u53D1\u8005\u9700\u8981\u81EA\u884C\u5904\u7406\u4E1A\u52A1\u903B\u8F91\u3002",paraId:2,tocIndex:0},{value:"\u4E1A\u52A1\u7EC4\u4EF6",paraId:3,tocIndex:0},{value:"(\u5373",paraId:3,tocIndex:0},{value:"EPage",paraId:3,tocIndex:0},{value:"\u7EC4\u4EF6)\u662F\u5728\u8FDB\u9636\u7EC4\u4EF6\u7684\u57FA\u7840\u4E0A\u5C01\u88C5\u4E86\u4E1A\u52A1\u903B\u8F91\uFF0C\u6240\u4EE5\u5F00\u53D1\u8005\u53EA\u9700\u8981\u63D0\u4F9B\u5C01\u88C5\u540E\u7684",paraId:3,tocIndex:0},{value:"http",paraId:3,tocIndex:0},{value:"\u8BF7\u6C42\u51FD\u6570\u3002",paraId:3,tocIndex:0},{value:"\u4E1A\u52A1\u7EC4\u4EF6\u867D\u7136\u5DF2\u7ECF\u5904\u7406\u4E86\u4E1A\u52A1\u903B\u8F91\uFF0C\u4F46\u662F\u4E5F\u63D0\u4F9B\u4E86\u5BF9\u5E94\u7684\u94A9\u5B50\u51FD\u6570\u5B9A\u5236\u5316\u4E1A\u52A1\u903B\u8F91\u3002",paraId:4},{value:"formcatList",paraId:4},{value:"\u7528\u6765\u81EA\u5B9A\u4E49\u8868\u683C\u5217\u8868\u6570\u636E\u5C55\u793A\u903B\u8F91\uFF0C",paraId:4},{value:"formcatAffair",paraId:4},{value:"\u7528\u6765\u81EA\u5B9A\u4E49\u4E1A\u52A1\u6570\u636E\u7684\u5C55\u793A\u903B\u8F91\u3002",paraId:4}]},45180:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(9018);const n=[{value:"raETable",paraId:0},{value:"raETable",paraId:1,tocIndex:0},{value:"\u662F",paraId:1,tocIndex:0},{value:"react",paraId:1,tocIndex:0},{value:" ",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:" Easy Table \u7684\u7F29\u5199\u3002\u65E8\u5728\u8BA9\u5F00\u53D1\u8005\u5728",paraId:1,tocIndex:0},{value:"react",paraId:1,tocIndex:0},{value:"\u4E2D\u4F7F\u7528 ",paraId:1,tocIndex:0},{value:"antd",paraId:1,tocIndex:0},{value:"\u7684",paraId:1,tocIndex:0},{value:"Table",paraId:1,tocIndex:0},{value:"\u65F6\u66F4 easy\u3002",paraId:1,tocIndex:0},{value:"raETable",paraId:0},{value:"\u{1F48E} \u5927\u591A\u6570\u914D\u7F6E\u9879\u7EE7\u627F\u81EA antd\uFF0C\u53EA\u6709\u5C11\u91CF\u4E1A\u52A1\u914D\u7F6E\u9879\uFF0C\u6613\u5B66\u6613\u7528",paraId:2,tocIndex:1},{value:"\u{1F697} \u7EC4\u4EF6\u652F\u6301 Mcp \u670D\u52A1\uFF0C\u4F60\u53EF\u4EE5\u5728\u7F16\u8F91\u5668\u91CC\u589E\u52A0 Mcp \u670D\u52A1\u6765\u83B7\u5F97\u66F4\u667A\u80FD\u7684\u7EC4\u4EF6\u8BF4\u660E\u4E86",paraId:2,tocIndex:1},{value:"\u{1F308} \u4E00\u4E2A option \u53EF\u4EE5\u751F\u6210\u4E00\u4E2A B \u7AEF\u9875\u9762\uFF0C\u4E14\u5305\u542B\u589E\u5220\u6539\u67E5\u57FA\u672C\u529F\u80FD",paraId:2,tocIndex:1},{value:"\u{1F680} \u6240\u6709\u7EC4\u4EF6\u652F\u6301\u4F7F\u7528\u5BF9\u5E94\u7684 hook \u751F\u6210",paraId:2,tocIndex:1},{value:"\u{1F3A8} \u5185\u7F6E\u591A\u79CD\u52A8\u753B\u7EC4\u4EF6",paraId:2,tocIndex:1},{value:"\u{1F6A5} \u652F\u6301\u81EA\u5B9A\u4E49\u7EC4\u4EF6",paraId:2,tocIndex:1},{value:"\u{1F4A1} \u5927\u91CF\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5F00\u7BB1\u5373\u7528",paraId:2,tocIndex:1},{value:"\u4E3A\u4E86\u65B9\u4FBF\u4E66\u5199\uFF0C\u672C\u5E93\u6240\u6709\u7684\u7EC4\u4EF6\u90FD\u7701\u7565\u4E86",paraId:3,tocIndex:1},{value:"ra",paraId:3,tocIndex:1},{value:"Mcp",paraId:0},{value:"\u73B0\u5728\u5927\u591A\u6570\u7EC4\u4EF6\u6DFB\u52A0\u5728 ",paraId:4,tocIndex:2},{value:"Mcp",paraId:4,tocIndex:2},{value:" \u670D\u52A1 ",paraId:4,tocIndex:2},{value:"tool",paraId:4,tocIndex:2},{value:" \u4E86\uFF0C\u65B9\u4FBF\u5FEB\u901F\u6DFB\u52A0\u5230 ",paraId:4,tocIndex:2},{value:"cursor",paraId:4,tocIndex:2},{value:" ",paraId:4,tocIndex:2},{value:"vs code",paraId:4,tocIndex:2},{value:" \u7B49\u652F\u6301 ",paraId:4,tocIndex:2},{value:"Mcp",paraId:4,tocIndex:2},{value:" \u670D\u52A1\u7684\u7F16\u8F91\u5668\u4E2D\uFF01",paraId:4,tocIndex:2},{value:"\u5728\u672C\u5730\u8FD0\u884C\u65F6\uFF0C\u53EF\u4EE5\u6DFB\u52A0\u542F\u52A8\u5730\u5740\uFF1A",paraId:5,tocIndex:2},{value:"http://localhost:8000/sse",paraId:5,tocIndex:2},{value:" \u5230\u7F16\u8F91\u5668 ",paraId:5,tocIndex:2},{value:"Mcp",paraId:5,tocIndex:2},{value:" \u670D\u52A1\u4E2D\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u5728\u7F16\u8F91\u5668\u91CC\u4F7F\u7528 \u5BF9\u5E94\u7684 ",paraId:5,tocIndex:2},{value:"tool",paraId:5,tocIndex:2},{value:"\u518D\u6B21\u8BE2\u95EE\u4E4B\u540E\uFF1A",paraId:6,tocIndex:2},{value:"raETable",paraId:0},{value:"\u8FD9\u4E2A\u7EC4\u4EF6\u5E93\u8BDE\u751F\u7684\u73AF\u5883\u662F B \u7AEF\u4E1A\u52A1\u573A\u666F\uFF0C\u6BCF\u4E2A\u9875\u9762\u90FD\u662F\u8868\u683C",paraId:7,tocIndex:3},{value:"Table",paraId:7,tocIndex:3},{value:"\u3001\u6761\u4EF6",paraId:7,tocIndex:3},{value:"Form",paraId:7,tocIndex:3},{value:"\u3001\u4E1A\u52A1\uFF08\u65B0\u589E\u3001\u7F16\u8F91\uFF0C\u6211\u4EEC\u7EDF\u79F0\u4E3A\u4E1A\u52A1\uFF09",paraId:7,tocIndex:3},{value:"Form",paraId:7,tocIndex:3},{value:"\u7EC4\u6210\uFF0C\u867D\u7136\u6BCF\u4E2A\u9875\u9762\u7684\u6570\u636E\u4E0D\u540C\uFF0C\u4F46\u662F\u903B\u8F91\u5927\u90FD\u76F8\u4F3C\uFF1A",paraId:7,tocIndex:3},{value:"\u8FDB\u5165\u9875\u9762\u81EA\u52A8\u5237\u65B0\u8868\u683C\uFF0C\u5B8C\u6210\u4E1A\u52A1\u4E4B\u540E\u5237\u65B0\u8868\u683C\uFF0C\u6761\u4EF6\u6539\u53D8\u4E4B\u540E\u5237\u65B0\u8868\u683C\u3002",paraId:8,tocIndex:3},{value:"raETable",paraId:9,tocIndex:3},{value:"\u5C01\u88C5\u4E86",paraId:9,tocIndex:3},{value:"Table",paraId:9,tocIndex:3},{value:"\u3001",paraId:9,tocIndex:3},{value:"Form",paraId:9,tocIndex:3},{value:"\u4E0A\u7684\u91CD\u590D\u903B\u8F91\uFF0C\u4F7F\u5F00\u53D1\u8005\u53EA\u9700\u8981\u5173\u6CE8\u4E1A\u52A1\u6570\u636E\u7684\u5904\u7406\uFF08",paraId:9,tocIndex:3},{value:"ETable",paraId:9,tocIndex:3},{value:"\u7EC4\u4EF6\uFF09\uFF0C\u751A\u81F3\u4F60\u4E5F\u53EF\u4EE5\u5C06\u4E1A\u52A1\u6570\u636E\u7684\u5904\u7406\u4EA4\u7ED9",paraId:9,tocIndex:3},{value:"raETable",paraId:9,tocIndex:3},{value:"\u63A5\u7BA1\uFF08",paraId:9,tocIndex:3},{value:"EPage",paraId:9,tocIndex:3},{value:"\u7EC4\u4EF6\uFF09",paraId:9,tocIndex:3}]},87605:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(83789);const n=[{value:`npm instanll raetable -D
or
pnpm install raetable -D
or
yarn add raetable -D
`,paraId:0,tocIndex:0},{value:`import { EPage } from 'raetable';

export default () => (
  <EPage
    affairName="\u9753\u4ED4"
    addAffair={addData}
    columns={columns}
    delAffair={delData}
    editAffair={editData}
    getLists={getData}
    pageTitle="\u9753\u4ED4\u7BA1\u7406"
    rowKey="name"
  />
);
`,paraId:1,tocIndex:1}]},51446:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(68537);const n=[{value:`
  \u4E2A\u4EBA\u521B\u4F5C\u4E0D\u6613\uFF0C\u5982\u679C\u5BF9\u60A8\u6709\u5E2E\u52A9\uFF0C\u53EF\u4EE5\u8BF7\u6211\u559D\u676F\u53EF\u4E50\u5417\uFF0C\u5927\u5BB6\u7684\u652F\u6301\u662F\u6211\u6700\u5927\u7684\u52A8\u529B
  `,paraId:0},{value:`
  `,paraId:0}]},52981:function(o,a,e){e.r(a),e.d(a,{texts:function(){return n}});var t=e(44906);const n=[{value:`
  \u4E2A\u4EBA\u521B\u4F5C\u4E0D\u6613\uFF0C\u5982\u679C\u5BF9\u60A8\u6709\u5E2E\u52A9\uFF0C\u53EF\u4EE5\u8BF7\u6211\u559D\u74F6\u53EF\u4E50\u5417\uFF0C\u5927\u5BB6\u7684\u652F\u6301\u662F\u6211\u6700\u5927\u7684\u52A8\u529B
  `,paraId:0},{value:`
  `,paraId:0},{value:"\u611F\u8C22\u4E0B\u9762\u7684\u5C0F\u4F19\u4F34\u5BF9\u6211\u7684\u8D5E\u52A9\uFF0C\u611F\u6FC0\u4E0D\u5C3D",paraId:1},{value:"ID",paraId:2},{value:"\u91D1\u989D\uFF08\u5143\uFF09",paraId:2},{value:"\u5014\u5F3A\u7684\u5C0F\u5F3A",paraId:2},{value:"10.0",paraId:2},{value:"\u5348\u89C9",paraId:2},{value:"3.5",paraId:2},{value:"\u8FC7\u671F\u7684\u82CF\u6253\u6C34",paraId:2},{value:"5.0",paraId:2},{value:"Qiang.Su",paraId:2},{value:"66.6",paraId:2},{value:"\u8721\u7B14\u5C0F\u65B0",paraId:2},{value:"3.5",paraId:2}]}}]);
