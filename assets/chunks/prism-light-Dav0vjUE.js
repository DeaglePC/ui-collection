import{r as ee,j as he}from"./client-CsvIHAk3.js";const U=32,$=Math.PI/180,Ge=-58*$,He=-13*$,ft=Math.sqrt(3)/2,xt=.42,ae=1.5,yt=2.7,te=Math.tan(15*$),pe=-17*$,me=10*$,oe=[.12,.6,0],st=[1,.8,.64,.5],T=(n,s,g)=>Math.min(g,Math.max(s,n)),dt=(n,s)=>[n[0]+s[0],n[1]+s[1]],xe=(n,s)=>[n[0]-s[0],n[1]-s[1]],De=(n,s)=>[n[0]*s,n[1]*s],ut=(n,s)=>n[0]*s[0]+n[1]*s[1],Ve=n=>{const s=Math.hypot(n[0],n[1])||1;return[n[0]/s,n[1]/s]},ye=[-.5,0],ve=[.5,0],be=[0,ft],v=dt(ye,De(xe(be,ye),.56)),pt=(n,s,g)=>{const h=xe(s,n);let p=Ve([h[1],-h[0]]);return ut(p,xe(De(dt(n,s),.5),g))<0&&(p=De(p,-1)),p},mt=[0,ft/3],je=pt(ye,be,mt),Pe=pt(be,ve,mt);let Oe=0,Ue=0;function ct(n,s,g,h,p){const L=-(g*n+h*s),B=1-p*p*(1-L*L);if(B<0)return!1;const q=p*L-Math.sqrt(B);return Oe=n*p+g*q,Ue=s*p+h*q,!0}function it(n,s,g,h,p,L,B,q){const V=B-p,S=q-L,R=g*S-h*V;if(Math.abs(R)<1e-9)return-1;const F=p-n,l=L-s,A=(F*S-l*V)/R,m=(F*h-l*g)/R;return A>1e-4&&m>=-1e-4&&m<=1+1e-4?A:-1}const lt=n=>.04+.96*Math.pow(1-T(n,0,1),5);function bt(n){let s=n.trim().replace("#","");s.length===3&&(s=s.split("").map(h=>h+h).join(""));const g=parseInt(s.slice(0,6),16);return s.length<6||Number.isNaN(g)?[188,217,255]:[g>>16&255,g>>8&255,g&255]}function gt(n,s,g,h,p){const L=Ve(xe(v,n)),B=-ut(L,je);for(let l=0;l<U;l++)p[l*4+3]=-1;if(B<=.03)return{tin:0,xc:1};const q=Math.max(.004,.15*s),V=1-lt(B),S=[],R=[];let F=ae-.3;for(let l=0;l<U;l++){const A=l/(U-1),m=1.5+q*(1-A);if(!ct(L[0],L[1],je[0],je[1],1/m))continue;const x=Oe,e=Ue,I=it(v[0],v[1],x,e,be[0],be[1],ve[0],ve[1]),X=it(v[0],v[1],x,e,ve[0],ve[1],ye[0],ye[1]);let Q=-1,G=!1;if(I>0&&(X<0||I<X)?(Q=I,G=!0):X>0&&(Q=X),Q<0)continue;const H=v[0]+x*Q,y=v[1]+e*Q,b=l*4;if(h[b]=H,h[b+1]=y,h[b+2]=x,h[b+3]=e,p[b]=0,p[b+1]=0,p[b+2]=.01,p[b+3]=0,!G||!ct(x,e,-Pe[0],-Pe[1],m))continue;const E=Oe,C=Ue;if(E<.05)continue;const j=V*(1-lt(Pe[0]*x+Pe[1]*e)),P=(ae-H)/E,k=y+C*P;let Z=P,M=1;k<0&&C<0&&(Z=-y/C,M=2),h[b+2]=E,h[b+3]=C,p[b]=Z,p[b+1]=g*j,p[b+3]=M,S.push(Math.atan2(C,E)),R.push(l),l===Math.floor(U/2)&&(F=C<-.02?T(H+E*(y/-C),.7,ae-.12):ae-.25)}for(let l=0;l<R.length;l++){const A=S[Math.max(0,l-1)],m=S[Math.min(R.length-1,l+1)],x=Math.max(1,Math.min(R.length-1,l+1)-Math.max(0,l-1));p[R[l]*4+2]=Math.max(7e-4,Math.abs(m-A)/x)}return{tin:V,xc:F}}const zt=`#version 300 es
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,Mt=`#version 300 es
precision highp float;
precision highp int;
out vec4 fragColor;

const int N = ${U};
const float HZ = ${xt.toFixed(4)};
const float XR = ${ae.toFixed(4)};
const float ZB = ${yt.toFixed(4)};
const float BW = 0.034;
const vec2 P1 = vec2(${v[0].toFixed(5)}, ${v[1].toFixed(5)});
const vec3 PN[5] = vec3[5](vec3(-0.8660254, 0.5, 0.0), vec3(0.8660254, 0.5, 0.0), vec3(0.0, -1.0, 0.0), vec3(0.0, 0.0, 1.0), vec3(0.0, 0.0, -1.0));
const float PD[5] = float[5](0.4330127, 0.4330127, 0.0, HZ, HZ);

uniform vec2 uRes;
uniform float uTime;
uniform vec3 uCam;
uniform vec3 uCF;
uniform vec3 uCR;
uniform vec3 uCU;
uniform vec2 uLens;    // tan(fov/2), aspecto
uniform vec3 uOrb;     // posición del orbe (z = 0)
uniform vec4 uCfg;     // intensidad, resplandor, sigma del haz (mundo), dispersión
uniform vec3 uTint;    // tinte del vidrio (lineal)
uniform vec4 uBeam;    // dirección del haz (xy), largo hasta el prisma, transmisión de entrada
uniform vec4 uMisc;    // x: centro del cáustico, y: posición del ángulo (0 a 1), z: tamaño angular de un píxel (rad)
uniform vec4 uBox;     // caja (xmin, ymin, xmax, ymax) en z = 0 que contiene todos los haces
uniform vec4 uRA[N];
uniform vec4 uRB[N];

float gVL = 0.0;       // luz de haz acumulada: sirve de máscara del polvo

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float lum(vec3 c) { return dot(c, vec3(0.3, 0.55, 0.15)); }

// Color del espectro: t = 0 violeta (el que más se dobla), t = 1 rojo.
vec3 spec(float t) {
  float h = 0.77 * (1.0 - t);
  vec3 k = clamp(abs(fract(h + vec3(0.0, 2.0 / 3.0, 1.0 / 3.0)) * 6.0 - 3.0) - 1.0, 0.0, 1.0);
  k = k * k * (3.0 - 2.0 * k);
  return k * vec3(1.0, 1.0, 1.0) * (0.92 + 0.35 * (1.0 - t) * (1.0 - t));
}

// Entorno de estudio: paneles de luz verticales y una luz de techo, para reflejos en bisel y vidrio.
vec3 studio(vec3 d) {
  vec3 c = mix(vec3(0.004, 0.006, 0.012), vec3(0.03, 0.045, 0.085), smoothstep(-0.3, 0.9, d.y));
  float az = atan(d.x, -d.z);
  float band = smoothstep(-0.2, 0.15, d.y) * smoothstep(1.0, 0.5, d.y);
  float s = smoothstep(0.11, 0.0, abs(az + 0.85)) * 0.9 + smoothstep(0.05, 0.0, abs(az - 0.35)) * 1.3 + smoothstep(0.16, 0.0, abs(az - 1.3)) * 0.55 + smoothstep(0.08, 0.0, abs(az + 2.2)) * 0.5;
  c += vec3(0.85, 0.92, 1.0) * s * band;
  c += vec3(0.9, 0.95, 1.0) * smoothstep(0.8, 0.96, d.y) * 0.7;
  // Panel grande detrás de la cámara: da cuerpo a las tapas de vidrio.
  c += vec3(0.7, 0.8, 1.0) * smoothstep(0.7, 0.0, abs(abs(az) - 2.8)) * 0.16 * smoothstep(-0.45, 0.05, d.y) * smoothstep(0.9, 0.2, d.y);
  return c;
}

// El prisma: sólido convexo de 5 planos (dos caras inclinadas, base y dos tapas).
bool prism(vec3 ro, vec3 rd, out float t0, out float t1, out vec3 n0, out vec3 n1) {
  t0 = -1e9; t1 = 1e9; n0 = PN[0]; n1 = PN[0];
  for (int i = 0; i < 5; i++) {
    float nd = dot(PN[i], rd);
    float no = dot(PN[i], ro) - PD[i];
    if (abs(nd) < 1e-7) { if (no > 0.0) return false; continue; }
    float t = -no / nd;
    if (nd < 0.0) { if (t > t0) { t0 = t; n0 = PN[i]; } }
    else { if (t < t1) { t1 = t; n1 = PN[i]; } }
  }
  return t1 > max(t0, 0.0);
}

// Bisel: junto a cada arista la normal se inclina hacia la cara vecina; rim = hilo especular de la arista.
vec3 bevel(vec3 p, vec3 n, vec3 dir, float tt, out float rim) {
  float md = 1e3;
  vec3 nn = n;
  for (int i = 0; i < 5; i++) {
    float c = dot(PN[i], n);
    if (abs(c) > 0.98) continue;
    float e = (PD[i] - dot(PN[i], p)) / sqrt(1.0 - c * c);
    if (e < md) { md = e; nn = PN[i]; }
  }
  float k = 1.0 - smoothstep(0.0, BW, max(md, 0.0));
  // El hilo mide ~1.5 px en pantalla sin importar el ángulo de la cara: así no se ve punteado en diagonal.
  float pw = tt * uMisc.z / max(abs(dot(n, dir)), 0.12);
  rim = 1.0 - smoothstep(0.0, max(BW * 0.1, 1.6 * pw), max(md, 0.0));
  return normalize(n + nn * (k * k * 1.2));
}

// Perfil gaussiano de un cilindro luminoso (o cinta) visto desde un rayo que cruza el plano z = 0:
// dp = distancia en el plano al eje, c = pendiente transversal del rayo, sp/sz = grosor en el plano y en z.
float tube(float dp, float c, float sp, float sz) {
  float se2 = sp * sp + c * c * sz * sz;
  return exp(-0.5 * dp * dp / se2) * sp * inversesqrt(se2);
}

// Todos los haces (blanco entrante, abanico interno y espectro saliente) evaluados en el punto (p) del plano z = 0.
vec3 beams(vec2 p, vec2 m) {
  float I = uCfg.x, G = uCfg.y, s0 = uCfg.z;
  vec3 acc = vec3(0.0);
  // Haz blanco: núcleo + dos lóbulos de dispersión en el aire.
  {
    vec2 b = uBeam.xy, q = p - uOrb.xy;
    float s = dot(q, b), dp = q.x * b.y - q.y * b.x, c = m.x * b.y - m.y * b.x;
    float w = smoothstep(0.03, 0.14, s) * (1.0 - smoothstep(uBeam.z - 0.02, uBeam.z + 0.01, s));
    float k = tube(dp, c, s0, s0) * 2.4 + tube(dp, c, s0 * 3.2, s0 * 3.2) * 0.42 + tube(dp, c, s0 * 9.0, s0 * 9.0) * 0.1 * G;
    acc += vec3(0.92, 0.96, 1.0) * k * w * I;
    // Destello donde la luz toca el vidrio.
    float dP = length(p - P1);
    acc += vec3(0.9, 0.95, 1.0) * I * (0.9 * exp(-0.5 * dP * dP / 0.0007) + 0.14 * G * exp(-0.5 * dP * dP / 0.012)) * step(0.5, uBeam.w);
  }
  float aIn = 0.075 * I * uBeam.w;
  bool inPrism = p.x < 0.36 && p.x > -0.5 && p.y < 0.92;
  for (int i = 0; i < N; i++) {
    vec4 A = uRA[i];
    vec4 B = uRB[i];
    if (B.w < -0.5) continue;
    float t = float(i) / float(N - 1);
    vec3 col = spec(t);
    // Dentro del vidrio: el blanco ya empieza a abrirse.
    if (inPrism) {
      vec2 e = A.xy - P1;
      float L = length(e);
      vec2 bi = e / L, qi = p - P1;
      float si = dot(qi, bi), di = qi.x * bi.y - qi.y * bi.x, ci = m.x * bi.y - m.y * bi.x;
      float w = smoothstep(0.0, 0.03, si) * (1.0 - smoothstep(L - 0.012, L, si));
      acc += col * aIn * w * (tube(di, ci, s0 * 1.3, s0 * 1.3) + 0.2 * G * tube(di, ci, s0 * 4.0, s0 * 4.0));
    }
    // Fuera del prisma: un rayo por color hasta la pared o el piso; se ensancha y se funde con sus vecinos.
    vec2 bq = p - A.xy;
    if (B.w > 0.5 && dot(bq, A.zw) > -0.05 && dot(bq, A.zw) < B.x + 0.05) {
      vec2 b = A.zw, q = bq;
      float s = dot(q, b), dp = q.x * b.y - q.y * b.x, c = m.x * b.y - m.y * b.x;
      float ss = max(s, 0.0);
      float sp = s0 * 1.1 + (0.55 * B.z + 0.004) * ss;
      float sz = sp * 1.5 + 0.05 * ss;
      float w = smoothstep(-0.004, 0.05, s) * (1.0 - smoothstep(B.x - 0.3, B.x - 0.005, s));
      float k = tube(dp, c, sp, sz) + tube(dp, c, sp * 5.0, sz * 3.0) * 0.16 * G;
      acc += col * B.y * w * k * 0.62 / (1.0 + 0.4 * ss);
    }
  }
  return acc;
}

// Luz en el aire a lo largo de un tramo recto del rayo: orbe (núcleo y halo) y haces donde el rayo cruza el plano z = 0.
vec3 airLight(vec3 ro, vec3 rd, float tmax) {
  vec3 acc = vec3(0.0);
  float I = uCfg.x, G = uCfg.y;
  vec3 oc = uOrb - ro;
  float tc = dot(oc, rd);
  if (tc > 0.0 && tc < tmax) {
    float dm2 = max(dot(oc, oc) - tc * tc, 0.0);
    float dm = sqrt(dm2);
    float core = 1.0 - smoothstep(0.036, 0.05, dm);
    acc += vec3(1.0, 0.98, 0.95) * core * 9.0 * I;
    acc += vec3(0.95, 0.97, 1.0) * I * (1.6 * G * exp(-0.5 * dm2 / 0.0030) + 0.38 * G * exp(-0.5 * dm2 / 0.045) + 0.08 * G * exp(-0.5 * dm2 / 0.45));
  }
  if (abs(rd.z) > 1e-4) {
    float tz = -ro.z / rd.z;
    if (tz > 0.0 && tz < tmax) {
      vec3 pz = ro + rd * tz;
      if (pz.x > uBox.x && pz.x < uBox.z && pz.y > uBox.y && pz.y < uBox.w) acc += beams(pz.xy, rd.xy / rd.z);
    }
  }
  gVL += lum(acc);
  return acc;
}

// Manchas del espectro sobre la pared derecha (impacto de cada rayo, con su baño de color).
vec3 spotsWall(vec3 p) {
  float G = uCfg.y, s0 = uCfg.z;
  vec3 acc = vec3(0.0);
  if (abs(p.z) > 2.8 || p.y > 1.8) return acc;
  for (int i = 0; i < N; i++) {
    vec4 A = uRA[i];
    vec4 B = uRB[i];
    if (B.w < 0.5 || B.w > 1.5) continue;
    float t = float(i) / float(N - 1);
    float sp = s0 * 1.1 + (0.55 * B.z + 0.004) * B.x;
    float sy = sp / max(abs(A.z), 0.3);
    float sz = 0.07 + 0.14 * B.x;
    float ovl = max(1.0, 2.5066 * sy / (B.z * B.x * 1.3 + 1e-4));
    float dy = p.y - (A.y + A.w * B.x);
    float ey = dy * dy / (sy * sy);
    float g = exp(-0.5 * (ey + p.z * p.z / (sz * sz * 0.1)));
    float gw = exp(-0.5 * (ey + p.z * p.z / (sz * sz)));
    float h = exp(-0.5 * (ey / 18.0 + p.z * p.z / (sz * sz * 5.0)));
    acc += spec(t) * B.y * (1.2 * g + 0.75 * gw + 0.2 * G * h) / ovl;
  }
  return acc * 0.9;
}
// Lo mismo sobre el piso: la banda de color queda tendida a lo largo de x.
vec3 spotsFloor(vec3 p) {
  float G = uCfg.y, s0 = uCfg.z;
  vec3 acc = vec3(0.0);
  if (abs(p.z) > 2.2 || p.x < 0.1 || p.x > XR + 0.1) return acc;
  for (int i = 0; i < N; i++) {
    vec4 A = uRA[i];
    vec4 B = uRB[i];
    if (B.w < 1.5) continue;
    float t = float(i) / float(N - 1);
    float sp = s0 * 1.1 + (0.55 * B.z + 0.004) * B.x;
    float sa = sp / max(abs(A.w), 0.14);
    float sz = 0.06 + 0.12 * B.x;
    float ovl = max(1.0, 2.5066 * sa / (B.z * B.x / max(abs(A.w), 0.14) * 1.3 + 1e-4));
    float dx = p.x - (A.x + A.z * B.x);
    float ex = dx * dx / (sa * sa);
    float g = exp(-0.5 * (ex + p.z * p.z / (sz * sz * 0.1)));
    float gw = exp(-0.5 * (ex + p.z * p.z / (sz * sz)));
    float h = exp(-0.5 * (ex / 18.0 + p.z * p.z / (sz * sz * 5.0)));
    acc += spec(t) * B.y * (1.2 * g + 0.75 * gw + 0.2 * G * h) / ovl;
  }
  return acc * 0.9;
}

// Sombra del prisma sobre el piso desde el orbe: la longitud de cuerda que la luz recorre dentro del vidrio
// da una penumbra continua (sin ruido). El vidrio deja pasar algo de luz, teñida.
vec3 shadowAt(vec3 p) {
  vec3 Lv = uOrb - p;
  float dist = length(Lv);
  vec3 rd = Lv / dist, ro = p + vec3(0.0, 1e-3, 0.0);
  float t0 = -1e9, t1 = 1e9;
  for (int i = 0; i < 5; i++) {
    float nd = dot(PN[i], rd);
    float no = dot(PN[i], ro) - PD[i];
    if (abs(nd) < 1e-7) { if (no > 0.0) return vec3(1.0); continue; }
    float t = -no / nd;
    if (nd < 0.0) t0 = max(t0, t); else t1 = min(t1, t);
  }
  float chord = max(min(t1, dist) - max(t0, 0.0), 0.0);
  return mix(vec3(1.0), vec3(0.12) * mix(vec3(0.3), uTint, 0.7), smoothstep(0.0, 0.14, chord));
}

vec3 floorCol(vec3 p) {
  float I = uCfg.x;
  vec3 Lv = uOrb - p;
  float d2 = dot(Lv, Lv);
  float nl = max(Lv.y * inversesqrt(d2), 0.0);
  vec3 sh = shadowAt(p);
  vec2 bd = abs(p.xz) - vec2(0.5, HZ);
  float sd = length(max(bd, 0.0));
  float ao = 1.0 - 0.8 * exp(-sd * 15.0);
  vec3 alb = vec3(0.05, 0.06, 0.088);
  vec3 c = alb * (0.3 + 2.4 * I * nl / (1.0 + 2.2 * d2) * sh) * ao;
  c += spotsFloor(p) * (0.5 + 0.5 * ao);
  // Cáustico: la luz que atraviesa el prisma se concentra en un charco azulado detrás.
  vec2 cq = vec2((p.x - uMisc.x) / 0.42, p.z / 0.24);
  c += vec3(0.4, 0.58, 1.0) * 0.12 * I * exp(-0.5 * dot(cq, cq)) * step(0.0, uBeam.w);
  return c;
}
vec3 wallBack(vec3 p) {
  float I = uCfg.x;
  float x = p.x, y = p.y;
  vec3 c = mix(vec3(0.0075, 0.0105, 0.02), vec3(0.003, 0.0045, 0.009), smoothstep(0.0, 2.8, y));
  c += vec3(0.06, 0.085, 0.15) * 0.2 * exp(-0.5 * (pow((x - 0.3) / 1.25, 2.0) + pow((y - 0.7) / 0.9, 2.0)));
  float pn = smoothstep(0.16, 0.0, abs(x + 1.45)) * 0.9 + smoothstep(0.07, 0.0, abs(x - 0.4)) * 1.0 + smoothstep(0.12, 0.0, abs(x - 1.0)) * 0.55;
  c += vec3(0.5, 0.62, 0.95) * pn * 0.04 * smoothstep(-0.05, 0.4, y) * (1.0 - smoothstep(1.7, 2.5, y));
  vec3 L = uOrb - p;
  float d2 = dot(L, L);
  c += vec3(0.5, 0.62, 1.0) * 0.06 * I * max(L.z * inversesqrt(d2), 0.0) / (1.0 + 1.4 * d2);
  c += vec3(0.4, 0.52, 0.85) * 0.15 * exp(-max(y, 0.0) * 55.0);
  c *= 1.0 - 0.55 * exp(-(XR - x) * 5.0);
  return c;
}
vec3 wallRight(vec3 p) {
  float I = uCfg.x;
  float z = p.z, y = p.y;
  vec3 c = mix(vec3(0.0065, 0.009, 0.017), vec3(0.003, 0.0045, 0.009), smoothstep(0.0, 2.8, y));
  c += vec3(0.06, 0.085, 0.15) * 0.13 * exp(-0.5 * (pow((z + 0.2) / 1.5, 2.0) + pow((y - 0.55) / 0.8, 2.0)));
  float pn = smoothstep(0.12, 0.0, abs(z + 1.4)) * 0.8 + smoothstep(0.2, 0.0, abs(z - 0.9)) * 0.5;
  c += vec3(0.5, 0.62, 0.95) * pn * 0.03 * smoothstep(-0.05, 0.4, y) * (1.0 - smoothstep(1.5, 2.3, y));
  vec3 L = uOrb - p;
  float d2 = dot(L, L);
  c += vec3(0.5, 0.62, 1.0) * 0.045 * I * max(-L.x * inversesqrt(d2), 0.0) / (1.0 + 1.6 * d2);
  c += vec3(0.4, 0.52, 0.85) * 0.13 * exp(-max(y, 0.0) * 55.0);
  c *= 1.0 - 0.5 * exp(-(p.z + ZB) * 3.5);
  c += spotsWall(p);
  return c;
}

// El cuarto sin reflejos: primero se halla la superficie más cercana (piso, pared de fondo o pared derecha)...
float roomT(vec3 ro, vec3 rd, out int kind) {
  float tf = rd.y < -1e-5 ? -ro.y / rd.y : 1e9;
  float tb = rd.z < -1e-5 ? (-ZB - ro.z) / rd.z : 1e9;
  float tr = rd.x > 1e-5 ? (XR - ro.x) / rd.x : 1e9;
  float t = tf; kind = 1;
  if (tb < t) { t = tb; kind = 2; }
  if (tr < t) { t = tr; kind = 3; }
  if (t > 1e8) { kind = 0; return 60.0; }
  return max(t, 0.0);
}
// ...y solo después se sombrea.
vec3 roomShade(vec3 p, int kind) {
  if (kind == 1) return floorCol(p);
  if (kind == 2) return wallBack(p);
  if (kind == 3) return wallRight(p);
  return vec3(0.004, 0.006, 0.012);
}
vec3 roomCol(vec3 ro, vec3 rd, out float tHit, out int kind) {
  tHit = roomT(ro, rd, kind);
  return roomShade(ro + rd * tHit, kind);
}

// Vidrio: fresnel, refracción por canal de color (dispersión), rebotes internos con reflexión total,
// absorción del tinte y bisel con hilo especular. Los haces dentro del vidrio se ven refractados.
vec3 glassShade(vec3 ro, vec3 rd, float ta, vec3 na) {
  float DSP = 0.006 + 0.01 * uCfg.w;
  vec3 p = ro + rd * ta;
  float rim0;
  vec3 nb = bevel(p, na, rd, ta, rim0);
  float ci = clamp(dot(-rd, nb), 0.0, 1.0);
  float F = 0.04 + 0.96 * pow(1.0 - ci, 5.0);
  vec3 rr = reflect(rd, nb);
  vec3 refl = studio(rr) + vec3(1.0, 0.97, 0.92) * pow(max(dot(rr, normalize(uOrb - p)), 0.0), 120.0) * 6.0 * uCfg.x;
  vec3 air = airLight(ro, rd, ta);
  vec3 vol = vec3(0.0);
  vec3 thr = vec3(0.0);
  float plen = 0.0;
  float rimE = 0.0;
  for (int ch = 0; ch < 3; ch++) {
    float ior = 1.5 + (float(ch) - 1.0) * DSP;
    vec3 d = refract(rd, nb, 1.0 / ior);
    vec3 q = p + d * 2e-4;
    vec3 od = d;
    float len = 0.0;
    int nb = ch == 1 ? 3 : 2;
    for (int b = 0; b < 3; b++) {
      if (b >= nb) break;
      float a0, a1; vec3 m0, m1;
      prism(q, d, a0, a1, m0, m1);
      float tx = max(a1, 1e-3);
      if (ch == 1) vol += airLight(q, d, tx);
      len += tx;
      vec3 pe = q + d * tx;
      float re;
      vec3 ne = bevel(pe, m1, d, ta + len, re);
      if (ch == 1) rimE = max(rimE, re * (b == 0 ? 1.0 : 0.6));
      vec3 o = refract(d, -ne, ior);
      if (dot(o, o) > 0.0) { q = pe; od = o; break; }
      d = reflect(d, ne);
      q = pe + d * 2e-4;
      od = d;
    }
    float th; int kd;
    vec3 rc = roomCol(q, od, th, kd);
    if (ch == 1) { thr.g = rc.g; plen = len; vol += airLight(q, od, th); }
    else if (ch == 0) thr.r = rc.r;
    else thr.b = rc.b;
  }
  vec3 absorb = exp(-plen * (1.0 - uTint) * 1.5);
  vec3 col = air + vol + mix(thr * absorb, refl, F);
  float rl = 0.35 + 1.6 * lum(studio(rr));
  col += vec3(0.8, 0.9, 1.0) * (rim0 * rl * 0.9 + rimE * 0.28);
  return col;
}

// Escena sin el reflejo del piso (para el reflejo mismo y para lo que se ve a través del vidrio).
vec3 scene1(vec3 ro, vec3 rd) {
  float a0, a1; vec3 m0, m1;
  int kd;
  float th = roomT(ro, rd, kd);
  if (prism(ro, rd, a0, a1, m0, m1) && a0 > 0.0 && a0 < th) return glassShade(ro, rd, a0, m0);
  return roomShade(ro + rd * th, kd) + airLight(ro, rd, th);
}

vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }

// Polvo en suspensión: motas que solo se encienden donde hay luz del haz.
float motes(vec2 frag, float mask) {
  float acc = 0.0;
  float u = uRes.y;
  for (int k = 0; k < 2; k++) {
    float cell = u * (k == 0 ? 0.052 : 0.083);
    vec2 g = (frag + vec2(uTime * 5.0 * float(k + 1), -uTime * 3.0)) / cell;
    vec2 id = floor(g);
    vec2 f = fract(g) - 0.5;
    vec2 h = hash22(id + float(k) * 17.0);
    float on = step(0.8, hash12(id * 1.7 + float(k) * 5.0));
    float d = length(f - (h - 0.5) * 0.7);
    float tw = 0.5 + 0.5 * sin(uTime * (1.0 + h.x * 2.0) + h.y * 6.283);
    acc += on * (0.35 + 0.65 * tw) * smoothstep(0.1, 0.0, d);
  }
  return acc * mask;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 ndc = frag / uRes * 2.0 - 1.0;
  vec3 ro = uCam;
  vec3 rd = normalize(uCF + uCR * (ndc.x * uLens.y * uLens.x) + uCU * (ndc.y * uLens.x));
  vec3 col;
  float a0, a1; vec3 m0, m1;
  int kind;
  float tr = roomT(ro, rd, kind);
  if (prism(ro, rd, a0, a1, m0, m1) && a0 > 0.0 && a0 < tr) {
    col = glassShade(ro, rd, a0, m0);
  } else {
    col = roomShade(ro + rd * tr, kind);
    if (kind == 1) {
      // Piso brillante tipo vinilo: reflejo de todo lo que hay arriba, más fuerte al ras.
      float cs = clamp(-rd.y, 0.0, 1.0);
      float F = clamp((0.05 + 0.95 * pow(1.0 - cs, 5.0)) * 1.4 + 0.06, 0.0, 0.85);
      vec3 p = ro + rd * tr;
      vec3 refl = scene1(p + vec3(0.0, 2e-4, 0.0), vec3(rd.x, -rd.y, rd.z));
      col = col * (1.0 - F * 0.7) + refl * F;
    }
    col += airLight(ro, rd, tr);
  }
  col += vec3(0.9, 0.95, 1.0) * motes(frag, clamp(gVL * 0.7, 0.0, 1.0)) * 1.4 * uCfg.x;

  col = aces(col);
  col = pow(col, vec3(1.0 / 2.2));
  vec2 uv = frag / uRes - 0.5;
  col *= 1.0 - 0.6 * smoothstep(0.22, 0.95, length(uv * vec2(1.0, 1.1) * 1.3));
  col += (hash12(frag + fract(uTime) * 91.7) - 0.5) * 0.024;
  fragColor = vec4(max(col, 0.0), 1.0);
}`,wt=["uRes","uTime","uCam","uCF","uCR","uCU","uLens","uOrb","uCfg","uTint","uBeam","uMisc","uBox","uRA","uRB"];function Lt({dispersion:n=1,intensity:s=1,glow:g=1,beamWidth:h=2.5,tint:p="#bcd9ff",autoplay:L=!0,interactive:B=!0,children:q,className:V="",style:S}){const R=ee.useRef(null),F=ee.useRef(null),l=ee.useRef({dispersion:n,intensity:s,glow:g,beamWidth:h,tint:p,autoplay:L,interactive:B});l.current={dispersion:n,intensity:s,glow:g,beamWidth:h,tint:p,autoplay:L,interactive:B};const A=ee.useRef(()=>{});return ee.useEffect(()=>{const m=R.current,x=F.current;if(!m||!x)return;const e=x.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!e){m.setAttribute("data-sin-gl","");return}const I=window.matchMedia("(prefers-reduced-motion: reduce)").matches,X=e.getExtension("WEBGL_debug_renderer_info"),Q=!!X&&/swiftshader|llvmpipe|software/i.test(String(e.getParameter(X.UNMASKED_RENDERER_WEBGL)));let G=null,H=null,y={},b=!1,E=!1,C=!1,j=0,P=0,k=0,Z=1,M=0,ge=!0,ke=0,re=0,ne=!1,Xe=!1,Qe="",_=[0,0],se=0;const c={x:0,y:0,vx:0,vy:0},d={yaw:pe,pitch:me,vy:0,vp:0},w={dist:6.6,rMin:.45,rMax:1.4,rMid:.9},ze=new Float32Array(U*4),Me=new Float32Array(U*4),ce=e.getExtension("EXT_disjoint_timer_query_webgl2"),W=[];let ie=0,we=0,qe=0,le=60,Ae=1e9,Le=0;const K=[],Ce=t=>{const o=T(se+t,0,st.length-1);o!==se&&(se=o,ie=0,we=0,qe=0,le=40,K.length=0,Ee(),M||Y())},vt=t=>{if(Q)return;if(le>0&&le--,ce){for(;W.length;){const a=W[0];if(!e.getQueryParameter(a,e.QUERY_RESULT_AVAILABLE))break;if(W.shift(),!e.getParameter(ce.GPU_DISJOINT_EXT)){const u=e.getQueryParameter(a,e.QUERY_RESULT)/1e6;ie=we?ie*.85+u*.15:u,we++}e.deleteQuery(a)}le===0&&we>12&&(ie>12?Ce(1):ie<4&&se>0?++qe>150&&Ce(-1):qe=0);return}const o=Le?t-Le:0;Le=t,!(o<2||o>140)&&(Ae=Math.min(Ae*1.0008,o),K.push(o>Ae*1.5+2),K.length>30&&K.shift(),le===0&&K.length===30&&K.filter(Boolean).length>20&&Ce(1))},We=e.getExtension("KHR_parallel_shader_compile"),$e=()=>{E=!1;const t=(r,z)=>{const f=e.createShader(r);return f&&(e.shaderSource(f,z),e.compileShader(f)),f},o=t(e.VERTEX_SHADER,zt),a=t(e.FRAGMENT_SHADER,Mt),i=e.createProgram();if(!o||!a||!i){Ze();return}e.attachShader(i,o),e.attachShader(i,a),e.linkProgram(i);const u=()=>{if(j=0,!(C||b)){if(We&&!e.getProgramParameter(i,We.COMPLETION_STATUS_KHR)){j=requestAnimationFrame(u);return}if(!e.getProgramParameter(i,e.LINK_STATUS)){console.error("PrismLight: "+(e.getShaderInfoLog(a)||e.getProgramInfoLog(i))),Ze();return}e.deleteShader(o),e.deleteShader(a),G=i,H=e.createVertexArray(),y={};for(const r of wt)y[r]=e.getUniformLocation(i,r);E=!0,Ee(),Y(),fe()}};u()},Ze=()=>{m.setAttribute("data-sin-gl","")},Ke=()=>{const t=Math.cos(d.pitch),o=Math.sin(d.pitch),a=Math.cos(d.yaw),i=Math.sin(d.yaw),u=[oe[0]+w.dist*i*t,oe[1]+w.dist*o,oe[2]+w.dist*a*t];let r=[oe[0]-u[0],oe[1]-u[1],oe[2]-u[2]];const z=Math.hypot(r[0],r[1],r[2]);r=[r[0]/z,r[1]/z,r[2]/z];let f=[-r[2],0,r[0]];const N=Math.hypot(f[0],f[2])||1;f=[f[0]/N,0,f[2]/N];const D=[f[1]*r[2]-f[2]*r[1],f[2]*r[0]-f[0]*r[2],f[0]*r[1]-f[1]*r[0]];return{pos:u,f:r,r:f,u:D}},Ye=(t,o)=>{const a=Ke(),i=t/P*2-1,u=1-o/k*2,r=i*(P/k)*te,z=u*te,f=a.f[0]+a.r[0]*r+a.u[0]*z,N=a.f[1]+a.r[1]*r+a.u[1]*z,D=a.f[2]+a.r[2]*r+a.u[2]*z;if(D>-1e-4)return null;const O=-a.pos[2]/D;return[a.pos[0]+f*O,a.pos[1]+N*O]},Ne=(t,o)=>{const a=-Math.sin(t),i=a>.05?(v[1]-.12)/a:1e9;return[t,T(Math.min(o,i),.3,w.rMax)]},Te=(t,o)=>{const a=Ye(t,o)??[v[0]-1,v[1]-.3],i=Math.max(v[0]-a[0],.25),u=a[1]-v[1];return Ne(T(Math.atan2(u,i),Ge,He),T(Math.hypot(i,u),w.rMin,w.rMax))},ht=t=>Ne((-34+11*Math.sin(t*.33)+3*Math.sin(t*.91+1))*$,w.rMid*(1+.14*Math.sin(t*.21+.8))),Ie=t=>l.current.autoplay?ht(t):Ne(-34*$,w.rMid),Re=(t,o)=>[v[0]-o*Math.cos(t),v[1]+o*Math.sin(t)],Ee=()=>{Z=Math.min(window.devicePixelRatio||1,1.5),P=Math.max(1,m.clientWidth),k=Math.max(1,m.clientHeight);const t=st[se];x.width=Math.max(2,Math.round(P*Z*t)),x.height=Math.max(2,Math.round(k*Z*t)),e.viewport(0,0,x.width,x.height),w.dist=T(Math.max(1.75/(te*(P/k)),4.7),4.7,11);const o={yaw:d.yaw,pitch:d.pitch};d.yaw=pe,d.pitch=me;const a=Ye(P*.07,k*.55);d.yaw=o.yaw,d.pitch=o.pitch;const i=a?a[0]:-1.5;w.rMax=Math.max(w.rMin+.3,(v[0]-i)/Math.cos(He)),w.rMid=Math.max(w.rMin+.1,w.rMax*.62);const u=Ie(re),r=Re(u[0],u[1]);if(!Xe)Xe=!0,c.x=r[0],c.y=r[1],c.vx=c.vy=0;else if(ne&&l.current.interactive){const z=Te(_[0],_[1]),f=Re(z[0],z[1]);c.x=f[0],c.y=f[1]}else c.x=r[0],c.y=r[1],c.vx=c.vy=0},Y=()=>{if(b||!E||!G)return;const t=l.current,o=Ke(),a=[c.x,c.y],{tin:i,xc:u}=gt(a,t.dispersion,t.intensity,ze,Me),r=Ve(xe(v,a)),z=Math.atan2(c.y-v[1],v[0]-c.x),f=T((z-Ge)/(He-Ge),0,1),N=2*te*w.dist/k,D=Math.max(.7*N,Math.max(.8,t.beamWidth)*N*.42),O=bt(t.tint);e.useProgram(G),e.bindVertexArray(H),e.uniform2f(y.uRes,x.width,x.height),e.uniform1f(y.uTime,re),e.uniform3fv(y.uCam,o.pos),e.uniform3fv(y.uCF,o.f),e.uniform3fv(y.uCR,o.r),e.uniform3fv(y.uCU,o.u),e.uniform2f(y.uLens,te,P/k),e.uniform3f(y.uOrb,c.x,c.y,0),e.uniform4f(y.uCfg,t.intensity,t.glow,D,t.dispersion),e.uniform3f(y.uTint,Math.pow(O[0]/255,2.2),Math.pow(O[1]/255,2.2),Math.pow(O[2]/255,2.2)),e.uniform4f(y.uBeam,r[0],r[1],Math.hypot(v[0]-a[0],v[1]-a[1]),i),e.uniform4f(y.uMisc,u,f,2*te/x.height,0);let Se=Math.max(a[1],v[1]);for(let ue=0;ue<U;ue++){const J=ue*4;Me[J+3]>.5&&(Se=Math.max(Se,ze[J+1]+Math.max(0,ze[J+3])*Me[J]))}e.uniform4f(y.uBox,Math.min(a[0],v[0])-.5,-.1,ae+.03,Se+.6),e.uniform4fv(y.uRA,ze),e.uniform4fv(y.uRB,Me);let de=null;ce&&W.length<4&&(de=e.createQuery(),de&&e.beginQuery(ce.TIME_ELAPSED_EXT,de)),e.drawArrays(e.TRIANGLES,0,3),de&&(e.endQuery(ce.TIME_ELAPSED_EXT),W.push(de));const Fe=`${(10+80*f).toFixed(1)}|${Math.round(272*(1-f))}`;if(Fe!==Qe){Qe=Fe;const[ue,J]=Fe.split("|");m.style.setProperty("--pl-x",`${ue}%`),m.style.setProperty("--pl-h",J)}},Je=(t,o)=>{if(o){const a=T(_[0]/P*2-1,-1,1),i=T(_[1]/k*2-1,-1,1);return[pe+a*.11,me-i*.06]}return l.current.autoplay?[pe+.045*Math.sin(t*.23),me+.022*Math.sin(t*.31+1)]:[pe,me]},et=t=>{M=0;const o=Math.min(.04,Math.max(0,(t-(ke||t))/1e3));ke=t,re+=o;const a=l.current,i=ne&&a.interactive,u=Je(re,i);d.vy+=((u[0]-d.yaw)*38-d.vy*9)*o,d.vp+=((u[1]-d.pitch)*38-d.vp*9)*o,d.yaw+=d.vy*o,d.pitch+=d.vp*o;let r;i?r=Te(_[0],_[1]):r=Ie(re);const z=Re(r[0],r[1]),f=150,N=17;c.vx+=((z[0]-c.x)*f-c.vx*N)*o,c.vy+=((z[1]-c.y)*f-c.vy*N)*o,c.x+=c.vx*o,c.y+=c.vy*o,Y(),vt(t);const D=Math.abs(u[0]-d.yaw)<4e-4&&Math.abs(u[1]-d.pitch)<4e-4&&Math.abs(d.vy)<.004&&Math.abs(d.vp)<.004,O=Math.hypot(z[0]-c.x,z[1]-c.y)<4e-4&&Math.hypot(c.vx,c.vy)<.004&&D;ge&&!b&&(!i&&a.autoplay||!O)?M=requestAnimationFrame(et):(ke=0,Le=0)},fe=()=>{!M&&ge&&!I&&!b&&E&&(M=requestAnimationFrame(et))},_e=()=>{M||b||!E||(M=requestAnimationFrame(()=>{M=0;const t=l.current,o=ne&&t.interactive,a=Je(0,o);d.yaw=a[0],d.pitch=a[1],d.vy=d.vp=0;const i=o?Te(_[0],_[1]):Ie(0),u=Re(i[0],i[1]);c.x=u[0],c.y=u[1],c.vx=c.vy=0,Y()}))};A.current=()=>{I?_e():fe()};const Be=t=>{if(!l.current.interactive)return;const o=m.getBoundingClientRect();_=[t.clientX-o.left,t.clientY-o.top],ne=!0,I?_e():fe()},tt=()=>{ne=!1,I?_e():fe()},ot=t=>{t.preventDefault(),b=!0,E=!1,M&&cancelAnimationFrame(M),j&&cancelAnimationFrame(j),M=0,j=0,W.length=0},at=()=>{b=!1,$e()};m.addEventListener("pointermove",Be),m.addEventListener("pointerdown",Be),m.addEventListener("pointerleave",tt),x.addEventListener("webglcontextlost",ot),x.addEventListener("webglcontextrestored",at);const rt=new ResizeObserver(()=>{Ee(),Y()});rt.observe(m);const nt=new IntersectionObserver(([t])=>{ge=t.isIntersecting,ge&&(I?Y():fe())},{threshold:.01});return nt.observe(m),Ee(),$e(),()=>{C=!0,cancelAnimationFrame(M),cancelAnimationFrame(j),M=0,rt.disconnect(),nt.disconnect(),m.removeEventListener("pointermove",Be),m.removeEventListener("pointerdown",Be),m.removeEventListener("pointerleave",tt),x.removeEventListener("webglcontextlost",ot),x.removeEventListener("webglcontextrestored",at),A.current=()=>{};for(const t of W)e.deleteQuery(t);G&&e.deleteProgram(G),H&&e.deleteVertexArray(H),e.getExtension("WEBGL_lose_context")?.loseContext()}},[]),ee.useEffect(()=>{A.current()},[n,s,g,h,p,L,B]),he.jsxs("div",{ref:R,className:`furin-prism-light ${V}`,style:S,children:[he.jsx("canvas",{ref:F,className:"furin-prism-light__canvas","aria-hidden":!0}),q!=null&&q!==!1&&he.jsx("div",{className:"furin-prism-light__content",children:q})]})}function Et(){return he.jsx("div",{className:"stage",children:he.jsx(Lt,{})})}export{Et as default};
