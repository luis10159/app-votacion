<script setup>
import { ref, onMounted } from "vue";
import { useIndexStore } from "@/stores/store.js";
const store = useIndexStore();

const usuario = ref({
  usuario: null,
  contrasena: null,
});
const onSubmit = () => {
  console.log(usuario.value.usuario);
  if (
    usuario.value.usuario === store.usuario.usuario &&
    usuario.value.contrasena === store.usuario.contrasena
  ) {
    navigateTo("/inicio");
  }
};
</script>

<template>
  <div class="min-h-screen fondo grid content-between">
    <div class="hero pt-8">
      <div class="hero-content grid grid-cols-24 gap-8">
        <div class="avatar flex justify-center">
          <div class="w-40">
            <img src="/unsm.763b782a.png" />
          </div>
        </div>
        <div class="card shadow-2xl bg-slate-900">
          <form class="card-body" @submit.prevent="onSubmit">
            <h1 class="text-5xl font-bold mb-6">Iniciar sesión</h1>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Usuario</span>
              </label>
              <input
                type="text"
                v-model="usuario.usuario"
                placeholder="Usuario"
                class="input input-bordered"
                required
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Contraseña</span>
              </label>
              <input
                type="password"
                v-model="usuario.contrasena"
                placeholder="Contraseña"
                class="input input-bordered"
                required
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover"
                  >¿Has olvidado tu contraseña?</a
                >
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary" type="submit">
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <FooterVotacion />
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
</style>
