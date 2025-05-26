import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react(), tailwindcss],
});