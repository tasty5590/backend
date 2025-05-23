import 'dotenv/config'

import Fastify from 'fastify'
import helloRoute from './routes/hello'
import usersRoute from './routes/users'

const app = Fastify({ logger: true })

app.register(helloRoute)
app.register(usersRoute)

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`Server listening at ${address}`)
})
