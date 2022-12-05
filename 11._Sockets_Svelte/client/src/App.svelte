<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "./pages/stores/globalStore";
    import Colors from "./pages/colors/Colors.svelte";
    import Register from "./pages/register/Register.svelte";

    let loggedInUser;

    onMount(async () => {
        const response = await fetch($BASE_URL + "/me"); //??????????
        const { data } = await response.json();
        loggedInUser = data;
    });
</script>

{#if loggedInUser}
    <Colors />
{:else}
    <Register />
{/if}
