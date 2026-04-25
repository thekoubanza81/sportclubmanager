import type { HttpContext } from '@adonisjs/core/http'
import Cotisation from '#models/cotisation'

export default class CotisationController {
  // GET /api/v1/clubs/:clubId/cotisations
  async index({ params, response }: HttpContext) {
    const cotisations = await Cotisation.query()
      .whereHas('saison' as any, (q) => {
        q.where('club_id', params.clubId)
      })
      .preload('utilisateur')
      .preload('saison')
    return response.ok(cotisations)
  }

  // GET /api/v1/cotisations/:id
  async show({ params, response }: HttpContext) {
    const cotisation = await Cotisation.find(params.id)
    if (!cotisation) return response.notFound({ error: 'Cotisation non trouvée' })
    return response.ok(cotisation)
  }

  // POST /api/v1/cotisations — Créer une cotisation
  async store({ request, response }: HttpContext) {
    const data = request.only([
      'userId', 'saisonId', 'montant', 'methode', 'dateDebutPaiement'
    ])
    const cotisation = await Cotisation.create({
      userId: data.userId,
      saisonId: data.saisonId,
      montant: data.montant,
      statut: 'en_attente',
      methode: data.methode || null,
      dateDebutPaiement: data.dateDebutPaiement || null,
    })
    return response.created(cotisation)
  }

  // PATCH /api/v1/cotisations/:id — Mettre à jour le statut
  async update({ params, request, response }: HttpContext) {
    const cotisation = await Cotisation.find(params.id)
    if (!cotisation) return response.notFound({ error: 'Cotisation non trouvée' })
    const data = request.only([
      'statut', 'methode', 'dernierPaiement', 'montant'
    ])
    cotisation.merge(data)
    await cotisation.save()
    return response.ok(cotisation)
  }

  // DELETE /api/v1/cotisations/:id
  async destroy({ params, response }: HttpContext) {
    const cotisation = await Cotisation.find(params.id)
    if (!cotisation) return response.notFound({ error: 'Cotisation non trouvée' })
    await cotisation.delete()
    return response.ok({ message: 'Cotisation supprimée' })
  }
}