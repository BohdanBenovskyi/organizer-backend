import 'dotenv/config';

import { buildApp, AppOptions } from './app';
import pino from 'pino';

const options: AppOptions = {
  loggerInstance: pino({ level: 'info' })
};

const app = buildApp(options);

const start = async () => {
  try {
    await app.listen({ host: process.env.APP_HOST, port: Number(process.env.APP_PORT) });

    app.log.info(`Server listening at ${process.env.APP_PORT} port`);

    if (process.send) {
      process.send('ready');
    }
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

(async ()=> { await start() })();
