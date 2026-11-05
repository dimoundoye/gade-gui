# Gade Gui : site vitrine (frontend)

Refonte du site de Gade Gui, groupe agro-industriel sénégalais (aviculture, élevage, transformation).

**Stack** : Vite 8, React 19, TypeScript 7, Tailwind CSS 4, React Router 8, icônes Lucide, police Archivo (auto-hébergée).

**Charte (v2, passe « frontend-design »)** : couleurs tirées des matières de Gade Gui (bleu des poulaillers `#12295A`,
vert du logo `#1F7A3A`, jaune d'œuf `#F5B51B`, blanc chaux `#EFF2EE`), une seule famille typographique (Archivo,
titres en largeur étendue). Une seule animation automatique : le plateau de 30 œufs de l'accueil
(`src/components/EggTray.tsx`). Pas de surtitres, de libellés en capitales ni de flèches dans les boutons.

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # vérification TypeScript + build de production dans dist/
```

## Où modifier quoi

| Besoin | Fichier |
| --- | --- |
| Téléphones, e-mail, adresse, WhatsApp, réseaux sociaux, lien boutique | `src/data/site.ts` |
| Textes, chiffres clés, activités, produits, histoire, partenaires, actualités | `src/data/content.ts` |
| Couleurs et polices de la charte | `src/index.css` (bloc `@theme`) |
| Pages | `src/pages/` |
| Photos | `public/images/` |

Les contenus sont centralisés dans `src/data/` : on peut mettre à jour le site sans toucher aux pages.

## Pages

Accueil, Le Groupe, Activités (+ une page par activité : aviculture, élevage, transformation), Produits,
Engagements, Actualités, Contact, Mentions légales, page 404.

## Sources des informations

Chaque chiffre affiché est sourcé (communiqué Proparco du 7 novembre 2025, vidéo Proparco de juin 2021,
Billionaires.Africa, Seneweb) ou repris de l'ancien site. Les liens sont dans `sources` (`src/data/content.ts`).

## Photos

- `equipe-gadegui.webp` et `degue-ji.png` : photos fournies (Gade Gui).
- Les autres : Unsplash, licence gratuite pour un usage commercial. Elles sont provisoires, en attendant un
  shooting professionnel des fermes, des équipes et des produits.
- Ne pas reprendre d'images trouvées sur Google sans l'accord de leur auteur.

## À fournir par le client avant la mise en ligne

Rechercher `TODO client` dans `src/` pour la liste complète :

- logo officiel en SVG (le logo actuel du site est provisoire) ;
- adresse officielle (l'ancien site mélange « Dakar » et « Touba ») et 3e numéro de téléphone (incomplet) ;
- numéro WhatsApp Business, liens des réseaux sociaux, lien de la boutique en ligne ;
- raison sociale, NINEA, RCCM, hébergeur et direction de la publication (page Mentions légales) ;
- équipe dirigeante, formats des produits, détails du projet « Une Famille Une Vache » ;
- contenus des anciens articles (opération Tabaski, crowdfunding, ferme avicole Gade Gui II…).

## Formulaire de contact

Sans backend, le formulaire ouvre la messagerie avec le message prérempli. Pour envoyer les messages
directement, créer un fichier `.env` avec l'URL de l'API (dossier `backend/`) :

```bash
VITE_CONTACT_ENDPOINT=https://api.exemple.com/contact
```

L'API reçoit en POST un JSON `{ nom, email, telephone, profil, message, consentement }`.

## Mise en ligne

Le site est une application monopage : l'hébergeur doit renvoyer `index.html` pour toutes les routes
(ex. Netlify : fichier `_redirects` avec `/* /index.html 200`). Pour un meilleur référencement, prévoir
un pré-rendu des pages (génération statique) avant la mise en production.
