import { access, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const routes = [
  'privacy/pongtrace/index.html',
  'zh-hant/privacy/pongtrace/index.html',
  'en/privacy/pongtrace/index.html',
  'en-gb/privacy/pongtrace/index.html',
  'de/privacy/pongtrace/index.html',
  'ja/privacy/pongtrace/index.html',
  'ko/privacy/pongtrace/index.html',
];

const requiredPolicyFacts = [
  '1.2',
  'GitHub Pages',
  'id="current-practices"',
  'id="storage-retention-deletion"',
  'id="sharing-and-external-services"',
  'id="rights-and-choices"',
  'id="website-hosting"',
];

const forbiddenPolicyFacts = [
  'MediaPipe',
  'forray2023@163.com',
  'mailto:',
  'Apache',
  'id="contact"',
];

for (const route of routes) {
  const file = new URL(route, dist);
  await access(file);
  const html = await readFile(file, 'utf8');

  if (!html.includes('<link rel="canonical"')) {
    throw new Error(`${route} is missing a canonical URL`);
  }

  if (!html.includes('hreflang="x-default"')) {
    throw new Error(`${route} is missing language alternatives`);
  }

  for (const fact of requiredPolicyFacts) {
    if (!html.includes(fact)) {
      throw new Error(`${route} is missing required policy fact: ${fact}`);
    }
  }

  for (const fact of forbiddenPolicyFacts) {
    if (html.includes(fact)) {
      throw new Error(`${route} contains forbidden policy detail: ${fact}`);
    }
  }

  if (/<script[^>]+src=["']https?:\/\//i.test(html)) {
    throw new Error(`${route} unexpectedly loads an external script`);
  }
}

const socialCard = new URL('images/pongtrace/social-card.png', dist);
const socialCardStats = await stat(socialCard);
if (socialCardStats.size < 50_000) {
  throw new Error('Social card is missing or unexpectedly small');
}

const sitemap = join(dist.pathname, 'sitemap-index.xml');
await access(sitemap);

console.log(`Verified ${routes.length} localized policy pages and required public assets.`);
