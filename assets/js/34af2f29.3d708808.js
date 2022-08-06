"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[439],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),k=i,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||r;return n?a.createElement(c,l(l({ref:t},s),{},{components:n})):a.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5997:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),l=["components"],o={title:"Formatting Rule Set",sidebar:"home_sidebar",keywords:["rules","formatting"],permalink:"formatting.html",toc:!0,folder:"documentation"},p=void 0,u={unversionedId:"rules/formatting",id:"rules/formatting",title:"Formatting Rule Set",description:"This rule set provides wrappers for rules implemented by ktlint - https://ktlint.github.io/.",source:"@site/docs/rules/formatting.md",sourceDirName:"rules",slug:"/rules/formatting",permalink:"/docs/next/rules/formatting",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/rules/formatting.md",tags:[],version:"current",frontMatter:{title:"Formatting Rule Set",sidebar:"home_sidebar",keywords:["rules","formatting"],permalink:"formatting.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Exceptions Rule Set",permalink:"/docs/next/rules/exceptions"},next:{title:"Naming Rule Set",permalink:"/docs/next/rules/naming"}},s={},d=[{value:"AnnotationOnSeparateLine",id:"annotationonseparateline",level:3},{value:"AnnotationSpacing",id:"annotationspacing",level:3},{value:"ArgumentListWrapping",id:"argumentlistwrapping",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"BlockCommentInitialStarAlignment",id:"blockcommentinitialstaralignment",level:3},{value:"ChainWrapping",id:"chainwrapping",level:3},{value:"CommentSpacing",id:"commentspacing",level:3},{value:"CommentWrapping",id:"commentwrapping",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"DiscouragedCommentLocation",id:"discouragedcommentlocation",level:3},{value:"EnumEntryNameCase",id:"enumentrynamecase",level:3},{value:"Filename",id:"filename",level:3},{value:"FinalNewline",id:"finalnewline",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"FunKeywordSpacing",id:"funkeywordspacing",level:3},{value:"FunctionTypeReferenceSpacing",id:"functiontypereferencespacing",level:3},{value:"ImportOrdering",id:"importordering",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"Indentation",id:"indentation",level:3},{value:"Configuration options:",id:"configuration-options-4",level:4},{value:"KdocWrapping",id:"kdocwrapping",level:3},{value:"Configuration options:",id:"configuration-options-5",level:4},{value:"MaximumLineLength",id:"maximumlinelength",level:3},{value:"Configuration options:",id:"configuration-options-6",level:4},{value:"ModifierListSpacing",id:"modifierlistspacing",level:3},{value:"ModifierOrdering",id:"modifierordering",level:3},{value:"MultiLineIfElse",id:"multilineifelse",level:3},{value:"NoBlankLineBeforeRbrace",id:"noblanklinebeforerbrace",level:3},{value:"NoBlankLinesInChainedMethodCalls",id:"noblanklinesinchainedmethodcalls",level:3},{value:"NoConsecutiveBlankLines",id:"noconsecutiveblanklines",level:3},{value:"NoEmptyClassBody",id:"noemptyclassbody",level:3},{value:"NoEmptyFirstLineInMethodBlock",id:"noemptyfirstlineinmethodblock",level:3},{value:"NoLineBreakAfterElse",id:"nolinebreakafterelse",level:3},{value:"NoLineBreakBeforeAssignment",id:"nolinebreakbeforeassignment",level:3},{value:"NoMultipleSpaces",id:"nomultiplespaces",level:3},{value:"NoSemicolons",id:"nosemicolons",level:3},{value:"NoTrailingSpaces",id:"notrailingspaces",level:3},{value:"NoUnitReturn",id:"nounitreturn",level:3},{value:"NoUnusedImports",id:"nounusedimports",level:3},{value:"NoWildcardImports",id:"nowildcardimports",level:3},{value:"Configuration options:",id:"configuration-options-7",level:4},{value:"PackageName",id:"packagename",level:3},{value:"ParameterListWrapping",id:"parameterlistwrapping",level:3},{value:"Configuration options:",id:"configuration-options-8",level:4},{value:"SpacingAroundAngleBrackets",id:"spacingaroundanglebrackets",level:3},{value:"SpacingAroundColon",id:"spacingaroundcolon",level:3},{value:"SpacingAroundComma",id:"spacingaroundcomma",level:3},{value:"SpacingAroundCurly",id:"spacingaroundcurly",level:3},{value:"SpacingAroundDot",id:"spacingarounddot",level:3},{value:"SpacingAroundDoubleColon",id:"spacingarounddoublecolon",level:3},{value:"SpacingAroundKeyword",id:"spacingaroundkeyword",level:3},{value:"SpacingAroundOperators",id:"spacingaroundoperators",level:3},{value:"SpacingAroundParens",id:"spacingaroundparens",level:3},{value:"SpacingAroundRangeOperator",id:"spacingaroundrangeoperator",level:3},{value:"SpacingAroundUnaryOperator",id:"spacingaroundunaryoperator",level:3},{value:"SpacingBetweenDeclarationsWithAnnotations",id:"spacingbetweendeclarationswithannotations",level:3},{value:"SpacingBetweenDeclarationsWithComments",id:"spacingbetweendeclarationswithcomments",level:3},{value:"StringTemplate",id:"stringtemplate",level:3},{value:"TrailingComma",id:"trailingcomma",level:3},{value:"Configuration options:",id:"configuration-options-9",level:4},{value:"TypeArgumentListSpacing",id:"typeargumentlistspacing",level:3},{value:"UnnecessaryParenthesesBeforeTrailingLambda",id:"unnecessaryparenthesesbeforetrailinglambda",level:3},{value:"Wrapping",id:"wrapping",level:3},{value:"Configuration options:",id:"configuration-options-10",level:4}],m={toc:d};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This rule set provides wrappers for rules implemented by ktlint - ",(0,r.kt)("a",{parentName:"p",href:"https://ktlint.github.io/"},"https://ktlint.github.io/"),"."),(0,r.kt)("p",null,"Note: Issues reported by this rule set can only be suppressed on file level (",(0,r.kt)("inlineCode",{parentName:"p"},'@file:Suppress("detekt.rule")'),").\nNote: The formatting rule set is not included in the detekt-cli or gradle plugin."),(0,r.kt)("p",null,"To enable this rule set, add ",(0,r.kt)("inlineCode",{parentName:"p"},'detektPlugins "io.gitlab.arturbosch.detekt:detekt-formatting:$version"'),"\nto your gradle dependencies or reference the ",(0,r.kt)("inlineCode",{parentName:"p"},"detekt-formatting"),"-jar with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--plugins")," option\nin the command line interface."),(0,r.kt)("h3",{id:"annotationonseparateline"},"AnnotationOnSeparateLine"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"annotationspacing"},"AnnotationSpacing"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"argumentlistwrapping"},"ArgumentListWrapping"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"indentSize")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,r.kt)("p",{parentName:"li"},"indentation size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"maxLineLength")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"120"),") (android default: ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),")"),(0,r.kt)("p",{parentName:"li"},"maximum line length"))),(0,r.kt)("h3",{id:"blockcommentinitialstaralignment"},"BlockCommentInitialStarAlignment"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#experimental-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h3",{id:"chainwrapping"},"ChainWrapping"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"commentspacing"},"CommentSpacing"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"commentwrapping"},"CommentWrapping"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#experimental-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h4",{id:"configuration-options-1"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"indentSize")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,r.kt)("p",{parentName:"li"},"indentation size"))),(0,r.kt)("h3",{id:"discouragedcommentlocation"},"DiscouragedCommentLocation"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#experimental-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h3",{id:"enumentrynamecase"},"EnumEntryNameCase"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"filename"},"Filename"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,"This rules overlaps with ",(0,r.kt)("a",{parentName:"p",href:"https://detekt.dev/naming.html#matchingdeclarationname"},"naming",">","MatchingDeclarationName"),"\nfrom the standard rules, make sure to enable just one."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"finalnewline"},"FinalNewline"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,"This rules overlaps with ",(0,r.kt)("a",{parentName:"p",href:"https://detekt.dev/style.html#newlineatendoffile"},"style",">","NewLineAtEndOfFile"),"\nfrom the standard rules, make sure to enable just one. The pro of this rule is that it can auto-correct the issue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h4",{id:"configuration-options-2"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"insertFinalNewLine")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,r.kt)("p",{parentName:"li"},"report absence or presence of a newline"))),(0,r.kt)("h3",{id:"funkeywordspacing"},"FunKeywordSpacing"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#experimental-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h3",{id:"functiontypereferencespacing"},"FunctionTypeReferenceSpacing"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#experimental-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h3",{id:"importordering"},"ImportOrdering"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,"For defining import layout patterns see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint/blob/a6ca5b2edf95cc70a138a9470cfb6c4fd5d9d3ce/ktlint-ruleset-standard/src/main/kotlin/com/pinterest/ktlint/ruleset/standard/ImportOrderingRule.kt"},"KtLint Source Code")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.19.0"),(0,r.kt)("h4",{id:"configuration-options-3"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"layout")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'*,java.**,javax.**,kotlin.**,^'"),") (android default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'*'"),")"),(0,r.kt)("p",{parentName:"li"},"the import ordering layout"))),(0,r.kt)("h3",{id:"indentation"},"Indentation"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.19.0"),(0,r.kt)("h4",{id:"configuration-options-4"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"indentSize")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,r.kt)("p",{parentName:"li"},"indentation size")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("del",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"del"},"continuationIndentSize"))," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deprecated"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"continuationIndentSize")," is ignored by KtLint and will have no effect"),(0,r.kt)("p",{parentName:"li"},"continuation indentation size"))),(0,r.kt)("h3",{id:"kdocwrapping"},"KdocWrapping"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#experimental-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h4",{id:"configuration-options-5"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"indentSize")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,r.kt)("p",{parentName:"li"},"indentation size"))),(0,r.kt)("h3",{id:"maximumlinelength"},"MaximumLineLength"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,"This rules overlaps with ",(0,r.kt)("a",{parentName:"p",href:"https://detekt.dev/style.html#maxlinelength"},"style",">","MaxLineLength"),"\nfrom the standard rules, make sure to enable just one or keep them aligned. The pro of this rule is that it can\nauto-correct the issue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h4",{id:"configuration-options-6"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"maxLineLength")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"120"),") (android default: ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),")"),(0,r.kt)("p",{parentName:"li"},"maximum line length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"ignoreBackTickedIdentifier")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},"ignore back ticked identifier"))),(0,r.kt)("h3",{id:"modifierlistspacing"},"ModifierListSpacing"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#experimental-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h3",{id:"modifierordering"},"ModifierOrdering"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,"This rules overlaps with ",(0,r.kt)("a",{parentName:"p",href:"https://detekt.dev/style.html#modifierorder"},"style",">","ModifierOrder"),"\nfrom the standard rules, make sure to enable just one. The pro of this rule is that it can auto-correct the issue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"multilineifelse"},"MultiLineIfElse"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"noblanklinebeforerbrace"},"NoBlankLineBeforeRbrace"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"noblanklinesinchainedmethodcalls"},"NoBlankLinesInChainedMethodCalls"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://ktlint.github.io"},"ktlint-website")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"noconsecutiveblanklines"},"NoConsecutiveBlankLines"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"noemptyclassbody"},"NoEmptyClassBody"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"noemptyfirstlineinmethodblock"},"NoEmptyFirstLineInMethodBlock"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"nolinebreakafterelse"},"NoLineBreakAfterElse"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"nolinebreakbeforeassignment"},"NoLineBreakBeforeAssignment"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"nomultiplespaces"},"NoMultipleSpaces"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"nosemicolons"},"NoSemicolons"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"notrailingspaces"},"NoTrailingSpaces"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"nounitreturn"},"NoUnitReturn"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"nounusedimports"},"NoUnusedImports"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"nowildcardimports"},"NoWildcardImports"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h4",{id:"configuration-options-7"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"packagesToUseImportOnDemandProperty")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'java.util.*,kotlinx.android.synthetic.**'"),")"),(0,r.kt)("p",{parentName:"li"},"Defines allowed wildcard imports"))),(0,r.kt)("h3",{id:"packagename"},"PackageName"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"parameterlistwrapping"},"ParameterListWrapping"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h4",{id:"configuration-options-8"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"maxLineLength")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"120"),") (android default: ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),")"),(0,r.kt)("p",{parentName:"li"},"maximum line length")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("del",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"del"},"indentSize"))," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deprecated"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"indentSize")," is ignored by KtLint and will have no effect"),(0,r.kt)("p",{parentName:"li"},"indentation size"))),(0,r.kt)("h3",{id:"spacingaroundanglebrackets"},"SpacingAroundAngleBrackets"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"spacingaroundcolon"},"SpacingAroundColon"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"spacingaroundcomma"},"SpacingAroundComma"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"spacingaroundcurly"},"SpacingAroundCurly"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"spacingarounddot"},"SpacingAroundDot"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"spacingarounddoublecolon"},"SpacingAroundDoubleColon"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"spacingaroundkeyword"},"SpacingAroundKeyword"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"spacingaroundoperators"},"SpacingAroundOperators"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"spacingaroundparens"},"SpacingAroundParens"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"spacingaroundrangeoperator"},"SpacingAroundRangeOperator"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"spacingaroundunaryoperator"},"SpacingAroundUnaryOperator"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"spacingbetweendeclarationswithannotations"},"SpacingBetweenDeclarationsWithAnnotations"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"spacingbetweendeclarationswithcomments"},"SpacingBetweenDeclarationsWithComments"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#spacing"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.22.0"),(0,r.kt)("h3",{id:"stringtemplate"},"StringTemplate"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,r.kt)("h3",{id:"trailingcomma"},"TrailingComma"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h4",{id:"configuration-options-9"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"allowTrailingComma")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},"Defines whether a trailing comma (or no trailing comma) should be enforced on the defining side")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"allowTrailingCommaOnCallSite")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("p",{parentName:"li"},"Defines whether a trailing comma (or no trailing comma) should be enforced on the calling side"))),(0,r.kt)("h3",{id:"typeargumentlistspacing"},"TypeArgumentListSpacing"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#experimental-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h3",{id:"unnecessaryparenthesesbeforetrailinglambda"},"UnnecessaryParenthesesBeforeTrailingLambda"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#experimental-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,r.kt)("h3",{id:"wrapping"},"Wrapping"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint#standard-rules"},"ktlint-readme")," for documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.20.0"),(0,r.kt)("h4",{id:"configuration-options-10"},"Configuration options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"indentSize")," (default: ",(0,r.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,r.kt)("p",{parentName:"li"},"indentation size"))))}k.isMDXComponent=!0}}]);