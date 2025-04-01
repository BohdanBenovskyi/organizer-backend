import { buildApp, AppOptions } from './app';
import pino from 'pino';

const options: AppOptions = {
  loggerInstance: pino({ level: 'info' })
};

const start = async () => {
  const app = await buildApp(options);

  try {
    await app.listen({ port: 6785 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
