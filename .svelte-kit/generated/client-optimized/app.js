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
	() => import('./nodes/32')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/archive": [3],
		"/dokumenty": [4],
		"/dostupnaya-sreda": [5],
		"/finansovo-khozyaystvennaya": [6],
		"/kursy": [7],
		"/materialno-tekhnicheskoye-obespecheniye": [8],
		"/mesta-dlya-priyema": [9],
		"/mezhdunarodnoye-sotrudnichestvo": [10],
		"/novosty": [11],
		"/obrazovaniye": [12],
		"/obrazovatelnaya-sreda": [13],
		"/obrazovatelnyye-programmy": [14],
		"/obshchezhitiye": [15],
		"/obucheniye": [16],
		"/osnovnyye-svedeniya": [17],
		"/partnerstvo": [18],
		"/pitaniya": [19],
		"/pravila-priyoma": [20],
		"/prikazy-o-zachislenii": [21],
		"/professiya": [22],
		"/proforiyentatsiya": [23],
		"/raspisaniye": [24],
		"/reytingovyy-spisok": [25],
		"/rukovodstvo": [26],
		"/sotsialnoye-obespecheniye": [27],
		"/stipendiya": [28],
		"/struktura-i-organy": [29],
		"/studencheskaya-zhizn": [30],
		"/trudoustroystvo": [31],
		"/tselevoye-obucheniye": [32]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';