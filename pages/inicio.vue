<script setup>
import { useIndexStore } from "@/stores/store"
const store = useIndexStore();

</script>
<template>
    <div class="text-center  min-h-screen bg-sky-950 grid content-between fondo">
        <Header></Header>
        <!-- Contenido -->
        <AdminInicio v-if="store.adminInicio"></AdminInicio>
        <VerVotantes v-if="store.votantes"></VerVotantes>
        <VerCandidatos v-if="store.candidatos"></VerCandidatos>
        <VerVotacion v-if="store.registroVotacion"></VerVotacion>
        <VerElecciones v-if="store.elecciones"></VerElecciones>
        <FooterVotacion></FooterVotacion>

    </div>
</template>

<style>
/* * {
    border: 1px solid red;
} */
</style>