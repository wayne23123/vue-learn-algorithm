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
          <p class="fz28">
            <a
              href="https://zh.wikipedia.org/zh-tw/%E6%A0%91_(%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)"
              >樹結構 @wiki</a
            >
          </p>
          <br />
          <p class="fz28 cor36"># 樹的術語</p>
          <br />
          <p class="fz28">樹 (Tree) : n(n>=0) 個節點構成的有限集合</p>
          <br />
          <p class="fz28">當 n = 0 為空樹</p>
          <br />
          <p class="fz28">對任一 非空樹 (n > 0) 有以下性質</p>
          <br />
          <p class="fz28">樹中有一個 "根 Root" 節點 用 r 表示</p>
          <br />
          <p class="fz28">
            其餘節點可分 m(m>0) 個互不相交的有限集 T1 , T2 , ... , Tm
          </p>
          <br />
          <p class="fz28">其中每個集合本身又是一顆樹 為 "子樹 SubTree"</p>
          <br />
          <p class="fz28 cor36">術語 ... 節點(Node)</p>
          <br />
          <p class="fz28 cor36">1.節點的度 (Degree)</p>
          <br />
          <p class="fz28">節點的 子樹 個數</p>
          <br />
          <br />

          <p class="fz28 cor36">2.樹的度 : 樹的所有節點中最大的度數</p>
          <br />
          <p class="fz28">樹的所有節點中最大的度數</p>
          <br />
          <br />

          <p class="fz28 cor36">3.葉節點 (Leaf)</p>
          <br />
          <p class="fz28">度為 0 的節點 (葉子節點)</p>
          <br />
          <br />

          <p class="fz28 cor36">4.父節點 (Parent)</p>
          <br />
          <p class="fz28">有子樹的節點 是其子樹的 根節點 的父節點</p>
          <br />
          <br />

          <p class="fz28 cor36">5.子節點 (Child)</p>
          <br />
          <p class="fz28">
            若 A 節點是 B 節點的父節點 , 則稱 B 節點是A節點的 子節點 (孩子節點)
          </p>
          <br />
          <br />

          <p class="fz28 cor36">6.兄弟節點 (Sibling)</p>
          <br />
          <p class="fz28">具有同一父節點的各節點彼此是兄弟節點</p>
          <br />
          <br />

          <p class="fz28 cor36">7.路徑 & 路徑長度</p>
          <br />
          <p class="fz28">
            從節點 n1 到 nk 的路徑為一個節點序列 n1,n2,...,nk,ni 是 ni+1
            的父節點。 路徑所包含邊的個數為路徑的長度
          </p>
          <br />
          <br />

          <p class="fz28 cor36">8.節點的層次 (Level)</p>
          <br />
          <p class="fz28">規定根結點在 1 層 , 其他任一節點的層數</p>
          <br />
          <br />

          <p class="fz28 cor36">9.樹的深度 (Depth)</p>
          <br />
          <p class="fz28">樹中所有節點中的最大層次。</p>
          <br />
          <br />

          <p class="fz28 cor36">
            兒子兄弟表示法
            <a href="https://blog.csdn.net/qq_44322357/article/details/90145209"
              >@csdn</a
            >
          </p>
          <br />
          <p class="fz28 cor36"># 二叉樹 概念</p>
          <br />
          <p class="fz28">樹中每個節點 最多 只能有 2 個子節點</p>
          <br />
          <p class="fz28">所有的樹 都可表示成 二叉樹 型式</p>
          <br />
          <p class="fz28 cor36"># 定義</p>
          <br />
          <p class="fz28">二叉樹可以為空 ( 沒有節點 )</p>
          <br />
          <p class="fz28">
            若不為空 , 則它是由根節點 和 左子樹 TL 和 右子樹 TR
            的兩個不相交的二叉樹 組成
          </p>
          <br />
          <p class="fz28 cor36"># 二叉樹 5 型態</p>
          <br />
          <p class="fz28">
            <a href="https://www.cnblogs.com/desola/p/12687940.html"
              >数据结构二叉树 @cnblogs</a
            >
          </p>
          <br />
          <p class="fz28 cor36"># 二叉樹特性</p>
          <br />
          <p class="fz28">
            一個 二叉樹 第 i 層的最大節點數為 2^( i-1 ) , i >= 1
          </p>
          <br />
          <p class="fz28">深度為 k 的二叉樹有最大節點總數為 2^k - 1 , k >= 1</p>
          <br />
          <p class="fz28">
            對任何非空二叉樹 T , 若 n0 表示 葉節點的個數 , n2 是深度為 2
            的非葉節點個數 , 那兩者滿足關係 n0 = n2 + 1
          </p>
          <br />
          <p class="fz28 cor36"># 完美二叉樹</p>
          <br />
          <p class="fz28">
            在二叉樹中 , 除了最下一層葉節點外 , 每層節點都有 2 個子節點
          </p>
          <br />
          <p class="fz28 cor36"># 完全二叉樹</p>
          <br />
          <p class="fz28">
            除 二叉樹 最後一層外 , 其他各層的節點數 都達到最大個數
          </p>
          <br />
          <p class="fz28">
            且最後一層 從左向右 的葉節點 連續存在 , 只缺 右側 若干節點
          </p>
          <br />
          <p class="fz28">完美二叉樹 是特殊的 完全二叉樹</p>
          <br />
          <p class="fz28 cor36"># 二叉樹 的 存儲 常見方式是 數組 & 鏈表</p>
          <br />
          <p class="fz28">數組</p>
          <br />
          <p class="fz28">完全二叉樹</p>
          <br />
          <p class="fz28">非完全二叉樹 會造成 很大的空間浪費</p>
          <br />
          <p class="fz28">鏈表</p>
          <br />
          <p class="fz28">非完全二叉樹</p>
          <br />
          <p class="fz28">Left Data Right</p>
          <br />
          <p class="fz28 cor36">
            # 二叉搜索樹
            <a
              href="https://zh.wikipedia.org/zh-tw/%E4%BA%8C%E5%85%83%E6%90%9C%E5%B0%8B%E6%A8%B9"
              >@wiki</a
            >
            . BST . Binary Search Tree
          </p>
          <br />
          <p class="fz28">= 二叉排序樹 = 二叉查找樹</p>
          <br />
          <p class="fz28">二叉搜索樹 可以為空</p>
          <br />
          <p class="fz28">若不為空 , 滿足:</p>
          <br />
          <p class="fz28">非空左子樹 的 所有鍵值 小於 其根節點 的鍵值</p>
          <br />
          <p class="fz28">非空右子樹 的 所有鍵值 大於 其根節點 的鍵值</p>
          <br />
          <p class="fz28">左、右子樹本身也是 二叉搜索樹</p>
          <br />
          <p class="fz28 cor36"># 二叉搜索樹 # 操作</p>
          <p class="fz28">1.insert ( key )</p>
          <br />
          <p class="fz28">向 樹中 插入 一個 新的鍵</p>
          <br />
          <p class="fz28">2.search ( key )</p>
          <br />
          <p class="fz28">在樹中 查找 一個鍵 , 如果節點存在 , 返回 true</p>
          <br />
          <p class="fz28">3.inOrderTraverse</p>
          <br />
          <p class="fz28">通過 中序 遍歷方式 遍歷所有節點</p>
          <br />
          <p class="fz28">4.preOrderTraverse</p>
          <br />
          <p class="fz28">通過 先序 遍歷方式 遍歷所有節點</p>
          <br />
          <p class="fz28">5.postOrderTraverse</p>
          <br />
          <p class="fz28">通過 後序 遍歷方式 遍歷所有節點</p>
          <br />
          <p class="fz28">6.min</p>
          <br />
          <p class="fz28">返回樹中 最小的 值/鍵</p>
          <br />
          <p class="fz28">7.max</p>
          <br />
          <p class="fz28">返回樹中 最大的 值/鍵</p>
          <br />
          <p class="fz28">8.remove ( key )</p>
          <br />

          <p class="fz28">從 樹中 移除 某個鍵</p>

          <div class="bgcVS"></div>
          <br />

          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
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
