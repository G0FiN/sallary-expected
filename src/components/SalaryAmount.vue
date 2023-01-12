<template>
  <div class="salaryBox">
    <div class="salarySum">{{ getSalaryValueFormated(salary) }}</div>
  </div>
</template>

<script>
const getSalaryValueFormated = (salary) => {
  let fixed = String(salary.toFixed(0));
  return fixed.slice(0, -3) + ' ' + fixed.slice(-3) + ' UAH';
};

export default {
  name: 'SalaryAmount',
  props: {
    salary: Number,
    colorType: String,
  },
  data() {
    return {
      getSalaryValueFormated,
    }
  }
}
</script>

<style scoped>
.salaryBox {
  display: flex;
  align-items: center;
  justify-content: center;
}

.salarySum {
  border-radius: 35px;
  padding: 10px;
  font-size: 18px;
}

.salarySum {
  background: linear-gradient(311deg, #a8b5a7, #5a5e5d, #c9d9c5);
  color: v-bind('colorType !== "linear-gradient(311deg, #a8b5a7, #7a8d88, #c9d9c5)" ? "black" : "#5a5e5d"');
  background: v-bind('colorType');
  background-size: 150% 150%;

  -webkit-animation: AnimationName 8s ease infinite;
  -moz-animation: AnimationName 8s ease infinite;
  -o-animation: AnimationName 8s ease infinite;
  animation: AnimationName 8s ease infinite; 
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 7% 0%
  }

  50% {
    background-position: 94% 100%
  }

  100% {
    background-position: 7% 0%
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 7% 0%
  }

  50% {
    background-position: 94% 100%
  }

  100% {
    background-position: 7% 0%
  }
}

@-o-keyframes AnimationName {
  0% {
    background-position: 7% 0%
  }

  50% {
    background-position: 94% 100%
  }

  100% {
    background-position: 7% 0%
  }
}

@keyframes AnimationName {
  0% {
    background-position: 7% 0%
  }

  50% {
    background-position: 94% 100%
  }

  100% {
    background-position: 7% 0%
  }
}

@media (max-width: 395px) {
  .salarySum {
    font-size: 17px;
  }
}
</style>
