<template>
  <div class="monthText">
    <div class="month">{{ monthNames[month] }}</div>
    <div class="year">{{ year }}</div>
  </div>
</template>

<script>
const monthNames = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];

export default {
  name: 'MonthText',
  props: {
    month: Number,
    year: Number
  },
  data() {
    return {
      monthNames
    }
  }
}
</script>

<style scoped>
.monthText {
  display: flex;
  flex-direction: column;
}

.month {
  color: rgb(130, 28, 255);
  font-weight: 900;
}

.year {
  color: brown;
  font-weight: 600;
}
</style>
