!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function a(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){a(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e,t){a(2,arguments);var n=r(e),o=r(t),i=n.getTime()-o.getTime();return i<0?-1:i>0?1:i}function i(e,t){a(2,arguments);var n=r(e),o=r(t),i=n.getFullYear()-o.getFullYear(),u=n.getMonth()-o.getMonth();return 12*i+u}function u(e,t){a(2,arguments);var n=r(e),u=r(t),d=o(n,u),s=Math.abs(i(n,u));n.setMonth(n.getMonth()-d*s);var c=o(n,u)===-d,l=d*(s-c);return 0===l?0:l}function d(e,t){a(2,arguments);var n=r(e),o=r(t);return n.getTime()-o.getTime()}function s(e,t){a(2,arguments);var n=d(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}n.r(t);var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var m={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function f(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,i=r.width?String(r.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{var u=e.defaultWidth,d=r.width?String(r.width):e.defaultWidth;a=e.values[d]||e.values[u]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function p(e){return function(t,n){var a=String(t),r=n||{},o=r.width,i=o&&e.matchPatterns[o]||e.matchPatterns[e.defaultMatchWidth],u=a.match(i);if(!u)return null;var d,s=u[0],c=o&&e.parsePatterns[o]||e.parsePatterns[e.defaultParseWidth];return d="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(c,(function(e){return e.test(s)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(c,(function(e){return e.test(s)})),d=e.valueCallback?e.valueCallback(d):d,{value:d=r.valueCallback?r.valueCallback(d):d,rest:a.slice(s.length)}}}var g,v={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof c[e]?c[e]:1===t?c[e].one:c[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:m,formatRelative:function(e,t,n,a){return h[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:f({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:f({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:f({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(g={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(g.matchPattern);if(!r)return null;var o=r[0],i=n.match(g.parsePattern);if(!i)return null;var u=g.valueCallback?g.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:n.slice(o.length)}}),era:p({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:p({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:p({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:p({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:p({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function y(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}function b(e){return e.getTime()%6e4}function w(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());return t.setSeconds(0,0),6e4*n+(n>0?(6e4+b(t))%6e4:b(t))}function M(e,t,n){a(2,arguments);var i=n||{},d=i.locale||v;if(!d.formatDistance)throw new RangeError("locale must contain formatDistance property");var c=o(e,t);if(isNaN(c))throw new RangeError("Invalid time value");var l,m,h=y(i);h.addSuffix=Boolean(i.addSuffix),h.comparison=c,c>0?(l=r(t),m=r(e)):(l=r(e),m=r(t));var f,p=s(m,l),g=(w(m)-w(l))/1e3,b=Math.round((p-g)/60);if(b<2)return i.includeSeconds?p<5?d.formatDistance("lessThanXSeconds",5,h):p<10?d.formatDistance("lessThanXSeconds",10,h):p<20?d.formatDistance("lessThanXSeconds",20,h):p<40?d.formatDistance("halfAMinute",null,h):p<60?d.formatDistance("lessThanXMinutes",1,h):d.formatDistance("xMinutes",1,h):0===b?d.formatDistance("lessThanXMinutes",1,h):d.formatDistance("xMinutes",b,h);if(b<45)return d.formatDistance("xMinutes",b,h);if(b<90)return d.formatDistance("aboutXHours",1,h);if(b<1440){var M=Math.round(b/60);return d.formatDistance("aboutXHours",M,h)}if(b<2520)return d.formatDistance("xDays",1,h);if(b<43200){var S=Math.round(b/1440);return d.formatDistance("xDays",S,h)}if(b<86400)return f=Math.round(b/43200),d.formatDistance("aboutXMonths",f,h);if((f=u(m,l))<12){var C=Math.round(b/43200);return d.formatDistance("xMonths",C,h)}var j=f%12,D=Math.floor(f/12);return j<3?d.formatDistance("aboutXYears",D,h):j<9?d.formatDistance("overXYears",D,h):d.formatDistance("almostXYears",D+1,h)}class S{constructor(e,t,n,a){this.title=e,this.description=t,this.dueDate=n,this.priority=a}updateInfo(e,t,n,a){this.title=e,this.description=t,this.dueDate=n,this.priority=a}}class C{constructor(e,t){this.name=e,this.description=t,this.content={}}updateInfo(e,t){this.name=e,this.description=t}addItem(e){this.content[e.title]=e}}const j=(()=>{const e=document.querySelector(".project-container");return{createNewProject:(t,n)=>{let a=document.createElement("div");a.classList.add("project-card"),a.setAttribute("id",""+t),e.appendChild(a);let r=document.createElement("div"),o=document.createElement("div"),i=document.createElement("div");a.appendChild(r),a.appendChild(o),a.appendChild(i);let u=document.createElement("button"),d=document.createElement("i");d.classList.add("fas"),d.classList.add("fa-pen-square"),u.appendChild(d),r.appendChild(u);let s=document.createElement("h2"),c=document.createElement("p");s.textContent=t,c.textContent=n,r.appendChild(s),r.appendChild(c);let l=document.createElement("button"),m=document.createElement("i");l.classList.add("add-todo-btn"),m.classList.add("fas"),m.classList.add("fa-plus")},createNewTodo:(e,t,n,a,r)=>{let o=document.querySelector("#"+e).childNodes[1],i=document.createElement("div");i.classList.add("todo-item"),o.appendChild(i);let u=document.createElement("div");u.classList.add("todo-main");let d=document.createElement("div");d.classList.add("expand"),i.appendChild(u),i.appendChild(d);let s=document.createElement("input");s.setAttribute("type","checkbox"),s.setAttribute("name","done"),u.appendChild(s);let c=document.createElement("p");c.textContent=t;let l=document.createElement("p");l.textContent=n,u.appendChild(c),u.appendChild(l);let m=document.createElement("div");m.style.backgroundColor="high"==a?"red":"medium"==a?"yellow":"green",m.classList.add("priority"),u.appendChild(m),d.appendChild(document.createElement("br"));let h=document.createElement("p");h.textContent=r,d.appendChild(h);let f=document.createElement("button");d.appendChild(f);let p=document.createElement("button");d.appendChild(p);let g=document.createElement("i");g.classList.add("fas"),g.classList.add("fa-pen-square");let v=document.createElement("i");v.classList.add("fas"),v.classList.add("fa-trash-alt"),f.appendChild(g),p.appendChild(v)},clear:()=>{e.innerHTML=""}}})(),D=(()=>{const e={};return{addProject:t=>{e[t.name]=t},addTodo:(t,n)=>{e[t.name].addItem(n)},getContent:()=>e,removeProject:t=>{delete e[t]},removeTodo:(t,n)=>{delete e[t].content[n]}}})();let P=new C("Main","");D.addProject(P);document.querySelector("#new-proj-btn").addEventListener("click",e=>{let t,n=document.querySelector("#project-name-input"),a=document.querySelector("#project-description-input");t=new C(n.value,a.value);document.querySelector(".add-project-menu");D.addProject(t),console.log(D.getContent()),E()});function E(){j.clear();let e=D.getContent();console.log(e);let t=document.querySelector("#projects-select");t.innerHTML="";for(const[n,a]of Object.entries(e)){let e=document.createElement("option");t.appendChild(e),e.value=n,e.textContent=n,console.log(n,a.description),console.log(a.content),j.createNewProject(n,a.description);let r=a.content;Object.entries(r).forEach(e=>{console.log(n,e[1].title,e[1].dueDate,e[1].priority,e[1].description),j.createNewTodo(n,e[1].title,e[1].dueDate,e[1].priority,e[1].description)})}}document.querySelector("#new-todo-btn").addEventListener("click",e=>{let t,n=document.querySelector("#projects-select"),r=document.querySelector("#todo-name-input"),o=document.querySelector("#todo-description-input"),i=document.querySelector("#todo-date-input"),u=document.querySelector("#priority-select"),d=n.value,s=r.value,c=o.value,l=i.value,m=u.value,h=D.getContent()[d];console.log(h),l=new Date(l),l=function(e,t){return a(1,arguments),M(e,Date.now(),t)}(new Date(l),{addSuffix:!0}),t=new S(s,c,l,m),D.addTodo(h,t),console.log(t),E()}),E()}]);