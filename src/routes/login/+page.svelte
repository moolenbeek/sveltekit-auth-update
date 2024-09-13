<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
	console.log(data);
</script>

<form method="POST">
	<h2>Login</h2>
	<label for="username">Username</label>
	<input type="text" id="username" name="username" required />

	<label for="password">Password</label>
	<input type="password" id="password" name="password" required />

	<button type="submit">Login</button>
</form>
<p>Not registered? <a href="/register">Register</a></p>
