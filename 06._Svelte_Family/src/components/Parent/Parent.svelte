<script>
    import { fridgeMessageStore } from "../../store/fridgeBulletinStore.js";

    export let name;
    export let children;
    export let pets;

    import Child from "../Child/Child.svelte";
    import Pet from "../Pet/Pet.svelte";

    function handleEraseFridgeBulletin() {
        fridgeMessageStore.set("Write your message...");
    }
    
    function handleTellILoveYou(message) {
        console.log(message);
    }

    function handleAlwaysSayHi() {
        console.log("Hej");
    }

</script>

<h1>Hi, I'm {name}.</h1>

<div on:click={handleEraseFridgeBulletin} on:keydown={() => {}}>Erase the fridge bulletin</div>


<!--sådan her vi looper igennem børnene: -->
{#each children as child}
   <Child child={child} parentName={name} onTellILoveYou={handleTellILoveYou} onAlwaysSayHi={handleAlwaysSayHi}/>
{/each}




{#each pets as pet}
   <Pet pet={pet}/>
{/each}