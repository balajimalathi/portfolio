import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import clarity from '@kbyte-tech/astro-clarity';
import rehypeMermaid from "rehype-mermaid"

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid"],
    },
    rehypePlugins: [rehypeMermaid],
  },
  host: "skndan.com",
  site: "https://skndan.com",
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  devToolbar: {
    enabled: false
  },
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
    clarity({
      enabled: true,
      projectId: 'r5m7cc1072',
    }),
  ],
})
