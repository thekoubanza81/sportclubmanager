import type { HttpContext } from '@adonisjs/core/http'
import Notification from '#models/notification'
import Presence from '#models/presence'

export default class NotificationController {
  // GET /api/v1/utilisateurs/:userId/notifications
  async index({ params, response }: HttpContext) {
    const notifications = await Notification.query()
      .where('user_id', params.userId)
      .orderBy('created_at', 'desc')
    return response.ok(notifications)
  }

  // POST /api/v1/evenements/:evenementId/rappel
  // Rappel manuel envoyé par le coach
  async sendRappel({ params, response }: HttpContext) {
    // Trouver tous les joueurs avec présence en_attente
    const presencesEnAttente = await Presence.query()
      .where('evenement_id', params.evenementId)
      .where('statut', 'en_attente')

    for (const presence of presencesEnAttente) {
      await Notification.create({
        evenementId: params.evenementId,
        userId: presence.userId,
        type: 'rappel_manuel',
        statut: 'en_attente',
      })
    }

    return response.ok({
      message: `${presencesEnAttente.length} rappel(s) envoyé(s)`,
    })
  }

  // PATCH /api/v1/notifications/:id/lue — Marquer comme lue
  async markAsRead({ params, response }: HttpContext) {
    const notification = await Notification.find(params.id)
    if (!notification) return response.notFound({ error: 'Notification non trouvée' })
    notification.statut = 'envoye'
    await notification.save()
    return response.ok(notification)
  }
}