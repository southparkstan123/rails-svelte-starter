import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from "vite";
import RubyPlugin from "vite-plugin-ruby";
import FullReload from "vite-plugin-full-reload";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(["config/routes.rb", "app/views/**/*"]),
    svelte(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('app/frontend/src', import.meta.url))
    }
  },
  server: {
    host: "192.168.56.56",
    watch: {
      usePolling: true,
    },
  },
});