(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(t,e,a){t.exports={list:"Statistics_list__3AAWC",title:"Statistics_title__3pw5h",items:"Statistics_items__WcB3U",goodStats:"Statistics_goodStats__Q6wrv",badStats:"Statistics_badStats__1xwZ-"}},function(t,e,a){t.exports={list:"FeedbackOptions_list__3Nl2-",item:"FeedbackOptions_item__2N6nk",button:"FeedbackOptions_button__2GUoR"}},,,function(t,e,a){t.exports={section:"section_section__3NLiS",title:"section_title__UaCav"}},,,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var i=a(3),c=a.n(i),n=a(6),s=a.n(n),o=(a(15),a(7)),l=a(8),r=a(10),d=a(9),u=(a(16),a(5)),b=a.n(u),j=a(0);function h(t){var e=t.title,a=t.children;return Object(j.jsxs)("section",{className:b.a.section,children:[e&&Object(j.jsxs)("h2",{className:b.a.title,children:[" ",e," "]}),a]})}var m=a(2),O=a.n(m),_=function(t){var e=t.options,a=e.clickGood,i=e.clickNeutral,c=e.clickBad;return Object(j.jsxs)("ul",{className:O.a.list,children:[Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)("button",{className:O.a.button,onClick:a,children:"Good"})}),Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)("button",{className:O.a.button,onClick:i,children:"Neutral"})}),Object(j.jsx)("li",{className:O.a.item,children:Object(j.jsx)("button",{className:O.a.button,onClick:c,children:"Bad"})})]})},f=a(1),x=a.n(f),k=function(t){var e=t.good,a=t.neutral,i=t.bad,c=t.total,n=t.positivePercentage;return Object(j.jsxs)("ul",{className:x.a.list,children:[Object(j.jsx)("h2",{className:x.a.title,children:"Statistics"}),Object(j.jsxs)("li",{className:x.a.items,children:["Good:",e]}),Object(j.jsxs)("li",{className:x.a.items,children:["Neutral: ",a," "]}),Object(j.jsxs)("li",{className:x.a.items,children:["Bad: ",i," "]}),Object(j.jsxs)("li",{className:x.a.items,children:["Total:",c]}),Object(j.jsxs)("li",{className:x.a.items,children:["Positive feedback: ",Object(j.jsxs)("span",{className:n>50?x.a.goodStats:x.a.badStats,children:[" ",n," %"]})]})]})},p=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={good:t.props.initialGood,neutral:t.props.initialNeutral,bad:t.props.initialBad},t.clickGood=function(){t.setState((function(t){return{good:t.good+1}}))},t.clickNeutral=function(){t.setState((function(t){return{neutral:t.neutral+1}}))},t.clickBad=function(){t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(t.state.good/t.countTotalFeedback()*100)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,i=t.bad;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{title:"Please leave feedback",children:Object(j.jsx)(_,{options:this,onLeaveFeedback:this.state})}),this.countTotalFeedback()>=1&&Object(j.jsx)(h,{children:Object(j.jsx)(k,{good:e,neutral:a,bad:i,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),a}(i.Component);p.defaultProps={initialGood:0,initialBad:0,initialNeutral:0};var N=p,g=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(e){var a=e.getCLS,i=e.getFID,c=e.getFCP,n=e.getLCP,s=e.getTTFB;a(t),i(t),c(t),n(t),s(t)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.1c29242b.chunk.js.map