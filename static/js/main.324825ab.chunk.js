(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(25)},15:function(e,n,t){},17:function(e,n,t){},19:function(e,n,t){"use strict";(function(e){var n=t(7);e.createGroups=function(e){var t=e.replace(/[\r\n]+/g,"\n").split("\n");for(var r in t)console.log(t[r]);!function(e){for(var t,r,a=e.length;a;)r=Math.floor(Math.random()*(Object(n.a)("m"),a--)),t=e[a],e[a]=e[r],e[r]=t}(t),console.log(t);for(var a={},o=t.length,s=0,c=1;s<o;s++,c++){a[t[s]]||(a[t[s]]={}),a[t[s]].reviews=[];var i=[t[c%o],t[(c+1)%o],t[(c+2)%o]];a[t[s]].reviews=a[t[s]].reviews.concat(i);for(var l=0;l<3;l++)a[t[(c+l)%o]]||(a[t[(c+l)%o]]={}),a[t[(c+l)%o]].reviewed_by||(a[t[(c+l)%o]].reviewed_by=[]),a[t[(c+l)%o]].reviewed_by.push(t[s])}console.log(a);var u=1,v=[];return Object.keys(a).sort().forEach(function(e){v.push(u+". "+e+" reviews: "),u++,a[e].reviews.forEach(function(e){return v.push("| "+e+" |")}),v.push("\nLooks for reviews from : "),a[e].reviewed_by.forEach(function(e){return v.push("| "+e+" |")}),v.push("\n-- -- -- -- -- -- -- -- -- --\n\n")}),console.log(v),v.join("")}}).call(this,t(20))},25:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(2),s=t.n(o),c=(t(15),t(3)),i=t(4),l=t(5),u=t(8),v=t(6),h=t(9);t(17),t(19);function f(e){var n=e.replace(/[\r\n]+/g,"\n").split("\n");for(var t in n)console.log(n[t]);!function(e){for(var n,t,r=e.length;r;)t=Math.floor(Math.random()*r--),n=e[r],e[r]=e[t],e[t]=n}(n),console.log(n);for(var r={},a=n.length,o=0,s=1;o<a;o++,s++){r[n[o]]||(r[n[o]]={}),r[n[o]].reviews=[];var c=[n[s%a],n[(s+1)%a],n[(s+2)%a]];r[n[o]].reviews=r[n[o]].reviews.concat(c);for(var i=0;i<3;i++)r[n[(s+i)%a]]||(r[n[(s+i)%a]]={}),r[n[(s+i)%a]].reviewed_by||(r[n[(s+i)%a]].reviewed_by=[]),r[n[(s+i)%a]].reviewed_by.push(n[o])}console.log(r);var l=1,u=[];return Object.keys(r).sort().forEach(function(e){u.push(l+". "+e+" reviews: "),l++,r[e].reviews.forEach(function(e){return u.push("| "+e+" |")}),u.push("\nLooks for reviews from : "),r[e].reviewed_by.forEach(function(e){return u.push("| "+e+" |")}),u.push("\n-- -- -- -- -- -- -- -- -- --\n\n")}),console.log(u),u.join("")}var m=function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(u.a)(this,Object(v.a)(n).call(this))).state={text:"\n      output shown here\n      "},e.pug="enter names here",e}return Object(h.a)(n,e),Object(l.a)(n,[{key:"onChange",value:function(e){var n=f(e.target.value);this.pug=e.target.value,this.setState(Object(c.a)({},e.target.name,n))}},{key:"render",value:function(){var e=this.pug,n=this.state.text;return a.a.createElement(r.Fragment,null,a.a.createElement("div",{className:"work-area"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-md-6"},a.a.createElement("h2",{className:"editable"},"Input (editable field)"),a.a.createElement("textarea",{rows:"30",cols:"60",onChange:this.onChange.bind(this),name:"text",value:e})),a.a.createElement("div",{className:"col-md-6"},a.a.createElement("h2",{className:"non-editable"},"Output"),a.a.createElement("textarea",{rows:"30",cols:"60",readOnly:!0,value:n}))))))}}]),n}(r.Component);t(21),t(23);s.a.render(a.a.createElement(m,null),document.getElementById("root"))}},[[10,2,1]]]);
//# sourceMappingURL=main.324825ab.chunk.js.map