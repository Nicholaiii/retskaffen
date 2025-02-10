const FornuftigeIndkøb: Array<[name: string, price: number, count?: number]> = [
  ['A.M.O.C Yunnan Gesha (100g)', 217.08, 3],
  ['Rum Baba Coco Brazil', 95.56],
  ['Datura HLE Noria Washed (100g)', 518.00],
  ['SEY Elida (125g)', 587.72+80, 2],
  ['Coffee Collective Takesi (120g)', 300],
  ['Buddhas Kafferösteri Julebox', 587.34],
  ['Mazelab Altieri Geisha (50g)', 261.07],
  ['minmax El Socorro Gesha (100g)', 195.85, 3],
  ['Special Guests Lost Origin Lot 71', 272],
  ['Rozali Janson Natural Gesha 201 (100g)', 267, 2],
  ['Ukendt, forsvundet kinesisk Gesha', 297.09],
]

const betalingsMidler = [
  'Kontant',
  'Betalingskort',
  'Kreditkort',
  'Gavekort',
  'Kryptovaluta',
  'Matadorsedler',
  'Salte tårer'
] as const

const tilfældigtElement = <T>(a: readonly T[]): T => a[Math.floor(Math.random() * a.length)]
const tilfældiggørListe = <T>(a: readonly T[]): T[] => a.toSorted(() => Math.random() - 0.5)
const tilfældiggørAntal = <T>(a: readonly T[]): number => Math.floor(Math.random() * 4) + 4

export default defineEventHandler(async () => {
  const db = useDrizzle()

  const KvitteringsEmner = tilfældiggørListe(FornuftigeIndkøb).slice(0, tilfældiggørAntal(FornuftigeIndkøb))

  const total = KvitteringsEmner.reduce((acc, e) => e[1]*(e[2] ?? 1) + acc, 0)
  const moms = total * 0.2
  const momsBasis = total * 0.8

  // Database logik
  const forrigeKvittering = await db.query.kvitteringer.findFirst()
  const denneKvittering = forrigeKvittering ? await db.update(tables.kvitteringer).set({ nummer: forrigeKvittering.nummer + 1 }).where(
    eq(tables.kvitteringer.id, forrigeKvittering.id)
  ).returning().get() : { nummer: 69420 }

  return {
    nummer: denneKvittering.nummer,
    total,
    moms,
    momsBasis,
    betalingsMiddel: tilfældigtElement(betalingsMidler),
    emner: KvitteringsEmner
  }
})
