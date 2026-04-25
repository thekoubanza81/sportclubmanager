import type { HttpContext } from '@adonisjs/core/http'
import Saison from '#models/saison'

export default class SaisonController {
  // GET /api/v1/clubs/:clubId/saisons
  async index({ params, response }: HttpContext) {
    const saisons = await Saison.query().where('club_id', params.clubId)
    return response.ok(saisons)
  }

  // GET /api/v1/saisons/:id
  async show({ params, response }: HttpContext) {
    const saison = await Saison.find(params.id)
    if (!saison) return response.notFound({ error: 'Saison non trouvée' })
    return response.ok(saison)
  }

  // POST /api/v1/clubs/:clubId/saisons
  async store({ params, request, response }: HttpContext) {
    const data = request.only(['libelle', 'dateDebut', 'dateFin'])
    const saison = await Saison.create({
      clubId: params.clubId,
      libelle: data.libelle,
      dateDebut: data.dateDebut,
      dateFin: data.dateFin,
      statut: 'a_venir',
    })
    return response.created(saison)
  }

  // PUT /api/v1/saisons/:id
  async update({ params, request, response }: HttpContext) {
    const saison = await Saison.find(params.id)
    if (!saison) return response.notFound({ error: 'Saison non trouvée' })
    const data = request.only(['libelle', 'dateDebut', 'dateFin', 'statut'])
    saison.merge(data)
    await saison.save()
    return response.ok(saison)
  }

  // DELETE /api/v1/saisons/:id
  async destroy({ params, response }: HttpContext) {
    const saison = await Saison.find(params.id)
    if (!saison) return response.notFound({ error: 'Saison non trouvée' })
    await saison.delete()
    return response.ok({ message: 'Saison supprimée' })
  }
}