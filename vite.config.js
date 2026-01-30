import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// De editor plugin is alleen lokaal beschikbaar tijdens development
let athenaEditorPlugin = null;
const pluginPath = path.resolve(__dirname, '../../factory/5-engine/lib/vite-plugin-athena-editor.js');

if (fs.existsSync(pluginPath)) {
  const module = await import(`file://${pluginPath}`);
  athenaEditorPlugin = module.default;
}

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/athena-pro/' : '/', 
  plugins: [
    react(),
    tailwindcss(),
    athenaEditorPlugin ? athenaEditorPlugin() : null
  ].filter(Boolean),
  server: {
    watch: {
        // We verwijderen de ignore voor src/data zodat Vite de bundel ververst 
        // wanneer de JSON bestanden worden aangepast via de Dock.
    }
  }
})