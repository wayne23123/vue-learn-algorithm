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
          <p class="fz28">
            <a href="https://zh.wikipedia.org/zh-tw/%E9%93%BE%E8%A1%A8"
              >linked list @wiki</a
            >
          </p>
          <br />
          <p class="fz28">鏈表不同於數組 , 鏈表中元素 不必是 連續的空間</p>
          <br />
          <p class="fz28">
            鏈表每個元素 由一個 存儲元素本身的節點 和一個 指向下一個元素的引用
            組成
          </p>
          <br />
          <p class="fz28 cor36"># 優</p>
          <br />
          <p class="fz28">內存空間不必是 連續的</p>
          <br />
          <p class="fz28">在創建時 不必確定大小 , 可無限延伸</p>
          <br />
          <p class="fz28">
            插入 和 刪除數據時 , 時間複雜度達到 O(1) , 相對數組效率高很多
          </p>
          <br />
          <p class="fz28 cor36"># 缺</p>
          <br />
          <p class="fz28">訪問任一元素 , 都要從頭開始訪問</p>
          <br />
          <p class="fz28">無法透過下標直接訪問元素</p>
          <br />

          <p class="fz28 cor36"># 鏈表操作</p>
          <br />
          <p class="fz28">append ( 元素 ) 向列表尾部添加一個新的項</p>
          <br />
          <p class="fz28">
            insert ( position , 元素 ) 向列表特定位置插入新的項
          </p>
          <br />
          <p class="fz28">get ( position ) 獲取對應位置的元素</p>
          <br />
          <p class="fz28">
            indexOf ( 元素 ) 返回元素在列表中的索引 , 列表沒有該元素 返回 -1
          </p>
          <br />
          <p class="fz28">update ( position ) 修改某位置的元素</p>
          <br />
          <p class="fz28">removeAt ( position ) 從列表的特定位置移除一項</p>
          <br />
          <p class="fz28">remove ( 元素 ) 從列表中移除一項</p>
          <br />
          <p class="fz28">isEmpty() 鏈表中沒任何元素 返回 true</p>
          <br />
          <p class="fz28">size() 返回鏈表包含的元素個數 , 類似數組.length</p>
          <br />
          <p class="fz28">
            toString() 由於鏈表用 Node 類 , 需要重寫JS對象默認 toString 方法 ,
            讓其只輸出元素的值
          </p>
          <br />

          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">LinkList</span>
              <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//內部的類:節點類</span>
              <div>
                <span class="function">function </span>
                <span class="word">Node</span> <span class="brackets">(</span>
                <span class="word">data</span> <span class="brackets">){</span>
              </div>

              <div></div>
              <div class="padTwo VSL">
                <span class="then">this</span> <span class="word">.data</span>
                <span class="then">=</span> <span class="word">data</span>
                <div>
                  <span class="then">this</span>
                  <span class="word">.next</span> <span class="then">=</span>
                  <span class="then">null</span>
                </div>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//屬性</span></div>
              <div>
                <span class="then">this</span> <span class="word">.head</span>
                <span class="then">=null</span>
              </div>
              <div>
                <span class="then">this</span>
                <span class="variable">.length</span>
                <span class="then">=</span> <span class="number">0</span>
              </div>
              <br />
              <div><span class="comment">//1.追加方法</span></div>
              <div>
                <span class="word">LinkedList</span>
                <span class="variable">.prototype.append</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span> <span class="word">data</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="comment">//判斷是否添加的是第一個節點</span>
                <div>
                  <span class="then">if</span> <span class="brackets">(</span>
                  <span class="then">this</span>
                  <span class="variable">.length</span>
                  <span class="then">==</span> <span class="number">0</span>
                  <span class="brackets">) { </span>
                  <span class="comment">// 是第一個節點</span>
                </div>
                <div></div>
                <div class="padTwo VSL">
                  <span class="function">let </span>
                  <span class="word">newNode</span> <span class="then">=</span>
                  <span class="then">new </span> <span class="word">Node</span>
                  <span class="brackets">(</span>
                  <span class="word">data</span>
                  <span class="brackets">) </span>
                  <span class="comment">// 創建新 node 節點</span>
                  <div>
                    <span class="then">this</span>
                    <span class="word">.head</span> <span class="then">=</span>
                    <span class="word">newNode </span>
                    <span class="comment"
                      >// 讓 this 指針 指向 新 node 節點</span
                    >
                  </div>

                  <div></div>
                </div>

                <div>
                  <span class="brackets">}</span>
                  <span class="then">else </span>
                  <span class="brackets">{</span>
                </div>

                <div class="padTwo VSL">
                  <span class="function">let </span>
                  <span class="word">newNode</span> <span class="then">=</span>
                  <span class="then">new </span> <span class="word">Node</span>
                  <span class="brackets">(</span>
                  <span class="word">data</span>
                  <span class="brackets">) </span>

                  <span class="comment">// 創建新 node 節點</span>

                  <div>
                    <span class="comment"
                      >//通過這個head一個一個找到最後那個節點</span
                    >
                  </div>
                  <div>
                    <span class="comment"
                      >//讓最後那個節點 next = 指向 新的節點</span
                    >
                  </div>
                  <div>
                    <span class="function">let </span>
                    <span class="word">current</span>
                    <span class="then">= this</span>
                    <span class="word">.head</span>
                    <span class="comment"
                      >//因為head指針指向第一個節點,所以當前current為第一個節點</span
                    >
                  </div>
                  <div>
                    <span class="function">while</span>
                    <span class="brackets">(</span>
                    <span class="word">current.next</span>
                    <span class="brackets">){</span>
                    <span class="comment"
                      >//判斷當前next是否為null,是null代表是最後一個</span
                    >
                  </div>

                  <div></div>

                  <div class="padTwo VSL">
                    <span class="word">current</span>
                    <span class="then">=</span>
                    <span class="word">current.next</span>
                    <div></div>
                  </div>

                  <div><span class="brackets">}</span></div>
                  <div>
                    <span class="comment">//最後節點的next指向新的節點</span>
                  </div>
                  <div>
                    <span class="word">current.next</span>
                    <span class="then">=</span>
                    <span class="word">newNode</span>
                  </div>
                </div>
                <div><span class="brackets">}</span></div>
                <div><span class="comment">//length+1</span></div>
                <div>
                  <span class="then">this</span>
                  <span class="variable">.length</span>
                  <span class="then">+=</span> <span class="number">1</span>
                </div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>

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
          <p class="fz28"></p>
          <br />
          <p class="fz28"></p>
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
