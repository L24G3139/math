# 方べきの定理（穴埋め演習）

## 前回の復習

本時の証明を円滑に進めるため、導入部分で以下の既習事項を確認します。

[前回の復習（クイズ形式）を開く](../review.html)

---

## 目標

- 方べきの定理の証明の流れを説明できる
- 外部の点・内部の点・接線と割線の３つの場合を区別できる
- $PA \cdot PB = |d^2 - r^2|$ を導くことができる

---

## 方べきの定理①（外部の点・2割線）

> **定理①**
> 円の外部の点 $P$ を通る２直線が、円 $O$ とそれぞれ２点 $A$, $B$ および２点 $C$, $D$ で交わるとき（$A$, $C$ は $P$ に近い方）、
> $$PA \cdot PB = PC \cdot PD$$

### 穴埋め証明①

$\triangle PAC$ と $[ \quad \text{ア} \quad ]$ において考える。

1. **共通角**

   点 $P$ は２直線の交点であり、角 $P$ は共通だから、
   $$\angle APC = [ \quad \text{イ} \quad ] \quad \cdots (1)$$

2. **内接四角形の性質**

   ４点 $A$, $B$, $D$, $C$ は同一円周上にあるため、四角形 $ACDB$ は円 $O$ に $[ \quad \text{ウ} \quad ]$ している。
   円に $[ \quad \text{ウ} \quad ]$ する四角形の性質より、
   $$\angle PAC = [ \quad \text{エ} \quad ] \quad \cdots (2)$$

3. **相似の判定・結論**

   $(1)(2)$ より $[ \quad \text{オ} \quad ]$ がそれぞれ等しいから、
   $$\triangle PAC \sim [ \quad \text{ア} \quad ]$$
   対応する辺の比より $PA : [ \quad \text{カ} \quad ] = PC : PB$、よって、
   $$PA \cdot PB = [ \quad \text{キ} \quad ]$$

<details>
<summary>解答を確認する</summary>

- ア：$\triangle PDB$
- イ：$\angle BPD$（共通角・対頂角）
- ウ：内接
- エ：$\angle PDB$（内接四角形の対角の外角）
- オ：２組の角
- カ：$PD$
- キ：$PC \cdot PD$

</details>

---

## 方べきの定理②（接線と割線）

> **定理②**
> 円の外部の点 $P$ から接線 $PT$ と割線 $PAB$（$A$ は $P$ に近い方）を引くとき、
> $$PA \cdot PB = PT^2$$

### 穴埋め証明②

$\triangle PTA$ と $[ \quad \text{ク} \quad ]$ において考える。

1. **共通角**

   点 $P$ を起点とする角は共通だから、
   $$\angle TPA = [ \quad \text{ケ} \quad ] \quad \cdots (1)$$

2. **接弦定理**

   直線 $PT$ は点 $T$ を接点とする接線であり、$TA$ はその接点を通る弦である。
   $[ \quad \text{コ} \quad ]$ より、接線 $PT$ と弦 $TA$ の作る角は弧 $TA$ に対する円周角に等しいから、
   $$\angle PTA = [ \quad \text{サ} \quad ] \quad \cdots (2)$$

3. **相似の判定・結論**

   $(1)(2)$ より $[ \quad \text{シ} \quad ]$ がそれぞれ等しいから、
   $$\triangle PTA \sim [ \quad \text{ク} \quad ]$$
   対応する辺の比より $PT : PB = [ \quad \text{ス} \quad ] : PT$、よって、
   $$PA \cdot PB = [ \quad \text{セ} \quad ]$$

<details>
<summary>解答を確認する</summary>

- ク：$\triangle PBT$
- ケ：$\angle BPT$（共通角）
- コ：接弦定理
- サ：$\angle PBT$（接弦定理による等角）
- シ：２組の角
- ス：$PA$
- セ：$PT^2$

</details>

---

## 方べきの定理の本質：$PA \cdot PB = |d^2 - r^2|$

> **定理③**
> 円 $O$ の半径を $r$、中心から点 $P$ までの距離を $d = OP$ とする。点 $P$ を通る直線が円と２点 $A$, $B$ で交わるとき、
> $$PA \cdot PB = |d^2 - r^2|$$

### 穴埋め証明③

中心 $O$ から弦 $AB$ に下ろした垂線の足を $M$ とする。
円の性質より $OM \perp AB$ かつ $[ \quad \text{ソ} \quad ]$。

1. **外部の場合（$d > r$）**

   点の順序 $P \to A \to M \to B$ より、
   $$PA = PM - AM, \quad PB = [ \quad \text{タ} \quad ]$$
   積をとると（和と差の積）、
   $$PA \cdot PB = PM^2 - [ \quad \text{チ} \quad ] \quad \cdots (1)$$

2. **三平方の定理の適用**

   $\triangle OMP$：$PM^2 = OP^2 - OM^2 = [ \quad \text{ツ} \quad ] - OM^2 \quad \cdots (2)$

   $\triangle OMA$：$AM^2 = OA^2 - OM^2 = [ \quad \text{テ} \quad ] - OM^2 \quad \cdots (3)$

3. **結論**

   $(2)(3)$ を $(1)$ に代入すると $OM^2$ が消えて、
   $$PA \cdot PB = [ \quad \text{ツ} \quad ] - [ \quad \text{テ} \quad ] = d^2 - r^2$$
   $d > r$ より $d^2 - r^2 > 0$ だから、$PA \cdot PB = |d^2 - r^2|$

<details>
<summary>内部の場合（$d < r$）も確認する</summary>

点の順序 $A \to P \to M \to B$（$P$ は弦上の内部点）より、
$$PA = AM - PM, \quad PB = AM + PM$$
積をとると $PA \cdot PB = AM^2 - PM^2 = (r^2 - OM^2) - (d^2 - OM^2) = r^2 - d^2$

$d < r$ より $r^2 - d^2 > 0$ だから、$PA \cdot PB = |d^2 - r^2|$

以上より外部・内部いずれも $PA \cdot PB = |d^2 - r^2|$ が成り立つ。

</details>

<details>
<summary>解答を確認する</summary>

- ソ：$AM = BM$（中心から弦への垂線は弦を二等分）
- タ：$PM + AM$（または $PM + BM$）
- チ：$AM^2$（和と差の積の展開）
- ツ：$d^2$（$OP = d$）
- テ：$r^2$（$OA = r$、円の半径）

</details>

---

### 演習問題

<details>
<summary>問題を開く</summary>

**問1　外部の点・2割線**

円外の点 $P$ から２本の割線を引き、$PA = 3$、$PB = 12$、$PC = 4$ のとき、$PD$ を求めよ。

<details>
<summary>答えを見る</summary>

$$PA \cdot PB = PC \cdot PD \implies 3 \times 12 = 4 \times PD \implies PD = 9$$

</details>

---

**問2　接線と割線**

円外の点 $P$ から接線 $PT = 6$ と割線を引き、$PA = 4$ のとき、$PB$ を求めよ。

<details>
<summary>答えを見る</summary>

$$PA \cdot PB = PT^2 \implies 4 \times PB = 36 \implies PB = 9$$

</details>

---

**問3　$|d^2 - r^2|$ の計算（外部）**

半径 $r = 5$、$OP = 8$ のとき、$PA \cdot PB$ を求めよ。

<details>
<summary>答えを見る</summary>

$$PA \cdot PB = d^2 - r^2 = 64 - 25 = 39$$

</details>

---

**問4　$|d^2 - r^2|$ の計算（内部）**

半径 $r = 6$、$OP = 2$ のとき、$PA \cdot PB$ を求めよ。

<details>
<summary>答えを見る</summary>

$$PA \cdot PB = r^2 - d^2 = 36 - 4 = 32$$

</details>

---

**問5　接線の長さと方べきの統合**

半径 $r = 4$、$OP = 6$ のとき、(1) 接線の長さ $PT$、(2) $PA \cdot PB$ を求めよ。

<details>
<summary>答えを見る</summary>

(1) $PT^2 = 36 - 16 = 20$ より $PT = 2\sqrt{5}$

(2) $PA \cdot PB = PT^2 = 20$

</details>

</details>

---

## 本時の振り返り

まずは自分の言葉でまとめてから確認しよう！

- 方べきの定理の３つの場合を説明できるか？
- $PA \cdot PB = |d^2 - r^2|$ はどうやって導くか？

<details>
<summary>まとめを確認する</summary>

- 定理① 外部の点・2割線：$PA \cdot PB = PC \cdot PD$
  （証明：内接四角形の性質と共通角 → AA 相似）
- 定理② 接線と割線：$PA \cdot PB = PT^2$
  （証明：接弦定理と共通角 → AA 相似）
- 定理③ 本質：$PA \cdot PB = |d^2 - r^2|$
  （証明：中点 $M$ を置き三平方の定理を２回適用 → $OM^2$ が消えて $d^2$, $r^2$ だけ残る）

</details>
