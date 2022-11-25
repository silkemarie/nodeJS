<script>
	import { BASE_URL } from "../../store/global.js";
    import {notifications} from './notifications.js';
	import Toast from './Toast.svelte';


	async function sendMail() {
		const mail = {
			// @ts-ignore
			email: document.getElementById("email").value,
		};

		await fetch(`${$BASE_URL}/api/waitlist`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=utf-8",
			},
			body: JSON.stringify(mail),
		});
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
		<button type="submit" on:click={sendMail}>Sign up</button>
	</form>


    <br>
<br>

<button on:click={() => notifications.success("You're the first in line!!", 3000)}>
	See waitlist
    </button>
    <Toast />
