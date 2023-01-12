<template>
  <div class="imgContainer"><img alt="Vue logo" src="./assets/logo.png"></div>
  <div class="application" v-for="(item) in monthArray" :key="item.id">
    <MonthForm :monthData='item'/>
    <!-- {{ index }} -->
  </div>
  <MonthForm :monthData='testObj'/>
  <MonthForm :monthData='testObj'/>
</template>

<script>
import MonthForm from './components/MonthForm.vue';

/* *** *** *** *** *** *** ***  */
const testObj = {
  "USDmonth": 620,
  "USDday": 28.18,
  "USDhour": 3.52,
  "UAHmonth": 22672.53,
  "UAHday": 1030.57,
  "UAHhour": 128.82,
  "TAXEDmonth": 20108.91,
  "TAXEDday": 914.04,
  "TAXEDhour": 114.26,
  "paymentExpected": 22672.53,
  "sallaryExpected": 20108.91,
  "parameters": {
    "year": 2023,
    "month": 0,
    "days": 22,
    "hours": 176,
    "ESV": 1430,
    "taxPercent": 0.05,
    "exchangeRate": 36.5686,
    "amount": 620
  }
};
/* *** *** *** *** *** *** ***  */

const monthArray = require('./data/data.json');

export default {
  name: 'App',
  components: {
    MonthForm
  },
  data() {
    return {
      monthArray,
      testObj
    }
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  white-space: nowrap;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after, q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

@font-face {
  font-family: "CopperplateLocal";
  src: local("CopperplateLocal"),
   url(./assets/fonts/copperplate.otf) format("truetype");
}

@font-face {
  font-family: "AvenireLocal";
  src: local("AvenireLocal"),
   url(./assets/fonts/avenir.otf) format("truetype");
}

#app {
  font-family: CopperplateLocal;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 80%;
  min-width: 256px;
  max-width: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;

  padding-bottom: 150px;
}

.application {
  font-family: CopperplateLocal;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  min-width: 256px;
  max-width: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 10px;
}

.imgContainer {
  display: flex;
  justify-content: center;
}

.imgContainer>img {
  max-height: 100px;
  margin: 50px;

  -webkit-filter: drop-shadow(12px 14px 10px #000);
  filter: drop-shadow(12px 14px 10px #000);
}

body {
  background: linear-gradient(33deg, #30bb11, #4476f3, #f6fb2c, #4476f3, #f6fb2c);
  height: 150%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: scroll;
}
</style>
