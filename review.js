// ── SVG helpers ──────────────────────────────────────────────
const SVG_STYLE = `font-family:serif`;

// Circle geometry: center (cx,cy), radius r, angle θ in degrees (standard math, CCW from right)
function pt(cx, cy, r, deg) {
    const rad = deg * Math.PI / 180;
    return [+(cx + r * Math.cos(rad)).toFixed(1), +(cy - r * Math.sin(rad)).toFixed(1)];
}
function line(x1,y1,x2,y2,color='#3b6fd4',w=1.5,dash='') {
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${dash}/>`;
}
function circle(cx,cy,r,fill='#eef4ff',stroke='#3b6fd4',sw=1.5) {
    return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}
function dot(x,y,r=3,fill='#3b6fd4') {
    return `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
}
function label(x,y,text,anchor='middle',fill='#1e2d4a',size=12) {
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" fill="${fill}" font-style="italic">${text}</text>`;
}
// Small angle arc (sweep=1: CW, sweep=0: CCW in SVG)
function arcMark(x1,y1,r,x2,y2,large,sweep,color='#c0392b',w=1.5) {
    return `<path d="M${x1},${y1} A${r},${r} 0 ${large},${sweep} ${x2},${y2}" fill="none" stroke="${color}" stroke-width="${w}"/>`;
}
function svgWrap(content, w=200, h=160) {
    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" style="${SVG_STYLE}">${content}</svg>`;
}

// ── SVG figures ───────────────────────────────────────────────

// 接線の等長：外部の点Pから2本の接線 PA=7, PB=?
function svgTangentEqual() {
    const parts = [
        circle(80,65,35),
        dot(15,65,3,'#fff'), label(4,69,'P','middle','#fff'),
        dot(80,65,2,'#fff'), label(83,63,'O','start','#aaa',10),
        dot(61,36,2.5,'#e9cc33'), label(55,30,'A','middle','#e9cc33'),
        dot(61,94,2.5,'#e9cc33'), label(55,106,'B','middle','#e9cc33'),
        line(15,65,61,36,'#e9cc33',1.8),
        line(15,65,61,94,'#e9cc33',1.8),
        `<line x1="80" y1="65" x2="61" y2="36" stroke="#888" stroke-width="1" stroke-dasharray="3,3"/>`,
        `<line x1="80" y1="65" x2="61" y2="94" stroke="#888" stroke-width="1" stroke-dasharray="3,3"/>`,
        `<text x="20" y="47" font-size="10" fill="#f0e8cc">PA=7</text>`,
        `<text x="20" y="87" font-size="10" fill="#e9cc33">PB=?</text>`,
    ];
    return svgWrap(parts.join(''), 130, 130);
}

// 内接円：三角形とラベル（AF, BD, CE）
function svgInscribed(afLabel, bdLabel, ceLabel, queryLabel) {
    const parts = [
        `<polygon points="65,15 10,120 130,120" fill="none" stroke="#3b6fd4" stroke-width="1.5"/>`,
        `<circle cx="71" cy="81" r="28" fill="rgba(100,160,100,0.10)" stroke="#a8c8a0" stroke-width="1" stroke-dasharray="4,3"/>`,
        label(60,10,'A'), label(2,128,'B','start'), label(132,128,'C','start'),
        dot(44,54,2,'#e9cc33'), label(36,52,'F','middle','#e9cc33',10),
        dot(77,120,2,'#e9cc33'), label(74,132,'D','middle','#e9cc33',10),
        dot(93,60,2,'#e9cc33'), label(96,59,'E','start','#e9cc33',10),
        `<text x="36" y="88" font-size="9" fill="#f0e8cc">${afLabel}</text>`,
        `<text x="18" y="112" font-size="9" fill="#f0e8cc">${bdLabel}</text>`,
        `<text x="96" y="108" font-size="9" fill="#f0e8cc">${ceLabel}</text>`,
        queryLabel ? `<text x="55" y="132" font-size="9" fill="#e9cc33">${queryLabel}</text>` : '',
    ];
    return svgWrap(parts.join(''), 150, 140);
}

// 接線の長さ：直角三角形 OTP
function svgTangentRight(opLabel, rLabel, ptLabel) {
    const parts = [
        circle(110,75,45),
        dot(110,75,3,'#fff'), label(114,73,'O','start','#fff'),
        dot(20,75,3,'#fff'),  label(8,79,'P','middle','#fff'),
        dot(72,36,2.5,'#e9cc33'), label(68,28,'T','middle','#e9cc33'),
        line(20,75,72,36,'#e9cc33',1.8),
        `<line x1="110" y1="75" x2="72" y2="36" stroke="#888" stroke-width="1" stroke-dasharray="3,3"/>`,
        `<line x1="20" y1="75" x2="110" y2="75" stroke="#ccc" stroke-width="0.8" stroke-dasharray="2,3"/>`,
        `<path d="M73,42 L67,39 L70,33" fill="none" stroke="#e9cc33" stroke-width="0.9"/>`,
        `<text x="55" y="73" font-size="10" fill="#ccc">${opLabel}</text>`,
        `<text x="104" y="56" font-size="10" fill="#aaa">${rLabel}</text>`,
        `<text x="25" y="56" font-size="10" fill="#e9cc33">${ptLabel}</text>`,
    ];
    return svgWrap(parts.join(''), 170, 120);
}

// 内部の点：2弦が交わる
function svgInternalChords(paLabel='PA', pbLabel='PB', pcLabel='PC', pdLabel='PD') {
    const cx=100,cy=80,r=55;
    const [Ax,Ay]=pt(cx,cy,r,200), [Bx,By]=pt(cx,cy,r,20);
    const [Cx,Cy]=pt(cx,cy,r,150), [Dx,Dy]=pt(cx,cy,r,320);
    const Px=95, Py=73;
    const parts = [
        circle(cx,cy,r),
        line(Ax,Ay,Bx,By,'#88aaff',1.8),
        line(Cx,Cy,Dx,Dy,'#88aaff',1.8),
        dot(Ax,Ay), dot(Bx,By), dot(Cx,Cy), dot(Dx,Dy),
        dot(Px,Py,3,'#e9cc33'),
        label(Ax-5,Ay+10,'A','end'), label(Bx+5,By+4,'B','start'),
        label(Cx-5,Cy-5,'C','end'), label(Dx+5,Dy+8,'D','start'),
        label(Px-9,Py-4,'P','middle','#e9cc33'),
        `<text x="${(Ax+Px)/2-14}" y="${(Ay+Py)/2+4}" font-size="9" fill="#f0e8cc">${paLabel}</text>`,
        `<text x="${(Bx+Px)/2+2}" y="${(By+Py)/2}" font-size="9" fill="#f0e8cc">${pbLabel}</text>`,
        `<text x="${(Cx+Px)/2-14}" y="${(Cy+Py)/2-2}" font-size="9" fill="#f0e8cc">${pcLabel}</text>`,
        `<text x="${(Dx+Px)/2+2}" y="${(Dy+Py)/2+8}" font-size="9" fill="#f0e8cc">${pdLabel}</text>`,
    ];
    return svgWrap(parts.join(''));
}

// ── Question data ─────────────────────────────────────────────
// （以下は旧問題。新しい questions 配列で上書き）

// Q1: 接弦定理 - tangent at A (horizontal, bottom), chord AB, inscribed angle ACB
function svgQ1() {
    // Circle cx=100 cy=82 r=55. A=bottom=(100,137), chord at 70° from horizontal
    // dir=(cos70°, -sin70°)=(0.342,-0.940), t=103.4 → B=(135,40)
    // C on major arc at 160°
    const [Ax,Ay] = [100,137];
    const [Bx,By] = [135,40];
    const [Cx,Cy] = pt(100,82,55,160);  // upper-left area
    const parts = [
        circle(100,82,55),
        // tangent (horizontal dashed)
        `<line x1="18" y1="137" x2="182" y2="137" stroke="#8898b0" stroke-width="1.5" stroke-dasharray="5,3"/>`,
        // chord AB
        line(Ax,Ay,Bx,By,'#3b6fd4',1.8),
        // lines to C
        line(Cx,Cy,Ax,Ay,'#8898b0',1),
        line(Cx,Cy,Bx,By,'#8898b0',1),
        // angle arc at A: from tangent-right (115,137) to chord dir 15px=(105,123), CW
        arcMark(115,137,15,105,123,0,1),
        // angle arc at C: (56,78)→(62,62), CCW
        arcMark(Math.round(Cx+14*0.575),Math.round(Cy+14*0.819),14,
                Math.round(Cx+14*0.967),Math.round(Cy-14*0.256),0,0),
        // dots
        dot(Ax,Ay), dot(Bx,By), dot(Cx,Cy),
        // labels
        label(100,152,'A'), label(141,37,'B','start'), label(Cx-5,Cy-5,'C','end'),
        // angle labels
        `<text x="108" y="126" font-size="10" fill="#c0392b">70°</text>`,
        `<text x="${Math.round(Cx+18)}" y="${Math.round(Cy+8)}" font-size="10" fill="#c0392b">?</text>`,
        // tangent label
        `<text x="168" y="133" font-size="11" fill="#8898b0" font-style="italic">ℓ</text>`,
    ];
    return svgWrap(parts.join(''), 200, 162);
}

// Q2: 円周角の定理 - central angle AOB=120°, inscribed angle ACB
function svgQ2() {
    const cx=100, cy=85, r=55;
    const [Ax,Ay] = pt(cx,cy,r,120);   // A at 120°
    const [Bx,By] = pt(cx,cy,r,0);     // B at 0° = (155,85)
    const [Cx,Cy] = pt(cx,cy,r,270);   // C at 270° = (100,140)
    const parts = [
        circle(cx,cy,r),
        // radii OA, OB
        line(cx,cy,Ax,Ay,'#3b6fd4',1.5),
        line(cx,cy,Bx,By,'#3b6fd4',1.5),
        // inscribed angle lines
        line(Cx,Cy,Ax,Ay,'#8898b0',1),
        line(Cx,Cy,Bx,By,'#8898b0',1),
        // central angle arc at O: from OB-direction(15px right)=(115,85) to OA-direction(15px)
        arcMark(115,85,15,...pt(cx,cy,15,120),0,1,'#c0392b',1.5),
        // inscribed angle arc at C
        arcMark(96,127,13,109,130,0,0,'#c0392b',1.5),
        // dots
        dot(cx,cy,3,'#1e2d4a'), dot(Ax,Ay), dot(Bx,By), dot(Cx,Cy),
        // labels
        label(cx+3,cy+11,'O','middle','#1e2d4a',11),
        label(Ax-3,Ay-5,'A','end'), label(Bx+5,By+4,'B','start'), label(Cx,Cy+14,'C'),
        `<text x="110" y="79" font-size="9" fill="#c0392b">120°</text>`,
        `<text x="94" y="122" font-size="10" fill="#c0392b">?</text>`,
    ];
    return svgWrap(parts.join(''));
}

// Q3: 同じ弧に対する円周角が等しい
function svgQ3() {
    const cx=100, cy=80, r=55;
    const [Ax,Ay] = pt(cx,cy,r,210);   // A lower-left
    const [Bx,By] = pt(cx,cy,r,330);   // B lower-right
    const [Cx,Cy] = pt(cx,cy,r,65);    // C upper-right
    const [Dx,Dy] = pt(cx,cy,r,115);   // D upper-left
    const parts = [
        circle(cx,cy,r),
        // highlight minor arc AB (from A 210° to B 330° going CW in SVG = CCW standard... let me use path)
        `<path d="M${Ax},${Ay} A${r},${r} 0 0,1 ${Bx},${By}" fill="none" stroke="#3b6fd4" stroke-width="2.5"/>`,
        // lines from C
        line(Cx,Cy,Ax,Ay,'#8898b0',1),
        line(Cx,Cy,Bx,By,'#8898b0',1),
        // lines from D
        line(Dx,Dy,Ax,Ay,'#8898b0',1),
        line(Dx,Dy,Bx,By,'#8898b0',1),
        // angle arcs at C: (117,38)→(130,44) CCW
        arcMark(116,39,13,130,44,0,0),
        // angle arcs at D: (69,44)→(83,39) CCW
        arcMark(69,43,13,83,39,0,0),
        // dots
        dot(Ax,Ay), dot(Bx,By), dot(Cx,Cy), dot(Dx,Dy),
        // labels
        label(Ax-5,Ay+10,'A','end'), label(Bx+5,By+10,'B','start'),
        label(Cx+5,Cy-4,'C','start'), label(Dx-5,Dy-4,'D','end'),
        // equal marks
        `<text x="120" y="36" font-size="9" fill="#c0392b" font-style="normal">=</text>`,
        `<text x="73" y="36" font-size="9" fill="#c0392b" font-style="normal">=</text>`,
    ];
    return svgWrap(parts.join(''), 200, 155);
}

// Q4: 接弦定理 → 中心角 (tangent horizontal at bottom, A=bottom, B=right, central angle=90°)
function svgQ4() {
    // Circle cx=100 cy=82 r=55. A=bottom=(100,137), chord at 45° from horizontal → B=(155,82)=rightmost
    const parts = [
        circle(100,82,55),
        // tangent at A (horizontal dashed)
        `<line x1="18" y1="137" x2="182" y2="137" stroke="#8898b0" stroke-width="1.5" stroke-dasharray="5,3"/>`,
        // chord AB
        line(100,137,155,82,'#3b6fd4',1.8),
        // radii OA, OB (dashed gray)
        `<line x1="100" y1="82" x2="100" y2="137" stroke="#b0bdd0" stroke-width="1" stroke-dasharray="4,3"/>`,
        `<line x1="100" y1="82" x2="155" y2="82" stroke="#b0bdd0" stroke-width="1" stroke-dasharray="4,3"/>`,
        // tangent angle arc at A: from (115,137) to (111,126), CW
        arcMark(115,137,15,111,126,0,1),
        // central angle arc at O (90°): from (100,97)[below O] to (115,82)[right of O], CCW
        arcMark(100,97,15,115,82,0,0,'#3b6fd4',1.5),
        // right angle mark at A (OA ⊥ tangent)
        `<polyline points="108,137 108,129 100,129" fill="none" stroke="#b0bdd0" stroke-width="1"/>`,
        // dots
        dot(100,137), dot(155,82), dot(100,82,3,'#1e2d4a'),
        // labels
        label(100,152,'A'), label(161,86,'B','start'), label(106,78,'O','start','#1e2d4a',11),
        `<text x="117" y="128" font-size="10" fill="#c0392b">45°</text>`,
        `<text x="108" y="96" font-size="10" fill="#3b6fd4">?</text>`,
        // tangent label
        `<text x="168" y="133" font-size="11" fill="#8898b0" font-style="italic">ℓ</text>`,
    ];
    return svgWrap(parts.join(''), 200, 162);
}

// Q5: 同じ弧の円周角（同じ角度）- ∠ACB=35°, find ∠ADB
function svgQ5() {
    const cx=100, cy=80, r=55;
    const [Ax,Ay] = pt(cx,cy,r,210);
    const [Bx,By] = pt(cx,cy,r,330);
    const [Cx,Cy] = pt(cx,cy,r,70);
    const [Dx,Dy] = pt(cx,cy,r,110);
    const parts = [
        circle(cx,cy,r),
        `<path d="M${Ax},${Ay} A${r},${r} 0 0,1 ${Bx},${By}" fill="none" stroke="#3b6fd4" stroke-width="2.5"/>`,
        // lines from C
        line(Cx,Cy,Ax,Ay,'#8898b0',1),
        line(Cx,Cy,Bx,By,'#8898b0',1),
        // lines from D
        line(Dx,Dy,Ax,Ay,'#8898b0',1),
        line(Dx,Dy,Bx,By,'#8898b0',1),
        // angle arc at C (label 35°)
        arcMark(111,37,13,124,41,0,0),
        // angle arc at D (label ?)
        arcMark(75,40,13,88,37,0,0),
        // dots
        dot(Ax,Ay), dot(Bx,By), dot(Cx,Cy), dot(Dx,Dy),
        // labels
        label(Ax-5,Ay+10,'A','end'), label(Bx+5,By+10,'B','start'),
        label(Cx+5,Cy-4,'C','start'), label(Dx-5,Dy-4,'D','end'),
        `<text x="117" y="34" font-size="9" fill="#c0392b">35°</text>`,
        `<text x="76" y="34" font-size="9" fill="#c0392b">?</text>`,
    ];
    return svgWrap(parts.join(''), 200, 155);
}

// ── Additional helpers for triangle SVGs ─────────────────────

// Perpendicular tick mark(s) at midpoint of segment
function sideTick(x1,y1,x2,y2,n,color='#c0392b') {
    const mx=(x1+x2)/2, my=(y1+y2)/2;
    const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
    const px=-dy/len*4, py=dx/len*4;
    let s='';
    for(let i=0;i<n;i++){
        const t=(i-(n-1)/2)*3.5;
        const cx=mx+t*dx/len, cy=my+t*dy/len;
        s+=`<line x1="${+(cx-px).toFixed(1)}" y1="${+(cy-py).toFixed(1)}" x2="${+(cx+px).toFixed(1)}" y2="${+(cy+py).toFixed(1)}" stroke="${color}" stroke-width="1.5"/>`;
    }
    return s;
}

// Label at midpoint of segment, offset perpendicular
function sideLabel(x1,y1,x2,y2,text,offset=10,fill='#3b6fd4') {
    const mx=(x1+x2)/2, my=(y1+y2)/2;
    const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
    const nx=-dy/len*offset, ny=dx/len*offset;
    return `<text x="${+(mx+nx).toFixed(1)}" y="${+(my+ny).toFixed(1)}" text-anchor="middle" font-size="10" fill="${fill}">${text}</text>`;
}

// Filled triangle path
function triPath(pts, fill='none', stroke='#3b6fd4', sw=1.5) {
    const [[x1,y1],[x2,y2],[x3,y3]]=pts;
    return `<path d="M${x1},${y1} L${x2},${y2} L${x3},${y3} Z" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}

// Q6: SSS相似 - 2つの三角形と辺の比のティックマーク
function svgQ6() {
    const L=[[22,122],[74,122],[48,54]];
    const R=[[108,125],[178,125],[143,47]];
    const parts=[
        triPath(L), triPath(R),
        // 対応する辺にティック (1,2,3本)
        sideTick(...L[0],...L[1],1), sideTick(...R[0],...R[1],1),
        sideTick(...L[1],...L[2],2), sideTick(...R[1],...R[2],2),
        sideTick(...L[2],...L[0],3), sideTick(...R[2],...R[0],3),
        // 頂点ラベル
        label(22,133,'A'), label(74,133,'B'), label(48,47,'C'),
        label(108,136,'D'), label(178,136,'E'), label(143,40,'F'),
        // 相似記号
        `<text x="90" y="95" font-size="13" fill="#8898b0" text-anchor="middle">∽</text>`,
    ];
    return svgWrap(parts.join(''), 210, 145);
}

// Q7: AA相似 - 2組の角が等しい
function svgQ7() {
    // 左△: A(20,118) B(76,118) C(34,52)
    // 右△: D(106,120) E(173,120) F(123,41) ← 1.2倍の相似
    const L=[[20,118],[76,118],[34,52]];
    const R=[[106,120],[173,120],[123,41]];
    const parts=[
        triPath(L), triPath(R),
        // 角Aと角Dのアーク (青)
        arcMark(32,118,12,23,106,0,0,'#3b6fd4'),
        arcMark(118,120,12,109,108,0,0,'#3b6fd4'),
        // 角Bと角Eのアーク (橙)
        arcMark(64,118,12,70,108,0,0,'#e67e22'),
        arcMark(161,120,12,167,110,0,0,'#e67e22'),
        // 頂点ラベル
        label(14,122,'A','end'), label(82,122,'B','start'), label(34,45,'C'),
        label(100,124,'D','end'), label(179,124,'E','start'), label(123,35,'F'),
        // 等号マーク
        `<text x="27" y="104" font-size="8" fill="#3b6fd4">=</text>`,
        `<text x="113" y="106" font-size="8" fill="#3b6fd4">=</text>`,
        `<text x="66" y="106" font-size="8" fill="#e67e22">=</text>`,
        `<text x="164" y="108" font-size="8" fill="#e67e22">=</text>`,
        `<text x="90" y="100" font-size="13" fill="#8898b0" text-anchor="middle">∽</text>`,
    ];
    return svgWrap(parts.join(''), 210, 145);
}

// Q8: 辺の比の計算 AB:DE=BC:EF → EF=?
function svgQ8() {
    // 左△ ABC: A(22,125) B(80,125) C(51,52), AB=6, BC=8
    // 右△ DEF: D(110,128) E(182,128) F(146,48), DE=9, EF=?
    const La=[[22,125],[80,125],[51,52]];
    const Ra=[[110,128],[182,128],[146,48]];
    const parts=[
        triPath(La), triPath(Ra),
        // 辺のラベル
        sideLabel(22,125,80,125,'6',  10,'#c0392b'),
        sideLabel(80,125,51,52, '8', -10,'#c0392b'),
        sideLabel(110,128,182,128,'9', 10,'#c0392b'),
        sideLabel(182,128,146,48, '?',-10,'#c0392b'),
        // 頂点
        label(16,129,'A','end'), label(86,129,'B','start'), label(51,46,'C'),
        label(104,132,'D','end'), label(188,132,'E','start'), label(146,42,'F'),
        `<text x="90" y="100" font-size="13" fill="#8898b0" text-anchor="middle">∽</text>`,
    ];
    return svgWrap(parts.join(''), 210, 148);
}

// Q9: 面積比 - 相似比2:3 → 面積比4:9
function svgQ9() {
    // 小△ (相似比2): base=44, height=50
    const Sm=[[18,130],[62,130],[40,80]];
    // 大△ (相似比3): base=66, height=75, scaled 1.5x
    const Lg=[[95,132],[161,132],[128,57]];
    const parts=[
        triPath(Sm,'rgba(59,111,212,0.15)','#3b6fd4',1.5),
        triPath(Lg,'rgba(59,111,212,0.30)','#3b6fd4',1.5),
        // 相似比ラベル
        `<text x="40" y="148" text-anchor="middle" font-size="9" fill="#3b6fd4">2k</text>`,
        `<text x="128" y="150" text-anchor="middle" font-size="9" fill="#3b6fd4">3k</text>`,
        // 面積ラベル
        `<text x="40" y="112" text-anchor="middle" font-size="10" fill="#1e2d4a" font-style="normal">S₁</text>`,
        `<text x="128" y="103" text-anchor="middle" font-size="10" fill="#1e2d4a" font-style="normal">S₂</text>`,
        // 比の表示
        `<text x="175" y="95" font-size="9" fill="#c0392b">S₁:S₂</text>`,
        `<text x="175" y="107" font-size="9" fill="#c0392b">= 4:9</text>`,
    ];
    return svgWrap(parts.join(''), 210, 155);
}

// 比例式 a:b=c:d の図（外外・内内アーク）
function svgProp(expr, outerL, outerR, innerL, innerR, outerText, innerText) {
    // outerL/R, innerL/R: x座標（比の各項の位置）
    const ty = 63;
    return svgWrap([
        // 外アーク（上）
        `<path d="M${outerL},${ty-9} Q${(outerL+outerR)/2},${ty-40} ${outerR},${ty-9}" fill="none" stroke="#c0392b" stroke-width="2"/>`,
        // 比の式テキスト
        `<text x="95" y="${ty}" text-anchor="middle" font-size="19" fill="#1e2d4a" font-weight="bold" font-style="normal">${expr}</text>`,
        // 内アーク（下）
        `<path d="M${innerL},${ty+9} Q${(innerL+innerR)/2},${ty+36} ${innerR},${ty+9}" fill="none" stroke="#3b6fd4" stroke-width="2"/>`,
        // ラベル
        `<text x="95" y="${ty-52}" text-anchor="middle" font-size="10" fill="#c0392b" font-style="normal">${outerText}</text>`,
        `<text x="${(innerL+innerR)/2}" y="${ty+56}" text-anchor="middle" font-size="10" fill="#3b6fd4" font-style="normal">${innerText}</text>`,
        // ルール
        `<text x="95" y="132" text-anchor="middle" font-size="9" fill="#5a6b85" font-style="normal">外項の積 ＝ 内項の積</text>`,
    ].join(''), 190, 138);
}

// Q10: うちうち外外 - 2:3 = x:9
function svgQ10() {
    // "2 : 3 = x : 9" @ font-size=19, center x=95
    // 各項のx座標（概算）: 2≈38, 3≈63, x≈98, 9≈123
    return svgProp('2 : 3 = x : 9', 38,123, 63,98,
        '外(2 × 9 = 18)', '内(3 × x = 18)');
}

// Q11: 比例中項 - 3:x = x:12
function svgQ11() {
    // "3 : x = x : 12" @ font-size=19, center x=95
    // 各項のx座標（概算）: 3≈35, x≈62, x≈97, 12≈128
    return svgProp('3 : x = x : 12', 35,128, 62,97,
        '外(3 × 12 = 36)', '内(x × x = x²)');
}

// ── Question data（5月23日：接線の長さ・内部の点の方べき）────
const questions = [
    {
        q: `円 $O$ の外の点 $P$ から2本の接線を引き、接点を $A$, $B$ とする。<br>
            $PA = 7$ のとき、$PB$ はいくらか？`,
        choices: ['\\(3\\)', '\\(5\\)', '\\(7\\)', '\\(14\\)'],
        correct: 2,
        exp: '接線の等長より、同じ外部の点から引いた2本の接線の長さは等しい。よって \\(PB = PA = 7\\)',
        svg: svgTangentEqual()
    },
    {
        q: `接線の等長の証明で用いる合同条件はどれか？`,
        choices: [
            '直角三角形の斜辺と他の1辺がそれぞれ等しい',
            '2辺とその夾角がそれぞれ等しい',
            '3辺がそれぞれ等しい',
            '1辺とその両端の角がそれぞれ等しい'
        ],
        correct: 0,
        exp: '接線は半径と垂直なので \\(\\angle OAP = \\angle OBP = 90°\\)（直角）。斜辺 \\(OP\\) は共通、\\(OA = OB\\)（半径）。よって<strong>直角三角形の斜辺と他の1辺</strong>で \\(\\triangle OAP \\equiv \\triangle OBP\\)',
        svg: null
    },
    {
        q: `\\(\\triangle ABC\\) の内接円が辺 $BC$, $CA$, $AB$ と接する点を $D$, $E$, $F$ とする。<br>
            $AF = 4$、$BD = 6$、$CE = 3$ のとき、$BC$ はいくらか？`,
        choices: ['\\(7\\)', '\\(8\\)', '\\(9\\)', '\\(10\\)'],
        correct: 2,
        exp: '接線の等長より \\(CD = CE = 3\\)。よって \\(BC = BD + DC = 6 + 3 = 9\\)',
        svg: svgInscribed('AF=4','BD=6','CE=3','BC=?')
    },
    {
        q: `\\(\\triangle ABC\\) の内接円と辺 $BC$, $CA$, $AB$ との接点を $D$, $E$, $F$ とする。<br>
            $AB=10$、$BC=8$、$CA=6$ のとき、$BD$ はいくらか？`,
        choices: ['\\(4\\)', '\\(5\\)', '\\(6\\)', '\\(8\\)'],
        correct: 2,
        exp: '半周長 \\(s = \\dfrac{10+8+6}{2} = 12\\)。接線の等長の公式より \\(BD = s - CA = 12 - 6 = 6\\)',
        svg: svgInscribed('AB=10','BC=8','CA=6','BD=?')
    },
    {
        q: `半径 \\(r = 5\\) の円 \\(O\\) の外の点 \\(P\\) から接線を引き、接点を \\(T\\) とする。<br>
            \\(OP = 13\\) のとき、接線の長さ \\(PT\\) はいくらか？`,
        choices: ['\\(8\\)', '\\(10\\)', '\\(12\\)', '\\(14\\)'],
        correct: 2,
        exp: '\\(OT \\perp PT\\) より三平方の定理を使うと \\(PT^2 = OP^2 - OT^2 = 169 - 25 = 144\\)。よって \\(PT = 12\\)',
        svg: svgTangentRight('OP=13','r=5','PT=?')
    },
    {
        q: `半径 \\(r = 8\\) の円 \\(O\\) の外の点 \\(P\\) から接線 \\(PA\\) を引くと \\(PA = 6\\)。<br>
            \\(OP\\) はいくらか？`,
        choices: ['\\(8\\)', '\\(10\\)', '\\(12\\)', '\\(14\\)'],
        correct: 1,
        exp: '\\(OA \\perp PA\\) より \\(OP^2 = PA^2 + OA^2 = 36 + 64 = 100\\)。よって \\(OP = 10\\)',
        svg: svgTangentRight('OP=?','r=8','PA=6')
    },
    {
        q: `円内の点 \\(P\\) を通る2弦 \\(AB\\), \\(CD\\) において \\(PA = 3\\)、\\(PB = 8\\)、\\(PC = 4\\)。<br>
            \\(PD\\) はいくらか？`,
        choices: ['\\(4\\)', '\\(5\\)', '\\(6\\)', '\\(8\\)'],
        correct: 2,
        exp: '方べきの定理（内部）より \\(PA \\cdot PB = PC \\cdot PD\\)。\\(3 \\times 8 = 4 \\times PD\\) より \\(PD = 6\\)',
        svg: svgInternalChords('PA=3','PB=8','PC=4','PD=?')
    },
    {
        q: `円内の点 \\(P\\) を通る2弦 \\(AB\\), \\(CD\\) において \\(PA = 2\\)、\\(PB = 9\\)。<br>
            \\(PC \\cdot PD\\) はいくらか？`,
        choices: ['\\(11\\)', '\\(14\\)', '\\(16\\)', '\\(18\\)'],
        correct: 3,
        exp: '方べきの定理より \\(PC \\cdot PD = PA \\cdot PB = 2 \\times 9 = 18\\)（弦の向きによらず積は一定）',
        svg: svgInternalChords('PA=2','PB=9','PC','PD')
    },
    {
        q: `内部の点の方べきの定理（\\(PA \\cdot PB = PC \\cdot PD\\)）の証明で使う定理はどれか？`,
        choices: [
            '接弦定理',
            '円周角の定理（同じ弧に対する円周角は等しい）',
            '中心角は円周角の2倍',
            '三平方の定理'
        ],
        correct: 1,
        exp: '\\(\\triangle PAC \\sim \\triangle PDB\\) を示すために、弧 \\(BC\\) に対する円周角 \\(\\angle PAC = \\angle PDB\\) を使う。これは<strong>円周角の定理</strong>による。',
        svg: svgInternalChords()
    },
    {
        q: `半径 \\(r = 6\\)、\\(OP = 4\\)（内部）のとき、\\(PA \\cdot PB\\) はいくらか？`,
        choices: ['\\(16\\)', '\\(20\\)', '\\(32\\)', '\\(36\\)'],
        correct: 1,
        exp: '点 \\(P\\) が円の内部のとき \\(PA \\cdot PB = r^2 - d^2 = 6^2 - 4^2 = 36 - 16 = 20\\)',
        svg: svgInternalChords('PA','PB','PC','PD')
    },
    {
        q: `円において、弧ABに対する中心角 \\(\\angle AOB = 120°\\) のとき、
            弧ABに対する円周角 \\(\\angle ACB\\) はいくらか？`,
        choices: ['\\(120°\\)', '\\(240°\\)', '\\(60°\\)', '\\(30°\\)'],
        correct: 2,
        exp: '円周角の定理より、円周角は中心角の半分。よって \\(\\angle ACB = \\dfrac{120°}{2} = 60°\\)',
        svg: svgQ2()
    },
    {
        q: `同じ弧ABに対する円周角について、正しいものはどれか？`,
        choices: [
            '角の大きさはすべて等しい',
            '角の大きさは中心角の2倍になる',
            '弧の長さに等しい',
            '半径によって変わる'
        ],
        correct: 0,
        exp: '円周角の定理より、同じ弧に対する円周角はすべて等しい。',
        svg: svgQ3()
    },
];

// ── State ────────────────────────────────────────────────────
let current = 0, score = 0, answered = false;
let combo = 0, maxCombo = 0, points = 0;
const POINTS_BASE = 100;

const questionEl  = document.getElementById('question');
const figureEl    = document.getElementById('figure');
const choicesEl   = document.getElementById('choices');
const feedbackEl  = document.getElementById('feedback');
const nextBtn     = document.getElementById('next-btn');
const currentEl   = document.getElementById('current');
const totalEl     = document.getElementById('total');
const progressEl  = document.getElementById('progress-fill');
const quizWrap    = document.getElementById('quiz-wrap');
const resultWrap  = document.getElementById('result-wrap');
const scoreEl     = document.getElementById('score');
const totalREl    = document.getElementById('total-r');
const resultEmoji = document.getElementById('result-emoji');
const cardEl      = document.getElementById('card');

const LABELS = ['ア', 'イ', 'ウ', 'エ'];
totalEl.textContent  = questions.length;
totalREl.textContent = questions.length;

// ── Inject Game HUD ───────────────────────────────────────────
const gameHUD = document.createElement('div');
gameHUD.id = 'game-hud';
gameHUD.innerHTML = `<span id="combo-badge"></span><span id="points-display">0 pt</span>`;
quizWrap.insertBefore(gameHUD, quizWrap.firstChild);

const pointsDisplay = document.getElementById('points-display');
const comboBadge    = document.getElementById('combo-badge');

// Inject extra result elements
const resultRankEl = document.createElement('div');
resultRankEl.id = 'result-rank';
resultWrap.insertBefore(resultRankEl, resultWrap.querySelector('h2'));

const resultPointsEl = document.createElement('p');
resultPointsEl.className = 'result-points';

const resultComboEl = document.createElement('p');
resultComboEl.className = 'result-maxcombo';

const resultBtns = resultWrap.querySelector('.result-btns');
resultWrap.insertBefore(resultPointsEl, resultBtns);
resultWrap.insertBefore(resultComboEl, resultBtns);

// ── Audio ─────────────────────────────────────────────────────
function playSound(type) {
    try {
        const AudioCtx = window.AudioContext ?? /** @type {typeof AudioContext} */ (window['webkitAudioContext']);
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        const t = ctx.currentTime;

        if (type === 'correct') {
            osc.frequency.setValueAtTime(523, t);
            osc.frequency.setValueAtTime(659, t + 0.09);
            osc.frequency.setValueAtTime(784, t + 0.19);
            gain.gain.setValueAtTime(0.22, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
            osc.start(t); osc.stop(t + 0.5);
        } else if (type === 'combo') {
            osc.frequency.setValueAtTime(659, t);
            osc.frequency.setValueAtTime(880, t + 0.08);
            osc.frequency.setValueAtTime(1047, t + 0.17);
            osc.frequency.setValueAtTime(1319, t + 0.27);
            gain.gain.setValueAtTime(0.25, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
            osc.start(t); osc.stop(t + 0.55);
        } else {
            osc.frequency.setValueAtTime(370, t);
            osc.frequency.setValueAtTime(220, t + 0.16);
            gain.gain.setValueAtTime(0.18, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
            osc.start(t); osc.stop(t + 0.38);
        }
    } catch (e) { /* AudioContext not available */ }
}

// ── Confetti ──────────────────────────────────────────────────
function launchConfetti(n = 24) {
    const colors = ['#3b6fd4','#f59e0b','#10b981','#ef4444','#8b5cf6','#ec4899','#06b6d4'];
    for (let i = 0; i < n; i++) {
        const p = document.createElement('div');
        p.className = 'confetti-piece';
        const drift  = ((Math.random() - 0.5) * 140).toFixed(0);
        const spin   = (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 360);
        const dur    = (0.9 + Math.random() * 0.55).toFixed(2);
        const br     = Math.random() > 0.45 ? '50%' : '2px';
        const w      = (7 + Math.random() * 7).toFixed(0);
        p.style.cssText = [
            `left:${15 + Math.random() * 70}%`,
            `width:${w}px`,
            `height:${w}px`,
            `background:${colors[Math.floor(Math.random() * colors.length)]}`,
            `--drift:${drift}px`,
            `--spin:${spin}deg`,
            `--dur:${dur}s`,
            `--br:${br}`,
            `animation-delay:${(Math.random() * 0.2).toFixed(2)}s`,
        ].join(';');
        document.body.appendChild(p);
        setTimeout(() => p.remove(), (parseFloat(dur) + 0.4) * 1000);
    }
}

// ── Combo Badge ───────────────────────────────────────────────
const COMBO_MSGS = {
    2: '✨ 2コンボ！',
    3: '🔥 3コンボ！！',
    4: '⚡ 4コンボ！！！',
    5: '💥 5コンボ！！！',
};
function showComboBadge(n) {
    const msg = n >= 5 ? `💥 ${n}コンボ！！！` : COMBO_MSGS[n];
    comboBadge.textContent = msg;
    comboBadge.classList.remove('visible');
    void comboBadge.offsetWidth; // reflow to restart animation
    comboBadge.classList.add('visible');
}

// ── Points update ──────────────────────────────────────────────
function addPoints(earned) {
    points += earned;
    pointsDisplay.textContent = `${points} pt`;
    pointsDisplay.classList.remove('bump');
    void pointsDisplay.offsetWidth;
    pointsDisplay.classList.add('bump');
}

// ── Show question ─────────────────────────────────────────────
function showQuestion() {
    answered = false;
    feedbackEl.innerHTML = '';
    feedbackEl.className = '';
    nextBtn.style.display = 'none';
    currentEl.textContent = current + 1;
    progressEl.style.width = (current / questions.length * 100) + '%';

    const q = questions[current];
    questionEl.innerHTML = q.q;
    figureEl.innerHTML   = q.svg || '';

    // Card slide-in animation
    cardEl.classList.remove('slide-in');
    void cardEl.offsetWidth;
    cardEl.classList.add('slide-in');

    choicesEl.innerHTML = '';
    q.choices.forEach((c, i) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.style.animationDelay = `${i * 0.055}s`;
        btn.innerHTML = `<span class="choice-label">${LABELS[i]}</span><span class="choice-text">${c}</span>`;
        btn.addEventListener('click', () => pick(i));
        choicesEl.appendChild(btn);
    });

    MathJax.typesetPromise([questionEl, choicesEl]);
}

// ── Handle answer ─────────────────────────────────────────────
function pick(index) {
    if (answered) return;
    answered = true;

    const q = questions[current];
    const btns = choicesEl.querySelectorAll('.choice-btn');
    btns.forEach((b, i) => {
        b.disabled = true;
        if (i === q.correct) b.classList.add('correct');
        else if (i === index) b.classList.add('wrong');
    });

    const ok = index === q.correct;

    if (ok) {
        score++;
        combo++;
        maxCombo = Math.max(maxCombo, combo);

        const multiplier = Math.min(combo, 5);
        const earned     = POINTS_BASE * multiplier;
        addPoints(earned);

        if (combo >= 2) {
            playSound('combo');
            showComboBadge(combo);
        } else {
            playSound('correct');
        }
        launchConfetti(combo >= 3 ? 42 : 20);

        cardEl.classList.remove('correct-pop');
        void cardEl.offsetWidth;
        cardEl.classList.add('correct-pop');
        setTimeout(() => cardEl.classList.remove('correct-pop'), 320);

        const multTag = multiplier > 1
            ? `<span class="combo-mult">×${multiplier}</span>` : '';
        feedbackEl.className = 'fb-correct';
        feedbackEl.innerHTML = `
            <div class="fb-head">○ 正解！ <span style="font-size:.85em;font-weight:400">+${earned}pt${multTag}</span></div>
            <div class="fb-exp">${q.exp}</div>`;
    } else {
        combo = 0;
        playSound('wrong');

        cardEl.classList.remove('shake');
        void cardEl.offsetWidth;
        cardEl.classList.add('shake');
        setTimeout(() => cardEl.classList.remove('shake'), 450);

        feedbackEl.className = 'fb-wrong';
        feedbackEl.innerHTML = `
            <div class="fb-head">✕ 不正解</div>
            <div class="fb-exp">${q.exp}</div>`;
    }

    MathJax.typesetPromise([feedbackEl]);
    nextBtn.textContent   = current < questions.length - 1 ? '次の問題 →' : '結果を見る';
    nextBtn.style.display = 'block';
}

// ── Navigation ────────────────────────────────────────────────
nextBtn.addEventListener('click', () => {
    current++;
    if (current < questions.length) {
        showQuestion();
    } else {
        progressEl.style.width = '100%';
        quizWrap.style.display  = 'none';
        resultWrap.style.display = 'flex';
        scoreEl.textContent = score;

        // Rank
        const pct = score / questions.length;
        let rank, rankClass;
        if      (pct >= 0.9) { rank = 'S'; rankClass = 'rank-S'; }
        else if (pct >= 0.7) { rank = 'A'; rankClass = 'rank-A'; }
        else if (pct >= 0.5) { rank = 'B'; rankClass = 'rank-B'; }
        else                  { rank = 'C'; rankClass = 'rank-C'; }

        resultRankEl.textContent = rank;
        resultRankEl.className   = rankClass;

        resultPointsEl.textContent = `${points} pt 獲得！`;
        resultComboEl.textContent  = maxCombo >= 2 ? `最大コンボ: ${maxCombo}` : '';
        resultEmoji.textContent    = pct >= 0.8 ? '🎉' : pct >= 0.6 ? '👍' : '📖';

        if (pct >= 0.8) launchConfetti(55);
    }
});

document.getElementById('retry-btn').addEventListener('click', () => {
    current = 0; score = 0; combo = 0; maxCombo = 0; points = 0;
    pointsDisplay.textContent = '0 pt';
    quizWrap.style.display  = 'block';
    resultWrap.style.display = 'none';
    showQuestion();
});

showQuestion();
