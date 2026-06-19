# 演習問題：パスカルの定理の拡張

---

## 問題 1：星型の六角形

円周上に $6$ 点 $A, B, C, D, E, F$ がある（この順に並んでいるとは限らない）。
点の位置はそのままに，$A \to C \to E \to B \to D \to F \to A$ の順に結んで六角形をつくる（星型）。
この六角形の $3$ 組の対辺の延長線の交点を $P', Q', R'$ とするとき，$3$ 点 $P', Q', R'$ は一直線上にあることを証明せよ。

<figure style="margin:1em auto;max-width:300px;">
<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:#0f1f10;border-radius:8px;">
  <circle cx="160" cy="160" r="100" fill="none" stroke="#3a6a3a" stroke-width="1.5"/>
  <line x1="177.4" y1="61.5"  x2="254"   y2="125.8" stroke="#D85A30" stroke-width="2"/>
  <line x1="142.6" y1="258.5" x2="63.4"  y2="185.9" stroke="#D85A30" stroke-width="2"/>
  <line x1="254"   y1="125.8" x2="224.3" y2="236.6" stroke="#5b9dd9" stroke-width="2"/>
  <line x1="63.4"  y1="185.9" x2="110"   y2="73.4"  stroke="#5b9dd9" stroke-width="2"/>
  <line x1="224.3" y1="236.6" x2="142.6" y2="258.5" stroke="#5ac87a" stroke-width="2"/>
  <line x1="110"   y1="73.4"  x2="177.4" y2="61.5"  stroke="#5ac87a" stroke-width="2"/>
  <circle cx="177.4" cy="61.5"  r="4" fill="#f2ecce"/><text x="181"  y="44"  text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">A</text>
  <circle cx="254"   cy="125.8" r="4" fill="#f2ecce"/><text x="271"  y="122" text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">C</text>
  <circle cx="224.3" cy="236.6" r="4" fill="#f2ecce"/><text x="236"  y="252" text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">E</text>
  <circle cx="142.6" cy="258.5" r="4" fill="#f2ecce"/><text x="140"  y="276" text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">B</text>
  <circle cx="63.4"  cy="185.9" r="4" fill="#f2ecce"/><text x="46"   y="191" text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">D</text>
  <circle cx="110"   cy="73.4"  r="4" fill="#f2ecce"/><text x="101"  y="58"  text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">F</text>
  <line x1="18" y1="300" x2="40" y2="300" stroke="#D85A30" stroke-width="2"/><text x="45" y="305" font-size="11" fill="#ccc" font-family="sans-serif">AC↔BD</text>
  <line x1="118" y1="300" x2="140" y2="300" stroke="#5b9dd9" stroke-width="2"/><text x="145" y="305" font-size="11" fill="#ccc" font-family="sans-serif">CE↔DF</text>
  <line x1="218" y1="300" x2="240" y2="300" stroke="#5ac87a" stroke-width="2"/><text x="245" y="305" font-size="11" fill="#ccc" font-family="sans-serif">EB↔FA</text>
</svg>
<figcaption style="text-align:center;font-size:0.8em;color:#7aaa7a;margin-top:0.4em;">星型に結んだ六角形 $A \to C \to E \to B \to D \to F \to A$</figcaption>
</figure>

<details>
<summary>ヒントを見る</summary>

<details>
<summary>ヒント ①：対辺ペアの確認</summary>

結ぶ順 $(A, C, E, B, D, F)$ に「$1$ つ開けて取る」ルールを適用すると，$3$ 組の対辺ペアはどうなるか。

- 辺 $AC$ の対辺は？
- 辺 $CE$ の対辺は？
- 辺 $EB$ の対辺は？

</details>

<details>
<summary>ヒント ②：補助三角形の設定</summary>

もとの六角形の証明と同様に，交互の辺（$AC$，$EB$ の次の辺，$\ldots$）の延長から補助三角形 $\triangle X'Y'Z'$ を設定するとどうなるか。

</details>

<details>
<summary>ヒント ③：メネラウスの定理の適用</summary>

$\triangle X'Y'Z'$ を横切る $3$ 本の直線（対辺同士のペアから引き出される直線）それぞれにメネラウスの定理を適用し，$3$ つの等式を立てる。

</details>

<details>
<summary>ヒント ④：積の整理と方べきの定理</summary>

$3$ 式の積を頂点 $X', Y', Z'$ ごとにまとめると，各カタマリは「円外の点から引いた $2$ 本の割線の長さの積」の比になる。六角形が円に内接することから，方べきの定理でそれぞれのカタマリが $1$ になることを示す。

</details>

<details>
<summary>ヒント ⑤：結論へ</summary>

積が $1 \times 1 \times 1 = 1$ となるので，メネラウスの定理の逆より $P', Q', R'$ は一直線上にある。

</details>

</details>

<details>
<summary>解答</summary>

結ぶ順 $(A,C,E,B,D,F)$ での $3$ 組の対辺ペアは

$$AC \leftrightarrow BD, \quad CE \leftrightarrow DF, \quad EB \leftrightarrow FA$$

であり，$P' = AC \cap BD$，$Q' = CE \cap DF$，$R' = EB \cap FA$ とする。

$X' = AC \cap EB$，$Y' = EB \cap CE \cdot\ldots$ として補助三角形 $\triangle X'Y'Z'$ を設定すると，残りの $3$ 本の直線 $BDP'$，$DFQ'$，$FAR'$ がこれを横切る。メネラウスの定理を各直線に $1$ 回ずつ適用し，$3$ 式の積を頂点ごとに整理すると

$$\frac{X'P'}{P'Z'} \cdot \frac{Z'Q'}{Q'Y'} \cdot \frac{Y'R'}{R'X'} = \left(\frac{\cdot}{\cdot}\right)_{\!X'} \cdot \left(\frac{\cdot}{\cdot}\right)_{\!Y'} \cdot \left(\frac{\cdot}{\cdot}\right)_{\!Z'}$$

各カタマリは円に内接することと方べきの定理から $= 1$ となり，積 $= 1$。よってメネラウスの定理の逆より $P', Q', R'$ は一直線上にある。$\blacksquare$

</details>

---

## 問題 2：五角形への退化（$F \to A$ の極限）

円に内接する五角形 $ABCDE$ において，

$$P = AB \cap DE, \quad Q = BC \cap EA, \quad R = CD \cap (\text{点 } A \text{ における接線})$$

とするとき，$3$ 点 $P, Q, R$ は一直線上にあることを証明せよ。

<figure style="margin:1em auto;max-width:300px;">
<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:#0f1f10;border-radius:8px;">
  <circle cx="160" cy="160" r="100" fill="none" stroke="#3a6a3a" stroke-width="1.5"/>
  <line x1="160"   y1="60"  x2="246.6" y2="110" stroke="#D85A30" stroke-width="2"/>
  <line x1="160"   y1="260" x2="73.4"  y2="210" stroke="#D85A30" stroke-width="2"/>
  <line x1="246.6" y1="110" x2="246.6" y2="210" stroke="#5b9dd9" stroke-width="2"/>
  <line x1="73.4"  y1="210" x2="160"   y2="60"  stroke="#5b9dd9" stroke-width="2"/>
  <line x1="246.6" y1="210" x2="160"   y2="260" stroke="#5ac87a" stroke-width="2"/>
  <line x1="30"    y1="60"  x2="290"   y2="60"  stroke="#5ac87a" stroke-width="2" stroke-dasharray="5 4"/>
  <circle cx="160"   cy="60"  r="5" fill="#f2ecce"/><text x="160"   y="46"  text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">A</text>
  <circle cx="246.6" cy="110" r="4" fill="#f2ecce"/><text x="262"   y="113" text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">B</text>
  <circle cx="246.6" cy="210" r="4" fill="#f2ecce"/><text x="262"   y="214" text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">C</text>
  <circle cx="160"   cy="260" r="4" fill="#f2ecce"/><text x="160"   y="278" text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">D</text>
  <circle cx="73.4"  cy="210" r="4" fill="#f2ecce"/><text x="58"    y="214" text-anchor="middle" font-size="14" fill="#f2ecce" font-family="serif">E</text>
  <text x="260" y="52" font-size="11" fill="#5ac87a" font-family="sans-serif">Aの接線</text>
</svg>
<figcaption style="text-align:center;font-size:0.8em;color:#7aaa7a;margin-top:0.4em;">五角形 $ABCDE$ ＋ 点 $A$ における接線（緑破線）</figcaption>
</figure>

<details>
<summary>ヒントを見る</summary>

<details>
<summary>ヒント 1：六角形との対応を確認する</summary>

六角形 $ABCDEF$ で点 $F$ を点 $A$ に限りなく近づけると（$F \to A$），

- 直線 $EF$ は弦 $EA$ に近づく
- 直線 $FA$ は $2$ 点がほぼ重なるため，点 $A$ における**接線**に近づく

これにより対辺ペアは次のように変わる：

| もとの対辺ペア | $F \to A$ 後 |
|:---:|:---:|
| $AB \leftrightarrow DE$ | $AB \leftrightarrow DE$（変化なし） |
| $BC \leftrightarrow EF$ | $BC \leftrightarrow EA$ |
| $CD \leftrightarrow FA$ | $CD \leftrightarrow$ 点 $A$ の接線 |

</details>

<details>
<summary>ヒント 2：補助三角形の変化を確認する</summary>

六角形での補助三角形は $X = AB \cap CD$，$Y = CD \cap EF$，$Z = EF \cap AB$ であった。

$F \to A$ とすると，

- $X = AB \cap CD$：変化なし
- $Y = CD \cap EF \;\to\; Y = CD \cap EA$
- $Z = EF \cap AB$：$EF$ も $AB$ もともに点 $A$ を通るため，$Z = A$（補助三角形の頂点が点 $A$ と一致する）

</details>

<details>
<summary>ヒント 3：メネラウスの定理の適用</summary>

$Z = A$ を代入しても，$\triangle XYZ$ を横切る $3$ 本の直線 $BCQ$，$DEP$ についてのメネラウスの定理の式（$= 1$）はそのまま成り立つ。

$$\frac{XB}{BA} \cdot \frac{AQ}{QY} \cdot \frac{YC}{CX} = 1, \qquad \frac{XP}{PA} \cdot \frac{AE}{EY} \cdot \frac{YD}{DX} = 1$$

</details>

<details>
<summary>ヒント 4：頂点 $A$（= $Z$）まわりの処理</summary>

六角形の Step 3 では，頂点 $Z$ から $2$ 本の割線を引いて方べきの定理を使った。

しかし $Z = A$ は円**周上**の点なので方べきの値は $0$ となり，そのままでは使えない。

$\Rightarrow$ 頂点 $A$ まわりのカタマリは，**接弦定理**（接線と弦のなす角 $=$ 弦に対する円周角）を使って処理する。

</details>

</details>

<details>
<summary>解答</summary>

六角形 $ABCDEF$ での証明を $F \to A$ の極限として解釈する。

$F \to A$ とすると対辺ペアは $AB \leftrightarrow DE$，$BC \leftrightarrow EA$，$CD \leftrightarrow$（$A$ の接線）に変わり，補助三角形の頂点は $X = AB \cap CD$，$Y = CD \cap EA$，$Z = A$ となる。

### Step 1（メネラウスの定理）

$\triangle XYA$ を横切る直線 $BCQ$ および $DEP$ にメネラウスの定理を適用する：

$$\frac{XB}{BA} \cdot \frac{AQ}{QY} \cdot \frac{YC}{CX} = 1, \qquad \frac{XP}{PA} \cdot \frac{AE}{EY} \cdot \frac{YD}{DX} = 1$$

### Step 2（積の整理）

$2$ 式（と，接線 $AR$ についての第 $3$ 式）の積を頂点 $X, Y, A$ ごとにカタマリへ整理する。

### Step 3（各カタマリ $= 1$）

- 頂点 $X$（円外）：方べきの定理 $XA \cdot XB = XC \cdot XD$
- 頂点 $Y$（円外）：方べきの定理 $YC \cdot YD = YE \cdot YA$
- 頂点 $A$（円周上）：方べきの定理は使えない $\Rightarrow$ **接弦定理**を用いて，$A$ まわりのカタマリ $= 1$ を示す

### 結論

積 $= 1 \times 1 \times 1 = 1$ より，メネラウスの定理の逆から $P, Q, R$ は一直線上にある。$\blacksquare$

</details>
