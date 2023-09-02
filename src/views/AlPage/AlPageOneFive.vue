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
          <p class="fz28">集合通常由一組 無序的 , 不能重複的 元素構成</p>
          <br />
          <p class="fz28">集合結構中 元素 不允許重複</p>
          <br />
          <p class="fz28 cor36"># 集合 操作</p>
          <br />
          <p class="fz28">add ( value ) 向集合添加一個新的項</p>
          <br />
          <p class="fz28">remove ( value ) 從集合移除一個值</p>
          <br />
          <p class="fz28">has ( value ) 如果值在集合中 返回 true</p>
          <br />
          <p class="fz28">clear () 移除集合中的所有項</p>
          <br />
          <p class="fz28">size () 返回集合所包含元素的數量 , 類似數組.length</p>
          <br />
          <p class="fz28">values () 返回一個包含集合中所有值的數組</p>
          <br />
          <p class="fz28">集合間操作</p>
          <br />
          <p class="fz28"><a href="">並集 交集 差集 子集 @掘金</a></p>
          <br />
          <p class="fz28">並集 : 返回 一 包含 2 集合 所有元素</p>
          <br />
          <p class="fz28">交集 : 返回 一 包含 2 集合 共有元素</p>
          <br />
          <p class="fz28">
            差集 : 返回 一 包含 所有 存在於 第 1 集合 且 不在 第 2 集合的元素
            的新集合
          </p>
          <br />

          <p class="fz28">子集 : 驗證 一 給定集合 是否是 另一集合 的子集</p>
          <div class="bgcVS">
            <div>
              <span class="function">function </span>
              <span class="word">Set</span> <span class="brackets">(){</span>
            </div>
            <div class="padTwo VSL">
              <span class="comment">//屬性</span>
              <div>
                <span class="then">this</span> <span class="word">.items</span>
                <span class="then">=</span> <span class="brackets">{}</span>
              </div>
              <br />
              <div><span class="comment">//方法</span></div>
              <div><span class="comment">//1.add方法</span></div>
              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.add</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span> <span class="word">value</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <div>
                  <span class="comment"
                    >//判斷當前集合中是否已經包含了該元素</span
                  >
                </div>
                <div>
                  <span class="then">if</span> <span class="brackets">(</span>
                  <span class="then">this</span>
                  <span class="variable">.has</span>
                  <span class="brackets">(</span>
                  <span class="word">value</span>
                  <span class="brackets">)){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="then">return </span>
                  <span class="number">false</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>

                <br />
                <span class="comment">//將元素添加到集合中</span>
                <div>
                  <span class="then">this</span>
                  <span class="word">.items</span>
                  <span class="brackets">[</span>
                  <span class="word">value</span>
                  <span class="brackets">]</span> <span class="then">=</span>
                  <span class="word">value</span>
                  <span class="comment">//讓鍵值都為value</span>
                </div>
                <div>
                  <span class="then">return </span>
                  <span class="number">true</span>
                </div>

                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <div>
                <span class="comment"
                  >//2.has方法 判斷當前集合中是否已經包含了該元素</span
                >
              </div>
              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.has</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span> <span class="word">value</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="comment">//重複返回true</span>
                <div>
                  <span class="then">return </span>
                  <span class="then">this</span>
                  <span class="word">.items</span>
                  <span class="variable">.hasOwnProperty</span>
                  <span class="brackets">(</span>
                  <span class="word">value</span>
                  <span class="brackets">)</span>
                </div>

                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <div class="comment">//3.remove方法</div>

              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.remove</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span> <span class="word">value</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="comment">//2.1判斷該集合中是否包含該元素</span>
                <div>
                  <span class="then">if</span> <span class="brackets">(</span>
                  <span class="word">!</span> <span class="then">this</span>
                  <span class="word">.has</span>
                  <span class="brackets">(</span>
                  <span class="word">value</span>
                  <span class="brackets">)){</span>
                  <span class="comment">//沒有包含情況下,return false</span>
                </div>

                <div></div>
                <div class="padTwo VSL">
                  <span class="then">return </span>
                  <span class="number">false</span>
                  <div></div>
                </div>

                <div><span class="brackets">}</span></div>

                <div>
                  <span class="comment">//2.2如果包含,將元素從屬性中刪除</span
                  ><a href="https://juejin.cn/post/6844903918804172814"
                    >delete @掘金</a
                  >
                </div>
                <div>
                  <span class="variable">delete</span>
                  <span class="then">this</span>
                  <span class="word">.items</span>
                  <span class="brackets">[</span>
                  <span class="word">value</span>
                  <span class="brackets">]</span>
                </div>
                <div>
                  <span class="then">return </span>
                  <span class="number">true</span>
                </div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//4.clear方法</span></div>

              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.clear</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">this</span> <span class="word">.items</span>
                <span class="then">=</span> <span class="brackets">{}</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//5.size方法</span></div>

              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.size</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return </span>
                <span class="brackets">Object</span>
                <span class="word">.keys</span> <span class="brackets">(</span>
                <span class="then">this</span> <span class="word">.items</span>
                <span class="brackets">)</span>
                <span class="variable">.length</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//6.獲取集合中所有值</span></div>

              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.value</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(){</span>
              </div>
              <div class="padTwo VSL">
                <span class="then">return </span>
                <span class="brackets">Object</span>
                <span class="word">.keys</span> <span class="brackets">(</span>
                <span class="then">this</span> <span class="word">.items</span>
                <span class="brackets">)</span>
                <div></div>
              </div>

              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//集合間操作</span></div>
              <div><span class="comment">//1.並集</span></div>

              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.union</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span>
                <span class="word">otherSet</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="comment"
                  >//this表當前對象,在這個集合方法裡面的當前對象,就是集合對象</span
                >
                <div>
                  <span class="comment"
                    >// this 集合對象A // otherSet 集合對象B</span
                  >
                </div>
                <div><span class="comment">//1.1創建新的集合</span></div>
                <div>
                  <span class="function">let </span>
                  <span class="word">unionSet</span>
                  <span class="then">=</span> <span class="then">new </span>
                  <span class="word">Set</span> <span class="brackets">()</span>
                </div>
                <br />
                <div>
                  <span class="comment"
                    >// 1.2 將 A 集合中所有的元素添加到新集合中</span
                  >
                </div>
                <div>
                  <span class="function">let </span>
                  <span class="variable">values</span>
                  <span class="then">=</span> <span class="then">this</span>
                  <span class="variable">.values</span>
                  <span class="brackets">()</span>
                </div>
                <div>
                  <span class="then">for </span>
                  <span class="brackets">(</span>
                  <span class="function">let </span>
                  <span class="word">i</span> <span class="then">=</span>
                  <span class="number">0</span> <span class="then">;</span>
                  <span class="word">i</span> <span class="then">＜</span>
                  <span class="variable">values</span>
                  <span class="variable">.length</span>
                  <span class="then">;</span> <span class="word">i</span>
                  <span class="then">++</span> <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">unionSet</span>
                  <span class="variable">.add</span>
                  <span class="brackets">(</span>
                  <span class="variable">values</span>
                  <span class="brackets">[</span> <span class="word">i</span>
                  <span class="brackets">])</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
                <br />
                <div>
                  <span class="comment"
                    >// 1.3 取出 B 集合中的元素 , 判斷是否需要加到新集合</span
                  >
                </div>
                <div>
                  <span class="variable">values</span>
                  <span class="then">=</span>
                  <span class="word">otherSet</span>
                  <span class="variable">.values</span>
                  <span class="brackets">()</span>
                </div>
                <div>
                  <span class="then">for </span>
                  <span class="brackets">(</span>
                  <span class="function">let </span>
                  <span class="word">i</span> <span class="then">=</span>
                  <span class="number">0</span> <span class="then">;</span>
                  <span class="word">i</span> <span class="then">＜</span>
                  <span class="variable">values</span>
                  <span class="variable">.length</span>
                  <span class="then">;</span> <span class="word">i</span>
                  <span class="then">++</span> <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="word">unionSet</span>
                  <span class="variable">.add</span>
                  <span class="brackets">(</span>
                  <span class="variable">values</span>
                  <span class="brackets">[</span> <span class="word">i</span>
                  <span class="brackets">])</span>
                  <div></div>
                </div>
                <div><span class="brackets">}</span></div>
                <div><span class="comment">//直接返回A和B並集</span></div>
                <div>
                  <span class="then">return </span>
                  <span class="word">unionSet</span>
                </div>

                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />
              <div><span class="comment">//2.交集</span></div>
              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.intersection</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span>
                <span class="word">otherSet</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <div><span class="comment">//this:集合A</span></div>
                <div><span class="comment">//otherSet:集合B</span></div>
                <div><span class="comment">//1.創建新的集合</span></div>
                <div>
                  <span class="function">let </span>
                  <span class="word">intersectionSet</span>
                  <span class="then">= new </span> <span class="word">Set</span>
                  <span class="brackets">()</span>
                </div>
                <br />
                <div>
                  <span class="comment"
                    >//2.從A中取出一個個元素,判斷是否同時存在於集合B中,存在放入新集合中</span
                  >
                </div>
                <div>
                  <span class="function">let </span>
                  <span class="variable">values</span>
                  <span class="then">=</span> <span class="then">this</span>
                  <span class="variable">.values</span>
                  <span class="brackets">()</span>
                </div>
                <div>
                  <span class="then">for </span>
                  <span class="brackets">(</span>
                  <span class="function">let </span>
                  <span class="word">i</span> <span class="then">=</span>
                  <span class="number">0</span> <span class="then">;</span>
                  <span class="word">i</span>
                  <span class="then">＜</span>
                  <span class="variable">values</span>
                  <span class="variable">.length</span>
                  <span class="then">;</span> <span class="word">i</span>
                  <span class="then">++</span> <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="function">let </span>
                  <span class="word">item</span> <span class="then">=</span>
                  <span class="word">value</span>
                  <span class="brackets">[</span> <span class="word">i</span>
                  <span class="brackets">]</span>
                  <div>
                    <span class="then">if</span> <span class="brackets">(</span>
                    <span class="word">otherSet</span>
                    <span class="word">.has</span>
                    <span class="brackets">(</span>
                    <span class="word">item</span>
                    <span class="brackets">)){</span>
                  </div>

                  <div></div>
                  <div class="padTwo VSL">
                    <span class="word">intersectionSet</span>
                    <span class="word">.add</span>
                    <span class="brackets">(</span>
                    <span class="word">item</span>
                    <span class="brackets">)</span>
                    <div></div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>
                <div><span class="brackets">}</span></div>
                <div>
                  <span class="then">return </span>
                  <span class="word">intersectionSet</span>
                </div>

                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
              <br />

              <div><span class="comment">//差集</span></div>
              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.difference </span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span>
                <span class="word">otherSet</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <div><span class="comment">//this:集合A</span></div>
                <div><span class="comment">//otherSet:集合B</span></div>
                <div><span class="comment">//1.創建新的集合</span></div>
                <div>
                  <span class="function">let </span>
                  <span class="word">intersectionSet</span>
                  <span class="then">= new </span> <span class="word">Set</span>
                  <span class="brackets">()</span>
                </div>
                <br />
                <div>
                  <span class="comment"
                    >//2.取出A集合一個個元素,判斷是否同時存在於集合B中,不在B中則添加到新集合中</span
                  >
                </div>
                <div>
                  <span class="function">let </span>
                  <span class="variable">values</span>
                  <span class="then">=</span> <span class="then">this</span>
                  <span class="variable">.values</span>
                  <span class="brackets">()</span>
                </div>
                <div>
                  <span class="then">for </span>
                  <span class="brackets">(</span>
                  <span class="function">let </span>
                  <span class="word">i</span> <span class="then">=</span>
                  <span class="number">0</span> <span class="then">;</span>
                  <span class="word">i</span>
                  <span class="then">＜</span>
                  <span class="variable">values</span>
                  <span class="variable">.length</span>
                  <span class="then">;</span> <span class="word">i</span>
                  <span class="then">++</span> <span class="brackets">){</span>
                </div>

                <div></div>

                <div class="padTwo VSL">
                  <span class="function">let </span>
                  <span class="word">item</span> <span class="then">=</span>
                  <span class="variable">values</span>
                  <span class="brackets">[</span> <span class="number">i</span>
                  <span class="brackets">]</span>
                  <div>
                    <span class="then">if</span>
                    <span class="brackets">(</span>
                    <span class="word">!otherSet</span>
                    <span class="variable">.has</span>
                    <span class="brackets">(</span>
                    <span class="word">item</span>
                    <span class="brackets">)){</span>
                  </div>

                  <div></div>
                  <div class="padTwo VSL">
                    <span class="word">differenceSet</span>
                    <span class="variable">.add</span>
                    <span class="brackets">(</span>
                    <span class="word">item</span>
                    <span class="brackets">)</span>
                    <div></div>
                  </div>
                  <div><span class="brackets">}</span></div>
                </div>

                <div><span class="brackets">}</span></div>

                <div>
                  <span class="then">return </span>
                  <span class="word">differenceSet</span>
                </div>
              </div>
              <div><span class="brackets">}</span></div>

              <br />
              <div><span class="comment">//子集</span></div>
              <div>
                <span class="word">Set</span>
                <span class="variable">.prototype.subset</span>
                <span class="then">=</span>
                <span class="function">function </span>
                <span class="brackets">(</span>
                <span class="word">otherSet</span>
                <span class="brackets">){</span>
              </div>
              <div class="padTwo VSL">
                <span class="comment">//this:集合A</span>
                <div><span class="comment">//otherSet:集合B</span></div>
                <div>
                  <span class="comment"
                    >//遍歷集合A中所有元素,如果發現,集合A中的元素,在集合B中不存在,那為false</span
                  >
                </div>
                <div>
                  <span class="comment"
                    >//如果遍歷完整個集合,依然沒有返回false,那返回true即可</span
                  >
                </div>
                <div>
                  <span class="function">let </span>
                  <span class="variable">values</span>
                  <span class="then">=</span> <span class="then">this</span>
                  <span class="variable">.values</span>
                  <span class="brackets">()</span>
                </div>
                <div>
                  <span class="then">for </span>
                  <span class="brackets">(</span>
                  <span class="function">let </span>
                  <span class="number">i</span> <span class="then">=</span>
                  <span class="number">0</span> <span class="then">;</span>
                  <span class="number">i</span> <span class="then">＜</span>
                  <span class="variable">values</span>
                  <span class="variable">.length</span>
                  <span class="then">;</span> <span class="number">i</span>
                  <span class="then">++</span> <span class="brackets">){</span>
                </div>
                <div class="padTwo VSL">
                  <span class="function">let </span>
                  <span class="word">item</span> <span class="then">=</span>
                  <span class="variable">values</span>
                  <span class="brackets">[</span> <span class="number">i</span>
                  <span class="brackets">]</span>
                  <div>
                    <span class="then">if</span>
                    <span class="brackets">(</span>
                    <span class="word">!otherSet</span>
                    <span class="variable">.has</span>
                    <span class="brackets">(</span>
                    <span class="word">item</span>
                    <span class="brackets">)){</span>
                  </div>

                  <div></div>
                  <div class="padTwo VSL">
                    <span class="then">return </span>
                    <span class="number">false</span>
                    <div></div>
                  </div>

                  <div><span class="brackets">}</span></div>
                </div>

                <div><span class="brackets">}</span></div>
                <div>
                  <span class="then">return </span>
                  <span class="number">true</span>
                </div>
                <div></div>
              </div>
              <div><span class="brackets">}</span></div>
            </div>

            <div><span class="brackets">}</span></div>
            <br />
            <br />
            <div><span class="comment">//測試set</span></div>
            <div>
              <span class="function">let </span> <span class="word">set</span>
              <span class="then">= new </span> <span class="word">Set</span>
              <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">set</span> <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="src">"abc"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">set</span> <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="src">"cba"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="variable">alert</span>
              <span class="brackets">(</span> <span class="word">set</span>
              <span class="variable">.values</span>
              <span class="brackets">())</span>
            </div>
            <br />
            <br />
            <div><span class="comment">//創2集合,並集</span></div>
            <div>
              <span class="function">let </span> <span class="word">setA</span>
              <span class="then">= new </span> <span class="word">Set</span>
              <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">set</span> <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="src">"abc"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">set</span> <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="src">"cba"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="function">let </span> <span class="word">setB</span>
              <span class="then">= new </span> <span class="word">Set</span>
              <span class="brackets">()</span>
            </div>
            <div>
              <span class="word">set</span> <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="src">"abc"</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="word">set</span> <span class="variable">.add</span>
              <span class="brackets">(</span> <span class="src">"aaa"</span>
              <span class="brackets">)</span>
            </div>
            <br />
            <div>
              <span class="function">let </span>
              <span class="word">unionSet</span> <span class="then">=</span>
              <span class="word">setA</span>
              <span class="variable">.union</span>
              <span class="brackets">(</span> <span class="word">setB</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="variable">alert</span>
              <span class="brackets">(</span>
              <span class="word">unionSet</span>
              <span class="variable">.values</span>
              <span class="brackets">())</span>
            </div>
            <br />
            <br />
            <div>
              <span class="function">let </span>
              <span class="word">intersectionSet</span>
              <span class="then">=</span>
              <span class="word">setA</span>
              <span class="variable">.intersection</span>
              <span class="brackets">(</span> <span class="word">setB</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="variable">alert</span>
              <span class="brackets">(</span>
              <span class="word">intersectionSet</span>
              <span class="variable">.values</span>
              <span class="brackets">())</span>
            </div>
            <br />
            <br />
            <div>
              <span class="function">let </span>
              <span class="word">differenceSet</span>
              <span class="then">=</span>
              <span class="word">setA</span>
              <span class="variable">.difference</span>
              <span class="brackets">(</span> <span class="word">setB</span>
              <span class="brackets">)</span>
            </div>
            <div>
              <span class="variable">alert</span>
              <span class="brackets">(</span>
              <span class="word">differenceSet</span>
              <span class="variable">.values</span>
              <span class="brackets">())</span>
            </div>
            <br />
            <br />
            <div>
              <span class="variable">alert</span>
              <span class="brackets">(</span> <span class="word">setA</span>
              <span class="variable">.subset</span>
              <span class="brackets">(</span> <span class="word">setB</span>
              <span class="brackets">))</span>
            </div>
          </div>

          <br />

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
