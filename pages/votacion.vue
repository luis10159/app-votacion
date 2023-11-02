<script>
import { useRouter } from "vue-router";

export default {
  methods: {
    navigateToTargetPage() {
      // Use the router to navigate to the target page
      this.$router.push("/conteo");
    },
  },
};
</script>
<template>
  <div class="text-center bg-sky-950 min-h-screen grid content-between fondo">
    <div class="text-center py-10">
      <h1 class="text-4xl text-amber-400 font-bold">Elige</h1>
      <p class="text-5xl font-bold text-white">A uno de ellos.</p>
    </div>
    <div class="flex justify-between flex-wrap">
      <div class="card w-96 bg-slate-900 shadow-xl m-10">
        <figure class="px-10 pt-10">
          <img src="/imagen1.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-white">Partido 1</h2>
          <p class="text-amber-400">Héctor Luis</p>
          <div class="card-actions">
            <button class="btn btn-primary">Votar</button>
          </div>
        </div>
      </div>

      <div class="card w-96 bg-slate-900 shadow-xl m-10">
        <figure class="px-10 pt-10">
          <img src="/imagen1.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-white">Partido 2</h2>
          <p class="text-amber-400">Patricio Gonza</p>
          <div class="card-actions">
            <button class="btn btn-primary">Votar</button>
          </div>
        </div>
      </div>
      <div class="card w-96 bg-slate-900 shadow-xl m-10">
        <figure class="px-10 pt-10">
          <img src="/imagen1.jpg" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title text-white">Partido 3</h2>
          <p class="text-amber-400">Diego Alvarado</p>
          <div class="card-actions">
            <button class="btn btn-primary">Votar</button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-actions justify-center">
      <button class="btn btn-outline btn-primary" @click="navigateToTargetPage">
        Conteo en tiempo real
      </button>
    </div>
    <FooterVotacion></FooterVotacion>
  </div>
</template>

<style>
/* * {
    border: 1px solid red;
} */
</style>
