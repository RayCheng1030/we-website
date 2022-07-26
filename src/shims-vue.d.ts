/* eslint-disable */
declare module "*.vue" {
    import type { DefineComponent } from "vue";

    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module "load-asset" {
    type Item = string | ({ url: string, type?: "image" | "json" | "text" | "audio" | "video" | "binary" | "blob" } & Dict);

    export function any(
        items: Item[],
        progress?: (options: {
            /** number of items that have been loaded */
            count: number,
            /** number of total items in the queue */
            total: number,
            /** a number between 0 (exclusive) and 1 (inclusive) of load completion */
            progress: number,
            /** an object or string representing the asset descriptor to load */
            target: Item,
            /** the loaded value for this target */
            value: any,
            error: any,
        }) => void): Prmoise<Dict>;
}
