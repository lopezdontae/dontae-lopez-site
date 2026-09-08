import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = 'dist';
const routes = ['about', 'contact', 'socials'];
const home = await readFile(join(outputDirectory, 'index.html'), 'utf8');

await Promise.all(routes.map(async route => {
  const routeDirectory = join(outputDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  const url = `https://dontaelopez.com/${route}/`;
  let html = home
    .replace('<link rel="canonical" href="https://dontaelopez.com/">', `<link rel="canonical" href="${url}">`)
    .replace('<meta property="og:url" content="https://dontaelopez.com/">', `<meta property="og:url" content="${url}">`);
  const page = {
    '@context': 'https://schema.org',
    '@type': route === 'about' ? 'ProfilePage' : route === 'contact' ? 'ContactPage' : 'CollectionPage',
    '@id': `${url}#webpage`,
    url,
    name: route === 'about' ? 'About Dontae Lopez' : route === 'contact' ? 'Contact Dontae Lopez' : 'Dontae X.Y. Lopez | Socials & Newsletters',
    isPartOf: { '@id': 'https://dontaelopez.com/#website' },
    mainEntity: { '@id': 'https://dontaelopez.com/#person' },
  };
  html = html.replace('</head>', `<script type="application/ld+json">${JSON.stringify(page)}</script>\n  </head>`);
  await writeFile(join(routeDirectory, 'index.html'), html);
}));
