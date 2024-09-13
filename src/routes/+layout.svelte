<script lang="ts">
	import "@picocss/pico";
	import type { PageData } from "./$types";
	export let data: PageData;
	console.log(data);
</script>

<div class="container">
	<nav>
		<ul>
			<li>
				<a href="/"> Website </a>
			</li>
		</ul>
		<ul>
			<form method="POST">
				<li><a href="/login">Login</a></li>
				<li><a href="/register">Register</a></li>
				<li>
					<button formaction="/logout" class="outline" type="submit">Logout</button>
				</li>
			</form>
		</ul>
	</nav>
	<slot />
</div>
