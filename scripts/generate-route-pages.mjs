import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = 'dist';
const routes = ['about', 'contact'];

await Promise.all(routes.map(async route => {
  const routeDirectory = join(outputDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(join(outputDirectory, 'index.html'), join(routeDirectory, 'index.html'));
}));
