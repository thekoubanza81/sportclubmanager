/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'auth.register': {
    methods: ["POST"],
    pattern: '/api/v1/auth/register',
    tokens: [{"old":"/api/v1/auth/register","type":0,"val":"api","end":""},{"old":"/api/v1/auth/register","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/register","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/register","type":0,"val":"register","end":""}],
    types: placeholder as Registry['auth.register']['types'],
  },
  'auth.login': {
    methods: ["POST"],
    pattern: '/api/v1/auth/login',
    tokens: [{"old":"/api/v1/auth/login","type":0,"val":"api","end":""},{"old":"/api/v1/auth/login","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/login","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['auth.login']['types'],
  },
  'auth.logout': {
    methods: ["POST"],
    pattern: '/api/v1/auth/logout',
    tokens: [{"old":"/api/v1/auth/logout","type":0,"val":"api","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"v1","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"auth","end":""},{"old":"/api/v1/auth/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['auth.logout']['types'],
  },
  'club.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/clubs',
    tokens: [{"old":"/api/v1/clubs","type":0,"val":"api","end":""},{"old":"/api/v1/clubs","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs","type":0,"val":"clubs","end":""}],
    types: placeholder as Registry['club.index']['types'],
  },
  'club.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/clubs/:id',
    tokens: [{"old":"/api/v1/clubs/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clubs/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs/:id","type":0,"val":"clubs","end":""},{"old":"/api/v1/clubs/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['club.show']['types'],
  },
  'club.store': {
    methods: ["POST"],
    pattern: '/api/v1/clubs',
    tokens: [{"old":"/api/v1/clubs","type":0,"val":"api","end":""},{"old":"/api/v1/clubs","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs","type":0,"val":"clubs","end":""}],
    types: placeholder as Registry['club.store']['types'],
  },
  'club.update': {
    methods: ["PUT"],
    pattern: '/api/v1/clubs/:id',
    tokens: [{"old":"/api/v1/clubs/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clubs/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs/:id","type":0,"val":"clubs","end":""},{"old":"/api/v1/clubs/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['club.update']['types'],
  },
  'club.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/clubs/:id',
    tokens: [{"old":"/api/v1/clubs/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clubs/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs/:id","type":0,"val":"clubs","end":""},{"old":"/api/v1/clubs/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['club.destroy']['types'],
  },
  'saison.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/saisons/:clubId/saisons',
    tokens: [{"old":"/api/v1/saisons/:clubId/saisons","type":0,"val":"api","end":""},{"old":"/api/v1/saisons/:clubId/saisons","type":0,"val":"v1","end":""},{"old":"/api/v1/saisons/:clubId/saisons","type":0,"val":"saisons","end":""},{"old":"/api/v1/saisons/:clubId/saisons","type":1,"val":"clubId","end":""},{"old":"/api/v1/saisons/:clubId/saisons","type":0,"val":"saisons","end":""}],
    types: placeholder as Registry['saison.index']['types'],
  },
  'saison.store': {
    methods: ["POST"],
    pattern: '/api/v1/saisons/:clubId/saisons',
    tokens: [{"old":"/api/v1/saisons/:clubId/saisons","type":0,"val":"api","end":""},{"old":"/api/v1/saisons/:clubId/saisons","type":0,"val":"v1","end":""},{"old":"/api/v1/saisons/:clubId/saisons","type":0,"val":"saisons","end":""},{"old":"/api/v1/saisons/:clubId/saisons","type":1,"val":"clubId","end":""},{"old":"/api/v1/saisons/:clubId/saisons","type":0,"val":"saisons","end":""}],
    types: placeholder as Registry['saison.store']['types'],
  },
  'saison.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/saisons/:id',
    tokens: [{"old":"/api/v1/saisons/:id","type":0,"val":"api","end":""},{"old":"/api/v1/saisons/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/saisons/:id","type":0,"val":"saisons","end":""},{"old":"/api/v1/saisons/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['saison.show']['types'],
  },
  'saison.update': {
    methods: ["PUT"],
    pattern: '/api/v1/saisons/:id',
    tokens: [{"old":"/api/v1/saisons/:id","type":0,"val":"api","end":""},{"old":"/api/v1/saisons/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/saisons/:id","type":0,"val":"saisons","end":""},{"old":"/api/v1/saisons/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['saison.update']['types'],
  },
  'saison.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/saisons/:id',
    tokens: [{"old":"/api/v1/saisons/:id","type":0,"val":"api","end":""},{"old":"/api/v1/saisons/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/saisons/:id","type":0,"val":"saisons","end":""},{"old":"/api/v1/saisons/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['saison.destroy']['types'],
  },
  'categorie.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/clubs/:clubId/categories',
    tokens: [{"old":"/api/v1/clubs/:clubId/categories","type":0,"val":"api","end":""},{"old":"/api/v1/clubs/:clubId/categories","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs/:clubId/categories","type":0,"val":"clubs","end":""},{"old":"/api/v1/clubs/:clubId/categories","type":1,"val":"clubId","end":""},{"old":"/api/v1/clubs/:clubId/categories","type":0,"val":"categories","end":""}],
    types: placeholder as Registry['categorie.index']['types'],
  },
  'categorie.store': {
    methods: ["POST"],
    pattern: '/api/v1/clubs/:clubId/categories',
    tokens: [{"old":"/api/v1/clubs/:clubId/categories","type":0,"val":"api","end":""},{"old":"/api/v1/clubs/:clubId/categories","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs/:clubId/categories","type":0,"val":"clubs","end":""},{"old":"/api/v1/clubs/:clubId/categories","type":1,"val":"clubId","end":""},{"old":"/api/v1/clubs/:clubId/categories","type":0,"val":"categories","end":""}],
    types: placeholder as Registry['categorie.store']['types'],
  },
  'categorie.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/clubs/categories/:id',
    tokens: [{"old":"/api/v1/clubs/categories/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clubs/categories/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs/categories/:id","type":0,"val":"clubs","end":""},{"old":"/api/v1/clubs/categories/:id","type":0,"val":"categories","end":""},{"old":"/api/v1/clubs/categories/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorie.show']['types'],
  },
  'categorie.update': {
    methods: ["PUT"],
    pattern: '/api/v1/clubs/categories/:id',
    tokens: [{"old":"/api/v1/clubs/categories/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clubs/categories/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs/categories/:id","type":0,"val":"clubs","end":""},{"old":"/api/v1/clubs/categories/:id","type":0,"val":"categories","end":""},{"old":"/api/v1/clubs/categories/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorie.update']['types'],
  },
  'categorie.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/clubs/categories/:id',
    tokens: [{"old":"/api/v1/clubs/categories/:id","type":0,"val":"api","end":""},{"old":"/api/v1/clubs/categories/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/clubs/categories/:id","type":0,"val":"clubs","end":""},{"old":"/api/v1/clubs/categories/:id","type":0,"val":"categories","end":""},{"old":"/api/v1/clubs/categories/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['categorie.destroy']['types'],
  },
  'utilisateur.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/utilisateurs/:clubId/utilisateurs',
    tokens: [{"old":"/api/v1/utilisateurs/:clubId/utilisateurs","type":0,"val":"api","end":""},{"old":"/api/v1/utilisateurs/:clubId/utilisateurs","type":0,"val":"v1","end":""},{"old":"/api/v1/utilisateurs/:clubId/utilisateurs","type":0,"val":"utilisateurs","end":""},{"old":"/api/v1/utilisateurs/:clubId/utilisateurs","type":1,"val":"clubId","end":""},{"old":"/api/v1/utilisateurs/:clubId/utilisateurs","type":0,"val":"utilisateurs","end":""}],
    types: placeholder as Registry['utilisateur.index']['types'],
  },
  'utilisateur.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/utilisateurs/:id',
    tokens: [{"old":"/api/v1/utilisateurs/:id","type":0,"val":"api","end":""},{"old":"/api/v1/utilisateurs/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/utilisateurs/:id","type":0,"val":"utilisateurs","end":""},{"old":"/api/v1/utilisateurs/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['utilisateur.show']['types'],
  },
  'utilisateur.update': {
    methods: ["PUT"],
    pattern: '/api/v1/utilisateurs/:id',
    tokens: [{"old":"/api/v1/utilisateurs/:id","type":0,"val":"api","end":""},{"old":"/api/v1/utilisateurs/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/utilisateurs/:id","type":0,"val":"utilisateurs","end":""},{"old":"/api/v1/utilisateurs/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['utilisateur.update']['types'],
  },
  'utilisateur.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/utilisateurs/:id',
    tokens: [{"old":"/api/v1/utilisateurs/:id","type":0,"val":"api","end":""},{"old":"/api/v1/utilisateurs/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/utilisateurs/:id","type":0,"val":"utilisateurs","end":""},{"old":"/api/v1/utilisateurs/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['utilisateur.destroy']['types'],
  },
  'utilisateur.assign_role': {
    methods: ["POST"],
    pattern: '/api/v1/utilisateurs/:id/roles',
    tokens: [{"old":"/api/v1/utilisateurs/:id/roles","type":0,"val":"api","end":""},{"old":"/api/v1/utilisateurs/:id/roles","type":0,"val":"v1","end":""},{"old":"/api/v1/utilisateurs/:id/roles","type":0,"val":"utilisateurs","end":""},{"old":"/api/v1/utilisateurs/:id/roles","type":1,"val":"id","end":""},{"old":"/api/v1/utilisateurs/:id/roles","type":0,"val":"roles","end":""}],
    types: placeholder as Registry['utilisateur.assign_role']['types'],
  },
  'evenement.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/evenements/:categorieId/evenements',
    tokens: [{"old":"/api/v1/evenements/:categorieId/evenements","type":0,"val":"api","end":""},{"old":"/api/v1/evenements/:categorieId/evenements","type":0,"val":"v1","end":""},{"old":"/api/v1/evenements/:categorieId/evenements","type":0,"val":"evenements","end":""},{"old":"/api/v1/evenements/:categorieId/evenements","type":1,"val":"categorieId","end":""},{"old":"/api/v1/evenements/:categorieId/evenements","type":0,"val":"evenements","end":""}],
    types: placeholder as Registry['evenement.index']['types'],
  },
  'evenement.store': {
    methods: ["POST"],
    pattern: '/api/v1/evenements/:categorieId/evenements',
    tokens: [{"old":"/api/v1/evenements/:categorieId/evenements","type":0,"val":"api","end":""},{"old":"/api/v1/evenements/:categorieId/evenements","type":0,"val":"v1","end":""},{"old":"/api/v1/evenements/:categorieId/evenements","type":0,"val":"evenements","end":""},{"old":"/api/v1/evenements/:categorieId/evenements","type":1,"val":"categorieId","end":""},{"old":"/api/v1/evenements/:categorieId/evenements","type":0,"val":"evenements","end":""}],
    types: placeholder as Registry['evenement.store']['types'],
  },
  'evenement.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/evenements/:id',
    tokens: [{"old":"/api/v1/evenements/:id","type":0,"val":"api","end":""},{"old":"/api/v1/evenements/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/evenements/:id","type":0,"val":"evenements","end":""},{"old":"/api/v1/evenements/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['evenement.show']['types'],
  },
  'evenement.update': {
    methods: ["PUT"],
    pattern: '/api/v1/evenements/:id',
    tokens: [{"old":"/api/v1/evenements/:id","type":0,"val":"api","end":""},{"old":"/api/v1/evenements/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/evenements/:id","type":0,"val":"evenements","end":""},{"old":"/api/v1/evenements/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['evenement.update']['types'],
  },
  'evenement.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/evenements/:id',
    tokens: [{"old":"/api/v1/evenements/:id","type":0,"val":"api","end":""},{"old":"/api/v1/evenements/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/evenements/:id","type":0,"val":"evenements","end":""},{"old":"/api/v1/evenements/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['evenement.destroy']['types'],
  },
  'presence.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/presences/:evenementId/presences',
    tokens: [{"old":"/api/v1/presences/:evenementId/presences","type":0,"val":"api","end":""},{"old":"/api/v1/presences/:evenementId/presences","type":0,"val":"v1","end":""},{"old":"/api/v1/presences/:evenementId/presences","type":0,"val":"presences","end":""},{"old":"/api/v1/presences/:evenementId/presences","type":1,"val":"evenementId","end":""},{"old":"/api/v1/presences/:evenementId/presences","type":0,"val":"presences","end":""}],
    types: placeholder as Registry['presence.index']['types'],
  },
  'presence.update': {
    methods: ["PATCH"],
    pattern: '/api/v1/presences/:id',
    tokens: [{"old":"/api/v1/presences/:id","type":0,"val":"api","end":""},{"old":"/api/v1/presences/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/presences/:id","type":0,"val":"presences","end":""},{"old":"/api/v1/presences/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['presence.update']['types'],
  },
  'notification.send_rappel': {
    methods: ["POST"],
    pattern: '/api/v1/evenements/:evenementId/rappel',
    tokens: [{"old":"/api/v1/evenements/:evenementId/rappel","type":0,"val":"api","end":""},{"old":"/api/v1/evenements/:evenementId/rappel","type":0,"val":"v1","end":""},{"old":"/api/v1/evenements/:evenementId/rappel","type":0,"val":"evenements","end":""},{"old":"/api/v1/evenements/:evenementId/rappel","type":1,"val":"evenementId","end":""},{"old":"/api/v1/evenements/:evenementId/rappel","type":0,"val":"rappel","end":""}],
    types: placeholder as Registry['notification.send_rappel']['types'],
  },
  'notification.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/notifications/:userId/notifications',
    tokens: [{"old":"/api/v1/notifications/:userId/notifications","type":0,"val":"api","end":""},{"old":"/api/v1/notifications/:userId/notifications","type":0,"val":"v1","end":""},{"old":"/api/v1/notifications/:userId/notifications","type":0,"val":"notifications","end":""},{"old":"/api/v1/notifications/:userId/notifications","type":1,"val":"userId","end":""},{"old":"/api/v1/notifications/:userId/notifications","type":0,"val":"notifications","end":""}],
    types: placeholder as Registry['notification.index']['types'],
  },
  'notification.mark_as_read': {
    methods: ["PATCH"],
    pattern: '/api/v1/notifications/:id/lue',
    tokens: [{"old":"/api/v1/notifications/:id/lue","type":0,"val":"api","end":""},{"old":"/api/v1/notifications/:id/lue","type":0,"val":"v1","end":""},{"old":"/api/v1/notifications/:id/lue","type":0,"val":"notifications","end":""},{"old":"/api/v1/notifications/:id/lue","type":1,"val":"id","end":""},{"old":"/api/v1/notifications/:id/lue","type":0,"val":"lue","end":""}],
    types: placeholder as Registry['notification.mark_as_read']['types'],
  },
  'cotisation.index': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cotisations/:clubId/cotisations',
    tokens: [{"old":"/api/v1/cotisations/:clubId/cotisations","type":0,"val":"api","end":""},{"old":"/api/v1/cotisations/:clubId/cotisations","type":0,"val":"v1","end":""},{"old":"/api/v1/cotisations/:clubId/cotisations","type":0,"val":"cotisations","end":""},{"old":"/api/v1/cotisations/:clubId/cotisations","type":1,"val":"clubId","end":""},{"old":"/api/v1/cotisations/:clubId/cotisations","type":0,"val":"cotisations","end":""}],
    types: placeholder as Registry['cotisation.index']['types'],
  },
  'cotisation.show': {
    methods: ["GET","HEAD"],
    pattern: '/api/v1/cotisations/:id',
    tokens: [{"old":"/api/v1/cotisations/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cotisations/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cotisations/:id","type":0,"val":"cotisations","end":""},{"old":"/api/v1/cotisations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cotisation.show']['types'],
  },
  'cotisation.store': {
    methods: ["POST"],
    pattern: '/api/v1/cotisations',
    tokens: [{"old":"/api/v1/cotisations","type":0,"val":"api","end":""},{"old":"/api/v1/cotisations","type":0,"val":"v1","end":""},{"old":"/api/v1/cotisations","type":0,"val":"cotisations","end":""}],
    types: placeholder as Registry['cotisation.store']['types'],
  },
  'cotisation.update': {
    methods: ["PATCH"],
    pattern: '/api/v1/cotisations/:id',
    tokens: [{"old":"/api/v1/cotisations/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cotisations/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cotisations/:id","type":0,"val":"cotisations","end":""},{"old":"/api/v1/cotisations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cotisation.update']['types'],
  },
  'cotisation.destroy': {
    methods: ["DELETE"],
    pattern: '/api/v1/cotisations/:id',
    tokens: [{"old":"/api/v1/cotisations/:id","type":0,"val":"api","end":""},{"old":"/api/v1/cotisations/:id","type":0,"val":"v1","end":""},{"old":"/api/v1/cotisations/:id","type":0,"val":"cotisations","end":""},{"old":"/api/v1/cotisations/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['cotisation.destroy']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
