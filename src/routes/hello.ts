import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default async function helloRoute(fastify: FastifyInstance, opts: FastifyPluginOptions) {
  fastify.get('/hello', async (request, reply) => {
    return { message: 'Hello from Fastify!' }
  })
}
