export type Lang = 'fr' | 'en';
export type Alt = Record<Lang, string>;

export const routes: Record<string, Alt> = {
  home: { fr: '/', en: '/en/' },
  services: { fr: '/services/', en: '/en/services/' },
  projects: { fr: '/projets/', en: '/en/projects/' },
  about: { fr: '/a-propos/', en: '/en/about/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal/' },
};

export const caseUrl = (lang: Lang, slug: string) => (lang === 'fr' ? '/projets/' : '/en/projects/') + slug + '/';

// Ajouter une langue : une ligne ici, une entrée dans chaque route, puis les textes des vues.
export const LANGS = [
  { code: 'fr', native: 'Français', fr: 'Français', en: 'French' },
  { code: 'en', native: 'English', fr: 'Anglais', en: 'English' },
] as const;

export const CAL_URL = 'https://cal.com/el-hadji-gueye-mary-boudier-vlzgnh/appel-decouverte';
export const LINKS = {
  email: 'contact@visionbygmb.com',
  linkedin: 'https://linkedin.com/in/elhadji-gmb',
  malt: 'https://www.malt.fr/profile/elhadjigueyemaryboudier',
  github: 'https://github.com/eagueyemaryboudier-cpu',
};
