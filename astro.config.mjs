import { defineConfig } from 'astro/config';

// Два таргета из одного репо (как на dr.chashchina):
// - Vercel — сайт в корне, base не нужен; Vercel сам ставит VERCEL=1.
// - GitHub Pages — сайт в подпапке /skandi-studio.
const onVercel = !!process.env.VERCEL;

export default defineConfig({
  site: onVercel ? 'https://skandi-studio.vercel.app' : 'https://Nikitaa2333333.github.io',
  base: onVercel ? '/' : '/skandi-studio',
  compressHTML: true,
});