<template>
  <div class="parametersCard">
    <ParameterModifier :parameterValue='parameters.parameters.days' parameterType='days' />
    <ParameterModifier :parameterValue='parameters.parameters.hours' parameterType='hours' />
    <ParameterModifier :parameterValue='parameters.parameters.ESV' parameterType='ESV' />
    <ParameterModifier :parameterValue='parameters.parameters.taxPercent' parameterType='taxPercent' />
    <ParameterModifier :parameterValue='parameters.parameters.exchangeRate' parameterType='exchangeRate' />
    <ParameterModifier :parameterValue='parameters.parameters.amount' parameterType='amount' />
    <SalaryAmount :salary='parameters.paymentExpected' colorType="linear-gradient(311deg, #a8b5a7, #7a8d88, #c9d9c5)" />
    <SalaryAmount :salary='parameters.sallaryExpected' colorType="linear-gradient(311deg, #19c709, #21deac, #30bb11)" />
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
  },
  props: {
    parameters: Object
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
