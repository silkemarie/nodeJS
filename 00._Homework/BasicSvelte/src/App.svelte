<script>
  import Nested from "./Nested.svelte";
  import Info from "./Info.svelte";

  const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
  };

    let user = { loggedIn: false };

    function toggle() {
      user.loggedIn = !user.loggedIn;
    }

</script>

<Nested answer={42}/>
<Info {...pkg}/>

{#if user.loggedIn}
<button on:click={toggle}>
Logout</button>
{/if}

{#if !user.loggedIn}
<button on:click={toggle}>
  Login</button>
{/if}

<main>
</main>

<style>
</style>
