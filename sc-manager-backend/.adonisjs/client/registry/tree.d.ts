/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    register: typeof routes['auth.register']
    login: typeof routes['auth.login']
    logout: typeof routes['auth.logout']
  }
  club: {
    index: typeof routes['club.index']
    show: typeof routes['club.show']
    store: typeof routes['club.store']
    update: typeof routes['club.update']
    destroy: typeof routes['club.destroy']
  }
  saison: {
    index: typeof routes['saison.index']
    store: typeof routes['saison.store']
    show: typeof routes['saison.show']
    update: typeof routes['saison.update']
    destroy: typeof routes['saison.destroy']
  }
  categorie: {
    index: typeof routes['categorie.index']
    store: typeof routes['categorie.store']
    show: typeof routes['categorie.show']
    update: typeof routes['categorie.update']
    destroy: typeof routes['categorie.destroy']
  }
  utilisateur: {
    index: typeof routes['utilisateur.index']
    show: typeof routes['utilisateur.show']
    update: typeof routes['utilisateur.update']
    destroy: typeof routes['utilisateur.destroy']
    assignRole: typeof routes['utilisateur.assign_role']
  }
  evenement: {
    index: typeof routes['evenement.index']
    store: typeof routes['evenement.store']
    show: typeof routes['evenement.show']
    update: typeof routes['evenement.update']
    destroy: typeof routes['evenement.destroy']
  }
  presence: {
    index: typeof routes['presence.index']
    update: typeof routes['presence.update']
  }
  notification: {
    sendRappel: typeof routes['notification.send_rappel']
    index: typeof routes['notification.index']
    markAsRead: typeof routes['notification.mark_as_read']
  }
  cotisation: {
    index: typeof routes['cotisation.index']
    show: typeof routes['cotisation.show']
    store: typeof routes['cotisation.store']
    update: typeof routes['cotisation.update']
    destroy: typeof routes['cotisation.destroy']
  }
}
