<template>
  <div class="parameterItem">
    <div class="parameterModifier">
      <div>{{ parameterName }}</div>
      <div class="parameterInput">
        <button>-</button>
        <input type="number" :value="defaultValue">
        <button>+</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ParameterModifier',
  props: {
    parameterName: String,
    defaultValue: Number
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
