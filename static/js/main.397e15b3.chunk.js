(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{17:function(e,t,c){"use strict";c.r(t);var n,r=c(1),a=c.n(r),s=c(4),i=c.n(s),j=c(2),o=c(0),b=function(e){var t=e.message;return Object(o.jsx)("p",{children:t})},d=function(e){var t=e.good,c=e.neutral,n=e.bad,r=e.total,a=e.positivePercentage;return Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Good:",Object(o.jsx)("span",{children:t})]}),Object(o.jsxs)("li",{children:["Neutral:",Object(o.jsx)("span",{children:c})]}),Object(o.jsxs)("li",{children:["Bad:",Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("li",{children:["Total:",Object(o.jsx)("span",{children:r})]}),Object(o.jsxs)("li",{children:["Positive feedback:",Object(o.jsxs)("span",{children:[a,"%"]})]})]})},l=c(5),u=c(7).a.button(n||(n=Object(l.a)(["\n  margin-right: 10px;\n"]))),h=function(e){var t=e.options,c=e.onLeaveFeedback;return t.map((function(e){return Object(o.jsx)(u,{type:"button",onClick:function(){return c(e)},children:e},e)}))},O=function(e){var t=e.title,c=e.children;return Object(o.jsxs)("section",{children:[Object(o.jsx)("h1",{children:t}),c]})},x=function(){var e=Object(r.useState)(0),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(0),s=Object(j.a)(a,2),i=s[0],l=s[1],u=Object(r.useState)(0),x=Object(j.a)(u,2),p=x[0],f=x[1],g=function(){return c+i+p};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(O,{title:"Please leave feedback",children:Object(o.jsx)(h,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":n(c+1);break;case"neutral":l(i+1);break;case"bad":f(p+1);break;default:return}}})}),g?Object(o.jsx)(O,{title:"Statistics",children:Object(o.jsx)(d,{good:c,neutral:i,bad:p,total:g(),positivePercentage:function(){var e=Math.round(100*c/g());return e||"0"}()})}):Object(o.jsx)(b,{message:"No feedback given"})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.397e15b3.chunk.js.map