<script>

	import { BASE_URL, global_user } from "../../store/global.js";


    import {notifications} from './notifications.js';
	import Toast from './Toast.svelte';




	function sendData(){
		sendMail()

	}

	async function sendMail() {
		console.log("We made it to javascript");
		const user = {
			// @ts-ignore
			email: document.getElementById("email").value,
		};

		let response = await fetch(`${$BASE_URL}/api/welcome`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(user),
		});

		if (response.ok) {
			console.log("All is good");
		}
	}



</script>

<h1>Waitlist</h1>
<h3>Wanna sign up for our waitlist?</h3>

<img height=300 src="../trans.png">


    <br>
    <br>
    
	<form>
		<input id="email" type="email" name="email" placeholder="Email" />
        <br>
        <br>
		<button type="submit" on:click={sendData}>Sign up</button>
	</form>


    <br>
<br>

<button on:click={() => notifications.success("You're the first in line!!", 3000)}>
	See waitlist
    </button>
    <Toast />
