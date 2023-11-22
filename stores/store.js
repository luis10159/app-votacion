import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", {
    state: () => {
        return {
            votantes: false,
            candidatos: false,
            adminInicio: true,
            elecciones: false,
            conteoReal: false,
            registroVotacion: false,
            activo: false,
            adminPrincipal: false,
            usuario: {
                usuario: 'user10',
                contrasena: '123'
            },
        };
    },
    getters: {},
    actions: {
        CaAdminInicio() {
            this.adminInicio = true;
            this.votantes = false;
            this.elecciones = false;
            this.candidatos = false;
            this.registroVotacion = false;
            this.conteoReal = false;
        },
        CaCandidatos() {
            this.adminInicio = false;
            this.votantes = false;
            this.elecciones = false;
            this.candidatos = true;
            this.registroVotacion = false;
            this.conteoReal = false;
        },
        CaVotantes() {
            this.adminInicio = false;
            this.votantes = true;
            this.elecciones = false;
            this.candidatos = false;
            this.registroVotacion = false;
            this.conteoReal = false;
        },
        CaElecciones() {
            this.adminInicio = false;
            this.votantes = false;
            this.elecciones = true;
            this.candidatos = false;
            this.registroVotacion = false;
            this.conteoReal = false;
        },
        CaConteoReal() {
            this.adminInicio = false;
            this.votantes = false;
            this.elecciones = false;
            this.candidatos = false;
            this.registroVotacion = false;
            this.conteoReal = true;
        },
        CaRegistroVotacion() {
            this.adminInicio = false;
            this.votantes = false;
            this.elecciones = false;
            this.candidatos = false;
            this.registroVotacion = true;
            this.conteoReal = false;
        }
    },
});