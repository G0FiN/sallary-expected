<template>
  <div class="parametersCard">
    <ParameterModifier parameterName="К-сть днів" defaultValue="22" />
    <ParameterModifier parameterName="К-сть годин" defaultValue="178" />
    <ParameterModifier parameterName="ЄСВ" defaultValue="1430" />
    <ParameterModifier parameterName="Податок %" defaultValue="5" />
    <ParameterModifier parameterName="Курс $" defaultValue="36.5686" />
    <ParameterModifier parameterName="Сума виплати" defaultValue="730" />
    <SalaryAmount colorType="linear-gradient(311deg, #a8b5a7, #7a8d88, #c9d9c5)" />
    <SalaryAmount colorType="linear-gradient(311deg, #19c709, #21deac, #30bb11)" />
  </div>
</template>

<script>
import ParameterModifier from './ParameterModifier.vue';
import SalaryAmount from './SalaryAmount.vue';

export default {
  name: 'ParametersCard',
  components: {
    ParameterModifier,
    SalaryAmount
  }
}
</script>

<style scoped>
.parametersCard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 15px;
}
</style>
