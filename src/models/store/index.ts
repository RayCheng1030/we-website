import { createStore } from "vuex";

export default createStore({
    modules: {
    },
    state: {
        headerLogoVisible: true,
        isSoundPlaying: false,
    },
    getters: {
    },
    mutations: {
        toggleSound(state) {
            state.isSoundPlaying = !state.isSoundPlaying;
        },
    },
    actions: {
    },
});
