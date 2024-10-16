<script lang="ts"> 
  export let label = '';
  export let type = 'text';
  export let value = '';
  export let placeholder = '';
  export let onInput;

  const handleInput = (event) => {
    if(onInput) {
        onInput(event.target.value)
    }
  }
</script>

<div>
    <label>{label}</label>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      on:input={handleInput}
    />
</div>