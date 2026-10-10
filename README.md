# Vision by GMB — Portfolio

**Portfolio bilingue français / anglais · Data analyse · Data science · IA**

[Découvrir le site → visionbygmb.com](https://visionbygmb.com)

Ce dépôt contient le code source du site portfolio **Vision by GMB**. Il présente des projets, leur contexte, les méthodes utilisées et leurs résultats, ainsi que les services proposés et les moyens de contact.

Le site est construit avec **Astro** et généré en pages statiques. Les études de cas sont rédigées en **Markdown**, avec une version française et une version anglaise.

## Projets présentés

- **Olist** : étude de données e-commerce avec Python, SQL et Power BI.
- **Analyse d’avis clients** : analyse multilingue des sentiments et des thèmes, avec filtres et visualisations.
- **Will They Wake Up** : projet de data science autour de données EEG.
- **Iphigen** : présentation d’une application et de ses fonctionnalités.

Les descriptions, captures et liens vers les projets sont accessibles depuis [la page Projets](https://visionbygmb.com/projets/). Ce dépôt héberge le site de présentation ; les liens vers les autres projets figurent dans leurs études de cas.

## Technologies

| Usage | Technologie |
|---|---|
| Génération du site statique | Astro 5 |
| Composants et interactions | Astro, TypeScript / JavaScript |
| Études de cas | Markdown et collections de contenu Astro |
| Mise en page | CSS |
| Sitemap | `@astrojs/sitemap` |
| Formulaire de contact | Web3Forms |
| Prise de rendez-vous | Cal.com |
| Hébergement et déploiement | DigitalOcean App Platform |
| Versionnement | Git et GitHub |

## Fonctionnalités

- Navigation en français et en anglais.
- Pages de présentation, services, projets et contact.
- Études de cas avec vignettes, indicateurs et illustrations.
- Thème clair ou sombre et niveau d’animation réglable.
- Mise en page adaptée aux différentes tailles d’écran.
- Formulaire de contact et réservation d’un rendez-vous.

## Installation locale

Prérequis : **Node.js compatible avec Astro 5**, **npm** et **Git**.

Dans un terminal, notamment PowerShell sous Windows :

```powershell
git clone https://github.com/eagueyemaryboudier-cpu/visionbygmb-portfolio.git
cd visionbygmb-portfolio
npm install
npm run dev
```

Ouvrir l’adresse indiquée dans le terminal, généralement `http://localhost:4321`.

### Commandes disponibles

| Commande | Fonction |
|---|---|
| `npm install` | Installer les dépendances |
| `npm run dev` | Lancer le serveur de développement |
| `npm run build` | Générer le site statique dans `dist/` |
| `npm run preview` | Prévisualiser le site après un build |

### Configurer le formulaire de contact

La navigation et le build peuvent être testés sans configurer le formulaire. Pour envoyer des messages depuis une installation personnelle, créer un fichier `.env` à la racine et renseigner **sa propre clé d’accès Web3Forms** :

```dotenv
PUBLIC_WEB3FORMS_KEY=VOTRE_CLE_WEB3FORMS
```

Redémarrer le serveur de développement après une modification de cette variable.

Le fichier `.env` est exclu du suivi Git. La clé Web3Forms est insérée dans le formulaire HTML lors du build : elle est donc visible côté navigateur. Ne pas utiliser une variable préfixée `PUBLIC_` pour un mot de passe ou un jeton confidentiel.

## Structure du projet

```text
public/
  cv/                   CV
  projets/              Captures et illustrations des projets
  favicon.svg           Icône du site
  og.png                Image de partage
  robots.txt            Instructions pour les robots
src/
  assets/               Images traitées par Astro
  components/           Composants réutilisables et animations
  content/projets/
    fr/                 Études de cas en français
    en/                 Études de cas en anglais
  content.config.ts     Schéma des collections de contenu
  data/                 Données de présentation des services
  i18n/                 Routes et liens FR/EN
  layouts/              Structure commune des pages
  pages/                Routes françaises et anglaises
  styles/               Styles du site
  views/                Contenu et présentation des pages
astro.config.mjs         Configuration Astro et sitemap
package.json             Dépendances et commandes
tsconfig.json            Configuration TypeScript
CHANGELOG.md             Historique des versions
```

## Modifier le contenu

- **Études de cas** : modifier les fichiers Markdown dans `src/content/projets/fr/` et `src/content/projets/en/`.
- **Textes des pages** : modifier les blocs de traduction dans `src/views/`.
- **Images des projets** : ajouter les fichiers dans `public/projets/` et mettre à jour leurs références.
- **Navigation et liens** : consulter `src/i18n/routes.ts`.
- **Styles** : modifier `src/styles/global.css`.

Pour ajouter un projet, créer ses deux fiches Markdown et ses pages de routage en prenant un projet existant comme modèle. Vérifier ensuite le résultat avec `npm run build` et `npm run preview`.

## Déploiement sur DigitalOcean

Le site est hébergé sur **DigitalOcean App Platform**, avec la configuration suivante :

| Paramètre | Valeur |
|---|---|
| Dépôt source | `eagueyemaryboudier-cpu/visionbygmb-portfolio` |
| Branche | `main` |
| Type de composant | Static Site |
| Dossier source | `/` |
| Commande de build | `npm run build` |
| Dossier de sortie | `dist` |
| Déploiement automatique | Activé |
| Domaine | [visionbygmb.com](https://visionbygmb.com) |

La variable `PUBLIC_WEB3FORMS_KEY` est configurée dans DigitalOcean et disponible **au moment du build**. Chaque push sur `main` déclenche un nouveau déploiement ; son état se consulte dans l’onglet **Activity** de l’application.

Les dossiers `node_modules/`, `dist/` et `.astro/`, ainsi que le fichier `.env`, ne sont pas versionnés.

## Contact

Pour découvrir les projets ou échanger sur une mission : [visionbygmb.com/contact/](https://visionbygmb.com/contact/).

L’historique des évolutions du site est disponible dans [CHANGELOG.md](CHANGELOG.md).
