# Sport Club Manager

Plateforme complète de gestion de clubs sportifs — API REST AdonisJS, dashboard web et application mobile React Native.

> **Changement de domaine** : toutes les URLs hardcodées pointent actuellement vers `http://localhost:3333` (API) et `http://localhost:5173` (front). Avant tout déploiement, effectuez un remplacement global dans les fichiers listés à la section [Configuration du domaine](#-configuration-du-domaine).

---

## Sommaire

- [Stack technique](#stack-technique)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Variables d'environnement](#variables-denvironnement)
- [Base de données](#base-de-données)
- [Lancer le projet](#lancer-le-projet)
- [Configuration du domaine](#configuration-du-domaine)
- [Structure du projet](#structure-du-projet)
- [API — Endpoints](#api--endpoints)
- [Rôles et accès](#rôles-et-accès)
- [Application mobile](#application-mobile)
- [Dashboard web](#dashboard-web)

---

## Stack technique

| Couche | Technologie |
|---|---|
| API | AdonisJS 6 (TypeScript) |
| ORM | Lucid (AdonisJS) |
| Base de données | MySQL |
| Auth | Bearer token — `DbAccessTokensProvider` |
| Front web | HTML / Tailwind CSS / JS vanilla |
| Application mobile | React Native / Expo |
| Upload | Multipart — stockage local `public/uploads/photos/` |

---

## Prérequis

- Node.js >= 20
- npm >= 9
- MySQL >= 8
- (Mobile) Expo CLI, iOS Simulator ou Android Emulator

---

## Installation

### Backend (API)

```bash
git clone <repo>
cd <repo>

# Installer les dépendances
npm install

# Copier et renseigner les variables d'environnement
cp .env.example .env
```

### Application mobile

```bash
cd mobile/   # ou le dossier contenant App.tsx
npm install
```

---

## Variables d'environnement

Fichier `.env` à la racine du projet backend :

```env
# Environnement
NODE_ENV=development
PORT=3333
HOST=localhost
LOG_LEVEL=info

# Sécurité
APP_KEY=<générer avec `node ace generate:key`>
APP_URL=http://localhost:3333

# Session
SESSION_DRIVER=cookie

# Base de données
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_DATABASE=sport_club_manager
```

---

## Base de données

### Migrations (dans l'ordre d'exécution)

```
1761885935168 — create_users_table
1768620764696 — create_access_tokens_table
1776072553628 — create_clubs_table
1776072563934 — create_roles_table
1776072565000 — create_utilisateurs_table
1776072565500 — create_utilisateurs_club_table
1776072567000 — create_user_roles_table
1776072567100 — create_saisons_table        (ancienne)
1776072567400 — create_categories_table
1776072567500 — create_coach_categories_table
1776072568000 — create_joueur_categories_table
1776072568100 — create_evenements_table
1776072568200 — create_annonces_table
1776072568300 — create_presences_table
1776072568450 — create_notifications_table
1776072568455 — create_cotisations_table
1776072579106 — create_saisons_table        (version finale, remplace l'ancienne)
1776072579200 — add_created_by_to_clubs_table
1776072580000 — add_montant_cotisation_to_categories_table
```

### Commandes

```bash
# Lancer toutes les migrations
node ace migration:run

# Seeder les rôles de base (7 rôles : super_admin, president, admin_club, tresorier, coach, joueur, parent)
node ace db:seed --files database/seeders/role_seeder.ts

# Rollback
node ace migration:rollback
```

---

## Lancer le projet

```bash
# API en développement (hot reload)
node ace serve --watch

# Build production
node ace build
node bin/server.js
```

L'API est accessible sur `http://localhost:3333`.

Le dashboard web et la landing page sont des fichiers HTML statiques servis par n'importe quel serveur HTTP (ex. Vite, Nginx, ou ouverts directement dans le navigateur pour le développement local).

---

## Configuration du domaine

Avant tout déploiement en production, remplacez les URLs locales dans les fichiers suivants :

| Fichier | Variable / occurrence | Valeur actuelle | À remplacer par |
|---|---|---|---|
| `src/services/api.ts` | `API_URL` | `http://localhost:3333/api/v1` | `https://api.votre-domaine.fr/api/v1` |
| `src/pages/auth.html` | `API_URL` (script inline) | `http://localhost:3333/api/v1` | `https://api.votre-domaine.fr/api/v1` |
| `src/pages/auth.html` | Lien retour accueil | `/` | `https://votre-domaine.fr` |
| `src/pages/dashboard.html` | `API_URL` (script inline) | `http://localhost:3333/api/v1` | `https://api.votre-domaine.fr/api/v1` |
| `src/pages/dashboard.html` | Redirections auth | `/src/pages/auth.html` | `https://votre-domaine.fr/auth` |
| `src/pages/login.js` | `API_URL` | `http://localhost:3333/api/v1` | `https://api.votre-domaine.fr/api/v1` |
| `index.html` | Liens CTA | `src/pages/auth.html` | `https://votre-domaine.fr/auth` |
| `.env` | `APP_URL` | `http://localhost:3333` | `https://api.votre-domaine.fr` |

Pour le CORS, mettez également à jour la configuration dans `config/cors.ts` pour autoriser votre domaine frontend.

---

## Structure du projet

```
├── app/
│   ├── controllers/
│   │   ├── auth_controller.ts          — Inscription, connexion, profil
│   │   ├── club_controller.ts          — CRUD clubs + stats
│   │   ├── utilisateur_controller.ts   — CRUD membres, rôles, catégories
│   │   ├── evenement_controller.ts     — CRUD événements
│   │   ├── presence_controller.ts      — Présences + rappels
│   │   ├── cotisation_controller.ts    — CRUD cotisations + stats
│   │   ├── notification_controller.ts  — Notifications + rappels
│   │   ├── saison_controller.ts        — CRUD saisons
│   │   ├── categorie_controller.ts     — CRUD catégories + montant
│   │   ├── role_controller.ts          — CRUD rôles
│   │   ├── annonce_controller.ts       — Lecture annonces
│   │   └── upload_controller.ts        — Upload photo de profil
│   ├── models/
│   │   ├── utilisateur.ts
│   │   ├── club.ts
│   │   ├── saison.ts
│   │   ├── categorie.ts
│   │   ├── evenement.ts
│   │   ├── presence.ts
│   │   ├── cotisation.ts
│   │   ├── notification.ts
│   │   ├── annonce.ts
│   │   ├── role.ts
│   │   ├── user_role.ts
│   │   ├── utilisateur_club.ts
│   │   └── joueur_categorie.ts
│   └── middleware/
│       ├── auth_middleware.ts
│       ├── check_role_middleware.ts
│       ├── silent_auth_middleware.ts
│       ├── force_json_response_middleware.ts
│       └── container_bindings_middleware.ts
├── database/
│   ├── migrations/
│   └── seeders/
│       └── role_seeder.ts
├── start/
│   ├── routes.ts
│   └── kernel.ts
├── public/
│   └── uploads/photos/          — Photos de profil uploadées
├── src/                         — Front web (HTML/JS/CSS)
│   └── pages/
│       ├── auth.html
│       └── dashboard.html
├── index.html                   — Landing page
└── mobile/                      — Application React Native
    ├── App.tsx
    ├── src/
    │   ├── screens/
    │   │   ├── AuthScreen.tsx
    │   │   ├── HomeScreen.tsx
    │   │   ├── EvenementsScreen.tsx
    │   │   ├── EvenementDetailScreen.tsx
    │   │   ├── MembresScreen.tsx
    │   │   ├── CotisationsScreen.tsx
    │   │   ├── NotificationsScreen.tsx
    │   │   └── ProfilScreen.tsx
    │   ├── navigation/
    │   │   └── AppNavigator.tsx
    │   ├── hooks/
    │   │   └── useAuth.tsx
    │   ├── services/
    │   │   └── api.ts
    │   ├── components/
    │   │   └── UI.tsx
    │   └── constants/
    │       └── theme.ts
```

---

## API — Endpoints

### Auth (public)

| Méthode | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/auth/register` | Créer un compte |
| POST | `/api/v1/auth/login` | Se connecter |

### Auth (authentifié)

| Méthode | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/auth/logout` | Se déconnecter |
| PATCH | `/api/v1/auth/password` | Changer le mot de passe |
| PATCH | `/api/v1/auth/profil` | Mettre à jour le profil |
| PATCH | `/api/v1/auth/desactiver` | Désactiver le compte |

### Clubs

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/clubs` | Lister les clubs |
| GET | `/api/v1/clubs/:id` | Détail d'un club |
| POST | `/api/v1/clubs` | Créer un club *(president)* |
| PUT | `/api/v1/clubs/:id` | Modifier un club *(president, admin_club)* |
| DELETE | `/api/v1/clubs/:id` | Supprimer un club *(president)* |
| GET | `/api/v1/clubs/:clubId/stats` | Stats du club *(president, admin_club, tresorier)* |
| GET | `/api/v1/clubs/:clubId/utilisateurs` | Membres du club |
| POST | `/api/v1/clubs/:clubId/utilisateurs` | Ajouter un membre *(president, admin_club)* |

### Utilisateurs

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/utilisateurs/:id` | Détail d'un membre |
| PUT | `/api/v1/utilisateurs/:id` | Modifier un membre *(president, admin_club)* |
| DELETE | `/api/v1/utilisateurs/:id` | Désactiver un membre *(president, admin_club)* |
| POST | `/api/v1/utilisateurs/:id/roles` | Assigner un rôle *(president, admin_club)* |
| POST | `/api/v1/utilisateurs/:id/categories` | Affecter / retirer une catégorie *(president, admin_club)* |

### Saisons

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/saisons?clubId=` | Lister les saisons |
| GET | `/api/v1/saisons/:id` | Détail d'une saison |
| POST | `/api/v1/saisons` | Créer une saison *(super_admin)* |
| PUT | `/api/v1/saisons/:id` | Modifier une saison *(super_admin)* |
| DELETE | `/api/v1/saisons/:id` | Supprimer une saison *(super_admin)* |

### Catégories

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/categories?clubId=` | Lister les catégories |
| GET | `/api/v1/categories/:id` | Détail d'une catégorie |
| POST | `/api/v1/categories` | Créer une catégorie *(super_admin)* |
| PUT | `/api/v1/categories/:id` | Modifier une catégorie *(super_admin)* |
| PATCH | `/api/v1/categories/:id/montant` | Définir le montant de cotisation *(president, admin_club, tresorier)* |
| DELETE | `/api/v1/categories/:id` | Supprimer une catégorie *(super_admin)* |

### Rôles

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/roles` | Lister les rôles *(super_admin)* |
| POST | `/api/v1/roles` | Créer un rôle *(super_admin)* |
| PUT | `/api/v1/roles/:id` | Modifier un rôle *(super_admin)* |
| DELETE | `/api/v1/roles/:id` | Supprimer un rôle *(super_admin)* |

### Événements

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/evenements?clubId=&categorieId=` | Lister les événements |
| GET | `/api/v1/evenements/:id` | Détail d'un événement |
| POST | `/api/v1/evenements` | Créer un événement *(president, admin_club, coach)* |
| PUT | `/api/v1/evenements/:id` | Modifier un événement *(president, admin_club, coach)* |
| DELETE | `/api/v1/evenements/:id` | Annuler un événement *(president, admin_club, coach)* |

### Présences

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/evenements/:evenementId/presences` | Présences d'un événement |
| POST | `/api/v1/presences` | Créer une présence *(president, admin_club, coach)* |
| PATCH | `/api/v1/presences/:id` | Mettre à jour une présence |
| PATCH | `/api/v1/presences/:id/confirmer` | Confirmer (joueur, parent, coach) |
| POST | `/api/v1/evenements/:evenementId/rappel` | Envoyer rappel *(coach, admin_club, president)* |

### Cotisations

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/cotisations?saisonId=` | Lister les cotisations *(president, admin_club, tresorier)* |
| GET | `/api/v1/cotisations/:id` | Détail d'une cotisation |
| POST | `/api/v1/cotisations` | Créer une cotisation *(president, admin_club, tresorier)* |
| PATCH | `/api/v1/cotisations/:id` | Modifier une cotisation *(president, admin_club, tresorier)* |
| DELETE | `/api/v1/cotisations/:id` | Supprimer *(president, admin_club)* |
| POST | `/api/v1/cotisations/rappel` | Rappel cotisation *(tresorier, president, admin_club)* |
| GET | `/api/v1/cotisations/stats/categories` | Stats par catégorie |

### Notifications

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/utilisateurs/:userId/notifications` | Notifications d'un utilisateur |
| PATCH | `/api/v1/notifications/:id/lue` | Marquer comme lue |

### Annonces

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/annonces?clubId=&categorieId=` | Lister les annonces actives |

### Upload

| Méthode | Endpoint | Description |
|---|---|---|
| POST | `/api/v1/upload/photo` | Uploader une photo de profil |

### Stats (super admin)

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/api/v1/stats/plateforme` | Statistiques globales *(super_admin)* |

---

## Rôles et accès

| Slug | Libellé | Accès principal |
|---|---|---|
| `super_admin` | Super Administrateur | Gestion globale (saisons, catégories génériques, rôles, stats plateforme) |
| `president` | Président | Tout sur son club |
| `admin_club` | Administrateur Club | Membres, événements, cotisations |
| `tresorier` | Trésorier | Cotisations |
| `coach` | Coach | Événements et présences de ses catégories |
| `joueur` | Joueur | Consulter et confirmer sa présence, voir sa cotisation |
| `parent` | Parent | Idem joueur pour son enfant |

Un compte créé sans affectation à un club est en attente de rôle. Il peut se connecter mais n'a accès à aucune fonctionnalité tant qu'un président ne lui attribue pas un rôle.

---

## Application mobile

### Démarrage

```bash
cd mobile/
npm install
npx expo start
```

Changer le domaine API dans `src/services/api.ts` :
```typescript
const API_URL = 'https://api.votre-domaine.fr/api/v1'
```

### Authentification persistante

La session est stockée dans `expo-secure-store` (token, user, rôles). Le token expire après 7 jours ; en cas d'expiration (HTTP 401), la session est effacée et l'utilisateur redirigé vers l'écran de connexion.

### Navigation conditionnelle

Les onglets Membres et Cotisations s'affichent selon le rôle de l'utilisateur connecté. L'accès aux fonctionnalités de gestion (présences complètes, rappels) est également conditionné au rôle.

---

## Dashboard web

Le dashboard est un fichier HTML autonome. Il lit le token dans `localStorage` et redirige vers la page d'auth si absent.

Ouvrir en développement :
```bash
# Depuis la racine du projet, lancer un serveur statique
npx serve .
# Ou avec Vite si configuré
npm run dev
```

La navigation est filtrée côté client selon le rôle stocké dans `localStorage.roles`.

> **Note de sécurité** : le filtrage client est uniquement cosmétique. La vraie protection est assurée par le middleware `check_role_middleware` côté API.
