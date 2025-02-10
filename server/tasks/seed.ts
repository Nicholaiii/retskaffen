export default defineTask({
  meta: {
    name: 'db:seed',
    description: 'Run database seed task'
  },
  async run() {
    console.log('Running DB seed task...')

    const data = await useDrizzle().insert(tables.kvitteringer).values({ nummer: 1 }).returning()
    return { result: 'success', data }
  }
})
