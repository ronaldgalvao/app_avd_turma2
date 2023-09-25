import fastify from 'fastify';

import { PrismaClient } from '@prisma/client'
const app = fastify();
const prisma = new PrismaClient();


app.get('/events', async() => {
    const events = await prisma.events.findMany();
    return events
})

app.listen({
    port:3333,
}).then(() => {
    console.log('HTTP server running on http://localhost:3333')
})
