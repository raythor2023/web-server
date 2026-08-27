export const SITE = {
  name: 'Raythor',
  productName: 'PongTrace',
  supportEmail: 'forray2023@163.com',
  description: 'Official privacy information for PongTrace.',
} as const;

export const DEFAULT_LOCALE = 'zh-Hans';

export const LOCALES = [
  { code: 'zh-Hans', route: '', htmlLang: 'zh-Hans', label: '简体中文', shortLabel: '简中' },
  { code: 'zh-Hant', route: 'zh-hant', htmlLang: 'zh-Hant', label: '繁體中文', shortLabel: '繁中' },
  { code: 'en', route: 'en', htmlLang: 'en-US', label: 'English (US)', shortLabel: 'EN' },
  { code: 'en-GB', route: 'en-gb', htmlLang: 'en-GB', label: 'English (UK)', shortLabel: 'EN-GB' },
  { code: 'de', route: 'de', htmlLang: 'de', label: 'Deutsch', shortLabel: 'DE' },
  { code: 'ja', route: 'ja', htmlLang: 'ja', label: '日本語', shortLabel: '日本語' },
  { code: 'ko', route: 'ko', htmlLang: 'ko', label: '한국어', shortLabel: '한국어' },
] as const;

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}

export function privacyPath(locale: string): string {
  const localeConfig = LOCALES.find((candidate) => candidate.code === locale);
  const localePrefix = localeConfig?.route ? `/${localeConfig.route}` : '';
  return withBase(`${localePrefix}/privacy/pongtrace/`);
}
