<script>
	import { Router, Link, Route } from "svelte-navigator";
  
  import Home from "./pages/Home/Home.svelte";
  import Login from "./pages/Login/Login.svelte";
  import Signup from "./pages/Login/Signup.svelte";
  import Dog from "./pages/Dog/Dog.svelte";

</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Waitlist</Link>
   
  </nav>
  <div>
      <Route path="/"><Home /></Route>
      <Route path="/login"><Login /></Route>
      <Route path="/signup"><Signup /></Route>
      <Route path="/dog"><Dog /></Route>
  </div>
</Router>
