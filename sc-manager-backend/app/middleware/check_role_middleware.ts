import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import UserRole from '#models/user_role'

export default class CheckRoleMiddleware {
  // Ce middleware vérifie si l'utilisateur connecté a le bon rôle
  // pour accéder à une route donnée
  // Exemple d'utilisation sur une route : .use(middleware.checkRole(['super_admin', 'president']))
  async handle(
    { auth, response }: HttpContext,
    next: NextFn,
    options: { roles: string[] }
  ) {
    // Récupérer l'utilisateur connecté
    const utilisateur = auth.user!

    // Récupérer ses rôles depuis la base de données
    const userRoles = await UserRole.query()
      .where('user_id', utilisateur.userId)
      .preload('role')

    // Extraire les slugs des rôles ex: ['super_admin', 'coach']
    const slugs = userRoles.map((ur) => ur.role.slug)

    // Vérifier si l'utilisateur a au moins un des rôles requis
    const hasRole = options.roles.some((role) => slugs.includes(role))

    if (!hasRole) {
      return response.forbidden({
        error: 'Accès refusé — vous n\'avez pas les droits nécessaires',
      })
    }

    // L'utilisateur a le bon rôle — on continue vers la route
    await next()
  }
}