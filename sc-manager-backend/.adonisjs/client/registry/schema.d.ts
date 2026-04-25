/* eslint-disable prettier/prettier */
/// <reference path="../manifest.d.ts" />

import type { ExtractBody, ExtractErrorResponse, ExtractQuery, ExtractQueryForGet, ExtractResponse } from '@tuyau/core/types'
import type { InferInput, SimpleError } from '@vinejs/vine/types'

export type ParamValue = string | number | bigint | boolean

export interface Registry {
  'auth.register': {
    methods: ["POST"]
    pattern: '/api/v1/auth/register'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['register']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['register']>>>
    }
  }
  'auth.login': {
    methods: ["POST"]
    pattern: '/api/v1/auth/login'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['login']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['login']>>>
    }
  }
  'auth.logout': {
    methods: ["POST"]
    pattern: '/api/v1/auth/logout'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logout']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/auth_controller').default['logout']>>>
    }
  }
  'club.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/clubs'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/club_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/club_controller').default['index']>>>
    }
  }
  'club.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/clubs/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/club_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/club_controller').default['show']>>>
    }
  }
  'club.store': {
    methods: ["POST"]
    pattern: '/api/v1/clubs'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/club_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/club_controller').default['store']>>>
    }
  }
  'club.update': {
    methods: ["PUT"]
    pattern: '/api/v1/clubs/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/club_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/club_controller').default['update']>>>
    }
  }
  'club.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/clubs/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/club_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/club_controller').default['destroy']>>>
    }
  }
  'saison.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/saisons/:clubId/saisons'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { clubId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['index']>>>
    }
  }
  'saison.store': {
    methods: ["POST"]
    pattern: '/api/v1/saisons/:clubId/saisons'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { clubId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['store']>>>
    }
  }
  'saison.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/saisons/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['show']>>>
    }
  }
  'saison.update': {
    methods: ["PUT"]
    pattern: '/api/v1/saisons/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['update']>>>
    }
  }
  'saison.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/saisons/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/saison_controller').default['destroy']>>>
    }
  }
  'categorie.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/clubs/:clubId/categories'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { clubId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['index']>>>
    }
  }
  'categorie.store': {
    methods: ["POST"]
    pattern: '/api/v1/clubs/:clubId/categories'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { clubId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['store']>>>
    }
  }
  'categorie.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/clubs/categories/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['show']>>>
    }
  }
  'categorie.update': {
    methods: ["PUT"]
    pattern: '/api/v1/clubs/categories/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['update']>>>
    }
  }
  'categorie.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/clubs/categories/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/categorie_controller').default['destroy']>>>
    }
  }
  'utilisateur.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/utilisateurs/:clubId/utilisateurs'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { clubId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['index']>>>
    }
  }
  'utilisateur.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/utilisateurs/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['show']>>>
    }
  }
  'utilisateur.update': {
    methods: ["PUT"]
    pattern: '/api/v1/utilisateurs/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['update']>>>
    }
  }
  'utilisateur.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/utilisateurs/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['destroy']>>>
    }
  }
  'utilisateur.assign_role': {
    methods: ["POST"]
    pattern: '/api/v1/utilisateurs/:id/roles'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['assignRole']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/utilisateur_controller').default['assignRole']>>>
    }
  }
  'evenement.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/evenements/:categorieId/evenements'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { categorieId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['index']>>>
    }
  }
  'evenement.store': {
    methods: ["POST"]
    pattern: '/api/v1/evenements/:categorieId/evenements'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { categorieId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['store']>>>
    }
  }
  'evenement.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/evenements/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['show']>>>
    }
  }
  'evenement.update': {
    methods: ["PUT"]
    pattern: '/api/v1/evenements/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['update']>>>
    }
  }
  'evenement.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/evenements/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/evenement_controller').default['destroy']>>>
    }
  }
  'presence.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/presences/:evenementId/presences'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { evenementId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/presence_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/presence_controller').default['index']>>>
    }
  }
  'presence.update': {
    methods: ["PATCH"]
    pattern: '/api/v1/presences/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/presence_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/presence_controller').default['update']>>>
    }
  }
  'notification.send_rappel': {
    methods: ["POST"]
    pattern: '/api/v1/evenements/:evenementId/rappel'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { evenementId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/notification_controller').default['sendRappel']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/notification_controller').default['sendRappel']>>>
    }
  }
  'notification.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/notifications/:userId/notifications'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { userId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/notification_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/notification_controller').default['index']>>>
    }
  }
  'notification.mark_as_read': {
    methods: ["PATCH"]
    pattern: '/api/v1/notifications/:id/lue'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/notification_controller').default['markAsRead']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/notification_controller').default['markAsRead']>>>
    }
  }
  'cotisation.index': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/cotisations/:clubId/cotisations'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { clubId: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['index']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['index']>>>
    }
  }
  'cotisation.show': {
    methods: ["GET","HEAD"]
    pattern: '/api/v1/cotisations/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['show']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['show']>>>
    }
  }
  'cotisation.store': {
    methods: ["POST"]
    pattern: '/api/v1/cotisations'
    types: {
      body: {}
      paramsTuple: []
      params: {}
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['store']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['store']>>>
    }
  }
  'cotisation.update': {
    methods: ["PATCH"]
    pattern: '/api/v1/cotisations/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['update']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['update']>>>
    }
  }
  'cotisation.destroy': {
    methods: ["DELETE"]
    pattern: '/api/v1/cotisations/:id'
    types: {
      body: {}
      paramsTuple: [ParamValue]
      params: { id: ParamValue }
      query: {}
      response: ExtractResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['destroy']>>>
      errorResponse: ExtractErrorResponse<Awaited<ReturnType<import('#controllers/cotisation_controller').default['destroy']>>>
    }
  }
}
