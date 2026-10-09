# visionbygmb.com

Site vitrine de Vision by GMB, construit avec Astro : un site statique, rapide et bien référencé, en français et en anglais.

## Démarrer

Prérequis : Node.js 20 ou plus récent.

    npm install
    cp .env.example .env      # puis collez votre clé Web3Forms
    npm run dev               # http://localhost:4321
    npm run build             # génère le site dans dist/
    npm run preview           # prévisualise dist/

## Structure

    public/                     fichiers servis tels quels (portrait, CV, favicon)
    src/
      content/projets/fr|en/    études de cas en Markdown, une par langue
      data/offers.json          les trois missions de la page Services
      i18n/routes.ts            URLs FR/EN, liens, lien Cal.com, liste des langues
      layouts/Base.astro        <head>, SEO, thème, en-tête et pied de page
      components/               Header, Footer, Network (réseau du hero), ProjectCard, Stages, CalEmbed
      views/                    une vue par page, avec ses textes FR et EN
      pages/                    les URLs : /, /services/, /projets/…, et /en/…
      styles/global.css         couleurs, typographie, mise en page

## Modifier un texte

- Pages : les textes sont en haut de chaque fichier de src/views/, dans les blocs fr et en.
- Études de cas : src/content/projets/fr/olist.md (et son équivalent dans en/). L'en-tête entre les --- contient les métadonnées, le reste est le récit en Markdown.
- Remplacer une capture : déposez l'image dans public/projets/, puis remplacez la ligne <figure class="ph">…</figure> par ![Description](/projets/mon-image.png).

## Ajouter un projet

1. Créez src/content/projets/fr/nouveau.md et src/content/projets/en/nouveau.md en copiant un projet existant.
2. Copiez src/pages/projets/olist.astro en nouveau.astro et remplacez fr/olist par fr/nouveau. Faites de même dans src/pages/en/projects/.

## Ajouter une langue

1. Ajoutez une ligne dans LANGS et une URL dans chaque route de src/i18n/routes.ts.
2. Ajoutez le code dans locales de astro.config.mjs.
3. Ajoutez un bloc de textes dans chaque vue, puis les pages dans src/pages/xx/.

## Animations

Tout est dans src/components/Motion.astro (script) et en fin de src/styles/global.css (styles). Le visiteur choisit le niveau avec le sélecteur « Mouvement » en bas à gauche (Aucun, Discret, Équilibré, Marqué) ; son choix est mémorisé. L'écran de chargement ne s'affiche qu'une fois par visite. Les chiffres animés des cartes projets se règlent dans le champ kpis de chaque fichier Markdown.

## Formulaire de contact

Le formulaire envoie les messages dans votre boîte mail via Web3Forms (gratuit, sans serveur). Créez une clé sur web3forms.com avec contact@visionbygmb.com, puis mettez-la dans .env (en local) et dans les variables d'environnement de DigitalOcean (PUBLIC_WEB3FORMS_KEY).

## Déployer sur DigitalOcean

Option recommandée : App Platform, en site statique (gratuit jusqu'à 3 sites).

1. Poussez ce dossier dans un dépôt GitHub, par exemple github.com/eagueyemaryboudier-cpu/visionbygmb.
2. DigitalOcean → Create → App → choisissez le dépôt.
3. Type de ressource : Static Site. Build command : npm run build. Output directory : dist.
4. Région : Amsterdam ou Frankfurt (données en Europe).
5. Variable d'environnement : PUBLIC_WEB3FORMS_KEY, disponible au moment du build.
6. Settings → Domains → ajoutez visionbygmb.com et www.visionbygmb.com, puis suivez les instructions DNS. Le HTTPS est automatique.

Chaque git push sur main redéploie le site.

Alternative sur votre Droplet : lancez npm run build, copiez dist/ dans /var/www/visionbygmb, servez-le avec Nginx (root /var/www/visionbygmb; try_files $uri $uri/ =404;) et activez le HTTPS avec Certbot.

## Plus tard

- Assistant multilingue : API FastAPI sur le Droplet, appelée depuis un composant du site.
- Mesure d'audience sans cookies : Plausible ou Umami.
