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
          <p class="fz30 cor36">隊列 ( Queue )</p>
          <br />
          <p class="fz30">
            <a
              href="https://en.wikipedia.org/wiki/Queue_%28abstract_data_type%29"
              >queue @wiki</a
            >
          </p>
          <br />

          <p class="fz30">
            他是一種 受限 的 線性結構 , 只允許在前端 刪除元素 , 在後端 插入元素
            , 並符合 先進先出 ( FIFO ) ( first in first out )
          </p>
          <br />
          <br />
          <br />

          <p class="fz30">先進先出 ( FIFO ) ( first in first out )</p>
          <br />
          <p class="fz30">只能在 表的 前端 進行 刪除</p>
          <br />

          <p class="fz30">在 表的 後端 進行插入</p>
          <br />

          <p class="fz30 cor36"># 隊列操作</p>
          <br />

          <p class="fz30">
            enqueue(元素) 向 隊列尾部 添加 一個 (或多個) 新的項
          </p>
          <br />

          <p class="fz30">dequeue() 移除隊列的第一項 , 並返回 被移除的元素</p>
          <br />
          <p class="fz30">front() 返回隊列中 第一個元素 , 隊列不做改變</p>
          <br />
          <p class="fz30">isEmpty() 隊列中不包含任何元素 返回 true</p>
          <br />

          <p class="fz30">size() 返回隊列包含的元素個數 , 類似數組.length</p>
          <br />

          <p class="fz30">toString() 將隊列中內容 轉成字串形式</p>
          <br />

          <div class="bgcVS">
            <p>基於數組實現</p>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">Queue</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//屬性</span>
              <div>
                <span class="then">this</span> <span class="word">.items</span>
                <span class="then">=</span> <span class="brackets">[]</span>
              </div>
              <br />

              <div><span class="comment">//方法</span></div>
              <div><span class="comment">//1.將元素加入到隊列中</span></div>
              <div>
                <span class="word">Queue.</span>
                <span class="variable">prototype.enqueue</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span>
                <span class="word">element</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return this</span>
                <span class="word">.items</span>
                <span class="variable">.push</span>
                <span class="brackets">(</span>
                <span class="word">element</span>
                <span class="brackets">)</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//2.從隊列中刪除前端元素</span></div>

              <div>
                <span class="word">Queue</span>
                <span class="variable">.prototype.dequeue</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return this </span>
                <span class="word">.items</span>
                <span class="variable">.shift</span>
                <span class="brackets">()</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//3.查看前端元素</span></div>

              <div>
                <span class="word">Queue</span>
                <span class="variable">.prototype.front</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return this </span>
                <span class="word">.item</span> <span class="brackets">[</span>
                <span class="number">0</span> <span class="brackets">]</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//4.查看隊列是否為空</span></div>

              <div>
                <span class="word">Queue</span>
                <span class="variable">.prototype.isEmpty</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return this </span>
                <span class="word">.items</span>
                <span class="variable">.length</span>
                <span class="then">==</span> <span class="number">0</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//5.查看隊列中元素個數</span></div>

              <div>
                <span class="word">Queue</span>
                <span class="variable">.prototype.size</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return this </span>
                <span class="word">.items</span>
                <span class="variable">.length</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//6.toString方法</span></div>

              <div>
                <span class="word">Queue</span>
                <span class="variable">.prototype.toString</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>

              <div class="padTwo VSL">
                <span class="function">let </span>
                <span class="word">resultString</span>
                <span class="then">=</span> <span class="src">""</span>
                <div>
                  <span class="then">for </span>
                  <span class="brackets">(</span>
                  <span class="function">let </span>
                  <span class="word">i</span> <span class="then">=</span>
                  <span class="number">0</span> <span class="then">;</span>
                  <span class="word">i</span> <span class="then">＜</span>
                  <span class="then">this</span>
                  <span class="word">.items</span>
                  <span class="variable">.length</span>
                  <span class="then">;</span> <span class="word">i</span>
                  <span class="then">++</span> <span class="brackets">){</span>
                </div>
                <div></div>

                <div class="padTwo VSL">
                  <span class="word">resultString</span>
                  <span class="then">+=</span> <span class="then">this</span>
                  <span class="word">.items</span>
                  <span class="brackets">[</span> <span class="word">i</span>
                  <span class="brackets">]</span> <span class="then">+</span>
                  <span class="src">" "</span>
                  <div>
                    <span class="comment"
                      >//resultString=resultString+this.items[i]+""</span
                    >
                  </div>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
                <div>
                  <span class="then">return </span>
                  <span class="word">resultString</span>
                </div>
              </div>
              <div><span class="brackets">}</span></div>

              <div></div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div><span class="comment">//使用隊列</span></div>
            <div>
              <span class="function">let </span>
              <span class="word">queue</span> <span class="then">= new </span>
              <span class="word">Queue</span> <span class="brackets">()</span>
            </div>
            <br />
            <div>
              <span class="word">queue</span>
              <span class="variable">.enqueue</span>
              <span class="brackets">(</span> <span class="src">"abc"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">queue</span>
              <span class="variable">.enqueue</span>
              <span class="brackets">(</span> <span class="src">"bca"</span>
              <span class="brackets">)</span>
            </div>

            <p class="comment">基於鏈表實現</p>
          </div>

          <br />
          <p class="fz28 cor36"># 擊鼓傳花</p>
          <br />
          <p class="fz28">學生圍一圈 , 某同學開始向旁邊同學傳花</p>
          <br />
          <p class="fz28">某人擊鼓 , 當鼓聲停下 , 花在誰手裡?</p>
          <br />
          <p class="fz28 cor36"># 題目</p>
          <br />
          <p class="fz28">幾個人圍一圈 , 開始數數 ex 數到 5 人淘汰</p>
          <br />
          <p class="fz28">
            最後剩下的這個人勝利 , 請問最後剩下的 原來在哪一個位置?
          </p>
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">passGame</span>
              <span class="brackets">(</span>
              <span class="word">nameList,num</span>
              <span class="brackets">)</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//1.創建一個隊列結構</span>
              <div>
                <span class="function">let </span>
                <span class="word">queue</span>
                <span class="then">= new </span>
                <span class="word">Queue</span> <span class="brackets">()</span>
              </div>
              <br />
              <div><span class="comment">//2.將所有人依次加到隊列中</span></div>
              <div>
                <span class="then">for </span> <span class="brackets">(</span>
                <span class="function">let </span> <span class="word">i</span>
                <span class="then">=</span> <span class="number">0</span>
                <span class="then">;</span> <span class="word">i</span>
                <span class="then">＜</span> <span class="word">nameList</span>
                <span class="variable">.length</span>
                <span class="then">;</span> <span class="word">i</span>
                <span class="then">++</span> <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">queue</span>
                <span class="word">.enqueue</span>
                <span class="brackets">(</span>
                <span class="word">nameList</span>
                <span class="brackets">[</span> <span class="word">i</span>
                <span class="brackets">])</span>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//3.開始數數字</span></div>
              <div>
                <span class="comment"
                  >// 不是 num 時 , 重新加入到 隊列 末尾</span
                >
              </div>
              <div>
                <span class="comment"
                  >// 是 num 這數字時 , 將其從 隊列中 刪除</span
                >
              </div>
              <br />
              <div>
                <span class="comment"
                  >//3.1num數字之前的人重新放入隊列的末尾</span
                >
              </div>
              <div>
                <span class="comment">for (let i = 0;i ＜ num - 1 ; i++){</span>
              </div>
              <div>
                <span class="comment padTwo"
                  >queue.enqueue(queue.dequeue() )</span
                >
              </div>
              <div>
                <span class="comment">}</span>
              </div>
              <div>
                <span class="comment">//3.2對應這個人 , 直接從隊列中刪除</span>
              </div>
              <div>
                <span class="comment">queue.dequeue()</span>
              </div>
              <br />
              <div>
                <span class="function">while</span>
                <span class="brackets">(</span> <span class="word">queue</span>
                <span class="variable">.size</span>
                <span class="brackets">()</span> <span class="then">></span>
                <span class="number">1</span> <span class="brackets">){</span>
              </div>

              <div></div>

              <div class="padTwo VSL">
                <span class="comment"
                  >//3.1num數字之前的人重新放入隊列的末尾</span
                >
                <span class="word"></span>
                <div>
                  <span class="then">for </span>
                  <span class="brackets">(</span>
                  <span class="function">let </span>
                  <span class="word">i</span> <span class="then">=</span>
                  <span class="number">0</span> <span class="then">;</span>
                  <span class="word">i</span> <span class="then">＜</span>
                  <span class="word">num</span> <span class="then">-</span>
                  <span class="number">1</span> <span class="then">;</span>
                  <span class="word">i</span> <span class="then">++</span>
                  <span class="brackets">){</span>
                </div>

                <div></div>
                <div class="padTwo VSL">
                  <span class="word">queue</span>
                  <span class="variable">.enqueue</span>
                  <span class="brackets">(</span>
                  <span class="word">queue</span>
                  <span class="variable">.dequeue</span>
                  <span class="brackets">())</span>
                </div>
                <div><span class="brackets">}</span></div>
                <div>
                  <span class="comment">//3.2對應這個人,直接從隊列中刪除</span>
                </div>
                <div>
                  <span class="word">queue</span>
                  <span class="variable">.dequeue</span>
                  <span class="brackets">()</span>
                </div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//4.獲取剩下的那個人</span></div>
              <div>
                <span class="function">let </span>
                <span class="word">endName</span> <span class="then">=</span>
                <span class="word">queue</span>
                <span class="variable">.front</span>
                <span class="brackets">()</span>
              </div>
              <div>
                <span class="then">return </span>
                <span class="word">nameList</span>
                <span class="variable">.indexOf</span>
                <span class="brackets">(</span>
                <span class="word">endName</span>
                <span class="brackets">)</span>
              </div>
            </div>
            <div><span class="brackets">}</span></div>
          </div>
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
