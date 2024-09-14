import { eq } from "drizzle-orm";
import db from "$lib/server/database/db.server";
import { userTable } from "$lib/server/database/drizzle-schemas";
import type { User } from "$lib/server/database/drizzle-schemas";

export const getUserByEmail = async (email: string) => {
	const user = await db.select().from(userTable).where(eq(userTable.email, email));
	if (user.length === 0) {
		return null;
	} else {
		return user[0];
	}
};

export const createUser = async (user: User) => {
	const result = await db.insert(userTable).values(user).onConflictDoNothing().returning();
	if (result.length === 0) {
		return null;
	} else {
		return result[0];
	}
};
