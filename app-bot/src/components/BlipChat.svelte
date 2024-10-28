<script>
   import { onMount } from 'svelte';

   onMount(() => {
      // Carregar dinamicamente o script do BlipChat
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/blip-chat-widget';
      script.async = true;
      script.onload = () => {
         // Inicializar o BlipChat após o carregamento do script
         new BlipChat()
            .withAppKey('cm9ic29uMjA6OXRaRTVVcmhZSk9uSkFtdVhxM3k=')
            .withButton({ "color": "#2CC3D5" })
            .withTarget('chat-bot')
            .build();
      };
      document.body.appendChild(script);
   });
</script>

<div id="chat-bot"></div>

<style>
   #chat-bot {
      position: fixed;
      bottom: 20px;
      right: 20px;
   }
</style>