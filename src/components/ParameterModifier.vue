<template>
  <div class='parameterItem'>
    <div class='parameterModifier'>
      <div>{{ getParameterName(parameterType) }}</div>
      <div class='parameterInput'>
        <button>-</button>
        <input type='number' :value='getParameterValueFormated(parameterType, parameterValue)'>
        <button @click="() => newMonth()">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Month } from '../data/MonthClass.js'

let parametersNamesMap = new Map();
parametersNamesMap.set('days', 'К-сть днів');
parametersNamesMap.set('hours', 'К-сть годин');
parametersNamesMap.set('ESV', 'ЄСВ');
parametersNamesMap.set('taxPercent', 'Податок %');
parametersNamesMap.set('exchangeRate', 'Курс $');
parametersNamesMap.set('amount', 'Сума виплати');

const getParameterName = (parameterType) => parametersNamesMap.get(parameterType);
const getParameterValueFormated = (parameterType, parameterValue) =>
  parameterType === 'taxPercent' ? parameterValue * 100 : parameterValue;

let testParameters = {
  "year": 2023,
  "month": 8,
  "days": 23,
  "hours": 176,
  "ESV": 1430,
  "taxPercent": 0.05,
  "exchangeRate": 36.5686,
  "amount": 620
};

let months = [];
const newMonth = () => {
  let month = new Month(testParameters)
  let a = localStorage.getItem('months')
  console.log(a)
  months.push(month);
  localStorage.setItem('months', months);
};

export default {
  name: 'ParameterModifier',
  props: {
    parameterValue: Number,
    parameterType: String
  },
  data() {
    return {
      getParameterValueFormated,
      getParameterName,
      newMonth,
    }
  }
}
</script>

<style scoped>
.parameterItem {
  flex-grow: 2;
  flex-shrink: 2;
  flex-basis: 0;
  padding: 10px;
  border-radius: 10px;
  background: rgb(34, 193, 195);
  background: linear-gradient(124deg, rgba(253, 187, 45, 1) 0%, rgba(34, 193, 195, 1) 100%);
}

.parameterModifier {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

*:focus {
  outline: none;
}

.parameterInput {
  display: flex;
  align-items: center;
}

input {
  width: 60px;
}

input,
button {
  background: transparent;
  border: none;
  font-family: CopperplateLocal;
  text-align: center;
}

button {
  font-size: 20px;
  font-weight: 500;
}

@media (max-width: 395px) {

  input,
  button,
  .parameterModifier {
    font-size: 15px;
  }
}
</style>
