# CSS3轉場效果

> CSS動畫指的是使用以CSS定義為主的動畫效果，又可以分成以下兩類:
>
> - **CSS3轉場/過渡(transitions)**：
>   - 主要以開始狀態、結束狀態與持續期間(duration)三種參數，以及可指定的漸變函數(transition timing function)，將DOM元素或網頁上的物件進行轉變。
> - **CSS3動畫(animations)**：
>   -  又稱為關鍵影格(Keyframe)動畫，可以加入關鍵影格，提供許多動畫片段的組合。
>
> 以CSS定義為主的動畫相較於使用JavaScript程式為主的動畫有一些好處:
>
> - 簡單，對於一些簡單的動畫特效，不需要撰寫程式就可以製作出動畫。
> - 低消費，對於電腦資源的消耗非常低。
> - 最佳化，瀏覽器對於CSS動畫可以提供最佳化，動畫可以運作得相當順暢。
>



## CSS3轉場與CSS3動畫的"相同"之處

- 都是使用CSS定義，然後監聽DOM元素的改變作出動畫效果
- 都可以設定漸變函數(transition timing function)，控制動畫的運動(效果展現)的曲線
- 都可以設定持續期間(duration)，控制動畫持續的時間
- 都有對應的event(事件)，可以送出動畫的狀態，可讓JavaScript再加以監聽或控制(可程式化)
- 都可以用視覺化方式看到CSS屬性正在改變的狀態



## CSS3轉場與CSS3動畫的"不同"之處

### 觸發(Trigger)方式

轉場(transitions)觸發使用`:hover`僞(pseudo)類別為最經常使用，其他可觸發的還有`:active`、`:focus`、`:checked`等等，另一種方式是使用JavaScript語言動態加入或移除CSS類別，更多範例可以參考[這一篇範例](https://www.impressivewebs.com/css3-transitions-without-hover/)。

動畫(animations)不需要觸發，當你定義好後，頁面一載入就會開始進行動畫。



### 循環/重覆播放(Looping)

轉場(transitions)沒有指定循環播放的屬性可用。

動畫(animations)有`animation-iteration-count`屬性可指定循環播放的次數，或是用"infinite"指定為不停地重覆播放。



### 定義關鍵影格(Keyframes)/中途點

轉場(transitions)沒有這特性。動畫的撥放就是從開始到結束。

動畫(animations)可以額外定義關鍵影格(Keyframes)，可以製作更複雜的動畫效果。

> 註: 有一個常會搞混的`transform`的CSS的新屬性，它可以把網頁上的物件或元素進行變形、翻轉或2d與3d的效果，它並不是與動畫有關的屬性，你可以把它當成是類似字體顏色大小、透明度(opacity)的屬性。也可以搭配CSS動畫來使用。



### 搭配JavaScript互動的混合作法

轉場(transitions)很容易可以搭配JavaScript程式作額外的互動應用。

動畫(animations)比較不容易，但仍然是可以搭配JavaScript使用。



## Transitions 轉場

在CSS3之前的轉場特效，都是立即完成的，轉場特效提供了更為豐富的動畫效果，以下為本章用來說明的一個簡單範例:

```css
.box {
	background: #2db34a;
	border-radius: 6px;
	height: 95px;
	width: 95px;
}

.box:hover {
	background: #ff2956;
}
```

下面是我們的第一個範例，左邊的是用上面的定義的方形，右邊的有另外加一行`transition: 1s;`的定義，它會在滑鼠游標在上面時，出現轉場效果，滑鼠游標移開後會回復原來的屬性，你可以比對看看兩者的不同。



<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/eyesofkids/embed/vXBOAA/?height=300&amp;theme-id=0&amp;slug-hash=vXBOAA%2F&amp;default-tab=result&amp;user=eyesofkids&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" id="cp_embed_vXBOAA_" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; -webkit-font-smoothing: antialiased; font-size: inherit; width: 770px; overflow: hidden; display: block;"></iframe>



轉場特效使用四個CSS屬性來進行定義，這些屬性可以整個合併到一個`transition`屬性之中:

- **transition-property**: 定義哪些CSS屬性會被轉場效果影響。除了這些被指定的屬性，其他的轉場一如以往的會在瞬間完成。要特別注意的是，並非所有的CSS屬性都可以進行轉場，可用的屬性所有清單在[這份資料](http://oli.jp/2010/css-animatable-properties/)與[可進行動畫屬性](https://www.w3.org/TR/2009/WD-css3-transitions-20091201/#animatable-properties-)，其中也包含了SVG的屬性。如果這個屬性定義為`transform`，代表任何使用了`transform`的屬性都會被偵測來進行動畫。如果這個屬性定義為`all`，就會自動偵測所有可進行動畫的屬性，包含`transform`影響的屬性。預設值就是`all`。
- **transition-duration**: 定義轉場的持續時間。可以只定義一個時間給所有屬性使用，也可以分別給定不同時間。時間通常以`s`為單位(秒)，可以定義小數點例如`0.5s`或`.5s`，預設值是`0s`。
- **transition-timing-function**: 時間函式，這是用來設定轉場過程時所使用的貝茲曲線。內建的幾個可直接使用數值如下，直接使用名稱就可以取用。在[這個頁面](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)中看到所有的預設值的範例:
  - ease
  - linear
  - ease-in
  - ease-out
  - ease-in-out
  - step-start
  - step-end
  - steps()
  - cubic-bezier()

其中`cubic-bezier()`的數值，可以到[cubic-bezier.com](http://cubic-bezier.com/)來自訂所需要的貝茲曲線參數值，或是到這一頁[Easing函數](http://easings.net/zh-tw)或[CSS EASING ANIMATION TOOL](https://matthewlein.com/ceaser/)的裡面挑選你想要的Easing函數，使用四個數字值可以產生一個貝茲曲線。預設值是`ease`。

- **transition-delay**: 定義多久之後開始發生轉場，這是一個延遲開始的時間。時間通常以`s`為單位(秒)，可以定義小數點例如`0.5s`或`.5s`，預設值是`0s`。

`transition`屬性的合併寫法是按照上面的順序依次寫成一整行，所以如果都是以預設值來寫CSS定義的話，可以用非常簡單的寫法像這樣:

```
transition: .5s;
```

相當於下面這樣，第1、3、4值都是使用預設值。而`.5s`代表的是持續期間(duration)，而且因為最後面的那個延遲開始(delay)的預設值是0s，一般都不寫:

```
transition: all .5s ease;
```

> 註: 雖然你可以用`ms`(微秒，千分之一秒)為單位來設定持續與延遲開始時間，但似乎不必要，因為太短暫的時間差人眼無法感覺差異。
>
> 順序口訣: 屬性的順序的口訣，例如"屬持茲遲"(手持支援)或"屬續貝延"(手續被延期)

你也可以為每個不同的CSS屬性分別設定轉場的動畫定義:

```css
.box {
background: #2db34a;
border-radius: 6px;
height: 95px;
width: 95px;

-webkit-transition: background .2s linear, border-radius 1s ease-in 1s;
transition: background .2s linear, border-radius 1s ease-in 1s;
}

.box:hover {
background: #ff2956;
border-radius: 50%;
}
```

以下為這個範例的執行結果，你可以把滑鼠游標放在上面久一點，因為第二個屬性(圓角邊)會在1s後才延遲開始。



<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/eyesofkids/embed/JRPdXb/?height=300&amp;theme-id=0&amp;slug-hash=JRPdXb%2F&amp;default-tab=result&amp;user=eyesofkids&amp;name=cp_embed_2" title="CodePen Embed" loading="lazy" id="cp_embed_JRPdXb_" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; -webkit-font-smoothing: antialiased; font-size: inherit; width: 770px; overflow: hidden; display: block;"></iframe>



轉場特效的概念十分簡單，開始狀態、結束狀態，以及持續時間、轉場使用的貝茲曲線函式。對滑鼠滑入(hover)來說，`.box`是開始狀態，而`.box:hover`是結束狀態。但當滑鼠游標離開時，就會兩個顛倒過來。那到底`transition`該加在`.box`中還是`.box:hover`中？大部份的情況是只需要加在`.box`中，除非你希望滑鼠游標移入與離開是兩種不同的轉場特效情況，不過你需要把所有的屬性都對應好，不然會產生立即執行的失效情況。如果你只加在:hover中大概是錯誤的寫法。以下為範例:



<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_3" scrolling="no" src="https://codepen.io/eyesofkids/embed/kkNWmL?height=300&amp;theme-id=0&amp;slug-hash=kkNWmL&amp;default-tab=result&amp;user=eyesofkids&amp;name=cp_embed_3" title="CodePen Embed" loading="lazy" id="cp_embed_kkNWmL" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; -webkit-font-smoothing: antialiased; font-size: inherit; width: 770px; overflow: hidden; display: block;"></iframe>



### 供應商前綴字(Vendor Prefixes)

供應商前綴字的出現是由於瀏覽器不同品牌的廠商，搶先於標準完成前就開始發佈已包含實作功能造成的結果。因為這些CSS屬性有可能在瀏覽器中有可能是屬於實驗性質的，所以在前面加上了瀏覽器供應商的前綴字，代表是要開啟這個實驗性的CSS屬性，到後來變成一個要為了相容不同瀏覽器的特殊寫法。而且，這不只是針對CSS3動畫相關的屬性，在一些新式的屬性，例如陰影或漸層，都有需要使用供應商前綴字的情況。由於瀏覽器新版本都自動偵測支援，現在這個問題會比較少見了。

不過，要記住哪一些屬性是需要加供應商前綴字，哪一些則不用，這是件非常令人頭痛的事情。一般都會使用一種叫Autoprefixer(自動前綴字產生器)的工具來幫忙轉換，例如下面的工具:

- 各種編輯器中的[Autoprefixer外掛功能](https://github.com/postcss/autoprefixer#text-editors-and-ide)
- [Autoprefixer CSS online](https://autoprefixer.github.io/)線上轉換工具
- [Pleeease](http://pleeease.io/play/)線上轉換工具

現在一般來說只需要加上`-webkit-`前綴字即可，例如以下的範例:

```
-webkit-transition: background .2s linear, border-radius 1s ease-in 1s;
transition: background .2s linear, border-radius 1s ease-in 1s;
```

## Animation 動畫

快束了解 CSS animation

```css
/* 哪個物件要執行動畫 */
animation: 動畫名稱 播放時間 速度函式 延遲播放時間 次數 方向 填充模式

/* 細項全名 */
animation-name: my-animation; /* 動畫名稱，可以用逗號套用多個 @keyframes */
animation-duration: 1s;    /* 播放時間 */ 
animation-timing-function: linear | ease-in-out;  /* 速度函式 */ 
animation-delay: 0.5s;  /* 延遲多久開始執行 */ 
animation-iteration-count: infinite | number;    /* 播放次數 */ 
animation-direction: normal | alternate (來回播放) |
                      reverse（從 100% 跑回 0 %） | alternate-reverse;   // 方向
animation-fill-mode: none | forwards | backwards | both;   // 填充模式，動畫執行前後，目標如何套用 CSS Animation
animation-play-state: paused | running;    // 定義動畫執行或停止

/* 動畫內容 */
@keyframes 動畫名稱 {
   0%{...}
   100%{...}
}
```

---



### 動畫的基礎定義

動畫的這三個屬性，持續期間、時間函式與延遲開始時間，這部份的內容與CSS3轉場一模一樣:

- **animation-duration**：
  -  持續期間。時間通常以`s`為單位(秒)，可以定義小數點例如`0.5s`或`.5s`，預設值是`0s`。

- **animation-timing-function**：
  -  時間函式，這是用來設定轉場過程時所使用的貝茲曲線，預設值是`ease`。

- **animation-delay**：
  -  延遲開始時間。時間通常以`s`為單位(秒)，可以定義小數點例如`0.5s`或`.5s`，預設值是`0s`。


但與轉場不同的是，轉場使用的第1個屬性是用`transition-property`直接定義要進行轉場的屬性，而動畫是使用`animation-name`定義一組名稱。

這個名稱是對應到關鍵影格`@keyframes`的規則(rule)的名稱，一個最簡單的`@keyframes`規則如下，`0%`代表第一個關鍵影格，也就是開始的狀態，也可以使用`from`代表。`100%`則是最後一個關鍵影格，結束的狀態，也可以使用`to`代表，中間的部份依照不同的時期可以用百分比來表示，這是依照你的持續時間來分割的:

```css
@keyframes pinpon {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    left: 200px;
    top: 150px;
  }
  100% {
    left: 300px;
    top: 0;
  }
}
```

對照的CSS3其他定義值如下，可以看到這裡的`animation-name`指定為上面的"pinpon"關鍵影格名稱:

```css
  animation-name: pinpon;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-delay: 1s;
```

下面是這個範例的執行結果，它是一載入頁面立即執行的，如果看不到請重新載入範例的頁面。這是動畫的特性，不過也有另外可以讓它用類似轉場的觸發方式來執行，後面會再提到。



<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_1" scrolling="no" src="https://codepen.io/eyesofkids/embed/JRPGqX/?height=300&amp;theme-id=0&amp;slug-hash=JRPGqX%2F&amp;default-tab=result&amp;user=eyesofkids&amp;name=cp_embed_1" title="CodePen Embed" loading="lazy" id="cp_embed_JRPGqX_" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; -webkit-font-smoothing: antialiased; font-size: inherit; width: 770px; overflow: hidden; display: block;"></iframe>



### 其他更多的屬性

動畫還有其他一些不同的屬性可以進行定義，以下列出來:

- `animation-iteration-count`(播放循環次數): 用於設定動畫播放次數，預設是1，可以設定正整數，例如5。或帶有小數點的小數，例如0.5代表播放半次。`infinite`代表永不停止的播放。
- `animation-direction`(播放方向): 用於定義播放的方向，有以下幾種值可以使用:
  - normal(正常)
  - reverse(反向/倒帶)
  - alternate(輪流)
  - alternate-reverse(輪流與反向)

運用這兩個屬性，可以把上面的範例再調整一下，讓球的運動可以來回不斷的跳動，例如以下的範例:



<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_2" scrolling="no" src="https://codepen.io/eyesofkids/embed/BLBKKO/?height=300&amp;theme-id=0&amp;slug-hash=BLBKKO%2F&amp;default-tab=result&amp;user=eyesofkids&amp;name=cp_embed_2" title="CodePen Embed" loading="lazy" id="cp_embed_BLBKKO_" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; -webkit-font-smoothing: antialiased; font-size: inherit; width: 770px; overflow: hidden; display: block;"></iframe>



- `animation-fill-mode`(播放後樣式): 指的是動畫播放後的樣式，是不是要保留在最後的狀態。預設值是`none`，設定為`forwards`會停留在最後的樣式，`backwards`則是一開始的樣式。`both`是兩者都套用。這個值會因為`animation-direction`屬性的方向值而有不同的套用對象。

下面的範例是使用`forwards`來指定，最後會停留在最後套用的樣式。



<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_3" scrolling="no" src="https://codepen.io/eyesofkids/embed/GjKkWd/?height=300&amp;theme-id=0&amp;slug-hash=GjKkWd%2F&amp;default-tab=result&amp;user=eyesofkids&amp;name=cp_embed_3" title="CodePen Embed" loading="lazy" id="cp_embed_GjKkWd_" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; -webkit-font-smoothing: antialiased; font-size: inherit; width: 770px; overflow: hidden; display: block;"></iframe>



- `animation-play-state`(播放狀態): 這個屬性可以控制動畫播放的暫停，預設是`running`，可以設為`paused`來暫停播放。

下面的範例是使用`:hover`加上`paused`，滑鼠游標放在球上面，動畫就會暫停，游標移出後又會繼續。



<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_4" scrolling="no" src="https://codepen.io/eyesofkids/embed/kkNbGr/?height=300&amp;theme-id=0&amp;slug-hash=kkNbGr%2F&amp;default-tab=result&amp;user=eyesofkids&amp;name=cp_embed_4" title="CodePen Embed" loading="lazy" id="cp_embed_kkNbGr_" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; -webkit-font-smoothing: antialiased; font-size: inherit; width: 770px; overflow: hidden; display: block;"></iframe>



### 簡寫語法(整合語法)

由於animation的屬性有8個之多，要使用簡寫的方式把所有的屬性寫成一行會比較不容易。以下列出所有的屬性順序與其預設值:

```css
animation-name: none
animation-duration: 0s
animation-timing-function: ease
animation-delay: 0s
animation-iteration-count: 1
animation-direction: normal
animation-fill-mode: none
animation-play-state: running
```

> 順序口訣: 名詞支援次方"填充""狀態" - 名稱、持續、貝茲、延遲、次數、方向、填充(最後樣式)、狀態(暫停/執行)

在簡寫語法中，名稱(animation-name)可以放在第一個值，也可以放在最後一個值，例如像下面這些寫法中的`slidein`實際上是`@keyframes`的規則的名稱:

```css
/* @keyframes duration | timing-function | delay |
   iteration-count | direction | fill-mode | play-state | name */
  animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | timing-function | delay | name */
  animation: 3s linear 1s slidein;

/* @keyframes duration | name */
  animation: 3s slidein;
```

### 供應商前綴字(Vendor Prefixes)

與轉場相同，CSS3動畫屬性也有供應商前綴字的問題，現在一般來說只需要加上`-webkit-`前綴字即可。可以使用以下的工具來協助加上:

- 各種編輯器中的[Autoprefixer外掛功能](https://github.com/postcss/autoprefixer#text-editors-and-ide)
- [Autoprefixer CSS online](https://autoprefixer.github.io/)線上轉換工具
- [Pleeease](http://pleeease.io/play/)線上轉換工具

### 使用`:hover`來觸發動畫

下面的範例可以用一個外圍的div元素來框住進行CSS3動畫的球元素，讓它在滑鼠游標移入在上面時才開始進行動畫，按住滑鼠左鍵時可以暫停動畫。但你應該發現不論如何，使用CSS3動畫是無法在播放期間直接中止的。



<iframe allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="cp_embed_iframe " frameborder="0" height="300" width="100%" name="cp_embed_5" scrolling="no" src="https://codepen.io/eyesofkids/embed/JRPXBy/?height=300&amp;theme-id=0&amp;slug-hash=JRPXBy%2F&amp;default-tab=result&amp;user=eyesofkids&amp;name=cp_embed_5" title="CodePen Embed" loading="lazy" id="cp_embed_JRPXBy_" style="box-sizing: border-box; -webkit-tap-highlight-color: transparent; text-size-adjust: none; -webkit-font-smoothing: antialiased; font-size: inherit; width: 770px; overflow: hidden; display: block;"></iframe>



[參考文章](https://eyesofkids.gitbooks.io/css3/content/contents/intro.html)

