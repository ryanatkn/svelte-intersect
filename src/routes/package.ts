// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: 'svelte-intersect',
	version: '0.15.0',
	description: 'a Svelte action for IntersectionObserver',
	license: 'MIT',
	glyph: '💠',
	logo: 'logo.svg',
	logo_alt: 'a friendly pixelated spider facing you',
	public: true,
	homepage: 'https://ryanatkn.github.io/svelte-intersect/',
	repository: 'https://github.com/ryanatkn/svelte-intersect',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/svelte-intersect/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	peerDependencies: {svelte: '^5.0.0-next.0'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.25.0',
		'@ryanatkn/eslint-config': '^0.5.3',
		'@ryanatkn/fuz': '^0.122.0',
		'@ryanatkn/fuz_code': '^0.19.0',
		'@ryanatkn/gro': '^0.135.0',
		'@ryanatkn/moss': '^0.16.0',
		'@sveltejs/adapter-static': '^3.0.4',
		'@sveltejs/kit': '^2.5.27',
		'@sveltejs/package': '^2.3.5',
		'@sveltejs/vite-plugin-svelte': '^3.1.2',
		eslint: '^9.10.0',
		'eslint-plugin-svelte': '^2.44.0',
		prettier: '^3.3.3',
		'prettier-plugin-svelte': '^3.2.6',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.0.0-next.246',
		'svelte-check': '^4.0.2',
		tslib: '^2.7.0',
		typescript: '^5.6.2',
		'typescript-eslint': '^8.5.0',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist', 'src/lib/**/*.ts', '!src/lib/**/*.test.*', '!dist/**/*.test.*'],
	exports: {
		'.': {types: './dist/index.d.ts', default: './dist/index.js'},
		'./package.json': './package.json',
	},
} satisfies Package_Json;

export const src_json = {
	name: 'svelte-intersect',
	version: '0.15.0',
	modules: {
		'.': {
			path: 'index.ts',
			declarations: [
				{name: 'Intersect_Params', kind: 'type'},
				{name: 'Intersect_Params_Or_Callback', kind: 'type'},
				{name: 'intersect', kind: 'function'},
				{name: 'On_Intersect', kind: 'type'},
				{name: 'Intersect_State', kind: 'type'},
				{name: 'On_Disconnect', kind: 'type'},
				{name: 'Disconnect_State', kind: 'type'},
			],
		},
		'./package.json': {path: 'package.json', declarations: []},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
