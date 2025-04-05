import fastify, { FastifyServerOptions, FastifyInstance } from 'fastify'
import { statusRoutes } from './routes/status';

export type AppOptions = Partial<FastifyServerOptions>;

function buildApp(options: AppOptions = {}) {
  const app = fastify(options);

  app.register(statusRoutes);

  return app;
}

export { buildApp }