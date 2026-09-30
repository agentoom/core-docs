// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: process.env.SITE_URL || 'https://docs.agentoom.com',
	integrations: [
		starlight({
			title: 'Agentoom Docs',
			description: 'The Enterprise AI Operating System Documentation',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/agentoom' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [{ autogenerate: { directory: 'getting-started' } }],
				},
				{
					label: 'Core Concepts',
					items: [{ autogenerate: { directory: 'core-concepts' } }],
				},
				{
					label: 'Govern (Trust Layer)',
					badge: { text: 'Security', variant: 'tip' },
					items: [{ autogenerate: { directory: 'govern' } }],
				},
				{
					label: 'Build & Extend',
					items: [{ autogenerate: { directory: 'build-and-extend' } }],
				},
				{
					label: 'Manage & Operations',
					items: [{ autogenerate: { directory: 'manage' } }],
				},
				{
					label: 'Settings',
					collapsed: true,
					items: [{ autogenerate: { directory: 'settings' } }],
				},
				{
					label: 'Agentoom Packages',
					collapsed: true,
					badge: { text: 'v2026.09', variant: 'note' },
					items: [{ autogenerate: { directory: 'packages' } }],
				},
				{
					label: 'Reference',
					collapsed: true,
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
