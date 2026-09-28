(()=>{function nr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ka={duration:.5,overwrite:!1,delay:0},oh,fn,Le,_i=1e8,Te=1/_i,Ku=Math.PI*2,N_=Ku/4,U_=0,Zd=Math.sqrt,F_=Math.cos,O_=Math.sin,en=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},rr=function(t){return typeof t=="number"},ul=function(t){return typeof t=="undefined"},Vi=function(t){return typeof t=="object"},Xn=function(t){return t!==!1},lh=function(){return typeof window!="undefined"},el=function(t){return Ve(t)||en(t)},Jd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},yn=Array.isArray,B_=/random\([^)]+\)/g,z_=/,\s*/g,zd=/(?:-?\.?\d|\.)+/gi,ch=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,uh=/[+-]=-?[.\d]+/,k_=/[^,'"\[\]\s]+/gi,V_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,zi,Qu,hh,Qn={},sl={},$d,Kd=function(t){return(sl=Os(t,Qn))&&Sn},hl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Va=function(t,e){return!e&&console.warn(t)},Qd=function(t,e){return t&&(Qn[t]=e)&&sl&&(sl[t]=e)||Qn},Ga=function(){return 0},G_={suppressEvents:!0,isStart:!0,kill:!1},nl={suppressEvents:!0,kill:!1},H_={suppressEvents:!0},fh={},Tr=[],ju={},jd,Hn={},Xu={},kd=30,il=[],dh="",ph=function(t){var e=t[0],n,i;if(Vi(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=il.length;i--&&!il[i].targetTest(e););n=il[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new xh(t[i],n)))||t.splice(i,1);return t},wr=function(t){return t._gsap||ph(xi(t))[0]._gsap},mh=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():ul(n)&&t.getAttribute&&t.getAttribute(e)||n},Dn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Ne=function(t){return Math.round(t*1e7)/1e7||0},ss=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},W_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},al=function(){var t=Tr.length,e=Tr.slice(0),n,i;for(ju={},Tr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gh=function(t){return!!(t._initted||t._startAt||t.add)},tp=function(t,e,n,i){Tr.length&&!fn&&al(),t.render(e,n,i||!!(fn&&e<0&&gh(t))),Tr.length&&!fn&&al()},ep=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(k_).length<2?e:en(t)?t.trim():t},np=function(t){return t},jn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},X_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Os=function(t,e){for(var n in e)t[n]=e[n];return t},Vd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Vi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ol=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Oa=function(t){var e=t.parent||Ue,n=t.keyframes?X_(yn(t.keyframes)):jn;if(Xn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Y_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ip=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},fl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ar=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},es=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},q_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},th=function(t,e,n,i){return t._startAt&&(fn?t._startAt.revert(nl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Z_=function r(t){return!t||t._ts&&r(t.parent)},Gd=function(t){return t._repeat?Bs(t._tTime,t=t.duration()+t._rDelay)*t:0},Bs=function(t,e){var n=Math.floor(t=Ne(t/e));return t&&n===t?n-1:n},ll=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},dl=function(t){return t._end=Ne(t._start+(t._tDur/Math.abs(t._ts||t._rts||Te)||0))},pl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ne(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),dl(t),n._dirty||es(n,t)),t},rp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ll(t.rawTime(),e),(!e._dur||Xa(0,e.totalDuration(),n)-e._tTime>Te)&&e.render(n,!0)),es(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Te}},ki=function(t,e,n,i){return e.parent&&Ar(e),e._start=Ne((rr(n)?n:n||t!==Ue?gi(t,n,e):t._time)+e._delay),e._end=Ne(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ip(t,e,"_first","_last",t._sort?"_start":0),eh(e)||(t._recent=e),i||rp(t,e),t._ts<0&&pl(t,t._tTime),t},sp=function(t,e){return(Qn.ScrollTrigger||hl("scrollTrigger",e))&&Qn.ScrollTrigger.create(e,t)},ap=function(t,e,n,i,s){if(Sh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&jd!==Wn.frame)return Tr.push(t),t._lazy=[s,i],1},J_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},eh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},$_=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&J_(t)&&!(!t._initted&&eh(t))||(t._ts<0||t._dp._ts<0)&&!eh(t))?0:1,o=t._rDelay,l=0,c,u,d;if(o&&t._repeat&&(l=Xa(0,t._tDur,e),u=Bs(l,o),t._yoyo&&u&1&&(a=1-a),u!==Bs(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||fn||i||t._zTime===Te||!e&&t._zTime){if(!t._initted&&ap(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Te:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&th(t,e,n,!0),t._onUpdate&&!n&&Kn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Kn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ar(t,1),!n&&!fn&&(Kn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},K_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},zs=function(t,e,n,i){var s=t._repeat,a=Ne(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Ne(a*(s+1)+t._rDelay*s):a,o>0&&!i&&pl(t,t._tTime=t._tDur*o),t.parent&&dl(t),n||es(t.parent,t),t},Hd=function(t){return t instanceof vn?es(t):zs(t,t._dur)},Q_={_start:0,endTime:Ga,totalDuration:Ga},gi=function r(t,e,n){var i=t.labels,s=t._recent||Q_,a=t.duration()>=_i?s.endTime(!1):t._dur,o,l,c;return en(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(yn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Ba=function(t,e,n){var i=rr(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Xn(l.vars.inherit)&&l.parent;a.immediateRender=Xn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new qe(e[0],a,e[s+1])},Er=function(t,e){return t||t===0?e(t):e},Xa=function(t,e,n){return n<t?t:n>e?e:n},dn=function(t,e){return!en(t)||!(e=V_.exec(t))?"":e[1]},j_=function(t,e,n){return Er(n,function(i){return Xa(t,e,i)})},nh=[].slice,op=function(t,e){return t&&Vi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Vi(t[0]))&&!t.nodeType&&t!==zi},t0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return en(i)&&!e||op(i,1)?(s=n).push.apply(s,xi(i)):n.push(i)})||n},xi=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):en(t)&&!n&&(Qu||!ks())?nh.call((e||hh).querySelectorAll(t),0):yn(t)?t0(t,n):op(t)?nh.call(t,0):t?[t]:[]},ih=function(t){return t=xi(t)[0]||Va("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return xi(e,n.querySelectorAll?n:n===t?Va("Invalid scope")||hh.createElement("div"):t)}},lp=function(t){return t.sort(function(){return .5-Math.random()})},cp=function(t){if(Ve(t))return t;var e=Vi(t)?t:{each:t},n=ns(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,d=i;return en(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||e).length,p=a[_],m,b,E,y,S,w,A,v,T;if(!p){if(T=e.grid==="auto"?0:(e.grid||[1,_i])[1],!T){for(A=-_i;A<(A=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(p=a[_]=[],m=l?Math.min(T,_)*u-.5:i%T,b=T===_i?0:l?_*d/T-.5:i/T|0,A=0,v=_i,w=0;w<_;w++)E=w%T-m,y=b-(w/T|0),p[w]=S=c?Math.abs(c==="y"?y:E):Zd(E*E+y*y),S>A&&(A=S),S<v&&(v=S);i==="random"&&lp(p),p.max=A-v,p.min=v,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=dn(e.amount||e.each)||0,n=n&&_<0?d0(n):n}return _=(p[h]-p.min)/p.max||0,Ne(p.b+(n?n(_):_)*p.v)+p.u}},rh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ne(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(rr(n)?0:dn(n))}},up=function(t,e){var n=yn(t),i,s;return!n&&Vi(t)&&(i=n=t.radius||_i,t.values?(t=xi(t.values),(s=!rr(t[0]))&&(i*=i)):t=rh(t.increment)),Er(e,n?Ve(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=_i,u=0,d=t.length,h,f;d--;)s?(h=t[d].x-o,f=t[d].y-l,h=h*h+f*f):h=Math.abs(t[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?t[u]:a,s||u===a||rr(a)?u:u+dn(a)}:rh(t))},hp=function(t,e,n,i){return Er(yn(t)?!e:n===!0?!!(n=0):!i,function(){return yn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},e0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},n0=function(t,e){return function(n){return t(parseFloat(n))+(e||dn(n))}},i0=function(t,e,n){return dp(t,e,0,1,n)},fp=function(t,e,n){return Er(n,function(i){return t[~~e(i)]})},r0=function r(t,e,n){var i=e-t;return yn(t)?fp(t,r(0,t.length),e):Er(n,function(s){return(i+(s-t)%i)%i+t})},s0=function r(t,e,n){var i=e-t,s=i*2;return yn(t)?fp(t,r(0,t.length-1),e):Er(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Vs=function(t){return t.replace(B_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(z_);return hp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},dp=function(t,e,n,i,s){var a=e-t,o=i-n;return Er(s,function(l){return n+((l-t)/a*o||0)})},a0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=en(t),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(yn(t)&&!yn(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(r(t[c-1],t[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else i||(t=Os(yn(t)?[]:{},t));if(!u){for(l in e)vh.call(o,t,l,"get",e[l]);s=function(g){return Th(g,o)||(a?t.p:t)}}}return Er(n,s)},Wd=function(t,e,n){var i=t.labels,s=_i,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Kn=function(t,e,n){var i=t.vars,s=i[e],a=Le,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Tr.length&&al(),o&&(Le=o),u=l?s.apply(c,l):s.call(c),Le=a,u},Ua=function(t){return Ar(t),t.scrollTrigger&&t.scrollTrigger.kill(!!fn),t.progress()<1&&Kn(t,"onInterrupt"),t},Fs,pp=[],mp=function(t){if(t)if(t=!t.name&&t.default||t,lh()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ga,render:Th,add:vh,kill:b0,modifier:M0,rawVars:0},a={targetTest:0,get:0,getSetter:ml,aliases:{},register:0};if(ks(),t!==i){if(Hn[e])return;jn(i,jn(ol(t,s),a)),Os(i.prototype,Os(s,ol(t,a))),Hn[i.prop=e]=i,t.targetTest&&(il.push(i),fh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qd(e,i),t.register&&t.register(Sn,i,Nn)}else pp.push(t)},be=255,Fa={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},Yu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},gp=function(t,e,n){var i=t?rr(t)?[t>>16,t>>8&be,t&be]:0:Fa.black,s,a,o,l,c,u,d,h,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Fa[t])i=Fa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&be,i&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(zd),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Yu(l+1/3,s,a),i[1]=Yu(l,s,a),i[2]=Yu(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(ch),n&&i.length<4&&(i[3]=1),i}else i=t.match(zd)||Fa.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/be,a=i[1]/be,o=i[2]/be,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},_p=function(t){var e=[],n=[],i=-1;return t.split(ir).forEach(function(s){var a=s.match(rs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Xd=function(t,e,n){var i="",s=(t+i).match(ir),a=e?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=gp(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=_p(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(ir,"1").split(rs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(ir),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Fa)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),o0=/hsl[a]?\(/,_h=function(t){var e=t.join(" "),n;if(ir.lastIndex=0,ir.test(e))return n=o0.test(e),t[1]=Xd(t[1],n),t[0]=Xd(t[0],n,_p(t[1])),!0},Ha,Wn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function _(p){var m=r()-i,b=p===!0,E,y,S,w;if((m>t||m<0)&&(n+=m-e),i+=m,S=i-n,E=S-a,(E>0||b)&&(w=++d.frame,h=S-d.time*1e3,d.time=S=S/1e3,a+=E+(E>=s?4:s-E),y=1),b||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](S,h,w,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){$d&&(!Qu&&lh()&&(zi=Qu=window,hh=zi.document||{},Qn.gsap=Sn,(zi.gsapVersions||(zi.gsapVersions=[])).push(Sn.version),Kd(sl||zi.GreenSockGlobals||!zi.gsap&&zi||{}),pp.forEach(mp)),u=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Ha=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ha=0,c=Ga},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,b){var E=m?function(y,S,w,A){p(y,S,w,A),d.remove(E)}:p;return d.remove(p),o[b?"unshift":"push"](E),ks(),E},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),ks=function(){return!Ha&&Wn.wake()},le={},l0=/^[\d.\-M][\d.\-,\s]/,c0=/["']/g,u0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(c0,"").trim():+c,i=l.substr(o+1).trim();return e},h0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},f0=function(t){var e=(t+"").split("("),n=le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[u0(e[1])]:h0(t).split(",").map(ep)):le._CE&&l0.test(t)?le._CE("",t):n},d0=function(t){return function(e){return 1-t(1-e)}},ns=function(t,e){return t&&(Ve(t)?t:le[t]||f0(t))||e},as=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Dn(t,function(o){le[o]=Qn[o]=s,le[a=o.toLowerCase()]=n;for(var l in s)le[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=le[o+"."+l]=s[l]}),s},xp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},qu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Ku*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*O_((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:xp(o);return s=Ku/s,l.config=function(c,u){return r(t,c,u)},l},Zu=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:xp(n);return i.config=function(s){return r(t,s)},i};Dn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;as(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});le.Linear.easeNone=le.none=le.Linear.easeIn;as("Elastic",qu("in"),qu("out"),qu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};as("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);as("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});as("Circ",function(r){return-(Zd(1-r*r)-1)});as("Sine",function(r){return r===1?1:-F_(r*N_)+1});as("Back",Zu("in"),Zu("out"),Zu());le.SteppedEase=le.steps=Qn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Te;return function(o){return((i*Xa(0,a,o)|0)+s)*n}}};ka.ease=le["quad.out"];Dn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return dh+=r+","+r+"Params,"});var xh=function(t,e){this.id=U_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:mh,this.set=e?e.getSetter:ml},Wa=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,zs(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),Ha||Wn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(pl(this,n),!s._dp||s.parent||rp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ki(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Te||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),tp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Bs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Te?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ll(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Te?0:this._rts,this.totalTime(Xa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),dl(this),q_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Te&&(this._tTime-=Te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ne(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ki(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ll(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=H_);var i=fn;return fn=n,gh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Hd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Hd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(gi(this,n),Xn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Xn(i)),this._dur||(this._zTime=-Te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Te)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ve(n)?n:np,l=function(){var u=i.then;i.then=null,s&&s(),Ve(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ua(this)},r})();jn(Wa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Te,_prom:0,_ps:!1,_rts:1});var vn=(function(r){qd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Xn(n.sortChildren),Ue&&ki(n.parent||Ue,nr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sp(nr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Ba(0,arguments,this),this},e.from=function(i,s,a){return Ba(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Ba(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Oa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(i,s,gi(this,a),1),this},e.call=function(i,s,a){return ki(this,qe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new qe(i,a,gi(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Oa(a).immediateRender=Xn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Oa(o).immediateRender=Xn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ne(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,g,_,p,m,b,E,y,S,w,A;if(this!==Ue&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,E=this._ts,m=!E,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Ne(u%p),u===l?(_=this._repeat,h=c):(S=Ne(u/p),_=~~S,_&&_===S&&(h=c,_--),h>c&&(h=c)),S=Bs(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),w&&_&1&&(h=c-h,A=1),_!==S&&!this._lock){var v=w&&S&1,T=v===(w&&_&1);if(_<S&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Ne(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=K_(this,Ne(o),Ne(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!S&&(Kn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){b=0,g&&(u+=this._zTime=-Te);break}}f=g}else{f=this._last;for(var C=i<0?i:h;f;){if(g=f._prev,(f._act||C<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||fn&&gh(f)),h!==this._time||!this._ts&&!m){b=0,g&&(u+=this._zTime=C?-Te:Te);break}}f=g}}if(b&&!s&&(this.pause(),b.render(h>=o?0:-Te)._zTime=h>=o?1:-1,this._ts))return this._start=y,dl(this),this.render(i,s,a);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ar(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(rr(s)||(s=gi(this,s,i)),!(i instanceof Wa)){if(yn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(en(i))return this.addLabel(i,s);if(Ve(i))i=qe.delayedCall(0,i);else return this}return this!==i?ki(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-_i);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof qe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return en(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&fl(this,i),i===this._recent&&(this._recent=this._last),es(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ne(Wn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=gi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=qe.delayedCall(0,s||Ga,a);return o.data="isPause",this._hasPause=1,ki(this,o,gi(this,i))},e.removePause=function(i){var s=this._first;for(i=gi(this,i);s;)s._start===i&&s.data==="isPause"&&Ar(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)br!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=xi(i),l=this._first,c=rr(s),u;l;)l instanceof qe?W_(l._targets,o)&&(c?(!br||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=gi(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=qe.to(a,jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Te,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&zs(g,p,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,jn({startAt:{time:gi(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Wd(this,gi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Wd(this,gi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Te)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ne(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return es(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=_i,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ki(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ne(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;zs(a,a===Ue&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ue._ts&&(tp(Ue,ll(i,Ue)),jd=Wn.frame),Wn.frame>=kd){kd+=Yn.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&Yn.autoSleep&&Wn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Wn.sleep()}}},t})(Wa);jn(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var p0=function(t,e,n,i,s,a,o){var l=new Nn(this._pt,t,e,0,1,bh,null,s),c=0,u=0,d,h,f,g,_,p,m,b;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Vs(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),h=n.match(Wu)||[];d=Wu.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?ss(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=Wu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(uh.test(i)||m)&&(l.e=0),this._pt=l,l},vh=function(t,e,n,i,s,a,o,l,c,u){Ve(i)&&(i=i(s||0,t,a));var d=t[e],h=n!=="get"?n:Ve(d)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ve(d)?c?v0:Sp:Mh,g;if(en(i)&&(~i.indexOf("random(")&&(i=Vs(i)),i.charAt(1)==="="&&(g=ss(h,i)+(dn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||sh)return!isNaN(h*i)&&i!==""?(g=new Nn(this._pt,t,e,+h||0,i-(h||0),typeof d=="boolean"?S0:Mp,0,f),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&hl(e,i),p0.call(this,t,e,h,i,f,l||Yn.stringFilter,c))},m0=function(t,e,n,i,s){if(Ve(t)&&(t=za(t,s,e,n,i)),!Vi(t)||t.style&&t.nodeType||yn(t)||Jd(t))return en(t)?za(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=za(t[o],s,e,n,i);return a},yh=function(t,e,n,i,s,a){var o,l,c,u;if(Hn[t]&&(o=new Hn[t]).init(s,o.rawVars?e[t]:m0(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Nn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Fs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},br,sh,Sh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,b=m&&m.data==="nested"?m.vars.targets:p,E=t._overwrite==="auto"&&!oh,y=t.timeline,S=i.easeReverse||d,w,A,v,T,C,D,L,F,I,B,X,k,K;if(y&&(!h||!s)&&(s="none"),t._ease=ns(s,ka.ease),t._rEase=S&&(ns(S)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||h&&!i.stagger){if(F=p[0]?wr(p[0]).harness:0,k=F&&i[F.prop],w=ol(i,fh),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?nl:G_),_._lazy=0),a){if(Ar(t._startAt=qe.set(p,jn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Xn(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn||!o&&!f)&&t._startAt.revert(nl),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),v=jn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Xn(l),immediateRender:o,stagger:0,parent:m},w),k&&(v[F.prop]=k),Ar(t._startAt=qe.set(p,v)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(fn?t._startAt.revert(nl):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Te,Te);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Xn(l)||l&&!g,A=0;A<p.length;A++){if(C=p[A],L=C._gsap||ph(p)[A]._gsap,t._ptLookup[A]=B={},ju[L.id]&&Tr.length&&al(),X=b===p?A:b.indexOf(C),F&&(I=new F).init(C,k||w,t,X,b)!==!1&&(t._pt=T=new Nn(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Y){B[Y]=T}),I.priority&&(D=1)),!F||k)for(v in w)Hn[v]&&(I=yh(v,w,t,X,C,b))?I.priority&&(D=1):B[v]=T=vh.call(t,C,v,"get",w[v],X,b,0,i.stringFilter);t._op&&t._op[A]&&t.kill(C,t._op[A]),E&&t._pt&&(br=t,Ue.killTweensOf(C,B,t.globalTime(e)),K=!t.parent,br=0),t._pt&&l&&(ju[L.id]=1)}D&&wh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!K,h&&e<=0&&y.render(_i,!0,!0)},g0=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return sh=1,t.vars[e]="+=0",Sh(t,o),sh=0,l?Va(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Ge(n)+dn(d.e)),d.b&&(d.b=u.s+dn(d.b))},_0=function(t,e){var n=t[0]?wr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Os({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},x0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(yn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},za=function(t,e,n,i,s){return Ve(t)?t.call(e,n,i,s):en(t)&&~t.indexOf("random(")?Vs(t):t},vp=dh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",yp={};Dn(vp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return yp[r]=1});var qe=(function(r){qd(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Oa(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Ue,b=(yn(n)||Jd(n)?rr(n[0]):"length"in i)?[n]:xi(n),E,y,S,w,A,v,T,C;if(o._targets=b.length?ph(b):Va("GSAP target "+n+" not found. https://gsap.com",!Yn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||el(c)||el(u)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(E=o.timeline=new vn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:b}),E.kill(),E.parent=E._dp=nr(o),E._start=0,h||el(c)||el(u)){if(w=b.length,T=h&&cp(h),Vi(h))for(A in h)~vp.indexOf(A)&&(C||(C={}),C[A]=h[A]);for(y=0;y<w;y++)S=ol(i,yp),S.stagger=0,D&&(S.easeReverse=D),C&&Os(S,C),v=b[y],S.duration=+za(c,nr(o),y,v,b),S.delay=(+za(u,nr(o),y,v,b)||0)-o._delay,!h&&w===1&&S.delay&&(o._delay=u=S.delay,o._start+=u,S.delay=0),E.to(v,S,T?T(y,v,b):0),E._ease=le.none;E.duration()?c=u=0:o.timeline=0}else if(g){Oa(jn(E.vars.defaults,{ease:"none"})),E._ease=ns(g.ease||i.ease||"none");var L=0,F,I,B;if(yn(g))g.forEach(function(X){return E.to(b,X,">")}),E.duration();else{S={};for(A in g)A==="ease"||A==="easeEach"||x0(A,g[A],S,g.easeEach);for(A in S)for(F=S[A].sort(function(X,k){return X.t-k.t}),L=0,y=0;y<F.length;y++)I=F[y],B={ease:I.e,duration:(I.t-(y?F[y-1].t:0))/100*c},B[A]=I.v,E.to(b,B,L),L+=B.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return f===!0&&!oh&&(br=nr(o),Ue.killTweensOf(b),br=0),ki(m,nr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Ne(m._time)&&Xn(d)&&Z_(nr(o))&&m.data!=="nested")&&(o._tTime=-Te,o.render(Math.max(0,-u)||0)),p&&sp(nr(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Te&&!u?l:i<Te?0:i,h,f,g,_,p,m,b,E;if(!c)$_(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Ne(d%_),d===l?(g=this._repeat,h=c):(p=Ne(d/_),g=~~p,g&&g===p?(h=c,g--):h>c&&(h=c)),m=this._yoyo&&g&1,m&&(h=c-h),p=Bs(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Ne(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(ap(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=h<o;if(y!==this._inv){var S=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(h/c);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(Kn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;E&&E.render(i<0?i:E._dur*E._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&th(this,i,s,a),Kn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&th(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ar(this,1),!s&&!(u&&!o)&&(d||o||m)&&(Kn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Ha||Wn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sh(this,c),u=this._ease(c/this._dur),g0(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(pl(this,0),this.parent||ip(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ua(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,br&&br.vars.overwrite!==!0)._first||Ua(this),this.parent&&a!==this.timeline.totalDuration()&&zs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?xi(i):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,p,m;if((!s||s==="all")&&Y_(o,l))return s==="all"&&(this._pt=0),Ua(this);for(d=this._op=this._op||[],s!=="all"&&(en(s)&&(_={},Dn(s,function(b){return _[b]=1}),s=_),s=_0(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,g=h,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&fl(this,p,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&Ua(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ba(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Ba(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ue.killTweensOf(i,s,a)},t})(Wa);jn(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Dn("staggerTo,staggerFrom,staggerFromTo",function(r){qe[r]=function(){var t=new vn,e=nh.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Mh=function(t,e,n){return t[e]=n},Sp=function(t,e,n){return t[e](n)},v0=function(t,e,n,i){return t[e](i.fp,n)},y0=function(t,e,n){return t.setAttribute(e,n)},ml=function(t,e){return Ve(t[e])?Sp:ul(t[e])&&t.setAttribute?y0:Mh},Mp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},S0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},bh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Th=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},M0=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},b0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?fl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},T0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},wh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Nn=(function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Mp,this.d=l||this,this.set=c||Mh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=T0,this.m=n,this.mt=s,this.tween=i},r})();Dn(dh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return fh[r]=1});Qn.TweenMax=Qn.TweenLite=qe;Qn.TimelineLite=Qn.TimelineMax=vn;Ue=new vn({sortChildren:!1,defaults:ka,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yn.stringFilter=_h;var is=[],rl={},w0=[],Yd=0,A0=0,Ju=function(t){return(rl[t]||w0).map(function(e){return e()})},ah=function(){var t=Date.now(),e=[];t-Yd>2&&(Ju("matchMediaInit"),is.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=zi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Ju("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Yd=t,Ju("matchMedia"))},bp=(function(){function r(e,n){this.selector=n&&ih(n),this.data=[],this._r=[],this.isReverted=!1,this.id=A0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ve(n)&&(s=i,i=n,n=Ve);var a=this,o=function(){var c=Le,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=ih(s)),Le=a,d=i.apply(a,arguments),Ve(d)&&a._r.push(d),Le=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ve?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Le;Le=null,n(this),Le=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof vn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=is.length;a--;)is[a].id===this.id&&is.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),E0=(function(){function r(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Vi(n)||(n={matches:n});var a=new bp(0,s||this.scope),o=a.conditions={},l,c,u;Le&&!a.selector&&(a.selector=Le.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=zi.matchMedia(n[c]),l&&(is.indexOf(a)<0&&is.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ah):l.addEventListener("change",ah)));return u&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),cl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return mp(i)})},timeline:function(t){return new vn(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){en(t)&&(t=xi(t)[0]);var s=wr(t||{}).get,a=n?np:ep;return n==="native"&&(n=""),t&&(e?a((Hn[e]&&Hn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Hn[o]&&Hn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=xi(t),t.length>1){var i=t.map(function(u){return Sn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var a=Hn[e],o=wr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var d=new a;Fs._pt=0,d.init(t,n?u+n:u,Fs,0,[t]),d.render(1,d),Fs._pt&&Th(1,Fs)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Sn.to(t,jn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ns(t.ease,ka.ease)),Vd(ka,t||{})},config:function(t){return Vd(Yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Hn[o]&&!Qn[o]&&Va(e+" effect requires "+o+" plugin.")}),Xu[e]=function(o,l,c){return n(xi(o),jn(l||{},s),c)},a&&(vn.prototype[e]=function(o,l,c){return this.add(Xu[e](o,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){le[t]=ns(e)},parseEase:function(t,e){return arguments.length?ns(t,e):le},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new vn(t),i,s;for(n.smoothChildTiming=Xn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,i=Ue._first;i;)s=i._next,(e||!(!i._dur&&i instanceof qe&&i.vars.onComplete===i._targets[0]))&&ki(n,i,i._start-i._delay),i=s;return ki(Ue,n,0),n},context:function(t,e){return t?new bp(t,e):Le},matchMedia:function(t){return new E0(t)},matchMediaRefresh:function(){return is.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ah()},addEventListener:function(t,e){var n=rl[t]||(rl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=rl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:r0,wrapYoyo:s0,distribute:cp,random:hp,snap:up,normalize:i0,getUnit:dn,clamp:j_,splitColor:gp,toArray:xi,selector:ih,mapRange:dp,pipe:e0,unitize:n0,interpolate:a0,shuffle:lp},install:Kd,effects:Xu,ticker:Wn,updateRoot:vn.updateRoot,plugins:Hn,globalTimeline:Ue,core:{PropTween:Nn,globals:Qd,Tween:qe,Timeline:vn,Animation:Wa,getCache:wr,_removeLinkedListItem:fl,reverting:function(){return fn},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return oh=t}}};Dn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return cl[r]=qe[r]});Wn.add(vn.updateRoot);Fs=cl.to({},{duration:0});var C0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},R0=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=C0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},$u=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(en(s)&&(l={},Dn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}R0(o,s)}}}},Sn=cl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},$u("roundProps",rh),$u("modifiers"),$u("snap",up))||cl;qe.version=vn.version=Sn.version="3.15.0";$d=1;lh()&&ks();var P0=le.Power0,I0=le.Power1,L0=le.Power2,D0=le.Power3,N0=le.Power4,U0=le.Linear,F0=le.Quad,O0=le.Cubic,B0=le.Quart,z0=le.Quint,k0=le.Strong,V0=le.Elastic,G0=le.Back,H0=le.SteppedEase,W0=le.Bounce,X0=le.Sine,Y0=le.Expo,q0=le.Circ;var Tp,Cr,Hs,Ih,us,Z0,wp,Lh,J0=function(){return typeof window!="undefined"},ar={},cs=180/Math.PI,Ws=Math.PI/180,Gs=Math.atan2,Ap=1e8,Dh=/([A-Z])/g,$0=/(left|right|width|margin|padding|x)/i,K0=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Eh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Q0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},j0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},tx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ex=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Np=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Up=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},nx=function(t,e,n){return t.style[e]=n},ix=function(t,e,n){return t.style.setProperty(e,n)},rx=function(t,e,n){return t._gsap[e]=n},sx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ax=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},ox=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Fe="transform",qn=Fe+"Origin",lx=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in ar&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Gi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=sr(i,o)}):this.tfm[t]=a.x?a[t]:sr(i,t),t===qn&&(this.tfm.zOrigin=a.zOrigin);else return Gi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Fe)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qn,e,"")),t=Fe}(s||e)&&this.props.push(t,e,s[t])},Fp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},cx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Dh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Lh(),(!s||!s.isStart)&&!n[Fe]&&(Fp(n),i.zOrigin&&n[qn]&&(n[qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Op=function(t,e){var n={target:t,props:[],revert:cx,save:lx};return t._gsap||Sn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Bp,Ch=function(t,e){var n=Cr.createElementNS?Cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Cr.createElement(t);return n&&n.style?n:Cr.createElement(t)},ti=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Dh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Xs(e)||e,1)||""},Ep="O,Moz,ms,Ms,Webkit".split(","),Xs=function(t,e,n){var i=e||us,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Ep[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Ep[a]:"")+t},Rh=function(){J0()&&window.document&&(Tp=window,Cr=Tp.document,Hs=Cr.documentElement,us=Ch("div")||{style:{}},Z0=Ch("div"),Fe=Xs(Fe),qn=Fe+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bp=!!Xs("perspective"),Lh=Sn.core.reverting,Ih=1)},Cp=function(t){var e=t.ownerSVGElement,n=Ch("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Hs.removeChild(n),s},Rp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},zp=function(t){var e,n;try{e=t.getBBox()}catch{e=Cp(t),n=1}return e&&(e.width||e.height)||n||(e=Cp(t)),e&&!e.width&&!e.x&&!e.y?{x:+Rp(t,["x","cx","x1"])||0,y:+Rp(t,["y","cy","y1"])||0,width:0,height:0}:e},kp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&zp(t))},Pr=function(t,e){if(e){var n=t.style,i;e in ar&&e!==qn&&(e=Fe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Dh,"-$1").toLowerCase())):n.removeAttribute(e)}},Rr=function(t,e,n,i,s,a){var o=new Nn(t._pt,e,n,0,1,a?Up:Np);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Pp={deg:1,rad:1,turn:1},ux={grid:1,flex:1},Ir=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=us.style,l=$0.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||Pp[i]||Pp[a])return s;if(a!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&kp(t),(f||a==="%")&&(ar[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[u],Ge(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Cr||!_.appendChild)&&(_=Cr.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Wn.time&&!p.uncache)return Ge(s/p.width*d);if(f&&(e==="height"||e==="width")){var b=t.style[e];t.style[e]=d+i,g=t[u],b?t.style[e]=b:Pr(t,e)}else(f||a==="%")&&!ux[ti(_,"display")]&&(o.position=ti(t,"position")),_===t&&(o.position="static"),_.appendChild(us),g=us[u],_.removeChild(us),o.position="absolute";return l&&f&&(p=wr(_),p.time=Wn.time,p.width=_[u]),Ge(h?g*s/d:g&&s?d/g*s:0)},sr=function(t,e,n,i){var s;return Ih||Rh(),e in Gi&&e!=="transform"&&(e=Gi[e],~e.indexOf(",")&&(e=e.split(",")[0])),ar[e]&&e!=="transform"?(s=Za(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:_l(ti(t,qn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=gl[e]&&gl[e](t,e,n)||ti(t,e)||mh(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ir(t,e,s,n)+n:s},hx=function(t,e,n,i){if(!n||n==="none"){var s=Xs(e,t,1),a=s&&ti(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=ti(t,"borderTopColor"))}var o=new Nn(this._pt,t.style,e,0,1,bh),l=0,c=0,u,d,h,f,g,_,p,m,b,E,y,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ti(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ti(t,e)||i,_?t.style[e]=_:Pr(t,e)),u=[n,i],_h(u),n=u[0],i=u[1],h=n.match(rs)||[],S=i.match(rs)||[],S.length){for(;d=rs.exec(i);)p=d[0],b=i.substring(l,d.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=ss(f,p)+y),m=parseFloat(p),E=p.substr((m+"").length),l=rs.lastIndex-E.length,E||(E=E||Yn.units[e]||y,l===i.length&&(i+=E,o.e+=E)),y!==E&&(f=Ir(t,e,_,E)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:f,c:m-f,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Up:Np;return uh.test(i)&&(o.e=0),this._pt=o,o},Ip={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Ip[n]||n,e[1]=Ip[i]||i,e.join(" ")},dx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ar[o]&&(l=1,o=o==="transformOrigin"?qn:Fe),Pr(n,o);l&&(Pr(n,Fe),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Za(n,1),a.uncache=1,Fp(i)))}},gl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Nn(t._pt,e,n,0,0,dx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},qa=[1,0,0,1,0,0],Vp={},Gp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Lp=function(t){var e=ti(t,Fe);return Gp(e)?qa:e.substr(7).match(ch).map(Ge)},Nh=function(t,e){var n=t._gsap||wr(t),i=t.style,s=Lp(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?qa:s):(s===qa&&!t.offsetParent&&t!==Hs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Hs.appendChild(t)),s=Lp(t),l?i.display=l:Pr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Hs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ph=function(t,e,n,i,s,a){var o=t._gsap,l=s||Nh(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],b=l[5],E=e.split(" "),y=parseFloat(E[0])||0,S=parseFloat(E[1])||0,w,A,v,T;n?l!==qa&&(A=f*p-g*_)&&(v=y*(p/A)+S*(-_/A)+(_*b-p*m)/A,T=y*(-g/A)+S*(f/A)-(f*b-g*m)/A,y=v,S=T):(w=zp(t),y=w.x+(~E[0].indexOf("%")?y/100*w.width:y),S=w.y+(~(E[1]||E[0]).indexOf("%")?S/100*w.height:S)),i||i!==!1&&o.smooth?(m=y-c,b=S-u,o.xOffset=d+(m*f+b*_)-m,o.yOffset=h+(m*g+b*p)-b):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[qn]="0px 0px",a&&(Rr(a,o,"xOrigin",c,y),Rr(a,o,"yOrigin",u,S),Rr(a,o,"xOffset",d,o.xOffset),Rr(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",y+" "+S)},Za=function(t,e){var n=t._gsap||new xh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=ti(t,qn)||"0",u,d,h,f,g,_,p,m,b,E,y,S,w,A,v,T,C,D,L,F,I,B,X,k,K,Y,R,j,St,Mt,kt,zt;return u=d=h=_=p=m=b=E=y=0,f=g=1,n.svg=!!(t.getCTM&&kp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Fe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Fe]!=="none"?l[Fe]:"")),i.scale=i.rotate=i.translate="none"),A=Nh(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),Ph(t,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,w=n.yOrigin||0,A!==qa&&(D=A[0],L=A[1],F=A[2],I=A[3],u=B=A[4],d=X=A[5],A.length===6?(f=Math.sqrt(D*D+L*L),g=Math.sqrt(I*I+F*F),_=D||L?Gs(L,D)*cs:0,b=F||I?Gs(F,I)*cs+_:0,b&&(g*=Math.abs(Math.cos(b*Ws))),n.svg&&(u-=S-(S*D+w*F),d-=w-(S*L+w*I))):(zt=A[6],Mt=A[7],R=A[8],j=A[9],St=A[10],kt=A[11],u=A[12],d=A[13],h=A[14],v=Gs(zt,St),p=v*cs,v&&(T=Math.cos(-v),C=Math.sin(-v),k=B*T+R*C,K=X*T+j*C,Y=zt*T+St*C,R=B*-C+R*T,j=X*-C+j*T,St=zt*-C+St*T,kt=Mt*-C+kt*T,B=k,X=K,zt=Y),v=Gs(-F,St),m=v*cs,v&&(T=Math.cos(-v),C=Math.sin(-v),k=D*T-R*C,K=L*T-j*C,Y=F*T-St*C,kt=I*C+kt*T,D=k,L=K,F=Y),v=Gs(L,D),_=v*cs,v&&(T=Math.cos(v),C=Math.sin(v),k=D*T+L*C,K=B*T+X*C,L=L*T-D*C,X=X*T-B*C,D=k,B=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Ge(Math.sqrt(D*D+L*L+F*F)),g=Ge(Math.sqrt(X*X+zt*zt)),v=Gs(B,X),b=Math.abs(v)>2e-4?v*cs:0,y=kt?1/(kt<0?-kt:kt):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Gp(ti(t,Fe)),k&&t.setAttribute("transform",k))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Ge(f),n.scaleY=Ge(g),n.rotation=Ge(_)+o,n.rotationX=Ge(p)+o,n.rotationY=Ge(m)+o,n.skewX=b+o,n.skewY=E+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[qn]=_l(c)),n.xOffset=n.yOffset=0,n.force3D=Yn.force3D,n.renderTransform=n.svg?mx:Bp?Hp:px,n.uncache=0,n},_l=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ah=function(t,e,n){var i=dn(e);return Ge(parseFloat(e)+parseFloat(Ir(t,"x",n+"px",i)))+i},px=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Hp(t,e)},os="0deg",Ya="0px",ls=") ",Hp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,b=n.target,E=n.zOrigin,y="",S=m==="auto"&&t&&t!==1||m===!0;if(E&&(d!==os||u!==os)){var w=parseFloat(u)*Ws,A=Math.sin(w),v=Math.cos(w),T;w=parseFloat(d)*Ws,T=Math.cos(w),a=Ah(b,a,A*T*-E),o=Ah(b,o,-Math.sin(w)*-E),l=Ah(b,l,v*T*-E+E)}p!==Ya&&(y+="perspective("+p+ls),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||a!==Ya||o!==Ya||l!==Ya)&&(y+=l!==Ya||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ls),c!==os&&(y+="rotate("+c+ls),u!==os&&(y+="rotateY("+u+ls),d!==os&&(y+="rotateX("+d+ls),(h!==os||f!==os)&&(y+="skew("+h+", "+f+ls),(g!==1||_!==1)&&(y+="scale("+g+", "+_+ls),b.style[Fe]=y||"translate(0, 0)"},mx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,b=n.forceCSS,E=parseFloat(a),y=parseFloat(o),S,w,A,v,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ws,c*=Ws,S=Math.cos(l)*d,w=Math.sin(l)*d,A=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=Ws,T=Math.tan(c-u),T=Math.sqrt(1+T*T),A*=T,v*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),S*=T,w*=T)),S=Ge(S),w=Ge(w),A=Ge(A),v=Ge(v)):(S=d,v=h,w=A=0),(E&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(E=Ir(f,"x",a,"px"),y=Ir(f,"y",o,"px")),(g||_||p||m)&&(E=Ge(E+g-(g*S+_*A)+p),y=Ge(y+_-(g*w+_*v)+m)),(i||s)&&(T=f.getBBox(),E=Ge(E+i/100*T.width),y=Ge(y+s/100*T.height)),T="matrix("+S+","+w+","+A+","+v+","+E+","+y+")",f.setAttribute("transform",T),b&&(f.style[Fe]=T)},gx=function(t,e,n,i,s){var a=360,o=en(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?cs:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Ap)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Ap)%a-~~(c/a)*a)),t._pt=h=new Nn(t._pt,e,n,i,c,Q0),h.e=u,h.u="deg",t._props.push(n),h},Dp=function(t,e){for(var n in e)t[n]=e[n];return t},_x=function(t,e,n){var i=Dp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Fe]=e,o=Za(n,1),Pr(n,Fe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Fe],a[Fe]=e,o=Za(n,1),a[Fe]=c);for(l in ar)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=dn(c),g=dn(u),d=f!==g?Ir(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new Nn(t._pt,o,l,d,h-d,Eh),t._pt.u=g||0,t._props.push(l));Dp(o,i)};Dn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});gl[t>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return sr(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var Uh={name:"css",register:Rh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,d,h,f,g,_,p,m,b,E,y,S,w,A,v,T;Ih||Rh(),this.styles=this.styles||Op(t),v=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Hn[_]&&yh(_,e,n,i,t,s)))){if(f=typeof u,g=gl[_],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Vs(u)),g)g(this,t,_,u,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",ir.lastIndex=0,ir.test(c)||(p=dn(c),m=dn(u),m?p!==m&&(c=Ir(t,_,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],en(c)&&~c.indexOf("random(")&&(c=Vs(c)),dn(c+"")||c==="auto"||(c+=Yn.units[_]||dn(sr(t,_))||""),(c+"").charAt(1)==="="&&(c=sr(t,_))):c=sr(t,_),h=parseFloat(c),b=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),_ in Gi&&(_==="autoAlpha"&&(h===1&&sr(t,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,o.visibility),Rr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Gi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in ar,E){if(this.styles.save(_),T=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ti(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=u,u=ti(t,"perspective"),C?t.style.perspective=C:Pr(t,"perspective")}d=parseFloat(u)}if(y||(S=t._gsap,S.renderTransform&&!e.parseTransform||Za(t,e.parseTransform),w=e.smoothOrigin!==!1&&S.smooth,y=this._pt=new Nn(this._pt,o,Fe,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Nn(this._pt,S,"scaleY",S.scaleY,(b?ss(S.scaleY,b+d):d)-S.scaleY||0,Eh),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(qn,0,o[qn]),u=fx(u),S.svg?Ph(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==S.zOrigin&&Rr(this,S,"zOrigin",S.zOrigin,m),Rr(this,o,_,_l(c),_l(u)));continue}else if(_==="svgOrigin"){Ph(t,u,1,w,0,this);continue}else if(_ in Vp){gx(this,S,_,h,b?ss(h,b+u):u);continue}else if(_==="smoothOrigin"){Rr(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){_x(this,u,t);continue}}else _ in o||(_=Xs(_)||_);if(E||(d||d===0)&&(h||h===0)&&!K0.test(u)&&_ in o)p=(c+"").substr((h+"").length),d||(d=0),m=dn(u)||(_ in Yn.units?Yn.units[_]:p),p!==m&&(h=Ir(t,_,c,m)),this._pt=new Nn(this._pt,E?S:o,_,h,(b?ss(h,b+d):d)-h,!E&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?ex:Eh),this._pt.u=m||0,E&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=tx):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=j0);else if(_ in o)hx.call(this,t,_,c,b?b+u:u);else if(_ in t)this.add(t,_,c||t[_],b?b+u:u,i,s);else if(_!=="parseTransform"){hl(_,u);continue}E||(_ in o?v.push(_,0,o[_]):typeof t[_]=="function"?v.push(_,2,t[_]()):v.push(_,1,c||t[_])),a.push(_)}}A&&wh(this)},render:function(t,e){if(e.tween._time||!Lh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:sr,aliases:Gi,getSetter:function(t,e,n){var i=Gi[e];return i&&i.indexOf(",")<0&&(e=i),e in ar&&e!==qn&&(t._gsap.x||sr(t,"x"))?n&&wp===n?e==="scale"?sx:rx:(wp=n||{})&&(e==="scale"?ax:ox):t.style&&!ul(t.style[e])?nx:~e.indexOf("-")?ix:ml(t,e)},core:{_removeProperty:Pr,_getMatrix:Nh}};Sn.utils.checkPrefix=Xs;Sn.core.getStyleSaver=Op;(function(r,t,e,n){var i=Dn(r+","+t+","+e,function(s){ar[s]=1});Dn(t,function(s){Yn.units[s]="deg",Vp[s]=1}),Gi[i[13]]=r+","+t,Dn(n,function(s){var a=s.split(":");Gi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Dn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Yn.units[r]="px"});Sn.registerPlugin(Uh);var he=Sn.registerPlugin(Uh)||Sn,BT=he.core.Tween;function Wp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function xx(r,t,e){return t&&Wp(r.prototype,t),e&&Wp(r,e),r}var pn,yl,vx,ei,Lr,Dr,qs,Yp,hs,Zs,qp,or,Ai,Zp,Jp=function(){return pn||typeof window!="undefined"&&(pn=window.gsap)&&pn.registerPlugin&&pn},$p=1,Ys=[],jt=[],Ei=[],$a=Date.now,Fh=function(t,e){return e},yx=function(){var t=Zs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,jt),i.push.apply(i,Ei),jt=n,Ei=i,Fh=function(a,o){return e[a](o)}},cr=function(t,e){return~Ei.indexOf(t)&&Ei[Ei.indexOf(t)+1][e]},Ka=function(t){return!!~qp.indexOf(t)},Fn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},xl="scrollLeft",vl="scrollTop",Oh=function(){return or&&or.isPressed||jt.cache++},Sl=function(t,e){var n=function i(s){if(s||s===0){$p&&(ei.history.scrollRestoration="manual");var a=or&&or.isPressed;s=i.v=Math.round(s)||(or&&or.iOS?1:0),t(s),i.cacheID=jt.cache,a&&Fh("ss",s)}else(e||jt.cache!==i.cacheID||Fh("ref"))&&(i.cacheID=jt.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Mn={s:xl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sl(function(r){return arguments.length?ei.scrollTo(r,Ke.sc()):ei.pageXOffset||Lr[xl]||Dr[xl]||qs[xl]||0})},Ke={s:vl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Mn,sc:Sl(function(r){return arguments.length?ei.scrollTo(Mn.sc(),r):ei.pageYOffset||Lr[vl]||Dr[vl]||qs[vl]||0})},On=function(t,e){return(e&&e._ctx&&e._ctx.selector||pn.utils.toArray)(t)[0]||(typeof t=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Sx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},lr=function(t,e){var n=e.s,i=e.sc;Ka(t)&&(t=Lr.scrollingElement||Dr);var s=jt.indexOf(t),a=i===Ke.sc?1:2;!~s&&(s=jt.push(t)-1),jt[s+a]||Fn(t,"scroll",Oh);var o=jt[s+a],l=o||(jt[s+a]=Sl(cr(t,n),!0)||(Ka(t)?i:Sl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=pn.getProperty(t,"scrollBehavior")==="smooth"),l},Ml=function(t,e,n){var i=t,s=t,a=$a(),o=a,l=e||50,c=Math.max(500,l*3),u=function(g,_){var p=$a();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,p=s,m=$a();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:d,getVelocity:h}},Ja=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Xp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Kp=function(){Zs=pn.core.globals().ScrollTrigger,Zs&&Zs.core&&yx()},Qp=function(t){return pn=t||Jp(),!yl&&pn&&typeof document!="undefined"&&document.body&&(ei=window,Lr=document,Dr=Lr.documentElement,qs=Lr.body,qp=[ei,Lr,Dr,qs],vx=pn.utils.clamp,Zp=pn.core.context||function(){},hs="onpointerenter"in qs?"pointer":"mouse",Yp=He.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ai=He.eventTypes=("ontouchstart"in Dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return $p=0},500),yl=1),Zs||Kp(),yl};Mn.op=Ke;jt.cache=0;var He=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){yl||Qp(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Zs||Kp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,b=n.onDrag,E=n.onPress,y=n.onRelease,S=n.onRight,w=n.onLeft,A=n.onUp,v=n.onDown,T=n.onChangeX,C=n.onChangeY,D=n.onChange,L=n.onToggleX,F=n.onToggleY,I=n.onHover,B=n.onHoverEnd,X=n.onMove,k=n.ignoreCheck,K=n.isNormalizer,Y=n.onGestureStart,R=n.onGestureEnd,j=n.onWheel,St=n.onEnable,Mt=n.onDisable,kt=n.onClick,zt=n.scrollSpeed,Gt=n.capture,J=n.allowClicks,tt=n.lockAxis,_t=n.onLockAxis;this.target=o=On(o)||Dr,this.vars=n,f&&(f=pn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,zt=zt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ei.getComputedStyle(qs).lineHeight)||22);var Ot,mt,Ut,Bt,Pt,Yt,$t,V=this,ee=0,ve=0,De=n.passive||!u&&n.passive!==!1,qt=lr(o,Mn),de=lr(o,Ke),O=qt(),Ie=de(),Ht=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ai[0]==="pointerdown",P=Ka(o),x=o.ownerDocument||Lr,z=[0,0,0],H=[0,0,0],$=0,ct=function(){return $=$a()},at=function(rt,Dt){return(V.event=rt)&&f&&Sx(rt.target,f)||Dt&&Ht&&rt.pointerType!=="touch"||k&&k(rt,Dt)},Q=function(){V._vx.reset(),V._vy.reset(),mt.pause(),d&&d(V)},nt=function(){var rt=V.deltaX=Xp(z),Dt=V.deltaY=Xp(H),st=Math.abs(rt)>=i,Nt=Math.abs(Dt)>=i;D&&(st||Nt)&&D(V,rt,Dt,z,H),st&&(S&&V.deltaX>0&&S(V),w&&V.deltaX<0&&w(V),T&&T(V),L&&V.deltaX<0!=ee<0&&L(V),ee=V.deltaX,z[0]=z[1]=z[2]=0),Nt&&(v&&V.deltaY>0&&v(V),A&&V.deltaY<0&&A(V),C&&C(V),F&&V.deltaY<0!=ve<0&&F(V),ve=V.deltaY,H[0]=H[1]=H[2]=0),(Bt||Ut)&&(X&&X(V),Ut&&(p&&Ut===1&&p(V),b&&b(V),Ut=0),Bt=!1),Yt&&!(Yt=!1)&&_t&&_t(V),Pt&&(j(V),Pt=!1),Ot=0},ft=function(rt,Dt,st){z[st]+=rt,H[st]+=Dt,V._vx.update(rt),V._vy.update(Dt),c?Ot||(Ot=requestAnimationFrame(nt)):nt()},At=function(rt,Dt){tt&&!$t&&(V.axis=$t=Math.abs(rt)>Math.abs(Dt)?"x":"y",Yt=!0),$t!=="y"&&(z[2]+=rt,V._vx.update(rt,!0)),$t!=="x"&&(H[2]+=Dt,V._vy.update(Dt,!0)),c?Ot||(Ot=requestAnimationFrame(nt)):nt()},dt=function(rt){if(!at(rt,1)){rt=Ja(rt,u);var Dt=rt.clientX,st=rt.clientY,Nt=Dt-V.x,Et=st-V.y,Zt=V.isDragging;V.x=Dt,V.y=st,(Zt||(Nt||Et)&&(Math.abs(V.startX-Dt)>=s||Math.abs(V.startY-st)>=s))&&(Ut||(Ut=Zt?2:1),Zt||(V.isDragging=!0),At(Nt,Et))}},ht=V.onPress=function(ot){at(ot,1)||ot&&ot.button||(V.axis=$t=null,mt.pause(),V.isPressed=!0,ot=Ja(ot),ee=ve=0,V.startX=V.x=ot.clientX,V.startY=V.y=ot.clientY,V._vx.reset(),V._vy.reset(),Fn(K?o:x,Ai[1],dt,De,!0),V.deltaX=V.deltaY=0,E&&E(V))},lt=V.onRelease=function(ot){if(!at(ot,1)){Un(K?o:x,Ai[1],dt,!0);var rt=!isNaN(V.y-V.startY),Dt=V.isDragging,st=Dt&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Nt=Ja(ot);!st&&rt&&(V._vx.reset(),V._vy.reset(),u&&J&&pn.delayedCall(.08,function(){if($a()-$>300&&!ot.defaultPrevented){if(ot.target.click)ot.target.click();else if(x.createEvent){var Et=x.createEvent("MouseEvents");Et.initMouseEvent("click",!0,!0,ei,1,Nt.screenX,Nt.screenY,Nt.clientX,Nt.clientY,!1,!1,!1,!1,0,null),ot.target.dispatchEvent(Et)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&Dt&&!K&&mt.restart(!0),Ut&&nt(),m&&Dt&&m(V),y&&y(V,st)}},It=function(rt){return rt.touches&&rt.touches.length>1&&(V.isGesturing=!0)&&Y(rt,V.isDragging)},Ft=function(){return(V.isGesturing=!1)||R(V)},N=function(rt){if(!at(rt)){var Dt=qt(),st=de();ft((Dt-O)*zt,(st-Ie)*zt,1),O=Dt,Ie=st,d&&mt.restart(!0)}},ut=function(rt){if(!at(rt)){rt=Ja(rt,u),j&&(Pt=!0);var Dt=(rt.deltaMode===1?l:rt.deltaMode===2?ei.innerHeight:1)*g;ft(rt.deltaX*Dt,rt.deltaY*Dt,0),d&&!K&&mt.restart(!0)}},et=function(rt){if(!at(rt)){var Dt=rt.clientX,st=rt.clientY,Nt=Dt-V.x,Et=st-V.y;V.x=Dt,V.y=st,Bt=!0,d&&mt.restart(!0),(Nt||Et)&&At(Nt,Et)}},pt=function(rt){V.event=rt,I(V)},xt=function(rt){V.event=rt,B(V)},it=function(rt){return at(rt)||Ja(rt,u)&&kt(V)};mt=V._dc=pn.delayedCall(h||.25,Q).pause(),V.deltaX=V.deltaY=0,V._vx=Ml(0,50,!0),V._vy=Ml(0,50,!0),V.scrollX=qt,V.scrollY=de,V.isDragging=V.isGesturing=V.isPressed=!1,Zp(this),V.enable=function(ot){return V.isEnabled||(Fn(P?x:o,"scroll",Oh),a.indexOf("scroll")>=0&&Fn(P?x:o,"scroll",N,De,Gt),a.indexOf("wheel")>=0&&Fn(o,"wheel",ut,De,Gt),(a.indexOf("touch")>=0&&Yp||a.indexOf("pointer")>=0)&&(Fn(o,Ai[0],ht,De,Gt),Fn(x,Ai[2],lt),Fn(x,Ai[3],lt),J&&Fn(o,"click",ct,!0,!0),kt&&Fn(o,"click",it),Y&&Fn(x,"gesturestart",It),R&&Fn(x,"gestureend",Ft),I&&Fn(o,hs+"enter",pt),B&&Fn(o,hs+"leave",xt),X&&Fn(o,hs+"move",et)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Bt=Ut=!1,V._vx.reset(),V._vy.reset(),O=qt(),Ie=de(),ot&&ot.type&&ht(ot),St&&St(V)),V},V.disable=function(){V.isEnabled&&(Ys.filter(function(ot){return ot!==V&&Ka(ot.target)}).length||Un(P?x:o,"scroll",Oh),V.isPressed&&(V._vx.reset(),V._vy.reset(),Un(K?o:x,Ai[1],dt,!0)),Un(P?x:o,"scroll",N,Gt),Un(o,"wheel",ut,Gt),Un(o,Ai[0],ht,Gt),Un(x,Ai[2],lt),Un(x,Ai[3],lt),Un(o,"click",ct,!0),Un(o,"click",it),Un(x,"gesturestart",It),Un(x,"gestureend",Ft),Un(o,hs+"enter",pt),Un(o,hs+"leave",xt),Un(o,hs+"move",et),V.isEnabled=V.isPressed=V.isDragging=!1,Mt&&Mt(V))},V.kill=V.revert=function(){V.disable();var ot=Ys.indexOf(V);ot>=0&&Ys.splice(ot,1),or===V&&(or=0)},Ys.push(V),K&&Ka(o)&&(or=V),V.enable(_)},xx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();He.version="3.15.0";He.create=function(r){return new He(r)};He.register=Qp;He.getAll=function(){return Ys.slice()};He.getById=function(r){return Ys.filter(function(t){return t.vars.id===r})[0]};Jp()&&pn.registerPlugin(He);var wt,Qs,ie,xe,ri,me,Kh,Bl,ho,ro,ja,bl,bn,Vl,Wh,zn,jp,tm,js,gm,Bh,_m,Bn,Xh,xm,vm,Nr,Yh,Qh,ta,jh,so,qh,zh,Tl=1,Tn=Date.now,kh=Tn(),Si=0,to=0,em=function(t,e,n){var i=ii(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},nm=function(t,e){return e&&(!ii(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Mx=function r(){return to&&requestAnimationFrame(r)},im=function(){return Vl=1},rm=function(){return Vl=0},Hi=function(t){return t},eo=function(t){return Math.round(t*1e5)/1e5||0},ym=function(){return typeof window!="undefined"},Sm=function(){return wt||ym()&&(wt=window.gsap)&&wt.registerPlugin&&wt},_s=function(t){return!!~Kh.indexOf(t)},Mm=function(t){return(t==="Height"?jh:ie["inner"+t])||ri["client"+t]||me["client"+t]},bm=function(t){return cr(t,"getBoundingClientRect")||(_s(t)?function(){return Ol.width=ie.innerWidth,Ol.height=jh,Ol}:function(){return ur(t)})},bx=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=cr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?Mm(s):t["client"+s])||0}},Tx=function(t,e){return!e||~Ei.indexOf(t)?bm(t):function(){return Ol}},Wi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=cr(t,n))?a()-bm(t)()[s]:_s(t)?(ri[n]||me[n])-Mm(i):t[n]-t["offset"+i])},wl=function(t,e){for(var n=0;n<js.length;n+=3)(!e||~e.indexOf(js[n+1]))&&t(js[n],js[n+1],js[n+2])},ii=function(t){return typeof t=="string"},wn=function(t){return typeof t=="function"},no=function(t){return typeof t=="number"},fs=function(t){return typeof t=="object"},Qa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Js=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},$s=Math.abs,Tm="left",wm="top",tf="right",ef="bottom",ps="width",ms="height",ao="Right",oo="Left",lo="Top",co="Bottom",Qe="padding",vi="margin",na="Width",nf="Height",nn="px",yi=function(t){return ie.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},wx=function(t){var e=yi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},sm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},ur=function(t,e){var n=e&&yi(t)[Wh]!=="matrix(1, 0, 0, 1, 0, 0)"&&wt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},zl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Am=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Ax=function(t){return function(e){return wt.utils.snap(Am(t),e)}},rf=function(t){var e=wt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},Ex=function(t){return function(e,n){return rf(Am(t))(e,n.direction)}},Al=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},cn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},ln=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},El=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},am={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Cl={toggleActions:"play",anticipatePin:0},kl={top:0,left:0,center:.5,bottom:1,right:1},Dl=function(t,e){if(ii(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in kl?kl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Rl=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,g=xe.createElement("div"),_=_s(n)||cr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?me:n.tagName==="IFRAME"?n.contentDocument.body:n,b=t.indexOf("start")!==-1,E=b?c:u,y="border-color:"+E+";font-size:"+d+";color:"+E+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===Ke?tf:ef)+":"+(a+parseFloat(h))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=y,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],Nl(g,0,i,b),g},Nl=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+na]=1,s["border"+o+na]=0,s[n.p]=e+"px",wt.set(t,s)},te=[],Zh={},fo,om=function(){return Tn()-Si>34&&(fo||(fo=requestAnimationFrame(hr)))},Ks=function(){(!Bn||!Bn.isPressed||Bn.startX>me.clientWidth)&&(jt.cache++,Bn?fo||(fo=requestAnimationFrame(hr)):hr(),Si||vs("scrollStart"),Si=Tn())},Vh=function(){vm=ie.innerWidth,xm=ie.innerHeight},io=function(t){jt.cache++,(t===!0||!bn&&!_m&&!xe.fullscreenElement&&!xe.webkitFullscreenElement&&(!Xh||vm!==ie.innerWidth||Math.abs(ie.innerHeight-xm)>ie.innerHeight*.25))&&Bl.restart(!0)},xs={},Cx=[],Em=function r(){return ln(Wt,"scrollEnd",r)||ds(!0)},vs=function(t){return xs[t]&&xs[t].map(function(e){return e()})||Cx},ni=[],Cm=function(t){for(var e=0;e<ni.length;e+=5)(!t||ni[e+4]&&ni[e+4].query===t)&&(ni[e].style.cssText=ni[e+1],ni[e].getBBox&&ni[e].setAttribute("transform",ni[e+2]||""),ni[e+3].uncache=1)},Rm=function(){return jt.forEach(function(t){return wn(t)&&++t.cacheID&&(t.rec=t())})},sf=function(t,e){var n;for(zn=0;zn<te.length;zn++)n=te[zn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));so=!0,e&&Cm(e),e||vs("revert")},Pm=function(t,e){jt.cache++,(e||!kn)&&jt.forEach(function(n){return wn(n)&&n.cacheID++&&(n.rec=0)}),ii(t)&&(ie.history.scrollRestoration=Qh=t)},kn,gs=0,lm,Rx=function(){if(lm!==gs){var t=lm=gs;requestAnimationFrame(function(){return t===gs&&ds(!0)})}},Im=function(){me.appendChild(ta),jh=!Bn&&ta.offsetHeight||ie.innerHeight,me.removeChild(ta)},cm=function(t){return ho(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ds=function(t,e){if(ri=xe.documentElement,me=xe.body,Kh=[ie,xe,ri,me],Si&&!t&&!so){cn(Wt,"scrollEnd",Em);return}Im(),kn=Wt.isRefreshing=!0,so||Rm();var n=vs("refreshInit");gm&&Wt.sort(),e||sf(),jt.forEach(function(i){wn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),so=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),qh=1,cm(!0),te.forEach(function(i){var s=Wi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),cm(!1),qh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),jt.forEach(function(i){wn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Pm(Qh,1),Bl.pause(),gs++,kn=2,hr(2),te.forEach(function(i){return wn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),kn=Wt.isRefreshing=!1,vs("refresh")},Jh=0,Ul=1,uo,hr=function(t){if(t===2||!kn&&!so){Wt.isUpdating=!0,uo&&uo.update(0);var e=te.length,n=Tn(),i=n-kh>=50,s=e&&te[0].scroll();if(Ul=Jh>s?-1:1,kn||(Jh=s),i&&(Si&&!Vl&&n-Si>200&&(Si=0,vs("scrollEnd")),ja=kh,kh=n),Ul<0){for(zn=e;zn-- >0;)te[zn]&&te[zn].update(0,i);Ul=1}else for(zn=0;zn<e;zn++)te[zn]&&te[zn].update(0,i);Wt.isUpdating=!1}fo=0},$h=[Tm,wm,ef,tf,vi+co,vi+ao,vi+lo,vi+oo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fl=$h.concat([ps,ms,"boxSizing","max"+na,"max"+nf,"position",vi,Qe,Qe+lo,Qe+ao,Qe+co,Qe+oo]),Px=function(t,e,n){ea(n);var i=t._gsap;if(i.spacerIsNative)ea(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Gh=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=$h.length,a=e.style,o=t.style,l;s--;)l=$h[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[ef]=o[tf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ps]=zl(t,Mn)+nn,a[ms]=zl(t,Ke)+nn,a[Qe]=o[vi]=o[wm]=o[Tm]="0",ea(i),o[ps]=o["max"+na]=n[ps],o[ms]=o["max"+nf]=n[ms],o[Qe]=n[Qe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Ix=/([A-Z])/g,ea=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||wt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(Ix,"-$1").toLowerCase())}},Pl=function(t){for(var e=Fl.length,n=t.style,i=[],s=0;s<e;s++)i.push(Fl[s],n[Fl[s]]);return i.t=t,i},Lx=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Ol={left:0,top:0},um=function(t,e,n,i,s,a,o,l,c,u,d,h,f,g){wn(t)&&(t=t(l)),ii(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?Dl("0"+t.substr(3),n):0));var _=f?f.time():0,p,m,b;if(f&&f.seek(0),isNaN(t)||(t=+t),no(t))f&&(t=wt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,t)),o&&Nl(o,n,i,!0);else{wn(e)&&(e=e(l));var E=(t||"0").split(" "),y,S,w,A;b=On(e,l)||me,y=ur(b)||{},(!y||!y.left&&!y.top)&&yi(b).display==="none"&&(A=b.style.display,b.style.display="block",y=ur(b),A?b.style.display=A:b.style.removeProperty("display")),S=Dl(E[0],y[i.d]),w=Dl(E[1]||"0",n),t=y[i.p]-c[i.p]-u+S+s-w,o&&Nl(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),a){var v=t+n,T=a._isStart;p="scroll"+i.d2,Nl(a,v,i,T&&v>20||!T&&(d?Math.max(me[p],ri[p]):a.parentNode[p])<=v+1),d&&(c=ur(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+nn))}return f&&b&&(p=ur(b),f.seek(h),m=ur(b),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*h),f&&f.seek(_),f?t:Math.round(t)},Dx=/(webkit|moz|length|cssText|inset)/i,hm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===me){t._stOrig=s.cssText,o=yi(t);for(a in o)!+a&&!Dx.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;wt.core.getCache(t).uncache=1,e.appendChild(t)}},Lm=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Il=function(t,e,n){var i={};i[e.p]="+="+n,wt.set(t,i)},fm=function(t,e){var n=lr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,g={};c=c||n();var _=Lm(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){jt.cache++,a.tween&&hr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=wt.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(t,"wheel",n.wheelHandler),Wt.isTouch&&cn(t,"touchmove",n.wheelHandler),s},Wt=(function(){function r(e,n){Qs||r.register(wt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Yh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!to){this.update=this.refresh=this.kill=Hi;return}n=sm(ii(n)||no(n)||n.nodeType?{trigger:n}:n,Cl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,b=s.onSnapComplete,E=s.once,y=s.snap,S=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Mn:Ke,D=!d&&d!==0,L=On(n.scroller||ie),F=wt.core.getCache(L),I=_s(L),B=("pinType"in n?n.pinType:cr(L,"pinType")||I&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:Cl.markers,Y=I?0:parseFloat(yi(L)["border"+C.p2+na])||0,R=this,j=n.onRefreshInit&&function(){return n.onRefreshInit(R)},St=bx(L,I,C),Mt=Tx(L,I),kt=0,zt=0,Gt=0,J=lr(L,C),tt,_t,Ot,mt,Ut,Bt,Pt,Yt,$t,V,ee,ve,De,qt,de,O,Ie,Ht,P,x,z,H,$,ct,at,Q,nt,ft,At,dt,ht,lt,It,Ft,N,ut,et,pt,xt;if(R._startClamp=R._endClamp=!1,R._dir=C,p*=45,R.scroller=L,R.scroll=A?A.time.bind(A):J,mt=J(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(gm=1,n.refreshPriority===-9999&&(uo=R)),F.tweenScroll=F.tweenScroll||{top:fm(L,Ke),left:fm(L,Mn)},R.tweenTo=tt=F.tweenScroll[C.p],R.scrubDuration=function(st){It=no(st)&&st,It?lt?lt.duration(st):lt=wt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:It,paused:!0,onComplete:function(){return m&&m(R)}}):(lt&&lt.progress(1).kill(),lt=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),dt=0,l||(l=i.vars.id)),y&&((!fs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in me.style&&wt.set(I?[me,ri]:L,{scrollBehavior:"auto"}),jt.forEach(function(st){return wn(st)&&st.target===(I?xe.scrollingElement||ri:L)&&(st.smooth=!1)}),Ot=wn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Ax(i):y.snapTo==="labelsDirectional"?Ex(i):y.directional!==!1?function(st,Nt){return rf(y.snapTo)(st,Tn()-zt<500?0:Nt.direction)}:wt.utils.snap(y.snapTo),Ft=y.duration||{min:.1,max:2},Ft=fs(Ft)?ro(Ft.min,Ft.max):ro(Ft,Ft),N=wt.delayedCall(y.delay||It/2||.1,function(){var st=J(),Nt=Tn()-zt<500,Et=tt.tween;if((Nt||Math.abs(R.getVelocity())<10)&&!Et&&!Vl&&kt!==st){var Zt=(st-Bt)/qt,Ze=i&&!D?i.totalProgress():Zt,ne=Nt?0:(Ze-ht)/(Tn()-ja)*1e3||0,Ee=wt.utils.clamp(-Zt,1-Zt,$s(ne/2)*ne/.185),an=Zt+(y.inertia===!1?0:Ee),Ce,Se,oe=y,Pn=oe.onStart,we=oe.onInterrupt,_n=oe.onComplete;if(Ce=Ot(an,R),no(Ce)||(Ce=an),Se=Math.max(0,Math.round(Bt+Ce*qt)),st<=Pt&&st>=Bt&&Se!==st){if(Et&&!Et._initted&&Et.data<=$s(Se-st))return;y.inertia===!1&&(Ee=Ce-Zt),tt(Se,{duration:Ft($s(Math.max($s(an-Ze),$s(Ce-Ze))*.185/ne/.05||0)),ease:y.ease||"power3",data:$s(Se-st),onInterrupt:function(){return N.restart(!0)&&we&&Js(R,we)},onComplete:function(){R.update(),kt=J(),i&&!D&&(lt?lt.resetTo("totalProgress",Ce,i._tTime/i._tDur):i.progress(Ce)),dt=ht=i&&!D?i.totalProgress():R.progress,b&&b(R),_n&&Js(R,_n)}},st,Ee*qt,Se-st-Ee*qt),Pn&&Js(R,Pn,tt.tween)}}else R.isActive&&kt!==st&&N.restart(!0)}).pause()),l&&(Zh[l]=R),h=R.trigger=On(h||f!==!0&&f),xt=h&&h._gsap&&h._gsap.stRevert,xt&&(xt=xt(R)),f=f===!0?h:On(f),ii(o)&&(o={targets:h,className:o}),f&&(g===!1||g===vi||(g=!g&&f.parentNode&&f.parentNode.style&&yi(f.parentNode).display==="flex"?!1:Qe),R.pin=f,_t=wt.core.getCache(f),_t.spacer?de=_t.pinState:(w&&(w=On(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),_t.spacerIsNative=!!w,w&&(_t.spacerState=Pl(w))),_t.spacer=Ht=w||xe.createElement("div"),Ht.classList.add("pin-spacer"),l&&Ht.classList.add("pin-spacer-"+l),_t.pinState=de=Pl(f)),n.force3D!==!1&&wt.set(f,{force3D:!0}),R.spacer=Ht=_t.spacer,At=yi(f),ct=At[g+C.os2],x=wt.getProperty(f),z=wt.quickSetter(f,C.a,nn),Gh(f,Ht,At),Ie=Pl(f)),K){ve=fs(K)?sm(K,am):am,V=Rl("scroller-start",l,L,C,ve,0),ee=Rl("scroller-end",l,L,C,ve,0,V),P=V["offset"+C.op.d2];var it=On(cr(L,"content")||L);Yt=this.markerStart=Rl("start",l,it,C,ve,P,0,A),$t=this.markerEnd=Rl("end",l,it,C,ve,P,0,A),A&&(pt=wt.quickSetter([Yt,$t],C.a,nn)),!B&&!(Ei.length&&cr(L,"fixedMarkers")===!0)&&(wx(I?me:L),wt.set([V,ee],{force3D:!0}),Q=wt.quickSetter(V,C.a,nn),ft=wt.quickSetter(ee,C.a,nn))}if(A){var ot=A.vars.onUpdate,rt=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){R.update(0,0,1),ot&&ot.apply(A,rt||[])})}if(R.previous=function(){return te[te.indexOf(R)-1]},R.next=function(){return te[te.indexOf(R)+1]},R.revert=function(st,Nt){if(!Nt)return R.kill(!0);var Et=st!==!1||!R.enabled,Zt=bn;Et!==R.isReverted&&(Et&&(ut=Math.max(J(),R.scroll.rec||0),Gt=R.progress,et=i&&i.progress()),Yt&&[Yt,$t,V,ee].forEach(function(Ze){return Ze.style.display=Et?"none":"block"}),Et&&(bn=R,R.update(Et)),f&&(!S||!R.isActive)&&(Et?Px(f,Ht,de):Gh(f,Ht,yi(f),at)),Et||R.update(Et),bn=Zt,R.isReverted=Et)},R.refresh=function(st,Nt,Et,Zt){if(!((bn||!R.enabled)&&!Nt)){if(f&&st&&Si){cn(r,"scrollEnd",Em);return}!kn&&j&&j(R),bn=R,tt.tween&&!Et&&(tt.tween.kill(),tt.tween=0),lt&&lt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(gt){return gt.vars.immediateRender&&gt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ze=St(),ne=Mt(),Ee=A?A.duration():Wi(L,C),an=qt<=.01||!qt,Ce=0,Se=Zt||0,oe=fs(Et)?Et.end:n.end,Pn=n.endTrigger||h,we=fs(Et)?Et.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),_n=R.pinnedContainer=n.pinnedContainer&&On(n.pinnedContainer,R),In=h&&Math.max(0,te.indexOf(R))||0,Je=In,ke,tn,Oi,Ls,on,Xe,pi,Ds,M,U,q,G,W;for(K&&fs(Et)&&(G=wt.getProperty(V,C.p),W=wt.getProperty(ee,C.p));Je-- >0;)Xe=te[Je],Xe.end||Xe.refresh(0,1)||(bn=R),pi=Xe.pin,pi&&(pi===h||pi===f||pi===_n)&&!Xe.isReverted&&(U||(U=[]),U.unshift(Xe),Xe.revert(!0,!0)),Xe!==te[Je]&&(In--,Je--);for(wn(we)&&(we=we(R)),we=em(we,"start",R),Bt=um(we,h,Ze,C,J(),Yt,V,R,ne,Y,B,Ee,A,R._startClamp&&"_startClamp")||(f?-.001:0),wn(oe)&&(oe=oe(R)),ii(oe)&&!oe.indexOf("+=")&&(~oe.indexOf(" ")?oe=(ii(we)?we.split(" ")[0]:"")+oe:(Ce=Dl(oe.substr(2),Ze),oe=ii(we)?we:(A?wt.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Bt):Bt)+Ce,Pn=h)),oe=em(oe,"end",R),Pt=Math.max(Bt,um(oe||(Pn?"100% 0":Ee),Pn,Ze,C,J()+Ce,$t,ee,R,ne,Y,B,Ee,A,R._endClamp&&"_endClamp"))||-.001,Ce=0,Je=In;Je--;)Xe=te[Je]||{},pi=Xe.pin,pi&&Xe.start-Xe._pinPush<=Bt&&!A&&Xe.end>0&&(ke=Xe.end-(R._startClamp?Math.max(0,Xe.start):Xe.start),(pi===h&&Xe.start-Xe._pinPush<Bt||pi===_n)&&isNaN(we)&&(Ce+=ke*(1-Xe.progress)),pi===f&&(Se+=ke));if(Bt+=Ce,Pt+=Ce,R._startClamp&&(R._startClamp+=Ce),R._endClamp&&!kn&&(R._endClamp=Pt||-.001,Pt=Math.min(Pt,Wi(L,C))),qt=Pt-Bt||(Bt-=.01)&&.001,an&&(Gt=wt.utils.clamp(0,1,wt.utils.normalize(Bt,Pt,ut))),R._pinPush=Se,Yt&&Ce&&(ke={},ke[C.a]="+="+Ce,_n&&(ke[C.p]="-="+J()),wt.set([Yt,$t],ke)),f&&!(qh&&R.end>=Wi(L,C)))ke=yi(f),Ls=C===Ke,Oi=J(),H=parseFloat(x(C.a))+Se,!Ee&&Pt>1&&(q=(I?xe.scrollingElement||ri:L).style,q={style:q,value:q["overflow"+C.a.toUpperCase()]},I&&yi(me)["overflow"+C.a.toUpperCase()]!=="scroll"&&(q.style["overflow"+C.a.toUpperCase()]="scroll")),Gh(f,Ht,ke),Ie=Pl(f),tn=ur(f,!0),Ds=B&&lr(L,Ls?Mn:Ke)(),g?(at=[g+C.os2,qt+Se+nn],at.t=Ht,Je=g===Qe?zl(f,C)+qt+Se:0,Je&&(at.push(C.d,Je+nn),Ht.style.flexBasis!=="auto"&&(Ht.style.flexBasis=Je+nn)),ea(at),_n&&te.forEach(function(gt){gt.pin===_n&&gt.vars.pinSpacing!==!1&&(gt._subPinOffset=!0)}),B&&J(ut)):(Je=zl(f,C),Je&&Ht.style.flexBasis!=="auto"&&(Ht.style.flexBasis=Je+nn)),B&&(on={top:tn.top+(Ls?Oi-Bt:Ds)+nn,left:tn.left+(Ls?Ds:Oi-Bt)+nn,boxSizing:"border-box",position:"fixed"},on[ps]=on["max"+na]=Math.ceil(tn.width)+nn,on[ms]=on["max"+nf]=Math.ceil(tn.height)+nn,on[vi]=on[vi+lo]=on[vi+ao]=on[vi+co]=on[vi+oo]="0",on[Qe]=ke[Qe],on[Qe+lo]=ke[Qe+lo],on[Qe+ao]=ke[Qe+ao],on[Qe+co]=ke[Qe+co],on[Qe+oo]=ke[Qe+oo],O=Lx(de,on,S),kn&&J(0)),i?(M=i._initted,Bh(1),i.render(i.duration(),!0,!0),$=x(C.a)-H+qt+Se,nt=Math.abs(qt-$)>1,B&&nt&&O.splice(O.length-2,2),i.render(0,!0,!0),M||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Bh(0)):$=qt,q&&(q.value?q.style["overflow"+C.a.toUpperCase()]=q.value:q.style.removeProperty("overflow-"+C.a));else if(h&&J()&&!A)for(tn=h.parentNode;tn&&tn!==me;)tn._pinOffset&&(Bt-=tn._pinOffset,Pt-=tn._pinOffset),tn=tn.parentNode;U&&U.forEach(function(gt){return gt.revert(!1,!0)}),R.start=Bt,R.end=Pt,mt=Ut=kn?ut:J(),!A&&!kn&&(mt<ut&&J(ut),R.scroll.rec=0),R.revert(!1,!0),zt=Tn(),N&&(kt=-1,N.restart(!0)),bn=0,i&&D&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(an||Gt!==R.progress||A||_||i&&!i._initted)&&(i&&!D&&(i._initted||Gt||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Bt<-.001&&!Gt?wt.utils.normalize(Bt,Pt,0):Gt,!0),R.progress=an||(mt-Bt)/qt===Gt?0:Gt),f&&g&&(Ht._pinOffset=Math.round(R.progress*$)),lt&&lt.invalidate(),isNaN(G)||(G-=wt.getProperty(V,C.p),W-=wt.getProperty(ee,C.p),Il(V,C,G),Il(Yt,C,G-(Zt||0)),Il(ee,C,W),Il($t,C,W-(Zt||0))),an&&!kn&&R.update(),u&&!kn&&!De&&(De=!0,u(R),De=!1)}},R.getVelocity=function(){return(J()-Ut)/(Tn()-ja)*1e3||0},R.endAnimation=function(){Qa(R.callbackAnimation),i&&(lt?lt.progress(1):i.paused()?D||Qa(i,R.direction<0,1):Qa(i,i.reversed()))},R.labelToScroll=function(st){return i&&i.labels&&(Bt||R.refresh()||Bt)+i.labels[st]/i.duration()*qt||0},R.getTrailing=function(st){var Nt=te.indexOf(R),Et=R.direction>0?te.slice(0,Nt).reverse():te.slice(Nt+1);return(ii(st)?Et.filter(function(Zt){return Zt.vars.preventOverlaps===st}):Et).filter(function(Zt){return R.direction>0?Zt.end<=Bt:Zt.start>=Pt})},R.update=function(st,Nt,Et){if(!(A&&!Et&&!st)){var Zt=kn===!0?ut:R.scroll(),Ze=st?0:(Zt-Bt)/qt,ne=Ze<0?0:Ze>1?1:Ze||0,Ee=R.progress,an,Ce,Se,oe,Pn,we,_n,In;if(Nt&&(Ut=mt,mt=A?J():Zt,y&&(ht=dt,dt=i&&!D?i.totalProgress():ne)),p&&f&&!bn&&!Tl&&Si&&(!ne&&Bt<Zt+(Zt-Ut)/(Tn()-ja)*p?ne=1e-4:ne===1&&Pt>Zt+(Zt-Ut)/(Tn()-ja)*p&&(ne=.9999)),ne!==Ee&&R.enabled){if(an=R.isActive=!!ne&&ne<1,Ce=!!Ee&&Ee<1,we=an!==Ce,Pn=we||!!ne!=!!Ee,R.direction=ne>Ee?1:-1,R.progress=ne,Pn&&!bn&&(Se=ne&&!Ee?0:ne===1?1:Ee===1?2:3,D&&(oe=!we&&k[Se+1]!=="none"&&k[Se+1]||k[Se],In=i&&(oe==="complete"||oe==="reset"||oe in i))),T&&(we||In)&&(In||d||!i)&&(wn(T)?T(R):R.getTrailing(T).forEach(function(Oi){return Oi.endAnimation()})),D||(lt&&!bn&&!Tl?(lt._dp._time-lt._start!==lt._time&&lt.render(lt._dp._time-lt._start),lt.resetTo?lt.resetTo("totalProgress",ne,i._tTime/i._tDur):(lt.vars.totalProgress=ne,lt.invalidate().restart())):i&&i.totalProgress(ne,!!(bn&&(zt||st)))),f){if(st&&g&&(Ht.style[g+C.os2]=ct),!B)z(eo(H+$*ne));else if(Pn){if(_n=!st&&ne>Ee&&Pt+1>Zt&&Zt+1>=Wi(L,C),S)if(!st&&(an||_n)){var Je=ur(f,!0),ke=Zt-Bt;hm(f,me,Je.top+(C===Ke?ke:0)+nn,Je.left+(C===Ke?0:ke)+nn)}else hm(f,Ht);ea(an||_n?O:Ie),nt&&ne<1&&an||z(H+(ne===1&&!_n?$:0))}}y&&!tt.tween&&!bn&&!Tl&&N.restart(!0),o&&(we||E&&ne&&(ne<1||!zh))&&ho(o.targets).forEach(function(Oi){return Oi.classList[an||E?"add":"remove"](o.className)}),a&&!D&&!st&&a(R),Pn&&!bn?(D&&(In&&(oe==="complete"?i.pause().totalProgress(1):oe==="reset"?i.restart(!0).pause():oe==="restart"?i.restart(!0):i[oe]()),a&&a(R)),(we||!zh)&&(c&&we&&Js(R,c),X[Se]&&Js(R,X[Se]),E&&(ne===1?R.kill(!1,1):X[Se]=0),we||(Se=ne===1?1:3,X[Se]&&Js(R,X[Se]))),v&&!an&&Math.abs(R.getVelocity())>(no(v)?v:2500)&&(Qa(R.callbackAnimation),lt?lt.progress(1):Qa(i,oe==="reverse"?1:!ne,1))):D&&a&&!bn&&a(R)}if(ft){var tn=A?Zt/A.duration()*(A._caScrollDist||0):Zt;Q(tn+(V._isFlipped?1:0)),ft(tn)}pt&&pt(-Zt/A.duration()*(A._caScrollDist||0))}},R.enable=function(st,Nt){R.enabled||(R.enabled=!0,cn(L,"resize",io),I||cn(L,"scroll",Ks),j&&cn(r,"refreshInit",j),st!==!1&&(R.progress=Gt=0,mt=Ut=kt=J()),Nt!==!1&&R.refresh())},R.getTween=function(st){return st&&tt?tt.tween:lt},R.setPositions=function(st,Nt,Et,Zt){if(A){var Ze=A.scrollTrigger,ne=A.duration(),Ee=Ze.end-Ze.start;st=Ze.start+Ee*st/ne,Nt=Ze.start+Ee*Nt/ne}R.refresh(!1,!1,{start:nm(st,Et&&!!R._startClamp),end:nm(Nt,Et&&!!R._endClamp)},Zt),R.update()},R.adjustPinSpacing=function(st){if(at&&st){var Nt=at.indexOf(C.d)+1;at[Nt]=parseFloat(at[Nt])+st+nn,at[1]=parseFloat(at[1])+st+nn,ea(at)}},R.disable=function(st,Nt){if(st!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Nt||lt&&lt.pause(),ut=0,_t&&(_t.uncache=1),j&&ln(r,"refreshInit",j),N&&(N.pause(),tt.tween&&tt.tween.kill()&&(tt.tween=0)),!I)){for(var Et=te.length;Et--;)if(te[Et].scroller===L&&te[Et]!==R)return;ln(L,"resize",io),I||ln(L,"scroll",Ks)}},R.kill=function(st,Nt){R.disable(st,Nt),lt&&!Nt&&lt.kill(),l&&delete Zh[l];var Et=te.indexOf(R);Et>=0&&te.splice(Et,1),Et===zn&&Ul>0&&zn--,Et=0,te.forEach(function(Zt){return Zt.scroller===R.scroller&&(Et=1)}),Et||kn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),Nt||i.kill()),Yt&&[Yt,$t,V,ee].forEach(function(Zt){return Zt.parentNode&&Zt.parentNode.removeChild(Zt)}),uo===R&&(uo=0),f&&(_t&&(_t.uncache=1),Et=0,te.forEach(function(Zt){return Zt.pin===f&&Et++}),Et||(_t.spacer=0)),n.onKill&&n.onKill(R)},te.push(R),R.enable(!1,!1),xt&&xt(R),i&&i.add&&!qt){var Dt=R.update;R.update=function(){R.update=Dt,jt.cache++,Bt||Pt||R.refresh()},wt.delayedCall(.01,R.update),qt=.01,Bt=Pt=0}else R.refresh();f&&Rx()},r.register=function(n){return Qs||(wt=n||Sm(),ym()&&window.document&&r.enable(),Qs=to),Qs},r.defaults=function(n){if(n)for(var i in n)Cl[i]=n[i];return Cl},r.disable=function(n,i){to=0,te.forEach(function(a){return a[i?"kill":"disable"](n)}),ln(ie,"wheel",Ks),ln(xe,"scroll",Ks),clearInterval(bl),ln(xe,"touchcancel",Hi),ln(me,"touchstart",Hi),Al(ln,xe,"pointerdown,touchstart,mousedown",im),Al(ln,xe,"pointerup,touchend,mouseup",rm),Bl.kill(),wl(ln);for(var s=0;s<jt.length;s+=3)El(ln,jt[s],jt[s+1]),El(ln,jt[s],jt[s+2])},r.enable=function(){if(ie=window,xe=document,ri=xe.documentElement,me=xe.body,wt){if(ho=wt.utils.toArray,ro=wt.utils.clamp,Yh=wt.core.context||Hi,Bh=wt.core.suppressOverwrites||Hi,Qh=ie.history.scrollRestoration||"auto",Jh=ie.pageYOffset||0,wt.core.globals("ScrollTrigger",r),me){to=1,ta=document.createElement("div"),ta.style.height="100vh",ta.style.position="absolute",Im(),Mx(),He.register(wt),r.isTouch=He.isTouch,Nr=He.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Xh=He.isTouch===1,cn(ie,"wheel",Ks),Kh=[ie,xe,ri,me],wt.matchMedia?(r.matchMedia=function(u){var d=wt.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},wt.addEventListener("matchMediaInit",function(){Rm(),sf()}),wt.addEventListener("matchMediaRevert",function(){return Cm()}),wt.addEventListener("matchMedia",function(){ds(0,1),vs("matchMedia")}),wt.matchMedia().add("(orientation: portrait)",function(){return Vh(),Vh})):console.warn("Requires GSAP 3.11.0 or later"),Vh(),cn(xe,"scroll",Ks);var n=me.hasAttribute("style"),i=me.style,s=i.borderTopStyle,a=wt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=ur(me),Ke.m=Math.round(o.top+Ke.sc())||0,Mn.m=Math.round(o.left+Mn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(me.setAttribute("style",""),me.removeAttribute("style")),bl=setInterval(om,250),wt.delayedCall(.5,function(){return Tl=0}),cn(xe,"touchcancel",Hi),cn(me,"touchstart",Hi),Al(cn,xe,"pointerdown,touchstart,mousedown",im),Al(cn,xe,"pointerup,touchend,mouseup",rm),Wh=wt.utils.checkPrefix("transform"),Fl.push(Wh),Qs=Tn(),Bl=wt.delayedCall(.2,ds).pause(),js=[xe,"visibilitychange",function(){var u=ie.innerWidth,d=ie.innerHeight;xe.hidden?(jp=u,tm=d):(jp!==u||tm!==d)&&io()},xe,"DOMContentLoaded",ds,ie,"load",ds,ie,"resize",io],wl(cn),te.forEach(function(u){return u.enable(0,1)}),l=0;l<jt.length;l+=3)El(ln,jt[l],jt[l+1]),El(ln,jt[l],jt[l+2])}else if(xe){var c=function u(){r.enable(),xe.removeEventListener("DOMContentLoaded",u)};xe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(zh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(bl)||(bl=i)&&setInterval(om,i),"ignoreMobileResize"in n&&(Xh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(wl(ln)||wl(cn,n.autoRefreshEvents||"none"),_m=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=On(n),a=jt.indexOf(s),o=_s(s);~a&&jt.splice(a,o?6:2),i&&(o?Ei.unshift(ie,i,me,i,ri,i):Ei.unshift(s,i))},r.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ii(n)?On(n):n).getBoundingClientRect(),o=a[s?ps:ms]*i||0;return s?a.right-o>0&&a.left+o<ie.innerWidth:a.bottom-o>0&&a.top+o<ie.innerHeight},r.positionInViewport=function(n,i,s){ii(n)&&(n=On(n));var a=n.getBoundingClientRect(),o=a[s?ps:ms],l=i==null?o/2:i in kl?kl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ie.innerWidth:(a.top+l)/ie.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=xs.killAll||[];xs={},i.forEach(function(s){return s()})}},r})();Wt.version="3.15.0";Wt.saveStyles=function(r){return r?ho(r).forEach(function(t){if(t&&t.style){var e=ni.indexOf(t);e>=0&&ni.splice(e,5),ni.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),wt.core.getCache(t),Yh())}}):ni};Wt.revert=function(r,t){return sf(!r,t)};Wt.create=function(r,t){return new Wt(r,t)};Wt.refresh=function(r){return r?io(!0):(Qs||Wt.register())&&ds(!0)};Wt.update=function(r){return++jt.cache&&hr(r===!0?2:0)};Wt.clearScrollMemory=Pm;Wt.maxScroll=function(r,t){return Wi(r,t?Mn:Ke)};Wt.getScrollFunc=function(r,t){return lr(On(r),t?Mn:Ke)};Wt.getById=function(r){return Zh[r]};Wt.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Wt.isScrolling=function(){return!!Si};Wt.snapDirectional=rf;Wt.addEventListener=function(r,t){var e=xs[r]||(xs[r]=[]);~e.indexOf(t)||e.push(t)};Wt.removeEventListener=function(r,t){var e=xs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Wt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var d=[],h=[],f=wt.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),h.push(g),s<=d.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&wn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return wn(s)&&(s=s(),cn(Wt,"refresh",function(){return s=t.batchMax()})),ho(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(Wt.create(c))}),e};var dm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Hh=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(He.isTouch?" pinch-zoom":""):"none",t===ri&&r(me,e)},Ll={auto:1,scroll:1},Nx=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||wt.core.getCache(s),o=Tn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==me&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ll[(l=yi(s)).overflowY]||Ll[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!_s(s)&&(Ll[(l=yi(s)).overflowY]||Ll[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Dm=function(t,e,n,i){return He.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Nx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&cn(xe,He.eventTypes[0],mm,!1,!0)},onDisable:function(){return ln(xe,He.eventTypes[0],mm,!0)}})},Ux=/(input|label|select|textarea)/i,pm,mm=function(t){var e=Ux.test(t.target.tagName);(e||pm)&&(t._gsapAllow=!0,pm=e)},Fx=function(t){fs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=On(t.target)||ri,u=wt.core.globals().ScrollSmoother,d=u&&u.get(),h=Nr&&(t.content&&On(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=lr(c,Ke),g=lr(c,Mn),_=1,p=(He.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,m=0,b=wn(i)?function(){return i(o)}:function(){return i||2.8},E,y,S=Dm(c,t.type,!0,s),w=function(){return y=!1},A=Hi,v=Hi,T=function(){l=Wi(c,Ke),v=ro(Nr?1:0,l),n&&(A=ro(0,Wi(c,Mn))),E=gs},C=function(){h._gsap.y=eo(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(w);var K=eo(o.deltaY/2),Y=v(f.v-K);if(h&&Y!==f.v+f.offset){f.offset=Y-f.v;var R=eo((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",f.cacheID=jt.cache,hr()}return!0}f.offset&&C(),y=!0},L,F,I,B,X=function(){T(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return h&&wt.set(h,{y:"+=0"}),t.ignoreCheck=function(k){return Nr&&k.type==="touchmove"&&D(k)||_>1.05&&k.type!=="touchstart"||o.isGesturing||k.touches&&k.touches.length>1},t.onPress=function(){y=!1;var k=_;_=eo((ie.visualViewport&&ie.visualViewport.scale||1)/p),L.pause(),k!==_&&Hh(c,_>1.01?!0:n?!1:"x"),F=g(),I=f(),T(),E=gs},t.onRelease=t.onGestureStart=function(k,K){if(f.offset&&C(),!K)B.restart(!0);else{jt.cache++;var Y=b(),R,j;n&&(R=g(),j=R+Y*.05*-k.velocityX/.227,Y*=dm(g,R,j,Wi(c,Mn)),L.vars.scrollX=A(j)),R=f(),j=R+Y*.05*-k.velocityY/.227,Y*=dm(f,R,j,Wi(c,Ke)),L.vars.scrollY=v(j),L.invalidate().duration(Y).play(.01),(Nr&&L.vars.scrollY>=l||R>=l-1)&&wt.to({},{onUpdate:X,duration:Y})}a&&a(k)},t.onWheel=function(){L._ts&&L.pause(),Tn()-m>1e3&&(E=0,m=Tn())},t.onChange=function(k,K,Y,R,j){if(gs!==E&&T(),K&&n&&g(A(R[2]===K?F+(k.startX-k.x):g()+K-R[1])),Y){f.offset&&C();var St=j[2]===Y,Mt=St?I+k.startY-k.y:f()+Y-j[1],kt=v(Mt);St&&Mt!==kt&&(I+=kt-Mt),f(kt)}(Y||K)&&hr()},t.onEnable=function(){Hh(c,n?!1:"x"),Wt.addEventListener("refresh",X),cn(ie,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},t.onDisable=function(){Hh(c,!0),ln(ie,"resize",X),Wt.removeEventListener("refresh",X),S.kill()},t.lockAxis=t.lockAxis!==!1,o=new He(t),o.iOS=Nr,Nr&&!f()&&f(1),Nr&&wt.ticker.add(Hi),B=o._dc,L=wt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Lm(f,f(),function(){return L.pause()})},onUpdate:hr,onComplete:B.vars.onComplete}),o};Wt.sort=function(r){if(wn(r))return te.sort(r);var t=ie.pageYOffset||0;return Wt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),te.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Wt.observe=function(r){return new He(r)};Wt.normalizeScroll=function(r){if(typeof r=="undefined")return Bn;if(r===!0&&Bn)return Bn.enable();if(r===!1){Bn&&Bn.kill(),Bn=r;return}var t=r instanceof He?r:Fx(r);return Bn&&Bn.target===t.target&&Bn.kill(),_s(t.target)&&(Bn=t),t};Wt.core={_getVelocityProp:Ml,_inputObserver:Dm,_scrollers:jt,_proxies:Ei,bridge:{ss:function(){Si||vs("scrollStart"),Si=Tn()},ref:function(){return bn}}};Sm()&&wt.registerPlugin(Wt);var po={title:"Admirin\u2019 You",artist:"Karan Aujla",src:"assets/audio/admirin-you.mp3"},ia=[{focus:"50% 32%",line:"Karan Aujla wrote \u201CAdmirin\u2019 You\u201D without ever meeting you. Imagine what I could write."},{focus:"50% 42%",line:"That side-eye smile should come with a warning label. I read it way too late."},{focus:"50% 50%",line:"Are those freckles or a star map? Because I keep getting lost in them."},{focus:"50% 42%",line:"Two little bows in your hair, and somehow I\u2019m the one who got tied up."},{focus:"50% 42%",line:"Same photo, darker filter. Still dangerously pretty, just with the lights turned down."},{focus:"50% 52%",line:"Even your T-shirt is wearing sunglasses. Smart. You\u2019re a lot to look at directly."},{focus:"54% 50%",line:"That pout could end wars. Or start them. Either way, I\u2019m on your side."},{focus:"50% 50%",line:"Blurry photo, Beyonc\xE9 on the sticker, and still the sharpest thing on my screen. Diva, confirmed."},{focus:"50% 52%",line:"Resting your face on your hand like it\u2019s heavy. Must be all the cute you carry around."},{focus:"50% 55%",line:"Red outfit, red lips. Is this a photo or a traffic light? Because I stopped everything."},{focus:"50% 38%",line:"Your sticker says \u201Cget out!\u201D but that face says \u201Cstay forever.\u201D I\u2019m listening to the face."},{focus:"50% 62%",line:"Covered in dollar signs and still priceless. Economists are confused. I am not."},{focus:"50% 62%",line:"You put on glasses to see better. Great, now you can see exactly how hard I\u2019m staring."},{focus:"50% 48%",line:"That look says \u201CI know exactly what I\u2019m doing.\u201D You do. And you\u2019re doing it to me."},{focus:"55% 50%",line:"Wearing camouflage doesn\u2019t work when you\u2019re this impossible to miss."},{focus:"50% 50%",line:"Your earrings are swinging and so is my heartbeat. My cardiologist says it\u2019s you."},{focus:"50% 58%",line:"The camera couldn\u2019t focus. Honestly, same. Every time you smile."},{focus:"50% 50%",line:"Too close, too blurry, too cute. Two of those are the camera\u2019s fault. One is entirely yours."},{focus:"56% 50%",line:"Butterflies on your face, butterflies in my stomach. I think we match."},{focus:"50% 48%",line:"You signed this one with a heart. Bold of you to assume I still had mine after seeing it."},{focus:"50% 64%",line:"If you keep fixing your hair like that, someone\u2019s going to have to fix my heart rate."},{focus:"50% 52%",line:"Hand behind your ear like you\u2019re listening. So here it is: you\u2019re my favourite notification."},{focus:"50% 52%",line:"Even the ceiling fan showed up for this one. You have a lot of fans. I\u2019m still the biggest."}].map((r,t)=>{let e=String(t+1).padStart(2,"0");return{...r,n:e,src:`assets/photos/${e}.webp`,thumb:`assets/photos/${e}-t.webp`}});var eg=0,Uf=1,ng=2;var ko=1,ig=2,ba=3,Zr=0,Gn=1,$i=2,Ki=0,Ta=1,Vo=2,Ff=3,Of=4,rg=5;var Es=100,sg=101,ag=102,og=103,lg=104,cg=200,ug=201,hg=202,fg=203,Bf=204,zf=205,dg=206,pg=207,mg=208,gg=209,_g=210,xg=211,vg=212,yg=213,Sg=214,hc=0,fc=1,dc=2,xa=3,pc=4,mc=5,gc=6,_c=7,kf=0,Mg=1,bg=2,Di=0,Vf=1,Gf=2,Hf=3,Wf=4,Xf=5,Yf=6,qf=7;var Zf=300,Jr=301,Cs=302,Wc=303,Xc=304,Go=306,xc=1e3,Yi=1001,vc=1002,hn=1003,Tg=1004;var Ho=1005;var gn=1006,Yc=1007;var $r=1008;var hi=1009,Jf=1010,$f=1011,wa=1012,qc=1013,Ni=1014,Ui=1015,Fi=1016,Zc=1017,Jc=1018,Aa=1020,Kf=35902,Qf=35899,jf=1021,td=1022,wi=1023,qi=1026,Kr=1027,ed=1028,$c=1029,Qr=1030,Kc=1031;var Qc=1033,Wo=33776,Xo=33777,Yo=33778,qo=33779,jc=35840,tu=35841,eu=35842,nu=35843,iu=36196,ru=37492,su=37496,au=37488,ou=37489,Zo=37490,lu=37491,cu=37808,uu=37809,hu=37810,fu=37811,du=37812,pu=37813,mu=37814,gu=37815,_u=37816,xu=37817,vu=37818,yu=37819,Su=37820,Mu=37821,bu=36492,Tu=36494,wu=36495,Au=36283,Eu=36284,Jo=36285,Cu=36286;var yo=2300,yc=2301,cc=2302,Cf=2303,Rf=2400,Pf=2401,If=2402;var wg=3200;var nd=0,Ag=1,xr="",oi="srgb",So="srgb-linear",Mo="linear",ge="srgb";var uc=7680;var Eg=519,Cg=512,Rg=513,Pg=514,Ru=515,Ig=516,Lg=517,Pu=518,Dg=519,Ng=35044;var id="300 es",Li=2e3,bo=2001;function Ox(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Bx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function To(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ug(){let r=To("canvas");return r.style.display="block",r}var Nm={},va=null;function rd(...r){let t="THREE."+r.shift();va?va("log",t,...r):console.log(t,...r)}function Fg(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Vt(...r){r=Fg(r);let t="THREE."+r.shift();if(va)va("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function Xt(...r){r=Fg(r);let t="THREE."+r.shift();if(va)va("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function ws(...r){let t=r.join(" ");t in Nm||(Nm[t]=!0,Vt(...r))}function Og(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Bg={[hc]:fc,[dc]:gc,[pc]:_c,[xa]:mc,[fc]:hc,[gc]:dc,[_c]:pc,[mc]:xa},Zi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var af=Math.PI/180,Sc=180/Math.PI;function $o(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function ce(r,t,e){return Math.max(t,Math.min(e,r))}function zx(r,t){return(r%t+t)%t}function of(r,t,e){return(1-e)*r+e*t}function mo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var cd=class cd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};cd.prototype.isVector2=!0;var fe=cd,Ji=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==h||c!==f||u!==g){let p=l*h+c*f+u*g+d*_;p<0&&(h=-h,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let b=Math.acos(p),E=Math.sin(b);m=Math.sin(m*b)/E,o=Math.sin(o*b)/E,l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+_*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+g*o,d=d*m+_*o;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ud=class ud{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Um.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Um.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return lf.copy(this).projectOnVector(t),this.sub(lf)}reflect(t){return this.sub(lf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ud.prototype.isVector3=!0;var Z=ud,lf=new Z,Um=new Ji,hd=class hd{constructor(t,e,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],b=i[1],E=i[4],y=i[7],S=i[2],w=i[5],A=i[8];return s[0]=a*_+o*b+l*S,s[3]=a*p+o*E+l*w,s[6]=a*m+o*y+l*A,s[1]=c*_+u*b+d*S,s[4]=c*p+u*E+d*w,s[7]=c*m+u*y+d*A,s[2]=h*_+f*b+g*S,s[5]=h*p+f*E+g*w,s[8]=h*m+f*y+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=e*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ws("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cf.makeScale(t,e)),this}rotate(t){return ws("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cf.makeRotation(-t)),this}translate(t,e){return ws("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hd.prototype.isMatrix3=!0;var Jt=hd,cf=new Jt,Fm=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kx(){let r={enabled:!0,workingColorSpace:So,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ge&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ge&&(i.r=_a(i.r),i.g=_a(i.g),i.b=_a(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xr?Mo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[So]:{primaries:t,whitePoint:n,transfer:Mo,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),r}var ae=kx();function _r(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _a(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ra,Mc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ra===void 0&&(ra=To("canvas")),ra.width=t.width,ra.height=t.height;let i=ra.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ra}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=To("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=_r(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_r(e[n]/255)*255):e[n]=_r(e[n]);return{data:e,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vx=0,ya=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=$o(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(uf(i[a].image)):s.push(uf(i[a]))}else s=uf(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function uf(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Mc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var Gx=0,hf=new Z,Jn=class r extends Zi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Yi,i=Yi,s=gn,a=$r,o=wi,l=hi,c=r.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=$o(),this.name="",this.source=new ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(hf).x}get height(){return this.source.getSize(hf).y}get depth(){return this.source.getSize(hf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Vt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xc:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case vc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xc:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case vc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Zf;Jn.DEFAULT_ANISOTROPY=1;var fd=class fd{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,y=(f+1)/2,S=(m+1)/2,w=(u+h)/4,A=(d+_)/4,v=(g+p)/4;return E>y&&E>S?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=A/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=v/s),this.set(n,i,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-_)/b,this.z=(h-u)/b,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fd.prototype.isVector4=!0;var Oe=fd,bc=class extends Zi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},s=new Jn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ya(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends bc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wo=class extends Jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Tc=class extends Jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Hc=class Hc{constructor(t,e,n,i,s,a,o,l,c,u,d,h,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,d,h,f,g,_,p)}set(t,e,n,i,s,a,o,l,c,u,d,h,f,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hc().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/sa.setFromMatrixColumn(t,0).length(),s=1/sa.setFromMatrixColumn(t,1).length(),a=1/sa.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,g=c*u,_=c*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,_=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){let h=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hx,t,Wx)}lookAt(t,e,n){let i=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),Ur.crossVectors(n,si),Ur.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Ur.crossVectors(n,si)),Ur.normalize(),Gl.crossVectors(si,Ur),i[0]=Ur.x,i[4]=Gl.x,i[8]=si.x,i[1]=Ur.y,i[5]=Gl.y,i[9]=si.y,i[2]=Ur.z,i[6]=Gl.z,i[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],b=n[3],E=n[7],y=n[11],S=n[15],w=i[0],A=i[4],v=i[8],T=i[12],C=i[1],D=i[5],L=i[9],F=i[13],I=i[2],B=i[6],X=i[10],k=i[14],K=i[3],Y=i[7],R=i[11],j=i[15];return s[0]=a*w+o*C+l*I+c*K,s[4]=a*A+o*D+l*B+c*Y,s[8]=a*v+o*L+l*X+c*R,s[12]=a*T+o*F+l*k+c*j,s[1]=u*w+d*C+h*I+f*K,s[5]=u*A+d*D+h*B+f*Y,s[9]=u*v+d*L+h*X+f*R,s[13]=u*T+d*F+h*k+f*j,s[2]=g*w+_*C+p*I+m*K,s[6]=g*A+_*D+p*B+m*Y,s[10]=g*v+_*L+p*X+m*R,s[14]=g*T+_*F+p*k+m*j,s[3]=b*w+E*C+y*I+S*K,s[7]=b*A+E*D+y*B+S*Y,s[11]=b*v+E*L+y*X+S*R,s[15]=b*T+E*F+y*k+S*j,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15],b=l*f-c*h,E=o*f-c*d,y=o*h-l*d,S=a*f-c*u,w=a*h-l*u,A=a*d-o*u;return e*(_*b-p*E+m*y)-n*(g*b-p*S+m*w)+i*(g*E-_*S+m*A)-s*(g*y-_*w+p*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],b=e*o-n*a,E=e*l-i*a,y=e*c-s*a,S=n*l-i*o,w=n*c-s*o,A=i*c-s*l,v=u*_-d*g,T=u*p-h*g,C=u*m-f*g,D=d*p-h*_,L=d*m-f*_,F=h*m-f*p,I=b*F-E*L+y*D+S*C-w*T+A*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return t[0]=(o*F-l*L+c*D)*B,t[1]=(i*L-n*F-s*D)*B,t[2]=(_*A-p*w+m*S)*B,t[3]=(h*w-d*A-f*S)*B,t[4]=(l*C-a*F-c*T)*B,t[5]=(e*F-i*C+s*T)*B,t[6]=(p*y-g*A-m*E)*B,t[7]=(u*A-h*y+f*E)*B,t[8]=(a*L-o*C+c*v)*B,t[9]=(n*C-e*L-s*v)*B,t[10]=(g*w-_*y+m*b)*B,t[11]=(d*y-u*w-f*b)*B,t[12]=(o*T-a*D-l*v)*B,t[13]=(e*D-n*T+i*v)*B,t[14]=(_*E-g*S-p*b)*B,t[15]=(u*S-d*E+h*b)*B,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,p=a*d,m=o*d,b=l*c,E=l*u,y=l*d,S=n.x,w=n.y,A=n.z;return i[0]=(1-(_+m))*S,i[1]=(f+y)*S,i[2]=(g-E)*S,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(h+m))*w,i[6]=(p+b)*w,i[7]=0,i[8]=(g+E)*A,i[9]=(p-b)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=sa.set(i[0],i[1],i[2]).length(),o=sa.set(i[4],i[5],i[6]).length(),l=sa.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ci.copy(this);let c=1/a,u=1/o,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,e.setFromRotationMatrix(Ci),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,i,s,a,o=Li,l=!1){let c=this.elements,u=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Li)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===bo)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Li,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Li)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===bo)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Hc.prototype.isMatrix4=!0;var We=Hc,sa=new Z,Ci=new We,Hx=new Z(0,0,0),Wx=new Z(1,1,1),Ur=new Z,Gl=new Z,si=new Z,Bm=new We,zm=new Ji,Vr=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zm.setFromEuler(this),this.setFromQuaternion(zm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vr.DEFAULT_ORDER="XYZ";var Ao=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xx=0,km=new Z,aa=new Ji,fr=new We,Hl=new Z,go=new Z,Yx=new Z,qx=new Ji,Vm=new Z(1,0,0),Gm=new Z(0,1,0),Hm=new Z(0,0,1),Wm={type:"added"},Zx={type:"removed"},oa={type:"childadded",child:null},ff={type:"childremoved",child:null},li=class r extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new Z,e=new Vr,n=new Ji,i=new Z(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Jt}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return aa.setFromAxisAngle(t,e),this.quaternion.multiply(aa),this}rotateOnWorldAxis(t,e){return aa.setFromAxisAngle(t,e),this.quaternion.premultiply(aa),this}rotateX(t){return this.rotateOnAxis(Vm,t)}rotateY(t){return this.rotateOnAxis(Gm,t)}rotateZ(t){return this.rotateOnAxis(Hm,t)}translateOnAxis(t,e){return km.copy(t).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vm,t)}translateY(t){return this.translateOnAxis(Gm,t)}translateZ(t){return this.translateOnAxis(Hm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Hl.copy(t):Hl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(go,Hl,this.up):fr.lookAt(Hl,go,this.up),this.quaternion.setFromRotationMatrix(fr),i&&(fr.extractRotation(i.matrixWorld),aa.setFromRotationMatrix(fr),this.quaternion.premultiply(aa.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wm),oa.child=t,this.dispatchEvent(oa),oa.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zx),ff.child=t,this.dispatchEvent(ff),ff.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fr.multiply(t.parent.matrixWorld)),t.applyMatrix4(fr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wm),oa.child=t,this.dispatchEvent(oa),oa.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,t,Yx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,qx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*i,s[13]+=n-s[1]*e-s[5]*n-s[9]*i,s[14]+=i-s[2]*e-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};li.DEFAULT_UP=new Z(0,1,0);li.DEFAULT_MATRIX_AUTO_UPDATE=!0;li.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ts=class extends li{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jx={type:"move"},Sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Jx)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ts;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Wl={h:0,s:0,l:0};function df(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var se=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=zx(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=df(a,s,t+1/3),this.g=df(a,s,t),this.b=df(a,s,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=oi){function n(s){s!==void 0&&parseFloat(s)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Vt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){let n=zg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}copyLinearToSRGB(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return ae.workingToColorSpace(En.copy(this),t),Math.round(ce(En.r*255,0,255))*65536+Math.round(ce(En.g*255,0,255))*256+Math.round(ce(En.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(En.copy(this),e);let n=En.r,i=En.g,s=En.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(En.copy(this),e),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=oi){ae.workingToColorSpace(En.copy(this),t);let e=En.r,n=En.g,i=En.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+e,Fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fr),t.getHSL(Wl);let n=of(Fr.h,Wl.h,e),i=of(Fr.s,Wl.s,e),s=of(Fr.l,Wl.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},En=new se;se.NAMES=zg;var Eo=class extends li{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vr,this.environmentIntensity=1,this.environmentRotation=new Vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ri=new Z,dr=new Z,pf=new Z,pr=new Z,la=new Z,ca=new Z,Xm=new Z,mf=new Z,gf=new Z,_f=new Z,xf=new Oe,vf=new Oe,yf=new Oe,kr=class r{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ri.subVectors(t,e),i.cross(Ri);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ri.subVectors(i,e),dr.subVectors(n,e),pf.subVectors(t,e);let a=Ri.dot(Ri),o=Ri.dot(dr),l=Ri.dot(pf),c=dr.dot(dr),u=dr.dot(pf),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,pr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pr.x),l.addScaledVector(a,pr.y),l.addScaledVector(o,pr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return xf.setScalar(0),vf.setScalar(0),yf.setScalar(0),xf.fromBufferAttribute(t,e),vf.fromBufferAttribute(t,n),yf.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(xf,s.x),a.addScaledVector(vf,s.y),a.addScaledVector(yf,s.z),a}static isFrontFacing(t,e,n,i){return Ri.subVectors(n,e),dr.subVectors(t,e),Ri.cross(dr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Ri.cross(dr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;la.subVectors(i,n),ca.subVectors(s,n),mf.subVectors(t,n);let l=la.dot(mf),c=ca.dot(mf);if(l<=0&&c<=0)return e.copy(n);gf.subVectors(t,i);let u=la.dot(gf),d=ca.dot(gf);if(u>=0&&d<=u)return e.copy(i);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(la,a);_f.subVectors(t,s);let f=la.dot(_f),g=ca.dot(_f);if(g>=0&&f<=g)return e.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ca,o);let p=u*g-f*d;if(p<=0&&d-u>=0&&f-g>=0)return Xm.subVectors(s,i),o=(d-u)/(d-u+(f-g)),e.copy(i).addScaledVector(Xm,o);let m=1/(p+_+h);return a=_*m,o=h*m,e.copy(n).addScaledVector(la,a).addScaledVector(ca,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gr=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pi):Pi.fromBufferAttribute(s,a),Pi.applyMatrix4(t.matrixWorld),this.expandByPoint(Pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xl.copy(n.boundingBox)),Xl.applyMatrix4(t.matrixWorld),this.union(Xl)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pi),Pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_o),Yl.subVectors(this.max,_o),ua.subVectors(t.a,_o),ha.subVectors(t.b,_o),fa.subVectors(t.c,_o),Or.subVectors(ha,ua),Br.subVectors(fa,ha),ys.subVectors(ua,fa);let e=[0,-Or.z,Or.y,0,-Br.z,Br.y,0,-ys.z,ys.y,Or.z,0,-Or.x,Br.z,0,-Br.x,ys.z,0,-ys.x,-Or.y,Or.x,0,-Br.y,Br.x,0,-ys.y,ys.x,0];return!Sf(e,ua,ha,fa,Yl)||(e=[1,0,0,0,1,0,0,0,1],!Sf(e,ua,ha,fa,Yl))?!1:(ql.crossVectors(Or,Br),e=[ql.x,ql.y,ql.z],Sf(e,ua,ha,fa,Yl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},mr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Pi=new Z,Xl=new Gr,ua=new Z,ha=new Z,fa=new Z,Or=new Z,Br=new Z,ys=new Z,_o=new Z,Yl=new Z,ql=new Z,Ss=new Z;function Sf(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ss.fromArray(r,s);let o=i.x*Math.abs(Ss.x)+i.y*Math.abs(Ss.y)+i.z*Math.abs(Ss.z),l=t.dot(Ss),c=e.dot(Ss),u=n.dot(Ss);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var je=new Z,Zl=new fe,$x=0,mn=class extends Zi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$x++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ng,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zl.fromBufferAttribute(this,e),Zl.applyMatrix3(t),this.setXY(e,Zl.x,Zl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zn(e,this.array),n=Zn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zn(e,this.array),n=Zn(n,this.array),i=Zn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Zn(e,this.array),n=Zn(n,this.array),i=Zn(i,this.array),s=Zn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Co=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ro=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var bi=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Kx=new Gr,xo=new Z,Mf=new Z,As=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Kx.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xo.subVectors(t,this.center);let e=xo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xo.copy(t.center).add(Mf)),this.expandByPoint(xo.copy(t.center).sub(Mf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qx=0,Mi=new We,bf=new li,da=new Z,ai=new Gr,vo=new Gr,un=new Z,ci=class r extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ox(t)?Ro:Co)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Mi.makeRotationFromQuaternion(t),this.applyMatrix4(Mi),this}rotateX(t){return Mi.makeRotationX(t),this.applyMatrix4(Mi),this}rotateY(t){return Mi.makeRotationY(t),this.applyMatrix4(Mi),this}rotateZ(t){return Mi.makeRotationZ(t),this.applyMatrix4(Mi),this}translate(t,e,n){return Mi.makeTranslation(t,e,n),this.applyMatrix4(Mi),this}scale(t,e,n){return Mi.makeScale(t,e,n),this.applyMatrix4(Mi),this}lookAt(t){return bf.lookAt(t),bf.updateMatrix(),this.applyMatrix4(bf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bi(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ai.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];vo.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(ai.min,vo.min),ai.expandByPoint(un),un.addVectors(ai.max,vo.max),ai.expandByPoint(un)):(ai.expandByPoint(vo.min),ai.expandByPoint(vo.max))}ai.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)un.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(un));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)un.fromBufferAttribute(o,c),l&&(da.fromBufferAttribute(t,c),un.add(da)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new Z,l[v]=new Z;let c=new Z,u=new Z,d=new Z,h=new fe,f=new fe,g=new fe,_=new Z,p=new Z;function m(v,T,C){c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[v].add(_),o[T].add(_),o[C].add(_),l[v].add(p),l[T].add(p),l[C].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,T=b.length;v<T;++v){let C=b[v],D=C.start,L=C.count;for(let F=D,I=D+L;F<I;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let E=new Z,y=new Z,S=new Z,w=new Z;function A(v){S.fromBufferAttribute(i,v),w.copy(S);let T=o[v];E.copy(T),E.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(w,T);let D=y.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,D)}for(let v=0,T=b.length;v<T;++v){let C=b[v],D=C.start,L=C.count;for(let F=D,I=D+L;F<I;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,u=new Z,d=new Z;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)un.fromBufferAttribute(t,e),un.normalize(),t.setXYZ(e,un.x,un.y,un.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new mn(h,u,d)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Tf=new Z,jx=new Z,tv=new Jt,Ii=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Tf.subVectors(n,e).cross(jx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Tf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||tv.getNormalMatrix(t),i=this.coplanarPoint(Tf).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ev=0,Hr=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=$o(),this.name="",this.type="Material",this.blending=Ta,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bf,this.blendDst=zf,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Eg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uc,this.stencilZFail=uc,this.stencilZPass=uc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Vt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Vt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ii().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var gr=new Z,wf=new Z,Jl=new Z,$l=new Z,Po=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=gr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gr.copy(this.origin).addScaledVector(this.direction,e),gr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){wf.copy(t).add(e).multiplyScalar(.5),Jl.copy(e).sub(t).normalize(),$l.copy(this.origin).sub(wf);let s=t.distanceTo(e)*.5,a=-this.direction.dot(Jl),o=$l.dot(this.direction),l=-$l.dot(Jl),c=$l.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(wf).addScaledVector(Jl,h),f}intersectSphere(t,e){if(t.radius<0)return null;gr.subVectors(t.center,this.origin);let n=gr.dot(this.direction),i=gr.dot(gr)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gr)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,p=e.z-a.z,m=n.x-a.x,b=n.y-a.y,E=n.z-a.z,y=Math.abs(l),S=Math.abs(c),w=Math.abs(u),A,v,T,C,D,L,F,I,B,X,k,K;if(y>=S&&y>=w?(T=l,L=d,B=g,K=m,l>=0?(A=c,v=u,C=h,D=f,F=_,I=p,X=b,k=E):(A=u,v=c,C=f,D=h,F=p,I=_,X=E,k=b)):S>=w?(T=c,L=h,B=_,K=b,c>=0?(A=u,v=l,C=f,D=d,F=p,I=g,X=E,k=m):(A=l,v=u,C=d,D=f,F=g,I=p,X=m,k=E)):(T=u,L=f,B=p,K=E,u>=0?(A=l,v=c,C=d,D=h,F=g,I=_,X=m,k=b):(A=c,v=l,C=h,D=d,F=_,I=g,X=b,k=m)),T===0)return null;let Y=A/T,R=v/T,j=1/T,St=C-Y*L,Mt=D-R*L,kt=F-Y*B,zt=I-R*B,Gt=X-Y*K,J=k-R*K,tt=Gt*zt-J*kt,_t=St*J-Mt*Gt,Ot=kt*Mt-zt*St;if(i){if(tt<0||_t<0||Ot<0)return null}else if((tt<0||_t<0||Ot<0)&&(tt>0||_t>0||Ot>0))return null;let mt=tt+_t+Ot;if(mt===0)return null;let Ut=j*(tt*L+_t*B+Ot*K);return(mt>0?Ut<0:Ut>0)?null:this.at(Ut/mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Io=class extends Hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vr,this.combine=kf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ym=new We,Ms=new Po,Kl=new As,qm=new Z,Ql=new Z,jl=new Z,tc=new Z,Af=new Z,ec=new Z,Zm=new Z,nc=new Z,Ti=class extends li{constructor(t=new ci,e=new Io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],d=s[l];u!==0&&(Af.fromBufferAttribute(d,t),a?ec.addScaledVector(Af,u):ec.addScaledVector(Af.sub(e),u))}e.add(ec)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(s),Ms.copy(t.ray).recast(t.near),!(Kl.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Kl,qm)===null||Ms.origin.distanceToSquared(qm)>(t.far-t.near)**2))&&(Ym.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(Ym),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ms)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,S=E;y<S;y+=3){let w=o.getX(y),A=o.getX(y+1),v=o.getX(y+2);i=ic(this,m,t,n,c,u,d,w,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);i=ic(this,a,t,n,c,u,d,b,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let p=h[g],m=a[p.materialIndex],b=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=b,S=E;y<S;y+=3){let w=y,A=y+1,v=y+2;i=ic(this,m,t,n,c,u,d,w,A,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let b=p,E=p+1,y=p+2;i=ic(this,a,t,n,c,u,d,b,E,y),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function nv(r,t,e,n,i,s,a,o){let l;if(t.side===Gn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Zr,o),l===null)return null;nc.copy(o),nc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(nc);return c<e.near||c>e.far?null:{distance:c,point:nc.clone(),object:r}}function ic(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Ql),r.getVertexPosition(l,jl),r.getVertexPosition(c,tc);let u=nv(r,t,e,n,Ql,jl,tc,Zm);if(u){let d=new Z;kr.getBarycoord(Zm,Ql,jl,tc,d),i&&(u.uv=kr.getInterpolatedAttribute(i,o,l,c,d,new fe)),s&&(u.uv1=kr.getInterpolatedAttribute(s,o,l,c,d,new fe)),a&&(u.normal=kr.getInterpolatedAttribute(a,o,l,c,d,new Z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new Z,materialIndex:0};kr.getNormal(Ql,jl,tc,h.normal),u.face=h,u.barycoord=d}return u}var wc=class extends Jn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=hn,u=hn,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bs=new As,iv=new fe(.5,.5),rc=new Z,Lo=class{constructor(t=new Ii,e=new Ii,n=new Ii,i=new Ii,s=new Ii,a=new Ii){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],b=s[12],E=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-a,f-u,m-g,S-b).normalize(),i[1].setComponents(c+a,f+u,m+g,S+b).normalize(),i[2].setComponents(c+o,f+d,m+_,S+E).normalize(),i[3].setComponents(c-o,f-d,m-_,S-E).normalize(),n)i[4].setComponents(l,h,p,y).normalize(),i[5].setComponents(c-l,f-h,m-p,S-y).normalize();else if(i[4].setComponents(c-l,f-h,m-p,S-y).normalize(),e===Li)i[5].setComponents(c+l,f+h,m+p,S+y).normalize();else if(e===bo)i[5].setComponents(l,h,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);let e=iv.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(rc.x=i.normal.x>0?t.max.x:t.min.x,rc.y=i.normal.y>0?t.max.y:t.min.y,rc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(rc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ac=class extends Hr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jm=new We,Lf=new Po,sc=new As,ac=new Z,Do=class extends li{constructor(t=new ci,e=new Ac){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sc.copy(n.boundingSphere),sc.applyMatrix4(i),sc.radius+=s,t.ray.intersectsSphere(sc)===!1)return;Jm.copy(i).invert(),Lf.copy(t.ray).applyMatrix4(Jm);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){let p=c.getX(g);ac.fromBufferAttribute(d,p),$m(ac,p,l,i,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)ac.fromBufferAttribute(d,g),$m(ac,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function $m(r,t,e,n,i,s,a){let o=Lf.distanceSqToPoint(r);if(o<e){let l=new Z;Lf.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var No=class extends Jn{constructor(t=[],e=Jr,n,i,s,a,o,l,c,u){super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Wr=class extends Jn{constructor(t,e,n=Ni,i,s,a,o=hn,l=hn,c,u=qi,d=1){if(u!==qi&&u!==Kr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ya(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ec=class extends Wr{constructor(t,e=Ni,n=Jr,i,s,a=hn,o=hn,l,c=qi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Uo=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ma=class r extends ci{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new bi(c,3)),this.setAttribute("normal",new bi(u,3)),this.setAttribute("uv",new bi(d,2));function g(_,p,m,b,E,y,S,w,A,v,T){let C=y/A,D=S/v,L=y/2,F=S/2,I=w/2,B=A+1,X=v+1,k=0,K=0,Y=new Z;for(let R=0;R<X;R++){let j=R*D-F;for(let St=0;St<B;St++){let Mt=St*C-L;Y[_]=Mt*b,Y[p]=j*E,Y[m]=I,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(St/A),d.push(1-R/v),k+=1}}for(let R=0;R<v;R++)for(let j=0;j<A;j++){let St=h+j+B*R,Mt=h+j+B*(R+1),kt=h+(j+1)+B*(R+1),zt=h+(j+1)+B*R;l.push(St,Mt,zt),l.push(Mt,kt,zt),K+=6}o.addGroup(f,K,T),f+=K,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Fo=class r extends ci{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){let b=m*h-a;for(let E=0;E<c;E++){let y=E*d-s;g.push(y,-b,0),_.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let E=b+c*m,y=b+c*(m+1),S=b+1+c*(m+1),w=b+1+c*m;f.push(E,y,w),f.push(y,S,w)}this.setIndex(f),this.setAttribute("position",new bi(g,3)),this.setAttribute("normal",new bi(_,3)),this.setAttribute("uv",new bi(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};function Rs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Km(i))i.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Km(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Rn(r){let t={};for(let e=0;e<r.length;e++){let n=Rs(r[e]);for(let i in n)t[i]=n[i]}return t}function Km(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function rv(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function sd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var kg={clone:Rs,merge:Rn},sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends Hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sv,this.fragmentShader=av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=rv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new se().setHex(i.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new We().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Cc=class extends Vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Rc=class extends Hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pc=class extends Hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function pa(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Ef(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Xr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ic=class extends Xr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rf,endingEnd:Rf}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pf:s=t,o=2*e-n;break;case If:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pf:a=t,l=2*n-e;break;case If:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-h*p+2*h*_-h*g,b=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*g+1,E=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let S=0;S!==o;++S)s[S]=m*a[u+S]+b*a[c+S]+E*a[l+S]+y*a[d+S];return s}},Lc=class extends Xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*d+a[l+h]*u;return s}},Dc=class extends Xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Nc=class extends Xr{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(i-e),_=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*g;return s}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=f*h+g*2,b=d[m],E=d[m+1],y=t*h+g*2,S=u[y],w=u[y+1],A=lv(n,e,b,S,i);s[g]=Vg(A,_,E,w,p)}return s}};function Vg(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function ov(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function lv(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=Vg(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let l=ov(s,t,e,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var ui=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pa(e,this.TimeBufferType),this.values=pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pa(t.times,Array),values:pa(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ef(t.settings)&&(n.settings={inTangents:pa(t.settings.inTangents,Array),outTangents:pa(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Lc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ic(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Nc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case yo:e=this.InterpolantFactoryMethodDiscrete;break;case yc:e=this.InterpolantFactoryMethodLinear;break;case cc:e=this.InterpolantFactoryMethodSmooth;break;case Cf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yo;case this.InterpolantFactoryMethodLinear:return yc;case this.InterpolantFactoryMethodSmooth:return cc;case this.InterpolantFactoryMethodBezier:return Cf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ef(this.settings)&&(Qm(this.settings.inTangents,t),Qm(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Xt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Bx(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===cc,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[h+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ef(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Qm(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}ui.prototype.ValueTypeName="";ui.prototype.TimeBufferType=Float32Array;ui.prototype.ValueBufferType=Float32Array;ui.prototype.DefaultInterpolation=yc;var Yr=class extends ui{constructor(t,e,n){super(t,e,n)}};Yr.prototype.ValueTypeName="bool";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=yo;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Uc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Uc.prototype.ValueTypeName="color";var Fc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Fc.prototype.ValueTypeName="number";var Oc=class extends Xr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let u=c+o;c!==u;c+=4)Ji.slerpFlat(s,0,a,c-o,a,c,l);return s}},Oo=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Oc(this.times,this.values,this.getValueSize(),t)}};Oo.prototype.ValueTypeName="quaternion";Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var qr=class extends ui{constructor(t,e,n){super(t,e,n)}};qr.prototype.ValueTypeName="string";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=yo;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends ui{constructor(t,e,n,i){super(t,e,n,i)}};Bc.prototype.ValueTypeName="vector";var zc=class{constructor(t,e,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gg=new zc,kc=class{constructor(t){this.manager=t!==void 0?t:Gg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};kc.DEFAULT_MATERIAL_NAME="__DEFAULT";var oc=new Z,lc=new Ji,Xi=new Z,Bo=class extends li{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oc,lc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,lc,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(oc,lc,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,lc,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zr=new Z,jm=new fe,tg=new fe,Cn=class extends Bo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Sc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(af*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(af*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zr.x,zr.y).multiplyScalar(-t/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-t/zr.z)}getViewSize(t,e){return this.getViewBounds(t,jm,tg),e.subVectors(tg,jm)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(af*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zo=class extends Bo{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ma=-90,ga=1,Vc=class extends li{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Cn(ma,ga,t,e);i.layers=this.layers,this.add(i);let s=new Cn(ma,ga,t,e);s.layers=this.layers,this.add(s);let a=new Cn(ma,ga,t,e);a.layers=this.layers,this.add(a);let o=new Cn(ma,ga,t,e);o.layers=this.layers,this.add(o);let l=new Cn(ma,ga,t,e);l.layers=this.layers,this.add(l);let c=new Cn(ma,ga,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===bo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Gc=class extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ad="\\[\\]\\.:\\/",cv=new RegExp("["+ad+"]","g"),od="[^"+ad+"]",uv="[^"+ad.replace("\\.","")+"]",hv=/((?:WC+[\/:])*)/.source.replace("WC",od),fv=/(WCOD+)?/.source.replace("WCOD",uv),dv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",od),pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",od),mv=new RegExp("^"+hv+fv+dv+pv+"$"),gv=["material","materials","bones","map"],Df=class{constructor(t,e,n){let i=n||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Pe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cv,"")}static parseTrackName(t){let e=mv.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);gv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=Df;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var WT=new Float32Array(1);var dd=class dd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}};dd.prototype.isMatrix2=!0;var Nf=dd;function ld(r,t,e,n){let i=_v(n);switch(e){case jf:return r*t;case ed:return r*t/i.components*i.byteLength;case $c:return r*t/i.components*i.byteLength;case Qr:return r*t*2/i.components*i.byteLength;case Kc:return r*t*2/i.components*i.byteLength;case td:return r*t*3/i.components*i.byteLength;case wi:return r*t*4/i.components*i.byteLength;case Qc:return r*t*4/i.components*i.byteLength;case Wo:case Xo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yo:case qo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tu:case nu:return Math.max(r,16)*Math.max(t,8)/4;case jc:case eu:return Math.max(r,8)*Math.max(t,8)/2;case iu:case ru:case au:case ou:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case su:case Zo:case lu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case hu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case du:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case pu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case mu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case gu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case _u:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case xu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case vu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case yu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Su:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Mu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case bu:case Tu:case wu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Au:case Eu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Jo:case Cu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _v(r){switch(r){case hi:case Jf:return{byteLength:1,components:1};case wa:case $f:case Fi:return{byteLength:2,components:1};case Zc:case Jc:return{byteLength:2,components:4};case Ni:case qc:case Ui:return{byteLength:4,components:1};case Kf:case Qf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function u_(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function vv(r){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var yv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Av=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Iv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$v="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ay=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ly=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,fy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,py=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,my=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_y=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,My=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,by=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ry=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Py=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ny=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ES=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$S=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:yv,alphahash_pars_fragment:Sv,alphamap_fragment:Mv,alphamap_pars_fragment:bv,alphatest_fragment:Tv,alphatest_pars_fragment:wv,aomap_fragment:Av,aomap_pars_fragment:Ev,batching_pars_vertex:Cv,batching_vertex:Rv,begin_vertex:Pv,beginnormal_vertex:Iv,bsdfs:Lv,iridescence_fragment:Dv,bumpmap_pars_fragment:Nv,clipping_planes_fragment:Uv,clipping_planes_pars_fragment:Fv,clipping_planes_pars_vertex:Ov,clipping_planes_vertex:Bv,color_fragment:zv,color_pars_fragment:kv,color_pars_vertex:Vv,color_vertex:Gv,common:Hv,cube_uv_reflection_fragment:Wv,defaultnormal_vertex:Xv,displacementmap_pars_vertex:Yv,displacementmap_vertex:qv,emissivemap_fragment:Zv,emissivemap_pars_fragment:Jv,colorspace_fragment:$v,colorspace_pars_fragment:Kv,envmap_fragment:Qv,envmap_common_pars_fragment:jv,envmap_pars_fragment:ty,envmap_pars_vertex:ey,envmap_physical_pars_fragment:fy,envmap_vertex:ny,fog_vertex:iy,fog_pars_vertex:ry,fog_fragment:sy,fog_pars_fragment:ay,gradientmap_pars_fragment:oy,lightmap_pars_fragment:ly,lights_lambert_fragment:cy,lights_lambert_pars_fragment:uy,lights_pars_begin:hy,lights_toon_fragment:dy,lights_toon_pars_fragment:py,lights_phong_fragment:my,lights_phong_pars_fragment:gy,lights_physical_fragment:_y,lights_physical_pars_fragment:xy,lights_fragment_begin:vy,lights_fragment_maps:yy,lights_fragment_end:Sy,lightprobes_pars_fragment:My,logdepthbuf_fragment:by,logdepthbuf_pars_fragment:Ty,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:Ay,map_fragment:Ey,map_pars_fragment:Cy,map_particle_fragment:Ry,map_particle_pars_fragment:Py,metalnessmap_fragment:Iy,metalnessmap_pars_fragment:Ly,morphinstance_vertex:Dy,morphcolor_vertex:Ny,morphnormal_vertex:Uy,morphtarget_pars_vertex:Fy,morphtarget_vertex:Oy,normal_fragment_begin:By,normal_fragment_maps:zy,normal_pars_fragment:ky,normal_pars_vertex:Vy,normal_vertex:Gy,normalmap_pars_fragment:Hy,clearcoat_normal_fragment_begin:Wy,clearcoat_normal_fragment_maps:Xy,clearcoat_pars_fragment:Yy,iridescence_pars_fragment:qy,opaque_fragment:Zy,packing:Jy,premultiplied_alpha_fragment:$y,project_vertex:Ky,dithering_fragment:Qy,dithering_pars_fragment:jy,roughnessmap_fragment:tS,roughnessmap_pars_fragment:eS,shadowmap_pars_fragment:nS,shadowmap_pars_vertex:iS,shadowmap_vertex:rS,shadowmask_pars_fragment:sS,skinbase_vertex:aS,skinning_pars_vertex:oS,skinning_vertex:lS,skinnormal_vertex:cS,specularmap_fragment:uS,specularmap_pars_fragment:hS,tonemapping_fragment:fS,tonemapping_pars_fragment:dS,transmission_fragment:pS,transmission_pars_fragment:mS,uv_pars_fragment:gS,uv_pars_vertex:_S,uv_vertex:xS,worldpos_vertex:vS,background_vert:yS,background_frag:SS,backgroundCube_vert:MS,backgroundCube_frag:bS,cube_vert:TS,cube_frag:wS,depth_vert:AS,depth_frag:ES,distance_vert:CS,distance_frag:RS,equirect_vert:PS,equirect_frag:IS,linedashed_vert:LS,linedashed_frag:DS,meshbasic_vert:NS,meshbasic_frag:US,meshlambert_vert:FS,meshlambert_frag:OS,meshmatcap_vert:BS,meshmatcap_frag:zS,meshnormal_vert:kS,meshnormal_frag:VS,meshphong_vert:GS,meshphong_frag:HS,meshphysical_vert:WS,meshphysical_frag:XS,meshtoon_vert:YS,meshtoon_frag:qS,points_vert:ZS,points_frag:JS,shadow_vert:$S,shadow_frag:KS,sprite_vert:QS,sprite_frag:jS},vt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},ji={basic:{uniforms:Rn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Rn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Rn([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Rn([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Rn([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new se(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Rn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Rn([vt.points,vt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Rn([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Rn([vt.common,vt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Rn([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Rn([vt.sprite,vt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:Rn([vt.common,vt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:Rn([vt.lights,vt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};ji.physical={uniforms:Rn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Iu={r:0,b:0,g:0},tM=new We,h_=new Jt;h_.set(-1,0,0,0,1,0,0,0,1);function eM(r,t,e,n,i,s){let a=new se(0),o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let y=b.backgroundBlurriness>0;E=t.get(E,y)}return E}function g(b){let E=!1,y=f(b);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===Go)?(c===void 0&&(c=new Ti(new Ma(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Rs(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tM.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(h_),c.material.toneMapped=ae.getTransfer(y.colorSpace)!==ge,(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ti(new Fo(2,2),new Vn({name:"BackgroundMaterial",uniforms:Rs(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ae.getTransfer(y.colorSpace)!==ge,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,E){b.getRGB(Iu,sd(r)),e.buffers.color.setClear(Iu.r,Iu.g,Iu.b,E,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:g,addToRenderList:_,dispose:m}}function nM(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,a=!1;function o(D,L,F,I,B){let X=!1,k=d(D,I,F,L);s!==k&&(s=k,c(s.object)),X=f(D,I,F,B),X&&g(D,I,F,B),B!==null&&t.update(B,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(D,L,F,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function d(D,L,F,I){let B=I.wireframe===!0,X=n[L.id];X===void 0&&(X={},n[L.id]=X);let k=D.isInstancedMesh===!0?D.id:0,K=X[k];K===void 0&&(K={},X[k]=K);let Y=K[F.id];Y===void 0&&(Y={},K[F.id]=Y);let R=Y[B];return R===void 0&&(R=h(l()),Y[B]=R),R}function h(D){let L=[],F=[],I=[];for(let B=0;B<e;B++)L[B]=0,F[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,L,F,I){let B=s.attributes,X=L.attributes,k=0,K=F.getAttributes();for(let Y in K)if(K[Y].location>=0){let j=B[Y],St=X[Y];if(St===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(St=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(St=D.instanceColor)),j===void 0||j.attribute!==St||St&&j.data!==St.data)return!0;k++}return s.attributesNum!==k||s.index!==I}function g(D,L,F,I){let B={},X=L.attributes,k=0,K=F.getAttributes();for(let Y in K)if(K[Y].location>=0){let j=X[Y];j===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(j=D.instanceColor));let St={};St.attribute=j,j&&j.data&&(St.data=j.data),B[Y]=St,k++}s.attributes=B,s.attributesNum=k,s.index=I}function _(){let D=s.newAttributes;for(let L=0,F=D.length;L<F;L++)D[L]=0}function p(D){m(D,0)}function m(D,L){let F=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;F[D]=1,I[D]===0&&(r.enableVertexAttribArray(D),I[D]=1),B[D]!==L&&(r.vertexAttribDivisor(D,L),B[D]=L)}function b(){let D=s.newAttributes,L=s.enabledAttributes;for(let F=0,I=L.length;F<I;F++)L[F]!==D[F]&&(r.disableVertexAttribArray(F),L[F]=0)}function E(D,L,F,I,B,X,k){k===!0?r.vertexAttribIPointer(D,L,F,B,X):r.vertexAttribPointer(D,L,F,I,B,X)}function y(D,L,F,I){_();let B=I.attributes,X=F.getAttributes(),k=L.defaultAttributeValues;for(let K in X){let Y=X[K];if(Y.location>=0){let R=B[K];if(R===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let j=R.normalized,St=R.itemSize,Mt=t.get(R);if(Mt===void 0)continue;let kt=Mt.buffer,zt=Mt.type,Gt=Mt.bytesPerElement,J=zt===r.INT||zt===r.UNSIGNED_INT||R.gpuType===qc;if(R.isInterleavedBufferAttribute){let tt=R.data,_t=tt.stride,Ot=R.offset;if(tt.isInstancedInterleavedBuffer){for(let mt=0;mt<Y.locationSize;mt++)m(Y.location+mt,tt.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let mt=0;mt<Y.locationSize;mt++)p(Y.location+mt);r.bindBuffer(r.ARRAY_BUFFER,kt);for(let mt=0;mt<Y.locationSize;mt++)E(Y.location+mt,St/Y.locationSize,zt,j,_t*Gt,(Ot+St/Y.locationSize*mt)*Gt,J)}else{if(R.isInstancedBufferAttribute){for(let tt=0;tt<Y.locationSize;tt++)m(Y.location+tt,R.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let tt=0;tt<Y.locationSize;tt++)p(Y.location+tt);r.bindBuffer(r.ARRAY_BUFFER,kt);for(let tt=0;tt<Y.locationSize;tt++)E(Y.location+tt,St/Y.locationSize,zt,j,St*Gt,St/Y.locationSize*tt*Gt,J)}}else if(k!==void 0){let j=k[K];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(Y.location,j);break;case 3:r.vertexAttrib3fv(Y.location,j);break;case 4:r.vertexAttrib4fv(Y.location,j);break;default:r.vertexAttrib1fv(Y.location,j)}}}}b()}function S(){T();for(let D in n){let L=n[D];for(let F in L){let I=L[F];for(let B in I){let X=I[B];for(let k in X)u(X[k].object),delete X[k];delete I[B]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let L=n[D.id];for(let F in L){let I=L[F];for(let B in I){let X=I[B];for(let k in X)u(X[k].object),delete X[k];delete I[B]}}delete n[D.id]}function A(D){for(let L in n){let F=n[L];for(let I in F){let B=F[I];if(B[D.id]===void 0)continue;let X=B[D.id];for(let k in X)u(X[k].object),delete X[k];delete B[D.id]}}}function v(D){for(let L in n){let F=n[L],I=D.isInstancedMesh===!0?D.id:0,B=F[I];if(B!==void 0){for(let X in B){let k=B[X];for(let K in k)u(k[K].object),delete k[K];delete B[X]}delete F[I],Object.keys(F).length===0&&delete n[L]}}}function T(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function iM(r,t,e){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function rM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==wi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==hi&&A!==Ui&&!v&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Vt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:y,maxSamples:S,samples:w}}function sM(r){let t=this,e=null,n=0,i=!1,s=!1,a=new Ii,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{let b=s?0:n,E=b*4,y=m.clippingState||null;l.value=y,y=u(g,h,E,f);for(let S=0;S!==E;++S)y[S]=e[S];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=f;E!==_;++E,y+=4)a.copy(d[E]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Ca=4,aM=6,oM=20,lM=256,Ko=new zo,Hg=new se,pd=null,md=0,gd=0,_d=!1,cM=new Z,Ps=new Z,Du=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=cM}=s;pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(pd,md,gd),this._renderer.xr.enabled=_d,t.scissorTest=!1,Ea(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jr||t.mapping===Cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pd=this._renderer.getRenderTarget(),md=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Fi,format:wi,colorSpace:So,depthBuffer:!1},i=Wg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wg(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=uM(s)),this._blurMaterial=fM(s,t,e),this._ggxMaterial=hM(s,t,e)}return i}_compileMaterial(t){let e=new Ti(new ci,t);this._renderer.compile(e,Ko)}_sceneToCubeUV(t,e,n,i,s){let l=new Cn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Hg),d.toneMapping=Di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ti(new Ma,new Io({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,b=t.background;b?b.isColor&&(p.color.copy(b),t.background=null,m=!0):(p.color.copy(Hg),m=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));let S=this._cubeSize;Ea(i,y*S,E>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Jr||t.mapping===Cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xg());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Ea(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ko)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-Ca?n-g+Ca:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ea(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,Ko),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Ea(t,p,m,3*_,2*_),i.setRenderTarget(t),i.render(o,Ko)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,i,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[i],d=3*u*(i>this._lodMax-Ca?i-this._lodMax+Ca:0),h=4*(this._cubeSize-u);Ea(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,Ko)}};function uM(r){let t=[],e=[],n=r,i=r-Ca+1+aM;for(let s=0;s<i;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let m=0;m<d;m++){let b=m%3*2/3-1,E=m>2?0:-1,y=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];g.set(y,f*h*m);for(let S=0;S<h;S++){let w=u[S*2]*2-1,A=u[S*2+1]*2-1;m===0?Ps.set(1,A,w):m===1?Ps.set(-w,1,-A):m===2?Ps.set(-w,A,1):m===3?Ps.set(-1,A,-w):m===4?Ps.set(-w,-1,A):Ps.set(w,A,-1),Ps.toArray(_,(m*h+S)*f)}}let p=new ci;p.setAttribute("position",new mn(g,f)),p.setAttribute("outputDirection",new mn(_,f)),e.push(new Ti(p,null)),n>Ca&&n--}return{lodMeshes:e,sizeLods:t}}function Wg(r,t,e){let n=new $n(r,t,e);return n.texture.mapping=Go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ea(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function hM(r,t,e){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function fM(r,t,e){return new Vn({name:"SphericalGaussianBlur",defines:{SAMPLES:oM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Xg(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Yg(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Fu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Nu=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new No(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ma(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:Rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Ki});s.uniforms.tEquirect.value=e;let a=new Ti(i,s),o=e.minFilter;return e.minFilter===$r&&(e.minFilter=gn),new Vc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}};function dM(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===Wc||f===Xc)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new Nu(g.height);return _.fromEquirectangularTexture(r,h),t.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Wc||f===Xc,_=f===Jr||f===Cs;if(g||_){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Du(r)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let b=h.image;return g&&b&&b.height>0||_&&b&&l(b)?(n===null&&(n=new Du(r)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Wc?h.mapping=Jr:f===Xc&&(h.mapping=Cs),h}function l(h){let f=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function pM(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ws("WebGLRenderer: "+n+" extension not supported."),i}}}function mM(r,t,e,n){let i={},s=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];let f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],r.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let E=0,y=b.length;E<y;E+=3){let S=b[E+0],w=b[E+1],A=b[E+2];h.push(S,w,w,A,A,S)}}else{let b=g.array;_=g.version;for(let E=0,y=b.length/3-1;E<y;E+=3){let S=E+0,w=E+1,A=E+2;h.push(S,w,w,A,A,S)}}let p=new(g.count>=65535?Ro:Co)(h,1);p.version=_;let m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function gM(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=h[p];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function _M(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function xM(r,t,e){let n=new WeakMap,i=new Oe;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*S*4*d),A=new wo(w,y,S,d);A.type=Ui,A.needsUpdate=!0;let v=E*4;for(let C=0;C<d;C++){let D=p[C],L=m[C],F=b[C],I=y*S*4*C;for(let B=0;B<D.count;B++){let X=B*v;f===!0&&(i.fromBufferAttribute(D,B),w[I+X+0]=i.x,w[I+X+1]=i.y,w[I+X+2]=i.z,w[I+X+3]=0),g===!0&&(i.fromBufferAttribute(L,B),w[I+X+4]=i.x,w[I+X+5]=i.y,w[I+X+6]=i.z,w[I+X+7]=0),_===!0&&(i.fromBufferAttribute(F,B),w[I+X+8]=i.x,w[I+X+9]=i.y,w[I+X+10]=i.z,w[I+X+11]=F.itemSize===4?i.w:1)}}h={count:d,texture:A,size:new fe(y,S)},n.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function vM(r,t,e,n,i){let s=new WeakMap;function a(c){let u=i.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var yM={[Vf]:"LINEAR_TONE_MAPPING",[Gf]:"REINHARD_TONE_MAPPING",[Hf]:"CINEON_TONE_MAPPING",[Wf]:"ACES_FILMIC_TONE_MAPPING",[Yf]:"AGX_TONE_MAPPING",[qf]:"NEUTRAL_TONE_MAPPING",[Xf]:"CUSTOM_TONE_MAPPING"};function SM(r,t,e,n,i,s){let a=new $n(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ci;c.setAttribute("position",new bi([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new bi([0,2,0,0,2,0],2));let u=new Cc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ti(c,u),h=new zo(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,b=[],E=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let w=0;w<b.length;w++){let A=b[w];A.setSize&&A.setSize(y,S)}},this.setEffects=function(y){b=y,E=b.length>0&&b[0].isRenderPass===!0;let S=a.width,w=a.height;b.length>0&&o===null&&(o=new $n(S,w,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new $n(S,w,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){let v=b[A];v.setSize&&v.setSize(S,w)}},this.begin=function(y,S){if(_||y.toneMapping===Di&&b.length===0)return!1;if(m=S,S!==null){let w=S.width,A=S.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return E===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Di,!0},this.hasRenderPass=function(){return E},this.end=function(y,S){y.toneMapping=p,_=!0;let w=a,A=o;for(let v=0;v<b.length;v++){let T=b[v];T.enabled!==!1&&(T.render(y,A,w,S),T.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},ae.getTransfer(f)===ge&&(u.defines.SRGB_TRANSFER="");let v=yM[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(d,h),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var f_=new Jn,yd=new Wr(1,1),d_=new wo,p_=new Tc,m_=new No,qg=[],Zg=[],Jg=new Float32Array(16),$g=new Float32Array(9),Kg=new Float32Array(4);function Pa(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=qg[i];if(s===void 0&&(s=new Float32Array(i),qg[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function rn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function sn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ou(r,t){let e=Zg[t];e===void 0&&(e=new Int32Array(t),Zg[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function MM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function bM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2fv(this.addr,t),sn(e,t)}}function TM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;r.uniform3fv(this.addr,t),sn(e,t)}}function wM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4fv(this.addr,t),sn(e,t)}}function AM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Kg.set(n),r.uniformMatrix2fv(this.addr,!1,Kg),sn(e,n)}}function EM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;$g.set(n),r.uniformMatrix3fv(this.addr,!1,$g),sn(e,n)}}function CM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(rn(e,n))return;Jg.set(n),r.uniformMatrix4fv(this.addr,!1,Jg),sn(e,n)}}function RM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function PM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2iv(this.addr,t),sn(e,t)}}function IM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3iv(this.addr,t),sn(e,t)}}function LM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4iv(this.addr,t),sn(e,t)}}function DM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function NM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;r.uniform2uiv(this.addr,t),sn(e,t)}}function UM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;r.uniform3uiv(this.addr,t),sn(e,t)}}function FM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;r.uniform4uiv(this.addr,t),sn(e,t)}}function OM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(yd.compareFunction=e.isReversedDepthBuffer()?Pu:Ru,s=yd):s=f_,e.setTexture2D(t||s,i)}function BM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||p_,i)}function zM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||m_,i)}function kM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||d_,i)}function VM(r){switch(r){case 5126:return MM;case 35664:return bM;case 35665:return TM;case 35666:return wM;case 35674:return AM;case 35675:return EM;case 35676:return CM;case 5124:case 35670:return RM;case 35667:case 35671:return PM;case 35668:case 35672:return IM;case 35669:case 35673:return LM;case 5125:return DM;case 36294:return NM;case 36295:return UM;case 36296:return FM;case 35678:case 36198:case 36298:case 36306:case 35682:return OM;case 35679:case 36299:case 36307:return BM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return kM}}function GM(r,t){r.uniform1fv(this.addr,t)}function HM(r,t){let e=Pa(t,this.size,2);r.uniform2fv(this.addr,e)}function WM(r,t){let e=Pa(t,this.size,3);r.uniform3fv(this.addr,e)}function XM(r,t){let e=Pa(t,this.size,4);r.uniform4fv(this.addr,e)}function YM(r,t){let e=Pa(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function qM(r,t){let e=Pa(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ZM(r,t){let e=Pa(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function JM(r,t){r.uniform1iv(this.addr,t)}function $M(r,t){r.uniform2iv(this.addr,t)}function KM(r,t){r.uniform3iv(this.addr,t)}function QM(r,t){r.uniform4iv(this.addr,t)}function jM(r,t){r.uniform1uiv(this.addr,t)}function tb(r,t){r.uniform2uiv(this.addr,t)}function eb(r,t){r.uniform3uiv(this.addr,t)}function nb(r,t){r.uniform4uiv(this.addr,t)}function ib(r,t,e){let n=this.cache,i=t.length,s=Ou(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=yd:a=f_;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function rb(r,t,e){let n=this.cache,i=t.length,s=Ou(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||p_,s[a])}function sb(r,t,e){let n=this.cache,i=t.length,s=Ou(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||m_,s[a])}function ab(r,t,e){let n=this.cache,i=t.length,s=Ou(e,i);rn(n,s)||(r.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||d_,s[a])}function ob(r){switch(r){case 5126:return GM;case 35664:return HM;case 35665:return WM;case 35666:return XM;case 35674:return YM;case 35675:return qM;case 35676:return ZM;case 5124:case 35670:return JM;case 35667:case 35671:return $M;case 35668:case 35672:return KM;case 35669:case 35673:return QM;case 5125:return jM;case 36294:return tb;case 36295:return eb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return ab}}var Sd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=VM(e.type)}},Md=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ob(e.type)}},bd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},xd=/(\w+)(\])?(\[|\.)?/g;function Qg(r,t){r.seq.push(t),r.map[t.id]=t}function lb(r,t,e){let n=r.name,i=n.length;for(xd.lastIndex=0;;){let s=xd.exec(n),a=xd.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Qg(e,c===void 0?new Sd(o,r,t):new Md(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new bd(o),Qg(e,d)),e=d}}}var Ra=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);lb(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function jg(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var cb=37297,ub=0;function hb(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var t_=new Jt;function fb(r){ae._getMatrix(t_,ae.workingColorSpace,r);let t=`mat3( ${t_.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case Mo:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function e_(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+hb(r.getShaderSource(t),o)}else return s}function db(r,t){let e=fb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var pb={[Vf]:"Linear",[Gf]:"Reinhard",[Hf]:"Cineon",[Wf]:"ACESFilmic",[Yf]:"AgX",[qf]:"Neutral",[Xf]:"Custom"};function mb(r,t){let e=pb[t];return e===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Lu=new Z;function gb(){ae.getLuminanceCoefficients(Lu);let r=Lu.x.toFixed(4),t=Lu.y.toFixed(4),e=Lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function xb(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vb(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function jo(r){return r!==""}function n_(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function i_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(r){return r.replace(yb,Mb)}var Sb=new Map;function Mb(r,t){let e=Qt[t];if(e===void 0){let n=Sb.get(t);if(n!==void 0)e=Qt[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Td(e)}var bb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r_(r){return r.replace(bb,Tb)}function Tb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function s_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var wb={[ko]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function Ab(r){return wb[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Eb={[Jr]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[Go]:"ENVMAP_TYPE_CUBE_UV"};function Cb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Eb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Rb={[Cs]:"ENVMAP_MODE_REFRACTION"};function Pb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Rb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ib={[kf]:"ENVMAP_BLENDING_MULTIPLY",[Mg]:"ENVMAP_BLENDING_MIX",[bg]:"ENVMAP_BLENDING_ADD"};function Lb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Ib[r.combine]||"ENVMAP_BLENDING_NONE"}function Db(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Nb(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Ab(e),c=Cb(e),u=Pb(e),d=Lb(e),h=Db(e),f=_b(e),g=xb(s),_=i.createProgram(),p,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jo).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(jo).join(`
`),m.length>0&&(m+=`
`)):(p=[s_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),m=[s_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Di?"#define TONE_MAPPING":"",e.toneMapping!==Di?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Di?mb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,db("linearToOutputTexel",e.outputColorSpace),gb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jo).join(`
`)),a=Td(a),a=n_(a,e),a=i_(a,e),o=Td(o),o=n_(o,e),o=i_(o,e),a=r_(a),o=r_(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=b+p+a,y=b+m+o,S=jg(i,i.VERTEX_SHADER,E),w=jg(i,i.FRAGMENT_SHADER,y);i.attachShader(_,S),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(D){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(S)||"",I=i.getShaderInfoLog(w)||"",B=L.trim(),X=F.trim(),k=I.trim(),K=!0,Y=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,w);else{let R=e_(i,S,"vertex"),j=e_(i,w,"fragment");Xt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+R+`
`+j)}else B!==""?Vt("WebGLProgram: Program Info Log:",B):(X===""||k==="")&&(Y=!1);Y&&(D.diagnostics={runnable:K,programLog:B,vertexShader:{log:X,prefix:p},fragmentShader:{log:k,prefix:m}})}i.deleteShader(S),i.deleteShader(w),v=new Ra(i,_),T=vb(i,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,cb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ub++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=w,this}var Ub=0,wd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ad(t),e.set(t,n)),n}},Ad=class{constructor(t){this.id=Ub++,this.code=t,this.usedTimes=0}};function Fb(r){return r===Qr||r===Zo||r===Jo}function Ob(r,t,e,n,i,s){let a=new Ao,o=new wd,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,C,D,L,F){let I=D.fog,B=L.geometry,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,k=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=t.get(v.envMap||X,k),Y=K&&K.mapping===Go?K.image.height:null,R=f[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&Vt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let j=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,St=j!==void 0?j.length:0,Mt=0;B.morphAttributes.position!==void 0&&(Mt=1),B.morphAttributes.normal!==void 0&&(Mt=2),B.morphAttributes.color!==void 0&&(Mt=3);let kt,zt,Gt,J;if(R){let Dt=ji[R];kt=Dt.vertexShader,zt=Dt.fragmentShader}else{kt=v.vertexShader,zt=v.fragmentShader;let Dt=o.getVertexShaderStage(v),st=o.getFragmentShaderStage(v);o.update(v,Dt,st),Gt=Dt.id,J=st.id}let tt=r.getRenderTarget(),_t=r.state.buffers.depth.getReversed(),Ot=L.isInstancedMesh===!0,mt=L.isBatchedMesh===!0,Ut=!!v.map,Bt=!!v.matcap,Pt=!!K,Yt=!!v.aoMap,$t=!!v.lightMap,V=!!v.bumpMap&&v.wireframe===!1,ee=!!v.normalMap,ve=!!v.displacementMap,De=!!v.emissiveMap,qt=!!v.metalnessMap,de=!!v.roughnessMap,O=v.anisotropy>0,Ie=v.clearcoat>0,Ht=v.dispersion>0,P=v.retroreflectivity>0,x=v.iridescence>0,z=v.sheen>0,H=v.transmission>0,$=O&&!!v.anisotropyMap,ct=Ie&&!!v.clearcoatMap,at=Ie&&!!v.clearcoatNormalMap,Q=Ie&&!!v.clearcoatRoughnessMap,nt=x&&!!v.iridescenceMap,ft=x&&!!v.iridescenceThicknessMap,At=z&&!!v.sheenColorMap,dt=z&&!!v.sheenRoughnessMap,ht=!!v.specularMap,lt=!!v.specularColorMap,It=!!v.specularIntensityMap,Ft=H&&!!v.transmissionMap,N=H&&!!v.thicknessMap,ut=!!v.gradientMap,et=!!v.alphaMap,pt=v.alphaTest>0,xt=!!v.alphaHash,it=!!v.extensions,ot=Di;v.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ot=r.toneMapping);let rt={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:kt,fragmentShader:zt,defines:v.defines,customVertexShaderID:Gt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:mt,batchingColor:mt&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,outputColorSpace:tt===null?r.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ut,matcap:Bt,envMap:Pt,envMapMode:Pt&&K.mapping,envMapCubeUVHeight:Y,aoMap:Yt,lightMap:$t,bumpMap:V,normalMap:ee,displacementMap:ve,emissiveMap:De,normalMapObjectSpace:ee&&v.normalMapType===Ag,normalMapTangentSpace:ee&&v.normalMapType===nd,packedNormalMap:ee&&v.normalMapType===nd&&Fb(v.normalMap.format),metalnessMap:qt,roughnessMap:de,anisotropy:O,anisotropyMap:$,clearcoat:Ie,clearcoatMap:ct,clearcoatNormalMap:at,clearcoatRoughnessMap:Q,dispersion:Ht,retroreflection:P,iridescence:x,iridescenceMap:nt,iridescenceThicknessMap:ft,sheen:z,sheenColorMap:At,sheenRoughnessMap:dt,specularMap:ht,specularColorMap:lt,specularIntensityMap:It,transmission:H,transmissionMap:Ft,thicknessMap:N,gradientMap:ut,opaque:v.transparent===!1&&v.blending===Ta&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:xt,combine:v.combine,mapUv:Ut&&g(v.map.channel),aoMapUv:Yt&&g(v.aoMap.channel),lightMapUv:$t&&g(v.lightMap.channel),bumpMapUv:V&&g(v.bumpMap.channel),normalMapUv:ee&&g(v.normalMap.channel),displacementMapUv:ve&&g(v.displacementMap.channel),emissiveMapUv:De&&g(v.emissiveMap.channel),metalnessMapUv:qt&&g(v.metalnessMap.channel),roughnessMapUv:de&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:ct&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:At&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(v.sheenRoughnessMap.channel),specularMapUv:ht&&g(v.specularMap.channel),specularColorMapUv:lt&&g(v.specularColorMap.channel),specularIntensityMapUv:It&&g(v.specularIntensityMap.channel),transmissionMapUv:Ft&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:et&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ee||O),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Ut||et),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&ee===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ut&&v.map.isVideoTexture===!0&&ae.getTransfer(v.map.colorSpace)===ge,decodeVideoTextureEmissive:De&&v.emissiveMap.isVideoTexture===!0&&ae.getTransfer(v.emissiveMap.colorSpace)===ge,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$i,flipSided:v.side===Gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:it&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&v.extensions.multiDraw===!0||mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function p(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)T.push(C),T.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(m(T,v),b(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function b(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let T=f[v.type],C;if(T){let D=ji[T];C=kg.clone(D.uniforms)}else C=v.uniforms;return C}function y(v,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new Nb(r,T,v,i),c.push(C),u.set(T,C)),C}function S(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:S,releaseShaderCache:w,programs:c,dispose:A}}function Bb(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function zb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function a_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function o_(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,p,m){let b=r[t];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:m},r[t]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=a(h),b.groupOrder=_,b.renderOrder=h.renderOrder,b.z=p,b.group=m),t++,b}function l(h,f,g,_,p,m,b){b.reversedDepth===!0&&(p=-p);let E=o(h,f,g,_,p,m);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):e.push(E)}function c(h,f,g,_,p,m){let b=o(h,f,g,_,p,m);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):e.unshift(b)}function u(h,f){e.length>1&&e.sort(h||zb),n.length>1&&n.sort(f||a_),i.length>1&&i.sort(f||a_)}function d(){for(let h=t,f=r.length;h<f;h++){let g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function kb(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new o_,r.set(n,[a])):i>=s.length?(a=new o_,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Vb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new se};break;case"SpotLight":e={position:new Z,direction:new Z,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[t.id]=e,e}}}function Gb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Hb=0;function Wb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Xb(r){let t=new Vb,e=Gb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new We,a=new We;function o(c){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,b=0,E=0,y=0,S=0,w=0,A=0,v=0,T=0,C=0;c.sort(Wb);for(let L=0,F=c.length;L<F;L++){let I=c[L],B=I.color,X=I.intensity,k=I.distance,K=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Qr?K=I.shadow.map.texture:K=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=B.r*X,d+=B.g*X,h+=B.b*X;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],X);C++}else if(I.isSunLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,j=e.get(I);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=j,n.sunShadowMap[g]=K;let St=R.getViewportCount();for(let Mt=0;Mt<St;Mt++)n.sunShadowMatrix[_+Mt]=R.getMatrix(Mt),n.sunShadowCascade[_+Mt]=R._cascadeData[Mt];_+=St,g++}n.sun[f]=Y,f++}else if(I.isDirectionalLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,j=e.get(I);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=Y,p++}else if(I.isSpotLight){let Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(B).multiplyScalar(X),Y.distance=k,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[b]=Y;let R=I.shadow;if(I.map&&(n.spotLightMap[v]=I.map,v++,R.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[b]=R.matrix,I.castShadow){let j=e.get(I);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,n.spotShadow[b]=j,n.spotShadowMap[b]=K,A++}b++}else if(I.isRectAreaLight){let Y=t.get(I);Y.color.copy(B).multiplyScalar(X),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=Y,E++}else if(I.isPointLight){let Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){let R=I.shadow,j=e.get(I);j.shadowIntensity=R.intensity,j.shadowBias=R.bias,j.shadowNormalBias=R.normalBias,j.shadowRadius=R.radius,j.shadowMapSize=R.mapSize,j.shadowCameraNear=R.camera.near,j.shadowCameraFar=R.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=Y,m++}else if(I.isHemisphereLight){let Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(X),Y.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[y]=Y,y++}}E>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let D=n.hash;(D.sunLength!==f||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==b||D.rectAreaLength!==E||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==A||D.numSpotMaps!==v||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=b,n.rectArea.length=E,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=f,D.directionalLength=p,D.pointLength=m,D.spotLength=b,D.rectAreaLength=E,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=A,D.numSpotMaps=v,D.numLightProbes=C,n.version=Hb++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0,p=0,m=u.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let y=c[b];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function l_(r){let t=new Xb(r),e=[],n=[],i=[];function s(h){d.camera=h,e.length=0,n.length=0,i.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Yb(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new l_(r),t.set(i,[o])):s>=a.length?(o=new l_(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var qb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jb=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],$b=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],c_=new We,Qo=new Z,vd=new Z;function Kb(r,t,e){let n=new Lo,i=new fe,s=new fe,a=new Oe,o=new Rc,l=new Pc,c={},u=e.maxTextureSize,d={[Zr]:Gn,[Gn]:Zr,[$i]:$i},h=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:qb,fragmentShader:Zb}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new ci;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ti(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ko;let m=this.type;this.render=function(w,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===ig&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ko);let T=r.getRenderTarget(),C=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Ki),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=m!==this.type;F&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=w.length;I<B;I++){let X=w[I],k=X.shadow;if(k===void 0){Vt("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let K=k.getFrameExtents();i.multiply(K),s.copy(k.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/K.x),i.x=s.x*K.x,k.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/K.y),i.y=s.y*K.y,k.mapSize.y=s.y));let Y=r.state.buffers.depth.getReversed();if(k.camera._reversedDepth=Y,k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ba){if(X.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new $n(i.x,i.y,{format:Qr,type:Fi,minFilter:gn,magFilter:gn,generateMipmaps:!1}),k.map.texture.name=X.name+".shadowMap",k.map.depthTexture=new Wr(i.x,i.y,Ui),k.map.depthTexture.name=X.name+".shadowMapDepth",k.map.depthTexture.format=qi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn}else X.isPointLight?(k.map=new Nu(i.x),k.map.depthTexture=new Ec(i.x,Ni)):(k.map=new $n(i.x,i.y),k.map.depthTexture=new Wr(i.x,i.y,Ni)),k.map.depthTexture.name=X.name+".shadowMap",k.map.depthTexture.format=qi,this.type===ko?(k.map.depthTexture.compareFunction=Y?Pu:Ru,k.map.depthTexture.minFilter=gn,k.map.depthTexture.magFilter=gn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==i.x||k.map.height!==i.y)&&k.map.setSize(i.x,i.y);let R=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();X.isPointLight!==!0&&k.updateMatrices(X,v);for(let j=0;j<R;j++){let St=k.getCamera(j);if(X.isPointLight){let Mt=k.camera,kt=k.matrix,zt=X.distance||Mt.far;zt!==Mt.far&&(Mt.far=zt,Mt.updateProjectionMatrix()),Qo.setFromMatrixPosition(X.matrixWorld),Mt.position.copy(Qo),vd.copy(Mt.position),vd.add(Jb[j]),Mt.up.copy($b[j]),Mt.lookAt(vd),Mt.updateMatrixWorld(),kt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),c_.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(c_,Mt.coordinateSystem,Mt.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,j),r.clear();else{j===0&&(r.setRenderTarget(k.map),r.clear());let Mt=k.getViewport(j);a.set(s.x*Mt.x,s.y*Mt.y,s.x*Mt.z,s.y*Mt.w),L.viewport(a)}n=k.getFrustum(j),y(A,v,St,X,this.type)}k.isPointLightShadow!==!0&&this.type===ba&&b(k,v),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(T,C,D)};function b(w,A){let v=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new $n(i.x,i.y,{format:Qr,type:Fi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,v,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,v,f,_,null)}function E(w,A,v,T){let C=null,D=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=v.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=C.uuid,F=A.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let B=I[F];B===void 0&&(B=C.clone(),I[F]=B,A.addEventListener("dispose",S)),C=B}if(C.visible=A.visible,C.wireframe=A.wireframe,T===ba?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,v.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=r.properties.get(C);L.light=v}return C}function y(w,A,v,T,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===ba)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let F=t.update(w),I=w.material;if(Array.isArray(I)){let B=F.groups;for(let X=0,k=B.length;X<k;X++){let K=B[X],Y=I[K.materialIndex];if(Y&&Y.visible){let R=E(w,Y,T,C);w.onBeforeShadow(r,w,A,v,F,R,K),r.renderBufferDirect(v,null,F,R,w,K),w.onAfterShadow(r,w,A,v,F,R,K)}}}else if(I.visible){let B=E(w,I,T,C);w.onBeforeShadow(r,w,A,v,F,B,null),r.renderBufferDirect(v,null,F,B,w,null),w.onAfterShadow(r,w,A,v,F,B,null)}}let L=w.children;for(let F=0,I=L.length;F<I;F++)y(L[F],A,v,T,C)}function S(w){w.target.removeEventListener("dispose",S);for(let v in c){let T=c[v],C=w.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Qb(r,t){function e(){let N=!1,ut=new Oe,et=null,pt=new Oe(0,0,0,0);return{setMask:function(xt){et!==xt&&!N&&(r.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){N=xt},setClear:function(xt,it,ot,rt,Dt){Dt===!0&&(xt*=rt,it*=rt,ot*=rt),ut.set(xt,it,ot,rt),pt.equals(ut)===!1&&(r.clearColor(xt,it,ot,rt),pt.copy(ut))},reset:function(){N=!1,et=null,pt.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,et=null,pt=null,xt=null;return{setReversed:function(it){if(ut!==it){let ot=t.get("EXT_clip_control");it?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),ut=it;let rt=xt;xt=null,this.setClear(rt)}},getReversed:function(){return ut},setTest:function(it){it?tt(r.DEPTH_TEST):_t(r.DEPTH_TEST)},setMask:function(it){et!==it&&!N&&(r.depthMask(it),et=it)},setFunc:function(it){if(ut&&(it=Bg[it]),pt!==it){switch(it){case hc:r.depthFunc(r.NEVER);break;case fc:r.depthFunc(r.ALWAYS);break;case dc:r.depthFunc(r.LESS);break;case xa:r.depthFunc(r.LEQUAL);break;case pc:r.depthFunc(r.EQUAL);break;case mc:r.depthFunc(r.GEQUAL);break;case gc:r.depthFunc(r.GREATER);break;case _c:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=it}},setLocked:function(it){N=it},setClear:function(it){xt!==it&&(xt=it,ut&&(it=1-it),r.clearDepth(it))},reset:function(){N=!1,et=null,pt=null,xt=null,ut=!1}}}function i(){let N=!1,ut=null,et=null,pt=null,xt=null,it=null,ot=null,rt=null,Dt=null;return{setTest:function(st){N||(st?tt(r.STENCIL_TEST):_t(r.STENCIL_TEST))},setMask:function(st){ut!==st&&!N&&(r.stencilMask(st),ut=st)},setFunc:function(st,Nt,Et){(et!==st||pt!==Nt||xt!==Et)&&(r.stencilFunc(st,Nt,Et),et=st,pt=Nt,xt=Et)},setOp:function(st,Nt,Et){(it!==st||ot!==Nt||rt!==Et)&&(r.stencilOp(st,Nt,Et),it=st,ot=Nt,rt=Et)},setLocked:function(st){N=st},setClear:function(st){Dt!==st&&(r.clearStencil(st),Dt=st)},reset:function(){N=!1,ut=null,et=null,pt=null,xt=null,it=null,ot=null,rt=null,Dt=null}}}let s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,E=null,y=null,S=null,w=null,A=null,v=new se(0,0,0),T=0,C=!1,D=null,L=null,F=null,I=null,B=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,K=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=K>=1):Y.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=K>=2);let R=null,j={},St=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),kt=new Oe().fromArray(St),zt=new Oe().fromArray(Mt);function Gt(N,ut,et,pt){let xt=new Uint8Array(4),it=r.createTexture();r.bindTexture(N,it),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ot=0;ot<et;ot++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,xt):r.texImage2D(ut+ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xt);return it}let J={};J[r.TEXTURE_2D]=Gt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Gt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Gt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Gt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(r.DEPTH_TEST),a.setFunc(xa),V(!1),ee(Uf),tt(r.CULL_FACE),Yt(Ki);function tt(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function _t(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function Ot(N,ut){return h[N]!==ut?(r.bindFramebuffer(N,ut),h[N]=ut,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ut),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function mt(N,ut){let et=g,pt=!1;if(N){et=f.get(ut),et===void 0&&(et=[],f.set(ut,et));let xt=N.textures;if(et.length!==xt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let it=0,ot=xt.length;it<ot;it++)et[it]=r.COLOR_ATTACHMENT0+it;et.length=xt.length,pt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,pt=!0);pt&&r.drawBuffers(et)}function Ut(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Bt={[Es]:r.FUNC_ADD,[sg]:r.FUNC_SUBTRACT,[ag]:r.FUNC_REVERSE_SUBTRACT};Bt[og]=r.MIN,Bt[lg]=r.MAX;let Pt={[cg]:r.ZERO,[ug]:r.ONE,[hg]:r.SRC_COLOR,[Bf]:r.SRC_ALPHA,[_g]:r.SRC_ALPHA_SATURATE,[mg]:r.DST_COLOR,[dg]:r.DST_ALPHA,[fg]:r.ONE_MINUS_SRC_COLOR,[zf]:r.ONE_MINUS_SRC_ALPHA,[gg]:r.ONE_MINUS_DST_COLOR,[pg]:r.ONE_MINUS_DST_ALPHA,[xg]:r.CONSTANT_COLOR,[vg]:r.ONE_MINUS_CONSTANT_COLOR,[yg]:r.CONSTANT_ALPHA,[Sg]:r.ONE_MINUS_CONSTANT_ALPHA};function Yt(N,ut,et,pt,xt,it,ot,rt,Dt,st){if(N===Ki){p===!0&&(_t(r.BLEND),p=!1);return}if(p===!1&&(tt(r.BLEND),p=!0),N!==rg){if(N!==m||st!==C){if((b!==Es||S!==Es)&&(r.blendEquation(r.FUNC_ADD),b=Es,S=Es),st)switch(N){case Ta:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vo:r.blendFunc(r.ONE,r.ONE);break;case Ff:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Of:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ta:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ff:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Of:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",N);break}E=null,y=null,w=null,A=null,v.set(0,0,0),T=0,m=N,C=st}return}xt=xt||ut,it=it||et,ot=ot||pt,(ut!==b||xt!==S)&&(r.blendEquationSeparate(Bt[ut],Bt[xt]),b=ut,S=xt),(et!==E||pt!==y||it!==w||ot!==A)&&(r.blendFuncSeparate(Pt[et],Pt[pt],Pt[it],Pt[ot]),E=et,y=pt,w=it,A=ot),(rt.equals(v)===!1||Dt!==T)&&(r.blendColor(rt.r,rt.g,rt.b,Dt),v.copy(rt),T=Dt),m=N,C=!1}function $t(N,ut){N.side===$i?_t(r.CULL_FACE):tt(r.CULL_FACE);let et=N.side===Gn;ut&&(et=!et),V(et),N.blending===Ta&&N.transparent===!1?Yt(Ki):Yt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let pt=N.stencilWrite;o.setTest(pt),pt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),De(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(r.SAMPLE_ALPHA_TO_COVERAGE):_t(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function ee(N){N!==eg?(tt(r.CULL_FACE),N!==L&&(N===Uf?r.cullFace(r.BACK):N===ng?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_t(r.CULL_FACE),L=N}function ve(N){N!==F&&(k&&r.lineWidth(N),F=N)}function De(N,ut,et){N?(tt(r.POLYGON_OFFSET_FILL),(I!==ut||B!==et)&&(I=ut,B=et,a.getReversed()&&(ut=-ut),r.polygonOffset(ut,et))):_t(r.POLYGON_OFFSET_FILL)}function qt(N){N?tt(r.SCISSOR_TEST):_t(r.SCISSOR_TEST)}function de(N){N===void 0&&(N=r.TEXTURE0+X-1),R!==N&&(r.activeTexture(N),R=N)}function O(N,ut,et){et===void 0&&(R===null?et=r.TEXTURE0+X-1:et=R);let pt=j[et];pt===void 0&&(pt={type:void 0,texture:void 0},j[et]=pt),(pt.type!==N||pt.texture!==ut)&&(R!==et&&(r.activeTexture(et),R=et),r.bindTexture(N,ut||J[N]),pt.type=N,pt.texture=ut)}function Ie(){let N=j[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ht(){try{r.compressedTexImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function x(){try{r.texSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function z(){try{r.texSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ct(){try{r.texStorage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function at(){try{r.texStorage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function Q(){try{r.texImage2D(...arguments)}catch(N){Xt("WebGLState:",N)}}function nt(){try{r.texImage3D(...arguments)}catch(N){Xt("WebGLState:",N)}}function ft(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function At(N,ut){d[N]!==ut&&(r.pixelStorei(N,ut),d[N]=ut)}function dt(N){kt.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),kt.copy(N))}function ht(N){zt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),zt.copy(N))}function lt(N,ut){let et=c.get(ut);et===void 0&&(et=new WeakMap,c.set(ut,et));let pt=et.get(N);pt===void 0&&(pt=r.getUniformBlockIndex(ut,N.name),et.set(N,pt))}function It(N,ut){let pt=c.get(ut).get(N);l.get(ut)!==pt&&(r.uniformBlockBinding(ut,pt,N.__bindingPointIndex),l.set(ut,pt))}function Ft(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},R=null,j={},h={},f=new WeakMap,g=[],_=null,p=!1,m=null,b=null,E=null,y=null,S=null,w=null,A=null,v=new se(0,0,0),T=0,C=!1,D=null,L=null,F=null,I=null,B=null,kt.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:tt,disable:_t,bindFramebuffer:Ot,drawBuffers:mt,useProgram:Ut,setBlending:Yt,setMaterial:$t,setFlipSided:V,setCullFace:ee,setLineWidth:ve,setPolygonOffset:De,setScissorTest:qt,activeTexture:de,bindTexture:O,unbindTexture:Ie,compressedTexImage2D:Ht,compressedTexImage3D:P,texImage2D:Q,texImage3D:nt,pixelStorei:At,getParameter:ft,updateUBOMapping:lt,uniformBlockBinding:It,texStorage2D:ct,texStorage3D:at,texSubImage2D:x,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:$,scissor:dt,viewport:ht,reset:Ft}}function jb(r,t,e,n,i,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,x){return g?new OffscreenCanvas(P,x):To("canvas")}function p(P,x,z){let H=1,$=Ht(P);if(($.width>z||$.height>z)&&(H=z/Math.max($.width,$.height)),H<1)if(typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&P instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&P instanceof ImageBitmap||typeof VideoFrame!="undefined"&&P instanceof VideoFrame){let ct=Math.floor(H*$.width),at=Math.floor(H*$.height);h===void 0&&(h=_(ct,at));let Q=x?_(ct,at):h;return Q.width=ct,Q.height=at,Q.getContext("2d").drawImage(P,0,0,ct,at),Vt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+at+")."),Q}else return"data"in P&&Vt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function b(P){r.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,x,z,H,$,ct=!1){if(P!==null){if(r[P]!==void 0)return r[P];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let at;H&&(at=t.get("EXT_texture_norm16"),at||Vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===r.RED&&(z===r.FLOAT&&(Q=r.R32F),z===r.HALF_FLOAT&&(Q=r.R16F),z===r.UNSIGNED_BYTE&&(Q=r.R8),z===r.UNSIGNED_SHORT&&at&&(Q=at.R16_EXT),z===r.SHORT&&at&&(Q=at.R16_SNORM_EXT)),x===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.R8UI),z===r.UNSIGNED_SHORT&&(Q=r.R16UI),z===r.UNSIGNED_INT&&(Q=r.R32UI),z===r.BYTE&&(Q=r.R8I),z===r.SHORT&&(Q=r.R16I),z===r.INT&&(Q=r.R32I)),x===r.RG&&(z===r.FLOAT&&(Q=r.RG32F),z===r.HALF_FLOAT&&(Q=r.RG16F),z===r.UNSIGNED_BYTE&&(Q=r.RG8),z===r.UNSIGNED_SHORT&&at&&(Q=at.RG16_EXT),z===r.SHORT&&at&&(Q=at.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RG8UI),z===r.UNSIGNED_SHORT&&(Q=r.RG16UI),z===r.UNSIGNED_INT&&(Q=r.RG32UI),z===r.BYTE&&(Q=r.RG8I),z===r.SHORT&&(Q=r.RG16I),z===r.INT&&(Q=r.RG32I)),x===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),z===r.UNSIGNED_INT&&(Q=r.RGB32UI),z===r.BYTE&&(Q=r.RGB8I),z===r.SHORT&&(Q=r.RGB16I),z===r.INT&&(Q=r.RGB32I)),x===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),z===r.UNSIGNED_INT&&(Q=r.RGBA32UI),z===r.BYTE&&(Q=r.RGBA8I),z===r.SHORT&&(Q=r.RGBA16I),z===r.INT&&(Q=r.RGBA32I)),x===r.RGB&&(z===r.UNSIGNED_SHORT&&at&&(Q=at.RGB16_EXT),z===r.SHORT&&at&&(Q=at.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),x===r.RGBA){let nt=ct?Mo:ae.getTransfer($);z===r.FLOAT&&(Q=r.RGBA32F),z===r.HALF_FLOAT&&(Q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Q=nt===ge?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&at&&(Q=at.RGBA16_EXT),z===r.SHORT&&at&&(Q=at.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function S(P,x){let z;return P?x===null||x===Ni||x===Aa?z=r.DEPTH24_STENCIL8:x===Ui?z=r.DEPTH32F_STENCIL8:x===wa&&(z=r.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ni||x===Aa?z=r.DEPTH_COMPONENT24:x===Ui?z=r.DEPTH_COMPONENT32F:x===wa&&(z=r.DEPTH_COMPONENT16),z}function w(P,x){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==gn?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function A(P){let x=P.target;x.removeEventListener("dispose",A),T(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function v(P){let x=P.target;x.removeEventListener("dispose",v),D(x)}function T(P){let x=n.get(P);if(x.__webglInit===void 0)return;let z=P.source,H=f.get(z);if(H){let $=H[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&C(P),Object.keys(H).length===0&&f.delete(z)}n.remove(P)}function C(P){let x=n.get(P);r.deleteTexture(x.__webglTexture);let z=P.source,H=f.get(z);delete H[x.__cacheKey],a.memory.textures--}function D(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(x.__webglFramebuffer[H]))for(let $=0;$<x.__webglFramebuffer[H].length;$++)r.deleteFramebuffer(x.__webglFramebuffer[H][$]);else r.deleteFramebuffer(x.__webglFramebuffer[H]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[H])}else{if(Array.isArray(x.__webglFramebuffer))for(let H=0;H<x.__webglFramebuffer.length;H++)r.deleteFramebuffer(x.__webglFramebuffer[H]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let H=0;H<x.__webglColorRenderbuffer.length;H++)x.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[H]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=P.textures;for(let H=0,$=z.length;H<$;H++){let ct=n.get(z[H]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(z[H])}n.remove(P)}let L=0;function F(){L=0}function I(){return L}function B(P){L=P}function X(){let P=L;return P>=i.maxTextures&&Vt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function k(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function K(P,x){let z=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&z.__version!==P.version){let H=P.image;if(H===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(z,P,x);return}}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+x)}function Y(P,x){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){_t(z,P,x);return}else P.isExternalTexture&&(z.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+x)}function R(P,x){let z=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){_t(z,P,x);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+x)}function j(P,x){let z=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&z.__version!==P.version){Ot(z,P,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+x)}let St={[xc]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[vc]:r.MIRRORED_REPEAT},Mt={[hn]:r.NEAREST,[Tg]:r.NEAREST_MIPMAP_NEAREST,[Ho]:r.NEAREST_MIPMAP_LINEAR,[gn]:r.LINEAR,[Yc]:r.LINEAR_MIPMAP_NEAREST,[$r]:r.LINEAR_MIPMAP_LINEAR},kt={[Cg]:r.NEVER,[Dg]:r.ALWAYS,[Rg]:r.LESS,[Ru]:r.LEQUAL,[Pg]:r.EQUAL,[Pu]:r.GEQUAL,[Ig]:r.GREATER,[Lg]:r.NOTEQUAL};function zt(P,x){if(x.type===Ui&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===gn||x.magFilter===Yc||x.magFilter===Ho||x.magFilter===$r||x.minFilter===gn||x.minFilter===Yc||x.minFilter===Ho||x.minFilter===$r)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,St[x.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,St[x.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,St[x.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Mt[x.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,kt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===hn||x.minFilter!==Ho&&x.minFilter!==$r||x.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Gt(P,x){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",A));let H=x.source,$=f.get(H);$===void 0&&($={},f.set(H,$));let ct=k(x);if(ct!==P.__cacheKey){$[ct]===void 0&&($[ct]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),$[ct].usedTimes++;let at=$[P.__cacheKey];at!==void 0&&($[P.__cacheKey].usedTimes--,at.usedTimes===0&&C(x)),P.__cacheKey=ct,P.__webglTexture=$[ct].texture}return z}function J(P,x,z){return Math.floor(Math.floor(P/z)/x)}function tt(P,x,z,H){let ct=P.updateRanges;if(ct.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,z,H,x.data);else{ct.sort((At,dt)=>At.start-dt.start);let at=0;for(let At=1;At<ct.length;At++){let dt=ct[at],ht=ct[At],lt=dt.start+dt.count,It=J(ht.start,x.width,4),Ft=J(dt.start,x.width,4);ht.start<=lt+1&&It===Ft&&J(ht.start+ht.count-1,x.width,4)===It?dt.count=Math.max(dt.count,ht.start+ht.count-dt.start):(++at,ct[at]=ht)}ct.length=at+1;let Q=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),ft=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let At=0,dt=ct.length;At<dt;At++){let ht=ct[At],lt=Math.floor(ht.start/4),It=Math.ceil(ht.count/4),Ft=lt%x.width,N=Math.floor(lt/x.width),ut=It,et=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(r.UNPACK_SKIP_ROWS,N),e.texSubImage2D(r.TEXTURE_2D,0,Ft,N,ut,et,z,H,x.data)}P.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,ft)}}function _t(P,x,z){let H=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(H=r.TEXTURE_3D);let $=Gt(P,x),ct=x.source;e.bindTexture(H,P.__webglTexture,r.TEXTURE0+z);let at=n.get(ct);if(ct.version!==at.__version||$===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let et=ae.getPrimaries(ae.workingColorSpace),pt=x.colorSpace===xr?null:ae.getPrimaries(x.colorSpace),xt=x.colorSpace===xr||et===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let nt=p(x.image,!1,i.maxTextureSize);nt=Ie(x,nt);let ft=s.convert(x.format,x.colorSpace),At=s.convert(x.type),dt=y(x.internalFormat,ft,At,x.normalized,x.colorSpace,x.isVideoTexture);zt(H,x);let ht,lt=x.mipmaps,It=x.isVideoTexture!==!0,Ft=at.__version===void 0||$===!0,N=ct.dataReady,ut=w(x,nt);if(x.isDepthTexture)dt=S(x.format===Kr,x.type),Ft&&(It?e.texStorage2D(r.TEXTURE_2D,1,dt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,dt,nt.width,nt.height,0,ft,At,null));else if(x.isDataTexture)if(lt.length>0){It&&Ft&&e.texStorage2D(r.TEXTURE_2D,ut,dt,lt[0].width,lt[0].height);for(let et=0,pt=lt.length;et<pt;et++)ht=lt[et],It?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ht.width,ht.height,ft,At,ht.data):e.texImage2D(r.TEXTURE_2D,et,dt,ht.width,ht.height,0,ft,At,ht.data);x.generateMipmaps=!1}else It?(Ft&&e.texStorage2D(r.TEXTURE_2D,ut,dt,nt.width,nt.height),N&&tt(x,nt,ft,At)):e.texImage2D(r.TEXTURE_2D,0,dt,nt.width,nt.height,0,ft,At,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){It&&Ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,dt,lt[0].width,lt[0].height,nt.depth);for(let et=0,pt=lt.length;et<pt;et++)if(ht=lt[et],x.format!==wi)if(ft!==null)if(It){if(N)if(x.layerUpdates.size>0){let xt=ld(ht.width,ht.height,x.format,x.type);for(let it of x.layerUpdates){let ot=ht.data.subarray(it*xt/ht.data.BYTES_PER_ELEMENT,(it+1)*xt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,it,ht.width,ht.height,1,ft,ot)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,nt.depth,ft,ht.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,dt,ht.width,ht.height,nt.depth,0,ht.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,ht.width,ht.height,nt.depth,ft,At,ht.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,dt,ht.width,ht.height,nt.depth,0,ft,At,ht.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{It&&Ft&&e.texStorage2D(r.TEXTURE_2D,ut,dt,lt[0].width,lt[0].height);for(let et=0,pt=lt.length;et<pt;et++)ht=lt[et],x.format!==wi?ft!==null?It?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,ht.width,ht.height,ft,ht.data):e.compressedTexImage2D(r.TEXTURE_2D,et,dt,ht.width,ht.height,0,ht.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ht.width,ht.height,ft,At,ht.data):e.texImage2D(r.TEXTURE_2D,et,dt,ht.width,ht.height,0,ft,At,ht.data)}else if(x.isDataArrayTexture)if(It){if(Ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ut,dt,nt.width,nt.height,nt.depth),N)if(x.layerUpdates.size>0){let et=ld(nt.width,nt.height,x.format,x.type);for(let pt of x.layerUpdates){let xt=nt.data.subarray(pt*et/nt.data.BYTES_PER_ELEMENT,(pt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pt,nt.width,nt.height,1,ft,At,xt)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ft,At,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,dt,nt.width,nt.height,nt.depth,0,ft,At,nt.data);else if(x.isData3DTexture)It?(Ft&&e.texStorage3D(r.TEXTURE_3D,ut,dt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ft,At,nt.data)):e.texImage3D(r.TEXTURE_3D,0,dt,nt.width,nt.height,nt.depth,0,ft,At,nt.data);else if(x.isFramebufferTexture){if(Ft)if(It)e.texStorage2D(r.TEXTURE_2D,ut,dt,nt.width,nt.height);else{let et=nt.width,pt=nt.height;for(let xt=0;xt<ut;xt++)e.texImage2D(r.TEXTURE_2D,xt,dt,et,pt,0,ft,At,null),et>>=1,pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){let et=r.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(x),et.onpaint=pt=>{let xt=pt.changedElements;for(let it of d)xt.includes(it.image)&&(it.needsUpdate=!0)},et.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let xt=r.RGBA,it=r.RGBA,ot=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xt,it,ot,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(lt.length>0){if(It&&Ft){let et=Ht(lt[0]);e.texStorage2D(r.TEXTURE_2D,ut,dt,et.width,et.height)}for(let et=0,pt=lt.length;et<pt;et++)ht=lt[et],It?N&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,ft,At,ht):e.texImage2D(r.TEXTURE_2D,et,dt,ft,At,ht);x.generateMipmaps=!1}else if(It){if(Ft){let et=Ht(nt);e.texStorage2D(r.TEXTURE_2D,ut,dt,et.width,et.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft,At,nt)}else e.texImage2D(r.TEXTURE_2D,0,dt,ft,At,nt);m(x)&&b(H),at.__version=ct.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Ot(P,x,z){if(x.image.length!==6)return;let H=Gt(P,x),$=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+z);let ct=n.get($);if($.version!==ct.__version||H===!0){e.activeTexture(r.TEXTURE0+z);let at=ae.getPrimaries(ae.workingColorSpace),Q=x.colorSpace===xr?null:ae.getPrimaries(x.colorSpace),nt=x.colorSpace===xr||at===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ft=x.isCompressedTexture||x.image[0].isCompressedTexture,At=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!ft&&!At?dt[it]=p(x.image[it],!0,i.maxCubemapSize):dt[it]=At?x.image[it].image:x.image[it],dt[it]=Ie(x,dt[it]);let ht=dt[0],lt=s.convert(x.format,x.colorSpace),It=s.convert(x.type),Ft=y(x.internalFormat,lt,It,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ut=ct.__version===void 0||H===!0,et=$.dataReady,pt=w(x,ht);zt(r.TEXTURE_CUBE_MAP,x);let xt;if(ft){N&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ft,ht.width,ht.height);for(let it=0;it<6;it++){xt=dt[it].mipmaps;for(let ot=0;ot<xt.length;ot++){let rt=xt[ot];x.format!==wi?lt!==null?N?et&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,0,0,rt.width,rt.height,lt,rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,Ft,rt.width,rt.height,0,rt.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,0,0,rt.width,rt.height,lt,It,rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot,Ft,rt.width,rt.height,0,lt,It,rt.data)}}}else{if(xt=x.mipmaps,N&&ut){xt.length>0&&pt++;let it=Ht(dt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Ft,it.width,it.height)}for(let it=0;it<6;it++)if(At){N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,lt,It,dt[it].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,dt[it].width,dt[it].height,0,lt,It,dt[it].data);for(let ot=0;ot<xt.length;ot++){let Dt=xt[ot].image[it].image;N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,0,0,Dt.width,Dt.height,lt,It,Dt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,Ft,Dt.width,Dt.height,0,lt,It,Dt.data)}}else{N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,lt,It,dt[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Ft,lt,It,dt[it]);for(let ot=0;ot<xt.length;ot++){let rt=xt[ot];N?et&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,0,0,lt,It,rt.image[it]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ot+1,Ft,lt,It,rt.image[it])}}}m(x)&&b(r.TEXTURE_CUBE_MAP),ct.__version=$.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function mt(P,x,z,H,$,ct){let at=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),nt=y(z.internalFormat,at,Q,z.normalized,z.colorSpace),ft=n.get(x),At=n.get(z);if(At.__renderTarget=x,!ft.__hasExternalTextures){let dt=Math.max(1,x.width>>ct),ht=Math.max(1,x.height>>ct);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?e.texImage3D($,ct,nt,dt,ht,x.depth,0,at,Q,null):e.texImage2D($,ct,nt,dt,ht,0,at,Q,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),de(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,$,At.__webglTexture,0,qt(x)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,$,At.__webglTexture,ct),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(P,x,z){if(r.bindRenderbuffer(r.RENDERBUFFER,P),x.depthBuffer){let H=x.depthTexture,$=H&&H.isDepthTexture?H.type:null,ct=S(x.stencilBuffer,$),at=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;de(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(x),ct,x.width,x.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(x),ct,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ct,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,at,r.RENDERBUFFER,P)}else{let H=x.textures;for(let $=0;$<H.length;$++){let ct=H[$],at=s.convert(ct.format,ct.colorSpace),Q=s.convert(ct.type),nt=y(ct.internalFormat,at,Q,ct.normalized,ct.colorSpace);de(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(x),nt,x.width,x.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(x),nt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,nt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Bt(P,x,z){let H=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),zt(r.TEXTURE_CUBE_MAP,x.depthTexture);let ft=s.convert(x.depthTexture.format),At=s.convert(x.depthTexture.type),dt;x.depthTexture.format===qi?dt=r.DEPTH_COMPONENT24:x.depthTexture.format===Kr&&(dt=r.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,dt,x.width,x.height,0,ft,At,null)}}else K(x.depthTexture,0);let ct=$.__webglTexture,at=qt(x),Q=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,nt=x.depthTexture.format===Kr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===qi)de(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,Q,ct,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,nt,Q,ct,0);else if(x.depthTexture.format===Kr)de(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,Q,ct,0,at):r.framebufferTexture2D(r.FRAMEBUFFER,nt,Q,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pt(P){let x=n.get(P),z=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let H=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),H){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,H.removeEventListener("dispose",$)};H.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=H}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)Bt(x.__webglFramebuffer[H],P,H);else{let H=P.texture.mipmaps;H&&H.length>0?Bt(x.__webglFramebuffer[0],P,0):Bt(x.__webglFramebuffer,P,0)}else if(z){x.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[H]),x.__webglDepthbuffer[H]===void 0)x.__webglDepthbuffer[H]=r.createRenderbuffer(),Ut(x.__webglDepthbuffer[H],P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}else{let H=P.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ut(x.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ct)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(P,x,z){let H=n.get(P);x!==void 0&&mt(H.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Pt(P)}function $t(P){let x=P.texture,z=n.get(P),H=n.get(x);P.addEventListener("dispose",v);let $=P.textures,ct=P.isWebGLCubeRenderTarget===!0,at=$.length>1;if(at||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=x.version,a.memory.textures++),ct){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let nt=0;nt<x.mipmaps.length;nt++)z.__webglFramebuffer[Q][nt]=r.createFramebuffer()}else z.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)z.__webglFramebuffer[Q]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(at)for(let Q=0,nt=$.length;Q<nt;Q++){let ft=n.get($[Q]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&de(P)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){let nt=$[Q];z.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let ft=s.convert(nt.format,nt.colorSpace),At=s.convert(nt.type),dt=y(nt.internalFormat,ft,At,nt.normalized,nt.colorSpace,P.isXRRenderTarget===!0),ht=qt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,dt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ut(z.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),zt(r.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)mt(z.__webglFramebuffer[Q][nt],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,nt);else mt(z.__webglFramebuffer[Q],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(x)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Q=0,nt=$.length;Q<nt;Q++){let ft=$[Q],At=n.get(ft),dt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(dt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(dt,At.__webglTexture),zt(dt,ft),mt(z.__webglFramebuffer,P,ft,r.COLOR_ATTACHMENT0+Q,dt,0),m(ft)&&b(dt)}e.unbindTexture()}else{let Q=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,H.__webglTexture),zt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let nt=0;nt<x.mipmaps.length;nt++)mt(z.__webglFramebuffer[nt],P,x,r.COLOR_ATTACHMENT0,Q,nt);else mt(z.__webglFramebuffer,P,x,r.COLOR_ATTACHMENT0,Q,0);m(x)&&b(Q),e.unbindTexture()}P.depthBuffer&&Pt(P)}function V(P){let x=P.textures;for(let z=0,H=x.length;z<H;z++){let $=x[z];if(m($)){let ct=E(P),at=n.get($).__webglTexture;e.bindTexture(ct,at),b(ct),e.unbindTexture()}}}let ee=[],ve=[];function De(P){if(P.samples>0){if(de(P)===!1){let x=P.textures,z=P.width,H=P.height,$=r.COLOR_BUFFER_BIT,ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=n.get(P),Q=x.length>1;if(Q)for(let ft=0;ft<x.length;ft++)e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let nt=P.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ft=0;ft<x.length;ft++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,at.__webglColorRenderbuffer[ft]);let At=n.get(x[ft]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,At,0)}r.blitFramebuffer(0,0,z,H,0,0,z,H,$,r.NEAREST),l===!0&&(ee.length=0,ve.length=0,ee.push(r.COLOR_ATTACHMENT0+ft),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ee.push(ct),ve.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ve)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ee))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let ft=0;ft<x.length;ft++){e.bindFramebuffer(r.FRAMEBUFFER,at.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.RENDERBUFFER,at.__webglColorRenderbuffer[ft]);let At=n.get(x[ft]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,at.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ft,r.TEXTURE_2D,At,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function qt(P){return Math.min(i.maxSamples,P.samples)}function de(P){let x=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function O(P){let x=a.render.frame;u.get(P)!==x&&(u.set(P,x),P.update())}function Ie(P,x){let z=P.colorSpace,H=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==So&&z!==xr&&(ae.getTransfer(z)===ge?(H!==wi||$!==hi)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",z)),x}function Ht(P){return typeof HTMLImageElement!="undefined"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame!="undefined"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=R,this.setTextureCube=j,this.rebindTextures=Yt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function tT(r,t){function e(n,i=xr){let s,a=ae.getTransfer(i);if(n===hi)return r.UNSIGNED_BYTE;if(n===Zc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Jc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Qf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Jf)return r.BYTE;if(n===$f)return r.SHORT;if(n===wa)return r.UNSIGNED_SHORT;if(n===qc)return r.INT;if(n===Ni)return r.UNSIGNED_INT;if(n===Ui)return r.FLOAT;if(n===Fi)return r.HALF_FLOAT;if(n===jf)return r.ALPHA;if(n===td)return r.RGB;if(n===wi)return r.RGBA;if(n===qi)return r.DEPTH_COMPONENT;if(n===Kr)return r.DEPTH_STENCIL;if(n===ed)return r.RED;if(n===$c)return r.RED_INTEGER;if(n===Qr)return r.RG;if(n===Kc)return r.RG_INTEGER;if(n===Qc)return r.RGBA_INTEGER;if(n===Wo||n===Xo||n===Yo||n===qo)if(a===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jc||n===tu||n===eu||n===nu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===jc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===iu||n===ru||n===su||n===au||n===ou||n===Zo||n===lu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===iu||n===ru)return a===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===su)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===au)return s.COMPRESSED_R11_EAC;if(n===ou)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Zo)return s.COMPRESSED_RG11_EAC;if(n===lu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cu||n===uu||n===hu||n===fu||n===du||n===pu||n===mu||n===gu||n===_u||n===xu||n===vu||n===yu||n===Su||n===Mu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===cu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_u)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Su)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return a===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bu||n===Tu||n===wu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===bu)return a===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Au||n===Eu||n===Jo||n===Cu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Au)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Jo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Aa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var eT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ed=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Uo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Vn({vertexShader:eT,fragmentShader:nT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ti(new Fo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Cd=class extends Zi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,_=typeof XRWebGLBinding!="undefined",p=new Ed,m={},b=e.getContextAttributes(),E=null,y=null,S=[],w=[],A=new fe,v=null,T=null,C=new Cn;C.viewport=new Oe;let D=new Cn;D.viewport=new Oe;let L=[C,D],F=new Gc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=S[J];return tt===void 0&&(tt=new Sa,S[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=S[J];return tt===void 0&&(tt=new Sa,S[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=S[J];return tt===void 0&&(tt=new Sa,S[J]=tt),tt.getHandSpace()};function X(J){let tt=w.indexOf(J.inputSource);if(tt===-1)return;let _t=S[tt];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||a),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",K);for(let J=0;J<S.length;J++){let tt=w[J];tt!==null&&(w[J]=null,S[J].disconnect(tt))}I=null,B=null,p.reset();for(let J in m)delete m[J];if(t.setRenderTarget(E),f=null,h=null,d=null,i=null,y=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(A.width,A.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",k),i.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ot=null,mt=null;b.depth&&(mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=b.stencil?Kr:qi,Ot=b.stencil?Aa:Ni);let Ut={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ut),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new $n(h.textureWidth,h.textureHeight,{format:wi,type:hi,depthTexture:new Wr(h.textureWidth,h.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let _t={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new $n(f.framebufferWidth,f.framebufferHeight,{format:wi,type:hi,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function K(J){for(let tt=0;tt<J.removed.length;tt++){let _t=J.removed[tt],Ot=w.indexOf(_t);Ot>=0&&(w[Ot]=null,S[Ot].disconnect(_t))}for(let tt=0;tt<J.added.length;tt++){let _t=J.added[tt],Ot=w.indexOf(_t);if(Ot===-1){for(let Ut=0;Ut<S.length;Ut++)if(Ut>=w.length){w.push(_t),Ot=Ut;break}else if(w[Ut]===null){w[Ut]=_t,Ot=Ut;break}if(Ot===-1)break}let mt=S[Ot];mt&&mt.connect(_t)}}let Y=new Z,R=new Z;function j(J,tt,_t){Y.setFromMatrixPosition(tt.matrixWorld),R.setFromMatrixPosition(_t.matrixWorld);let Ot=Y.distanceTo(R),mt=tt.projectionMatrix.elements,Ut=_t.projectionMatrix.elements,Bt=mt[14]/(mt[10]-1),Pt=mt[14]/(mt[10]+1),Yt=(mt[9]+1)/mt[5],$t=(mt[9]-1)/mt[5],V=(mt[8]-1)/mt[0],ee=(Ut[8]+1)/Ut[0],ve=Bt*V,De=Bt*ee,qt=Ot/(-V+ee),de=qt*-V;if(tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(de),J.translateZ(qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),mt[10]===-1)J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let O=Bt+qt,Ie=Pt+qt,Ht=ve-de,P=De+(Ot-de),x=Yt*Pt/Ie*O,z=$t*Pt/Ie*O;J.projectionMatrix.makePerspective(Ht,P,x,z,O,Ie),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function St(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let tt=J.near,_t=J.far;p.texture!==null&&(p.depthNear>0&&(tt=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),F.near=D.near=C.near=tt,F.far=D.far=C.far=_t,(I!==F.near||B!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),I=F.near,B=F.far),F.layers.mask=J.layers.mask|6,C.layers.mask=F.layers.mask&-5,D.layers.mask=F.layers.mask&-3;let Ot=J.parent,mt=F.cameras;St(F,Ot);for(let Ut=0;Ut<mt.length;Ut++)St(mt[Ut],Ot);mt.length===2?j(F,C,D):F.projectionMatrix.copy(C.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Mt(J,F,Ot)};function Mt(J,tt,_t){_t===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Sc*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(J){return m[J]};let kt=null;function zt(J,tt){if(u=tt.getViewerPose(c||a),g=tt,u!==null){let _t=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ot=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,Ot=!0);for(let Pt=0;Pt<_t.length;Pt++){let Yt=_t[Pt],$t=null;if(f!==null)$t=f.getViewport(Yt);else{let ee=d.getViewSubImage(h,Yt);$t=ee.viewport,Pt===0&&(t.setRenderTargetTextures(y,ee.colorTexture,ee.depthStencilTexture),t.setRenderTarget(y))}let V=L[Pt];V===void 0&&(V=new Cn,V.layers.enable(Pt),V.viewport=new Oe,L[Pt]=V),V.matrix.fromArray(Yt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Yt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set($t.x,$t.y,$t.width,$t.height),Pt===0&&(F.matrix.copy(V.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ot===!0&&F.cameras.push(V)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Pt=d.getDepthInformation(_t[0]);Pt&&Pt.isValid&&Pt.texture&&p.init(Pt,i.renderState)}if(mt&&mt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Pt=0;Pt<_t.length;Pt++){let Yt=_t[Pt].camera;if(Yt){let $t=m[Yt];$t||($t=new Uo,m[Yt]=$t);let V=d.getCameraImage(Yt);$t.sourceTexture=V}}}}for(let _t=0;_t<S.length;_t++){let Ot=w[_t],mt=S[_t];Ot!==null&&mt!==void 0&&mt.update(Ot,tt,c||a)}kt&&kt(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let Gt=new u_;Gt.setAnimationLoop(zt),this.setAnimationLoop=function(J){kt=J},this.dispose=function(){}}},iT=new We,g_=new Jt;g_.set(-1,0,0,0,1,0,0,0,1);function rT(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,sd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,b,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=t.get(m),E=b.envMap,y=b.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(iT.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(g_),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let b=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function sT(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let w=S.program;n.uniformBlockBinding(y,w)}function c(y,S){let w=i[y.id];w===void 0&&(p(y),w=u(y),i[y.id]=w,y.addEventListener("dispose",b));let A=S.program;n.updateUBOMapping(y,A);let v=t.render.frame;s[y.id]!==v&&(h(y),s[y.id]=v)}function u(y){let S=d();y.__bindingPointIndex=S;let w=r.createBuffer(),A=y.__size,v=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,A,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,w),w}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let S=i[y.id],w=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let v=0,T=w.length;v<T;v++){let C=w[v];if(Array.isArray(C))for(let D=0,L=C.length;D<L;D++)f(C[D],v,D,A);else f(C,v,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,w,A){if(_(y,S,w,A)===!0){let v=y.__offset,T=y.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){let L=T[D],F=m(L);g(L,y.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,y.__data)}}function g(y,S,w){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,w)}function _(y,S,w,A){let v=y.value,T=S+"_"+w;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{let C=A[T];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function p(y){let S=y.uniforms,w=0,A=16;for(let T=0,C=S.length;T<C;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let L=0,F=D.length;L<F;L++){let I=D[L],B=Array.isArray(I.value)?I.value:[I.value];for(let X=0,k=B.length;X<k;X++){let K=B[X],Y=m(K),R=w%A,j=R%Y.boundary,St=R+j;w+=j,St!==0&&A-St<Y.storage&&(w+=A-St),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=Y.storage}}}let v=w%A;return v>0&&(w+=A-v),y.__size=w,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Vt("WebGLRenderer: Unsupported uniform value type.",y),S}function b(y){let S=y.target;S.removeEventListener("dispose",b);let w=a.indexOf(S.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function E(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:E}}var aT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function oT(){return Qi===null&&(Qi=new wc(aT,16,16,Qr,Fi),Qi.name="DFG_LUT",Qi.minFilter=gn,Qi.magFilter=gn,Qi.wrapS=Yi,Qi.wrapT=Yi,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var Uu=class{constructor(t={}){let{canvas:e=Ug(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=hi}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([Qc,Kc,$c]),m=new Set([hi,Ni,wa,Aa,Zc,Jc]),b=new Uint32Array(4),E=new Int32Array(4),y=new Z,S=null,w=null,A=[],v=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,L=null,F=null,I=null,B=null;this._outputColorSpace=oi;let X=0,k=0,K=null,Y=-1,R=null,j=new Oe,St=new Oe,Mt=null,kt=new se(0),zt=0,Gt=e.width,J=e.height,tt=1,_t=null,Ot=null,mt=new Oe(0,0,Gt,J),Ut=new Oe(0,0,Gt,J),Bt=!1,Pt=new Lo,Yt=!1,$t=!1,V=new We,ee=new Z,ve=new Oe,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function de(){return K===null?tt:1}let O=n;function Ie(M,U){return e.getContext(M,U)}let Ht,P,x,z,H,$,ct,at,Q,nt,ft,At,dt,ht,lt,It,Ft,N,ut,et,pt,xt,it;try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",st,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),O===null){let U="webgl2";if(O=Ie(U,M),O===null)throw Ie(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ot()}catch(M){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),Xt("WebGLRenderer: "+M.message),M}function ot(){Ht=new pM(O),Ht.init(),pt=new tT(O,Ht),P=new rM(O,Ht,t,pt),x=new Qb(O,Ht),P.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),F=O.createFramebuffer(),I=O.createFramebuffer(),B=O.createFramebuffer(),z=new _M(O),H=new Bb,$=new jb(O,Ht,x,H,P,pt,z),ct=new dM(C),at=new vv(O),xt=new nM(O,at),Q=new mM(O,at,z,xt),nt=new vM(O,Q,at,xt,z),N=new xM(O,P,$),lt=new sM(H),ft=new Ob(C,ct,Ht,P,xt,lt),At=new rT(C,H),dt=new kb,ht=new Yb(Ht),Ft=new eM(C,ct,x,nt,g,l),It=new Kb(C,nt,P),it=new sT(O,z,P,x),ut=new iM(O,Ht,z),et=new gM(O,Ht,z),z.programs=ft.programs,C.capabilities=P,C.extensions=Ht,C.properties=H,C.renderLists=dt,C.shadowMap=It,C.state=x,C.info=z}_!==hi&&(T=new SM(_,e.width,e.height,o,i,s));let rt=new Cd(C,O);this.xr=rt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let M=Ht.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ht.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(Gt,J,!1))},this.getSize=function(M){return M.set(Gt,J)},this.setSize=function(M,U,q=!0){if(rt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Gt=M,J=U,e.width=Math.floor(M*tt),e.height=Math.floor(U*tt),q===!0&&(e.style.width=M+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Gt*tt,J*tt).floor()},this.setDrawingBufferSize=function(M,U,q){Gt=M,J=U,tt=q,e.width=Math.floor(M*q),e.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===hi){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(mt)},this.setViewport=function(M,U,q,G){M.isVector4?mt.set(M.x,M.y,M.z,M.w):mt.set(M,U,q,G),x.viewport(j.copy(mt).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(Ut)},this.setScissor=function(M,U,q,G){M.isVector4?Ut.set(M.x,M.y,M.z,M.w):Ut.set(M,U,q,G),x.scissor(St.copy(Ut).multiplyScalar(tt).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(M){x.setScissorTest(Bt=M)},this.setOpaqueSort=function(M){_t=M},this.setTransparentSort=function(M){Ot=M},this.getClearColor=function(M){return M.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor(...arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let G=0;if(M){let W=!1;if(K!==null){let gt=K.texture.format;W=p.has(gt)}if(W){let gt=K.texture.type,Tt=m.has(gt),yt=Ft.getClearColor(),Ct=Ft.getClearAlpha(),Lt=yt.r,Kt=yt.g,re=yt.b;Tt?(b[0]=Lt,b[1]=Kt,b[2]=re,b[3]=Ct,O.clearBufferuiv(O.COLOR,0,b)):(E[0]=Lt,E[1]=Kt,E[2]=re,E[3]=Ct,O.clearBufferiv(O.COLOR,0,E))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),L=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",st,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),Ft.dispose(),dt.dispose(),ht.dispose(),H.dispose(),ct.dispose(),nt.dispose(),xt.dispose(),it.dispose(),ft.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Ce),rt.removeEventListener("sessionend",Se),oe.stop()};function Dt(M){M.preventDefault(),rd("WebGLRenderer: Context Lost."),D=!0}function st(){rd("WebGLRenderer: Context Restored."),D=!1;let M=z.autoReset,U=It.enabled,q=It.autoUpdate,G=It.needsUpdate,W=It.type;ot(),z.autoReset=M,It.enabled=U,It.autoUpdate=q,It.needsUpdate=G,It.type=W}function Nt(M){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Et(M){let U=M.target;U.removeEventListener("dispose",Et),Zt(U)}function Zt(M){Ze(M),H.remove(M)}function Ze(M){let U=H.get(M).programs;U!==void 0&&(U.forEach(function(q){ft.releaseProgram(q)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,G,W,gt){U===null&&(U=De);let Tt=W.isMesh&&W.matrixWorld.determinantAffine()<0,yt=on(M,U,q,G,W);x.setMaterial(G,Tt);let Ct=q.index,Lt=1;if(G.wireframe===!0){if(Ct=Q.getWireframeAttribute(q),Ct===void 0)return;Lt=2}let Kt=q.drawRange,re=q.attributes.position,Rt=Kt.start*Lt,pe=(Kt.start+Kt.count)*Lt;gt!==null&&(Rt=Math.max(Rt,gt.start*Lt),pe=Math.min(pe,(gt.start+gt.count)*Lt)),Ct!==null?(Rt=Math.max(Rt,0),pe=Math.min(pe,Ct.count)):re!=null&&(Rt=Math.max(Rt,0),pe=Math.min(pe,re.count));let $e=pe-Rt;if($e<0||$e===1/0)return;xt.setup(W,G,yt,q,Ct);let Re,Me=ut;if(Ct!==null&&(Re=at.get(Ct),Me=et,Me.setIndex(Re)),W.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*de()),Me.setMode(O.LINES)):Me.setMode(O.TRIANGLES);else if(W.isLine){let xn=G.linewidth;xn===void 0&&(xn=1),x.setLineWidth(xn*de()),W.isLineSegments?Me.setMode(O.LINES):W.isLineLoop?Me.setMode(O.LINE_LOOP):Me.setMode(O.LINE_STRIP)}else W.isPoints?Me.setMode(O.POINTS):W.isSprite&&Me.setMode(O.TRIANGLES);if(W.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))Me.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let xn=W._multiDrawStarts,bt=W._multiDrawCounts,Ln=W._multiDrawCount,ue=Ct?at.get(Ct).bytesPerElement:1,mi=H.get(G).currentProgram.getUniforms();for(let Bi=0;Bi<Ln;Bi++)mi.setValue(O,"_gl_DrawID",Bi),Me.render(xn[Bi]/ue,bt[Bi])}else if(W.isInstancedMesh)Me.renderInstances(Rt,$e,W.count);else if(q.isInstancedBufferGeometry){let xn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bt=Math.min(q.instanceCount,xn);Me.renderInstances(Rt,$e,bt)}else Me.render(Rt,$e)};function ne(M,U,q,G){L!==null&&M.isNodeMaterial&&L.setObject(G,M),Yt===!0&&lt.setState(M,q,!1),M.transparent===!0&&M.side===$i&&M.forceSinglePass===!1?(M.side=Gn,M.needsUpdate=!0,ke(M,U,G),M.side=Zr,M.needsUpdate=!0,ke(M,U,G),M.side=$i):ke(M,U,G)}this.compile=function(M,U,q=null){q===null&&(q=M),L!==null&&L.renderStart(M,U,q),w=ht.get(q),w.init(U),v.push(w),q.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),M!==q&&M.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),$t=this.localClippingEnabled,Yt=lt.init(this.clippingPlanes,$t),Yt===!0&&lt.setGlobalState(this.clippingPlanes,U),L!==null&&It.render(w.state.shadowsArray,q,U);let G=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let gt=W.material;if(gt)if(Array.isArray(gt))for(let Tt=0;Tt<gt.length;Tt++){let yt=gt[Tt];ne(yt,q,U,W),G.add(yt)}else ne(gt,q,U,W),G.add(gt)}),w=v.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(M,U,q=null){let G=this.compile(M,U,q);return new Promise(W=>{function gt(){if(G.forEach(function(Tt){let Ct=H.get(Tt).currentProgram;(Ct===void 0||Ct.isReady())&&G.delete(Tt)}),G.size===0){W(M);return}setTimeout(gt,10)}Ht.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ee=null;function an(M){Ee&&Ee(M)}function Ce(){oe.stop()}function Se(){oe.start()}let oe=new u_;oe.setAnimationLoop(an),typeof self!="undefined"&&oe.setContext(self),this.setAnimationLoop=function(M){Ee=M,rt.setAnimationLoop(M),M===null?oe.stop():oe.start()},rt.addEventListener("sessionstart",Ce),rt.addEventListener("sessionend",Se),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(M,U);let q=rt.enabled===!0&&rt.isPresenting===!0,G=T!==null&&(K===null||q)&&T.begin(C,K);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(U),U=rt.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,U,K),w=ht.get(M,v.length),w.init(U),w.state.textureUnits=$.getTextureUnits(),v.push(w),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pt.setFromProjectionMatrix(V,Li,U.reversedDepth),$t=this.localClippingEnabled,Yt=lt.init(this.clippingPlanes,$t),S=dt.get(M,A.length),S.init(),A.push(S),rt.enabled===!0&&rt.isPresenting===!0){let Tt=C.xr.getDepthSensingMesh();Tt!==null&&Pn(Tt,U,-1/0,C.sortObjects)}Pn(M,U,0,C.sortObjects),S.finish(),L!==null&&L.updateLights(w.state.lightsArray),C.sortObjects===!0&&S.sort(_t,Ot),qt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,qt&&Ft.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&lt.beginShadows();let W=w.state.shadowsArray;if(It.render(W,M,U),Yt===!0&&lt.endShadows(),(G&&T.hasRenderPass())===!1){let Tt=S.opaque,yt=S.transmissive;if(w.setupLights(),U.isArrayCamera){let Ct=U.cameras;if(yt.length>0)for(let Lt=0,Kt=Ct.length;Lt<Kt;Lt++){let re=Ct[Lt];_n(Tt,yt,M,re)}qt&&Ft.render(M);for(let Lt=0,Kt=Ct.length;Lt<Kt;Lt++){let re=Ct[Lt];we(S,M,re,re.viewport)}}else yt.length>0&&_n(Tt,yt,M,U),qt&&Ft.render(M),we(S,M,U)}K!==null&&k===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),G&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,U),xt.resetDefaultState(),Y=-1,R=null,v.pop(),v.length>0?(w=v[v.length-1],$.setTextureUnits(w.state.textureUnits),Yt===!0&&lt.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,L!==null&&L.renderEnd()};function Pn(M,U,q,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Pt)){G&&ve.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);let Tt=nt.update(M),yt=M.material;yt.visible&&S.push(M,Tt,yt,q,ve.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Pt))){let Tt=nt.update(M),yt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),ve.copy(M.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ve.copy(Tt.boundingSphere.center)),ve.applyMatrix4(M.matrixWorld).applyMatrix4(V)),Array.isArray(yt)){let Ct=Tt.groups;for(let Lt=0,Kt=Ct.length;Lt<Kt;Lt++){let re=Ct[Lt],Rt=yt[re.materialIndex];Rt&&Rt.visible&&S.push(M,Tt,Rt,q,ve.z,re,U)}}else yt.visible&&S.push(M,Tt,yt,q,ve.z,null,U)}}let gt=M.children;for(let Tt=0,yt=gt.length;Tt<yt;Tt++)Pn(gt[Tt],U,q,G)}function we(M,U,q,G){let{opaque:W,transmissive:gt,transparent:Tt}=M;w.setupLightsView(q),Yt===!0&&lt.setGlobalState(C.clippingPlanes,q),G&&x.viewport(j.copy(G)),W.length>0&&In(W,U,q),gt.length>0&&In(gt,U,q),Tt.length>0&&In(Tt,U,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function _n(M,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let Rt=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new $n(1,1,{generateMipmaps:!0,type:Rt?Fi:hi,minFilter:$r,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let gt=w.state.transmissionRenderTarget[G.id],Tt=G.viewport||j;gt.setSize(Tt.z*C.transmissionResolutionScale,Tt.w*C.transmissionResolutionScale);let yt=C.getRenderTarget(),Ct=C.getActiveCubeFace(),Lt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(kt),zt=C.getClearAlpha(),zt<1&&C.setClearColor(16777215,.5),C.clear(),qt&&Ft.render(q);let Kt=C.toneMapping;C.toneMapping=Di;let re=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Yt===!0&&lt.setGlobalState(C.clippingPlanes,G),In(M,q,G),$.updateMultisampleRenderTarget(gt),$.updateRenderTargetMipmap(gt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let pe=0,$e=U.length;pe<$e;pe++){let Re=U[pe],{object:Me,geometry:xn,material:bt,group:Ln}=Re;if(bt.side===$i&&Me.layers.test(G.layers)){let ue=bt.side;bt.side=Gn,bt.needsUpdate=!0,Je(Me,q,G,xn,bt,Ln),bt.side=ue,bt.needsUpdate=!0,Rt=!0}}Rt===!0&&($.updateMultisampleRenderTarget(gt),$.updateRenderTargetMipmap(gt))}C.setRenderTarget(yt,Ct,Lt),C.setClearColor(kt,zt),re!==void 0&&(G.viewport=re),C.toneMapping=Kt}function In(M,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,gt=M.length;W<gt;W++){let Tt=M[W],{object:yt,geometry:Ct,group:Lt}=Tt,Kt=Tt.material;Kt.allowOverride===!0&&G!==null&&(Kt=G),yt.layers.test(q.layers)&&Je(yt,U,q,Ct,Kt,Lt)}}function Je(M,U,q,G,W,gt){L!==null&&W.isNodeMaterial&&L.setObject(M,W),M.onBeforeRender(C,U,q,G,W,gt),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(C,U,q,G,M,gt),W.transparent===!0&&W.side===$i&&W.forceSinglePass===!1?(W.side=Gn,W.needsUpdate=!0,C.renderBufferDirect(q,U,G,W,M,gt),W.side=Zr,W.needsUpdate=!0,C.renderBufferDirect(q,U,G,W,M,gt),W.side=$i):C.renderBufferDirect(q,U,G,W,M,gt),M.onAfterRender(C,U,q,G,W,gt)}function ke(M,U,q){U.isScene!==!0&&(U=De);let G=H.get(M),W=w.state.lights,gt=w.state.shadowsArray,Tt=W.state.version,yt=ft.getParameters(M,W.state,gt,U,q,w.state.lightProbeGridArray),Ct=ft.getProgramCacheKey(yt),Lt=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Kt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ct.get(M.envMap||G.environment,Kt),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Lt===void 0&&(M.addEventListener("dispose",Et),Lt=new Map,G.programs=Lt);let re=Lt.get(Ct);if(re!==void 0){if(G.currentProgram===re&&G.lightsStateVersion===Tt)return Oi(M,yt),re}else yt.uniforms=ft.getUniforms(M),L!==null&&M.isNodeMaterial&&L.build(M,q,yt),M.onBeforeCompile(yt,C),re=ft.acquireProgram(yt,Ct),Lt.set(Ct,re),G.uniforms=yt.uniforms;let Rt=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Rt.clippingPlanes=lt.uniform),Oi(M,yt),G.needsLights=pi(M),G.lightsStateVersion=Tt,G.needsLights&&(Rt.ambientLightColor.value=W.state.ambient,Rt.lightProbe.value=W.state.probe,Rt.sunLights.value=W.state.sun,Rt.sunLightShadows.value=W.state.sunShadow,Rt.directionalLights.value=W.state.directional,Rt.directionalLightShadows.value=W.state.directionalShadow,Rt.spotLights.value=W.state.spot,Rt.spotLightShadows.value=W.state.spotShadow,Rt.rectAreaLights.value=W.state.rectArea,Rt.ltc_1.value=W.state.rectAreaLTC1,Rt.ltc_2.value=W.state.rectAreaLTC2,Rt.pointLights.value=W.state.point,Rt.pointLightShadows.value=W.state.pointShadow,Rt.hemisphereLights.value=W.state.hemi,Rt.sunShadowMatrix.value=W.state.sunShadowMatrix,Rt.sunShadowCascade.value=W.state.sunShadowCascade,Rt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Rt.spotLightMatrix.value=W.state.spotLightMatrix,Rt.spotLightMap.value=W.state.spotLightMap,Rt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=re,G.uniformsList=null,re}function tn(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Ra.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Oi(M,U){let q=H.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Ls(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let q=0,G=M.length;q<G;q++){let W=M[q];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function on(M,U,q,G,W){U.isScene!==!0&&(U=De),$.resetTextureUnits();let gt=U.fog,Tt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,yt=K===null?C.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ae.workingColorSpace,Ct=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Lt=ct.get(G.envMap||Tt,Ct),Kt=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,re=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Rt=!!q.morphAttributes.position,pe=!!q.morphAttributes.normal,$e=!!q.morphAttributes.color,Re=Di;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Re=C.toneMapping);let Me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xn=Me!==void 0?Me.length:0,bt=H.get(G),Ln=w.state.lights;if(Yt===!0&&($t===!0||M!==R)){let Ae=M===R&&G.id===Y;lt.setState(G,M,Ae)}let ue=!1;G.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Ln.state.version||bt.outputColorSpace!==yt||W.isBatchedMesh&&bt.batching===!1||!W.isBatchedMesh&&bt.batching===!0||W.isBatchedMesh&&bt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&bt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&bt.instancing===!1||!W.isInstancedMesh&&bt.instancing===!0||W.isSkinnedMesh&&bt.skinning===!1||!W.isSkinnedMesh&&bt.skinning===!0||W.isInstancedMesh&&bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&bt.instancingMorph===!1&&W.morphTexture!==null||bt.envMap!==Lt||G.fog===!0&&bt.fog!==gt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==lt.numPlanes||bt.numIntersection!==lt.numIntersection)||bt.vertexAlphas!==Kt||bt.vertexTangents!==re||bt.morphTargets!==Rt||bt.morphNormals!==pe||bt.morphColors!==$e||bt.toneMapping!==Re||bt.morphTargetsCount!==xn||!!bt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,bt.__version=G.version);let mi=bt.currentProgram;ue===!0&&(mi=ke(G,U,W),L&&G.isNodeMaterial&&L.onUpdateProgram(G,mi,bt));let Bi=!1,yr=!1,Ns=!1,ye=mi.getUniforms(),Ye=bt.uniforms;if(x.useProgram(mi.program)&&(Bi=!0,yr=!0,Ns=!0),G.id!==Y&&(Y=G.id,yr=!0),bt.needsLights){let Ae=Ls(w.state.lightProbeGridArray,W);bt.lightProbeGrid!==Ae&&(bt.lightProbeGrid=Ae,yr=!0)}if(Bi||R!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ye.setValue(O,"projectionMatrix",M.projectionMatrix),ye.setValue(O,"viewMatrix",M.matrixWorldInverse);let Mr=ye.map.cameraPosition;Mr!==void 0&&Mr.setValue(O,ee.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&ye.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ye.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),R!==M&&(R=M,yr=!0,Ns=!0)}if(bt.needsLights&&(Ln.state.sunShadowMap.length>0&&ye.setValue(O,"sunShadowMap",Ln.state.sunShadowMap,$),Ln.state.directionalShadowMap.length>0&&ye.setValue(O,"directionalShadowMap",Ln.state.directionalShadowMap,$),Ln.state.spotShadowMap.length>0&&ye.setValue(O,"spotShadowMap",Ln.state.spotShadowMap,$),Ln.state.pointShadowMap.length>0&&ye.setValue(O,"pointShadowMap",Ln.state.pointShadowMap,$)),W.isSkinnedMesh){ye.setOptional(O,W,"bindMatrix"),ye.setOptional(O,W,"bindMatrixInverse");let Ae=W.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ye.setValue(O,"boneTexture",Ae.boneTexture,$))}W.isBatchedMesh&&(ye.setOptional(O,W,"batchingTexture"),ye.setValue(O,"batchingTexture",W._matricesTexture,$),ye.setOptional(O,W,"batchingIdTexture"),ye.setValue(O,"batchingIdTexture",W._indirectTexture,$),ye.setOptional(O,W,"batchingColorTexture"),W._colorsTexture!==null&&ye.setValue(O,"batchingColorTexture",W._colorsTexture,$));let Sr=q.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0)&&N.update(W,q,mi),(yr||bt.receiveShadow!==W.receiveShadow)&&(bt.receiveShadow=W.receiveShadow,ye.setValue(O,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ye.envMapIntensity.value=U.environmentIntensity),Ye.dfgLUT!==void 0&&(Ye.dfgLUT.value=oT()),yr){if(ye.setValue(O,"toneMappingExposure",C.toneMappingExposure),bt.needsLights&&Xe(Ye,Ns),gt&&G.fog===!0&&At.refreshFogUniforms(Ye,gt),At.refreshMaterialUniforms(Ye,G,tt,J,w.state.transmissionRenderTarget[M.id]),bt.needsLights&&bt.lightProbeGrid){let Ae=bt.lightProbeGrid;Ye.probesSH.value=Ae.texture,Ye.probesMin.value.copy(Ae.boundingBox.min),Ye.probesMax.value.copy(Ae.boundingBox.max),Ye.probesResolution.value.copy(Ae.resolution)}Ra.upload(O,tn(bt),Ye,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ra.upload(O,tn(bt),Ye,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ye.setValue(O,"center",W.center),ye.setValue(O,"modelViewMatrix",W.modelViewMatrix),ye.setValue(O,"normalMatrix",W.normalMatrix),ye.setValue(O,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Ae=G.uniformsGroups;for(let Mr=0,Us=Ae.length;Mr<Us;Mr++){let Bd=Ae[Mr];it.update(Bd,mi),it.bind(Bd,mi)}}return mi}function Xe(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function pi(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(M,U,q){let G=H.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=U,H.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let q=H.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,q=0){K=M,X=U,k=q;let G=null,W=!1,gt=!1;if(M){let yt=H.get(M);if(yt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(O.FRAMEBUFFER,yt.__webglFramebuffer),j.copy(M.viewport),St.copy(M.scissor),Mt=M.scissorTest,x.viewport(j),x.scissor(St),x.setScissorTest(Mt),Y=-1;return}else if(yt.__webglFramebuffer===void 0)$.setupRenderTarget(M);else if(yt.__hasExternalTextures)$.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Kt=M.depthTexture;if(yt.__boundDepthTexture!==Kt){if(Kt!==null&&H.has(Kt)&&(M.width!==Kt.image.width||M.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(M)}}let Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(gt=!0);let Lt=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Lt[U])?G=Lt[U][q]:G=Lt[U],W=!0):M.samples>0&&$.useMultisampledRTT(M)===!1?G=H.get(M).__webglMultisampledFramebuffer:Array.isArray(Lt)?G=Lt[q]:G=Lt,j.copy(M.viewport),St.copy(M.scissor),Mt=M.scissorTest}else j.copy(mt).multiplyScalar(tt).floor(),St.copy(Ut).multiplyScalar(tt).floor(),Mt=Bt;if(q!==0&&(G=F),x.bindFramebuffer(O.FRAMEBUFFER,G)&&x.drawBuffers(M,G),x.viewport(j),x.scissor(St),x.setScissorTest(Mt),W){let yt=H.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,q)}else if(gt){let yt=U;for(let Ct=0;Ct<M.textures.length;Ct++){let Lt=H.get(M.textures[Ct]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,q,yt)}}else if(M!==null&&q!==0){let yt=H.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,yt.__webglTexture,q)}Y=-1};function Ds(M){let U=H.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=P.textureFormatReadable(M.format),U.__typeReadable=P.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,q,G,W,gt,Tt,yt=0){if(!(M&&M.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){x.bindFramebuffer(O.FRAMEBUFFER,Ct);try{let Lt=M.textures[yt],Kt=Lt.format,re=Lt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+yt);let Rt=Ds(Lt);if(Rt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&q>=0&&q<=M.height-W&&O.readPixels(U,q,G,W,pt.convert(Kt),pt.convert(re),gt)}finally{let Lt=K!==null?H.get(K).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,G,W,gt,Tt,yt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct)if(U>=0&&U<=M.width-G&&q>=0&&q<=M.height-W){x.bindFramebuffer(O.FRAMEBUFFER,Ct);let Lt=M.textures[yt],Kt=Lt.format,re=Lt.type;M.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+yt);let Rt=Ds(Lt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,pe),O.bufferData(O.PIXEL_PACK_BUFFER,gt.byteLength,O.STREAM_READ),O.readPixels(U,q,G,W,pt.convert(Kt),pt.convert(re),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let $e=K!==null?H.get(K).__webglFramebuffer:null;x.bindFramebuffer(O.FRAMEBUFFER,$e);let Re=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Og(O,Re,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,pe),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,gt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(pe),O.deleteSync(Re),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){let G=Math.pow(2,-q),W=Math.floor(M.image.width*G),gt=Math.floor(M.image.height*G),Tt=U!==null?U.x:0,yt=U!==null?U.y:0;$.setTexture2D(M,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Tt,yt,W,gt),x.unbindTexture()},this.copyTextureToTexture=function(M,U,q=null,G=null,W=0,gt=0){let Tt,yt,Ct,Lt,Kt,re,Rt,pe,$e,Re=M.isCompressedTexture?M.mipmaps[gt]:M.image;if(q!==null)Tt=q.max.x-q.min.x,yt=q.max.y-q.min.y,Ct=q.isBox3?q.max.z-q.min.z:1,Lt=q.min.x,Kt=q.min.y,re=q.isBox3?q.min.z:0;else{let Ye=Math.pow(2,-W);Tt=Math.floor(Re.width*Ye),yt=Math.floor(Re.height*Ye),M.isDataArrayTexture?Ct=Re.depth:M.isData3DTexture?Ct=Math.floor(Re.depth*Ye):Ct=1,Lt=0,Kt=0,re=0}G!==null?(Rt=G.x,pe=G.y,$e=G.z):(Rt=0,pe=0,$e=0);let Me=pt.convert(U.format),xn=pt.convert(U.type),bt;U.isData3DTexture?($.setTexture3D(U,0),bt=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),bt=O.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),bt=O.TEXTURE_2D),x.activeTexture(O.TEXTURE0),x.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Ln=x.getParameter(O.UNPACK_ROW_LENGTH),ue=x.getParameter(O.UNPACK_IMAGE_HEIGHT),mi=x.getParameter(O.UNPACK_SKIP_PIXELS),Bi=x.getParameter(O.UNPACK_SKIP_ROWS),yr=x.getParameter(O.UNPACK_SKIP_IMAGES);x.pixelStorei(O.UNPACK_ROW_LENGTH,Re.width),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Re.height),x.pixelStorei(O.UNPACK_SKIP_PIXELS,Lt),x.pixelStorei(O.UNPACK_SKIP_ROWS,Kt),x.pixelStorei(O.UNPACK_SKIP_IMAGES,re);let Ns=M.isDataArrayTexture||M.isData3DTexture,ye=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Ye=H.get(M),Sr=H.get(U),Ae=H.get(Ye.__renderTarget),Mr=H.get(Sr.__renderTarget);x.bindFramebuffer(O.READ_FRAMEBUFFER,Ae.__webglFramebuffer),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let Us=0;Us<Ct;Us++)Ns&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(M).__webglTexture,W,re+Us),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(U).__webglTexture,gt,$e+Us)),O.blitFramebuffer(Lt,Kt,Tt,yt,Rt,pe,Tt,yt,O.DEPTH_BUFFER_BIT,O.NEAREST);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||H.has(M)){let Ye=H.get(M),Sr=H.get(U);x.bindFramebuffer(O.READ_FRAMEBUFFER,I),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,B);for(let Ae=0;Ae<Ct;Ae++)Ns?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ye.__webglTexture,W,re+Ae):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ye.__webglTexture,W),ye?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Sr.__webglTexture,gt,$e+Ae):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Sr.__webglTexture,gt),W!==0?O.blitFramebuffer(Lt,Kt,Tt,yt,Rt,pe,Tt,yt,O.COLOR_BUFFER_BIT,O.NEAREST):ye?O.copyTexSubImage3D(bt,gt,Rt,pe,$e+Ae,Lt,Kt,Tt,yt):O.copyTexSubImage2D(bt,gt,Rt,pe,Lt,Kt,Tt,yt);x.bindFramebuffer(O.READ_FRAMEBUFFER,null),x.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ye?M.isDataTexture||M.isData3DTexture?O.texSubImage3D(bt,gt,Rt,pe,$e,Tt,yt,Ct,Me,xn,Re.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(bt,gt,Rt,pe,$e,Tt,yt,Ct,Me,Re.data):O.texSubImage3D(bt,gt,Rt,pe,$e,Tt,yt,Ct,Me,xn,Re):M.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,gt,Rt,pe,Tt,yt,Me,xn,Re.data):M.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,gt,Rt,pe,Re.width,Re.height,Me,Re.data):O.texSubImage2D(O.TEXTURE_2D,gt,Rt,pe,Tt,yt,Me,xn,Re);x.pixelStorei(O.UNPACK_ROW_LENGTH,Ln),x.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue),x.pixelStorei(O.UNPACK_SKIP_PIXELS,mi),x.pixelStorei(O.UNPACK_SKIP_ROWS,Bi),x.pixelStorei(O.UNPACK_SKIP_IMAGES,yr),gt===0&&U.generateMipmaps&&O.generateMipmap(bt),x.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&$.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$.setTextureCube(M,0):M.isData3DTexture?$.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$.setTexture2DArray(M,0):$.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){X=0,k=0,K=null,x.reset(),xt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};function lT(r){let t=Math.sin(r),e=16*t*t*t,n=13*Math.cos(r)-5*Math.cos(2*r)-2*Math.cos(3*r)-Math.cos(4*r);return[e/16,(n+2.5)/16]}function cT(r,t){let[e,n]=lT(Math.random()*Math.PI*2),i=Math.random()<.22,s=i?1:Math.pow(Math.random(),.35),a=(Math.random()<.5?-1:1)*t*Math.sqrt(Math.max(0,1-s*s)),o=i?.012:.03;return[(e*s+(Math.random()-.5)*o)*r,(n*s+(Math.random()-.5)*o)*r,a*r]}var uT=`
  uniform float uTime;
  uniform float uMorph;
  uniform float uBeat;
  uniform float uPixelRatio;
  uniform float uSize;
  uniform float uDrift;
  uniform float uHeartY;
  uniform float uHeartScale;
  uniform float uHeartGain;

  attribute vec3 aHeart;
  attribute vec3 aScatter;
  attribute vec4 aRand;

  varying float vAlpha;
  varying float vTint;

  void main() {
    // Lub-dub heartbeat: two quick pulses, then rest.
    float t = mod(uTime, 1.6);
    float pulse = exp(-pow((t - 0.12) * 14.0, 2.0)) + 0.6 * exp(-pow((t - 0.42) * 14.0, 2.0));
    float beat = 1.0 + 0.035 * pulse + 0.06 * uBeat;

    vec3 heart = aHeart * beat * uHeartScale;
    heart += 0.018 * vec3(
      sin(uTime * 1.3 + aRand.y * 40.0),
      cos(uTime * 1.1 + aRand.z * 40.0),
      sin(uTime * 0.9 + aRand.w * 40.0)
    );
    heart.y += uHeartY;

    // Dust field slowly rises and wraps so the gallery background never runs out.
    vec3 dust = aScatter;
    dust.y = mod(dust.y + uDrift * (0.4 + aRand.x) + 9.0, 18.0) - 9.0;
    dust.x += sin(uTime * 0.2 + aRand.y * 20.0) * 0.25;

    // Each particle leaves the heart at a slightly different moment.
    float m = clamp(uMorph * 1.6 - aRand.y * 0.6, 0.0, 1.0);
    m = m * m * (3.0 - 2.0 * m);
    vec3 pos = mix(heart, dust, m);

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mv;

    float size = uSize * (0.35 + aRand.x * 0.9) * mix(1.0, 1.6, m);
    gl_PointSize = size * uPixelRatio / -mv.z;

    float twinkle = 0.65 + 0.35 * sin(uTime * (1.0 + aRand.z * 2.0) + aRand.w * 30.0);
    // uHeartGain dims the heart when its particles are packed more densely.
    vAlpha = twinkle * mix(uHeartGain, 0.55, m);
    vTint = aRand.w;
  }
`,hT=`
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uOpacity;

  varying float vAlpha;
  varying float vTint;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a = pow(a, 1.8);
    vec3 col = mix(uColorA, uColorB, vTint);
    gl_FragColor = vec4(col, a * vAlpha * uOpacity);
  }
`;function __(r,{reducedMotion:t=!1}={}){let e;try{e=new Uu({canvas:r,antialias:!1,alpha:!0,powerPreference:"high-performance"})}catch{return null}let n=Math.min(window.innerWidth,window.innerHeight)<600,i=n?7e3:12e3,s=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i*4),l=n?3.4:5.5;for(let F=0;F<i;F++){let[I,B,X]=cT(1.2,.42);s[F*3]=I,s[F*3+1]=B,s[F*3+2]=X,a[F*3]=(Math.random()*2-1)*l,a[F*3+1]=(Math.random()*2-1)*9,a[F*3+2]=-Math.random()*9+1.5,o[F*4]=Math.random(),o[F*4+1]=Math.random(),o[F*4+2]=Math.random(),o[F*4+3]=Math.random()}let c=new ci;c.setAttribute("position",new mn(s,3)),c.setAttribute("aHeart",new mn(s,3)),c.setAttribute("aScatter",new mn(a,3)),c.setAttribute("aRand",new mn(o,4));let u={uTime:{value:0},uMorph:{value:0},uBeat:{value:0},uDrift:{value:0},uHeartY:{value:0},uHeartScale:{value:1},uHeartGain:{value:1},uOpacity:{value:0},uPixelRatio:{value:1},uSize:{value:n?62:84},uColorA:{value:new se("#f2b8b2")},uColorB:{value:new se("#ffe8d2")}},d=new Vn({uniforms:u,vertexShader:uT,fragmentShader:hT,transparent:!0,depthWrite:!1,blending:Vo}),h=new Do(c,d);h.frustumCulled=!1;let f=new Eo;f.add(h);let g=new Cn(35,1,.1,50);g.position.set(0,0,8);let _={morph:0,drift:0,beat:0,opacity:0,tiltX:0,tiltY:0},p=0,m=0,b=null;function E(){if(!b||!m)return;let I=2*g.position.z*Math.tan(g.fov*Math.PI/360)/m;u.uHeartY.value=(m/2-b.center)*I;let B=Math.min(b.size*I/2.2,p*.78*I/2.4);u.uHeartScale.value=B,u.uHeartGain.value=Math.min(1,Math.max(.2,(B/.9)**2*(7e3/i)))}function y(F,I){b={center:F,size:I},E()}function S(){let F=r.clientWidth,I=r.clientHeight;if(!F||!I||F===p&&I===m)return;p=F,m=I;let B=Math.min(window.devicePixelRatio||1,2);e.setPixelRatio(B),e.setSize(F,I,!1),u.uPixelRatio.value=B,g.aspect=F/I,g.position.z=g.aspect<.7?8/Math.max(g.aspect/.7,.62):8,g.updateProjectionMatrix(),E()}let w=!1,A=0,v=performance.now(),T=0;function C(F){A=requestAnimationFrame(C);let I=Math.min((F-v)/1e3,.05);v=F,t||(T+=I),u.uTime.value=T,u.uMorph.value+=(_.morph-u.uMorph.value)*Math.min(I*4,1),u.uDrift.value+=(_.drift-u.uDrift.value)*Math.min(I*3,1),u.uOpacity.value+=(_.opacity-u.uOpacity.value)*Math.min(I*2.5,1),u.uBeat.value+=(_.beat-u.uBeat.value)*Math.min(I*12,1),h.rotation.y=Math.sin(T*.45)*.55+_.tiltY,h.rotation.x=_.tiltX,e.render(f,g)}function D(){w||(w=!0,v=performance.now(),A=requestAnimationFrame(C))}function L(){w=!1,cancelAnimationFrame(A)}return S(),window.addEventListener("resize",S),document.addEventListener("visibilitychange",()=>{document.hidden?L():D()}),{state:_,start:D,stop:L,resize:S,setHeart:y}}he.registerPlugin(Wt);Wt.config({ignoreMobileResize:!0});"scrollRestoration"in history&&(history.scrollRestoration="manual");window.scrollTo(0,0);var fi=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ku=ia.length,fT=12,x_="http://www.w3.org/2000/svg",_e=(r,t=document)=>t.querySelector(r),S_=(r,t=document)=>Array.from(t.querySelectorAll(r)),dT=r=>String(r).padStart(2,"0");function Be(r,t,e){let n=document.createElement(r);return t&&(n.className=t),e!=null&&(n.textContent=e),n}function pT(r){let t=document.createElementNS(x_,"svg");t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("aria-hidden","true");let e=document.createElementNS(x_,"path");return e.setAttribute("d",r),t.appendChild(e),t}function M_(r,t=r.textContent){r.textContent="";let e=[];return t.split(/\s+/).filter(Boolean).forEach((n,i)=>{i&&r.appendChild(document.createTextNode(" "));let s=Be("span","w"),a=Be("span","wi",n);s.appendChild(a),r.appendChild(s),e.push(a)}),e}function mT(r){let t=r.textContent;return r.setAttribute("aria-label",t),r.textContent="",Array.from(t).map(e=>{let n=Be("span","char",e);return n.setAttribute("aria-hidden","true"),r.appendChild(n),n})}var Is=__(_e("#gl"),{reducedMotion:fi}),er=Is?Is.state:{morph:0,drift:0,beat:0,opacity:0,tiltX:0,tiltY:0};Is&&(er.morph=1,Is.start());var jr={intro:1,hero:0,finale:0,outro:0};function Bu(){er.morph=Math.max(jr.intro,jr.hero*(1-jr.finale),jr.outro)}var Vu={reel:!1,outro:!1};function Ud(){Vu.reel?er.opacity=.5:Vu.outro?er.opacity=.35:er.opacity=1}!fi&&window.matchMedia("(hover: hover) and (pointer: fine)").matches&&window.addEventListener("pointermove",r=>{he.to(er,{tiltY:(r.clientX/window.innerWidth-.5)*.5,tiltX:(r.clientY/window.innerHeight-.5)*.3,duration:1.4,ease:"power2.out",overwrite:"auto"})});var Fd=_e("#reelStage"),vr=[],Rd=[["inset(100% 0% 0% 0%)","inset(0% 0% 0% 0%)"],["inset(0% 50% 0% 50%)","inset(0% 0% 0% 0%)"],["circle(0% at 50% 50%)","circle(75% at 50% 50%)"],["inset(0% 0% 100% 0%)","inset(0% 0% 0% 0%)"]];function gT(r,t){let e=Be("article","shot");e.setAttribute("aria-label",`Photo ${r.n} of ${ku}`);let n=Be("div","shot__body"),i=Be("span","shot__big",r.n);i.setAttribute("aria-hidden","true");let s=Be("div","shot__meta label");s.append(Be("span","",`No. ${r.n}`),Be("span","shot__rule"),Be("span","","Tap to open"));let a=Be("button","shot__frame");a.type="button",a.setAttribute("aria-label",`Open photo ${r.n} in full`),a.dataset.index=String(t);let o=Be("span","shot__glow");o.setAttribute("aria-hidden","true");let l=Be("span","shot__clip"),c=Be("img");c.src=r.src,c.alt=`Photo ${r.n} of ${ku}`,c.decoding="async",c.draggable=!1,c.style.objectPosition=r.focus,l.appendChild(c);let u=Be("span","shot__expand");u.setAttribute("aria-hidden","true"),u.appendChild(pT("M14 5h5v5M10 19H5v-5M19 5l-6 6M5 19l6-6")),l.appendChild(u),a.append(o,l);let d=Be("p","shot__line"),h=M_(d,r.line);return n.append(i,s,a,d),e.appendChild(n),Fd.appendChild(e),{type:"photo",index:t,el:e,big:i,meta:s,frame:a,clip:l,img:c,expand:u,line:d,words:h}}function _T(){let r=Be("article","shot shot--interlude");r.setAttribute("aria-label","Interlude");let t="Admirin\u2019 you \xB7 ",e=o=>{let l=Be("div",`marquee ${o}`);l.setAttribute("aria-hidden","true");let c=Be("span","marquee__track",t.repeat(6));return l.appendChild(c),{row:l,track:c}},n=e(""),i=e("marquee--em"),s=Be("p","interlude__copy"),a=M_(s,"Halfway through, and I\u2019m still not over you.");return r.append(n.row,s,i.row),Fd.appendChild(r),{type:"interlude",el:r,tracks:[n.track,i.track],words:a}}ia.forEach((r,t)=>{vr.push(gT(r,t)),t+1===fT&&vr.push(_T())});_e("#reel").style.setProperty("--steps",String(vr.length));var Pd=_e("#hudNum"),Id=0;function xT(r){if(r===Id)return;let t=r>Id?1:-1;Id=r,he.killTweensOf(Pd),he.fromTo(Pd,{yPercent:100*t},{yPercent:0,duration:.5,ease:"power3.out",onStart:()=>{Pd.textContent=dT(r+1)}})}function vT(){let r=he.timeline({defaults:{ease:"power3.out"}}),t=vr.length-1;r.addLabel("start",0),vr.forEach((i,s)=>{let a=s;if(r.fromTo(i.el,{autoAlpha:0},{autoAlpha:1,duration:.12,ease:"none"},a),i.type==="photo"){let[o,l]=Rd[i.index%Rd.length],c=i.index%Rd.length===3;fi?r.fromTo(i.words,{autoAlpha:0},{autoAlpha:1,duration:.2},a+.1):r.fromTo(i.clip,{clipPath:o},{clipPath:l,duration:.5,ease:"power3.inOut"},a).fromTo(i.img,{scale:1.35,yPercent:5},{scale:1.06,yPercent:0,duration:.8,ease:"power2.out"},a).fromTo(i.frame,c?{rotateX:-26,y:40}:{y:36},c?{rotateX:0,y:0,duration:.6}:{y:0,duration:.6},a).fromTo(i.big,{yPercent:45,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:.6},a+.05).fromTo(i.meta,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.3},a+.2).fromTo(i.expand,{autoAlpha:0,scale:.6},{autoAlpha:1,scale:1,duration:.25},a+.4).fromTo(i.words,{yPercent:115},{yPercent:0,duration:.34,stagger:{amount:.22}},a+.2),r.addLabel(`s${s}`,a+.62),s!==t&&(fi||r.to(i.img,{scale:1,duration:.3,ease:"none"},a+.8).to(i.frame,{y:-44,rotateX:14,scale:.9,duration:.3,ease:"power2.in"},a+.72).to(i.line,{y:-18,autoAlpha:0,duration:.22,ease:"power1.in"},a+.72).to(i.big,{yPercent:-35,autoAlpha:0,duration:.3,ease:"power1.in"},a+.72),r.to(i.el,{autoAlpha:0,duration:.14,ease:"none"},a+.88))}else fi||r.fromTo(i.tracks[0],{xPercent:0},{xPercent:-30,duration:1.1,ease:"none"},a).fromTo(i.tracks[1],{xPercent:-30},{xPercent:0,duration:1.1,ease:"none"},a).fromTo(i.words,{yPercent:115},{yPercent:0,duration:.34,stagger:{amount:.2}},a+.15),r.addLabel(`s${s}`,a+.55),r.to(i.el,{autoAlpha:0,duration:.14,ease:"none"},a+.88)});let e=vr.length;r.duration()<e&&r.to({},{duration:e-r.duration()}),r.addLabel("end",e);let n=i=>{let s=0;for(let a=0;a<vr.length;a++)a<=i+.3&&vr[a].type==="photo"&&(s=vr[a].index);return s};Wt.create({trigger:"#reel",start:"top top",end:"bottom bottom",animation:r,scrub:fi?!0:.9,snap:{snapTo:"labels",inertia:!1,duration:{min:.25,max:.8},delay:.12,ease:"power1.inOut"},onUpdate:i=>{er.drift=i.progress*14,xT(n(i.progress*r.duration()))},onToggle:i=>{Vu.reel=i.isActive,Ud(),he.to(".hud__count",{autoAlpha:i.isActive?1:0,duration:.5,overwrite:"auto"})}})}var b_=S_("[data-split]").map(mT);function T_(){let r=he.timeline();return r.fromTo(jr,{intro:1},{intro:0,duration:2.8,ease:"power2.inOut",onUpdate:Bu,immediateRender:!1},0),fi?(r.fromTo(".hero__inner, .cue",{autoAlpha:0},{autoAlpha:1,duration:.8},.2),r):(b_.forEach((t,e)=>{r.fromTo(t,{yPercent:118,rotate:6},{yPercent:0,rotate:0,duration:1.6,ease:"expo.out",stagger:.06},.5+e*.25)}),r.fromTo(".hero__over .mask > span",{yPercent:110},{yPercent:0,duration:1.2,ease:"expo.out"},.4).fromTo(".hero__sub .mask > span",{yPercent:110},{yPercent:0,duration:1.2,ease:"expo.out"},1.1).fromTo(".cue",{autoAlpha:0},{autoAlpha:1,duration:1},1.6),r)}function yT(){Wt.create({trigger:"#hero",start:"top top",end:"bottom top",onUpdate:a=>{jr.hero=a.progress,Bu()}}),fi||(he.to(".hero__inner",{yPercent:-35,autoAlpha:0,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom 30%",scrub:!0}}),he.to(".cue",{autoAlpha:0,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"20% top",scrub:!0}}));let r=_e("#preludeText"),t=r.textContent.trim();r.setAttribute("aria-label",t),r.textContent="";let e=t.split(/\s+/).map((a,o)=>{o&&r.appendChild(document.createTextNode(" "));let l=Be("span","word",a);return l.setAttribute("aria-hidden","true"),r.appendChild(l),l});he.to(e,{opacity:1,ease:"none",stagger:.1,scrollTrigger:{trigger:"#prelude",start:"top 35%",end:"bottom bottom",scrub:fi?!0:.6}}),Wt.create({trigger:"#finale",start:"top bottom",end:"top top",onUpdate:a=>{jr.finale=a.progress,Bu()}});let n=he.timeline({paused:!0,defaults:{ease:"expo.out"}});fi?n.fromTo("#finaleCopy",{autoAlpha:0},{autoAlpha:1,duration:.8},0):n.fromTo(".finale__copy .mask > span",{yPercent:110},{yPercent:0,duration:1.4,stagger:.12},0),Wt.create({trigger:"#finale",start:"top 45%",onEnter:()=>n.play(),onLeaveBack:()=>n.reverse()}),Wt.create({trigger:"#outro",start:"top 85%",end:"top 25%",onUpdate:a=>{jr.outro=a.progress,Bu()}});let i=he.timeline({paused:!0,defaults:{ease:"expo.out"}});fi?i.fromTo("#ring, #replay, .outro__sign, .outro__hint",{autoAlpha:0},{autoAlpha:1,duration:.8},0):i.fromTo("#ring",{autoAlpha:0,scale:.86},{autoAlpha:1,scale:1,duration:1.8},0).fromTo(".outro__hint, #replay, .outro__sign",{autoAlpha:0,y:12},{autoAlpha:1,y:0,duration:1,stagger:.1},.5),Wt.create({trigger:"#outro",start:"top 70%",onEnter:()=>i.play(),onLeaveBack:()=>i.reverse(),onToggle:a=>{Vu.outro=a.isActive,Ud()}});let s=_e("#hudBar");Wt.create({start:0,end:"max",onUpdate:a=>he.set(s,{scaleX:a.progress})})}var Ia=_e("#ring"),w_=_e("#ringSpin"),Da=ia.map((r,t)=>{let e=Be("div","ring__card");e.dataset.index=String(t);let n=Be("img");return n.src=r.thumb,n.alt="",n.decoding="async",n.draggable=!1,n.style.objectPosition=r.focus,e.appendChild(n),w_.appendChild(e),e}),ze={angle:0,velocity:0,radius:0,dragging:!1,visible:!1},A_=360/Da.length;function E_(){let r=Da[0].offsetWidth||120;ze.radius=Math.round(r/2/Math.tan(Math.PI/Da.length)*1.14),Da.forEach((t,e)=>{t.style.transform=`rotateY(${e*A_}deg) translateZ(${ze.radius}px)`}),C_()}function C_(){w_.style.transform=`translateZ(${-ze.radius}px) rotateY(${ze.angle}deg)`}var Ld=0;function R_(r){if(!ze.visible)return;let t=Math.min((r-Ld)/1e3,.05);Ld=r,ze.dragging||(ze.velocity*=Math.pow(.04,t),ze.angle+=(fi?0:-7)*t+ze.velocity*t),C_(),requestAnimationFrame(R_)}new IntersectionObserver(r=>{let t=r[0].isIntersecting;t&&!ze.visible?(ze.visible=!0,Ld=performance.now(),requestAnimationFrame(R_)):t||(ze.visible=!1)}).observe(Ia);(function(){let t=0,e=0,n=0,i=0,s=null,a=null;Ia.addEventListener("pointerdown",l=>{if(!(l.button!==void 0&&l.button!==0)){s=l.pointerId,a=l.target.closest(".ring__card");try{Ia.setPointerCapture(l.pointerId)}catch{}t=e=l.clientX,n=performance.now(),i=0,ze.dragging=!0,ze.velocity=0}}),Ia.addEventListener("pointermove",l=>{if(!ze.dragging||l.pointerId!==s)return;let c=performance.now(),u=l.clientX-e;i=Math.max(i,Math.abs(l.clientX-t)),ze.angle+=u*.28;let d=Math.max((c-n)/1e3,.001);ze.velocity=u*.28/d,e=l.clientX,n=c});let o=l=>{if(!ze.dragging||l.pointerId!==s)return;ze.dragging=!1,s=null,performance.now()-n>80&&(ze.velocity=0),ze.velocity=Math.max(-600,Math.min(600,ze.velocity));let c=a;if(a=null,l.type!=="pointerup"||i>=6)return;let u=h=>Math.abs(((h*A_+ze.angle)%360+540)%360-180),d=c?Number(c.dataset.index):-1;if(d<0||u(d)>=80){d=0;for(let h=1;h<Da.length;h++)u(h)<u(d)&&(d=h)}P_(d,Da[d])};Ia.addEventListener("pointerup",o),Ia.addEventListener("pointercancel",o)})();var Hu=_e("#lightbox"),Dd=_e("#lightboxImg"),ST=_e("#lightboxNum"),MT=_e("#lightboxLine"),zu=null,tl=!1;function P_(r,t){let e=ia[r];!e||tl||(tl=!0,zu=t instanceof HTMLElement?t:document.activeElement,Dd.src=e.src,Dd.alt=`Photo ${e.n} of ${ku}`,ST.textContent=`No. ${e.n} / ${ku}`,MT.textContent=e.line,Hu.hidden=!1,he.fromTo(".lightbox__backdrop",{autoAlpha:0},{autoAlpha:1,duration:.5,ease:"power2.out"}),he.fromTo(".lightbox__figure",{autoAlpha:0,y:24,scale:.96},{autoAlpha:1,y:0,scale:1,duration:.8,ease:"expo.out"}),he.fromTo(".lightbox__close",{autoAlpha:0},{autoAlpha:1,duration:.5,delay:.2}),_e(".lightbox__close").focus({preventScroll:!0}))}function I_(){tl&&(tl=!1,he.to(".lightbox__figure",{autoAlpha:0,y:12,scale:.98,duration:.35,ease:"power2.in"}),he.to(".lightbox__close",{autoAlpha:0,duration:.25}),he.to(".lightbox__backdrop",{autoAlpha:0,duration:.45,delay:.1,ease:"power2.inOut",onComplete:()=>{Hu.hidden=!0,Dd.removeAttribute("src")}}),zu&&document.contains(zu)&&zu.focus({preventScroll:!0}))}Fd.addEventListener("click",r=>{let t=r.target.closest(".shot__frame");t&&P_(Number(t.dataset.index),t)});Hu.addEventListener("click",r=>{r.target.closest("[data-close]")&&I_()});["wheel","touchmove"].forEach(r=>{Hu.addEventListener(r,t=>t.preventDefault(),{passive:!1})});var bT=new Set(["ArrowUp","ArrowDown","PageUp","PageDown","Home","End"," "]);document.addEventListener("keydown",r=>{tl&&(r.key==="Escape"?I_():r.key==="Tab"?(r.preventDefault(),_e(".lightbox__close").focus()):bT.has(r.key)&&r.preventDefault())});var di=_e("#song"),ts=_e("#dock"),Nd=_e("#playBtn"),v_=S_("#bars i");_e("#songTitle").textContent=po.title;_e("#songArtist").textContent=po.artist;di.src=po.src;var TT=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,tr=null,La=null;function Na(r){ts.classList.toggle("is-playing",r),Nd.setAttribute("aria-pressed",String(r)),Nd.setAttribute("aria-label",r?"Pause song":"Play song")}function L_(){ts.classList.add("is-missing"),_e("#songArtist").textContent="Song file not added yet",Na(!1)}function wT(){if(tr||TT||!/^https?:$/.test(location.protocol))return;let r=window.AudioContext||window.webkitAudioContext;if(r)try{let t=new r,e=t.createMediaElementSource(di);tr=t.createAnalyser(),tr.fftSize=64,tr.smoothingTimeConstant=.8,e.connect(tr),tr.connect(t.destination),La=new Uint8Array(tr.frequencyBinCount),t.state==="suspended"&&t.resume(),ts.classList.add("has-analyser"),he.ticker.add(AT)}catch{tr=null}}function AT(){if(!tr)return;if(di.paused){er.beat=0,v_.forEach(t=>{t.style.transform="scaleY(0.18)"});return}tr.getByteFrequencyData(La);let r=(La[1]+La[2]+La[3])/765;er.beat=Math.pow(r,2.2),v_.forEach((t,e)=>{let n=La[2+e*5]/255;t.style.transform=`scaleY(${(.18+n*.82).toFixed(3)})`})}function D_(){wT();let r=di.play();r&&r.then?r.then(()=>{ts.classList.remove("is-missing"),_e("#songArtist").textContent=po.artist,Na(!0)},()=>{di.error||di.networkState===HTMLMediaElement.NETWORK_NO_SOURCE?L_():Na(!1)}):Na(!di.paused)}di.addEventListener("error",L_);di.addEventListener("pause",()=>Na(!1));di.addEventListener("playing",()=>Na(!0));Nd.addEventListener("click",()=>{di.paused?(ts.classList.contains("is-missing")&&(ts.classList.remove("is-missing"),di.load()),D_()):di.pause()});var ET=_e("#loaderCount"),CT=_e("#loaderRing"),Gu=_e("#begin");function RT(){let r=ia.map(c=>c.src),t=r.length+1,e=0,n={value:0},i=()=>{e+=1,he.to(n,{value:e/t,duration:.6,ease:"power2.out",overwrite:!0,onUpdate:()=>{ET.textContent=String(Math.round(n.value*100)).padStart(3,"0"),CT.style.strokeDashoffset=String(1-n.value)}})},s=r.map(c=>new Promise(u=>{let d=new Image;d.onload=d.onerror=()=>{i(),u()},d.src=c})),a=(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).catch(()=>{}).then(i),o=new Promise(c=>setTimeout(c,1400)),l=new Promise(c=>setTimeout(c,15e3));return Promise.race([Promise.all([...s,a,o]),l])}var y_=!1;function PT(){if(y_)return;y_=!0,Gu.disabled=!0,D_();let r=_e("#loader");he.timeline().to(".loader__center, .loader__row",{autoAlpha:0,y:-16,duration:.6,ease:"power2.in",stagger:.05}).to(r,{yPercent:-100,duration:1.2,ease:"expo.inOut"},.35).add(()=>{r.remove(),document.body.classList.remove("is-loading"),Wt.refresh()}).add(T_(),.9).to(er,{opacity:1,duration:2,ease:"power2.out",onComplete:Ud},.6).to("#hud",{autoAlpha:1,duration:1},1.6).to(ts,{y:0,autoAlpha:1,duration:1.2,ease:"expo.out"},1.8)}_e("#replay").addEventListener("click",()=>{let r=_e("#curtain");he.timeline().to(r,{autoAlpha:1,duration:.7,ease:"power2.inOut"}).add(()=>{window.scrollTo(0,0),Wt.update()}).add(T_(),"+=0.1").to(r,{autoAlpha:0,duration:.9,ease:"power2.inOut"},"<")});he.set(".hud__count",{autoAlpha:0});he.set(ts,{xPercent:-50,yPercent:0,y:120,x:0,autoAlpha:0});he.set("#ring, #replay, .outro__sign, .outro__hint",{autoAlpha:0});fi?he.set(".hero__inner, .cue, #finaleCopy",{autoAlpha:0}):(he.set(".hero__inner .mask > span, .finale__copy .mask > span",{yPercent:110}),b_.forEach(r=>he.set(r,{yPercent:118})),he.set(".cue",{autoAlpha:0}));function Od(){if(!Is)return;Is.resize();let r=_e("#hero"),t=_e(".hero__inner"),e=_e("#hud").offsetHeight+12,n=r.offsetTop+t.offsetTop-20,i=Math.max(n-e,120);Is.setHeart(e+i/2,i*.9)}vT();yT();E_();Od();window.addEventListener("resize",()=>{E_(),Od()});document.fonts&&document.fonts.ready&&document.fonts.ready.then(Od);RT().then(()=>{Gu.disabled=!1,he.fromTo(Gu,{scale:.92},{scale:1,duration:1,ease:"expo.out"})});Gu.addEventListener("click",PT);})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
