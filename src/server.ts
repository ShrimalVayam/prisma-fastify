import { buildApp } from './app.js';
const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? '0.0.0.0';

buildApp()
  .then((app) =>
    app.listen({ port, host }).then(() => {
      app.log.info(`Server listening on http://${host}:${port}`);
    })
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });