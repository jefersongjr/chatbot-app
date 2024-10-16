<script>
    import Input from '../components/Input.svelte';

    let apiKey = ""

    let handleSubmit = () => {
        if (apiKey) {
            console.log('Chave da api:', apiKey);
        } else {
            alert('Por favor, insira uma chave de API válida')
        }
    };
</script>

<div class="login-form">
  <h2>Login</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <Input
      label="Chave de API"
      type="text"
      bind:value={apiKey}
      placeholder="Insira sua chave de API"
      onInput={(value) => (apiKey = value)}
    />
    <button type="submit">Entrar</button>
  </form>
</div>