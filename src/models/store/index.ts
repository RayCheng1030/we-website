import { createStore } from "vuex";

export default createStore({
    modules: {
    },
    state: {
        headerLogoVisible: true,
        isSoundPlaying: false,
        isVideoPlaying: false,
        isPageEntered: false,
    },
    getters: {
    },
    mutations: {
        toggleSound(state) {
            state.isSoundPlaying = !state.isSoundPlaying;
        },
        enterPage(state) {
            state.isPageEntered = true;
            state.isSoundPlaying = true;
        },
    },
    actions: {
    },
});
