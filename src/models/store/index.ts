import { createStore } from "vuex";
import { isExisted, isLandscape, isMobile } from "@/models/util";

export default createStore({
    modules: {
    },
    state: {
        headerLogoVisible: true,
        isSoundPlaying: false,
        isVideoPlaying: false,
        isPageEntered: false,
        useMobileVideo: checkMobileVideo(),
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
        updateMobileVideo(state) {
            state.useMobileVideo = checkMobileVideo();
        }
    },
    actions: {
    },
});

function checkMobileVideo() {
    return isMobile() && !isLandscape() && isExisted("./assets/videos/backgroundM.mp4");
}
