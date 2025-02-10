import table from "#build/ui/table"

export default defineEventHandler(async (event) => {
  const db = useDrizzle()

  const forrigeKvittering = await db.query.kvitteringer.findFirst()
  if (!forrigeKvittering) return '69420'
  const denneKvittering = await db.update(tables.kvitteringer).set({ nummer: forrigeKvittering.nummer + 1 }).where(
    eq(tables.kvitteringer.id, forrigeKvittering.id)
  ).returning().get()

  return denneKvittering.nummer
})
