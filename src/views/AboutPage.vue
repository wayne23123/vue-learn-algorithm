<script setup>
import { ref } from "vue";

const toTopRef = ref(false);
window.addEventListener("scroll", function () {
  // 當 scrollY大於0 則 showRef 為 true
  toTopRef.value = window.scrollY > 0;
});
// 當點擊返回頂部時，滾動到頁面頂部
function toTopFunction() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
function toBotFunction() {
  window.scrollTo({
    top: 999999,
    left: 0,
    behavior: "smooth",
  });
}
function locate(idPound) {
  window.scrollTo({
    top: document.getElementById(`${idPound}`).offsetTop,
    behavior: "smooth",
  });
}
</script>

<template>
  <div class="sectionHolderNav"></div>
  <!-- thetopTHETOPtabTAB -->
  <section>
    <div class="aboutContainer disCen">
      <div class="aboutLayout">
        <div>
          <br />
          <h3 class="cor36"># 關於此筆記</h3>
          <p>Wayne Lu 的學習筆記。</p>
          <br />
          <hr />
          <br />
          <h3 class="cor36"># 都記錄些什麼?</h3>
          <p>此筆記主要記錄一些關於前端學習的筆記。</p>
          <br />
          <hr />
          <br />
          <h3 class="cor36"># 康乃爾筆記法</h3>
          <p>兩欄筆記法</p>
          <p class="pFou">1. 左邊關鍵字</p>
          <p class="pFou">2. 右邊筆記</p>
          <p class="pFou">3. 下面總結</p>
          <br />
          <a
            href="https://zh.wikipedia.org/zh-tw/%E5%BA%B7%E5%A5%88%E5%B0%94%E7%AC%94%E8%AE%B0%E6%B3%95"
            >康乃爾筆記法 @wiki</a
          >
          <br />
          <p class="comment">
            大腦中地標 -> 記憶宮殿 -> 透過小紙條or圖 -> 記憶點(畫表情)
          </p>
          <br />
          <hr />
          <br />
          <h3 class="cor36"># 費曼學習法</h3>
          <p>1. 把它教給一個小孩子</p>
          <p>2. 回顧教學過程(ex腳本,他不懂腳本要在解釋)</p>
          <p>3. 將語言條理化,簡化</p>
          <p>4. 傳授真正的人</p>
          <br />
          <a href="https://www.youtube.com/watch?v=gcbCXqjicu0"
            >費曼學習法：快速掌握新知識 @youtube 好葉</a
          >
          <br />
          <hr />
          <br />
          <h3 class="cor36"># 工作中如何使用 Git</h3>
          <br />
          <a href="https://juejin.cn/post/7165654391511318559">
            工作中如何使用 Git @掘金 沐华
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- thebottomTHEBOTTOMTABtab -->
  <div>
    <transition name="fade" tag="div" v-show="toTopRef">
      <div @click="toTopFunction" class="toTop">
        <div class="toTopButton">
          <div class="disCen">___</div>
          <div class="disCen">▲</div>
        </div>
      </div>
    </transition>
    <transition name="fade" tag="div" v-show="toTopRef">
      <div @click="toBotFunction" class="toBot">
        <div class="toBotButton">
          <div class="disCen">▼</div>
          <div class="disCen">￣</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.sectionHolderNav {
  width: 100vw;
  max-width: 100%;
  height: 70px;
  background-color: 171717;
}

section {
  width: 100vw;
  max-width: 100%;
  background-color: #171717;
  color: #a1b6cb;
}

.cor36 {
  color: #36c1cb;
}

a {
  display: inline-block;
  /* 沒互動顏色 */
  color: #c4c4c4;
  padding: 5px 0;
  margin: 0 1;
  border: 3px solid transparent;
}

a:hover {
  /* 滑進時顏色 */
  color: #3ddbe7;
}

/* top按鈕的css -------------------------------------------------------*/
.toTop {
  /* bottom: 50px; */
  bottom: 20vh;
  /* right: 200px; */
  right: 10px;
  position: fixed;
  z-index: 100;
  background-color: #6f020290;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.toTop:hover {
  background-color: #6f020250;
}
.toTopButton {
  position: relative;
  bottom: 7px;
  padding-left: 0;
  color: #999;
  pointer-events: none;
}
.toBot {
  /* bottom: 50px; */
  bottom: 10vh;
  /* right: 200px; */
  right: 10px;
  position: fixed;
  z-index: 100;
  background-color: #6f020290;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.toBot:hover {
  background-color: #6f020250;
}
</style>
