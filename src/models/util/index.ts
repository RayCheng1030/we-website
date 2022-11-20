import { useI18n } from "vue-i18n";

/** Get the content of the specific i18n array */
export function getI18nList(path: string, suffix?: string) {
    const { t } = useI18n();
    const list = [] as string[];

    // Temporally disable the warning of undefined index
    const warn = console.warn;
    console.warn = function () { /* Empty */ };

    while (true) {
        const key = `${ path }[${ list.length }]${ suffix ? `.${ suffix }` : "" }`;
        const text = t(key);

        if (key === text) {
            console.warn = warn;
            return list;
        }
        else list.push(text);
    }
}

export function isMobile() {
    return !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);
}
export function isLandscape() {
    return window.matchMedia(`(min-aspect-ratio: 13 / 9)`).matches || window.matchMedia(`(orientation: landscape)`).matches;
}

export function randomInt(min: number, max: number) {
    return ((Math.random() + 1) * (max - min) + min) >> 0;
}

export function pad(num: number, length: number) {
    return `${ num }`.padStart(length, "0");
}

export function isExisted(url: string) {
    const request = new XMLHttpRequest();

    request.open("HEAD", url, false);
    request.send();

    return request.status !== 404;
}
