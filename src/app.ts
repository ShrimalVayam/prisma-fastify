import Fastify from 'fastify';
import prisma from './plugins/prisma.js';
import requestId from './plugins/requestId.js';
import profilesRoutes from './routes/profiles.js';

export async function buildApp() {
  const fastify = Fastify({
    logger: {
      transport: process.env.NODE_ENV !== 'production'
        ? { target: 'pino-pretty' }
        : undefined,
    },
  });

  await fastify.register(requestId);
  await fastify.register(prisma);
  await fastify.register(profilesRoutes);

  fastify.get('/health', async () => ({ status: 'ok' }));

  return fastify;
}