<script setup>
import { useIndexStore } from "@/stores/store";
const store = useIndexStore();
const volver = () => {
    store.CaRegistroVotacion();
};
</script>

<template>
    <div class="flex justify-center flex-wrap">
        <div class="w-80 m-10">
            <div class="stat">

                <div class="stat-figure text-secondary">
                    <div class="avatar online">
                        <div class="w-16 mask mask-hexagon">
                            <img src="/imagen1.jpg" />
                        </div>
                    </div>
                </div>
                <div class="stat-value">Candidato 1</div>
                <div class="stat-title">Partido 1</div>
                <div class="stat-desc text-secondary">123 votos</div>

            </div>
            <div class="radial-progress" style="--value:50;" role="progressbar">50%</div>
        </div>
        <div class="w-80 m-10">
            <div class="stat">

                <div class="stat-figure text-secondary">
                    <div class="avatar online">
                        <div class="w-16 mask mask-hexagon">
                            <img src="/imagen1.jpg" />
                        </div>
                    </div>
                </div>
                <div class="stat-value">Candidato 2</div>
                <div class="stat-title">Partido 2</div>
                <div class="stat-desc text-secondary">35 votos</div>

            </div>
            <div class="radial-progress" style="--value:10;" role="progressbar">10%</div>
        </div>
        <div class="w-80 m-10">
            <div class="stat">

                <div class="stat-figure text-secondary">
                    <div class="avatar online">
                        <div class="w-16 mask mask-hexagon">
                            <img src="/imagen1.jpg" />
                        </div>
                    </div>
                </div>
                <div class="stat-value">Candidato 3</div>
                <div class="stat-title">Partido 3</div>
                <div class="stat-desc text-secondary">96 votos</div>

            </div>
            <div class="radial-progress" style="--value:40;" role="progressbar">40%</div>
        </div>
    </div>
    <div class="text-center pb-6">
        <button class="btn glass md:btn-md lg:btn-lg" @click="volver">Volver</button>
    </div>
</template>