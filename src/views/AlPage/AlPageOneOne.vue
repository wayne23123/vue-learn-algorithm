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
  <section>
    <!-- <div class="sectionHolderNav"></div> -->
    <!-- 左邊導航條 -->
    <div class="leftNav">
      <div class="leftNavContainer">
        <div class="leftNavLayout">
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
          <div @click="locate('')" class="leftNavText"></div>
        </div>
      </div>
    </div>
    <!-- maintopMAINTOP -->
    <!-- 右邊文章內容 -->
    <div class="Main">
      <div class="mainContainer">
        <div class="mainLayout">
          <!-- 這裡 -->
          <br />
          <br />

          <p class="fz30">
            隊列 是一種 受限 的 線性結構 , 只允許在前端 刪除元素 , 在後端
            插入元素 , 並符合 先進先出 ( FIFO ) ( first in first out )
          </p>
          <br />
          <br />
          <p class="fz36">數組</p>
          <p class="fz30 cor36">優</p>
          <p class="fz28">根據下標值 訪問 效率高</p>
          <br />
          <p class="fz28">
            想根據元素查找位置? _ 先對數組進行排序 , 再二分查找
          </p>
          <br />
          <br />
          <p class="fz30 cor36">缺</p>
          <p class="fz28">在插入 刪除 數據 , 需大量位移操作 , 效率低</p>
          <br />
          <p class="fz28">要先對數組進行排序 , 才能提高查找效率</p>
          <br />
          <br />

          <p class="fz36">鏈表</p>
          <p class="fz30 cor36">優</p>
          <p class="fz28">插入 和 刪除 操作效率很高</p>
          <br />
          <br />
          <p class="fz30 cor36">缺</p>
          <p class="fz28">查找效率低 , 要從頭開始依次訪問鏈表中 每個數據項</p>
          <br />
          <p class="fz28">插入刪除中間項 , 仍要從頭找對應數據</p>
          <br />
          <br />

          <p class="fz36">哈希表</p>
          <p class="fz30 cor36">優</p>
          <p class="fz28">插入 查詢 刪除 效率高</p>
          <br />
          <br />
          <p class="fz30 cor36">缺</p>
          <p class="fz28">空間利用率不高 , 底層用數組 , 且某些單元沒被利用</p>
          <br />
          <p class="fz28">無序的 , 不能按照固定順序來遍歷哈希表中元素</p>
          <br />
          <p class="fz28">不能快速找出哈希表中 最大 最小值</p>
          <br />
          <br />

          <p class="fz36"></p>
          <p class="fz30 cor36"></p>
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />

          <br />
          <br />
          <div id="oneData001" class="articleCardTitle">
            [ 數據結構 ] ≫ 數組
          </div>

          <br />
          <p class="fz30">1. 線性數據結構 強調 存儲&順序</p>
          <br />

          <p class="fz30">2. 有東西先把東西存起來</p>
          <br />

          <p class="fz36 cor36">數組定長</p>
          <br />

          <p class="fz30">
            數組是定長的 , 是 js 引擎幫我們擴容 , 內存是操作系統來分配的
          </p>
          <br />

          <p class="fz30 cor36">數組特性</p>
          <br />

          <p class="fz30">1. 存儲 在 物理空間上 是連續的</p>
          <br />

          <p class="fz30">2. 底層數組長度不可變</p>
          <br />

          <p class="fz30">3. 數組變量 指向 第一個元素的位置 (數組下標)</p>
          <br />

          <p class="fz30">優</p>
          <br />
          <p class="fz30">通過下標值取元素or修改元素 效率高 arr[2] = 0</p>
          <br />
          <br />

          <p class="fz30">查詢性能好</p>
          <br />

          <p class="fz30">a[0]</p>
          <br />

          <p class="fz30">a[2]</p>
          <br />

          <p class="fz30">缺</p>
          <br />
          <p class="fz30">往數組 末尾 放元素 , 直接放後面 效率好一點</p>
          <p class="fz30">往數組 頭 放元素 很耗時 , 不能直接 插 頭</p>
          <p class="fz30">要 先將後方 元素 往後移 , 在插入空位 , 效率很低</p>
          <br />
          <br />
          <br />
          <br />

          <p class="fz30">
            1. 空間必續是連續的 , 數組比較大 , 當系統的空間碎片比較多的時候 ,
            容易存不下
          </p>
          <br />

          <p class="fz30">
            2. 因為數組的長度是固定的 , 所以數組的內容難以被添加 和 刪除
          </p>
          <br />

          <p class="fz30">添加一個東西 和 移除某一個 , 性能都是極度消耗</p>
          <br />

          <div id="oneData002" class="articleCardTitle">
            [ 數據結構 ] ≫ 鏈表
          </div>

          <p class="fz30 cor36"># 理解鏈表</p>
          <br />

          <p class="fz30">
            帶有封裝性質的數據結構 , 2 塊東西 , 數據和引用 (指針)
          </p>
          <br />

          <p class="fz30 cor36"># 特點</p>
          <br />

          <p class="fz30">1. 空間上不連續</p>
          <br />

          <p class="fz30">2. 每存放一個值都有一個引用空間</p>
          <br />

          <p class="fz30 cor36">優</p>
          <br />

          <p class="fz30">
            1. 只要內存夠大 , 就能存的下 , 不用擔心空間碎片問題
          </p>
          <br />

          <p class="fz30">2. 鏈表 添加 和 刪除 容易</p>
          <br />

          <p class="fz30 cor36">缺</p>
          <br />

          <p class="fz30">1. 鏈表的查詢 速度慢</p>
          <br />

          <p class="fz30">
            2. 鏈表的每一個查詢都需要 創建 一個 next 直接 dobule 空間
          </p>
          <br />
          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />
          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />
          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />
          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />
          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />
          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />
          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <div id="oneData0" class="articleCardTitle">[ 數據結構 ] ≫</div>

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <p class="fz30"></p>
          <br />

          <div id="oneData0" class="articleCardTitle">[ 數據結構 ] ≫</div>

          <p class="fz30"></p>
          <br />
        </div>
      </div>
    </div>
  </section>
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
section {
  width: 100vw;
  max-width: 100%;
  background-color: #171717;
  color: #000;
  overflow: hidden;
}

.leftNav {
  font-size: 20px;
  position: fixed;
  right: 80px;
  top: 150px;
  /* width: 19vw; */
  /* height: 100%; */
  /* background-color: #040404; */
  background-color: rgba(0, 0, 0, 0.1);
  /* color: #36c1cb; */
  color: #a1b6cb4b;
  display: flex;
  justify-content: center;
  overflow: auto;
}

.leftNav:hover {
  background-color: rgba(0, 0, 0, 0.5);
  /* color: #36c1cb; */
  color: #a1b6cb;
  transition: all 0.2s ease;
}

.leftNavContainer {
  /* padding: 25px 5px 0 5px; */
  padding: 25px;
}

.leftNavText:hover {
  color: #36c1cb;
  background-color: #1c1c1c;
  cursor: pointer;
}

.Main {
  /* position: relative; */
  /* background-color: #c4c4c4; */
  /* color: #36c1cb; */
  color: #a1b6cb;
  /* width: 80vw; */
  /* left: 20vw; */
}

.mainContainer {
  padding: 0 50px;
}

.articleCardTitle {
  padding: 30px 5px 30px 5px;
  color: #36c1cb;
  font-size: 36px;
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
</style>
