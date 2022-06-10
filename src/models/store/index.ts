import { createStore } from "vuex";

export default createStore({
    modules: {
    },
    state: {
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
