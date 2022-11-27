<script>
    import { BASE_URL } from "../../store/global.js";
    

    if(sessionStorage === null) {
        window.location.replace("/")
    }


 
    const fetchImage = (async () => {
		const response = await fetch('https://dog.ceo/api/breeds/image/random')
    return await response.json()
	})()


</script>

<h1>Your dog</h1>
{#await fetchImage}
	<p>...waiting</p>
{:then data}
	<img src={data.message} alt="Dog image" />
{:catch error}
	<p>An error occurred!</p>
{/await}



<p>Todo: should be remembered in session which image </p>


<style>

  </style>