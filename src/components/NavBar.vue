<script setup></script>

<template>
  <header>
    <div class="">
      <router-link to="/"
        ><div class="svg">
          <img src="../assets/title.svg" alt="" /></div
      ></router-link>
    </div>
    <input type="checkbox" id="nav_check" hidden />
    <nav>
      <ul>
        <li>
          <router-link to="/about"><div class="liPad">關於</div></router-link>
        </li>
        <li>
          <router-link to="/about"><div class="liPad">演算法</div></router-link>
        </li>
        <li>
          <router-link to="/about"
            ><div class="liPad">leetcode</div></router-link
          >
        </li>
      </ul>
    </nav>
    <label for="nav_check" class="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </label>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  background: #171717;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
}

nav {
  color: #c4c4c4;
}

ul {
  display: flex;
}

.liPad {
  padding: 0 25px;
}

.borR {
  border-right: 2px solid #c4c4c4;
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

.svg:hover {
  /* svg 滑進時顏色 */
  transition: all 0.4s ease;
  filter: invert(30%) sepia(100%) saturate(500%) hue-rotate(100deg);
}

a.router-link-exact-active {
  /* 到頁面 active 顏色 */
  color: #36c1cb;
}

.hamburger {
  cursor: pointer;
  display: none;
}

.hamburger div {
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background-color: #c4c4c4;
}
@media only screen and (max-width: 900px) {
  header {
    padding: 0 30px;
  }
}
@media only screen and (max-width: 700px) {
  .hamburger {
    display: block;
  }
  nav {
    position: absolute;
    width: 100%;
    left: -100%;
    top: 70px;
    width: 100%;
    background-color: #565656;
    padding: 30px;
    transition: 0.3s;
  }
  #nav_check:checked ~ nav {
    left: 0;
  }
  ul {
    display: block;
  }
  a {
    margin: 5px 0;
  }
}
</style>
