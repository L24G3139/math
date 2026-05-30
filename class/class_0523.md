# 接線の長さと方べきの定理

## 目標

- 接線の長さを求められる
- 方べきの定理を用いて、円の弦の長さを求められる

---

## 接線の長さ

> **定理**
> 円の外部の1点 $P$ からその円に引いた2本の接線において、点 $P$ から2つの接点 $S$, $T$ までの距離が等しい。すなわち、$PS = PT$

### 穴埋め証明

円の中心を $O$ とする。$\triangle POS$ と $[ \quad \text{ア} \quad ]$ において考える。

1. **接線の性質**

   直線 $PS$, $PT$ は円 $O$ の接線であり、接点を通る半径は接線と垂直に交わるから、
   $$\angle PSO = [ \quad \text{イ} \quad ] = 90^\circ \quad \cdots (1)$$

2. **辺の比較**

   - 共通の斜辺：$OP = OP \quad \cdots (2)$
   - 円の半径：$OS = [ \quad \text{ウ} \quad ] \quad \cdots (3)$

3. **合同の判定・結論**

   $(1)(2)(3)$ より、$[ \quad \text{エ} \quad ]$ がそれぞれ等しいので、
   $$\triangle POS \equiv [ \quad \text{ア} \quad ]$$
   よって、
   $$PS = [ \quad \text{オ} \quad ]$$

<details>
<summary>解答を確認する</summary>

- ア：$\triangle POT$
- イ：$\angle PTO$
- ウ：$OT$（円の半径は等しい）
- エ：直角三角形の斜辺と他の１辺
- オ：$PT$

</details>

---

### まとめ

- **垂直の原則**：円の接線は、その接点を通る半径と垂直に交わる。
- **等長の原則**：円の外の１点からその円に引いた２本の接線の長さは等しい。
- **対称性の原則**：円の外の点と中心を結ぶ線分は、２本の接線がなす角を二等分し、接点同士を結ぶ弦を垂直に二等分する。

---

### 演習問題①

<details>
<summary>問題を開く</summary>

**問1　接線の長さ**

円 $O$ の外にある点 $P$ から円 $O$ に２つの接線を引き、その接点をそれぞれ $A$, $B$ とする。$PA = 8$ であるとき、$PB$ の長さを求めよ。

<details>
<summary>答えを見る</summary>

$PB = 8$

</details>

---

**問2　内接円と接線の長さ**

$\triangle ABC$ の内接円が辺 $BC$, $CA$, $AB$ と接する点をそれぞれ $D$, $E$, $F$ とする。$AF = 3$、$BD = 5$、$CE = 4$ であるとき、辺 $BC$ の長さと $\triangle ABC$ の周の長さを求めよ。

<details>
<summary>答えを見る</summary>

接線の等長より $AF = AE = 3$、$BF = BD = 5$、$CD = CE = 4$

$$BC = BD + DC = 5 + 4 = 9$$

$$\text{周の長さ} = 2(AF + BD + CE) = 2(3 + 5 + 4) = 24$$

</details>

---

**問3　内接円と接線の長さ**

$\triangle ABC$ において内接円と辺 $BC$, $CA$, $AB$ との接点をそれぞれ $D$, $E$, $F$ とする。$AB = 7$、$BC = 8$、$CA = 5$ であるとき、$BD$ の長さを求めよ。

<details>
<summary>答えを見る</summary>

$$s = \frac{AB + BC + CA}{2} = 10, \quad BD = s - CA = 10 - 5 = 5$$

</details>

</details>

---

## 方べきの定理

> **定理①（２割線）**
> 点 $P$ を通る２直線が、円 $O$ とそれぞれ２点 $A$, $B$ と２点 $C$, $D$ で交わるとき、
> $$PA \cdot PB = PC \cdot PD$$

> **定理②（接線と割線）**
> 点 $P$ を通る２直線の一方が円 $O$ と２点 $A$, $B$ で交わり、もう一方が点 $T$ で接するとき、
> $$PA \cdot PB = PT^2$$

### 穴埋め証明（定理①）

$\triangle PAC$ と $[ \quad \text{カ} \quad ]$ において考える。

1. **対頂角**

   直線 $AB$ と $CD$ の交点 $P$ において、
   $$\angle APC = [ \quad \text{キ} \quad ] \quad \cdots (1)$$

2. **円周角の定理**

   同じ弧 $CB$ に対する円周角は等しいから、
   $$\angle PAC = [ \quad \text{ク} \quad ] \quad \cdots (2)$$

3. **相似の判定・結論**

   $(1)(2)$ より、$[ \quad \text{ケ} \quad ]$ がそれぞれ等しいので、
   $$\triangle PAC \sim [ \quad \text{カ} \quad ]$$
   対応する辺の比は等しいから、
   $$PA : [ \quad \text{コ} \quad ] = PC : PB$$
   よって、
   $$PA \cdot PB = [ \quad \text{サ} \quad ]$$

<details>
<summary>解答を確認する</summary>

- カ：$\triangle PDB$
- キ：$\angle BPD$（対頂角）
- ク：$\angle PDB$（同弧に対する円周角）
- ケ：２組の角
- コ：$PD$
- サ：$PC \cdot PD$

</details>

---

### 演習問題②

<details>
<summary>問題を開く</summary>

**問1　方べきの定理（数値計算・外部）**

半径 $r = 5$ の円 $O$ がある。中心 $O$ からの距離が $OP = 8$ である円の外部の点 $P$ を通る直線が、円 $O$ と２点 $A$, $B$ で交わるとき、$PA \cdot PB$ の値を求めよ。

<details>
<summary>答えを見る</summary>

$$PA \cdot PB = d^2 - r^2 = 8^2 - 5^2 = 64 - 25 = 39$$

</details>

---

**問2　方べきの定理（数値計算・内部）**

半径 $r = 6$ の円 $O$ の内部に点 $P$ があり、$OP = 2$ である。点 $P$ で交わる２つの弦 $AB$, $CD$ を引くとき、$PA \cdot PB$ の値を求めよ。

<details>
<summary>答えを見る</summary>

$$PA \cdot PB = r^2 - d^2 = 6^2 - 2^2 = 36 - 4 = 32$$

方べきの定理より向きによらず積は一定なので、$PC \cdot PD = 32$ も同じ。

</details>

---

**問3　接線の長さと方べきの定理の応用**

中心 $O$、半径 $r = 4$ の円の外部に点 $P$ があり、$OP = 6$ である。

(1) 接線の接点を $T$ とするとき、$PT$ を求めよ。  
(2) 割線が円と２点 $A$, $B$ で交わるとき、$PA \cdot PB$ の値を求めよ。

<details>
<summary>答えを見る</summary>

(1) $PT^2 = 6^2 - 4^2 = 20$ より $PT = 2\sqrt{5}$

(2) $PA \cdot PB = PT^2 = 20$

</details>

</details>

---

## 本時の振り返り

まずは自分の言葉でまとめてから確認しよう！

- 接線の長さについてどんな等式が成り立ったか？
- 方べきの定理の２つの表現を言えるか？

<details>
<summary>まとめを確認する</summary>

**円の接線：** 円の外からの２本の接線の長さは等しい。証明には「直角三角形の合同条件（斜辺と他の１辺）」を利用する。

**方べきの定理：** 交点 $P$ から各交点までの積は常に一定（$PA \cdot PB = PC \cdot PD$）。証明には「三角形の相似（２組の角が等しい）」を利用する。

</details>
