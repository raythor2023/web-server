import { access, readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url);
const localizations = [
  '',
  'zh-hant/',
  'en/',
  'en-gb/',
  'de/',
  'ja/',
  'ko/',
];

const privacyRoutes = localizations.map((prefix) => `${prefix}privacy/pongtrace/index.html`);
const supportRoutes = localizations.map((prefix) => `${prefix}support/pongtrace/index.html`);
const poseFunityRoutes = ['privacy/posefunity/', 'support/posefunity/'].flatMap(
  (route) => [route, `en/${route}`],
);

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

for (const route of [...privacyRoutes, ...supportRoutes]) {
  const file = new URL(route, dist);
  await access(file);
  const html = await readFile(file, 'utf8');

  if (!html.includes('<link rel="canonical"')) {
    throw new Error(`${route} is missing a canonical URL`);
  }

  if (!html.includes('hreflang="x-default"')) {
    throw new Error(`${route} is missing language alternatives`);
  }

  if (/<script[^>]+src=["']https?:\/\//i.test(html)) {
    throw new Error(`${route} unexpectedly loads an external script`);
  }
}

for (const [index, route] of privacyRoutes.entries()) {
  const html = await readFile(new URL(route, dist), 'utf8');
  const prefix = localizations[index];

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

  if (!html.includes(`href="/web-server/${prefix}support/pongtrace/"`)) {
    throw new Error(`${route} is missing its localized support link`);
  }
}

for (const [index, route] of supportRoutes.entries()) {
  const html = await readFile(new URL(route, dist), 'utf8');
  const prefix = localizations[index];
  const requiredSupportFacts = [
    'PongTrace',
    'forray2023@163.com',
    'mailto:forray2023@163.com',
    'id="frequently-asked-questions"',
    `href="/web-server/${prefix}privacy/pongtrace/"`,
  ];

  for (const fact of requiredSupportFacts) {
    if (!html.includes(fact)) {
      throw new Error(`${route} is missing required support content: ${fact}`);
    }
  }

  if (html.includes('<form')) {
    throw new Error(`${route} unexpectedly contains a form`);
  }

  if (!html.includes('hreflang="x-default" href="https://raythor2023.github.io/web-server/support/pongtrace/"')) {
    throw new Error(`${route} has an incorrect x-default support URL`);
  }
}

for (const route of poseFunityRoutes) {
  const html = await readFile(new URL(`${route}index.html`, dist), 'utf8');
  const prefix = route.startsWith('en/') ? 'en/' : '';
  for (const expected of [
    'PoseFunity',
    '<link rel="canonical"',
    'hreflang="zh-Hans"',
    'hreflang="en"',
    `href="/web-server/${prefix}privacy/posefunity/"`,
    `href="/web-server/${prefix}support/posefunity/"`,
  ]) {
    if (!html.includes(expected)) throw new Error(`${route} is missing ${expected}`);
  }
  if (/<script[^>]+src=["']https?:\/\//i.test(html)) {
    throw new Error(`${route} unexpectedly loads an external script`);
  }
}

for (const locale of ['', 'en/']) {
  const privacy = await readFile(new URL(`${locale}privacy/posefunity/index.html`, dist), 'utf8');
  if (!privacy.includes('developers.google.com/admob/ios/privacy/data-disclosure')) {
    throw new Error(`${locale}PoseFunity privacy page is missing the ad disclosure`);
  }
  const support = await readFile(new URL(`${locale}support/posefunity/index.html`, dist), 'utf8');
  if (!support.includes('mailto:forray2023@163.com')) {
    throw new Error(`${locale}PoseFunity support page is missing the contact link`);
  }
}

await access(new URL('images/posefunity/app-icon.png', dist));

const socialCard = new URL('images/pongtrace/social-card.png', dist);
const socialCardStats = await stat(socialCard);
if (socialCardStats.size < 50_000) {
  throw new Error('Social card is missing or unexpectedly small');
}

const sitemap = join(dist.pathname, 'sitemap-index.xml');
await access(sitemap);

console.log(
  `Verified ${privacyRoutes.length} PongTrace privacy pages, ${supportRoutes.length} PongTrace support pages, ${poseFunityRoutes.length} PoseFunity pages, and required public assets.`,
);
