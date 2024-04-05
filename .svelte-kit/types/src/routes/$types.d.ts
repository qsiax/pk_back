import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/admin" | "/admin/document" | "/admin/kursy" | "/admin/news" | "/admin/obucheniye" | "/admin/raspisaniye" | "/archive" | "/dokumenty" | "/dostupnaya-sreda" | "/finansovo-khozyaystvennaya" | "/kursy" | "/login" | "/materialno-tekhnicheskoye-obespecheniye" | "/mesta-dlya-priyema" | "/mezhdunarodnoye-sotrudnichestvo" | "/novosty" | "/obrazovaniye" | "/obrazovatelnaya-sreda" | "/obrazovatelnyye-programmy" | "/obshchezhitiye" | "/obucheniye" | "/osnovnyye-svedeniya" | "/partnerstvo" | "/pitaniya" | "/post/[id]" | "/pravila-priyoma" | "/prikazy-o-zachislenii" | "/professiya" | "/proforiyentatsiya" | "/raspisaniye" | "/reytingovyy-spisok" | "/rukovodstvo" | "/sotsialnoye-obespecheniye" | "/stipendiya" | "/struktura-i-organy" | "/studencheskaya-zhizn" | "/trudoustroystvo" | "/tselevoye-obucheniye" | "/upload" | null
type LayoutParams = RouteParams & { id?: string }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;