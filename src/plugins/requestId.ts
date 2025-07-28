import fp from 'fastify-plugin';
import requestId from '@fastify-userland/request-id';

export default fp(async (fastify) => {
  await fastify.register(requestId);
});
