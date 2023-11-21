<script setup>
import { useIndexStore } from "@/stores/store"
const store = useIndexStore()

const votantes = () => {
    store.CaVotantes();
}

const candidatos = () => {
    store.CaCandidatos();
}

const elecciones = () => {
    store.CaElecciones();
}

const inicio = () => {
    store.CaAdminInicio();
}
const votar = () => {
    store.CaRegistroVotacion();
}

const salir = () => {
    navigateTo("/")
}

</script>
<template>
    <div class="drawer bg-sky-950">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="navbar bg-base-300 encima">
                <div class="navbar-start">
                    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <!-- Page content here -->
                        <label for="my-drawer" class="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </label>
                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                        <ul class="menu menu-lg min-h-full bg-base-200 w-56 rounded-box">
                            <li>
                                <a @click="inicio">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a @click="votantes">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h7"/></svg>
                                    Ver votantes
                                </a>
                            </li>
                            <li>
                                <a @click="candidatos">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h7"/></svg>
                                    Ver candidatos
                                </a>
                            </li>
                            <li>
                                <a @click="elecciones">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h7"/></svg>
                                    Ver elecciones
                                </a>
                            </li>
                            <li>
                                <a @click="votar">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8l4 4-4 4M8 12h7"/></svg>
                                    Votar
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="navbar-center">
                    <a @click="inicio" class="btn btn-ghost normal-case text-xl">UNSM</a>
                </div>
                <div class="navbar-end">

                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="/imagen1.jpg" />
                            </div>
                        </label>
                        <ul tabindex="0"
                            class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Perfil
                                </a>
                            </li>
                            <li><a @click="salir">cerrar</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style>
.encima {
    z-index: 1;
}
</style>