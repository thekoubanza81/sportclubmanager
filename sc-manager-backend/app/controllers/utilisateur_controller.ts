import type { HttpContext } from '@adonisjs/core/http'
import Utilisateur from '#models/utilisateur'
import UserRole from '#models/user_role'
import Role from '#models/role'

export default class UtilisateurController {
  // GET /api/v1/clubs/:clubId/utilisateurs
  async index({ params, response }: HttpContext) {
    const utilisateurs = await Utilisateur.query()
      .where('club_id', params.clubId)
    return response.ok(utilisateurs)
  }

  // GET /api/v1/utilisateurs/:id
  async show({ params, response }: HttpContext) {
    const utilisateur = await Utilisateur.find(params.id)
    if (!utilisateur) return response.notFound({ error: 'Utilisateur non trouvé' })
    // Charger ses rôles
    const userRoles = await UserRole.query()
      .where('user_id', utilisateur.userId)
      .preload('role')
    const roles = userRoles.map((ur) => ur.role.slug)
    return response.ok({ ...utilisateur.serialize(), roles })
  }

  // PUT /api/v1/utilisateurs/:id
  async update({ params, request, response }: HttpContext) {
    const utilisateur = await Utilisateur.find(params.id)
    if (!utilisateur) return response.notFound({ error: 'Utilisateur non trouvé' })
    const data = request.only(['nom', 'prenom', 'telephone', 'statut'])
    utilisateur.merge(data)
    await utilisateur.save()
    return response.ok(utilisateur)
  }

  // DELETE /api/v1/utilisateurs/:id
  async destroy({ params, response }: HttpContext) {
    const utilisateur = await Utilisateur.find(params.id)
    if (!utilisateur) return response.notFound({ error: 'Utilisateur non trouvé' })
    await utilisateur.delete()
    return response.ok({ message: 'Utilisateur supprimé' })
  }

  // POST /api/v1/utilisateurs/:id/roles — Assigner un rôle
  async assignRole({ params, request, response }: HttpContext) {
    const { roleSlug, clubId } = request.only(['roleSlug', 'clubId'])
    const role = await Role.findBy('slug', roleSlug)
    if (!role) return response.notFound({ error: 'Rôle non trouvé' })
    await UserRole.updateOrCreate(
      { userId: params.id, roleId: role.roleId, clubId: clubId || null },
      { userId: params.id, roleId: role.roleId, clubId: clubId || null }
    )
    return response.ok({ message: 'Rôle assigné avec succès' })
  }
}