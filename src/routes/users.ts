import { FastifyInstance } from 'fastify'
import { db } from '../db/client.js'
import { users } from '../db/schema.js'

export default async function usersRoute(app: FastifyInstance) {
  app.get('/users', async () => {
    return await db.select().from(users)
  })
}
