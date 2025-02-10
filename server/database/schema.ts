import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const kvitteringer = sqliteTable('kvitteringer', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  nummer: integer('nummer').notNull(),
})
