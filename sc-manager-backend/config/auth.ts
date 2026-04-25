import { defineConfig } from '@adonisjs/auth'
import { sessionGuard, sessionUserProvider } from '@adonisjs/auth/session'
import { tokensGuard, tokensUserProvider } from '@adonisjs/auth/access_tokens'
import type { InferAuthenticators, InferAuthEvents, Authenticators } from '@adonisjs/auth/types'

const authConfig = defineConfig({
  // Guard utilisé par défaut quand on appelle auth.use()
  default: 'api',

  guards: {
    // Guard API — authentification par token JWT
    // Utilise notre model Utilisateur et notre table auth_access_tokens
    api: tokensGuard({
      provider: tokensUserProvider({
        tokens: 'accessTokens',
        // On pointe vers notre model Utilisateur au lieu de User
        model: () => import('#models/utilisateur'),
      }),
    }),

    // Guard Web — authentification par session (navigateur)
    web: sessionGuard({
      useRememberMeTokens: false,
      provider: sessionUserProvider({
        // On pointe vers notre model Utilisateur au lieu de User
        model: () => import('#models/utilisateur'),
      }),
    }),
  },
})

export default authConfig

declare module '@adonisjs/auth/types' {
  export interface Authenticators extends InferAuthenticators<typeof authConfig> {}
}
declare module '@adonisjs/core/types' {
  interface EventsList extends InferAuthEvents<Authenticators> {}
}