import { createUser } from "$lib/server/database/router/users";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { Argon2id } from "oslo/password";
// import { lucia } from '$lib/server/lucia';

export const actions: Actions = {
	default: async function ({ request }) {
		let { name, email, password } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;

		password = await new Argon2id().hash(password);
		const id = crypto.randomUUID();
		const token = crypto.randomUUID();
		try {
			await createUser({ id, email, name, password, token });
		} catch (err) {
			console.error(err);
			return fail(400, { message: "Could not register user" });
		}
		throw redirect(302, "/login");
	}
};
