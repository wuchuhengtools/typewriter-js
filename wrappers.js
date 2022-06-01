(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"9kvl":function(e,n,t){"use strict";var r=t("FfOG");t.d(n,"a",(function(){return r["b"]}));t("bCY9")},afA6:function(e,n,t){"use strict";t.r(n);var r=t("0Owb"),i=t("q1tI"),o=t.n(i),a=t("q3YX"),p=t("9og8"),s=t("WmNS"),l=t.n(s),c=t("rlch"),d="/**\n *  This file is part of typewriter.\n *\n * @Description Say something for this file.\n * @Author      wuchuheng<root@wuchuheng.com>\n * @Time        2022/6/2 05:04\n */\n\nimport React from 'react';\nimport Alert from '../index';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a</Alert>;",u="import type { ReactNode } from 'react';\nimport React from 'react';\nimport t from 'prop-types';\n\nexport interface AlertProps {\n  /**\n   * @description       Alert \u7684\u7c7b\u578b\n   * @default           'info'\n   */\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\n  children?: ReactNode | ReactNode[];\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'happy-alert';\n\nconst kinds: KindMap = {\n  info: '#5352ED',\n  positive: '#2ED573',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n  <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    {...rest}\n  >\n    {children}\n  </div>\n);\n\nAlert.propTypes = {\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",f="import './index.less';",m="@popupPrefix: happy-alert;\n\n.@{popupPrefix} {\n  padding: 20px;\n  background: white;\n  border-radius: 3px;\n  color: white;\n}",h={"alert-basic":{component:Object(c["c"])({loader:function(){var e=Object(p["a"])(l.a.mark((function e(){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(3).then(t.bind(null,"025M"));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d},"index.tsx":{import:"../index",content:u},"style/index.ts":{import:"../style",content:f},"style/index.less":{import:"./index.less",content:m}},dependencies:{react:{version:"18.1.0"},"prop-types":{version:"15.8.1"}},componentName:"alert",identifier:"alert-basic"}}},x=t("x2v5"),v=t("KcUY"),w=t.n(v);n["default"]=e=>o.a.createElement(w.a,Object(r["a"])({},e,{config:a,demos:h,apis:x}))},q3YX:function(e){e.exports=JSON.parse('{"menus":{"en-US":{"/alert":[{"path":"/alert","title":"Alert \u8b66\u544a\u63d0\u793a","meta":{}}],"*":[{"path":"/","title":"Index","meta":{}}]}},"locales":[{"name":"en-US","label":"English"}],"navs":{"en-US":[{"path":"/alert","title":"Alert"}]},"title":"Happy UI","mode":"site","repository":{"url":"","branch":"master"},"theme":{},"exportStatic":{}}')},x2v5:function(e){e.exports=JSON.parse('{"alert":{"default":[{"identifier":"kind","description":"Alert \u7684\u7c7b\u578b","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]}}')}}]);