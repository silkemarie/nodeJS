<script>
    let mail = "";
    let password = "";

    async function authLogin() {
        const url = 'http://localhost:8080/api/users/login';
        const user = {mail: mail, password: password};
        const response = await fetch(url, {method: "POST", 
        headers: {"Content-type": "application/json"}, body: JSON.stringify(user)});
        const data = await response.json()
        if (response.ok) {
            window.location.replace("/dog")
            mail = "";
            password = "";
        }
    }
</script>

<h1>Login</h1>
<h3>Have you signed up yet?</h3>

<img height=300 src="../trans.png">

<br>
<br>

<form>

    <input id="email" type="email" bind:value={mail} name="email" placeholder="Email"/>

    <input id="password" type="password" bind:value={password} name="password" placeholder="Password"/>

    <br>
    <br>
    <button on:click={authLogin} type="button">Login</button>
</form>