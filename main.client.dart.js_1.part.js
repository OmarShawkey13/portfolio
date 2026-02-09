((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
aJ(d){var x=$.i4.q(0,d)
if(x==null){x=new A.cR(d,B.e([],y.C))
$.i4.l(0,d,x)}return x},
cS:function cS(d,e){this.a=d
this.b=e},
bB:function bB(d,e){this.c=d
this.a=e},
dK:function dK(d,e,f,g,h,i,j){var _=this
_.d$=d
_.e$=e
_.f$=f
_.cy=null
_.db=g
_.c=_.b=_.a=null
_.d=h
_.e=null
_.f=i
_.w=_.r=null
_.x=j
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
ah:function ah(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.z=f
_.d=$
_.c=_.b=_.a=null},
cR:function cR(d,e){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=e
_.r=!0},
eo:function eo(){},
aF(d,e){return new A.eh(e,d,null)},
jl(d,e){return new E.b9(null,e,d,null)},
ej:function ej(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.z=h
_.a=i},
ed:function ed(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.a=h},
eh:function eh(d,e,f){this.c=d
this.Q=e
this.a=f},
er:function er(d,e){this.a=d
this.b=e},
cw:function cw(d,e){this.a=d
this.b=e},
bN:function bN(d,e){this.b=d
this.a=e},
dW:function dW(d,e,f,g,h,i,j){var _=this
_.d$=d
_.e$=e
_.f$=f
_.cy=null
_.db=g
_.c=_.b=_.a=null
_.d=h
_.e=null
_.f=i
_.w=_.r=null
_.x=j
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
db:function db(d,e){this.c=d
this.a=e},
dA:function dA(d,e){this.c=d
this.a=e},
cq:function cq(d,e,f){this.c=d
this.d=e
this.a=f},
ks(){return new A.ar(null)},
ar:function ar(d){this.a=d},
dD:function dD(){this.d=!1
this.c=null},
f1:function f1(d){this.a=d},
f0:function f0(d){this.a=d},
kh(d){var x,w,v=y.w,u=B.M(v,v)
for(x=0;x<B.a8(d.length);++x){w=B.z(d.item(x))
u.l(0,B.G(w.name),B.G(w.value))}return u},
iI(d){var x=null
return new B.cB(d,x,x,x,x)}},D,E,F
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[7]
E=c[5]
F=c[6]
A.cS.prototype={
aq(){return"AttachTarget."+this.b}}
A.bB.prototype={
L(){var x=B.aP(y.b),w=($.E+1)%16777215
$.E=w
return new A.dK(null,!1,!1,x,w,this,C.c)}}
A.dK.prototype={
Z(){var x=this.f
x.toString
y.h.a(x)
return F.t},
S(){var x,w,v=this.f
v.toString
y.h.a(v)
x=this.e
x.toString
x=new A.ah(B.e([],y.k),D.l,x)
x.ap("")
w=A.aJ(x.x)
C.a.k(w.f,x)
w.r=!0
x.sbw(v.c)
return x},
X(d){var x
y.n.a(d)
x=this.f
x.toString
y.h.a(x)
d.sd9(D.l)
d.sbw(x.c)},
U(){var x,w
this.c_()
x=this.d$
x.toString
y.n.a(x)
w=A.aJ(x.x)
C.a.v(w.f,x)
w.a5()}}
A.ah.prototype={
sd9(d){var x=this,w=x.x
if(w===d)return
w=A.aJ(w)
C.a.v(w.f,x)
w.a5()
x.x=d
w=A.aJ(d)
C.a.k(w.f,x)
w.r=!0
A.aJ(x.x).a5()},
sbw(d){y.f.a(d)
if(this.y===d)return
this.y=d
A.aJ(this.x).a5()},
T(d,e){var x,w,v,u,t=this
d.a=t
try{x=d.gB()
w=e==null?null:e.gB()
if(w==null&&C.a.R(t.w,x))return
if(w!=null&&!C.a.R(t.w,w))w=null
v=t.w
C.a.v(v,x)
u=w!=null?C.a.b1(v,w)+1:0
C.a.cL(v,u,x)
A.aJ(t.x).a5()}finally{d.a1()}},
v(d,e){C.a.v(this.w,e.gB())
e.a=null
A.aJ(this.x).a5()}}
A.cR.prototype={
gbE(){var x,w=this,v=w.b
if(v===$){x=B.z(B.o(b.G.document).querySelector(w.a.b))
x.toString
w.b!==$&&B.hf()
w.b=x
v=x}return v},
dc(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(d||m.r){C.a.ah(m.f,new A.eo())
m.r=!1}x=m.c
if(x===$){w=A.kh(B.o(m.gbE().attributes))
m.c!==$&&B.hf()
m.c=w
x=w}for(v=m.f,u=v.length,t=0;t<v.length;v.length===u||(0,B.ak)(v),++t){s=v[t].y
if(s!=null)x.E(0,s)}r=B.hq(y.w)
for(q=0;v=m.gbE(),q<B.a8(B.o(v.attributes).length);++q)r.k(0,B.G(B.z(B.o(v.attributes).item(q)).name))
if(x.a!==0)for(u=new B.ao(x,B.h(x).h("ao<1,2>")).gt(0);u.j();){p=u.d
o=p.a
B.cT(v,o,p.b)
r.v(0,o)}if(r.a!==0)for(u=B.iC(r,r.r,r.$ti.c),o=u.$ti.c;u.j();){n=u.d
if(n==null)n=o.a(n)
v.removeAttribute(n)}},
a5(){return this.dc(!1)}}
A.ej.prototype={
C(d){var x,w=this,v=null,u=y.w
u=B.M(u,u)
u.E(0,w.x)
u.l(0,"viewBox",w.c)
x=w.d
x=x==null?v:B.eS(x.b)+x.a
if(x!=null)u.l(0,"width",x)
x=w.e
x=x==null?v:B.eS(x.b)+x.a
if(x!=null)u.l(0,"height",x)
return new B.L("svg",v,v,v,u,v,w.z,v)}}
A.ed.prototype={
C(d){var x=this,w=null,v=y.w
v=B.M(v,v)
v.l(0,"cx",x.c)
v.l(0,"cy",x.d)
v.l(0,"r",x.e)
return new B.L("circle",w,w,w,v,w,x.at,w)}}
A.eh.prototype={
C(d){var x=null,w=y.w
w=B.M(w,w)
w.l(0,"d",this.c)
return new B.L("path",x,x,x,w,x,this.Q,x)}}
A.er.prototype={
aq(){return"Display."+this.b}}
A.cw.prototype={}
A.bN.prototype={
L(){var x=B.aP(y.b),w=($.E+1)%16777215
$.E=w
return new A.dW(null,!1,!1,x,w,this,C.c)}}
A.dW.prototype={
Z(){var x=this.f
x.toString
return y.B.a(x).b},
S(){var x=this.CW.d$
x.toString
return B.jU(x,null)},
X(d){y.u.a(d)}}
A.db.prototype={
C(d){var x=y.F
return new A.cq(this.c,B.e([A.aF(B.e([],x),"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z")],x),null)}}
A.dA.prototype={
C(d){var x=y.F
return new A.cq(this.c,B.e([new A.ed("12","12","4",B.e([],x),null),A.aF(B.e([],x),"M12 4h.01"),A.aF(B.e([],x),"M20 12h.01"),A.aF(B.e([],x),"M12 20h.01"),A.aF(B.e([],x),"M4 12h.01"),A.aF(B.e([],x),"M17.657 6.343h.01"),A.aF(B.e([],x),"M17.657 17.657h.01"),A.aF(B.e([],x),"M6.343 17.657h.01"),A.aF(B.e([],x),"M6.343 6.343h.01")],x),null)}}
A.cq.prototype={
C(d){var x=this.c,w=y.w
return new A.ej("0 0 24 24",new A.cw("px",x),new A.cw("px",x),B.bX(["fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],w,w),this.d,null)}}
A.ar.prototype={
bB(){return new A.dD()}}
A.dD.prototype={
b2(){this.c1()
this.d=B.b2(B.z(B.o(b.G.document).documentElement).getAttribute("data-theme"))==="dark"},
C(d){var x,w=this,v=null,u=y.F,t=B.e([],u),s=w.d?"dark":"light",r=y.w
t.push(new A.bB(B.bX(["data-theme",s],r,r),v))
r=B.bX(["aria-label","Theme Toggle"],r,r)
s=A.iI(w.d?D.q:v)
s=A.jl(B.e([new A.db(20,v)],u),s)
x=A.iI(w.d?v:D.q)
t.push(E.jb(B.e([s,A.jl(B.e([new A.dA(20,v)],u),x)],u),r,"theme-toggle",v,new A.f1(w),v))
return new A.bN(t,v)}}
var z=a.updateTypes(["a(ah,ah)"])
A.eo.prototype={
$2(d,e){var x=y.n
x.a(d)
x.a(e)
return d.z-e.z},
$S:z+0}
A.f1.prototype={
$0(){var x,w=this.a
w.ba(new A.f0(w))
x=B.o(B.o(b.G.window).localStorage)
w=w.d?"dark":"light"
x.setItem("jaspr:theme",w)},
$S:0}
A.f0.prototype={
$0(){var x=this.a
x.d=!x.d},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.dU,[A.cS,A.er])
x(B.j,[A.bB,A.bN])
x(B.aU,[A.dK,A.dW])
w(A.ah,B.bK)
w(A.cR,B.k)
w(A.eo,B.bG)
x(E.H,[A.ej,A.ed,A.eh,A.db,A.dA,A.cq])
w(A.cw,B.b1)
w(A.ar,E.aj)
w(A.dD,E.a5)
x(B.bd,[A.f1,A.f0])})()
B.fx(b.typeUniverse,JSON.parse('{"ah":{"a2":[],"hv":[],"aV":[]},"bB":{"j":[]},"dK":{"Q":[],"d":[],"K":[]},"ej":{"H":[],"j":[]},"ed":{"H":[],"j":[]},"eh":{"H":[],"j":[]},"cw":{"f4":[]},"bN":{"j":[]},"dW":{"Q":[],"d":[],"K":[]},"db":{"H":[],"j":[]},"dA":{"H":[],"j":[]},"cq":{"H":[],"j":[]},"ar":{"aj":[],"j":[]},"dD":{"a5":["ar"],"a5.T":"ar"}}'))
var y=(function rtii(){var x=B.B
return{h:x("bB"),n:x("ah"),b:x("d"),B:x("bN"),C:x("q<ah>"),F:x("q<j>"),k:x("q<m>"),u:x("hu"),w:x("b"),f:x("y<b,b>?")}})();(function constants(){D.l=new A.cS(0,"html")
D.q=new A.er(0,"none")})();(function staticFields(){$.i4=B.M(B.B("cS"),B.B("cR"))})()};
(a=>{a["14iYaoWxRXeThVbW3mJigCjcW+w="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
