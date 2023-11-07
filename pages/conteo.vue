<script setup>
import { ref, onMounted } from "vue";

import Chart from "primevue/chart";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  return {
    labels: ["Partido 1", "Partido 2", "Partido 3"],
    datasets: [
      {
        label: "Sales",
        data: [540, 325, 702],
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgb(255, 159, 64)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
        ],
        borderWidth: 1,
      },
    ],
  };
};
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--text-color-secondary"
  );
  const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

  return {
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>
<script>
export default {
  methods: {
    navigateToTargetPage() {
      this.$router.push("/votacion");
    },
  },
};
</script>
<template>
  <div class="fondo">
    <div
      class="min-h-screen card flex items-center justify-center flex-col gap-2"
    >
      <div class="body rounded-lg p-8 shadow-md w-3/5">
        <h1 class="text-center text-white uppercase">Conteo en Tiempo Real</h1>
        <Chart
          type="bar"
          :data="chartData"
          :options="chartOptions"
          class="w-full md:w-30rem"
        />
      </div>
      <div class="">
        <button
          class="btn btn-outline btn-primary"
          @click="navigateToTargetPage"
        >
          Regresar
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.fondo {
  background-image: linear-gradient(
    to right bottom,
    #230d60,
    #230d5a,
    #220c54,
    #210c4f,
    #200c49,
    #1e0e46,
    #1c0f44,
    #1a1041,
    #161240,
    #13143e,
    #10153d,
    #0e163b
  );
}
.body {
  background-image: linear-gradient(
    to right bottom,
    rgba(35, 13, 96, 0.8),
    rgba(35, 13, 90, 0.8),
    rgba(34, 12, 84, 0.8),
    rgba(33, 12, 79, 0.8),
    rgba(32, 12, 73, 0.8),
    rgba(30, 14, 70, 0.8),
    rgba(28, 15, 68, 0.8),
    rgba(26, 16, 65, 0.8),
    rgba(22, 18, 64, 0.8),
    rgba(19, 20, 62, 0.8),
    rgba(16, 21, 61, 0.8),
    rgba(14, 22, 59, 0.8)
  );
}
</style>
