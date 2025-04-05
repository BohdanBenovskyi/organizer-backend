import { FastifyInstance, FastifyRequest, FastifyReply, FastifyPluginOptions, FastifyPluginCallback } from "fastify";

export const statusRoutes: FastifyPluginCallback = (fastify: FastifyInstance, options: FastifyPluginOptions, done) => {
    fastify.get('/status', async (request: FastifyRequest, reply: FastifyReply) => {
        request.log.info('Received status request');

        return reply.send({ status: 'OK' });
    });

    done();
}
