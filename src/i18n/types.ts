export type DeepStringRecord<T> = {
  [K in keyof T]: T[K] extends readonly (infer U)[]
    ? U extends string
      ? readonly string[]
      : U extends object
        ? readonly DeepStringRecord<U>[]
        : never
    : T[K] extends string
      ? string
      : T[K] extends object
        ? DeepStringRecord<T[K]>
        : never;
};
