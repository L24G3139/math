# 復習問題（5月23日）

接線の長さと方べきの定理

---

## 証明の穴埋め：点 $P$ が円の内部にある場合

> **定理（内部の点）**
> 円 $O$ 内の点 $P$ を通る２つの弦 $AB$, $CD$ において、
> $$PA \cdot PB = PC \cdot PD$$

### 穴埋め証明①

$\triangle PAC$ と $[ \quad \text{ア} \quad ]$ において考える。

1. **対頂角**

   点 $P$ は２本の弦の交点であり、対頂角は等しいから、
   $$\angle APC = [ \quad \text{イ} \quad ] \quad \cdots (1)$$

2. **円周角の定理**

   弧 $[ \quad \text{ウ} \quad ]$ に対する円周角は等しいから、
   $$\angle PAC = [ \quad \text{エ} \quad ] \quad \cdots (2)$$

3. **相似の判定・結論**

   $(1)(2)$ より $[ \quad \text{オ} \quad ]$ がそれぞれ等しいから、
   $$\triangle PAC \sim [ \quad \text{ア} \quad ]$$
   対応する辺の比より $PA : [ \quad \text{カ} \quad ] = PC : PB$、よって、
   $$PA \cdot PB = [ \quad \text{キ} \quad ]$$

<details>
<summary>解答を確認する</summary>

- ア：$\triangle PDB$
- イ：$\angle DPB$（対頂角）
- ウ：$BC$（２点 $A$, $D$ が同じ側にある弧）
- エ：$\angle PDB$（同じ弧 $BC$ に対する円周角）
- オ：２組の角
- カ：$PD$
- キ：$PC \cdot PD$

</details>

---

### 穴埋め証明②（別の組み合わせで確認）

$\triangle PAD$ と $[ \quad \text{ク} \quad ]$ において考える。

1. **対頂角**

   $$\angle APD = [ \quad \text{ケ} \quad ] \quad \cdots (1)$$

2. **円周角の定理**

   弧 $[ \quad \text{コ} \quad ]$ に対する円周角は等しいから、
   $$\angle PAD = [ \quad \text{サ} \quad ] \quad \cdots (2)$$

3. **相似の判定・結論**

   $(1)(2)$ より $\triangle PAD \sim [ \quad \text{ク} \quad ]$

   対応する辺の比より $PA : [ \quad \text{シ} \quad ] = PD : PB$、よって、
   $$PA \cdot PB = [ \quad \text{ス} \quad ]$$

<details>
<summary>解答を確認する</summary>

- ク：$\triangle PCB$
- ケ：$\angle CPB$（対頂角）
- コ：$AD$（または弧 $AD$、２点 $C$, $B$ が同じ側にある弧）
- サ：$\angle PCB$（同じ弧 $AD$ に対する円周角）
- シ：$PC$
- ス：$PC \cdot PD$

</details>

---

## 接線の長さの問題

### 問1

円 $O$ の外にある点 $P$ から２本の接線を引き、接点をそれぞれ $A$, $B$ とする。
$PA = 11$ のとき、$PB$ の長さを求めよ。

<details>
<summary>答えを見る</summary>

接線の等長より $PB = PA = 11$

</details>

---

### 問2

$\triangle ABC$ の内接円が辺 $BC$, $CA$, $AB$ と接する点をそれぞれ $D$, $E$, $F$ とする。
$AF = 4$、$BD = 6$、$CE = 3$ のとき、次を求めよ。

(1) $BC$ の長さ　　(2) $\triangle ABC$ の周の長さ

<details>
<summary>答えを見る</summary>

接線の等長より $AE = AF = 4$、$BF = BD = 6$、$CD = CE = 3$

(1) $BC = BD + DC = 6 + 3 = 9$

(2) 周の長さ $= 2(AF + BD + CE) = 2(4 + 6 + 3) = 26$

</details>

---

### 問3

$\triangle ABC$ において $AB = 10$、$BC = 8$、$CA = 6$ とし、内接円と辺 $BC$, $CA$, $AB$ との接点をそれぞれ $D$, $E$, $F$ とする。
$BD$ の長さを求めよ。

<details>
<summary>答えを見る</summary>

$$s = \frac{10 + 8 + 6}{2} = 12$$

$$BD = s - CA = 12 - 6 = 6$$

</details>

---

### 問4

半径 $r = 5$、中心 $O$ の円がある。円の外部の点 $P$ から引いた接線の接点を $T$ とし、$OP = 13$ のとき、接線の長さ $PT$ を求めよ。

<details>
<summary>答えを見る</summary>

$OT \perp PT$ より直角三角形 $\triangle OTP$ で三平方の定理を用いると、

$$PT^2 = OP^2 - OT^2 = 13^2 - 5^2 = 169 - 25 = 144$$

$PT > 0$ だから $PT = 12$

</details>

---

### 問5

半径 $r = 8$、中心 $O$ の円の外部に点 $P$ がある。$P$ から２本の接線を引き、接点をそれぞれ $A$, $B$ とする。$PA = 6$ のとき、$OP$ の長さを求めよ。

<details>
<summary>答えを見る</summary>

$OA \perp PA$ より直角三角形 $\triangle OAP$ で三平方の定理を用いると、

$$OP^2 = PA^2 + OA^2 = 6^2 + 8^2 = 36 + 64 = 100$$

$OP = 10$

</details>
