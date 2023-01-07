<template>
  <div class="monthForm">
    <div class="monthFormColumns">
      <div class="firstColumnItem">
        <MonthText month=5 year=2023 />
        <div>За місяць</div>
        <div>За день</div>
        <div>За годину</div>
      </div>
      <div class="columnItem">
        <div>$ USD</div>
        <div class="lines">
          <div>730</div>
          <div>33,18</div>
          <div>4,14</div>
        </div>
      </div>
      <div class="columnItem">
        <div>₴ UAH</div>
        <div class="lines">
          <div>26695,07</div>
          <div>1213,41</div>
          <div>151,67</div>
        </div>
      </div>
      <div class="columnItem">
        <div>TAXED</div>
        <div class="lines">
          <div>24695,07</div>
          <div>1113,41</div>
          <div>141,67</div>
        </div>
      </div>
    </div>
    <ParametersCard />
  </div>
</template>

<script>
import MonthText from './MonthText.vue';
import ParametersCard from './ParametersCard.vue';

export default {
  name: 'MonthForm',
  components: {
    MonthText,
    ParametersCard
  }
}
</script>

<style scoped>
.monthForm {
  width: 100%;
  margin: 5px;
  padding: 15px;
  border-radius: 15px;
  background: rgb(34, 193, 195);
  background: linear-gradient(124deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);

  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;

  gap: 15px;

  filter: drop-shadow(12px 14px 10px #000);

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.monthForm:hover {
  box-shadow: 0 25px 45px 0 rgba(0, 0, 0, 0.2);
}

.monthFormColumns {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 12px;
}

.firstColumnItem {
  display: flex;
  flex-direction: column;
}

.columnItem {
  display: flex;
  text-align: right;
  flex-direction: column;

  font-family: AvenireLocal;
  font-size: 13px;
  line-height: 16px;
}

.lines {
  margin-top: 18px;
  text-align: right;
}

.parameters {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 25px;
}
</style>
