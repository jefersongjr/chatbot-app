import adapter from '@sveltejs/adapter-node'; // Importe o adaptador desejado
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  // Configuração do pré-processamento
  preprocess: vitePreprocess(),

  kit: {
    // Configuração do adaptador
    adapter: adapter(),

    // Configuração para desabilitar a verificação
    csrf: {
      checkOrigin: false,
    },
  },
};
