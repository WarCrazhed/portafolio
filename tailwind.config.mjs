import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
			},
			// Tokens semánticos: los valores viven en variables CSS (Layout.astro)
			// y cambian con la clase `dark` en <html>.
			colors: {
				bg: 'rgb(var(--c-bg) / <alpha-value>)',
				surface: 'rgb(var(--c-surface) / <alpha-value>)',
				line: 'rgb(var(--c-line) / <alpha-value>)',
				hairline: 'rgb(var(--c-hairline) / <alpha-value>)',
				ink: 'rgb(var(--c-ink) / <alpha-value>)',
				muted: 'rgb(var(--c-muted) / <alpha-value>)',
				dim: 'rgb(var(--c-dim) / <alpha-value>)',
				accent: 'rgb(var(--c-accent) / <alpha-value>)',
				'accent-ink': 'rgb(var(--c-accent-ink) / <alpha-value>)',
			},
			maxWidth: {
				site: '1440px',
			},
		},
	},
	plugins: [],
}
