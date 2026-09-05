import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const privacy = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/privacy' }),
  schema: z.object({
    appId: z.string(),
    appName: z.string(),
    locale: z.string(),
    routeLocale: z.string(),
    htmlLang: z.string(),
    languageLabel: z.string(),
    pageTitle: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    effectiveDate: z.string(),
    version: z.string(),
    contentsLabel: z.string(),
    ui: z.object({
      skipToContent: z.string(),
      policyMetadata: z.string(),
      privacyHighlights: z.string(),
      flowKicker: z.string(),
      flowTitle: z.string(),
      languageMenu: z.string(),
      availableLanguages: z.string(),
      homepage: z.string(),
      backToTop: z.string(),
    }),
    highlights: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
    flow: z.array(
      z.object({
        step: z.string(),
        title: z.string(),
        body: z.string(),
      }),
    ),
    sections: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        body: z.string(),
      }),
    ),
    websiteHosting: z.object({
      title: z.string(),
      body: z.string(),
    }),
    footerNote: z.string(),
  }),
});

const support = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/data/support' }),
  schema: z.object({
    appId: z.string(),
    appName: z.string(),
    locale: z.string(),
    routeLocale: z.string(),
    htmlLang: z.string(),
    languageLabel: z.string(),
    pageTitle: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    contact: z.object({
      title: z.string(),
      body: z.string(),
      emailLabel: z.string(),
      emailAddress: z.email(),
    }),
    faqTitle: z.string(),
    faqs: z.array(
      z.object({
        id: z.string(),
        question: z.string(),
        answer: z.string(),
      }),
    ),
    privacy: z.object({
      title: z.string(),
      body: z.string(),
      linkLabel: z.string(),
    }),
    contactGuidance: z.object({
      title: z.string(),
      body: z.string(),
    }),
    ui: z.object({
      skipToContent: z.string(),
      languageMenu: z.string(),
      availableLanguages: z.string(),
      homepage: z.string(),
    }),
    footerNote: z.string(),
  }),
});

export const collections = { privacy, support };
