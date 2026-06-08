((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={
aK(d){var x=$.i8.q(0,d)
if(x==null){x=new A.cS(d,B.e([],y.C))
$.i8.l(0,d,x)}return x},
cT:function cT(d,e){this.a=d
this.b=e},
bC:function bC(d,e){this.c=d
this.a=e},
dN:function dN(d,e,f,g,h,i,j){var _=this
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
cS:function cS(d,e){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=e
_.r=!0},
eq:function eq(){},
aG(d,e){return new A.ek(e,d,null)},
jq(d,e){return new E.az(null,e,d,null)},
em:function em(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.x=g
_.z=h
_.a=i},
eg:function eg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.at=g
_.a=h},
ek:function ek(d,e,f){this.c=d
this.Q=e
this.a=f},
eu:function eu(d,e){this.a=d
this.b=e},
cx:function cx(d,e){this.a=d
this.b=e},
bO:function bO(d,e){this.b=d
this.a=e},
dZ:function dZ(d,e,f,g,h,i,j){var _=this
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
dc:function dc(d,e){this.c=d
this.a=e},
dD:function dD(d,e){this.c=d
this.a=e},
cr:function cr(d,e,f){this.c=d
this.d=e
this.a=f},
kC(){return new A.ar(null)},
ar:function ar(d){this.a=d},
dG:function dG(){this.d=!1
this.c=null},
f5:function f5(d){this.a=d},
f4:function f4(d){this.a=d},
kp(d){var x,w,v=y.w,u=B.M(v,v)
for(x=0;x<B.a8(d.length);++x){w=B.z(d.item(x))
u.l(0,B.G(w.name),B.G(w.value))}return u},
iM(d){var x=null
return new B.cC(d,x,x,x,x)}},D,E,F
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[7]
E=c[5]
F=c[6]
A.cT.prototype={
aq(){return"AttachTarget."+this.b}}
A.bC.prototype={
L(){var x=B.aQ(y.b),w=($.E+1)%16777215
$.E=w
return new A.dN(null,!1,!1,x,w,this,C.c)}}
A.dN.prototype={
Z(){var x=this.f
x.toString
y.h.a(x)
return F.i},
S(){var x,w,v=this.f
v.toString
y.h.a(v)
x=this.e
x.toString
x=new A.ah(B.e([],y.k),D.l,x)
x.ap("")
w=A.aK(x.x)
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
w=A.aK(x.x)
C.a.v(w.f,x)
w.a5()}}
A.ah.prototype={
sd9(d){var x=this,w=x.x
if(w===d)return
w=A.aK(w)
C.a.v(w.f,x)
w.a5()
x.x=d
w=A.aK(d)
C.a.k(w.f,x)
w.r=!0
A.aK(x.x).a5()},
sbw(d){y.f.a(d)
if(this.y===d)return
this.y=d
A.aK(this.x).a5()},
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
A.aK(t.x).a5()}finally{d.a1()}},
v(d,e){C.a.v(this.w,e.gB())
e.a=null
A.aK(this.x).a5()}}
A.cS.prototype={
gbE(){var x,w=this,v=w.b
if(v===$){x=B.z(B.o(b.G.document).querySelector(w.a.b))
x.toString
w.b!==$&&B.hj()
w.b=x
v=x}return v},
dc(d){var x,w,v,u,t,s,r,q,p,o,n,m=this
if(d||m.r){C.a.ah(m.f,new A.eq())
m.r=!1}x=m.c
if(x===$){w=A.kp(B.o(m.gbE().attributes))
m.c!==$&&B.hj()
m.c=w
x=w}for(v=m.f,u=v.length,t=0;t<v.length;v.length===u||(0,B.ak)(v),++t){s=v[t].y
if(s!=null)x.E(0,s)}r=B.hu(y.w)
for(q=0;v=m.gbE(),q<B.a8(B.o(v.attributes).length);++q)r.k(0,B.G(B.z(B.o(v.attributes).item(q)).name))
if(x.a!==0)for(u=new B.ao(x,B.h(x).h("ao<1,2>")).gt(0);u.j();){p=u.d
o=p.a
B.cU(v,o,p.b)
r.v(0,o)}if(r.a!==0)for(u=B.iG(r,r.r,r.$ti.c),o=u.$ti.c;u.j();){n=u.d
if(n==null)n=o.a(n)
v.removeAttribute(n)}},
a5(){return this.dc(!1)}}
A.em.prototype={
C(d){var x,w=this,v=null,u=y.w
u=B.M(u,u)
u.E(0,w.x)
u.l(0,"viewBox",w.c)
x=w.d
x=x==null?v:B.eW(x.b)+x.a
if(x!=null)u.l(0,"width",x)
x=w.e
x=x==null?v:B.eW(x.b)+x.a
if(x!=null)u.l(0,"height",x)
return new B.L("svg",v,v,v,u,v,w.z,v)}}
A.eg.prototype={
C(d){var x=this,w=null,v=y.w
v=B.M(v,v)
v.l(0,"cx",x.c)
v.l(0,"cy",x.d)
v.l(0,"r",x.e)
return new B.L("circle",w,w,w,v,w,x.at,w)}}
A.ek.prototype={
C(d){var x=null,w=y.w
w=B.M(w,w)
w.l(0,"d",this.c)
return new B.L("path",x,x,x,w,x,this.Q,x)}}
A.eu.prototype={
aq(){return"Display."+this.b}}
A.cx.prototype={}
A.bO.prototype={
L(){var x=B.aQ(y.b),w=($.E+1)%16777215
$.E=w
return new A.dZ(null,!1,!1,x,w,this,C.c)}}
A.dZ.prototype={
Z(){var x=this.f
x.toString
return y.B.a(x).b},
S(){var x=this.CW.d$
x.toString
return B.k1(x,null)},
X(d){y.u.a(d)}}
A.dc.prototype={
C(d){var x=y.F
return new A.cr(this.c,B.e([A.aG(B.e([],x),"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z")],x),null)}}
A.dD.prototype={
C(d){var x=y.F
return new A.cr(this.c,B.e([new A.eg("12","12","4",B.e([],x),null),A.aG(B.e([],x),"M12 4h.01"),A.aG(B.e([],x),"M20 12h.01"),A.aG(B.e([],x),"M12 20h.01"),A.aG(B.e([],x),"M4 12h.01"),A.aG(B.e([],x),"M17.657 6.343h.01"),A.aG(B.e([],x),"M17.657 17.657h.01"),A.aG(B.e([],x),"M6.343 17.657h.01"),A.aG(B.e([],x),"M6.343 6.343h.01")],x),null)}}
A.cr.prototype={
C(d){var x=this.c,w=y.w
return new A.em("0 0 24 24",new A.cx("px",x),new A.cx("px",x),B.bY(["fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],w,w),this.d,null)}}
A.ar.prototype={
bB(){return new A.dG()}}
A.dG.prototype={
b2(){this.c1()
this.d=B.b3(B.z(B.o(b.G.document).documentElement).getAttribute("data-theme"))==="dark"},
C(d){var x,w=this,v=null,u=y.F,t=B.e([],u),s=w.d?"dark":"light",r=y.w
t.push(new A.bC(B.bY(["data-theme",s],r,r),v))
r=B.bY(["aria-label","Theme Toggle"],r,r)
s=A.iM(w.d?D.q:v)
s=A.jq(B.e([new A.dc(20,v)],u),s)
x=A.iM(w.d?v:D.q)
t.push(E.jf(B.e([s,A.jq(B.e([new A.dD(20,v)],u),x)],u),r,"theme-toggle",v,new A.f5(w),v))
return new A.bO(t,v)}}
var z=a.updateTypes(["a(ah,ah)"])
A.eq.prototype={
$2(d,e){var x=y.n
x.a(d)
x.a(e)
return d.z-e.z},
$S:z+0}
A.f5.prototype={
$0(){var x,w=this.a
w.ba(new A.f4(w))
x=B.o(B.o(b.G.window).localStorage)
w=w.d?"dark":"light"
x.setItem("jaspr:theme",w)},
$S:0}
A.f4.prototype={
$0(){var x=this.a
x.d=!x.d},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.dX,[A.cT,A.eu])
x(B.j,[A.bC,A.bO])
x(B.aV,[A.dN,A.dZ])
w(A.ah,B.bL)
w(A.cS,B.k)
w(A.eq,B.bH)
x(E.H,[A.em,A.eg,A.ek,A.dc,A.dD,A.cr])
w(A.cx,B.b2)
w(A.ar,E.aj)
w(A.dG,E.a5)
x(B.be,[A.f5,A.f4])})()
B.fB(b.typeUniverse,JSON.parse('{"ah":{"a2":[],"hz":[],"aW":[]},"bC":{"j":[]},"dN":{"Q":[],"d":[],"K":[]},"em":{"H":[],"j":[]},"eg":{"H":[],"j":[]},"ek":{"H":[],"j":[]},"cx":{"f8":[]},"bO":{"j":[]},"dZ":{"Q":[],"d":[],"K":[]},"dc":{"H":[],"j":[]},"dD":{"H":[],"j":[]},"cr":{"H":[],"j":[]},"ar":{"aj":[],"j":[]},"dG":{"a5":["ar"],"a5.T":"ar"}}'))
var y=(function rtii(){var x=B.B
return{h:x("bC"),n:x("ah"),b:x("d"),B:x("bO"),C:x("q<ah>"),F:x("q<j>"),k:x("q<m>"),u:x("hy"),w:x("b"),f:x("y<b,b>?")}})();(function constants(){D.l=new A.cT(0,"html")
D.q=new A.eu(0,"none")})();(function staticFields(){$.i8=B.M(B.B("cT"),B.B("cS"))})()};
(a=>{a["YJzJqgUPIDIRll9UarK8d9ZpL+c="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
