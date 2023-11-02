import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", {
    state: () => {
        return {
            activo: false,

            usuario: {
                usuario: 'user10',
                contrasena: '123'
            },
        };
    },
    getters: {},
    actions: {
    },
});