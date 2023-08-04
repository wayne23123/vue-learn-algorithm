<script setup></script>

<template>
  <div class="sectionHolder"></div>
  <div class="disCen title">
    <div class="dis spa titleCard">
      <div>
        <h1>Wayne's Blog</h1>
        <h1>前端學習筆記</h1>
        <h3>記錄一些關於前端學習的筆記</h3>
        <br />
        <div class="btnContainer">
          <div class="btnLeft">Get Sarted</div>
          <div class="btnRight">View on GitHub</div>
        </div>
      </div>
      <img src="../assets/wss.svg" alt="" />
    </div>
  </div>
  <div class="sectionHolder"></div>
  <div class="fourCard">
    <div class="fourCardContainer">
      <div class="cardContainer">
        <div class="card">
          <div class="cardLayout">
            <div class="cardTop">
              <span class="cardTopBGC">💡</span>
            </div>
            <h3 class="corTitle">About Me</h3>
            <p class="corText">
              Hi, I'm Wayne Lu, <br />
              a passionate frontend developer from Taiwan.
            </p>
          </div>
        </div>
      </div>
      <div class="cardContainer">
        <div class="card">
          <div class="cardLayout">
            <div class="cardTop">
              <span class="cardTopBGC">💻</span>
            </div>
            <h3 class="corTitle">Languages</h3>
            <p class="corText">JavaScript</p>
          </div>
        </div>
      </div>
      <div class="cardContainer">
        <div class="card">
          <div class="cardLayout">
            <div class="cardTop">
              <span class="cardTopBGC">📚</span>
            </div>
            <h3 class="corTitle">Frontend Skills</h3>
            <p class="corText">Vue</p>
          </div>
        </div>
      </div>
      <div class="cardContainer">
        <div class="card">
          <div class="cardLayout">
            <div class="cardTop">
              <span class="cardTopBGC">🛠️</span>
            </div>
            <h3 class="corTitle">Tools</h3>
            <p class="corText">Vite、Webpack</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sectionHolder {
  width: 100vw;
  max-width: 100%;
  height: 100px;
  background-color: #000;
}

.title {
  background-color: #000;
}

.titleCard {
  width: 500px;
}

img {
  width: 150px;
  height: 150px;
}

.btnContainer {
  /* background-color: #c4c4c4; */
  display: flex;
  justify-content: space-between;
}

.btnLeft {
  padding: 15px;
  background-color: #10b981;
  color: #c4c4c4;
  border-radius: 20px;
}

.btnLeft:hover {
  background-color: #059669;
}

.btnRight {
  padding: 15px;
  background-color: #313136;
  color: #c4c4c4;
  border-radius: 20px;
  margin-left: 20px;
}

.btnRight:hover {
  background-color: #2c2c30;
}

.fourCard {
  width: 100vw;
  max-width: 100%;
  /* background-color: #c4c4c4; */
  background-color: #000;
  display: flex;
  justify-content: center;
}

.fourCardContainer {
  width: 85vw;
  /* background-color: #565656; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.cardContainer {
  padding: 10px;
}

.card {
  width: 200px;
  height: 240px;
  background-color: #252529;
  border-radius: 15px;
  overflow: hidden;
}

.cardLayout {
  /* background-color: #c4c4c4; */
  padding: 20px 15px 0 15px;
}

.cardTop {
  font-size: 26px;
}

.cardTopBGC {
  background-color: #1e1e20;
  padding: 5px;
  border-radius: 15px;
}

.corTitle {
  color: #e0e0d8;
  padding: 10px 0;
}

.corText {
  color: #9c9c9d;
}
</style>
