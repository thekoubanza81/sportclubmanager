import type { HttpContext } from '@adonisjs/core/http'
import Club from '#models/club'

export default class ClubController {
  // GET /api/v1/clubs — Liste tous les clubs
  async index({ response }: HttpContext) {
    const clubs = await Club.all()
    return response.ok(clubs)
  }

  // GET /api/v1/clubs/:id — Détail d'un club
  async show({ params, response }: HttpContext) {
    const club = await Club.find(params.id)
    if (!club) return response.notFound({ error: 'Club non trouvé' })
    return response.ok(club)
  }

  // POST /api/v1/clubs — Créer un club
async store({ request, response }: HttpContext) {
  const data = request.only([
    'clubNomLong', 'clubNomCourt', 'description', 'creationDate'
  ])

  // Vérifier si un club avec le même nom existe déjà
  const existingClub = await Club.findBy('club_nom_long', data.clubNomLong)
  if (existingClub) {
    return response.conflict({
      error: 'Un club avec ce nom existe déjà'
    })
  }

    const club = await Club.create({
      clubNomLong: data.clubNomLong,
      clubNomCourt: data.clubNomCourt,
      description: data.description || null,
      creationDate: data.creationDate,
      statut: 'actif',
    })
    return response.created(club)
  }
  // PUT /api/v1/clubs/:id — Modifier un club
  async update({ params, request, response }: HttpContext) {
    const club = await Club.find(params.id)
    if (!club) return response.notFound({ error: 'Club non trouvé' })
    const data = request.only([
      'clubNomLong', 'clubNomCourt', 'description', 'statut'
    ])
    club.merge(data)
    await club.save()
    return response.ok(club)
  }

  // DELETE /api/v1/clubs/:id — Supprimer un club
  async destroy({ params, response }: HttpContext) {
    const club = await Club.find(params.id)
    if (!club) return response.notFound({ error: 'Club non trouvé' })
    await club.delete()
    return response.ok({ message: 'Club supprimé' })
  }
}