<script>
    let mail = "";
    let password = "";

    async function checkEmailAndPas() {
        console.log("Badabing badabum it works")
        const url = 'http://localhost:8080/api/users/login';
        const user = {mail: mail, password: password};
        const response = await fetch(url, {method: "POST", 
        headers: {"Content-type": "application/json"}, body: JSON.stringify(user)});
        const data = await response.json()
        if (response.ok) {
            window.location.replace("/")
            console.log("You got it brother man")
            mail = "";
            password = "";
        }
    }
</script>

<h1>Login</h1>
<h3>Have you signed up yet?</h3>

<img height=300 src="../trans.png">

<form>
    <h1>Login</h1>

    <input type="email" bind:value={mail} name="email"/>

    <input type="password" bind:value={password} name="password"/>

    <button on:click={checkEmailAndPas} type="button">Login</button>
</form>