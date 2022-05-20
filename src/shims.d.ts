/* eslint-disable */
declare module "*.json" {
    const value: any;
    export default value;
}

declare namespace NodeJS {
    type Env = "dev" | "prod";

    interface Process {
        env: Readonly<NodeJS.ProcessEnv & {
            NODE_ENV: "development" | "production",
            APP_VERSION: string,
        }>;
    }
}

declare interface Window {
    marqueeRing: string;
    rayImageSrc: string;
    menuBgSrc: [desktop: string, mobile: string];
}

declare type Index = string | number;
declare type Primitive = Index | boolean;
declare type LiteralBoolean = "false" | "true";
declare type LiteralNumber = `${ number }`;
declare type Empty = void | null | undefined;

declare type Dict<T = any> = Record<Index, T>;
declare type Extension<K extends Index, T = any> = Record<K, T> & Dict<T>;

declare type PartialDict<T = any> = Partial<Dict<T>>;
declare type PartialRecord<K extends Index, T = any> = Partial<Record<K, T>>;
declare type PartialExtension<K extends Index, T = any> = Partial<Extension<K, T>>;

declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

declare type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};
declare type DeepWritable<T> = {
    -readonly [P in keyof T]: DeepWritable<T[P]>
};
declare type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
};

declare type Merge<T, U> = Omit<T, keyof U> & U;

declare type GeneratorReturnType<T extends (...args: any[]) => Generator | AsyncGenerator> = ReturnType<T> extends Generator<any, infer R, any> | AsyncGenerator<any, infer R, any> ? R : never;

declare type Enum = {
    [key: string]: Index,
    [key: number]: string,
};
declare type StringEnum = {
    [key: string]: string,
};

declare type Class<T extends object = {}> = { new(...args: any[]): T };

declare type Entries<T extends Dict<Index>> = {
    [P in keyof T]: { key: P, value: T[P] };
}[keyof T];
declare type Invert<T extends Dict<Index>> = {
    [P in Entries<T>["value"]]: Extract<Exclude<Entries<T>, { value: never }>, { value: P }>["key"];
};
declare type Rename<T extends Dict, U extends Record<string, keyof T>> = Omit<T, U[keyof U]> & { [P in keyof U]: T[U[P]] };
