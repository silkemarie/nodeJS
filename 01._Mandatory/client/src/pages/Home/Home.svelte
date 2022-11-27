<script>
    
    import { user } from "../../store/auth.js"
    import { BASE_URL } from "../../store/global.js"


        async function logout()  {
            user.set(null)

            await fetch(`${$BASE_URL}/logout`, {
                method: "POST",
            })

            window.location.replace("/")
        }

</script>

<h1>Hello!</h1>
<h3> Welcome to E-INU</h3>

<img height=300 src="../trans.png">
<br>
<br>

<p>Inu (犬) is japanese for dog and that's exactly what you're getting here at E-INU.</p>
<p>An electronic dog.</p>
<p>Pet it, talk to it, and enjoy your government* assigned pet.</p>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<h5>*we assigned it to you. Randomly. No take-backs though. </h5>
<br>

<button class="navIcon login" id="logout" on:click={logout}>Logout</button>