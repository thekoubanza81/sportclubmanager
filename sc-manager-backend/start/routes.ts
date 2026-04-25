/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| Les routes définissent les URLs disponibles dans l'API
| et les controllers qui les gèrent
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

// ── Route de test ─────────────────────────────────────────────────────────────
router.get('/', () => {
  return { app: 'Sport Club Manager API', version: '1.0', status: 'running' }
})

router.group(() => {

  // ── AUTH publiques ────────────────────────────────────────────────────────
  router.group(() => {
    router.post('register', [() => import('#controllers/auth_controller'), 'register'])
    router.post('login',    [() => import('#controllers/auth_controller'), 'login'])
  }).prefix('auth')

  // ── Routes protégées (JWT obligatoire) ───────────────────────────────────
  router.group(() => {

    // Logout
    router.post('auth/logout', [() => import('#controllers/auth_controller'), 'logout'])

    // ── CLUBS — super_admin uniquement ──────────────────────────────────────
    router.group(() => {
      router.get('/',       [() => import('#controllers/club_controller'), 'index'])
      router.get('/:id',    [() => import('#controllers/club_controller'), 'show'])
      router.post('/',      [() => import('#controllers/club_controller'), 'store'])
      router.put('/:id',    [() => import('#controllers/club_controller'), 'update'])
      router.delete('/:id', [() => import('#controllers/club_controller'), 'destroy'])
    }).prefix('clubs')
      .use(middleware.checkRole({ roles: ['super_admin'] }))

    // ── SAISONS — president, admin_club ────────────────────────────────────
    router.group(() => {
      router.get('/:clubId/saisons',  [() => import('#controllers/saison_controller'), 'index'])
      router.post('/:clubId/saisons', [() => import('#controllers/saison_controller'), 'store'])
      router.get('/:id',              [() => import('#controllers/saison_controller'), 'show'])
      router.put('/:id',              [() => import('#controllers/saison_controller'), 'update'])
      router.delete('/:id',           [() => import('#controllers/saison_controller'), 'destroy'])
    }).prefix('saisons')
      .use(middleware.checkRole({ roles: ['super_admin', 'president', 'admin_club'] }))

    // ── CATÉGORIES — president, admin_club ─────────────────────────────────
    router.group(() => {
      router.get('/:clubId/categories',          [() => import('#controllers/categorie_controller'), 'index'])
      router.post('/:clubId/categories',         [() => import('#controllers/categorie_controller'), 'store'])
      router.get('/categories/:id',              [() => import('#controllers/categorie_controller'), 'show'])
      router.put('/categories/:id',              [() => import('#controllers/categorie_controller'), 'update'])
      router.delete('/categories/:id',           [() => import('#controllers/categorie_controller'), 'destroy'])
    }).prefix('clubs')
      .use(middleware.checkRole({ roles: ['super_admin', 'president', 'admin_club'] }))

    // ── UTILISATEURS — admin_club, president ───────────────────────────────
    router.group(() => {
      router.get('/:clubId/utilisateurs', [() => import('#controllers/utilisateur_controller'), 'index'])
      router.get('/:id',                  [() => import('#controllers/utilisateur_controller'), 'show'])
      router.put('/:id',                  [() => import('#controllers/utilisateur_controller'), 'update'])
      router.delete('/:id',               [() => import('#controllers/utilisateur_controller'), 'destroy'])
      router.post('/:id/roles',           [() => import('#controllers/utilisateur_controller'), 'assignRole'])
    }).prefix('utilisateurs')
      .use(middleware.checkRole({ roles: ['super_admin', 'president', 'admin_club'] }))

    // ── ÉVÉNEMENTS — coach, admin_club, president ──────────────────────────
    router.group(() => {
      router.get('/:categorieId/evenements',  [() => import('#controllers/evenement_controller'), 'index'])
      router.post('/:categorieId/evenements', [() => import('#controllers/evenement_controller'), 'store'])
      router.get('/:id',                      [() => import('#controllers/evenement_controller'), 'show'])
      router.put('/:id',                      [() => import('#controllers/evenement_controller'), 'update'])
      router.delete('/:id',                   [() => import('#controllers/evenement_controller'), 'destroy'])
    }).prefix('evenements')
      .use(middleware.checkRole({ roles: ['super_admin', 'president', 'admin_club', 'coach'] }))

    // ── PRÉSENCES — tous les rôles connectés ──────────────────────────────
    router.group(() => {
      router.get('/:evenementId/presences', [() => import('#controllers/presence_controller'), 'index'])
      router.patch('/:id',                  [() => import('#controllers/presence_controller'), 'update'])
    }).prefix('presences')
      .use(middleware.checkRole({ roles: ['super_admin', 'president', 'admin_club', 'coach', 'joueur', 'parent'] }))

    // ── RAPPELS — coach uniquement ─────────────────────────────────────────
    router.post('evenements/:evenementId/rappel',
      [() => import('#controllers/notification_controller'), 'sendRappel'])
      .use(middleware.checkRole({ roles: ['super_admin', 'coach'] }))

    // ── NOTIFICATIONS — tous les rôles connectés ──────────────────────────
    router.group(() => {
      router.get('/:userId/notifications', [() => import('#controllers/notification_controller'), 'index'])
      router.patch('/:id/lue',             [() => import('#controllers/notification_controller'), 'markAsRead'])
    }).prefix('notifications')
      .use(middleware.checkRole({ roles: ['super_admin', 'president', 'admin_club', 'coach', 'joueur', 'parent'] }))

    // ── COTISATIONS — tresorier, admin_club, president ────────────────────
    router.group(() => {
      router.get('/:clubId/cotisations', [() => import('#controllers/cotisation_controller'), 'index'])
      router.get('/:id',                 [() => import('#controllers/cotisation_controller'), 'show'])
      router.post('/',                   [() => import('#controllers/cotisation_controller'), 'store'])
      router.patch('/:id',               [() => import('#controllers/cotisation_controller'), 'update'])
      router.delete('/:id',              [() => import('#controllers/cotisation_controller'), 'destroy'])
    }).prefix('cotisations')
      .use(middleware.checkRole({ roles: ['super_admin', 'president', 'admin_club', 'tresorier'] }))

  }).use(middleware.auth())

}).prefix('/api/v1')