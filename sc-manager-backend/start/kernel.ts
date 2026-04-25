/*
|--------------------------------------------------------------------------
| HTTP kernel file
|--------------------------------------------------------------------------
|
| The HTTP kernel file is used to register the middleware with the server
| or the router.
|
*/

import router from '@adonisjs/core/services/router'
import server from '@adonisjs/core/services/server'

/**
 * Gestionnaire d'erreurs global
 */
server.errorHandler(() => import('#exceptions/handler'))

/**
 * Middleware appliqués à TOUTES les requêtes HTTP
 */
server.use([
  () => import('#middleware/force_json_response_middleware'),
  () => import('#middleware/container_bindings_middleware'),
  () => import('@adonisjs/cors/cors_middleware'),
])

/**
 * Middleware appliqués uniquement aux routes enregistrées
 * Note : auth_middleware N'EST PAS ici — il sera appliqué
 * uniquement aux routes protégées via middleware.auth()
 */
router.use([
  () => import('@adonisjs/core/bodyparser_middleware'),
  () => import('@adonisjs/session/session_middleware'),
  () => import('@adonisjs/shield/shield_middleware'),
  () => import('@adonisjs/auth/initialize_auth_middleware'),
  () => import('#middleware/silent_auth_middleware'),
  // ❌ auth_middleware supprimé ici pour ne pas bloquer les routes publiques
])

/**
 * Middleware nommés — à assigner manuellement sur les routes protégées
 */
export const middleware = router.named({
  checkRole: () => import('#middleware/check_role_middleware'),
  auth: () => import('#middleware/auth_middleware'),
})
