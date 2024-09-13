<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
	console.log(data);
</script>

<form method="POST">
	<h2>Register</h2>
	<label for="name">Name</label>
	<input type="text" id="name" name="name" required />

	<label for="username">Username</label>
	<input type="text" id="username" name="username" required />

	<label for="password">Password</label>
	<input type="password" id="password" name="password" required />

	<button type="submit">Register</button>
</form>
<p>Already Registered? <a href="/login">Login</a></p>
