import { fileURLToPath, URL } from 'node:url'
import fs from 'node:fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const certificateDirectory = fileURLToPath(new URL('./certs', import.meta.url))
const certificateKeyPath = `${certificateDirectory}/localhost-key.pem`
const certificatePath = `${certificateDirectory}/localhost.pem`
const hasLocalCertificate = fs.existsSync(certificateKeyPath) && fs.existsSync(certificatePath)

export default defineConfig({
  plugins: [vue()],
  server: hasLocalCertificate
    ? {
        https: {
          key: fs.readFileSync(certificateKeyPath),
          cert: fs.readFileSync(certificatePath)
        }
      }
    : undefined,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
