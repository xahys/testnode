import {Application} from './application';

export async function main() {
  const app = new Application();
  await app.boot();
  await app.start();
  console.log(`Application is running at http://127.0.0.1:3000`);
}

main().catch(err => {
  console.error('Cannot start the application.', err);
  process.exit(1);
});

