import type { HttpContext } from '@adonisjs/core/http'
import Evenement from '#models/evenement'
import Presence from '#models/presence'
import Notification from '#models/notification'
import Utilisateur from '#models/utilisateur'

export default class EvenementController {
  // GET /api/v1/categories/:categorieId/evenements
  async index({ params, response }: HttpContext) {
    const evenements = await Evenement.query()
      .where('categorie_id', params.categorieId)
      .orderBy('date_heure', 'asc')
    return response.ok(evenements)
  }

  // GET /api/v1/evenements/:id
  async show({ params, response }: HttpContext) {
    const evenement = await Evenement.find(params.id)
    if (!evenement) return response.notFound({ error: 'Événement non trouvé' })
    return response.ok(evenement)
  }

  // POST /api/v1/categories/:categorieId/evenements
  async store({ params, request, response }: HttpContext) {
    const data = request.only([
      'clubId', 'saisonId', 'type', 'titre',
      'dateHeure', 'lieu', 'description',
      'adversaire', 'estDomicile', 'competition'
    ])

    const evenement = await Evenement.create({
      clubId: data.clubId,
      categorieId: params.categorieId,
      saisonId: data.saisonId,
      type: data.type,
      titre: data.titre,
      dateHeure: data.dateHeure,
      lieu: data.lieu || null,
      description: data.description || null,
      adversaire: data.adversaire || null,
      estDomicile: data.estDomicile ?? null,
      competition: data.competition || null,
    })

    // Créer automatiquement une présence "en_attente" pour chaque joueur
    // de la catégorie
    const joueurs = await Utilisateur.query()
      .whereHas('userRoles' as any, (q) => {
        q.where('club_id', data.clubId)
      })

    for (const joueur of joueurs) {
      await Presence.create({
        evenementId: evenement.evenementId,
        userId: joueur.userId,
        statut: 'en_attente',
      })
      // Créer une notification de création d'événement
      await Notification.create({
        evenementId: evenement.evenementId,
        userId: joueur.userId,
        type: 'creation_evenement',
        statut: 'en_attente',
      })
    }

    return response.created(evenement)
  }

  // PUT /api/v1/evenements/:id — Modifier (dont saisir le score après match)
  async update({ params, request, response }: HttpContext) {
    const evenement = await Evenement.find(params.id)
    if (!evenement) return response.notFound({ error: 'Événement non trouvé' })
    const data = request.only([
      'titre', 'dateHeure', 'lieu', 'description',
      'adversaire', 'estDomicile', 'scoreNous',
      'scoreAdversaire', 'competition'
    ])
    evenement.merge(data)
    await evenement.save()
    return response.ok(evenement)
  }

  // DELETE /api/v1/evenements/:id
  async destroy({ params, response }: HttpContext) {
    const evenement = await Evenement.find(params.id)
    if (!evenement) return response.notFound({ error: 'Événement non trouvé' })
    await evenement.delete()
    return response.ok({ message: 'Événement supprimé' })
  }
}