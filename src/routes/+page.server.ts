import db from "$lib/server/database/db.server";
import { userTable } from "$lib/server/database/drizzle-schemas";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
	const result = await db.select().from(userTable);
	return {
		result
	};
}) satisfies PageServerLoad;
