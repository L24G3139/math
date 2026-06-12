# パスカルの定理

## 目標

- 円に内接する六角形において，対辺の交点が一直線上に並ぶことを理解する
- メネラウスの定理と方べきの定理を組み合わせて証明できる

<iframe src="pascal_theorem.html" style="width:100%;height:660px;border:1px solid #3a6a3a;border-radius:10px;background:#fff;" title="パスカルの定理：導入"></iframe>

---

## 既習内容の確認

今日の証明の核心となる道具を復習してから定理に進もう。

<iframe src="menelaus_power_quiz.html" style="width:100%;height:660px;border:1px solid #3a6a3a;border-radius:10px;background:#fff;" title="振り返りクイズ：メネラウスの定理・方べきの定理"></iframe>

---

## パスカルの定理

> **定理**
> 円に内接する六角形 $ABCDEF$ において，対辺の延長線の交点を以下のように定める。
>
> - 直線 $AB$ と直線 $DE$ の交点を $P$
> - 直線 $BC$ と直線 $EF$ の交点を $Q$
> - 直線 $CD$ と直線 $FA$ の交点を $R$
>
> このとき，$3$ 点 $P$，$Q$，$R$ は同一直線上（**パスカル線**）にある。

### 対辺ペアの見つけ方
<details>
<summary>ポイント!</summary>

円周上に順に $A, B, C, D, E, F$ と並べたとき，**「$1$ つ開けて取る」** ことで対辺のペアが決まる。

| 最初の辺 | $1$ つ開ける | 対辺 |
|:---:|:---:|:---:|
| $AB$ | $C$ を開ける | $DE$ |
| $BC$ | $D$ を開ける | $EF$ |
| $CD$ | $E$ を開ける | $FA$ |

<figure style="margin:1.5em auto;max-width:420px;">
<svg viewBox="0 0 420 350" xmlns="http://www.w3.org/2000/svg" style="width:100%;background:#0f1f10;border-radius:10px;display:block;">
  <circle cx="210" cy="180" r="130" fill="none" stroke="#3a6a3a" stroke-width="1.5"/>
  <line x1="199" y1="51" x2="285" y2="74" stroke="#e8873a" stroke-width="3"/>
  <line x1="265" y1="298" x2="110" y2="264" stroke="#e8873a" stroke-width="3"/>
  <line x1="285" y1="74" x2="338" y2="157" stroke="#5b9dd9" stroke-width="3"/>
  <line x1="110" y1="264" x2="82" y2="157" stroke="#5b9dd9" stroke-width="3"/>
  <line x1="338" y1="157" x2="265" y2="298" stroke="#5ac87a" stroke-width="3"/>
  <line x1="82" y1="157" x2="199" y2="51" stroke="#5ac87a" stroke-width="3"/>
  <circle cx="199" cy="51" r="5" fill="#f2ecce"/>
  <circle cx="285" cy="74" r="5" fill="#f2ecce"/>
  <circle cx="338" cy="157" r="5" fill="#f2ecce"/>
  <circle cx="265" cy="298" r="5" fill="#f2ecce"/>
  <circle cx="110" cy="264" r="5" fill="#f2ecce"/>
  <circle cx="82" cy="157" r="5" fill="#f2ecce"/>
  <text x="199" y="37" text-anchor="middle" font-size="14" font-weight="bold" fill="#f2ecce" font-family="serif">A</text>
  <text x="296" y="68" text-anchor="middle" font-size="14" font-weight="bold" fill="#f2ecce" font-family="serif">B</text>
  <text x="354" y="160" text-anchor="middle" font-size="14" font-weight="bold" fill="#f2ecce" font-family="serif">C</text>
  <text x="273" y="316" text-anchor="middle" font-size="14" font-weight="bold" fill="#f2ecce" font-family="serif">D</text>
  <text x="93" y="278" text-anchor="middle" font-size="14" font-weight="bold" fill="#f2ecce" font-family="serif">E</text>
  <text x="62" y="160" text-anchor="middle" font-size="14" font-weight="bold" fill="#f2ecce" font-family="serif">F</text>
  <text x="210" y="175" text-anchor="middle" font-size="11" fill="#7aaa7a" font-family="sans-serif">同色の辺が</text>
  <text x="210" y="192" text-anchor="middle" font-size="11" fill="#7aaa7a" font-family="sans-serif">対辺ペア</text>
  <line x1="22" y1="326" x2="48" y2="326" stroke="#e8873a" stroke-width="2.5"/>
  <text x="53" y="331" font-size="11" fill="#ccc" font-family="sans-serif">AB ↔ DE</text>
  <line x1="148" y1="326" x2="174" y2="326" stroke="#5b9dd9" stroke-width="2.5"/>
  <text x="179" y="331" font-size="11" fill="#ccc" font-family="sans-serif">BC ↔ EF</text>
  <line x1="274" y1="326" x2="300" y2="326" stroke="#5ac87a" stroke-width="2.5"/>
  <text x="305" y="331" font-size="11" fill="#ccc" font-family="sans-serif">CD ↔ FA</text>
</svg>
<figcaption style="text-align:center;font-size:0.8em;color:#7aaa7a;margin-top:0.4em;">対辺ペア（色分け）</figcaption>
</figure>

---
</details>

証明の方針：「交互の対辺から補助三角形を作り，メネラウスと方べきを組み合わせる」

**準備：補助三角形 $\triangle XYZ$ の設定**

直線 $AB$，$CD$，$EF$ の交点として，

$$X = AB \cap CD, \quad Y = CD \cap EF, \quad Z = EF \cap AB$$

と定めると，残りの $3$ 本の直線 $BCQ$，$DEP$，$FAR$ がこの $\triangle XYZ$ を横切っている。

メネラウスの定理の逆より，$3$ 点 $P$，$Q$，$R$ が一直線上にあることを示すには，次の式が成り立つことを示せばよい。

$$\frac{XP}{PZ} \cdot \frac{ZQ}{QY} \cdot \frac{YR}{RX} = 1$$

以下，この式を目標として変形していく。

---

**Step 1：メネラウスの定理を $3$ 回適用する**

① $\triangle XYZ$ に直線 $BCQ$ を適用：

$$\frac{XB}{BZ} \cdot \frac{ZQ}{QY} \cdot \frac{YC}{CX} = 1 \implies \frac{ZQ}{QY} = \frac{BZ}{XB} \cdot \frac{CX}{YC}$$

② $\triangle XYZ$ に直線 $DEP$ を適用：

$$\frac{XP}{PZ} \cdot \frac{ZE}{EY} \cdot \frac{YD}{DX} = 1 \implies \frac{XP}{PZ} = \frac{EY}{ZE} \cdot \frac{DX}{YD}$$

③ $\triangle XYZ$ に直線 $FAR$ を適用：

$$\frac{XA}{AZ} \cdot \frac{ZF}{FY} \cdot \frac{YR}{RX} = 1 \implies \frac{YR}{RX} = \frac{AZ}{XA} \cdot \frac{FY}{ZF}$$

---

**Step 2：$3$ 式の積をとり，頂点ごとに整理する**

上の3つの式（①, ②, ③）で得た右辺をすべてかけ合わせると，

$$\frac{XP}{PZ} \cdot \frac{ZQ}{QY} \cdot \frac{YR}{RX} = \left( \frac{EY}{ZE} \cdot \frac{DX}{YD} \right) \cdot \left( \frac{BZ}{XB} \cdot \frac{CX}{YC} \right) \cdot \left( \frac{AZ}{XA} \cdot \frac{FY}{ZF} \right)$$

この右辺の $6$ つの分数を，頂点 $X$，$Y$，$Z$ ごとの「カタマリ」に並び替えてグルーピングすると，

$$\frac{XP}{PZ} \cdot \frac{ZQ}{QY} \cdot \frac{YR}{RX} = \left( \frac{DX \cdot CX}{XB \cdot XA} \right) \cdot \left( \frac{EY \cdot FY}{YD \cdot YC} \right) \cdot \left( \frac{BZ \cdot AZ}{ZE \cdot ZF} \right) \quad \cdots (\star)$$

$1$ つ目のカタマリ $\dfrac{DX \cdot CX}{XB \cdot XA}$ は頂点 $X$ 周りの線分だけでできており，同様に $2$ つ目は頂点 $Y$ 周り，$3$ つ目は頂点 $Z$ 周りの線分だけでできている。それぞれのカタマリは，「その頂点から出る $4$ つの線分の積」の比になっていることに注目しよう。次のStep 3で，この $3$ つのカタマリを方べきの定理によって $1$ に変えていく。

---

**Step 3：方べきの定理で各カタマリを相殺する**

六角形が円に内接しているため，各頂点から $2$ 本の割線が引けて方べきの定理が使える。

- 頂点 $X$ から：$XA \cdot XB = XC \cdot XD \implies \dfrac{DX \cdot CX}{XB \cdot XA} = 1$

- 頂点 $Y$ から：$YC \cdot YD = YE \cdot YF \implies \dfrac{EY \cdot FY}{YD \cdot YC} = 1$

- 頂点 $Z$ から：$ZE \cdot ZF = ZA \cdot ZB \implies \dfrac{BZ \cdot AZ}{ZE \cdot ZF} = 1$

---

**結論**

これを $(\star)$ に代入すると，

$$\frac{XP}{PZ} \cdot \frac{ZQ}{QY} \cdot \frac{YR}{RX} = 1 \cdot 1 \cdot 1 = 1$$

メネラウスの定理の逆が成り立つため，$3$ 点 $P$，$Q$，$R$ は同一直線上にある。（証明終）

---

### 穴埋め証明

#### インタラクティブ版（ステップ穴埋めクイズ）

下のクイズでは、図を見ながら同じ証明を10ステップに分けて穴埋めしていきます。先にこちらに挑戦してみましょう。

<iframe src="pascal_proof_quiz.html" style="width:100%;height:760px;border:1px solid #3a6a3a;border-radius:10px;background:#fff;" title="パスカルの定理の証明：ステップ穴埋めクイズ"></iframe>

---

### まとめ

- **補助三角形の作り方**：交互の対辺（$AB$，$CD$，$EF$）の交点を頂点として $\triangle XYZ$ を設定する。
- **メネラウスの定理**：$\triangle XYZ$ を横切る $3$ 本の直線（$BCQ$，$DEP$，$FAR$）に各 $1$ 回，計 $3$ 回適用し，比の式を導く。
- **方べきの定理**：円に内接するという条件から，各頂点 $X$，$Y$，$Z$ 周りの比がそれぞれ $1$ に相殺される。
- **逆の活用**：最終的にメネラウスの定理の「逆」を使い，共線性（$P$，$Q$，$R$ が一直線上）を結論づける。

---

### 演習問題：定理の拡張を探求しよう

星型の六角形・五角形への退化など，パスカルの定理の広がりを確かめる。

<iframe src="pascal_exercises_quiz.html" style="width:100%;height:740px;border:1px solid #3a6a3a;border-radius:10px;background:#fff;" title="パスカルの定理：応用演習クイズ"></iframe>

---

## 本時の振り返り

まずは自分の言葉でまとめてから確認しよう！

- 証明で最初に作った補助三角形は何か？頂点をどのように定めたか？
- メネラウスの定理と方べきの定理を使ったのはどうしてか？

<details>
<summary>まとめを確認する</summary>

**証明の骨格**：交互の対辺 $AB$，$CD$，$EF$ の交点で $\triangle XYZ$ を設定 → ABCDEFとPQRを $\triangle XYZ$ の分点すると、メネラウスの定理を利用し、式変形をする → XYZを任意の点から伸びる直線が円と交わるので、方べきの定理を利用して式変形する → 辺の積の比が1であることから、メネラウスの逆で共線を結論。

**歴史的背景**：古代ギリシャの「パップスの定理」（直線版）を，$16$ 歳のパスカルが円に応用・拡張したのがこの定理。さらに楕円・放物線・双曲線へも拡張され，**射影幾何学**の出発点となった。

</details>
