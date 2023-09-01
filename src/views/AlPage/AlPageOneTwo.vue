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
            <a href="https://zh.wikipedia.org/zh-tw/%E5%A0%86%E6%A0%88"
              >stack @wiki</a
            >
          </p>
          <br />
          <p class="fz30">1. 棧 結構 只能在 一端 (棧頂) 添加和刪除 元素</p>
          <br />

          <p class="fz30">添加 -> 入棧</p>
          <br />
          <p class="fz30">刪除 -> 出棧</p>
          <br />

          <p class="fz30">2. 後進先出 (LIFO) (last in first out)</p>
          <br />

          <p class="fz30 cor36"># 棧的操作</p>
          <br />
          <p class="fz30">push() 添加新元素到棧頂</p>
          <br />
          <p class="fz30">pop() 移除棧頂元素 , 同時返回被移除的元素</p>
          <br />
          <p class="fz30">peek() 返回棧頂元素 , 不對棧做任何修改</p>
          <br />
          <p class="fz30">isEmpty() 棧沒元素 返回 true , 否則返回 false</p>
          <br />
          <p class="fz30">size() 返回棧裡 元素個數 , 類似數組.length</p>
          <br />
          <p class="fz30">toString() 將棧結構的內容 以 字符形式返回</p>
          <br />

          <p class="fz30 cor36"># 練習題</p>
          <br />
          <p class="fz30">
            六元素 6, 5, 4, 3, 2, 1 的順序進棧 , 哪個不是合法出棧順序?
          </p>
          <br />

          <p class="fz30">A 5 4 3 6 1 2</p>
          <br />

          <p class="fz30">B 4 5 3 2 1 6</p>
          <br />
          <p class="fz30">C 3 4 6 5 2 1</p>
          <br />

          <p class="fz30">D 2 3 4 1 5 6</p>
          <br />

          <p class="fz30">A 65 進棧 5出 4進出 3進出 6出 21進 1出 2出</p>
          <br />
          <p class="fz30">B 654 進 4出 5出 3進出 2進出 1進出 6出</p>
          <br />

          <p class="fz30">C 65432 進 2出 3出 4出 1進出 5出 6出</p>

          <div class="bgcVS">
            <p>基於數組實現</p>
            <br />
            <div><span class="comment">//在全局寫function一般叫函數</span></div>
            <div>
              <span class="comment"
                >//在function裡面寫function一般叫方法(和某一個對象實例有聯繫)</span
              >
            </div>
            <br />
            <div><span class="comment">//封裝棧類</span></div>
            <div>
              <span class="function">function </span>
              <span class="word">Stack</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//棧中的屬性</span>
              <div>
                <span class="then">this</span> <span class="word">.items</span>
                <span class="then">=</span> <span class="brackets">[]</span>
              </div>
              <br />
              <div>
                <span class="comment"
                  >//不推薦,相當於給某一個對象實例添加,每個對象都有function方法,更消耗內存</span
                >
              </div>
              <div>
                <span class="then">this</span>
                <span class="variable">.push</span> <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){}</span>
              </div>
              <br />
              <div>
                <span class="comment"
                  >//推薦,相當於給整個類添加方法,(共享的),節省內存</span
                >
              </div>
              <div>
                <span class="word">Stack.prototype.push</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span>
                <span class="word">element </span>
                <span class="brackets">){</span>
              </div>

              <div></div>

              <div class="padTwo VSL">
                <span class="then">this</span>
                <span class="word">.items.push</span>
                <span class="brackets">(</span>
                <span class="word">element </span>
                <span class="brackets">)</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />

              <div><span class="comment">//2.從棧中取出元素</span></div>
              <div>
                <span class="word">Stack.prototype.pop</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return this</span>
                <span class="word">.items.pop</span>
                <span class="brackets">()</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//3.查看棧頂元素</span></div>

              <div>
                <span class="word">Stack</span>
                <span class="variable">.prototype.peek</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return this </span>
                <span class="word">.items</span>
                <span class="brackets">[</span> <span class="then">this</span>
                <span class="word">.items</span>
                <span class="variable">.length</span>
                <span class="then">-</span> <span class="number">1</span>
                <span class="brackets">]</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//4.判斷 棧 是否 空</span></div>

              <div>
                <span class="word">Stack</span>
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
              <div><span class="comment">//5.獲取 棧中 元素的個數</span></div>

              <div>
                <span class="word">Stack</span>
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
              <div><span class="comment">//6. toString 方法</span></div>

              <div>
                <span class="word">Stack</span>
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
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div><span class="comment">//棧的使用</span></div>
            <div>
              <span class="function">let </span> <span class="word">s</span>
              <span class="then">=</span> <span class="then">new </span>
              <span class="word">Stack</span> <span class="brackets">()</span>
            </div>
            <br />
            <div>
              <span class="word">s</span> <span class="variable">.push</span>
              <span class="brackets">(</span> <span class="number">10</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">s</span> <span class="variable">.push</span>
              <span class="brackets">(</span> <span class="number">20</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">s</span> <span class="variable">.push</span>
              <span class="brackets">(</span> <span class="number">30</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">s</span> <span class="variable">.pop</span>
              <span class="brackets">()</span>
            </div>
            <br />
            <div>
              <span class="variable">alert</span>
              <span class="brackets">(</span> <span class="word">s</span>
              <span class="variable">.peek</span>
              <span class="brackets">() )</span>
            </div>
            <br />

            <p class="comment">基於鏈表實現</p>
            <br />
            <br />
            <p>#應用 十進制轉二進制</p>
            <br />
            <p>100</p>
            <p>計算 100 / 2 餘數 0</p>
            <p>計算 50 / 2 餘數 0</p>
            <p>計算 25 / 2 餘數 1</p>
            <p>計算 12 / 2 餘數 0</p>
            <p>計算 6 / 2 餘數 0</p>
            <p>計算 3 / 2 餘數 1</p>
            <p>計算 1 / 2 餘數 1</p>
            <br />
            <p>由下往上 1100100</p>
            <br />
            <div>
              <span class="function">function </span>
              <span class="word">dec2bin</span> <span class="brackets">(</span>
              <span class="word">decNumber</span>
              <span class="brackets">){</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//1.定義棧對象</span>
              <div>
                <span class="function">let </span>
                <span class="word">stack</span>
                <span class="then">= new </span>
                <span class="word">Stack</span> <span class="brackets">()</span>
              </div>
              <br />
              <div>
                <span class="comment"
                  >//2.循環操作 (因不確定循環幾次, 採用while)</span
                >
                <div>
                  <span class="function">while</span>
                  <span class="brackets">(</span>
                  <span class="word">decNumber</span>
                  <span class="then">></span> <span class="number">0</span>
                  <span class="brackets">){</span>
                </div>
              </div>

              <div></div>

              <div class="padTwo VSL">
                <span class="comment">//2.1獲取餘數,放入棧中</span>

                <div>
                  <span class="function">let </span>
                  <span class="word">stack</span>
                  <span class="then">= new </span>
                  <span class="word">Stack</span>
                  <span class="brackets">()</span>
                </div>

                <br />
                <div>
                  <span class="comment"
                    >//2.2獲取整除後結果,做為下一次運行的數字</span
                  >
                </div>
                <div>
                  <span class="word">decNumber</span>
                  <span class="then">=</span>
                  <span class="brackets">Math</span>
                  <span class="variable">.floor</span>
                  <span class="brackets">(</span>
                  <span class="word">decNumber</span>
                  <span class="comment">/</span> <span class="number">2</span>
                  <span class="brackets">)</span>
                </div>

                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//從棧中取出0和1</span></div>

              <div>
                <span class="function">let </span>
                <span class="word">binaryString</span>
                <span class="then">=</span> <span class="src">""</span>
              </div>
              <div>
                <span class="comment">//只要元素不為空->代表還有元素</span>
              </div>
              <div>
                <span class="function">while</span>
                <span class="brackets">(</span>
                <span class="word">!stack</span>
                <span class="variable">.isEmpty</span>
                <span class="brackets">()){</span>
              </div>
              <div class="padTwo VSL">
                <span class="word">binaryString</span>
                <span class="then">+=</span> <span class="word">stack</span>
                <span class="variable">.pop</span>
                <span class="brackets">()</span>
                <div>
                  <span class="comment"
                    >//binaryString=binaryString+stack.pop()</span
                  >
                </div>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <div>
                <span class="then">return </span>
                <span class="word">binaryString</span>
              </div>
            </div>
            <div><span class="brackets">}</span></div>
            <br />
            <div>
              <span class="variable">alert</span>
              <span class="brackets">(</span> <span class="word">dec2bin</span>
              <span class="brackets">(</span> <span class="number">100</span>
              <span class="brackets">))</span>
            </div>
          </div>
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
