"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[7571],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=s,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8800:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var r=n(3117),s=n(102),o=(n(7294),n(3905)),i=["components"],a={id:"suppressing-rules",title:"Suppressing Issues",keywords:["suppressing","issues"],sidebar_position:6},p=void 0,u={unversionedId:"introduction/suppressing-rules",id:"introduction/suppressing-rules",title:"Suppressing Issues",description:"detekt supports the Java (@SuppressWarnings) and Kotlin (@Suppress) style suppression.",source:"@site/docs/introduction/suppressing-rules.md",sourceDirName:"introduction",slug:"/introduction/suppressing-rules",permalink:"/docs/next/introduction/suppressing-rules",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/introduction/suppressing-rules.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"suppressing-rules",title:"Suppressing Issues",keywords:["suppressing","issues"],sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Configuration for Compose",permalink:"/docs/next/introduction/compose"},next:{title:"Code Smell Baseline",permalink:"/docs/next/introduction/baseline"}},l={},c=[],d={toc:c};function f(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"detekt")," supports the Java (",(0,o.kt)("inlineCode",{parentName:"p"},"@SuppressWarnings"),") and Kotlin (",(0,o.kt)("inlineCode",{parentName:"p"},"@Suppress"),") style suppression.\nIf both annotations are present, Kotlin's annotation is favored! "),(0,o.kt)("p",null,"To suppress an issue, the id of the issue must be written inside the values field of the annotation.\nFurthermore, the ruleset plus rulename can be used to suppress issues (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'@Suppress("LongMethod", "complexity.LongParameterList", ...)'),").\nThe issue-id is also exactly the id of the reporting rule."),(0,o.kt)("p",null,"If a ",(0,o.kt)("inlineCode",{parentName:"p"},"LargeClass")," is reported, but that is totally fine for you codebase, then just annotate it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Suppress("LargeClass") // or use complexity.LargeClass\nobject Constants {\n    ...\n}\n')),(0,o.kt)("p",null,"Some rules like ",(0,o.kt)("inlineCode",{parentName:"p"},"TooManyFunctions")," can be suppressed by using a file level annotation ",(0,o.kt)("inlineCode",{parentName:"p"},'@file:Suppress("TooManyFunctions")'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Formatting rules suppression")),(0,o.kt)("p",null,"Please note that rules inside the ",(0,o.kt)("a",{parentName:"p",href:"/docs/rules/formatting"},(0,o.kt)("inlineCode",{parentName:"a"},"formatting"))," ruleset can only be suppressed at ",(0,o.kt)("strong",{parentName:"p"},"the file level"),"."),(0,o.kt)("p",null,"Rules inside this ruleset are wrappers around KtLint rules, and we don't have the same reporting capabilities that we offer for first party rules. For example, you can suppress the ",(0,o.kt)("a",{parentName:"p",href:"/docs/rules/formatting#maximumlinelength"},"MaximumLineLength")," rule only in your entire file with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@file:Suppress("MaximumLineLength")\npackage com.example\n\nobject AClassWithLongLines {\n    //...\n}\n')),(0,o.kt)("p",null,"Several rules in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/rules/formatting"},(0,o.kt)("inlineCode",{parentName:"a"},"formatting")),' ruleset also have a "first party" counterpart. For instance you can use the ',(0,o.kt)("a",{parentName:"p",href:"/docs/rules/style#maxlinelength"},(0,o.kt)("inlineCode",{parentName:"a"},"MaxLineLength"))," rule instead from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/rules/style"},(0,o.kt)("inlineCode",{parentName:"a"},"style"))," ruleset."),(0,o.kt)("p",null,"For those rules, you can suppress the inspection also locally (on top of an expression, function, class, etc.)."))}f.isMDXComponent=!0}}]);