export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/admin": [~3],
		"/admin/document": [~4],
		"/admin/kursy": [~5],
		"/admin/news": [~6],
		"/admin/obucheniye": [~7],
		"/admin/raspisaniye": [~8],
		"/archive": [9],
		"/dokumenty": [~10],
		"/dostupnaya-sreda": [11],
		"/finansovo-khozyaystvennaya": [~12],
		"/kursy": [~13],
		"/login": [~14],
		"/materialno-tekhnicheskoye-obespecheniye": [~15],
		"/mesta-dlya-priyema": [16],
		"/mezhdunarodnoye-sotrudnichestvo": [17],
		"/novosty": [18],
		"/obrazovaniye": [19],
		"/obrazovatelnaya-sreda": [~20],
		"/obrazovatelnyye-programmy": [~21],
		"/obshchezhitiye": [22],
		"/obucheniye": [~23],
		"/osnovnyye-svedeniya": [24],
		"/partnerstvo": [25],
		"/pitaniya": [~26],
		"/post/[id]": [~27],
		"/pravila-priyoma": [~28],
		"/prikazy-o-zachislenii": [29],
		"/professiya": [30],
		"/proforiyentatsiya": [31],
		"/raspisaniye": [~32],
		"/reytingovyy-spisok": [33],
		"/rukovodstvo": [34],
		"/sotsialnoye-obespecheniye": [35],
		"/stipendiya": [~36],
		"/struktura-i-organy": [37],
		"/studencheskaya-zhizn": [38],
		"/trudoustroystvo": [~39],
		"/tselevoye-obucheniye": [40],
		"/upload": [~41]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';