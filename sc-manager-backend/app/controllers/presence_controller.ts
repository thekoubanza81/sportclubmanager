import type { HttpContext } from '@adonisjs/core/http'
import Presence from '#models/presence'

export default class PresenceController {
  // GET /api/v1/evenements/:evenementId/presences
  async index({ params, response }: HttpContext) {
    const presences = await Presence.query()
      .where('evenement_id', params.evenementId)
      .preload('utilisateur')
    return response.ok(presences)
  }

  // PATCH /api/v1/presences/:id — Confirmer ou décliner
  async update({ params, request, response }: HttpContext) {
    const presence = await Presence.find(params.id)
    if (!presence) return response.notFound({ error: 'Présence non trouvée' })
    const data = request.only(['statut', 'motif'])
    // statut : 'confirme' ou 'absent'
    presence.statut = data.statut
    presence.motif = data.motif || null
    presence.updateTime = new Date() as any
    await presence.save()
    return response.ok(presence)
  }
}