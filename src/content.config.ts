import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Un fichier par projet et par langue : src/content/projets/fr/olist.md, src/content/projets/en/olist.md
const projets = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projets' }),
  schema: z.object({
    order: z.number(),
    cat: z.enum(['A', 'B', 'C', 'R']),
    offer: z.string(),
    title: z.string(),
    summary: z.string(),
    stack: z.string(),
    shot: z.string(),
    image: z.string().optional(),      // ex. /projets/olist.png (dans public/projets/)
    heroImage: z.string().optional(),
    kpis: z.array(z.tuple([z.number(), z.number(), z.string(), z.string(), z.string()])).default([]), // [valeur, décimales, préfixe, suffixe, libellé] : chiffres animés de la carte
    caseOffer: z.string(),
    question: z.string(),
    lede: z.string(),
    rebuild: z.boolean().default(false),
    stages: z.array(z.number().int().min(0).max(2)).length(4), // 0 non couverte, 1 réalisée, 2 prévue
    meta: z.array(z.tuple([z.string(), z.string()])),
    hero: z.string(),
    links: z.array(z.tuple([z.string(), z.string()])).default([]), // [libellé, URL] : dépôt, démo, rapport, notebook
    results: z.array(z.string()),
    ctaTitle: z.string(),
    pme: z.string(),
    ctaLabel: z.string(),
    cta: z.enum(['services', 'contact']),
  }),
});

export const collections = { projets };
