(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e54f1cb"],{"0f60":function(e,t,r){},"115f":function(e,t,r){"use strict";var a=r("fcc2"),n=r.n(a);n.a},5319:function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),c=r("7b0b"),i=r("50c4"),o=r("a691"),s=r("1d80"),l=r("8aa5"),u=r("14c3"),f=Math.max,d=Math.min,v=Math.floor,g=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var x=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=a.REPLACE_KEEPS_$0,_=x?"$":"$0";return[function(r,a){var n=s(this),c=void 0==r?void 0:r[e];return void 0!==c?c.call(r,n,a):t.call(String(n),r,a)},function(e,a){if(!x&&b||"string"===typeof a&&-1===a.indexOf(_)){var c=r(t,e,this,a);if(c.done)return c.value}var s=n(e),v=String(this),g="function"===typeof a;g||(a=String(a));var h=s.global;if(h){var m=s.unicode;s.lastIndex=0}var E=[];while(1){var $=u(s,v);if(null===$)break;if(E.push($),!h)break;var C=String($[0]);""===C&&(s.lastIndex=l(v,i(s.lastIndex),m))}for(var w="",S=0,k=0;k<E.length;k++){$=E[k];for(var A=String($[0]),T=f(d(o($.index),v.length),0),I=[],P=1;P<$.length;P++)I.push(p($[P]));var O=$.groups;if(g){var R=[A].concat(I,T,v);void 0!==O&&R.push(O);var U=String(a.apply(void 0,R))}else U=y(A,v,T,I,O,a);T>=S&&(w+=v.slice(S,T)+U,S=T+A.length)}return w+v.slice(S)}];function y(e,r,a,n,i,o){var s=a+e.length,l=n.length,u=h;return void 0!==i&&(i=c(i),u=g),t.call(o,u,(function(t,c){var o;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(s);case"<":o=i[c.slice(1,-1)];break;default:var u=+c;if(0===u)return t;if(u>l){var f=v(u/10);return 0===f?t:f<=l?void 0===n[f-1]?c.charAt(1):n[f-1]+c.charAt(1):t}o=n[u-1]}return void 0===o?"":o}))}}))},"58c2":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"padding-view",attrs:{id:"categories"}},[r("h1",[e._v(e._s(e.$t("views.categories.title"))+"/")]),r("div",{staticClass:"items-wrapper flex flex-center"},[e.categories.length<1?r("loader"):e._e(),e._l(e.categories,(function(e){return r("category-box",{key:e.id,attrs:{category:e}})}))],2)])},n=[],c=r("2b0e"),i=r("2ff2"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"category-box flex flex-center"},[r("button",{staticClass:"clicker",on:{click:function(t){return e.goToCategory()}}},[r("div",{staticClass:"description flex flex-center flex-column"},[r("h3",[e._v(e._s(e.category.cat_name))])])])])},s=[],l=(r("ac1f"),r("5319"),c["a"].extend({name:"category-box",props:{category:{type:Object}},methods:{goToCategory:function(){var e=this.category.cat_name.replace(/\s/g,"+");this.$router.push({name:this.$i18n.locale+"-category-details",params:{catName:e}})}}})),u=l,f=(r("115f"),r("2877")),d=Object(f["a"])(u,o,s,!1,null,"05366ca0",null),v=d.exports,g=r("dc4b"),h=c["a"].extend({name:"categories",components:{Loader:g["a"],CategoryBox:v},data:function(){return{categories:Array()}},created:function(){var e=this;i["a"].getCategories().then((function(t){return e.categories=t}))}}),p=h,x=(r("cca8"),Object(f["a"])(p,a,n,!1,null,"ded54d2a",null));t["default"]=x.exports},cca8:function(e,t,r){"use strict";var a=r("0f60"),n=r.n(a);n.a},fcc2:function(e,t,r){}}]);
//# sourceMappingURL=chunk-2e54f1cb.060d4449.js.map