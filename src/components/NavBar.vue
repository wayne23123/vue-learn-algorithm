<script setup></script>

<template>
  <header>
    <div class="logo">Wayne's 前端學習筆記</div>
    <input type="checkbox" id="nav_check" hidden />
    <nav>
      <ul>
        <li><a class="active cor36" href="#">首頁</a></li>
        <li><a class="active cor36" href="#">關於</a></li>
        <li><a class="active cor36" href="#">1</a></li>
        <li><a class="active cor36" href="#">2</a></li>
        <li><a class="active cor36" href="#">3</a></li>
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
  background: #000;
  color: #36c1cb;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
}

.logo {
  font-size: 30px;
  font-weight: bold;
}

ul {
  display: flex;
}

.cor36 {
  color: #36c1cb;
}

a {
  display: inline-block;
  color: #000;
  padding: 5px 0;
  margin: 0 1;
  border: 3px solid transparent;
}

a:hover,
.active {
  border-bottom-color: black;
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
