import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'
import Utilisateur from '#models/utilisateur'
import UserRole from '#models/user_role'

export default class AuthController {
  /**
   * POST /api/v1/auth/register
   * Création d'un nouvel utilisateur
   */
  async register({ request, response }: HttpContext) {
    try {
      const data = request.only([
        'nom', 'prenom', 'email', 'password', 'telephone', 'dateDeNaissance'
      ])

      // Vérifier si l'email existe déjà
      const existingUser = await Utilisateur.findBy('email', data.email)
      if (existingUser) {
        return response.conflict({
          error: 'Un utilisateur existe déjà avec cet email'
        })
      }

      // Créer l'utilisateur
      // Le mot de passe est haché automatiquement par le hook beforeSave du model
      const user = await Utilisateur.create({
        nom: data.nom,
        prenom: data.prenom,
        email: data.email,
        password: data.password,
        telephone: data.telephone || null,
        dateDeNaissance: data.dateDeNaissance
          ? DateTime.fromISO(data.dateDeNaissance)
          : null,
        statut: 'actif',
        clubId: null,
      })

      // Assigner le rôle super_admin par défaut
      await UserRole.create({
        userId: user.userId,
        roleId: 1,
        clubId: null,
      })

      // Générer le token JWT
      const token = await Utilisateur.accessTokens.create(user)

      return response.created({
        message: 'Utilisateur créé avec succès',
        token: token.value!.release(),
        type: 'Bearer',
        user: {
          id: user.userId,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
        }
      })
    } catch (error) {
      console.error('Erreur Register:', error)
      return response.badRequest({
        error: 'Erreur lors de la création',
        details: error.message,
      })
    }
  }

  /**
   * POST /api/v1/auth/login
   * Connexion utilisateur
   */
  async login({ request, response }: HttpContext) {
  try {
    const { email, password } = request.only(['email', 'password'])

    // Ajout temporaire pour déboguer
    console.log('Tentative de login avec:', email)

    const user = await Utilisateur.verifyCredentials(email, password)

    console.log('Utilisateur trouvé:', user.userId)

    const token = await Utilisateur.accessTokens.create(user)

    const userRoles = await UserRole
      .query()
      .where('user_id', user.userId)
      .preload('role')

    const roles = userRoles.map((ur) => ur.role.slug)

    return response.ok({
      message: 'Connexion réussie',
      token: token.value!.release(),
      type: 'Bearer',
      user: {
        id: user.userId,
        nom: user.nom,
        prenom: user.prenom,
        email: user.email,
        roles,
      }
    })
  } catch (error) {
    // Affiche l'erreur exacte dans le terminal
    console.error('Erreur Login complète:', error)
    return response.unauthorized({
      error: 'Email ou mot de passe incorrect'
    })
  }
}

  /**
   * POST /api/v1/auth/logout
   * Déconnexion utilisateur
   */
  async logout({ auth, response }: HttpContext) {
    try {
      const user = auth.user!
      await Utilisateur.accessTokens.delete(
        user,
        user.currentAccessToken.identifier
      )
      return response.ok({ message: 'Déconnexion réussie' })
    } catch (error) {
      return response.unauthorized({ error: 'Utilisateur non authentifié' })
    }
  }
}