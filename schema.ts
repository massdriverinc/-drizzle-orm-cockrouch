
import { text, pgTable, integer, varchar } from "drizzle-orm/pg-core";
import { cuid } from "cuid";
export const usersTable = pgTable("users", {
  id: text().primaryKey().$defaultFn(cuid),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  email2: varchar({ length: 255 }).notNull().unique(),
});